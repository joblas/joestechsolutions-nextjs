import os
import json
import logging
from pathlib import Path
from datetime import datetime
from typing import Optional

from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv
from rich.console import Console

from models import ContentItem, ProcessingStatus

# Load environment variables
load_dotenv()

console = Console()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("draft")

BASE_DIR = Path(__file__).parent
PROCESSED_TRANSFORMED_DIR = BASE_DIR / "processed" / "transformed"
PROCESSED_DRAFTED_DIR = BASE_DIR / "processed" / "drafted"

# Scopes required for Google Docs/Drive
SCOPES = [
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive'
]

def get_credentials():
    """Authenticates using the service account JSON file."""
    service_account_file = os.getenv("GOOGLE_SERVICE_ACCOUNT_JSON")
    if not service_account_file:
        service_account_file = "service-account.json"

    # Resolve path if it's relative
    if not os.path.isabs(service_account_file):
        # Try finding it in project root (2 levels up from scripts/content-pipeline)
        project_root = BASE_DIR.parent.parent
        possible_path = project_root / service_account_file
        if possible_path.exists():
            service_account_file = str(possible_path)
        elif os.path.exists(service_account_file):
            # Fallback to CWD
            pass
        else:
             console.print(f"[red]Error: Service account file not found at {possible_path} or {service_account_file}[/red]")
             return None
            
    try:
        creds = Credentials.from_service_account_file(service_account_file, scopes=SCOPES)
        return creds
    except Exception as e:
        console.print(f"[red]Error loading credentials: {e}[/red]")
        return None

def create_google_doc(service, drive_service, title: str, folder_id: Optional[str] = None) -> str:
    """Creates a new Google Doc and returns its ID."""
    body = {
        'title': title
    }
    doc = service.documents().create(body=body).execute()
    doc_id = doc.get('documentId')
    
    # Move to specific folder if requested
    if folder_id:
        try:
            # Retrieve the existing parents to remove
            file = drive_service.files().get(fileId=doc_id, fields='parents').execute()
            previous_parents = ",".join(file.get('parents'))
            
            # Move the file to the new folder
            drive_service.files().update(
                fileId=doc_id,
                addParents=folder_id,
                removeParents=previous_parents,
                fields='id, parents'
            ).execute()
        except HttpError as error:
            console.print(f"[yellow]Warning: Could not move file to folder: {error}[/yellow]")
            
    return doc_id

def insert_text(requests, index, text, style="NORMAL_TEXT"):
    """Helper to create an insert text request."""
    if not text:
        return index
        
    requests.append({
        'insertText': {
            'location': {
                'index': index,
            },
            'text': text + "\n"
        }
    })
    
    end_index = index + len(text) + 1
    
    if style == "HEADING_1":
        requests.append({
            'updateParagraphStyle': {
                'range': {
                    'startIndex': index,
                    'endIndex': end_index
                },
                'paragraphStyle': {
                    'namedStyleType': 'HEADING_1',
                },
                'fields': 'namedStyleType'
            }
        })
    elif style == "HEADING_2":
        requests.append({
            'updateParagraphStyle': {
                'range': {
                    'startIndex': index,
                    'endIndex': end_index
                },
                'paragraphStyle': {
                    'namedStyleType': 'HEADING_2',
                },
                'fields': 'namedStyleType'
            }
        })
    elif style == "HEADING_3":
        requests.append({
            'updateParagraphStyle': {
                'range': {
                    'startIndex': index,
                    'endIndex': end_index
                },
                'paragraphStyle': {
                    'namedStyleType': 'HEADING_3',
                },
                'fields': 'namedStyleType'
            }
        })
        
    return end_index

