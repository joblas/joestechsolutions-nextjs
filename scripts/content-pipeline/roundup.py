import json
import os
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Optional
import instructor
from anthropic import Anthropic
from dotenv import load_dotenv
from rich.console import Console
from pydantic import BaseModel

from models import ContentItem, SourceType, ProcessingStatus, BlogOutput

load_dotenv()
console = Console()

BASE_DIR = Path(__file__).parent
PROCESSED_RAW_DIR = BASE_DIR / "processed" / "raw"
PROCESSED_TRANSFORMED_DIR = BASE_DIR / "processed" / "transformed"
PROMPTS_DIR = BASE_DIR / "config" / "prompts"
CONFIG_PATH = BASE_DIR / "config" / "sources.yaml"

class RoundupSection(BaseModel):
    section_title: str
    subsection_content: str
    source_references: List[str]

class RoundupOutput(BaseModel):
    title: str
    content_pillar: str
    meta_description: str
    sections: List[RoundupSection]
    synthesis_conclusion: str
    full_draft: str
    key_takeaways: List[str]

def load_prompt(prompt_name: str) -> str:
    path = PROMPTS_DIR / prompt_name
    return path.read_text(encoding="utf-8")

def get_client():
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key: return None
    return instructor.from_anthropic(Anthropic(api_key=api_key))

def run_roundup(pillar: str, days: int = 7, min_sources: int = 3, dry_run: bool = False):
    client = get_client()
    if not client and not dry_run:
        console.print("[red]Anthropic API Key not found.[/red]")
        return

    console.print(f"[bold cyan]Creating Roundup for Pillar: {pillar} (Last {days} days)[/bold cyan]")
    
    # 1. Collect Sources
    cutoff_date = datetime.now() - timedelta(days=days)
    collected: List[ContentItem] = []
    
    for file_path in PROCESSED_RAW_DIR.glob("*.json"):
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                item = ContentItem(**json.load(f))
                
                # Check status and date (only ingested ones)
                # Note: manual topics might not have a forced pillar yet, 
                # but we're looking at ingested items.
                
                # We need to check if the item belongs to the pillar.
                # Since ingestion doesn't assign a pillar yet, we'll check forced_pillar or skip for now.
                # Actually, the PRD says "aggregates recent sources into one post".
                # It would be better if we can filter by pillar.
                
                item_pillar = item.metadata.get("forced_pillar")
                if not item_pillar:
                    # In a real scenario, we might want to pre-classify or filter by title keywords.
                    # For now, let's include if it matches or if it's from a relevant source.
                    pass
                
                if item.publish_date and item.publish_date >= cutoff_date:
                    collected.append(item)
        except:
            continue

    if len(collected) < min_sources:
        console.print(f"[yellow]Not enough sources found ({len(collected)} < {min_sources}). Skipping roundup.[/yellow]")
        return

    console.print(f"Found {len(collected)} sources for roundup.")

    # 2. Synthesize with Claude
    if dry_run:
        console.print(f"[yellow][DRY RUN][/yellow] Would synthesize {len(collected)} items into a cleanup post.")
        return

    prompt = load_prompt("roundup_transform.md")
    
    sources_text = ""
    for i, item in enumerate(collected):
        sources_text += f"\n--- Source {i+1} ---\nTitle: {item.title}\nContent:\n{item.raw_content[:10000]}\n"

    try:
        resp = client.chat.completions.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=4096,
            response_model=RoundupOutput,
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": f"Pillar: {pillar}\nDate Range: {cutoff_date.strftime('%Y-%m-%d')} to {datetime.now().strftime('%Y-%m-%d')}\n\nSources:\n{sources_text}"}
            ]
        )
        
        # 3. Create ContentItem for Roundup
        import hashlib
        item_id = hashlib.md5(f"roundup-{pillar}-{datetime.now().strftime('%Y-%m-%d')}".encode()).hexdigest()
        
        # Convert RoundupOutput to BlogOutput compatible format
        blog_content = BlogOutput(
            title_options=[resp.title],
            content_pillar=resp.content_pillar,
            content_type="article",
            meta_description=resp.meta_description,
            outline=[s.section_title for s in resp.sections],
            full_draft=resp.full_draft,
            key_takeaways=resp.key_takeaways
        )
        
        roundup_item = ContentItem(
            id=item_id,
            source_type=SourceType.ROUNDUP,
            source_url="roundup",
            title=resp.title,
            author="Joe (Auto-Curated)",
            publish_date=datetime.now(),
            raw_content=f"Synthesized from {len(collected)} sources.",
            blog_content=blog_content,
            status=ProcessingStatus.TRANSFORMED,
            metadata={"source_ids": [o.id for o in collected]}
        )
        
        # Save to transformed directly
        PROCESSED_TRANSFORMED_DIR.mkdir(parents=True, exist_ok=True)
        with open(PROCESSED_TRANSFORMED_DIR / f"{item_id}.json", "w", encoding="utf-8") as f:
            f.write(roundup_item.model_dump_json(indent=2))
            
        console.print(f"[bold green]Successfully created roundup:[/bold green] {resp.title}")
        
    except Exception as e:
        console.print(f"[red]Error creating roundup: {e}[/red]")

def load_config():
    import yaml
    from models import SourceConfig
    if not CONFIG_PATH.exists():
        return None
    with open(CONFIG_PATH, "r") as f:
        data = yaml.safe_load(f)
        return SourceConfig(**data)

def run_roundup_scheduled(dry_run: bool = False):
    """Runs all roundups scheduled for today."""
    config = load_config()
    if not config or not config.roundups:
        console.print("[yellow]No roundup configuration found.[/yellow]")
        return
        
    day_name = datetime.now().strftime("%A").lower()
    console.print(f"Checking scheduled roundups for {day_name.capitalize()}...")
    
    found_any = False
    for r_cfg in config.roundups:
        if day_name in [d.lower() for d in r_cfg.days]:
            found_any = True
            run_roundup(
                pillar=r_cfg.pillar, 
                days=r_cfg.lookback_days, 
                dry_run=dry_run
            )
            
    if not found_any:
        console.print(f"[yellow]No roundups scheduled for {day_name.capitalize()}.[/yellow]")
