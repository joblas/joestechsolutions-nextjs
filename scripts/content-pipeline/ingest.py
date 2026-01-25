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

from models import ContentItem, SourceType, ProcessingStatus, SourceConfig

console = Console()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ingest")

BASE_DIR = Path(__file__).parent
PROCESSED_DIR = BASE_DIR / "processed" / "raw"
CONFIG_PATH = BASE_DIR / "config" / "sources.yaml"

def load_config() -> SourceConfig:
    with open(CONFIG_PATH, "r") as f:
        data = yaml.safe_load(f)
        return SourceConfig(**data)

def save_item(item: ContentItem, dry_run: bool = False):
    if dry_run:
        console.log(f"[yellow][DRY RUN][/yellow] Would save item: {item.id} ({item.title})")
        return

    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    file_path = PROCESSED_DIR / f"{item.id}.json"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(item.model_dump_json(indent=2))

def item_exists(item_id: str) -> bool:
    return (PROCESSED_DIR / f"{item_id}.json").exists()

def transcribe_with_whisper(video_id: str) -> str:
    """Download audio and transcribe using faster-whisper."""
    import yt_dlp
    from faster_whisper import WhisperModel
    import tempfile
    
    console.log(f"[yellow]Falling back to Whisper for {video_id}...[/yellow]")
    
    with tempfile.TemporaryDirectory() as tmpdir:
        audio_file = Path(tmpdir) / "audio.mp3"
        ydl_opts = {
            'format': 'bestaudio/best',
            'outtmpl': str(audio_file).replace(".mp3", ""),
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
            'quiet': True,
        }
        
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([f"https://www.youtube.com/watch?v={video_id}"])
            
            # Transcription
            model_size = "base" # base, small, medium, large-v3
            model = WhisperModel(model_size, device="cpu", compute_type="int8")
            
            segments, info = model.transcribe(str(audio_file), beam_size=5)
            
            full_text = []
            for segment in segments:
                full_text.append(segment.text)
                
            return " ".join(full_text)
        except Exception as e:
            console.print(f"[red]Whisper transcription failed for {video_id}: {e}[/red]")
            return None

def process_youtube(video_id: str, channel_name: str, skip_whisper: bool = False) -> ContentItem:
    # Use yt-dlp to get metadata first (fast)
    import yt_dlp
    dt = datetime.now()
    title = "Unknown Title"
    author = channel_name
    duration = 0
    
    try:
        with yt_dlp.YoutubeDL({'quiet': True}) as ydl:
            info = ydl.extract_info(video_id, download=False)
            title = info.get('title', 'Unknown Title')
            author = info.get('uploader', channel_name)
            upload_date = info.get('upload_date')
            duration = info.get('duration')
            if upload_date:
                dt = datetime.strptime(upload_date, "%Y%m%d")
    except Exception as e:
        logger.warning(f"Could not fetch metadata for {video_id}: {e}")

    text_content = None
    try:
        # Fetch transcript (prefer English)
        transcript_data = YouTubeTranscriptApi.get_transcript(video_id, languages=['en', 'en-US', 'en-GB'])
        formatter = TextFormatter()
        text_content = formatter.format_transcript(transcript_data)
    except Exception as e:
        logger.warning(f"No transcript found for {video_id}: {e}")
        if not skip_whisper:
            text_content = transcribe_with_whisper(video_id)

    if not text_content:
        return None

    return ContentItem(
        id=video_id,
        source_type=SourceType.YOUTUBE,
        source_url=f"https://www.youtube.com/watch?v={video_id}",
        title=title,
        author=author,
        publish_date=dt,
        raw_content=text_content,
        status=ProcessingStatus.INGESTED,
        metadata={"duration": duration}
    )

def process_rss_article(url: str, source_name: str) -> ContentItem:
    downloaded = trafilatura.fetch_url(url)
    if not downloaded:
        return None
        
    result = trafilatura.extract(downloaded, include_comments=False, include_tables=False, with_metadata=True)
    metadata = trafilatura.extract_metadata(downloaded)
    
    if not result:
        # Fallback to simple extract if metadata extraction failed or return what we have
        result = trafilatura.extract(downloaded)
        if not result:
            return None
        
    # Create ID from URL hash or slug
    import hashlib
    item_id = hashlib.md5(url.encode()).hexdigest()
    
    title = metadata.title if metadata and metadata.title else "Unknown Article"
    author = metadata.author if metadata and metadata.author else source_name
    
    # Try to parse date, fallback to now
    pub_date = datetime.now()
    if metadata and metadata.date:
        try:
            pub_date = datetime.strptime(metadata.date, "%Y-%m-%d")
        except:
            pass

    return ContentItem(
        id=item_id,
        source_type=SourceType.ARTICLE,
        source_url=url,
        title=title,
        author=author,
        publish_date=pub_date,
        raw_content=result,
        status=ProcessingStatus.INGESTED,
        metadata={"site": metadata.sitename} if metadata else {}
    )