def write_content_to_doc(service, doc_id: str, item: ContentItem, image_url: Optional[str] = None):
    """Writes the blog and social content to the Google Doc."""
    
    requests = []
    index = 1
    
    # 1. Meta Info (Internal)
    meta_text = f"STATUS: READY FOR REVIEW\nSOURCE: {item.source_url}\nPILLAR: {item.blog_content.content_pillar}\n"
    if image_url:
        meta_text += f"IMAGE: {image_url}\n"
    
    index = insert_text(requests, index, meta_text)
    
    # 2. Title Options
    index = insert_text(requests, index, "Title Options", "HEADING_2")
    for i, title in enumerate(item.blog_content.title_options):
        index = insert_text(requests, index, f"{i+1}. {title}")
    
    # 3. Blog Content
    index = insert_text(requests, index, "Blog Draft", "HEADING_1")
    # We insert the full markdown draft as plain text for now. 
    # A robust solution would parse MD and apply formatting, but plain text is often fine for review.
    index = insert_text(requests, index, item.blog_content.full_draft)
    
    # 4. Social Content
    if item.social_content:
        index = insert_text(requests, index, "Social Media Assets", "HEADING_1")
        
        index = insert_text(requests, index, "Instagram", "HEADING_2")
        index = insert_text(requests, index, f"Short Caption:\n{item.social_content.short_caption}\n")
        index = insert_text(requests, index, f"Long Caption:\n{item.social_content.long_caption}\n")
        
        index = insert_text(requests, index, "Carousel Slides", "HEADING_3")
        for i, slide in enumerate(item.social_content.carousel_slides):
            index = insert_text(requests, index, f"Slide {i+1}: {slide}")
            
        index = insert_text(requests, index, "TikTok Script", "HEADING_2")
        index = insert_text(requests, index, item.social_content.tiktok_script)
        
        if item.social_content.tiktok_on_screen_text:
            index = insert_text(requests, index, "On Screen Text:\n" + "\n".join(item.social_content.tiktok_on_screen_text))

    # Execute batch update
    # We might hit limits if too large, but for a blog post it should be fine.
    try:
        service.documents().batchUpdate(documentId=doc_id, body={'requests': requests}).execute()
    except HttpError as e:
        console.print(f"[red]Error writing to doc: {e}[/red]")

def run_draft(dry_run: bool = False):
    creds = get_credentials()
    if not creds and not dry_run:
        return
        
    service = build('docs', 'v1', credentials=creds)
    drive_service = build('drive', 'v3', credentials=creds)
    
    PROCESSED_DRAFTED_DIR.mkdir(parents=True, exist_ok=True)
    
    folder_id = os.getenv("GOOGLE_DRIVE_FOLDER_ID") # Optional
    
    transformed_files = list(PROCESSED_TRANSFORMED_DIR.glob("*.json"))
    console.print(f"Found {len(transformed_files)} transformed items.")
    
    for file_path in transformed_files:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                item = ContentItem(**data)
            
            # Check if already drafted (check existence in drafted dir or status)
            # We prefer checking the file in drafted dir to allow re-runs if deleted
            drafted_path = PROCESSED_DRAFTED_DIR / file_path.name
            if drafted_path.exists():
                 with open(drafted_path, "r", encoding="utf-8") as f:
                    existing = ContentItem(**json.load(f))
                    if existing.status == ProcessingStatus.DRAFTED or existing.google_doc_id:
                        continue
            
            if item.status != ProcessingStatus.TRANSFORMED:
                continue

            console.rule(f"Drafting: {item.title}")
            
            if dry_run:
                console.print(f"[yellow][DRY RUN][/yellow] Would create Google Doc for: {item.title}")
                item.status = ProcessingStatus.DRAFTED
                continue

            # Create Doc
            date_str = datetime.now().strftime('%Y-%m-%d')
            doc_title = f"[REVIEW] {item.blog_content.title_options[0]} - {date_str}"
            doc_id = create_google_doc(service, drive_service, doc_title, folder_id)
            
            console.print(f"Created Doc: https://docs.google.com/document/d/{doc_id}")
            
            # Upload Image if exists
            image_url = None
            if item.featured_image:
                # Resolve local path: /images/blog/xyz.png -> public/images/blog/xyz.png
                # relative to script: ../../public
                local_path = item.featured_image.lstrip("/")
                full_image_path = BASE_DIR.parent.parent / "public" / local_path
                
                if full_image_path.exists():
                    try:
                        file_metadata = {
                            'name': full_image_path.name,
                            'parents': ['1ArYx74pjTJzko_uIssYO_GOV8OBq3_qe'] # AI Blog Images Folder
                        }
                        from googleapiclient.http import MediaFileUpload
                        media = MediaFileUpload(str(full_image_path), mimetype='image/png')
                        img_file = drive_service.files().create(
                            body=file_metadata,
                            media_body=media,
                            fields='id, webViewLink'
                        ).execute()
                        image_url = img_file.get('webViewLink')
                        console.print(f"Uploaded Image: {image_url}")
                    except Exception as e:
                        console.print(f"[red]Failed to upload image: {e}[/red]")

            # Write Content
            write_content_to_doc(service, doc_id, item, image_url)
            
            # Update Item
            item.google_doc_id = doc_id
            item.status = ProcessingStatus.DRAFTED
            item.updated_at = datetime.now()
            
            # Save to drafted
            with open(drafted_path, "w", encoding="utf-8") as f:
                f.write(item.model_dump_json(indent=2))
                
            console.print(f"[green]Successfully drafted:[/green] {item.title}")
            
        except Exception as e:
            console.print(f"[red]Failed to draft {file_path.name}: {e}[/red]")

if __name__ == "__main__":
    run_draft()
