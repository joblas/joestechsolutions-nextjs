# Joe's Tech Solutions — Website Overhaul Plan (JTS-OS v7 Alignment)

**Author:** CTO (Lurkr) · **Executor:** Claude Fable 5 · **Repo:** `joestechsolutions-nextjs/` · **Base:** `https://www.joestechsolutions.com` · **Date:** 2026-07-07

## 0. Ground Rules (read before touching anything)

1. **Quadient firewall.** Never write "Quadient" or any reference to Joe's current day-job employer anywhere — copy, comments, alt text, metadata, commits. (Grep confirms zero today — keep it so.)
2. **Path separation.** JTS-only. No career/résumé/job-search content. **Remove `jobs@joestechsolutions.com`** (`src/app/page.tsx:479`) → `joe@joestechsolutions.com`. Audit all `mailto:`.
3. **OpenClaw is RETIRED.** Purge every "OpenClaw" mention + `openclaw.ai`/`openclaw.com` link. Runtime is **Hermes**.
4. **Titles.** Joe = experienced **IC / first-line PM (~7 yrs)**. Never "senior/principal", never "Engineer" in Joe's title — use **"Operator"** or **"Builder"**. ("Engineering" as an *agent/department* name in the org is fine.)
5. **Voice.** Blue-collar builder, first person singular ("I", not "we/our"). "No hype — just things I've shipped." Kill "we/our" on `/services` + `/about`.
6. **Non-defense only.**
7. **Design system fixed.** Keep stack + `FadeIn`/`AnimatedCard`/`MagneticButton`/`CountUp`/`StaggerContainer`/`TextReveal`/`ParallaxSection`, palette (`#0d0d12`/`#1c1c26`/`#0d9488`/`#2dd4bf`/`#8B5CF6`), Space Grotesk, dark, mobile-first. **No new dependencies.**

## 1. Information Architecture

**Current (verified):** `/` · `/services` · `/about` · `/contact` · `/portfolio` (+ skate-workshop, renfaire-directory, cbarrgs) · `/agent-system` · `/stack` (+`data.ts`) · `/blog` (+2 posts, `[slug]`) · `/private-ai-setup` (+checkout/qualify/success/industries/[vertical]) · `/whisper-walkie` · `/admin/payment-links` · `/api/*` (create-checkout, verify-payment, webhooks/stripe, intakes, newsletter/subscribe).

**Target:**
- **Stays (content-updated):** `/`, `/about`, `/contact`, `/portfolio/*`, `/agent-system`, `/stack`, `/blog/*`, `/whisper-walkie`, `/private-ai-setup/**` (pricing reconcile only — no Stripe ID changes), `/admin/payment-links`.
- **Major rewrite:** `/services` → rebuilt around 6-tier model.
- **Added:** `/solutions` (hub), `/morning-brief` (new product), `/business-os` (new product), `/prompt-library` (lead magnet).
- **Removed/archived:** E-commerce block on `/services`, duplicate Web/Mobile cards, "Our Process" section, `jobs@` mailto, all OpenClaw refs.

**Nav (`Header.tsx`):** `Services → Solutions` (→ `/solutions`); keep 6 items + "Get Private AI" CTA (→ `/private-ai-setup`). `/services` route survives as a rebuilt page → **no redirect needed**. "Free: Prompt Library" goes in the **Footer only**.

## 2. Page-by-Page Spec

### 2.1 `/` Homepage (`src/app/page.tsx`)
- Status badge `:189` `14 → 25` agents.
- Hero CTA "See What I Do" → `/solutions` (was `/services`).
- **`stats[]` (`:36-41`)** → `25` agents · `24/7` · `32` cron jobs · `100%` private (§3.3).
- **New `AngleBand`** between Stats and Services (§3.1).
- Services preview: heading "Four ways…" → **"Six ways I work with you."**; replace 4-item `services[]` with 6 tiers from `lib/tiers.ts`; featured = Quick Start ("Most Popular") or Morning Brief ("New").
- `portfolio[]`: Hermes `14→25 agents` + alt `22-agent→25-agent`; Skate Workshop `In beta→Paused`; Whisper Walkie `Open src→Archive · MIT`.
- Newsletter "The JTS Brief": add "Want it daily + personalized? See Morning Brief →".
- Final CTA `:479` `mailto:jobs@… → mailto:joe@joestechsolutions.com`.

