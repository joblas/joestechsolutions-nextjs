import typer
from rich.console import Console
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn
import time
import os
from dotenv import load_dotenv

# Import pipeline stages
from ingest import run_ingest
from transform import run_transform
from draft import run_draft
from publish import run_publish

# Load env vars
load_dotenv()

app = typer.Typer(help="Joe's Tech Solutions Content Pipeline CLI")
console = Console()

@app.command()
def all(
    skip_ingest: bool = typer.Option(False, help="Skip ingestion step"),
    skip_transform: bool = typer.Option(False, help="Skip transformation step"),
    skip_draft: bool = typer.Option(False, help="Skip drafting step"),
):
    """
    Runs the full content pipeline: Ingest -> Transform -> Draft.
    """
    console.print(Panel.fit("🚀 Starting Content Pipeline", style="bold blue"))

    if not skip_ingest:
        console.print("\n[bold cyan]1. Ingestion Phase[/bold cyan]")
        try:
            run_ingest()
        except Exception as e:
            console.print(f"[bold red]Ingestion Failed:[/bold red] {e}")
            if not typer.confirm("Continue to next step anyway?"):
                raise typer.Exit(code=1)

    if not skip_transform:
        console.print("\n[bold cyan]2. Transformation Phase[/bold cyan]")
        try:
            run_transform()
        except Exception as e:
            console.print(f"[bold red]Transformation Failed:[/bold red] {e}")
            if not typer.confirm("Continue to next step anyway?"):
                raise typer.Exit(code=1)

    if not skip_draft:
        console.print("\n[bold cyan]3. Drafting Phase[/bold cyan]")
        try:
            run_draft()
        except Exception as e:
            console.print(f"[bold red]Drafting Failed:[/bold red] {e}")
    
    console.print(Panel.fit("✨ Pipeline Complete ✨", style="bold green"))

@app.command()
def ingest():
    """Run only the ingestion step (YouTube/RSS -> Raw JSON)."""
    console.print("[bold cyan]Running Ingestion...[/bold cyan]")
    run_ingest()

@app.command()
def transform():
    """Run only the transformation step (Raw JSON -> AI Content)."""
    console.print("[bold cyan]Running Transformation...[/bold cyan]")
    run_transform()

@app.command()
def draft():
    """Run only the drafting step (AI Content -> Google Doc)."""
    console.print("[bold cyan]Running Drafting...[/bold cyan]")
    run_draft()

@app.command()
def publish(
    auto_commit: bool = typer.Option(True, help="Automatically commit MDX files to git"),
    auto_push: bool = typer.Option(False, help="Automatically push commits to remote"),
    no_confirm: bool = typer.Option(False, help="Skip confirmation prompts"),
):
    """Run only the publish step (Approved Google Docs -> MDX files)."""
    console.print("[bold cyan]Running Publish...[/bold cyan]")
    run_publish(auto_commit=auto_commit, auto_push=auto_push, interactive=not no_confirm)

@app.command()
def status():
    """Check the status of processed items."""
    from pathlib import Path
    import json

    raw_dir = Path("scripts/content-pipeline/processed/raw")
    transformed_dir = Path("scripts/content-pipeline/processed/transformed")
    drafted_dir = Path("scripts/content-pipeline/processed/drafted")
    published_dir = Path("scripts/content-pipeline/processed/published")
    content_dir = Path("content/blog")

    raw_count = len(list(raw_dir.glob("*.json"))) if raw_dir.exists() else 0
    transformed_count = len(list(transformed_dir.glob("*.json"))) if transformed_dir.exists() else 0
    drafted_count = len(list(drafted_dir.glob("*.json"))) if drafted_dir.exists() else 0
    published_count = len(list(published_dir.glob("*.json"))) if published_dir.exists() else 0

    # Count MDX files
    guides_count = len(list((content_dir / "guides").glob("*.mdx"))) if (content_dir / "guides").exists() else 0
    articles_count = len(list((content_dir / "articles").glob("*.mdx"))) if (content_dir / "articles").exists() else 0

    console.print(Panel(f"""
    [bold]Pipeline Status[/bold]

    📂 Raw Items:         [cyan]{raw_count}[/cyan]
    🧠 Transformed Items: [yellow]{transformed_count}[/yellow]
    📝 Drafted Docs:      [blue]{drafted_count}[/blue]
    ✅ Published:         [green]{published_count}[/green]

    [bold]Blog Content[/bold]
    📚 Guides:            [magenta]{guides_count}[/magenta]
    📰 Articles:          [magenta]{articles_count}[/magenta]
    """, title="Stats"))

if __name__ == "__main__":
    app()