def run_ingest(url: str = None, topic: str = None, pillar: str = None, skip_whisper: bool = False, dry_run: bool = False):
    new_items = 0

    if topic:
        import hashlib
        item_id = hashlib.md5(f"manual-{topic}".encode()).hexdigest()
        if item_exists(item_id):
            console.log(f"[yellow]Item already exists:[/yellow] {item_id} (Topic: {topic})")
            return
            
        item = ContentItem(
            id=item_id,
            source_type=SourceType.MANUAL,
            source_url="manual",
            title=topic,
            author="Manual Injection",
            publish_date=datetime.now(),
            raw_content=f"Topic: {topic}",
            status=ProcessingStatus.INGESTED,
            metadata={"manual_topic": True, "forced_pillar": pillar}
        )
        save_item(item, dry_run=dry_run)
        console.log(f"[green]Successfully injected manual topic:[/green] {topic}")
        return

    if url:
        console.log(f"Ingesting single URL: {url}")
        item = None
        if "youtube.com" in url or "youtu.be" in url:
            if dry_run:
                console.log(f"[yellow][DRY RUN][/yellow] Would fetch YouTube metadata/transcript for {url}")
            else:
                import yt_dlp
                with yt_dlp.YoutubeDL({'quiet': True}) as ydl:
                    try:
                        info = ydl.extract_info(url, download=False)
                        video_id = info.get('id')
                        if item_exists(video_id):
                            console.log(f"[yellow]Item already exists:[/yellow] {video_id}")
                            return
                        item = process_youtube(video_id, info.get('uploader', 'Manual Ingest'), skip_whisper=skip_whisper)
                    except Exception as e:
                        console.print(f"[red]Error extracting YouTube info: {e}[/red]")
                        return
        else:
            if dry_run:
                console.log(f"[yellow][DRY RUN][/yellow] Would fetch article content for {url}")
            else:
                # Check if it exists (using MD5 of URL)
                import hashlib
                item_id = hashlib.md5(url.encode()).hexdigest()
                if item_exists(item_id):
                    console.log(f"[yellow]Item already exists:[/yellow] {item_id}")
                    return
                item = process_rss_article(url, "Manual Ingest")
        
        if item:
            save_item(item, dry_run=dry_run)
            console.log(f"[green]Successfully ingested:[/green] {item.title}")
        return

    config = load_config()
    
    # 1. Process YouTube Channels
    # Note: To get latest videos from a channel without API key, we can use yt-dlp flat-playlist
    import yt_dlp
    
    if config.youtube:
        for channel in config.youtube:
            if not channel.active:
                continue
                
            channel_id = channel.id
            console.log(f"Checking channel: {channel.name}")
            
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
                            if dry_run:
                                console.log(f"[yellow][DRY RUN][/yellow] Would process video: {video_id}")
                                new_items += 1
                                continue
                                
                            item = process_youtube(video_id, channel.name, skip_whisper=skip_whisper)
                            if item:
                                save_item(item, dry_run=dry_run)
                                new_items += 1
                                console.log(f"[green]Ingested:[/green] {item.title}")
                except Exception as e:
                    console.print(f"[red]Error checking channel {channel.name}: {e}[/red]")

    # 2. Process RSS Feeds
    if config.rss:
        for feed in config.rss:
            if not feed.active:
                continue
            
            console.log(f"Checking RSS feed: {feed.name}")
            try:
                # Basic RSS parsing without external heavy lib for now
                import feedparser
                d = feedparser.parse(feed.url)
                
                for entry in d.entries[:5]: # Last 5 items
                    url = entry.link
                    # Create ID from URL hash
                    import hashlib
                    item_id = hashlib.md5(url.encode()).hexdigest()
                    
                    if item_exists(item_id):
                        continue
                        
                    console.log(f"Found new article: {entry.title}")
                    if dry_run:
                        console.log(f"[yellow][DRY RUN][/yellow] Would process article: {url}")
                        new_items += 1
                        continue
                        
                    item = process_rss_article(url, feed.name)
                    if item:
                        save_item(item, dry_run=dry_run)
                        new_items += 1
                        console.log(f"[green]Ingested:[/green] {item.title}")
            except ImportError:
                console.print("[yellow]feedparser not installed, skipping RSS ingestion. Add it to requirements.txt[/yellow]")
            except Exception as e:
                console.print(f"[red]Error checking RSS feed {feed.name}: {e}[/red]")
    
    console.log(f"Ingest complete. {new_items} new items processed.")

if __name__ == "__main__":
    run_ingest()
