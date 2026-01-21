import os
import json
import logging
from pathlib import Path
from typing import Optional
from datetime import datetime

import instructor
from anthropic import Anthropic
from dotenv import load_dotenv
from rich.console import Console
from pydantic import BaseModel

from models import ContentItem, BlogOutput, SocialOutput, ProcessingStatus

# Load environment variables
load_dotenv()

console = Console()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("transform")

PROCESSED_RAW_DIR = Path("scripts/content-pipeline/processed/raw")
PROCESSED_TRANSFORMED_DIR = Path("scripts/content-pipeline/processed/transformed")
PROMPTS_DIR = Path("scripts/content-pipeline/config/prompts")

def load_prompt(prompt_name: str) -> str:
    path = PROMPTS_DIR / prompt_name
    if not path.exists():
        raise FileNotFoundError(f"Prompt file not found: {path}")
    return path.read_text(encoding="utf-8")

def get_client():
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        console.print("[red]Error: ANTHROPIC_API_KEY not found in environment variables[/red]")
        return None
    
    return instructor.from_anthropic(Anthropic(api_key=api_key))

def transform_blog_post(client, item: ContentItem) -> Optional[BlogOutput]:
    """Generates the main blog post content."""
    console.print(f"Generating blog post for: [bold]{item.title}[/bold]...")
    
    system_prompt = load_prompt("blog_transform.md")
    
    try:
        # Create a tailored prompt with the source content
        user_message = f"""
        Source Title: {item.title}
        Source Author: {item.author}
        Source Date: {item.publish_date}
        
        Source Content:
        {item.raw_content[:50000]} # Truncate to avoid context limits if extremely large, though Sonnet has 200k
        """
        
        resp = client.chat.completions.create(
            model="claude-3-sonnet-20240229", # Or latest available
            max_tokens=4096,
            response_model=BlogOutput,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ],
        )
        return resp
    except Exception as e:
        console.print(f"[red]Error generating blog post: {e}[/red]")
        return None

def generate_social_content(client, blog_output: BlogOutput) -> Optional[SocialOutput]:
    """Generates Instagram and TikTok content based on the generated blog post."""
    console.print("Generating social media content...")
    
    # We combine both generation tasks into one LLM call or two? 
    # The models are separate in the PRD prompts, but we can combine them into one SocialOutput model 
    # if we merge the prompts or call sequentially. 
    # The `SocialOutput` model in `models.py` has fields for both.
    # Let's do two calls to be precise with the prompts we defined, or merge them.
    # To keep it simple and robust, let's do one call if we can fit it, but we have two distinct prompts.
    # Actually, `SocialOutput` combines them. Let's make a combined prompt or do two calls and merge.
    # Doing two calls allows us to use the specific personas defined in the prompts (Social Manager vs Creative Director).
    
    # 1. Instagram
    insta_prompt = load_prompt("instagram_generate.md")
    tiktok_prompt = load_prompt("tiktok_generate.md")
    
    blog_context = f"""
    Blog Title: {blog_output.title_options[0]}
    Blog Content:
    {blog_output.full_draft}
    """
    
    try:
        # Instagram
        # We need a partial model for just Instagram fields if we want to use response_model strictly,
        # or we can ask for the full SocialOutput but tell it to ignore tiktok fields for now?
        # Better: Define temporary Pydantic models for the sub-tasks or just use the full one and fill it incrementally.
        # Let's define simple inner classes or just use dynamic execution.
        # Actually, let's just make two calls and construct the SocialOutput manually.
        
        class InstagramPartial(BaseModel):
            short_caption: str
            long_caption: str
            carousel_slides: list[str]
            hashtags: list[str]

        class TikTokPartial(BaseModel):
            script_content: str
            on_screen_text: list[str]
            estimated_duration: str

        # Generate Instagram
        insta_resp = client.chat.completions.create(
            model="claude-3-haiku-20240307", # Haiku is enough for social
            max_tokens=2048,
            response_model=InstagramPartial,
            messages=[
                {"role": "system", "content": insta_prompt},
                {"role": "user", "content": blog_context}
            ],
        )
        
        # Generate TikTok
        tiktok_resp = client.chat.completions.create(
            model="claude-3-haiku-20240307",
            max_tokens=2048,
            response_model=TikTokPartial,
            messages=[
                {"role": "system", "content": tiktok_prompt},
                {"role": "user", "content": blog_context}
            ],
        )
        
        return SocialOutput(
            short_caption=insta_resp.short_caption,
            long_caption=insta_resp.long_caption,
            carousel_slides=insta_resp.carousel_slides,
            hashtags=insta_resp.hashtags,
            tiktok_script=tiktok_resp.script_content,
            tiktok_on_screen_text=tiktok_resp.on_screen_text
        )

    except Exception as e:
        console.print(f"[red]Error generating social content: {e}[/red]")
        return None

def run_transform():
    client = get_client()
    if not client:
        return

    PROCESSED_TRANSFORMED_DIR.mkdir(parents=True, exist_ok=True)
    
    # Find items that are INGESTED but not TRANSFORMED
    # We look in raw, check if they exist in transformed (or status check)
    
    raw_files = list(PROCESSED_RAW_DIR.glob("*.json"))
    console.print(f"Found {len(raw_files)} raw items.")
    
    for file_path in raw_files:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                item = ContentItem(**data)
            
            # Check if already transformed
            transformed_path = PROCESSED_TRANSFORMED_DIR / file_path.name
            if transformed_path.exists():
                with open(transformed_path, "r", encoding="utf-8") as f:
                    existing = ContentItem(**json.load(f))
                    if existing.status == ProcessingStatus.TRANSFORMED:
                        continue # Skip already done
            
            if item.status != ProcessingStatus.INGESTED:
                continue

            console.rule(f"Processing: {item.title}")
            
            # 1. Blog Generation
            blog_output = transform_blog_post(client, item)
            if not blog_output:
                console.print("[yellow]Skipping due to blog generation failure[/yellow]")
                continue
                
            item.blog_content = blog_output
            
            # 2. Social Generation
            social_output = generate_social_content(client, blog_output)
            if social_output:
                item.social_content = social_output
            else:
                console.print("[yellow]Warning: Social content generation failed, proceeding with just blog[/yellow]")

            # 3. Update Status and Save
            item.status = ProcessingStatus.TRANSFORMED
            item.updated_at = datetime.now()
            
            with open(transformed_path, "w", encoding="utf-8") as f:
                f.write(item.model_dump_json(indent=2))
                
            console.print(f"[green]Successfully transformed:[/green] {item.title}")
            
        except Exception as e:
            console.print(f"[red]Failed to process {file_path.name}: {e}[/red]")

if __name__ == "__main__":
    run_transform()
