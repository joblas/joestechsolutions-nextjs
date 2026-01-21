"""
publish.py - Publishes approved Google Docs as MDX blog posts

Flow:
1. Scan Google Docs folder for docs with "STATUS: APPROVED"
2. Extract blog content from doc
3. Generate MDX file with frontmatter
4. Save to content/blog/guides/ or content/blog/articles/
5. Git commit (optional auto-push)
6. Update doc status to "PUBLISHED"
7. Append social content to Social Queue doc
"""

import os
import re
import json
import subprocess
from pathlib import Path
from datetime import datetime
from typing import Optional, Tuple, List
from slugify import slugify

from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv
from rich.console import Console
from rich.prompt import Confirm

from models import ContentItem, ProcessingStatus

# Load environment variables
load_dotenv()

console = Console()

# Directories
PROCESSED_DRAFTED_DIR = Path("scripts/content-pipeline/processed/drafted")
PROCESSED_PUBLISHED_DIR = Path("scripts/content-pipeline/processed/published")
CONTENT_BLOG_DIR = Path("content/blog")

# Google API Scopes
SCOPES = [
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive'
]

# Content type keywords to detect Guide vs Article
GUIDE_KEYWORDS = ["how-to", "tutorial", "guide", "setup", "install", "configure", "step-by-step", "walkthrough"]
ARTICLE_KEYWORDS = ["news", "update", "announcement", "review", "opinion", "analysis", "commentary"]


def get_credentials():
    """Authenticates using the service account JSON file."""
    service_account_file = os.getenv("GOOGLE_SERVICE_ACCOUNT_JSON", "./service-account.json")

    if not os.path.exists(service_account_file):
        console.print(f"[red]Error: Service account file not found at {service_account_file}[/red]")
        return None

    try:
        creds = Credentials.from_service_account_file(service_account_file, scopes=SCOPES)
        return creds
    except Exception as e:
        console.print(f"[red]Error loading credentials: {e}[/red]")
        return None


def get_doc_text(service, doc_id: str) -> str:
    """Extracts plain text content from a Google Doc."""
    try:
        doc = service.documents().get(documentId=doc_id).execute()
        content = doc.get('body', {}).get('content', [])

        text_parts = []
        for element in content:
            if 'paragraph' in element:
                for para_element in element['paragraph'].get('elements', []):
                    if 'textRun' in para_element:
                        text_parts.append(para_element['textRun'].get('content', ''))

        return ''.join(text_parts)
    except HttpError as e:
        console.print(f"[red]Error reading doc {doc_id}: {e}[/red]")
        return ""