### 2.2 `/solutions` NEW hub (`app/solutions/page.tsx`)
Hero → 4-solution grid (Private AI Setup, Back Office Automation, Business OS, Agent System) → `PricingLadder` (from `lib/tiers.ts`) → `AngleBand` → CTA `/contact`. Metadata canonical `/solutions`. JSON-LD `OfferCatalog` from `TIERS`.

### 2.3 `/services` rebuild (`app/services/page.tsx`)
**Delete:** E-commerce block (~371–432), duplicate Web/Mobile stagger cards (~273–369), "Custom Solutions — Contact for Quote" (~434–494), "Our Process" (~551–599). All `href="https://www.joestechsolutions.com"` dead-loops → `/contact`.
**Rebuild:** one anchored `AnimatedCard` per tier — `#morning-brief`, `#quick-start`, `#back-office`, `#business-os`, `#custom-build`, `#agent-system` — data from `lib/tiers.ts`. Keep Whisper Walkie free strip, relabel "Free tools I built and still ship." Voice sweep: "we/our" → "I/my".

### 2.4 `/morning-brief` NEW $199/mo (`app/morning-brief/{page,layout}.tsx`, `faqs.ts`)
Mirror `/private-ai-setup` structure: Hero "Your business, briefed every morning." → what-it-does → `SampleBriefCard` mock → pricing ($199/mo) → FAQ → CTA. Copy: "I've gotten a Hermes brief at 6am for months — standups, inbox, calendar, blockers. Same play, shipped to you." **Stripe:** new `MORNING_BRIEF_PRICE_ID`; **gate CTA → `/contact?tier=morning-brief` until product exists.**

### 2.5 `/business-os` NEW $999/mo (`app/business-os/{page,layout}.tsx`, `faqs.ts`)
Hero "The operations layer for your whole business." → positioning (Back Office automates tasks; Business OS runs the operation) → included → pricing ($999/mo) → comparison strip vs Back Office $499 / Agent System $8K+ → FAQ → CTA. **Stripe:** distinct `BUSINESS_OS_PRICE_ID` — **never reuse `MANAGED_*`** (§10.2). Gate until product exists.

### 2.6 `/prompt-library` NEW lead magnet (`app/prompt-library/page.tsx`)
Hero "The prompt library I actually use." → categories (ops/sales/content/coding/research) → `LeadMagnetForm`. **Impl A (recommended):** reuse `POST /api/newsletter/subscribe` with `source:"prompt-library"`; on success reveal `public/downloads/jts-prompt-library.pdf`. Surface from footer + blog CTAs.

### 2.7 `/about` (`app/about/page.tsx`)
Reframe "Client Zero" to approved angle (first-person builder, not résumé). Drop "Former Waymo ops manager" seniority flex; `:91` "engineering skills" → "hands-on build experience"; never "Engineer" for Joe. **Waymo:** flag to Joe (§10.5). Scrub "we/our". Fix dead CTAs (`:54`, `:310`) → `/contact`.

### 2.8 `/agent-system` (`page.tsx`, `faqs.ts`, `layout.tsx`)
Org (~232): **6 C-Suite (CTO/Lurkr, Chief of Staff, CFO, COO, CMO, +1), 6 VPs (Engineering, Infrastructure, Product, +3), 25 agents.** `27+ cron → 32 cron` (`:274`, `:427`, FAQ). Reconcile stat tiles with `/stack`. Tier label = **Enterprise Agent System $8K–$40K+**. Keep `faqs.ts`/`layout.tsx` mirror in sync.

### 2.9 `/stack` — see §7.1.
### 2.10 `/portfolio` + children — Skate Workshop `In beta → Paused` (update child status banner too); Whisper Walkie `Open src → Archive · MIT`; Hermes `14→25`, alt `22→25`.
### 2.11 `/whisper-walkie` — reframe as Archive/open-source; `:618` "traditional engineering team" → "a traditional dev team".
### 2.12 `/blog` — §5 (OpenClaw purge mandatory; count reconcile optional; surface Prompt Library CTA).

