import typer
from rich.console import Console
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn
import time
import os
from datetime import datetime
from dotenv import load_dotenv

# Import pipeline stages
from ingest import run_ingest
from transform import run_transform
from draft import run_draft
from publish import run_publish
from roundup import run_roundup, run_roundup_scheduled

# Load env vars
load_dotenv()

app = typer.Typer(help="Joe's Tech Solutions Content Pipeline CLI")
console = Console()

@app.command()
def all(
    skip_ingest: bool = typer.Option(False, help="Skip ingestion step"),
    skip_transform: bool = typer.Option(False, help="Skip transformation step"),
    skip_draft: bool = typer.Option(False, help="Skip drafting step"),
    skip_whisper: bool = typer.Option(False, help="Skip Whisper fallback for YouTube transcription"),
    skip_images: bool = typer.Option(False, help="Skip AI featured image generation"),
    dry_run: bool = typer.Option(False, "--dry-run", help="Simulate pipeline without making API calls or file changes"),
):
    """
    Runs the full content pipeline: Ingest -> Transform -> Draft.
    """
    if dry_run:
        console.print("[bold yellow]DRY RUN ENABLED - No changes will be made[/bold yellow]")

    console.print(Panel.fit("🚀 Starting Content Pipeline", style="bold blue"))

    if not skip_ingest:
        console.print("\n[bold cyan]1. Ingestion Phase[/bold cyan]")
        try:
            run_ingest(skip_whisper=skip_whisper, dry_run=dry_run)
        except Exception as e:
            console.print(f"[bold red]Ingestion Failed:[/bold red] {e}")
            if not typer.confirm("Continue to next step anyway?"):
                raise typer.Exit(code=1)

    if not skip_transform:
        console.print("\n[bold cyan]2. Transformation Phase[/bold cyan]")
        try:
            run_transform(dry_run=dry_run, skip_images=skip_images)
        except Exception as e:
            console.print(f"[bold red]Transformation Failed:[/bold red] {e}")
            if not typer.confirm("Continue to next step anyway?"):
                raise typer.Exit(code=1)

    if not skip_draft:
        console.print("\n[bold cyan]3. Drafting Phase[/bold cyan]")
        try:
            run_draft(dry_run=dry_run)
        except Exception as e:
            console.print(f"[bold red]Drafting Failed:[/bold red] {e}")
    
    console.print(Panel.fit("✨ Pipeline Complete ✨", style="bold green"))

@app.command()
def ingest(
    url: str = typer.Option(None, help="Specific YouTube or Article URL to ingest"),
    topic: str = typer.Option(None, help="Manual topic to transform into a blog post"),
    pillar: str = typer.Option(None, help="Content pillar for the manual topic (prompting, local-ai, etc.)"),
    skip_whisper: bool = typer.Option(False, help="Skip Whisper fallback for YouTube transcription"),
    dry_run: bool = typer.Option(False, "--dry-run", help="Simulate ingestion without writing files"),
):
    """Run only the ingestion step (YouTube/RSS/Manual -> Raw JSON)."""
    if dry_run:
        console.print("[bold yellow]DRY RUN ENABLED[/bold yellow]")
    if url:
        console.print(f"[bold cyan]Ingesting Single URL: {url}[/bold cyan]")
    elif topic:
        console.print(f"[bold cyan]Injecting Manual Topic: {topic}[/bold cyan]")
    else:
        console.print("[bold cyan]Running Batch Ingestion...[/bold cyan]")
    run_ingest(url=url, topic=topic, pillar=pillar, skip_whisper=skip_whisper, dry_run=dry_run)

@app.command()
def transform(
    skip_images: bool = typer.Option(False, help="Skip AI featured image generation"),
    dry_run: bool = typer.Option(False, "--dry-run", help="Simulate transformation without API calls"),
):
    """Run only the transformation step (Raw JSON -> AI Content)."""
    if dry_run:
        console.print("[bold yellow]DRY RUN ENABLED[/bold yellow]")
    console.print("[bold cyan]Running Transformation...[/bold cyan]")
    run_transform(dry_run=dry_run, skip_images=skip_images)

@app.command()
def draft(
    dry_run: bool = typer.Option(False, "--dry-run", help="Simulate drafting without creating Google Docs"),
):
    """Run only the drafting step (AI Content -> Google Doc)."""
    if dry_run:
        console.print("[bold yellow]DRY RUN ENABLED[/bold yellow]")
    console.print("[bold cyan]Running Drafting...[/bold cyan]")
    run_draft(dry_run=dry_run)

@app.command()
def publish(
    check: bool = typer.Option(False, "--check", help="Scan Google Docs for APPROVED status (default)"),
    auto_commit: bool = typer.Option(True, help="Automatically commit MDX files to git"),
    auto_push: bool = typer.Option(False, help="Automatically push commits to remote"),
    no_confirm: bool = typer.Option(False, help="Skip confirmation prompts"),
    dry_run: bool = typer.Option(False, "--dry-run", help="Simulate publishing without file writes or git commits"),
):
    """Run only the publish step (Approved Google Docs -> MDX files)."""
    if dry_run:
        console.print("[bold yellow]DRY RUN ENABLED[/bold yellow]")
    console.print("[bold cyan]Running Publish...[/bold cyan]")
    run_publish(auto_commit=auto_commit, auto_push=auto_push, interactive=not no_confirm, dry_run=dry_run)

