import os
import json
import logging
from typing import List
from datetime import datetime
import yaml
from pathlib import Path
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound
from youtube_transcript_api.formatters import TextFormatter
import trafilatura
from rich.console import Console

from models import ContentItem, SourceType, ProcessingStatus

console = Console()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ingest")

PROCESSED_DIR = Path("scripts/content-pipeline/processed/raw")
CONFIG_PATH = Path("scripts/content-pipeline/config/sources.yaml")

def load_config():
    with open(CONFIG_PATH, "r") as f:
        return yaml.safe_load(f)

def save_item(item: ContentItem):
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    file_path = PROCESSED_DIR / f"{item.id}.json"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(item.model_dump_json(indent=2))

def item_exists(item_id: str) -> bool:
    return (PROCESSED_DIR / f"{item_id}.json").exists()

def process_youtube(video_id: str, channel_name: str) -> ContentItem:
    try:
        # Try fetching transcript
        # Note: In a real prod env, we might want to check for manually created captions vs auto-generated
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
        
        # Prefer manual english, fallback to auto english
        try:
            transcript = transcript_list.find_manually_created_transcript(['en'])
        except:
            transcript = transcript_list.find_generated_transcript(['en'])
            
        formatter = TextFormatter()
        text_content = formatter.format_transcript(transcript.fetch())
        
        # We'd typically use the YouTube Data API to get title/metadata, 
        # but to keep it "dummy proof" and free without API keys if possible, 
        # we can use oembed or just basic page scraping if needed.
        # For now, let's assume we might need `yt-dlp` for metadata if we want to be robust.
        # But for speed, let's use a lightweight request or just the transcript + placeholder title if lazy.
        # BETTER: Use yt-dlp to get metadata only (fast)
        import yt_dlp
        with yt_dlp.YoutubeDL({'quiet': True}) as ydl:
            info = ydl.extract_info(video_id, download=False)
            title = info.get('title', 'Unknown Title')
            author = info.get('uploader', channel_name)
            upload_date = info.get('upload_date') # YYYYMMDD
            
            # Parse date
            dt = datetime.strptime(upload_date, "%Y%m%d") if upload_date else datetime.now()

        return ContentItem(
            id=video_id,
            source_type=SourceType.YOUTUBE,
            source_url=f"https://www.youtube.com/watch?v={video_id}",
            title=title,
            author=author,
            publish_date=dt,
            raw_content=text_content,
            status=ProcessingStatus.INGESTED,
            metadata={"duration": info.get('duration')}
        )

    except (TranscriptsDisabled, NoTranscriptFound):
        logger.warning(f"No transcript found for {video_id}")
        # Here we would fallback to Whisper (local) if configured
        # returning None for now to keep it simple
        return None
    except Exception as e:
        logger.error(f"Error processing YouTube {video_id}: {e}")
        return None

def process_rss_article(url: str, source_name: str) -> ContentItem:
    downloaded = trafilatura.fetch_url(url)
    if not downloaded:
        return None
        
    result = trafilatura.extract(downloaded, include_comments=False, include_tables=False, with_metadata=True)
    metadata = trafilatura.extract_metadata(downloaded)
    
    if not result:
        return None
        
    # Create ID from URL hash or slug
    import hashlib
    item_id = hashlib.md5(url.encode()).hexdigest()
    
    return ContentItem(
        id=item_id,
        source_type=SourceType.ARTICLE,
        source_url=url,
        title=metadata.title if metadata and metadata.title else "Unknown Article",
        author=metadata.author if metadata and metadata.author else source_name,
        publish_date=datetime.strptime(metadata.date, "%Y-%m-%d") if metadata and metadata.date else datetime.now(),
        raw_content=result,
        status=ProcessingStatus.INGESTED,
        metadata={"site": metadata.sitename} if metadata else {}
    )

def run_ingest():
    config = load_config()
    new_items = 0
    
    # 1. Process YouTube Channels
    # Note: To get latest videos from a channel without API key, we can use yt-dlp flat-playlist
    import yt_dlp
    
    if "youtube" in config:
        for channel in config["youtube"]:
            if not channel.get("active", True):
                continue
                
            channel_id = channel["id"]
            console.log(f"Checking channel: {channel['name']}")
            
            ydl_opts = {
                'quiet': True,
                'extract_flat': True,
                'playlistend': 5, # Only check last 5 videos
            }
            
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                try:
                    # Support channel ID, handle (@) or full URL
                    if "youtube.com" in channel_id or "youtu.be" in channel_id:
                        url = channel_id
                    elif channel_id.startswith("@"):
                        url = f"https://www.youtube.com/{channel_id}"
                    else:
                        url = f"https://www.youtube.com/channel/{channel_id}"
                    
                    info = ydl.extract_info(url, download=False)
                    
                    if 'entries' in info:
                        for entry in info['entries']:
                            video_id = entry['id']
                            if item_exists(video_id):
                                continue
                                
                            console.log(f"Found new video: {entry.get('title', video_id)}")
                            item = process_youtube(video_id, channel['name'])
                            if item:
                                save_item(item)
                                new_items += 1
                                console.log(f"[green]Ingested:[/green] {item.title}")
                except Exception as e:
                    console.print(f"[red]Error checking channel {channel['name']}: {e}[/red]")

    # 2. Process RSS Feeds
    if "rss" in config:
        for feed in config["rss"]:
            if not feed.get("active", True):
                continue
            
            console.log(f"Checking RSS feed: {feed['name']}")
            try:
                # Basic RSS parsing without external heavy lib for now
                import feedparser
                d = feedparser.parse(feed["url"])
                
                for entry in d.entries[:5]: # Last 5 items
                    url = entry.link
                    # Create ID from URL hash
                    import hashlib
                    item_id = hashlib.md5(url.encode()).hexdigest()
                    
                    if item_exists(item_id):
                        continue
                        
                    console.log(f"Found new article: {entry.title}")
                    item = process_rss_article(url, feed["name"])
                    if item:
                        save_item(item)
                        new_items += 1
                        console.log(f"[green]Ingested:[/green] {item.title}")
            except ImportError:
                console.print("[yellow]feedparser not installed, skipping RSS ingestion. Add it to requirements.txt[/yellow]")
            except Exception as e:
                console.print(f"[red]Error checking RSS feed {feed['name']}: {e}[/red]")
    
    console.log(f"Ingest complete. {new_items} new items processed.")

if __name__ == "__main__":
    run_ingest()
