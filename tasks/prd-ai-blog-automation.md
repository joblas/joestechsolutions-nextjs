# PRD: Automated AI Education Blog + Content Automation Engine

## Introduction

Build an automated content platform at **/blog** on joestechsolutions.com that transforms curated YouTube videos and articles into original, high-quality educational content about Generative AI. The system automatically generates blog posts plus Instagram and TikTok content from a single source, maintaining Joe's Tech Solutions voice throughout.

This isn't just a blog — it's a confidence-building educational resource that teaches people to use AI practically and responsibly, with a "don't be afraid, but be smart" philosophy.

---

## Problem Statement

1. **Content creation is time-consuming** — Manually writing 3-5 quality posts/week plus social content is unsustainable
2. **AI education is fragmented** — Most content is either too technical, too hyped, or fear-mongering
3. **Multi-channel publishing is repetitive** — Same insights need reformatting for Blog, IG, TikTok
4. **Consistency is hard** — Maintaining voice and quality across high volume requires systems

---

## Goals

- Publish 3-5 original blog posts per week with minimal manual writing
- Auto-generate Instagram + TikTok content from each blog post
- Maintain consistent "Joe's Tech Solutions" voice across all outputs
- Create transformative, original content (not summaries or copies)
- Build a reusable content pipeline that scales
- Keep costs minimal using free/cheap tools + Claude Code automation

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Posts published per week | 3-5 |
| Time from source → published draft | < 30 minutes (automated) |
| Manual review time per post | < 15 minutes |
| Social assets generated per post | 1 IG + 1 TikTok minimum |
| Content originality score | Passes plagiarism check (< 15% similarity) |

---

## Target Audience

**Primary:** Small business owners, solopreneurs, and professionals who are:
- Curious about AI but overwhelmed or skeptical
- Looking for practical "how do I actually use this?" guidance
- Want grounded takes, not hype or doom

**Secondary:**
- Tech-curious general audience
- Other content creators looking for AI workflow ideas

---

## Content Pillars

All content must align with one or more pillars:

### 1. Self-Hosted & Local AI
- Running LLMs locally (Ollama, LM Studio, etc.)
- Privacy-first workflows
- Cloud vs local tradeoffs
- Hardware recommendations

### 2. How to Use LLMs & Prompting
- Prompt thinking frameworks
- "Why this prompt works" explanations
- Workflow prompts for real tasks
- Tool-specific guides (Claude, ChatGPT, etc.)

### 3. How-To Guides & Tutorials
- Step-by-step walkthroughs
- Tool comparisons
- Practical use cases for non-technical users
- Automation setups

### 4. Tech News & AI Commentary
- Calm, grounded updates
- "What this actually means" analysis
- No hype, no fear
- Business implications

### 5. Fun & Engaging AI Content
- Experiments and demos
- New tool discoveries
- Creative use cases
- "I tried X so you don't have to"

### Pillar Visual Identity