def parse_doc_content(text: str) -> dict:
    """
    Parses the Google Doc text to extract structured content.

    Expected doc format (from draft.py):
    STATUS: READY FOR REVIEW
    SOURCE: https://...
    PILLAR: local-ai

    Title Options
    1. Title One
    2. Title Two
    3. Title Three

    Blog Draft
    [markdown content]

    Social Media Assets
    Instagram
    Short Caption: ...
    Long Caption: ...
    Carousel Slides
    Slide 1: ...

    TikTok Script
    [script content]
    """
    result = {
        'status': None,
        'source_url': None,
        'pillar': None,
        'titles': [],
        'blog_content': '',
        'meta_description': '',
        'instagram_short': '',
        'instagram_long': '',
        'carousel_slides': [],
        'tiktok_script': '',
        'tiktok_on_screen': []
    }

    lines = text.split('\n')
    current_section = None
    blog_lines = []

    for i, line in enumerate(lines):
        line_stripped = line.strip()

        # Parse status
        if line_stripped.startswith('STATUS:'):
            result['status'] = line_stripped.replace('STATUS:', '').strip()
            continue

        # Parse source URL
        if line_stripped.startswith('SOURCE:'):
            result['source_url'] = line_stripped.replace('SOURCE:', '').strip()
            continue

        # Parse pillar
        if line_stripped.startswith('PILLAR:'):
            result['pillar'] = line_stripped.replace('PILLAR:', '').strip()
            continue

        # Detect sections
        if 'Title Options' in line_stripped:
            current_section = 'titles'
            continue
        elif 'Blog Draft' in line_stripped:
            current_section = 'blog'
            continue
        elif 'Social Media Assets' in line_stripped:
            current_section = 'social'
            continue
        elif 'Instagram' in line_stripped and current_section == 'social':
            current_section = 'instagram'
            continue
        elif 'TikTok Script' in line_stripped:
            current_section = 'tiktok'
            continue
        elif 'Carousel Slides' in line_stripped:
            current_section = 'carousel'
            continue
        elif 'On Screen Text' in line_stripped:
            current_section = 'tiktok_text'
            continue

        # Parse content based on current section
        if current_section == 'titles':
            # Look for numbered titles (1. Title, 2. Title, etc.)
            match = re.match(r'^\d+\.\s*(.+)$', line_stripped)
            if match:
                result['titles'].append(match.group(1).strip())

        elif current_section == 'blog':
            # Stop at Social Media Assets
            if 'Social Media Assets' in line_stripped:
                current_section = 'social'
            else:
                blog_lines.append(line)

        elif current_section == 'instagram':
            if line_stripped.startswith('Short Caption:'):
                result['instagram_short'] = line_stripped.replace('Short Caption:', '').strip()
            elif line_stripped.startswith('Long Caption:'):
                result['instagram_long'] = line_stripped.replace('Long Caption:', '').strip()

        elif current_section == 'carousel':
            match = re.match(r'^Slide \d+:\s*(.+)$', line_stripped)
            if match:
                result['carousel_slides'].append(match.group(1).strip())

        elif current_section == 'tiktok':
            if line_stripped and 'On Screen Text' not in line_stripped:
                result['tiktok_script'] += line + '\n'

        elif current_section == 'tiktok_text':
            if line_stripped:
                result['tiktok_on_screen'].append(line_stripped)

    result['blog_content'] = '\n'.join(blog_lines).strip()

    # Extract meta description from first paragraph of blog content
    paragraphs = result['blog_content'].split('\n\n')
    for p in paragraphs:
        if p.strip() and not p.strip().startswith('#'):
            result['meta_description'] = p.strip()[:160]
            break

    return result


def detect_content_type(title: str, content: str, pillar: str) -> str:
    """
    Determines if content is a 'guide' or 'article' based on keywords.
    """
    combined = f"{title} {content} {pillar}".lower()

    guide_score = sum(1 for kw in GUIDE_KEYWORDS if kw in combined)
    article_score = sum(1 for kw in ARTICLE_KEYWORDS if kw in combined)

    # Certain pillars lean toward guides
    if pillar and pillar.lower() in ['tutorials', 'local-ai', 'prompting']:
        guide_score += 2
    elif pillar and pillar.lower() in ['news', 'experiments']:
        article_score += 2

    return 'guides' if guide_score >= article_score else 'articles'


def generate_slug(title: str) -> str:
    """Creates a URL-friendly slug from the title."""
    return slugify(title, max_length=60, word_boundary=True)


def create_mdx_file(parsed: dict, content_type: str) -> Tuple[str, str]:
    """
    Creates MDX file content with frontmatter.
    Returns (filename, content).
    """
    title = parsed['titles'][0] if parsed['titles'] else 'Untitled Post'
    slug = generate_slug(title)
    date = datetime.now().strftime('%Y-%m-%d')
    filename = f"{date}-{slug}.mdx"

    # Calculate reading time (~200 words per minute)
    word_count = len(parsed['blog_content'].split())
    reading_time = max(1, round(word_count / 200))

    # Build frontmatter
    frontmatter = f"""---
title: "{title}"
date: "{date}"
description: "{parsed['meta_description']}"
pillar: "{parsed['pillar'] or 'tutorials'}"
type: "{content_type.rstrip('s')}"
author: "Joe"
readingTime: {reading_time}
featured: false
image: "/images/blog/placeholder.jpg"
tags: []
---

"""

    # Combine frontmatter + blog content
    mdx_content = frontmatter + parsed['blog_content']

    return filename, mdx_content


