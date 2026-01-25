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
from usage_tracker import track_usage, is_within_budget
from image_gen import generate_featured_image
from slugify import slugify

# Load environment variables
load_dotenv()

console = Console()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("transform")

BASE_DIR = Path(__file__).parent
PROCESSED_RAW_DIR = BASE_DIR / "processed" / "raw"
PROCESSED_TRANSFORMED_DIR = BASE_DIR / "processed" / "transformed"
PROMPTS_DIR = BASE_DIR / "config" / "prompts"

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
        forced_pillar_info = f"\n        Target Content Pillar: {item.metadata.get('forced_pillar')}" if item.metadata.get('forced_pillar') else ""
        
        user_message = f"""
        Source Title: {item.title}
        Source Author: {item.author}
        Source Date: {item.publish_date}
        {forced_pillar_info}
        
        Source Content:
        {item.raw_content[:50000]} # Truncate to avoid context limits
        """
        
        resp = client.chat.completions.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=4096,
            response_model=BlogOutput,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ],
        )
        
        # Track usage
        try:
            tokens_in = resp._raw_response.usage.input_tokens
            tokens_out = resp._raw_response.usage.output_tokens
            track_usage(tokens_in, tokens_out)
        except:
            pass
            
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
        
        # Track usage (both calls)
        try:
            tokens_in = insta_resp._raw_response.usage.input_tokens + tiktok_resp._raw_response.usage.input_tokens
            tokens_out = insta_resp._raw_response.usage.output_tokens + tiktok_resp._raw_response.usage.output_tokens
            track_usage(tokens_in, tokens_out)
        except:
            pass

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

def run_voice_check(item: ContentItem):
    """Scans for banned words and jargon without explanation."""
    if not item.blog_content:
        return
        
    banned_words = [
        "revolutionary", "game-changing", "mind-blowing", 
        "scary", "landscape", "unprecedented", "gamechanger",
        "insane", "magic", "miracle"
    ]
    
    warnings = []
    content_lower = item.blog_content.full_draft.lower()
    
    # Check for banned words
    found_banned = [w for w in banned_words if w in content_lower]
    for w in found_banned:
        warnings.append(f"Banned word found: '{w}'")
        
    # Simple jargon check (looking for complex words that might need explanation)
    # This is a placeholder for a more sophisticated check
    jargon_candidates = ["parameter count", "quantization", "tokenization", "transformer architecture"]
    for j in jargon_candidates:
        if j in content_lower and "means" not in content_lower and "is" not in content_lower:
            # Very loose heuristic: check if jargon exists but 'means' or 'is' (definitions) are absent
            # In a real tool, we might use LLM to check if explained.
            pass # Skipping for now to avoid false positives, just implementing banned words as per PRD
            
    if warnings:
        console.print(f"[yellow]Voice Check Warnings for {item.title}:[/yellow]")
        for w in warnings:
            console.print(f"  - {w}")
            
    item.voice_warnings = warnings

def run_transform(dry_run: bool = False, skip_images: bool = False):
    client = get_client()
    if not client and not dry_run:
        return

    PROCESSED_TRANSFORMED_DIR.mkdir(parents=True, exist_ok=True)
    
    # 1. Blog Generation
    # ... (existing code handles files)
    
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

            if not is_within_budget():
                console.print("[bold red]Budget reached. Stopping transformation.[/bold red]")
                break

            console.rule(f"Processing: {item.title}")
            
            if dry_run:
                console.print(f"[yellow][DRY RUN][/yellow] Would transform: {item.title}")
                if not skip_images:
                    console.print(f"[yellow][DRY RUN][/yellow] Would generate featured image for: {item.title}")
                # Mock transformation success for dry run logic
                item.status = ProcessingStatus.TRANSFORMED
                continue

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

            # 2.5 Voice Consistency Check
            run_voice_check(item)

            # 4. Featured Image Generation
            if not skip_images:
                slug = slugify(blog_output.title_options[0])
                item.featured_image = generate_featured_image(
                    title=blog_output.title_options[0],
                    pillar=blog_output.content_pillar,
                    slug=slug,
                    dry_run=dry_run
                )

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