## 3. Content Updates

**3.1 Approved angle (verbatim):**
> Look around — businesses are automating scheduling, content, lead routing, project updates. It's not future talk, it's happening now. I build the same automations for JTS first, then ship them to clients. Same play, same stack, same 2am break I found for myself.

Placement: homepage band, `/solutions`, `/about` hero support, `/services` intro. Never "I eat my own cooking"/manifesto.

**3.2 The 6-Tier Model (source of truth = `src/lib/tiers.ts`):**

| # | Tier | Price | Route | One-liner |
|---|---|---|---|---|
| 1 | Morning Brief | $199/mo | `/morning-brief` | Your business, briefed every morning — calendar, inbox, pipeline, blockers in a 6am digest. |
| 2 | Quick Start | $199 one-time | `/private-ai-setup` | Private AI on your machine or server. You own it. No subscriptions. |
| 3 | Back Office | $499/mo | `/services#back-office` | AI assistant on your server — outreach, scheduling, reporting; tuned monthly. |
| 4 | Business OS | $999/mo | `/business-os` | Full operations layer — briefings, automation, reporting, a light agent org. |
| 5 | Custom Build | $2,500+ | `/services#custom-build` | Mobile/web apps built with the stack I use daily — React Native, Next.js, AI-assisted. |
| 6 | Enterprise Agent System | $8K–$40K+ | `/agent-system` | Orchestrator delegating to specialized sub-agents — the architecture I run for JTS. |

**Purge:** "Back Office $200–$1,200/mo", "Custom App Build $5K–$25K", "E-commerce $5K–$50K", duplicate "Web/Mobile $5K–$25K".

⚠️ **Private-AI funnel pricing stays as-is.** `src/lib/pricing.ts` (`local $199` / `cloud $499+$29/mo` / `enterprise $999+$79/mo`) drives the **live Stripe checkout** for `/private-ai-setup` — delivery-mode prices for Quick Start. Do NOT rewrite to match the ladder. The ladder is marketing/nav; the funnel is transactional. Overlap: Quick Start = $199 = `local`.

**3.3 `stats[]` (`page.tsx:36-41`):**
```ts
const stats: Stat[] = [
  { value: 25,  suffix: "",  label: "AI agents in production",   count: true },
  { value: 0,   suffix: "",  label: "24/7 unattended operation", count: false, display: "24/7" },
  { value: 32,  suffix: "",  label: "Scheduled cron jobs",       count: true },
  { value: 100, suffix: "%", label: "Local & private by default",count: true },
];
```

**3.4 `portfolio[]` (`page.tsx:94-140`):** Hermes `tag:"In prod • 25 agents"`, `alt:"25-agent architecture"`; Skate Workshop `tag:"Paused • React Native"`; Whisper Walkie `tag:"Archive · MIT"`.

**3.5 `services[]` → 6 tiers (`page.tsx:53-92`):** replace 4-item array with 6 from `lib/tiers.ts`; featured = Quick Start ("Most Popular") or Morning Brief ("New"); heading "Six ways I work with you."

## 4. New Pages Summary

| Route | File(s) | Type | Stripe? | Blocking dep |
|---|---|---|---|---|
| `/solutions` | `app/solutions/page.tsx` | Hub | No | `lib/tiers.ts` |
| `/morning-brief` | `app/morning-brief/{page,layout}.tsx`, `faqs.ts` | Product | Yes (new price) | Stripe product |
| `/business-os` | `app/business-os/{page,layout}.tsx`, `faqs.ts` | Product | Yes (new price) | Stripe product |
| `/prompt-library` | `app/prompt-library/page.tsx` (+opt `api/prompt-library/route.ts`) | Lead magnet | No | PDF in `public/downloads/` |

**Gating rule:** Stripe pages ship with CTA → `/contact?tier=…` until product + price ID exist. The `create-checkout` demo-mode guard covers only private-AI types — it won't protect a new tier with a wrong-but-valid ID.

## 5. Removals & Archives

