from enum import Enum
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime

class SourceType(str, Enum):
    YOUTUBE = "youtube"
    ARTICLE = "article"

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
    error_message: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
