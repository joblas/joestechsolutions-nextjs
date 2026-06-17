// NOTE FOR REVIEWER (Joe):
// SEO decision: kept the original slug "22-agent-ai-team-architecture" to preserve
// inbound links and search rankings on the most-read post on the site. The title,
// excerpt, and body now describe Hermes (16 agents), not OpenClaw (22). If you'd
// rather rename the slug, ping me — but breaking a stable URL on the flagship
// post usually isn't worth it.
//
// Date decision: kept 2026-02-18. This post is the public postmortem of a
// migration that finished in production before the publish date. The migration
// itself happened in production over the weeks prior. We can update if you want
// a different "publish as migration postmortem" date.
//
// Image decision: kept the original ogImage path (/images/blog/22-agent-architecture-og.png)
// and the inline image map. The 22-agent-architecture-og.png is the social card
// referenced by the URL you already have out in the world. Swap to a new image
// whenever the design is ready; the path here is just a string.
//
// New image paths: removed inline references to 22-agent-org-chart.png and
// 22-agent-workflow.png because the org chart and pipeline are stale (OpenClaw
// naming). Kept 22-agent-architecture.png and 22-agent-standup.png as the most
// still-relevant diagrams. If you want me to drop those too, say the word.

import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "22-agent-ai-team-architecture",
  title: "From 22 Agents to 16 That Compose: Migrating My Own Production AI System",
  excerpt:
    "I built a 22-agent AI team, ran it in production for months, and tore it down. What replaced it is fewer agents, smarter delegation, and a model stack that finally has a point. Here's what I learned migrating the system that runs my business.",
  date: "2026-02-18",
  readTime: 9,
  author: "Joe Blas",
  tags: [
    "AI Agents",
    "Multi-Agent Architecture",
    "Hermes",
    "Migrated",
    "Production",
    "Small Business",
  ],
  seo: {
    title:
      "From 22 Agents to 16 That Compose: A Production Migration Postmortem | Joe's Tech Solutions",
    description:
      "A real-world case study in migrating from 22 specialized agents to 16 that compose. What broke, what worked, what I'd do differently. Running in production on Hermes today.",
    ogImage: "/images/blog/22-agent-architecture-og.png",
  },
  images: {
    "/images/blog/22-agent-architecture.png": { width: 2200, height: 2050 },
    "/images/blog/22-agent-standup.png": { width: 900, height: 870 },
  },
  content: `
<p class="lead">I run a 16-agent production AI system 24/7 that handles ops, sales, engineering, and creative for a one-man consultancy out of San Diego. It replaced a 22-agent system I built before it. This post is the postmortem of that migration, what I'd do differently, and why fewer agents with delegation beat more agents with silos.</p>

<p>If you've been here before, you might remember the <a href="/blog/22-agent-ai-team-architecture">old version of this post</a>. It described the 22-agent version, on a stack called OpenClaw, that I've since retired. This is the rewrite. Same business, different architecture, four months of real production between the two.</p>

<h2>The 22-Agent System</h2>

<p>Eighteen months ago I stood up the first version of this thing. Twenty-two named agents. Four "directors" who reported up to a CTO. The CTO reported to me.</p>

<p>The cast looked something like this:</p>

<ul>
  <li><strong>Lurkr (CTO)</strong> — orchestration, judgment calls, the only one who talked to me</li>
  <li><strong>Chief, Summit, Nexus, Halfpipe</strong> — directors of operations, business, engineering, and the skate workshop project</li>
  <li><strong>Bridge, Dispatch, Ledger</strong> — ops sub-agents (comms, calendar, invoicing)</li>
  <li><strong>Radar, Quill, Muse, Compass</strong> — business sub-agents (leads, proposals, marketing, strategy)</li>
  <li><strong>Forge, Nimbus, Tensor, Sentinel, Helm</strong> — engineering sub-agents (code, infra, ML, review, deploy)</li>
  <li><strong>Kickflip, Grind, Ollie, Canvas, Rail, Deck</strong> — skate workshop sub-agents (product, dev, QA, design, backend, community)</li>
</ul>

<p>Twenty-two agents, each with one job, all routed through a director layer, all funneled to a CTO. It looked like an org chart because I wanted it to feel like a real team. And for a while it did.</p>

<p>The problem is that a real team is not what a one-person consultancy needs at 11pm on a Tuesday.</p>

<h2>What Actually Broke</h2>

<p>Three things broke, and they broke at the same time.</p>

<p><strong>The director layer was theater.</strong> I added Chief, Summit, Nexus, and Halfpipe because I was copying a human org structure. In a real company, directors triage, prioritize, and make judgment calls. In my system, they were just routing messages. Every escalation went up, every reply came down. The latency it added didn't buy me anything except a beautiful standup message in Telegram every morning.</p>

<p><strong>Handoffs multiplied failure modes.</strong> When a lead came in, Radar flagged it, Summit triaged, Quill drafted, I signed off, Bridge onboarded, Dispatch scheduled, Ledger invoiced. Seven agents, six handoffs, four different model contexts. Every handoff was a place where context could get lost, retried, or misrouted. The system's reliability was the product of seven reliabilities. That math doesn't get better with more agents.</p>

<p><strong>Model tiering was complicated and not paying for itself.</strong> I was running Opus on the CTO, Sonnet on the directors, Haiku on the leaf workers. The cost curve was fine. The cognitive cost of figuring out <em>why</em> something went wrong was not. When a message stalled between Summit and Quill, I had to reason about two different model contexts, two different prompt caches, and a routing decision that one of them made based on inputs the other one never saw. The tiering was supposed to save money. It cost me debug time.</p>

<p>None of these were catastrophic on their own. Together, they meant I was spending more time running the system than the system was saving me.</p>

<h2>The Moment I Knew It Had To Change</h2>

<p>I was debugging a missed invoice. The client had paid. Stripe confirmed. But Ledger never fired the receipt email. The trail went: Stripe webhook → n8n → Ledger → Bridge → email. Something in that chain failed silently around 2am.</p>

<p>I spent forty minutes following logs across four agents and three model contexts before I found the bug. It was a one-line check that Haiku got wrong on a slightly weird string in the customer name. The fix was trivial. The time it cost me to find it was the bug I cared about.</p>

<p>That night I opened a blank page and started sketching what the system would look like if I had no ego about it. If I treated the 22-agent design as a draft, not a deliverable.</p>

<h2>What Replaced It: Hermes, 16 Agents</h2>

<p>Hermes is the rewrite. Sixteen agents across four domains — engineering, ops and business, creative, and product. No directors. No CTO with a different model. No org chart cosplay.</p>

<p>Each agent is a specialist at one job. The difference is that agents can delegate to each other directly when they need help, instead of routing through a layer that's just there to look like a company.</p>

<p>If a lead comes in, the lead agent writes the proposal, hands it to me for signoff, hands the signed project to ops, and ops takes it from there. Same business outcome as before. Two handoffs instead of seven. One model context per agent. I sign one proposal, hit send, and the rest happens without me reading a single standup.</p>

<p>The director layer is gone. The standups are gone. The names like Chief and Summit and Halfpipe are gone. What replaced them is direct delegation and shorter context chains.</p>

<h2>The New Model Stack</h2>

<p>Model tiering is still the difference between affordable and not. But I stopped trying to map models onto an org chart. I mapped them onto <em>what kind of thinking the task actually needs</em>.</p>

<pre><code>Default                    → minimax-m3:cloud         1M context, multimodal
Code implementation        → kimi-k2.7-code:cloud     coding-tuned, 30% less thinking overhead
Long-horizon reasoning     → glm-5.2:cloud            heavy thinker, 10:1 think-to-output
Creative + research        → qwen3.5:cloud            multimodal
Code review                → qwen3-coder-next:cloud
Test runner                → devstral-small-2:24b-cloud
Monitoring                 → gpt-oss:20b-cloud
Fallback chain             → gpt-oss:20b → qwen3.5 → gemma4:e2b (local)</code></pre>

<p>Most agents run on the default model. The long-horizon ones — code-architect, debugger, security-auditor, tech-writer — get the heavy thinker. The code-implementer gets a coding-tuned model because it's measurably faster at shipping and uses 30% less thinking budget. Test runner and monitoring get small models that don't need to be brilliant, they need to be cheap and fast.</p>

<p>The fallback chain matters more than the tiering. When the primary model is down, traffic goes to the next one. When that's down, the next. The local model at the end means I can keep working when the cloud is unreachable. I have never lost an agent to a model outage since I shipped this.</p>

<p>The total cost is lower than the 22-agent system. The total capability per agent is higher. That's the point of the migration.</p>

<h2>The Infrastructure That Stayed The Same</h2>

<p>I did not rewrite the plumbing. Boring infrastructure is reliable infrastructure, and the plumbing was already working.</p>

<ul>
  <li><strong>Telegram</strong> — primary communication channel. I read the important things in one place.</li>
  <li><strong>Slack</strong> — agent-to-agent coordination for engineering workflows.</li>
  <li><strong>GitHub</strong> — code lives here, PR review flow.</li>
  <li><strong>n8n</strong> — webhook orchestration. Stripe hits it, form submissions hit it, the agents pick up the events.</li>
  <li><strong>Stripe</strong> — invoicing and payment tracking.</li>
  <li><strong>Tailscale</strong> — mesh network. Nothing is exposed to the public internet.</li>
  <li><strong>systemd + journald</strong> — each agent is a managed service with logs.</li>
  <li><strong>Resend</strong> — transactional email for receipts and notifications.</li>
  <li><strong>FormSubmit</strong> — handles form submissions for the smaller client projects.</li>
</ul>

<p>None of this changed between the 22-agent version and the 16-agent version. The plumbing was never the problem. The orchestration on top of it was.</p>

<h2>What I Shipped On Top Of It (The Real Proof)</h2>

<p>A system is only worth talking about if it's actually doing work. Here's what runs on Hermes today.</p>

<p><strong>Willie's Skate Workshop.</strong> React Native + Expo SDK 53 + Supabase backend. Eighteen edge functions. Forty-plus tables. Stripe Connect for coach subscriptions. Real client — an Olympic coach — using it daily. 297 TypeScript files, 104,913 lines of code. The CoachReviewScreen with a Skia canvas annotation engine is the locked workflow; it's where coach and athlete meet inside the app.</p>

<p>It hasn't shipped v0.1 yet. Seven iterations over ten months. Each iteration taught me something about the workflow, and I rebuilt. The Skate Workshop is the case study for "small business will pay for vertical software done right" — even when the small business is a single coach with a hard problem.</p>

<p><strong>Whisper Walkie.</strong> Open-source, 100% local, push-to-talk speech-to-text. Free. It exists to prove the hardware-software bridge is something I do, not something I read about. No revenue. Reputation asset.</p>

<p><strong>Zach — Hostinger KVM ops, $8 a month.</strong> Recurring monthly engagement. The pattern: take a job someone hates doing, do it for them, charge for the relief. Zach hated the manual server work. I built the automation. He pays a small monthly retainer. The server never goes down quietly.</p>

<p><strong>Van — Archive Hair Salon in Sacramento.</strong> Custom Expo React Native app, currently in build. Three working screens — FormulaList, FormulaCapture, FormulaDetail — with JSON persistence. 1,189 lines of code so far. Replaces a stack the salon was duct-taping together with paper, a Squarespace site, and Venmo. Real business, real workflow, shipping in iterations.</p>

<p>These aren't demos. They're what Hermes runs. The agents write the code, review the PRs, deploy the builds, and ship the receipts.</p>

<h2>What I Got Wrong The First Time</h2>

<p>The honest version.</p>

<p>I built the 22-agent system because I wanted it to look like a team. I named agents after things I liked. I drew org charts. I wrote standup messages that made me feel like I was running a real company. None of that helped my business. Some of it actively hurt it.</p>

<p>I conflated "more agents" with "more capability." It isn't. More agents means more handoffs, more context boundaries, more places for things to go wrong. The 16-agent system is more capable per agent. The system as a whole handles more work with less orchestration overhead.</p>

<p>I tried to model a human org onto a system that doesn't have human constraints. A human team needs directors to triage because humans can't context-switch across 22 simultaneous threads. My system can. The director layer was solving a problem I didn't have.</p>

<p>I thought the tiered model costs were a clever optimization. They were. But I forgot to price in the cognitive cost of debugging across model boundaries. The new stack has fewer model boundaries per task, which means I spend less time on incident response and more time shipping.</p>

<p>If I could go back and do it again, I would have started with eight agents, not twenty-two. I would have added agents only when I had a real workflow that needed one, not because the org chart had an empty box.</p>

<h2>What I'd Tell Someone Building This From Scratch</h2>

<p>Start with one agent that does the job you actually need. Add a second when that agent can't do something in one turn. Add a third when the second has to hand off work it shouldn't be doing. Resist the urge to grow the system until you have a specific workflow that's bottlenecked.</p>

<p>Pick a default model and stick with it. Tier only when you have a measurable reason — faster, cheaper, better at one specific thing. The model is a tool, not an identity. You don't need a five-tier stack on day one.</p>

<p>Make the plumbing boring. systemd, journald, Tailscale, Telegram, Stripe, GitHub, n8n. None of these will be the reason your system fails. The orchestration logic will be. Spend your time there.</p>

<p>Make sure the agents can delegate to each other directly. Don't build a manager layer unless you can name three specific decisions the manager makes that the workers can't. Most of what looks like management is routing, and routing is cheap to inline.</p>

<p>And ship it before it looks good. The 22-agent system looked beautiful in a diagram. The 16-agent system looks like a list of specialists and a delegation graph. It works. That's what matters.</p>

<h2>What Didn't Make The Cut</h2>

<p>This is the case study, not the system design doc. A lot is not in here — how the agents share state, how I handle model failures mid-conversation, how I version the prompt contracts, how I test agent behavior without running a full prod simulation, what the alerting looks like when a fallback fires, and what I learned the hard way about prompt caching across agent boundaries.</p>

<p>Those are separate posts. I'll link them here as they go up.</p>

<h2>The Thing I Keep Coming Back To</h2>

<p>There is a version of this story where the 22-agent system worked and I never migrated. I would have kept the directors, kept the standups, kept the org chart, and kept spending forty minutes debugging a missed invoice. The system would have been "fine." It would also have been the most expensive way to run a one-person business I could have built.</p>

<p>The lesson isn't "more agents is bad." The lesson is that an org chart is a design tool, not a deliverable. You build it once to figure out what you need. Then you tear it down and build the system that actually runs.</p>

<p>Hermes is the second build. Sixteen agents, fewer handoffs, smarter delegation, model tiering that pays for itself. Same business, same clients, same results — half the orchestration overhead, cleaner model boundaries, lower total cost.</p>

<p>The migration story is the proof. Not the 22-agent system, not the 16-agent system, but the act of going from one to the other without taking the business down with it. That's what I build for clients. Smaller scale, same pattern, real production. That is the whole pitch for Joe's Tech Solutions, in one paragraph: <strong>I run a system like this for my own business, and I build the same kind of system for yours.</strong></p>

<p>If you're curious about a specific piece of this — the model tiering math, the fallback chain, how I version the agent contracts, what the Skate Workshop stack actually does — drop a comment. The follow-ups are the posts I learn the most writing.</p>

<hr />

<p><em>Joe Blas runs Joe's Tech Solutions LLC out of San Diego. He builds custom AI systems for small businesses that don't want to hire an AI team. 15 years of shipping production systems at Google/Waymo, Uber ATG, and Pronto.ai, self-taught, no degree. The 16-agent stack above is what runs the business today.</em></p>
`,
};
