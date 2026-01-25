# Content Automation Pipeline

This pipeline automates the creation of blog posts and social media content for Joe's Tech Solutions by ingesting YouTube videos and RSS feeds, transforming them with AI, and creating Google Docs drafts.

## Setup

1. **Prerequisites**
   - Python 3.10+ installed
   - A Google Cloud Project with Docs, Drive, and Generative Language APIs enabled
   - An Anthropic API Key (for Claude content generation)
   - A Google API Key (for Nano Banana Pro image generation)

2. **Environment Variables**
   Create a `.env` file in the project root (or ensure these are set):
   ```
   ANTHROPIC_API_KEY=sk-...
   GOOGLE_SERVICE_ACCOUNT_JSON=path/to/service-account.json
   GOOGLE_DRIVE_FOLDER_ID=optional-folder-id
   GOOGLE_API_KEY=your-gemini-api-key
   ```

3. **Getting a Google API Key (for AI Image Generation)**
   
   The pipeline uses **Google Nano Banana Pro** (Gemini 3 Pro Image) to generate featured images.
   
   a. Go to [Google AI Studio](https://aistudio.google.com/apikey)
   b. Click "Create API Key"
   c. Copy the key and add it to your `.env` file as `GOOGLE_API_KEY`
   
   **Pricing**: Nano Banana Pro has a free tier. Check [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) for current limits.

4. **Install Dependencies**
   The `run_pipeline.bat` script handles this automatically.
   
   Manual install:
   ```bash
   cd scripts/content-pipeline
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   ```

## Usage

**Easiest Way:** Double-click `run_pipeline.bat` in the project root.

**CLI Usage:**
```bash
cd scripts/content-pipeline
python main.py all       # Run everything (ingest -> transform -> draft)
python main.py ingest    # Fetch new content from YouTube/RSS
python main.py transform # Generate AI content (blog + social + images)
python main.py draft     # Create Google Docs drafts
python main.py publish   # Publish approved docs to MDX
python main.py roundup   # Generate aggregated roundup posts
python main.py status    # View pipeline stats
```

### Roundup Posts (Aggregated Content)
```bash
python main.py roundup --pillar news --days 7     # Manual: News roundup for last 7 days
python main.py roundup --scheduled                 # Auto: Run all due roundups (Tues/Thurs)
python main.py roundup --pillar local-ai --days 3  # Self-Hosted AI roundup, last 3 days
```

Roundups combine multiple sources into a single comprehensive post with:
- Synthesized insights (not just summaries)
- "What This Means For You" section
- AI-generated featured image (collage style)

## Workflow

1. **Ingest** - Fetches transcripts from YouTube channels and articles from RSS feeds
2. **Transform** - Uses Claude to generate original blog posts + social content
3. **Draft** - Creates Google Docs with all content for review
4. **[Manual]** - Review in Google Docs, change "STATUS: READY FOR REVIEW" to "STATUS: APPROVED"
5. **Publish** - Converts approved docs to MDX files, commits to git

### Publish Options
```bash
python main.py publish                    # Interactive mode (asks before each publish)
python main.py publish --no-confirm       # Auto-publish all approved docs
python main.py publish --auto-push        # Also push to remote after commit
```

## Configuration

- **Sources**: Edit `scripts/content-pipeline/config/sources.yaml` to add YouTube channels or RSS feeds.
- **Prompts**: Edit Markdown files in `scripts/content-pipeline/config/prompts/` to change the AI persona or output format.

## Troubleshooting

- **Missing Transcripts**: The pipeline relies on `youtube-transcript-api`. If a video has no captions, it will be skipped (logs warning).
- **API Errors**: Check your `ANTHROPIC_API_KEY` and Google Service Account permissions.