| Item | File | Action |
|---|---|---|
| `jobs@` mailto | `page.tsx:479` | → `joe@joestechsolutions.com` |
| OpenClaw copy/link | `blog/replace-saas-with-ai-agents/BlogContent.tsx:13,62,83,267` | "OpenClaw"→"Hermes"; drop `openclaw.ai` link (→ `/stack`) |
| OpenClaw refs | `content/blog/22-agent-ai-team-architecture.ts:11,16,30,105,110` | "OpenClaw"→"Hermes"; drop `openclaw.com` |
| OpenClaw tag | `content/blog/replace-saas-with-ai-agents.ts:11` | remove from `tags[]` |
| E-commerce block | `services/page.tsx:371-432` | delete |
| Dup Web/Mobile cards | `services/page.tsx:273-369` | fold into Custom Build |
| "Custom Solutions" | `services/page.tsx:434-494` | delete |
| "Our Process" | `services/page.tsx:551-599` | rewrite first-person or cut |
| Dead-loop CTAs | `services`, `about` | → `/contact` |
| "27+ cron" | `agent-system/page.tsx:274,427` | → "32 cron" |
| "14 agents" | `page.tsx:106,189` | → "25 agents" |

**Archive (keep routes live):** Whisper Walkie (open-source archive), Skate Workshop (Paused). The "22-Agent" blog post is dated/historical — OpenClaw removal mandatory; count reconcile optional (prefer an editor's note "team has since grown to 25 — see /stack").

## 6. Component Changes

**New (reuse primitives; no new deps):** `TierCard` (`ui/TierCard.tsx`), `PricingLadder` (`ui/PricingLadder.tsx`), `SampleBriefCard` (`ui/SampleBriefCard.tsx`), `LeadMagnetForm` (`components/LeadMagnetForm.tsx`), `AngleBand` (`ui/AngleBand.tsx`).

**Modified:** `Header.tsx` (Services→Solutions); `Footer.tsx` (Products → 6 tiers/4 solutions, add Prompt Library, Whisper Walkie "Archive", fix `/services#agent-systems` → `/agent-system`); `NewsletterSignup.tsx` (add optional `source` prop); `seo/JsonLd.tsx` (§8).

## 7. Data File Updates

**7.1 `stack/data.ts`:** update `lastUpdated` + comment; **reconcile node count** — `services[]` says GitNexus "29K+" (~`:81`) vs `stats[]` "60K+" (~`:117`), pick the true value and unify; consider adding `{label:"AI agents",value:"25"}`, `{label:"Cron jobs",value:"32"}`; verify "24 Ollama Cloud models"/"7-model fallback" against `~/.hermes/config.yaml`; no OpenClaw/day-job.

**7.2 NEW `src/lib/tiers.ts`** — canonical ladder (import into homepage, `/solutions`, `/services`):
```ts
// Marketing tier ladder — NOT lib/pricing.ts (that's the Stripe funnel for /private-ai-setup)
export type Tier = {
  id: "morning-brief"|"quick-start"|"back-office"|"business-os"|"custom-build"|"agent-system";
  name: string; price: string; cadence: "monthly"|"one-time"|"from";
  href: string; category: string; blurb: string; features: string[];
  badge?: "New"|"Most Popular"|"Most Impactful";
  accent: "#0d9488"|"#2dd4bf"|"#8B5CF6";
  stripeReady: boolean; // false → CTA routes to /contact until Stripe product exists
};
export const TIERS: Tier[] = [ /* 6 entries per §3.2 */ ];
```

**7.3 `src/lib/pricing.ts`:** do NOT change price IDs or `local/cloud/enterprise` structure. Add comment: `pricing.ts:enterprise` ($999 Managed AI) ≠ marketing "Enterprise Agent System" ($8K–$40K). Leave line 86 "system prompt engineering" (service, not title).

**7.4 `lib/blog.ts` / `content/blog/*.ts`:** purge OpenClaw; optional count reconcile; no day-job.

## 8. SEO / Schema

**8.1 Metadata:** new pages get canonical `/solutions`, `/morning-brief`, `/business-os`, `/prompt-library`. **Standardize OG host on `www`** — homepage uses `https://joestechsolutions.com` (`page.tsx:16`) while others use `www`; unify to match JsonLd/sitemap/BASE_URL.

**8.2 JSON-LD (`seo/JsonLd.tsx`):** `founder.jobTitle` `"Founder & Lead Developer"` → **"Founder & Builder"**; add `OfferCatalog`/`Service` nodes driven by `TIERS`; add `Service` schema (Morning Brief $199/MONTH, Business OS $999/MONTH) on their pages; add `BreadcrumbSchema` on new pages.

**8.3 `sitemap.ts`:** add `/solutions` (0.9), `/morning-brief` (0.9), `/business-os` (0.9), `/prompt-library` (0.7); verify all `blogSlugs[]` resolve; keep archived routes; keep `/admin/payment-links` noindex.

## 9. Implementation Order

- **Phase 0 (data spine, no visual risk):** create `lib/tiers.ts`; reconcile `stack/data.ts`; global sweep (OpenClaw purge, `jobs@`→`joe@`, dead-loop CTAs → `/contact`, unify `www`).
- **Phase 1 (copy/number fixes):** homepage (25/32, AngleBand, 6 tiers, email); `/agent-system` (6/6/25, 32 cron); `/about` (titles/voice/CTAs); `/portfolio`+`/whisper-walkie` (Paused/Archive); blog OpenClaw purge.
- **Phase 2 (new non-transactional):** `/solutions` + components; `/services` rebuild; `/prompt-library` + form + PDF; Header/Footer/sitemap/JSON-LD.
- **Phase 3 (Stripe-blocked):** `/morning-brief` + `/business-os` with CTAs gated to `/contact`; then create Stripe products/prices → env vars → extend `SetupType`/route validation → wire checkout → flip `stripeReady`.
- **Phase 4 (verify):** `next build` + typecheck; click every CTA; private-AI Stripe test-mode regression check; mobile/Lighthouse.

## 10. Risk & Careful Notes

1. **Stripe (highest risk).** `pricing.ts` holds LIVE price IDs; `create-checkout/route.ts` validates only `local|cloud|managed`. New products need new products/price IDs/env vars/validation. Gate new CTAs to `/contact` until then. Demo-mode guard fires only on `REPLACE_ME`/missing secret — not a wrong-but-valid ID.
2. **Naming collision.** Marketing "Enterprise Agent System" ($8K–$40K) vs `pricing.ts` key `enterprise` ($999 managed). Business OS ($999/mo) is a THIRD distinct product → new `BUSINESS_OS_PRICE_ID`, never `MANAGED_*`. Separate namespaces; comment both.
3. **Redirects/sitemap.** Nav rename is label-only; `/services` stays → no redirect. If later made canonical `/solutions`, add a 308 `next.config` redirect and update all hrefs. Add new routes to `sitemap.ts` in the same PR that ships them.
4. **Anchors.** Footer/homepage use `/services#back-office`, `#agent-systems`, `#custom-app`. On rebuild, preserve/update every anchor id (`#back-office`,`#business-os`,`#custom-build`,`#agent-system`) and fix every linker.
5. **Waymo (`/about`).** Quadient = firewalled current employer (absent — keep it so). Waymo = *former* credential, not firewalled, but "ops manager" seniority framing violates IC/first-line-PM guidance. Keep only with Joe's sign-off; reframe to ops discipline or "large-scale operations background".
6. **Newsletter vs Morning Brief.** Free weekly "The JTS Brief" ≠ paid $199/mo "Morning Brief." Keep naming distinct in UI.
7. **Blog counts.** Prefer editor's note over silently rewriting "22 agents" in a dated post. OpenClaw removal mandatory regardless.
8. **Image alt/OG.** `22-agent-architecture.png` filename may stay; `alt` describing current state → "25-agent".
9. **No new deps/animations.** Keep page-level components as server components (for `metadata`); `"use client"` only on interactive leaves.
10. **Pre-merge gate.** `grep -rin "openclaw\|quadient" src/` must return 0.

**Appendix A — pre-merge checklist:** grep openclaw/quadient → 0 · grep `jobs@` → 0 · grep `14 agent`/`27 cron` → 0 · no homepage-loop CTAs · no "Engineer" in Joe's title · tier pricing from `tiers.ts` / funnel from `pricing.ts` · new routes in sitemap · OG hosts `www` · Stripe CTAs gated · `next build` + typecheck pass.