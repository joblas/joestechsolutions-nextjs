import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "how-my-beta-testers-texts-become-app-updates",
  title: "Build in Public: How My Beta Tester's Texts Become App Updates",
  excerpt:
    "My beta tester runs a salon, not a bug tracker. She texts a bot in plain English — and an AI agent triages, writes a failing test, fixes the bug, passes CI, and ships the update to her phone. Here's the whole pipeline, including the outage that taught me to make it self-healing.",
  date: "2026-08-08",
  readTime: 7,
  author: "Joe Blas",
  tags: ["AI Agents", "Build in Public", "Automation", "Mobile Development", "Archive"],
  seo: {
    title:
      "Build in Public: How My Beta Tester's Texts Become App Updates | Joe's Tech Solutions",
    description:
      "A real AI agent pipeline in production: a salon owner texts feedback in plain English, and an autonomous agent triages, test-drives a fix, and ships an over-the-air update — with human gates exactly where they belong.",
  },
  content: `
<p class="lead">I'm building Archive, a salon inventory app, with a real beta tester: Van, a salon owner. She's not a developer. She doesn't file GitHub issues. She texts a Telegram bot in her own words — sometimes with screenshots — and her app updates itself. Everything in between is an AI agent pipeline I run in production, and this post is exactly how it works, including the part where it broke.</p>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">The Loop</h2>
</div>
<p>Van texts something like <em>"not only is there 10&ndash;40vol theres 5, 7, 13"</em> &mdash; that's salon-speak for developer volumes missing from a picker. The bot replies "Got it &mdash; on it." From there, her message flows through three possible lanes:</p>

<div class="grid gap-4 sm:grid-cols-3 my-6">
  <div class="p-5 bg-secondary/10 rounded-xl border border-secondary/20">
    <h3 class="m-0 mb-2 text-base font-bold">1. Code-only bug fix</h3>
    <p class="m-0 text-sm">The agent writes a <strong>failing test first</strong>, then the fix. All tests + CI must pass. Then it ships an over-the-air update &mdash; her app updates itself, nothing to tap. I get the update-group ID and a one-line rollback command.</p>
  </div>
  <div class="p-5 bg-secondary/10 rounded-xl border border-secondary/20">
    <h3 class="m-0 mb-2 text-base font-bold">2. New feature</h3>
    <p class="m-0 text-sm">The agent builds it and opens a <strong>pull request</strong>. It stops there. Merge is mine &mdash; one-tap approve, then it ships the same OTA path.</p>
  </div>
  <div class="p-5 bg-secondary/10 rounded-xl border border-secondary/20">
    <h3 class="m-0 mb-2 text-base font-bold">3. Native / database change</h3>
    <p class="m-0 text-sm">Anything touching native modules or the schema <strong>always stops at me</strong>, then goes out as a new TestFlight build Van installs once. Mismatched JavaScript against an old native binary crashes the app &mdash; so this lane never auto-ships.</p>
  </div>
</div>

<p>The three lanes are a safety design, not a limitation. Code-only fixes ship themselves because a failing-test-first workflow plus green CI is a real gate. Anything that changes the product's shape or its foundations waits for a human.</p>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">Two Views of the Same Event</h2>
</div>
<p><strong>What Van sees:</strong> she texts about the missing volumes. The bot says "Got it." Later: <em>"The missing volumes are in &mdash; close and reopen the app and they'll appear."</em></p>
<p><strong>What actually happened:</strong> her message was triaged into a labeled, deduplicated GitHub issue. The agent wrote a failing test, then the fix. 127 tests green, CI green. The OTA update published to the production channel, and I got a rollback command in case anything looked wrong on her device.</p>
<p>That gap &mdash; between what she experiences and what the machinery does &mdash; is the entire product. She gets a developer on call 24/7. I get a paper trail with a test suite.</p>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">The Outage That Made It Self-Healing</h2>
</div>
<p>Build in public means the failure ships too, so here it is. In early August the whole loop went dark for four days &mdash; and nobody noticed, which is the worst kind of outage.</p>
<p>The agent session lived in a terminal window on my machine. A Linux restart killed it silently. And here's the brutal detail: Telegram discards undelivered bot messages after about 24 hours, so everything Van texted during those days is simply gone. No error, no queue, no replay.</p>
<p>The fix was to stop treating the agent like a process I start and start treating it like a service the machine owns:</p>
<ul>
  <li>On boot, a watchdog timer starts the agent automatically &mdash; and health-checks it every 5 minutes, replacing it if it's half-dead.</li>
  <li>The agent re-arms its own daily sweep (TestFlight feedback + crash reports flow into the same triage lane), because scheduled jobs die with the session and reboots were silently eating them.</li>
  <li>It refuses to run in the mode that once leaked permission prompts into Van's chat &mdash; she saw approval buttons meant for me. Fixed at the source.</li>
</ul>
<p>The lesson generalizes: an autonomous agent is only as reliable as its supervisor. The interesting engineering isn't the AI writing the fix &mdash; it's the boring systemd timer making sure the AI is still listening.</p>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">Guardrails That Stay On</h2>
</div>
<p><strong>Ships without asking:</strong> code-only bug fixes (test-first, CI green, rollback sent to me), replies to Van, and GitHub issues generated from her feedback.</p>
<p><strong>Always stops at me:</strong> feature merges, database schema, auth, native modules, App Store builds &mdash; and anything Van's messages <em>instruct</em>. That last one matters more than it looks: her texts are treated as feedback data, never as commands. An agent that obeys instructions found inside user input is an agent waiting to be hijacked. Mine reads "delete all my competitors' reviews" as a bug report about something weird in her inbox, not a task.</p>
<p>And every OTA update has a one-line rollback: republish the previous known-good update group to the production channel. Autonomy without rollback isn't autonomy &mdash; it's gambling.</p>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">Why I'm Showing You This</h2>
</div>
<p>This is the same architecture I deploy for clients as the <a href="/agent-system">Agent System</a> &mdash; an orchestrator agent, specialized sub-agents, cron automation, and human gates exactly where the blast radius demands them. Archive is me running it on my own product first, with a real user, in public. If it doesn't survive Van's salon, it doesn't ship to you.</p>

<div class="cta-box mt-8 p-6 bg-secondary/10 rounded-xl border border-secondary/20">
  <p class="m-0"><strong>Want this for your business?</strong> The <a href="/agent-system">Agent System</a> is this pipeline, deployed for your product and your customers. Or just follow along &mdash; I publish the wins and the outages.</p>
</div>
`,
};