def save_mdx_file(filename: str, content: str, content_type: str) -> Path:
    """Saves the MDX file to the appropriate directory."""
    # Ensure directory exists
    target_dir = CONTENT_BLOG_DIR / content_type
    target_dir.mkdir(parents=True, exist_ok=True)

    file_path = target_dir / filename
    file_path.write_text(content, encoding='utf-8')

    return file_path


def git_commit_and_push(file_path: Path, title: str, auto_push: bool = False) -> bool:
    """
    Commits the new MDX file to git.
    Optionally pushes to remote.
    """
    try:
        # Git add
        subprocess.run(['git', 'add', str(file_path)], check=True, capture_output=True)

        # Git commit
        commit_msg = f"content: Add blog post - {title}"
        subprocess.run(['git', 'commit', '-m', commit_msg], check=True, capture_output=True)

        console.print(f"[green]Committed:[/green] {commit_msg}")

        if auto_push:
            subprocess.run(['git', 'push'], check=True, capture_output=True)
            console.print("[green]Pushed to remote[/green]")

        return True
    except subprocess.CalledProcessError as e:
        console.print(f"[yellow]Git operation failed: {e}[/yellow]")
        return False


def update_doc_status(service, doc_id: str, new_status: str = "PUBLISHED"):
    """
    Updates the STATUS line in the Google Doc.
    This is a simplified approach - finds and replaces the status line.
    """
    try:
        # Get current doc content
        doc = service.documents().get(documentId=doc_id).execute()
        content = doc.get('body', {}).get('content', [])

        # Find the STATUS line
        for element in content:
            if 'paragraph' in element:
                for para_element in element['paragraph'].get('elements', []):
                    if 'textRun' in para_element:
                        text = para_element['textRun'].get('content', '')
                        if text.startswith('STATUS:'):
                            start_index = para_element.get('startIndex', 1)
                            end_index = para_element.get('endIndex', start_index + len(text))

                            # Replace the status line
                            requests = [
                                {
                                    'deleteContentRange': {
                                        'range': {
                                            'startIndex': start_index,
                                            'endIndex': end_index
                                        }
                                    }
                                },
                                {
                                    'insertText': {
                                        'location': {'index': start_index},
                                        'text': f"STATUS: {new_status}\n"
                                    }
                                }
                            ]

                            service.documents().batchUpdate(
                                documentId=doc_id,
                                body={'requests': requests}
                            ).execute()

                            return True

        console.print(f"[yellow]Could not find STATUS line in doc {doc_id}[/yellow]")
        return False

    except HttpError as e:
        console.print(f"[red]Error updating doc status: {e}[/red]")
        return False


def append_to_social_queue(parsed: dict, title: str, mdx_path: Path):
    """
    Appends social content to a Social Queue file for easy access.
    Creates a simple markdown file with all social assets.
    """
    queue_file = Path("scripts/content-pipeline/social-queue.md")

    entry = f"""
---

## {title}
**Published:** {datetime.now().strftime('%Y-%m-%d %H:%M')}
**MDX:** `{mdx_path}`

### Instagram

**Short Caption:**
{parsed['instagram_short']}

**Long Caption:**
{parsed['instagram_long']}

**Carousel Slides:**
{chr(10).join(f'- Slide {i+1}: {slide}' for i, slide in enumerate(parsed['carousel_slides']))}

### TikTok

**Script:**
{parsed['tiktok_script']}

**On-Screen Text:**
{chr(10).join(f'- {text}' for text in parsed['tiktok_on_screen'])}

"""

    # Append to file
    with open(queue_file, 'a', encoding='utf-8') as f:
        f.write(entry)

    console.print(f"[cyan]Added to social queue:[/cyan] {queue_file}")


