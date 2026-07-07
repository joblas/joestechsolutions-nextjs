# JTS Homepage Redesign Spec — Match CloudyJoe Quality

## Goal
Rewrite the JTS homepage (`src/app/page.tsx`) to match the quality, specificity, and professionalism of cloudyjoe.com. The current homepage feels like AI-generated slop — vague copy, generic icon cards, particle background, no real proof. CloudyJoe feels real because it has specific metrics, real company names, a skills bento grid, stats cards, and professional restraint.

## Reference Source
- **CloudyJoe source code:** `~/cv-joseph-work/src/App.tsx` (2918 lines, React + Vite + Tailwind)
- **CloudyJoe live:** https://cloudyjoe.com
- **JTS source:** `~/joestechsolutions-nextjs/src/app/page.tsx` (523 lines, Next.js 16 + React 19)

## What Makes CloudyJoe Feel High-Quality
1. **Specific hero:** "AI Developer who builds self-healing autonomous & AI systems" — not vague
2. **Professional headshot** in hero (avatar with gradient ring)
3. **Skills bento grid:** 6 competency cards with real descriptions (Multi-Agent AI, Full-Stack, AV Integration, Client-Facing, Cloud, Hardware-Software Bridge)
4. **Work experience timeline:** Real companies (Google, Uber, JTS), dates, bullet points with specific tech
5. **Stats cards:** "14 agents", "24/7 operation", "100% local", "Ollama Cloud model routing"
6. **Case study links:** "Case Study: OpenClaw → Hermes Migration"
7. **Project cards with badges:** "In Beta", "In prod", "Open src"
8. **Theme toggle** (dark/light)
9. **"Let's talk" CTA** with Email + LinkedIn buttons
10. **Restrained animations:** Subtle glow, no particle storms

## What JTS Currently Does Wrong
1. **Hero copy is vague:** "I Help My Friends Fix Their Businesses" — says nothing about what Joe actually does
2. **ParticleBackground (Three.js):** Screams AI template. Remove or replace with subtle CSS glow
3. **Every section has FadeIn/StaggerContainer:** Animation overkill. Use sparingly
4. **Generic icon cards:** No screenshots, no real metrics, placeholder feel
5. **Broken CTAs:** "Let's Talk" buttons link back to the same site (`href="https://www.joestechsolutions.com"`)
6. **No real proof of work visible:** Project screenshots exist in `/public/images/` but aren't shown prominently
7. **VoiceAvatar component:** Empty (hasAudio=false) — remove or hide until ready
8. **No stats:** No metrics anywhere (14 agents, 24/7, 100% local, etc.)
9. **No theme toggle:** Only dark mode
10. **Scrolling logo rows:** Cheap-looking. Replace with a proper stack grid

## Redesign Plan

### 1. Hero Section
- **New headline:** "Custom AI Infrastructure & Apps for SMBs" or "I Build Private AI Systems That Actually Run" — something specific
- **Subheadline:** One sentence with real specifics: "Multi-agent AI running 24/7 on my own stack. Private LLMs for clients. Production apps in React and Next.js. No hype — just things I've shipped."
- **Remove ParticleBackground from hero** — replace with a subtle radial gradient glow (like CloudyJoe's `hero-glow` animation)
- **Remove VoiceAvatar** — not ready, ships empty
- **Fix CTAs:** "See What I Do" → `/services`, "Let's Talk" → `/contact` (NOT back to homepage)
- **Add a status badge** like CloudyJoe's: "Currently operating Hermes — 14 agents, 24/7" with a live dot

### 2. Stats Bar (NEW — below hero)
- 4 stat cards in a row: "14 AI Agents", "24/7 Operation", "100% Local", "5+ Production Apps"
- Use the existing CountUp animation component
- These are REAL numbers from the actual stack

### 3. Services Section (rewrite)
- Keep 3 service tiers but add REAL substance:
  - **The Quick Start ($199):** Keep the featured card but add a screenshot from `/public/images/joe-launch-private-ai.png`
  - **The Back Office ($200-$1,200/mo):** Add a screenshot from `/public/images/joe-deploying-server.png`
  - **Multi-Agent Systems ($8K-$40K+):** Add a screenshot from `/public/images/blog/22-agent-architecture.png`
  - **Custom App Build ($5K-$25K):** Add a screenshot from `/public/images/skate-workshop-hero.png`
- Remove the generic Phosphor icons, use real project screenshots
- Remove Whisper Walkie from this section — it's a free tool, not a service. Move to its own small section or the footer

### 4. Portfolio/Proof Section (major upgrade)
- Instead of just RenFaire + Skate Workshop, show a BENTO GRID of real work:
  - RenFaire Directory (live, revenue-generating) — `/public/images/renfaire-hero.jpg`
  - The Skate Workshop (React Native, 40+ tables) — `/public/images/skate-workshop-hero.png`
  - Hermes Agent System (14 agents, 24/7) — `/public/images/blog/22-agent-architecture.png`
  - Whisper Walkie (open source, 100% local) — use a product screenshot or icon
  - Private AI Setup (client work) — `/public/images/joe-launch-private-ai.png`
- Each card: project name, tag, 1-2 line description, "View" link
- Use existing `AnimatedCard` component but with real images

### 5. Stack Section (simplify)
- Remove the scrolling logo rows (cheap-looking)
- Replace with a clean grid of tech logos (use existing `/public/logos/`)
- Or just link to `/stack` page with a clean CTA
- Keep it minimal — "See the live stack →"

### 6. CTA Section (fix)
- "Got Something That Needs Fixing?" → keep
- Fix the button: link to `/contact` instead of back to homepage
- Add a secondary "Email me" button (mailto:jobs@joestechsolutions.com)

### 7. Global Changes
- **Remove ParticleBackground** from layout.tsx — it's the #1 AI-slop signal
- **Remove VoiceAvatar** from homepage — not ready
- **Reduce animation usage:** FadeIn on hero only, not every section. Use CSS transitions on hover instead
- **Fix the "Let's Talk" links** everywhere — they all point back to the homepage

## Files to Edit
1. `src/app/page.tsx` — full rewrite of homepage
2. `src/app/layout.tsx` — remove ParticleBackground import and usage
3. `src/components/layout/Header.tsx` — fix "Get Private AI" CTA (keep, it's fine)

## Files to Reference
- `~/cv-joseph-work/src/App.tsx` — CloudyJoe source (study the hero, bento grid, stats, timeline)
- `~/joestechsolutions-nextjs/public/images/` — real project screenshots
- `~/joestechsolutions-nextjs/public/logos/` — tech stack logos
- `~/joestechsolutions-nextjs/src/components/animations/` — existing animation components

## Constraints
- Keep the existing color system (teal #0d9488 primary, mint #2dd4bf accent, dark #0d0d12 bg)
- Keep the existing component library (Button, Card, FadeIn, AnimatedCard, etc.)
- Keep Next.js 16 + React 19 + Tailwind v4 stack
- Keep all existing routes (`/services`, `/portfolio`, `/stack`, `/blog`, `/about`, `/contact`, `/private-ai-setup`)
- Keep SEO metadata
- The site must `next build` without errors
- DO NOT add new npm dependencies — use what's already installed

## Build & Verify
After edits:
```bash
cd ~/joestechsolutions-nextjs && npx next build
```
Must pass clean.