from enum import Enum
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime

class SourceType(str, Enum):
    YOUTUBE = "youtube"
    ARTICLE = "article"
    MANUAL = "manual"
    ROUNDUP = "roundup"

class ProcessingStatus(str, Enum):
    NEW = "new"
    INGESTED = "ingested"
    TRANSFORMED = "transformed"
    DRAFTED = "drafted"
    PUBLISHED = "published"
    FAILED = "failed"

class BlogOutput(BaseModel):
    title_options: List[str]
    content_pillar: str
    content_type: str  # "guide" or "article"
    meta_description: str
    outline: List[str]
    full_draft: str
    key_takeaways: List[str]

class SocialOutput(BaseModel):
    short_caption: str
    long_caption: str
    carousel_slides: List[str]
    hashtags: List[str]
    tiktok_script: str
    tiktok_on_screen_text: List[str]

class YoutubeSource(BaseModel):
    id: str
    name: str
    active: bool = True

class RssSource(BaseModel):
    url: str
    name: str
    active: bool = True

class RoundupConfig(BaseModel):
    pillar: str
    days: List[str]
    lookback_days: int = 7

class ImageConfig(BaseModel):
    provider: str = "gemini"
    resolution: int = 1024
    style: str = "modern-tech"

class SourceConfig(BaseModel):
    youtube: List[YoutubeSource] = Field(default_factory=list)
    rss: List[RssSource] = Field(default_factory=list)
    roundups: List[RoundupConfig] = Field(default_factory=list)
    image_gen: ImageConfig = Field(default_factory=ImageConfig)

class PillarConfig(BaseModel):
    slug: str
    name: str
    color: str
    description: str

class ContentItem(BaseModel):
    id: str
    source_type: SourceType
    source_url: str
    title: str
    author: str
    publish_date: Optional[datetime] = None
    raw_content: str  # Transcript or article text
    metadata: Dict[str, Any] = Field(default_factory=dict)
    
    # Processing state
    status: ProcessingStatus = ProcessingStatus.NEW
    blog_content: Optional[BlogOutput] = None
    social_content: Optional[SocialOutput] = None
    google_doc_id: Optional[str] = None
    featured_image: Optional[str] = None
    voice_warnings: List[str] = Field(default_factory=list)
    error_message: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
class DailyUsage(BaseModel):
    date: str
    tokens_input: int = 0
    tokens_output: int = 0
    cost_usd: float = 0.0

class UsageLog(BaseModel):
    daily: Dict[str, DailyUsage] = Field(default_factory=dict)
    total_cost: float = 0.0