def run_publish(auto_commit: bool = True, auto_push: bool = False, interactive: bool = True):
    """
    Main publish function.

    Args:
        auto_commit: Automatically commit MDX files to git
        auto_push: Automatically push commits to remote
        interactive: Ask for confirmation before publishing each item
    """
    creds = get_credentials()
    if not creds:
        return

    service = build('docs', 'v1', credentials=creds)
    drive_service = build('drive', 'v3', credentials=creds)

    PROCESSED_PUBLISHED_DIR.mkdir(parents=True, exist_ok=True)

    folder_id = os.getenv("GOOGLE_DRIVE_FOLDER_ID")
    if not folder_id:
        console.print("[yellow]Warning: GOOGLE_DRIVE_FOLDER_ID not set. Scanning all accessible docs.[/yellow]")

    # Find docs that are APPROVED
    console.print("[bold cyan]Scanning for approved documents...[/bold cyan]")

    # List files in the folder
    try:
        query = f"'{folder_id}' in parents and mimeType='application/vnd.google-apps.document'" if folder_id else "mimeType='application/vnd.google-apps.document'"
        results = drive_service.files().list(
            q=query,
            spaces='drive',
            fields='files(id, name, modifiedTime)',
            orderBy='modifiedTime desc',
            pageSize=50
        ).execute()

        files = results.get('files', [])
        console.print(f"Found {len(files)} documents in folder.")

    except HttpError as e:
        console.print(f"[red]Error listing files: {e}[/red]")
        return

    published_count = 0

    for file in files:
        doc_id = file['id']
        doc_name = file['name']

        # Check if already published (exists in published dir)
        published_marker = PROCESSED_PUBLISHED_DIR / f"{doc_id}.json"
        if published_marker.exists():
            continue

        # Get doc content and check status
        console.print(f"\nChecking: [bold]{doc_name}[/bold]")
        text = get_doc_text(service, doc_id)

        if not text:
            continue

        parsed = parse_doc_content(text)

        # Check if status is APPROVED
        if not parsed['status'] or 'APPROVED' not in parsed['status'].upper():
            console.print(f"  Status: {parsed['status'] or 'Not found'} - Skipping")
            continue

        console.print(f"  [green]Status: APPROVED[/green]")

        # Interactive confirmation
        if interactive:
            if not Confirm.ask(f"  Publish '{parsed['titles'][0] if parsed['titles'] else doc_name}'?"):
                console.print("  Skipped by user")
                continue

        # Detect content type
        title = parsed['titles'][0] if parsed['titles'] else doc_name.replace(' - DRAFT', '')
        content_type = detect_content_type(title, parsed['blog_content'], parsed['pillar'])
        console.print(f"  Content type: [cyan]{content_type}[/cyan]")

        # Generate MDX
        filename, mdx_content = create_mdx_file(parsed, content_type)
        console.print(f"  Generated: [cyan]{filename}[/cyan]")

        # Save MDX file
        mdx_path = save_mdx_file(filename, mdx_content, content_type)
        console.print(f"  [green]Saved:[/green] {mdx_path}")

        # Git commit
        if auto_commit:
            git_commit_and_push(mdx_path, title, auto_push)

        # Update doc status
        if update_doc_status(service, doc_id, "PUBLISHED"):
            console.print(f"  [green]Doc status updated to PUBLISHED[/green]")

        # Add to social queue
        if parsed['instagram_short'] or parsed['tiktok_script']:
            append_to_social_queue(parsed, title, mdx_path)

        # Save published marker
        marker_data = {
            'doc_id': doc_id,
            'doc_name': doc_name,
            'mdx_path': str(mdx_path),
            'published_at': datetime.now().isoformat(),
            'title': title,
            'content_type': content_type
        }
        with open(published_marker, 'w', encoding='utf-8') as f:
            json.dump(marker_data, f, indent=2)

        published_count += 1
        console.print(f"  [bold green]Successfully published![/bold green]")

    console.print(f"\n[bold]Published {published_count} document(s)[/bold]")


if __name__ == "__main__":
    run_publish()