@app.command()
def roundup(
    pillar: str = typer.Option("news", help="Content pillar to summarize"),
    days: int = typer.Option(7, help="Number of recent days to collect sources from"),
    min_sources: int = typer.Option(3, help="Minimum sources required to generate a roundup"),
    scheduled: bool = typer.Option(False, "--scheduled", help="Run all roundups scheduled for today"),
    dry_run: bool = typer.Option(False, "--dry-run", help="Simulate synthesis without API calls"),
):
    """Summarize multiple recent sources into one synthesized roundup post."""
    if dry_run:
        console.print("[bold yellow]DRY RUN ENABLED[/bold yellow]")
    
    if scheduled:
        console.print("[bold cyan]Running Scheduled Roundups...[/bold cyan]")
        run_roundup_scheduled(dry_run=dry_run)
    else:
        console.print(f"[bold cyan]Running Roundup for {pillar}...[/bold cyan]")
        run_roundup(pillar=pillar, days=days, min_sources=min_sources, dry_run=dry_run)

@app.command()
def status(
    show_sources: bool = typer.Option(False, "--sources", help="List all processed source URLs"),
    show_usage: bool = typer.Option(False, "--usage", help="Show API token usage and cost report"),
):
    """Check the status of processed items and sources."""
    from pathlib import Path
    import json
    
    # Paths relative to script location
    base_path = Path(__file__).parent
    raw_dir = base_path / "processed" / "raw"
    transformed_dir = base_path / "processed" / "transformed"
    drafted_dir = base_path / "processed" / "drafted"
    published_dir = base_path / "processed" / "published"
    content_dir = base_path.parent.parent / "content" / "blog"

    # Handle --usage
    if show_usage:
        from usage_tracker import get_usage_log, DAILY_BUDGET
        log = get_usage_log()
        date_str = datetime.now().strftime("%Y-%m-%d")
        daily = log.daily.get(date_str)
        
        console.print(Panel(f"""
        [bold underline]Total Cost History[/bold underline]
        Total Lifetime Spend: [green]${log.total_cost:.4f}[/green]
        
        [bold underline]Today's Usage ({date_str})[/bold underline]
        Input Tokens:         [cyan]{daily.tokens_input if daily else 0}[/cyan]
        Output Tokens:        [cyan]{daily.tokens_output if daily else 0}[/cyan]
        Today's Spend:        [bold green]${daily.cost_usd if daily else 0:.4f}[/bold green]
        Daily Budget:         [yellow]${DAILY_BUDGET:.2f}[/yellow]
        Remaining:            [blue]${max(0, DAILY_BUDGET - (daily.cost_usd if daily else 0)):.4f}[/blue]
        """, title="Claude API Usage Report"))
        return

    raw_items = list(raw_dir.glob("*.json")) if raw_dir.exists() else []
    raw_count = len(raw_items)
    transformed_count = len(list(transformed_dir.glob("*.json"))) if transformed_dir.exists() else 0
    drafted_count = len(list(drafted_dir.glob("*.json"))) if drafted_dir.exists() else 0
    published_count = len(list(published_dir.glob("*.json"))) if published_dir.exists() else 0

    # Count MDX files
    guides_count = len(list((content_dir / "guides").glob("*.mdx"))) if (content_dir / "guides").exists() else 0
    articles_count = len(list((content_dir / "articles").glob("*.mdx"))) if (content_dir / "articles").exists() else 0

    # Error summary
    failed_items = 0
    for file_path in raw_items:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if data.get("error_message"):
                    failed_items += 1
        except:
            pass

    # List sources if requested
    if show_sources:
        console.print("\n[bold underline]Processed Sources:[/bold underline]")
        for file_path in raw_items:
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    url = data.get("source_url", "No URL")
                    title = data.get("title", "No Title")
                    status = data.get("status", "unknown")
                    console.print(f"- [cyan]{url}[/cyan] ({title[:40]}...) [[bold]{status}[/bold]]")
            except:
                pass

    # Count sources and pillars
    import yaml
    from models import SourceConfig
    try:
        sources_path = base_path / "config" / "sources.yaml"
        if sources_path.exists():
            with open(sources_path, "r") as f:
                sources_data = yaml.safe_load(f)
                sources = SourceConfig(**sources_data)
                yt_sources = len([s for s in sources.youtube if s.active])
                rss_sources = len([s for s in sources.rss if s.active])
        else:
            yt_sources = rss_sources = "Not Found"
    except Exception as e:
        yt_sources = rss_sources = "Error"

    try:
        pillars_path = base_path / "config" / "pillars.yaml"
        if pillars_path.exists():
            with open(pillars_path, "r") as f:
                pillars_data = yaml.safe_load(f)
                pillar_count = len(pillars_data) if pillars_data else 0
        else:
            pillar_count = "Not Found"
    except Exception:
        pillar_count = "Missing"

    console.print(Panel(f"""
    [bold underline]Pipeline Progress[/bold underline]
    📂 Ingested:          [cyan]{raw_count}[/cyan]
    🧠 Transformed:       [yellow]{transformed_count}[/yellow]
    📝 Drafted (GDoc):    [blue]{drafted_count}[/blue]
    ✅ Published (MDX):   [green]{published_count}[/green]
    ❌ Failed:            [red]{failed_items}[/red]

    [bold underline]Sources & Pillars[/bold underline]
    📺 YouTube Sources:   [cyan]{yt_sources}[/cyan]
    🌐 RSS Sources:       [cyan]{rss_sources}[/cyan]
    🏛️ Content Pillars:   [magenta]{pillar_count}[/magenta]

    [bold underline]Blog Archive[/bold underline]
    📚 Guides:            [magenta]{guides_count}[/magenta]
    📰 Articles:          [magenta]{articles_count}[/magenta]
    """, title="Joe's Tech Solutions Content Dashboard"))

if __name__ == "__main__":
    app()