| Pillar | Slug | Color | Icon (suggestion) |
|--------|------|-------|-------------------|
| Self-Hosted & Local AI | `local-ai` | Purple (#8B5CF6) | Server/Home |
| How to Use LLMs & Prompting | `prompting` | Blue (#3B82F6) | Chat/Message |
| How-To Guides & Tutorials | `tutorials` | Green (#10B981) | Book/Steps |
| Tech News & AI Commentary | `news` | Orange (#F59E0B) | Newspaper |
| Fun & Engaging AI Content | `experiments` | Pink (#EC4899) | Sparkles/Lab |

---

## Design Requirements

### Design Inspiration
- [artificial-intelligence.blog](https://www.artificial-intelligence.blog/) — Card grid, category navigation, dark theme option
- [Forward Future by Matthew Berman](https://www.forwardfuture.ai/) — Guides vs Articles split, resource hub feel

### Core Design Patterns

| Pattern | Implementation |
|---------|---------------|
| **Content Types** | Guides (evergreen how-tos) vs Articles (timely news/commentary) |
| **Layout** | Card-based grid (4-col desktop, 2-col tablet, 1-col mobile) |
| **Navigation** | Category tabs/pills + search + content type filter |
| **Featured Section** | Hero area with 1-3 highlighted posts |
| **Visual Style** | Clean, modern, optional dark mode, rounded cards with shadows |
| **Discovery** | Browse by pillar, by type, by recency, or search |

### Information Architecture

```
/blog (main hub)
├── /blog/guides (evergreen tutorials)
├── /blog/articles (news, commentary)
├── /blog/category/[pillar] (filtered by pillar)
└── /blog/[slug] (individual post)
```

---

## User Stories

> **Quality Gates for UI Stories:**
> - `pnpm lint` passes
> - `pnpm typecheck` passes  
> - `pnpm build` succeeds (catches MDX/routing issues)
> - Verify in browser using dev-browser skill

---

### Foundation Stories (Must Complete First)

---

### US-F01: Blog Content Model & Types
**Description:** As a developer, I need TypeScript types and content schema so all blog components share consistent data structures.

**Acceptance Criteria:**
- [ ] Create `src/lib/blog/types.ts` with Post, Pillar, ContentType interfaces
- [ ] Define frontmatter schema: title, date, type (guide/article), pillar, excerpt, featured, featuredImage, tags, draft
- [ ] Create `src/lib/blog/pillars.ts` with pillar definitions (slug, name, color, description)
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds

---

### US-F02: MDX Content Loader
**Description:** As a developer, I need functions to load and parse MDX files so pages can fetch blog content.

**Acceptance Criteria:**
- [ ] Create `src/lib/blog/posts.ts` with `getAllPosts()`, `getPostBySlug()`, `getPostsByType()`, `getPostsByPillar()`
- [ ] Parse frontmatter from MDX files in `content/blog/guides/` and `content/blog/articles/`
- [ ] Compute reading time from content length
- [ ] Sort posts by date descending by default
- [ ] Filter out `draft: true` posts in production
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds

---

### US-F03: Sample Content Files
**Description:** As a developer, I need sample MDX files so I can test the blog UI during development.

**Acceptance Criteria:**
- [ ] Create 2 sample guides in `content/blog/guides/` (different pillars)
- [ ] Create 2 sample articles in `content/blog/articles/` (different pillars)
- [ ] Each file has complete frontmatter matching schema
- [ ] At least one marked `featured: true`
- [ ] `pnpm build` succeeds

---

### Blog Hub Stories

---

### US-001a: Blog Hub Page Scaffold
**Description:** As a visitor, I want a /blog page so I can access the blog content.

**Acceptance Criteria:**
- [ ] Create `/blog/page.tsx` route
- [ ] Fetch all posts using content loader
- [ ] Display page title "Blog" and brief intro text
- [ ] Simple list of post titles (placeholder for cards)
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] Verify in browser

---

### US-001b: Blog Hero Section
**Description:** As a visitor, I want to see featured posts prominently so I know what's important.

**Acceptance Criteria:**
- [ ] Create `BlogHero.tsx` component
- [ ] Display 1-3 featured posts (from `featured: true` frontmatter)
- [ ] Fallback to 3 most recent if none featured
- [ ] Hero card shows: title, excerpt, pillar tag, type badge
- [ ] Link to individual post
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-001c: Blog Sections (Guides & Articles)
**Description:** As a visitor, I want separate sections for Guides and Articles on the hub page.

**Acceptance Criteria:**
- [ ] "Latest Guides" section with 4 most recent guides
- [ ] "Latest Articles" section with 4 most recent articles
- [ ] Each section uses PostCard component (or placeholder)
- [ ] "View All Guides" / "View All Articles" links
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-001d: Category Navigation Pills
**Description:** As a visitor, I want category pills so I can quickly filter by topic.

**Acceptance Criteria:**
- [ ] Create `CategoryNav.tsx` component
- [ ] Display all pillars as clickable pills/tabs
- [ ] Each pill links to `/blog/category/[pillar]`
- [ ] Pills use pillar colors from config
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### Post Card Stories

---

### US-004a: Basic Post Card
**Description:** As a visitor, I want post cards so I can scan content quickly.

**Acceptance Criteria:**
- [ ] Create `PostCard.tsx` component
- [ ] Display: title, date, pillar tag, content type badge
- [ ] Link to `/blog/[slug]`
- [ ] Responsive width
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-004b: Post Card Visual Polish
**Description:** As a visitor, I want polished post cards with images and hover effects.

**Acceptance Criteria:**
- [ ] Add featured image (with placeholder fallback)
- [ ] Add excerpt (2-line clamp)
- [ ] Add reading time
- [ ] Pillar tag color-coded
- [ ] Hover state with subtle lift/shadow
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-004c: Post Grid Layout
**Description:** As a visitor, I want posts in a responsive grid layout.

**Acceptance Criteria:**
- [ ] Create `PostGrid.tsx` wrapper component
- [ ] 4 columns on desktop, 2 on tablet, 1 on mobile
- [ ] Consistent gap/spacing
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser (all breakpoints)

---

### Content Type Page Stories

---

### US-002a: Guides List Page
**Description:** As a visitor, I want a /blog/guides page to browse all guides.

**Acceptance Criteria:**
- [ ] Create `/blog/guides/page.tsx` route
- [ ] Fetch all posts with `type: guide`
- [ ] Display in PostGrid
- [ ] Page title: "Guides"
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] Verify in browser

---

### US-002b: Articles List Page
**Description:** As a visitor, I want a /blog/articles page to browse all articles.

**Acceptance Criteria:**
- [ ] Create `/blog/articles/page.tsx` route
- [ ] Fetch all posts with `type: article`
- [ ] Display in PostGrid
- [ ] Page title: "Articles"
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] Verify in browser

---

### US-002c: List Page Pagination
**Description:** As a visitor, I want pagination so I can browse older content.

**Acceptance Criteria:**
- [ ] 12 posts per page
- [ ] "Previous" / "Next" navigation buttons
- [ ] Page number in URL: `/blog/guides?page=2`
- [ ] Disabled state for first/last page
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-002d: List Page Sorting
**Description:** As a visitor, I want to sort posts by different criteria.

**Acceptance Criteria:**
- [ ] Sort dropdown: "Newest", "Oldest", "A-Z"
- [ ] Sort persists in URL params
- [ ] Default: Newest
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### Category Page Stories

---

### US-003a: Category Filter Page
**Description:** As a visitor, I want to browse content by category/pillar.

**Acceptance Criteria:**
- [ ] Create `/blog/category/[pillar]/page.tsx` route
- [ ] Fetch all posts matching pillar
- [ ] Display pillar name as page header
- [ ] Show both guides and articles (labeled)
- [ ] 404 for invalid pillar slugs
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] Verify in browser

---

### US-003b: Category Page Metadata
**Description:** As a visitor, I want category descriptions so I understand what each topic covers.

**Acceptance Criteria:**
- [ ] Display pillar description below header
- [ ] Show post count: "12 posts"
- [ ] Use pillar color as accent
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### Individual Post Page Stories

---

### US-005a: Basic Post Page
**Description:** As a visitor, I want to read individual blog posts.

**Acceptance Criteria:**
- [ ] Create `/blog/[slug]/page.tsx` route
- [ ] Fetch post by slug (searches both guides/ and articles/)
- [ ] Render MDX content
- [ ] Post header: title, date, pillar tag, type badge
- [ ] 404 for invalid slugs
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] Verify in browser

---

### US-005b: Post Page Header & Meta
**Description:** As a visitor, I want complete post metadata visible.

**Acceptance Criteria:**
- [ ] Create `PostMeta.tsx` component
- [ ] Display: author (default: "Joe"), date, reading time, pillar tag, content type
- [ ] Featured image (full-width or constrained)
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-005c: MDX Component Mapping
**Description:** As a visitor, I want rich content formatting in posts.

**Acceptance Criteria:**
- [ ] Create `src/components/blog/mdx/` directory
- [ ] Code blocks with syntax highlighting (use existing or add `shiki`/`prism`)
- [ ] Callout/alert component (info, warning, tip)
- [ ] Image component with caption support
- [ ] Table styling
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser with sample post using all components

---

### US-005d: Table of Contents
**Description:** As a visitor, I want a table of contents so I can navigate long posts.

**Acceptance Criteria:**
- [ ] Create `TableOfContents.tsx` component
- [ ] Auto-generate from H2/H3 headings in content
- [ ] Sticky sidebar on desktop, collapsible on mobile
- [ ] Smooth scroll to section on click
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-005e: Related Posts
**Description:** As a visitor, I want related post suggestions so I can discover more content.

**Acceptance Criteria:**
- [ ] Create `RelatedPosts.tsx` component
- [ ] Show 3 posts from same pillar (excluding current)
- [ ] Fallback to same type if not enough pillar matches
- [ ] Display as mini-cards
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-005f: Post Navigation (Prev/Next)
**Description:** As a visitor, I want previous/next links so I can read sequentially.

**Acceptance Criteria:**
- [ ] Show "Previous Post" and "Next Post" at bottom
- [ ] Navigate within same content type (guide→guide, article→article)
- [ ] Display title of prev/next post
- [ ] Hide if no prev/next exists
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-005g: Post SEO Meta Tags
**Description:** As Joe, I want proper SEO so posts rank well in search.

**Acceptance Criteria:**
- [ ] Generate `<title>` from post title
- [ ] Generate `<meta description>` from excerpt
- [ ] Open Graph tags: og:title, og:description, og:image, og:type
- [ ] Twitter card tags
- [ ] Canonical URL
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds

---

### US-005h: Social Share Buttons
**Description:** As a visitor, I want share buttons so I can share posts easily.

**Acceptance Criteria:**
- [ ] Create `ShareButtons.tsx` component
- [ ] Twitter/X, LinkedIn, Copy Link buttons
- [ ] Copy Link shows "Copied!" feedback
- [ ] Uses post URL and title
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-005i: Post CTA Sections
**Description:** As Joe, I want CTAs in posts to drive conversions.

**Acceptance Criteria:**
- [ ] Create `BlogCTA.tsx` component
- [ ] Newsletter signup CTA (links to existing signup or placeholder)
- [ ] Consultation CTA (links to contact/booking page)
- [ ] Appears after post content, before related posts
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### Search Stories

---

### US-006a: Search Index
**Description:** As a developer, I need a search index so search can be client-side.

**Acceptance Criteria:**
- [ ] Create `src/lib/blog/search.ts`
- [ ] Build search index from: title, excerpt, tags, pillar
- [ ] Index generated at build time (not runtime)
- [ ] Export `searchPosts(query)` function
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds

---

### US-006b: Inline Search Bar
**Description:** As a visitor, I want a search bar on the blog page.

**Acceptance Criteria:**
- [ ] Add search input to /blog page header
- [ ] Filter visible posts as user types
- [ ] Debounce input (300ms)
- [ ] Show result count
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-006c: Search Modal
**Description:** As a visitor, I want a search modal for focused searching.

**Acceptance Criteria:**
- [ ] Create `BlogSearch.tsx` modal component
- [ ] Search icon in blog nav opens modal
- [ ] Keyboard shortcut: Cmd/Ctrl + K
- [ ] Results as list items with title, excerpt preview, pillar
- [ ] Click result navigates to post
- [ ] Escape closes modal
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-006d: Search Empty State
**Description:** As a visitor, I want helpful feedback when search finds nothing.

**Acceptance Criteria:**
- [ ] "No results for 'X'" message
- [ ] Suggest: "Try different keywords" or show popular posts
- [ ] Clear search button
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### Featured Posts Story

---

### US-007: Featured Posts Management
**Description:** As Joe, I want to manually select featured posts.

**Acceptance Criteria:**
- [ ] Frontmatter field: `featured: true` or `featured: 1` (for ordering)
- [ ] Featured posts appear in hero section on /blog
- [ ] Max 3 featured posts displayed
- [ ] Auto-fallback to most recent if none marked featured
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] Verify in browser

---

### Dark Mode Stories

---

### US-008a: Dark Mode Toggle
**Description:** As a visitor, I want a dark mode toggle.

**Acceptance Criteria:**
- [ ] Add theme toggle button to site header
- [ ] Respects system preference by default (`prefers-color-scheme`)
- [ ] Persists choice in localStorage
- [ ] Uses class on `<html>` to avoid hydration mismatch
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-008b: Dark Mode Blog Styling
**Description:** As a visitor, I want blog components styled for dark mode.

**Acceptance Criteria:**
- [ ] PostCard, PostGrid dark variants
- [ ] BlogHero dark variant
- [ ] Post page content dark variant
- [ ] Code blocks have dark theme
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser (both modes)

---

### US-008c: Dark Mode Accessibility Audit
**Description:** As a visitor, I want proper contrast in dark mode.

**Acceptance Criteria:**
- [ ] All text meets WCAG AA contrast (4.5:1 for body, 3:1 for large text)
- [ ] Pillar tag colors readable in dark mode
- [ ] Focus states visible
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### Error & Edge Case Stories

---

### US-009: Blog 404 Page
**Description:** As a visitor, I want a helpful 404 page when a post doesn't exist.

**Acceptance Criteria:**
- [ ] Custom 404 for `/blog/[invalid-slug]`
- [ ] Message: "Post not found"
- [ ] Link back to /blog
- [ ] Suggest recent posts
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

### US-010: Empty State Handling
**Description:** As a visitor, I want helpful messages when sections are empty.

**Acceptance Criteria:**
- [ ] Empty state for: no guides, no articles, no category matches
- [ ] Message: "No posts yet" with context
- [ ] Does not break layout
- [ ] `pnpm typecheck` passes
- [ ] Verify in browser

---

## Content Pipeline User Stories

> **Quality Gates for Pipeline Stories:**
> - `python -m py_compile <file>` passes
> - Script runs successfully on sample input
> - Dry-run mode works (where applicable)
> - Idempotent re-run (no duplicates)

---

### CP-001: Pipeline Config & Schema Validation
**Description:** As a developer, I want validated config loading so the pipeline fails fast on bad configuration.

**Acceptance Criteria:**
- [ ] `config/sources.yaml` validated with Pydantic model on load
- [ ] `config/pillars.yaml` created with pillar definitions (slug, name, color, description)
- [ ] Clear error messages for missing/invalid config
- [ ] `python main.py status` shows loaded sources count
- [ ] Script compiles without errors

---

### CP-002: YouTube Transcript Ingestion
**Description:** As Joe, I want to ingest YouTube video transcripts so I can transform them into blog content.

**Acceptance Criteria:**
- [ ] `python main.py ingest --url "https://youtube.com/..."` fetches transcript
- [ ] Uses `youtube-transcript-api` for caption extraction
- [ ] Saves to `processed/{video_id}.json` with ContentItem schema
- [ ] Skips already-processed videos (idempotent)
- [ ] Logs warning if no transcript available
- [ ] Script compiles without errors

---

### CP-003: YouTube Audio Fallback (Whisper)
**Description:** As Joe, I want audio transcription fallback so videos without captions can still be processed.

**Acceptance Criteria:**
- [ ] If no transcript available, downloads audio via `yt-dlp`
- [ ] Transcribes with `faster-whisper` (local) or AssemblyAI (cloud fallback)
- [ ] Stores transcription in same ContentItem format
- [ ] `--skip-whisper` flag to disable fallback
- [ ] Script compiles without errors

---

### CP-004: Article Ingestion (Trafilatura)
**Description:** As Joe, I want to ingest web articles so I can transform news/blog posts into content.

**Acceptance Criteria:**
- [ ] `python main.py ingest --url "https://example.com/article"` extracts text
- [ ] Uses `trafilatura` for clean text extraction
- [ ] Saves to `processed/{url_hash}.json` with ContentItem schema
- [ ] Skips already-processed URLs (idempotent)
- [ ] Script compiles without errors

---

### CP-005: Channel/Feed Batch Ingestion
**Description:** As Joe, I want to ingest all new content from my approved sources automatically.

**Acceptance Criteria:**
- [ ] `python main.py ingest` (no URL) processes all sources in `sources.yaml`
- [ ] For YouTube channels: fetches latest N videos not yet processed
- [ ] For RSS feeds: fetches latest N articles not yet processed
- [ ] `--limit N` flag to control how many items per source
- [ ] Summary output: "Ingested 3 new items, skipped 5 existing"
- [ ] Script compiles without errors

---

### CP-006: Blog Content Transformation
**Description:** As Joe, I want AI to transform source content into original blog posts.

**Acceptance Criteria:**
- [ ] `python main.py transform` processes all `status=ingested` items
- [ ] Uses Claude API with `blog_transform.md` prompt
- [ ] Generates: title options, outline, full draft, key takeaways
- [ ] Auto-classifies as Guide or Article based on content
- [ ] Tags with content pillar from `pillars.yaml`
- [ ] Updates item to `status=transformed`
- [ ] Script compiles without errors

---

### CP-007: Social Content Generation
**Description:** As Joe, I want AI to generate Instagram and TikTok content from each blog post.

**Acceptance Criteria:**
- [ ] Runs after blog transformation (same `transform` command)
- [ ] Uses `instagram_generate.md` prompt for IG content
- [ ] Uses `tiktok_generate.md` prompt for TikTok script
- [ ] Generates: short caption, long caption, carousel slides, hashtags, TikTok script
- [ ] Stored in ContentItem.social_content
- [ ] Script compiles without errors

---

### CP-008: Voice Consistency Check
**Description:** As Joe, I want the system to flag content that doesn't match my voice.

**Acceptance Criteria:**
- [ ] Voice check runs after transformation
- [ ] Scans for banned words: "revolutionary", "game-changing", "mind-blowing", "scary", etc.
- [ ] Scans for jargon without explanation
- [ ] Adds `voice_warnings` list to ContentItem
- [ ] Logs warnings but doesn't block (human review catches)
- [ ] Script compiles without errors

---

### CP-009: Google Docs Draft Creation
**Description:** As Joe, I want drafts created in Google Docs so I can review and edit before publishing.

**Acceptance Criteria:**
- [ ] `python main.py draft` processes all `status=transformed` items
- [ ] Creates Google Doc using service account
- [ ] Doc includes: blog content, IG content, TikTok script (all sections)
- [ ] Doc title format: `[REVIEW] {title} - {date}`
- [ ] First line: `STATUS: READY FOR REVIEW`
- [ ] Updates item with `google_doc_id` and `status=drafted`
- [ ] Script compiles without errors

---

### CP-010: Approval Status Detection
**Description:** As a developer, I want the system to detect when Joe approves a draft.

**Acceptance Criteria:**
- [ ] `python main.py publish --check` scans all drafted items
- [ ] Reads Google Doc, checks if first line says `STATUS: APPROVED`
- [ ] Lists approved docs ready for publish
- [ ] Does NOT modify anything (read-only check)
- [ ] Script compiles without errors

---

### CP-011: MDX File Publishing
**Description:** As Joe, I want approved content published as MDX files in the correct folder.

**Acceptance Criteria:**
- [ ] `python main.py publish` processes approved docs
- [ ] Extracts blog content from Google Doc
- [ ] Creates MDX file with frontmatter (title, date, pillar, type, excerpt, etc.)
- [ ] Saves to `content/blog/guides/` or `content/blog/articles/` based on type
- [ ] Filename format: `YYYY-MM-DD-slug.mdx`
- [ ] Updates item to `status=published`
- [ ] Updates Google Doc: `STATUS: PUBLISHED`
- [ ] Script compiles without errors

---

### CP-012: Git Commit Automation
**Description:** As Joe, I want published content auto-committed so it deploys automatically.

**Acceptance Criteria:**
- [ ] After MDX file created, runs `git add` + `git commit`
- [ ] Commit message: `content: {title}`
- [ ] `--auto-push` flag to also push to remote
- [ ] `--no-commit` flag to skip git operations
- [ ] Never commits if MDX file is empty/invalid
- [ ] Script compiles without errors

---

### CP-013: Source Attribution Tracking
**Description:** As Joe, I want source attribution tracked internally for my records.

**Acceptance Criteria:**
- [ ] ContentItem stores: source_url, source_type, original_title, original_author
- [ ] Attribution NOT included in published MDX (per PRD non-goal)
- [ ] `python main.py status --sources` lists all processed sources
- [ ] Script compiles without errors

---

### CP-014: Pipeline Run Logging
**Description:** As Joe, I want logs of all pipeline runs so I can debug failures.

**Acceptance Criteria:**
- [ ] All commands log to `logs/pipeline-{date}.log`
- [ ] Log includes: timestamp, command, items processed, success/failure
- [ ] Errors include full stack trace
- [ ] `python main.py status` shows last 5 runs summary
- [ ] Script compiles without errors

---

### CP-015: Dry Run Mode
**Description:** As Joe, I want a dry-run mode so I can preview changes without side effects.

**Acceptance Criteria:**
- [ ] `--dry-run` flag available on all commands
- [ ] Dry run: no API calls, no file writes, no git commits
- [ ] Logs what WOULD happen
- [ ] Exit code 0 if dry run would succeed
- [ ] Script compiles without errors

---

### CP-016: Budget & Rate Limiting
**Description:** As Joe, I want API budget controls so I don't accidentally overspend.

**Acceptance Criteria:**
- [ ] Config option: `daily_claude_budget: 5.00` (USD)
- [ ] Tracks token usage per day in `logs/usage.json`
- [ ] Warns at 80% budget, stops at 100%
- [ ] `python main.py status --usage` shows current spend
- [ ] Script compiles without errors

---

### CP-017: Manual Topic Injection
**Description:** As Joe, I want to manually add topics so I'm not dependent on external sources.

**Acceptance Criteria:**
- [ ] `python main.py ingest --topic "How to use Claude for X" --pillar prompting`
- [ ] Creates ContentItem with `source_type=manual`
- [ ] Skips ingestion, goes straight to transformation
- [ ] Script compiles without errors

---

### US-009: Content Source Ingestion
**Description:** As the system, I need to ingest content from approved YouTube channels and RSS feeds so I have raw material for transformation.

**Acceptance Criteria:**
- [ ] Python script accepts YouTube video URL or channel RSS
- [ ] Python script accepts blog/article RSS feed URLs
- [ ] YouTube transcripts fetched via `youtube-transcript-api` (with `yt-dlp` fallback)
- [ ] Articles extracted via `trafilatura` (clean text, no ads/nav)
- [ ] Source metadata stored: URL, title, author, date, platform
- [ ] Configurable list of approved sources (YAML or JSON)
- [ ] Typecheck/lint passes

---

### US-010: Content Transformation Pipeline
**Description:** As the system, I need to transform raw transcripts/articles into original content so we're not copying sources.

**Acceptance Criteria:**
- [ ] Claude API integration via `anthropic` + `instructor`
- [ ] Structured prompt templates stored in repo (not hardcoded)
- [ ] Transformation produces: unique angle, new examples, Joe's voice
- [ ] Output includes: title options, outline, full draft, key takeaways
- [ ] **Content type auto-assigned**: Guide (how-to, tutorial) vs Article (news, commentary)
- [ ] Timestamps from source mapped to relevant sections
- [ ] Plagiarism check step (flag if >15% similarity to source)
- [ ] Content pillar auto-tagged based on content
- [ ] Typecheck/lint passes

---

### US-011: Google Docs Draft Creation
**Description:** As Joe, I want drafts auto-created in Google Docs so I can review and approve before publishing.

**Acceptance Criteria:**
- [ ] Google Docs API integration (service account)
- [ ] New doc created per content item in designated folder
- [ ] Doc contains:
  - Title options (3)
  - Content type (Guide or Article)
  - Content pillar tag
  - SEO meta description
  - Full blog draft (H2/H3 structured)
  - Instagram caption (short + long versions)
  - Instagram carousel script (slide-by-slide)
  - TikTok script (15-60 sec)
  - Source attribution (internal, not published)
- [ ] Doc named: `[DATE] - [TITLE] - DRAFT`
- [ ] Status field at top: "Ready for Review"
- [ ] Typecheck/lint passes

---

### US-012: Approval & Publishing Flow
**Description:** As Joe, I want to mark a doc "Approved" and have it auto-publish so I don't manually copy/paste.

**Acceptance Criteria:**
- [ ] Script monitors Google Docs folder for "Approved" status
- [ ] On approval, script:
  - Extracts final content from doc
  - Creates MDX file in `/content/blog/guides/` or `/content/blog/articles/`
  - Commits to repo (triggers Vercel deploy)
  - Moves social content to "Social Queue" doc/sheet
  - Updates doc status to "Published"
- [ ] Rollback: can mark "Unpublish" to remove
- [ ] Typecheck/lint passes

---

### US-013: Blog Post MDX Structure
**Description:** As a developer, I need a consistent MDX structure so posts render correctly.

**Acceptance Criteria:**
- [ ] Frontmatter includes: title, date, description, pillar, tags, image, author, type (guide/article), featured
- [ ] MDX supports: code blocks, callouts, images, embeds, tables
- [ ] Auto-generate reading time from word count
- [ ] CTA components available (newsletter signup, consultation)
- [ ] Related posts section (same pillar + same type)
- [ ] Typecheck/lint passes

---

### US-014: Instagram Content Output
**Description:** As Joe, I want Instagram-ready content generated so I can post without rewriting.

**Acceptance Criteria:**
- [ ] Short caption (< 150 chars) with hook
- [ ] Long caption (full context + hashtags)
- [ ] Carousel script: 5-8 slides with text per slide
- [ ] Hook → Key points → CTA structure
- [ ] Hashtag suggestions (10-15, mix of reach + niche)
- [ ] Saved to Social Queue with post reference
- [ ] Typecheck/lint passes

---

### US-015: TikTok Content Output
**Description:** As Joe, I want TikTok scripts generated so I can film quickly.

**Acceptance Criteria:**
- [ ] Script length: 15-60 seconds when read aloud
- [ ] Structure: Hook (3 sec) → Value (40 sec) → CTA (5 sec)
- [ ] On-screen text suggestions per beat
- [ ] Optional: B-roll/shot suggestions
- [ ] Saved to Social Queue with post reference
- [ ] Typecheck/lint passes

---

### US-016: Voice Consistency Enforcement
**Description:** As the system, I need to enforce Joe's Tech Solutions voice so all content sounds authentic.

**Acceptance Criteria:**
- [ ] Voice guide document in repo (tone, phrases, anti-patterns)
- [ ] Prompt templates reference voice guide
- [ ] Post-generation "voice check" step flags:
  - Jargon without explanation
  - Hype language ("revolutionary", "game-changing")
  - Fear language ("AI will replace you")
  - Passive voice overuse
- [ ] Flagged items shown in draft for manual review
- [ ] Typecheck/lint passes

---

### US-017: Source Management
**Description:** As Joe, I want to manage approved content sources so I control what feeds the pipeline.

**Acceptance Criteria:**
- [ ] `sources.yaml` config file with:
  - YouTube channels (by channel ID or handle)
  - RSS feed URLs
  - Source name and category
  - Active/inactive flag
- [ ] CLI command to add/remove sources
- [ ] CLI command to list sources with last-fetched date
- [ ] Typecheck/lint passes

---

### US-002: Content Source Ingestion
**Description:** As the system, I need to ingest content from approved YouTube channels and RSS feeds so I have raw material for transformation.

**Acceptance Criteria:**
- [ ] Python script accepts YouTube video URL or channel RSS
- [ ] Python script accepts blog/article RSS feed URLs
- [ ] YouTube videos are transcribed (using Whisper or free API)
- [ ] Articles are extracted to clean text (no ads, nav, etc.)
- [ ] Source metadata stored: URL, title, author, date, platform
- [ ] Configurable list of approved sources (YAML or JSON)
- [ ] Typecheck/lint passes

---

### US-003: Content Transformation Pipeline
**Description:** As the system, I need to transform raw transcripts/articles into original content so we're not copying sources.

**Acceptance Criteria:**
- [ ] Claude API integration for content transformation
- [ ] Structured prompt templates stored in repo (not hardcoded)
- [ ] Transformation produces: unique angle, new examples, Joe's voice
- [ ] Output includes: title options, outline, full draft, key takeaways
- [ ] Timestamps from source mapped to relevant sections
- [ ] Plagiarism check step (flag if >15% similarity to source)
- [ ] Content pillar auto-tagged based on content
- [ ] Typecheck/lint passes

---

### US-004: Google Docs Draft Creation
**Description:** As Joe, I want drafts auto-created in Google Docs so I can review and approve before publishing.

**Acceptance Criteria:**
- [ ] Google Docs API integration (service account)
- [ ] New doc created per content item in designated folder
- [ ] Doc contains:
  - Title options (3)
  - Content pillar tag
  - SEO meta description
  - Full blog draft (H2/H3 structured)
  - Instagram caption (short + long versions)
  - Instagram carousel script (slide-by-slide)
  - TikTok script (15-60 sec)
  - Source attribution (internal, not published)
- [ ] Doc named: `[DATE] - [TITLE] - DRAFT`
- [ ] Status field at top: "Ready for Review"
- [ ] Typecheck/lint passes

---

### US-005: Approval & Publishing Flow
**Description:** As Joe, I want to mark a doc "Approved" and have it auto-publish so I don't manually copy/paste.

**Acceptance Criteria:**
- [ ] Script monitors Google Docs folder for "Approved" status
- [ ] On approval, script:
  - Extracts final content from doc
  - Creates MDX file in `/content/blog/` with frontmatter
  - Commits to repo (triggers Vercel deploy)
  - Moves social content to "Social Queue" doc/sheet
  - Updates doc status to "Published"
- [ ] Rollback: can mark "Unpublish" to remove
- [ ] Typecheck/lint passes

---

### US-006: Blog Post MDX Structure
**Description:** As a developer, I need a consistent MDX structure so posts render correctly.

**Acceptance Criteria:**
- [ ] Frontmatter includes: title, date, description, pillar, tags, image, author
- [ ] MDX supports: code blocks, callouts, images, embeds
- [ ] Auto-generate reading time from word count
- [ ] CTA components available (newsletter signup, consultation)
- [ ] Related posts section (same pillar)
- [ ] Typecheck/lint passes

---

### US-007: Instagram Content Output
**Description:** As Joe, I want Instagram-ready content generated so I can post without rewriting.

**Acceptance Criteria:**
- [ ] Short caption (< 150 chars) with hook
- [ ] Long caption (full context + hashtags)
- [ ] Carousel script: 5-8 slides with text per slide
- [ ] Hook → Key points → CTA structure
- [ ] Hashtag suggestions (10-15, mix of reach + niche)
- [ ] Saved to Social Queue with post reference
- [ ] Typecheck/lint passes

---

### US-008: TikTok Content Output
**Description:** As Joe, I want TikTok scripts generated so I can film quickly.

**Acceptance Criteria:**
- [ ] Script length: 15-60 seconds when read aloud
- [ ] Structure: Hook (3 sec) → Value (40 sec) → CTA (5 sec)
- [ ] On-screen text suggestions per beat
- [ ] Optional: B-roll/shot suggestions
- [ ] Saved to Social Queue with post reference
- [ ] Typecheck/lint passes

---

### US-009: Voice Consistency Enforcement
**Description:** As the system, I need to enforce Joe's Tech Solutions voice so all content sounds authentic.

**Acceptance Criteria:**
- [ ] Voice guide document in repo (tone, phrases, anti-patterns)
- [ ] Prompt templates reference voice guide
- [ ] Post-generation "voice check" step flags:
  - Jargon without explanation
  - Hype language ("revolutionary", "game-changing")
  - Fear language ("AI will replace you")
  - Passive voice overuse
- [ ] Flagged items shown in draft for manual review
- [ ] Typecheck/lint passes

---

### US-010: Source Management
**Description:** As Joe, I want to manage approved content sources so I control what feeds the pipeline.

**Acceptance Criteria:**
- [ ] `sources.yaml` config file with:
  - YouTube channels (by channel ID or handle)
  - RSS feed URLs
  - Source name and category
  - Active/inactive flag
- [ ] CLI command to add/remove sources
- [ ] CLI command to list sources with last-fetched date
- [ ] Typecheck/lint passes

---

## Functional Requirements

### Blog UI Requirements

| ID | Requirement |
|----|-------------|
| FR-01 | Blog hub (/blog) shall display featured posts, guides section, and articles section |
| FR-02 | Blog shall support two content types: Guides (evergreen) and Articles (timely) |
| FR-03 | Blog shall display content in responsive card grid (4/2/1 columns) |
| FR-04 | Blog shall support filtering by content pillar via category pages |
| FR-05 | Blog shall include client-side search across titles, excerpts, and tags |
| FR-06 | Post cards shall display: image, title, excerpt, pillar tag, type badge, reading time |
| FR-07 | Individual posts shall include: TOC, MDX rendering, related posts, CTAs |
| FR-08 | Blog shall support dark mode with system preference detection |
| FR-09 | Blog shall be fully responsive and mobile-friendly |

### Content Pipeline Requirements

| ID | Requirement | Story |
|----|-------------|-------|
| FR-10 | System shall ingest YouTube videos via transcript API with audio fallback | CP-002, CP-003 |
| FR-11 | System shall ingest articles via `trafilatura` text extraction | CP-004 |
| FR-12 | System shall transform source content into original posts using Claude API | CP-006 |
| FR-13 | System shall auto-classify content as Guide or Article based on content | CP-006 |
| FR-14 | System shall generate Instagram captions and carousel scripts per post | CP-007 |
| FR-15 | System shall generate TikTok scripts per post | CP-007 |
| FR-16 | System shall create Google Docs drafts with all content formats | CP-009 |
| FR-17 | System shall monitor Google Docs for approval status changes | CP-010 |
| FR-18 | System shall publish approved content to correct folder (guides/articles) | CP-011 |
| FR-19 | System shall enforce voice consistency via prompt templates and checks | CP-008 |
| FR-20 | System shall track source attribution internally (not displayed publicly) | CP-013 |
| FR-21 | System shall support manual trigger and scheduled runs | CP-005, CP-017 |
| FR-22 | System shall log all pipeline runs with success/failure status | CP-014 |

---

## Non-Goals (Out of Scope)

- **No auto-posting to social platforms** — Scripts are generated, but Joe posts manually (for now)
- **No video generation** — TikTok scripts are text only; Joe films himself
- **No image generation** — Featured images are placeholders or manually added
- **No comments/engagement system** — Blog is read-only initially
- **No paid CMS** — Must use free tools (MDX, Google Docs, etc.)
- **No n8n or Zapier** — All automation via Claude Code + Python

---

## Technical Considerations

### Tech Stack
| Component | Tool | Why |
|-----------|------|-----|
| Blog frontend | Next.js (existing) | Already in use |
| Content storage | MDX files in `/content/blog/guides/` + `/content/blog/articles/` | Free, version-controlled, organized by type |
| YouTube Ingest | `youtube-transcript-api` + `yt-dlp` | Fast text access with robust audio fallback |
| Web Ingest | `trafilatura` | Fastest, most accurate article text extraction |
| Transcription | `faster-whisper` (local) | 4x faster than standard Whisper, runs on CPU/GPU |
| AI Client | `anthropic` + `instructor` | Native structured outputs for reliable JSON |
| CLI / Runner | `typer` + `rich` | "Dummy proof" CLI with beautiful logging |
| Draft management | Google Docs API | Free, familiar, collaborative |
| Scheduling | GitHub Actions (Ingest) / Local (Heavy) | Hybrid approach for cost/performance |

### File Structure
```
/joestechsolutions-nextjs
├── /content
│   └── /blog
│       ├── /guides
│       │   └── 2026-01-18-local-llm-setup.mdx
│       └── /articles
│           └── 2026-01-18-claude-mcp-update.mdx
├── /src
│   └── /app
│       └── /blog
│           ├── page.tsx                    # Blog hub
│           ├── /guides
│           │   └── page.tsx                # All guides
│           ├── /articles
│           │   └── page.tsx                # All articles
│           ├── /category
│           │   └── /[pillar]
│           │       └── page.tsx            # Category filter
│           └── /[slug]
│               └── page.tsx                # Individual post
├── /src/components/blog
│   ├── BlogHero.tsx                        # Featured posts section
│   ├── PostCard.tsx                        # Individual card
│   ├── PostGrid.tsx                        # Card grid layout
│   ├── PostContent.tsx                     # MDX renderer
│   ├── CategoryNav.tsx                     # Pillar filter pills
│   ├── ContentTypeFilter.tsx               # Guide/Article toggle
│   ├── BlogSearch.tsx                      # Search modal
│   ├── TableOfContents.tsx                 # Auto TOC
│   ├── RelatedPosts.tsx                    # Related content
│   ├── PostMeta.tsx                        # Date, reading time, tags
│   └── BlogCTA.tsx                         # Newsletter/consult CTAs
├── /src/lib/blog
│   ├── mdx.ts                              # MDX processing
│   ├── posts.ts                            # Post fetching/filtering
│   └── search.ts                           # Client-side search
├── /scripts/content-pipeline
│   ├── cli.py                              # Typer CLI entry point
│   ├── ingest.py                           # YouTube + RSS ingestion
│   ├── transform.py                        # Claude transformation
│   ├── draft.py                            # Google Docs creation
│   ├── publish.py                          # MDX publishing
│   ├── voice_check.py                      # Voice enforcement
│   └── config/
│       ├── sources.yaml                    # Approved sources
│       ├── pillars.yaml                    # Category definitions + colors
│       ├── voice_guide.md                  # Tone documentation
│       └── prompts/
│           ├── blog_transform.md
│           ├── classify_content.md
│           ├── instagram_generate.md
│           └── tiktok_generate.md
```

### API Keys Required
- `ANTHROPIC_API_KEY` — Claude API
- `GOOGLE_SERVICE_ACCOUNT_JSON` — Google Docs API
- `ASSEMBLYAI_API_KEY` (optional) — If using cloud transcription

---

## Example End-to-End Workflow

```
1. TRIGGER: New video detected on approved YouTube channel
   └── OR: Manual run with specific URL

2. INGEST (ingest.py)
   ├── Download audio from YouTube
   ├── Transcribe with Whisper
   ├── Extract: title, channel, date, duration
   └── Save to /temp/raw/{video_id}.json

3. TRANSFORM (transform.py)
   ├── Load transcript + metadata
   ├── Call Claude with blog_transform.md prompt
   ├── Generate: title options, outline, full draft
   ├── Map timestamps to sections
   ├── Run plagiarism check
   ├── Tag content pillar
   └── Save to /temp/transformed/{video_id}.json

4. SOCIAL GENERATE (transform.py continued)
   ├── Call Claude with instagram_generate.md prompt
   ├── Call Claude with tiktok_generate.md prompt
   └── Append to transformed JSON

5. VOICE CHECK (voice_check.py)
   ├── Scan for flagged patterns
   ├── Add warnings to output
   └── Pass/flag status

6. DRAFT (draft.py)
   ├── Create Google Doc from template
   ├── Fill with all content
   ├── Set status: "Ready for Review"
   └── Log doc URL

7. [MANUAL] Joe reviews, edits, sets status: "Approved"

8. PUBLISH (publish.py)
   ├── Detect "Approved" status
   ├── Extract content from Doc
   ├── Create MDX file with frontmatter
   ├── Git commit + push (triggers deploy)
   ├── Move social content to Social Queue
   └── Update Doc status: "Published"
```

---

## Guardrails & Compliance

### Content Originality
- [ ] All content must be transformative — new angle, new examples, new structure
- [ ] Plagiarism check must pass (< 15% similarity)
- [ ] Source attribution stored internally but NOT displayed as "based on X"
- [ ] Never copy quotes without attribution

### Voice Enforcement
- [ ] No jargon without explanation
- [ ] No hype words: "revolutionary", "game-changing", "mind-blowing"
- [ ] No fear words: "AI will replace", "jobs are gone", "scary"
- [ ] Confidence-building tone: "Here's how to think about this"

### Legal/Ethical
- [ ] Only use approved sources (no random scraping)
- [ ] No copyrighted images (use owned, licensed, or AI-generated only)
- [ ] Accurate claims — flag anything that needs citation
- [ ] Disclose AI-assisted creation if legally required

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Claude API cost overrun | Medium | Medium | Set daily/weekly budget caps; use Haiku for simple tasks |
| Content sounds robotic | Medium | High | Strong voice guide + human review step |
| Source content dries up | Low | Medium | Diversify sources; allow manual topic injection |
| Google Docs API limits | Low | Low | Batch operations; cache auth tokens |
| Transcription errors | Medium | Low | Human review catches; use highest quality setting |

---

## Future Enhancements (Post-MVP)

1. **Auto-post to social platforms** — Instagram Graph API, TikTok for Business
2. **AI-generated featured images** — DALL-E or Midjourney integration
3. **Newsletter integration** — Auto-generate weekly digest from published posts
4. **Analytics dashboard** — Track which pillars/topics perform best
5. **Idea backlog** — AI suggests topics based on trending + gaps
6. **Multi-author support** — If team grows
7. **Video generation** — Auto-create TikToks from scripts (HeyGen, etc.)

---

## Open Questions

1. **Whisper local vs cloud?** — Local is free but needs GPU; cloud (AssemblyAI) has free tier
2. **Social Queue format?** — Google Sheet vs second Google Doc vs Notion?
3. **How to handle failed transformations?** — Retry? Skip? Alert?
4. **Scheduling frequency?** — Check for new content hourly? Daily?

---

## Appendix: Voice Guide Summary

**Joe's Tech Solutions Voice:**

| Do | Don't |
|----|-------|
| "Here's how I think about this..." | "This is revolutionary!" |
| "The practical takeaway is..." | "AI will change everything!" |
| "Let's break this down..." | "It's complicated, but..." |
| "You can start with..." | "Experts say..." |
| Clear, direct sentences | Jargon without context |
| Slightly opinionated | Wishy-washy hedging |
| Confidence-building | Fear-inducing |

**Tone:** Friendly expert explaining to a smart friend who's new to the topic.

---

*This PRD captures the automated AI education blog system for joestechsolutions.com — transforming curated sources into original, multi-channel content while maintaining Joe's authentic voice.*

*Created: 2026-01-18*
