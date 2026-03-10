"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SaasComparisonTable } from "@/components/blog/SaasComparisonTable";
import { ArchitectureDiagram } from "@/components/blog/ArchitectureDiagram";
import { Callout } from "@/components/blog/Callout";
import { StatBlock } from "@/components/blog/StatBlock";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { TimelineStep } from "@/components/blog/TimelineStep";

const tocItems = [
  { id: "the-stack", label: "The Stack: OpenClaw + 24 Agents" },
  { id: "what-it-replaced", label: "What It Actually Replaced" },
  { id: "architecture", label: "The Architecture (KISS)" },
  { id: "the-toolkit", label: "The Toolkit" },
  { id: "three-tier", label: "The 3-Tier Action Model" },
  { id: "safety-guardrails", label: "Safety & Guardrails" },
  { id: "monday-morning", label: "Real Example: Monday Morning" },
  { id: "lessons", label: "What I'd Do Differently" },
  { id: "should-you", label: "Should You Build This?" },
];

export function BlogContent() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose-blog space-y-8">
          {/* Table of Contents */}
          <FadeIn delay={0.1}>
            <TableOfContents items={tocItems} />
          </FadeIn>

          {/* Intro */}
          <FadeIn delay={0.15}>
            <p className="lead text-gray-200 text-xl sm:text-2xl leading-loose mb-8">
              Most &ldquo;AI automation&rdquo; content is someone connecting Zapier to ChatGPT and calling it a day.
              No shade — that works for some people. But when you&apos;re a developer launching a business,
              you face a choice: buy 10+ SaaS tools at $200-300/mo, or build something smarter.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              I wanted Jarvis. Not the Marvel version — the version where I wake up
              and my AI has already triaged my inbox, checked my deployments, drafted a proposal for a new client,
              and reminded me that my SSL cert expires in 6 days.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">So instead of buying a stack of SaaS subscriptions, I built 24 AI agents to do it all.</p>
          </FadeIn>

          {/* Stats block */}
          <StatBlock
            stats={[
              { value: 24, suffix: "", label: "AI Agents", color: "from-[#0EA5E9]/10 to-transparent" },
              { value: 285, prefix: "$", label: "Typical SaaS Cost Avoided/mo", color: "from-red-500/10 to-transparent" },
              { value: 0, prefix: "$", label: "Marginal Cost", color: "from-emerald-500/10 to-transparent" },
              { value: 8, suffix: "h", label: "Saved Weekly", color: "from-[#8B5CF6]/10 to-transparent" },
            ]}
          />

          {/* The Stack */}
          <FadeIn>
            <h2 id="the-stack" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">The Stack: OpenClaw + 24 Specialized Agents</h2>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              Here&apos;s the setup: one orchestrator agent (we call him Lurkr — long story) that sits on top of
              24 sub-agents. Each one has a lane:
            </p>
          </FadeIn>

          <FadeIn>
            <ul className="space-y-4 mb-10">
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Forge</strong> handles code — PRs, reviews, CI/CD monitoring</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Radar</strong> does lead gen and competitive research</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Muse</strong> creates content (yeah, this blog post is meta like that)</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Helm</strong> manages infrastructure and deployments</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Beacon</strong> watches SEO health and indexing</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Ledger</strong> tracks revenue and invoicing</li>
            </ul>
          </FadeIn>

          <Callout variant="insight">
            The whole thing runs on <a href="https://openclaw.com" className="text-[#0EA5E9] underline underline-offset-2 hover:text-[#06B6D4]">OpenClaw</a>, an open-source agent framework, deployed on my own local Linux machine. Not a cloud VPS. Not a cluster. Not Kubernetes. <strong>One box in my house.</strong>
          </Callout>

          {/* Comparison Table */}
          <FadeIn>
            <h2 id="what-it-replaced" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">The SaaS Tools I Never Had to Buy</h2>
            <p className="text-gray-200 text-lg leading-loose mb-10">Here's what running a solo dev business typically costs in SaaS subscriptions. I skipped all of it by building agents instead:</p>
          </FadeIn>

          <SaasComparisonTable />

          <Callout variant="tip">
            <p className="mb-0">
              Here&apos;s the kicker: I already pay for Claude Max ($100/mo) for my daily development work — coding, research, phone app, web interface. 
              The 24 agents run on that <strong>same subscription at zero marginal cost</strong>. So I avoided $285/mo in SaaS subscriptions with effectively $0 additional spend.
            </p>
          </Callout>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">The Economics: Why This Actually Makes Sense</h3>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              If you&apos;re a developer, you&apos;re probably already paying for an AI subscription. Claude Max, ChatGPT Plus, Cursor Pro — 
              pick your poison. That cost is a sunk cost for your workflow.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              The insight here is that <strong className="text-white">the same API access you use for coding can power an entire automation stack</strong>. 
              You&apos;re not adding a new expense — you&apos;re maximizing ROI on something you&apos;re already paying for.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Compare that to the typical SaaS approach: every tool is a separate subscription, a separate login, a separate integration. 
              A solo dev business usually needs 10+ tools across email, CRM, monitoring, invoicing, SEO, content scheduling. 
              Each one individually competent, collectively expensive, and none of them talk to each other.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              With agents, it&apos;s one system, one workspace, one subscription. The marginal cost of adding a new agent is... writing a prompt file.
            </p>
          </FadeIn>

          {/* Architecture */}
          <FadeIn>
            <h2 id="architecture" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">The Architecture (Keep It Simple, Stupid)</h2>
            <p className="text-gray-200 text-lg leading-loose mb-10">
              Here&apos;s what trips people up: they think &ldquo;multi-agent&rdquo; means complex. It doesn&apos;t have to be.
            </p>
          </FadeIn>

          <ArchitectureDiagram />

          <FadeIn>
            <p className="text-gray-200 text-lg leading-loose mb-6 mt-10">Each agent is basically:</p>
            <ol className="space-y-4 mb-8 list-decimal list-inside">
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">A system prompt</strong> defining its role and boundaries</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">Access to relevant tools</strong> (API keys, scripts, file paths)</li>
              <li className="text-gray-200 text-lg leading-loose"><strong className="text-white">A memory system</strong> (daily logs + long-term memory files)</li>
            </ol>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              That&apos;s it. No vector databases (okay, I have one, but it&apos;s optional). No LangChain. No framework soup.
              Just agents with clear responsibilities and a shared workspace.
            </p>
          </FadeIn>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">The Single Pane of Glass: Telegram</h3>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Here&apos;s the part that makes this actually practical: <strong className="text-white">I control everything through Telegram</strong>. 
              No dashboards. No web UIs. No separate apps for each function. Just my phone.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              The flow is simple: I send a message to Lurkr on Telegram → Lurkr orchestrates the work → sub-agents execute 
              the tasks → results come back to Telegram. Everything happens in that same thread. Morning briefings, deployment 
              confirmations, draft proposals, revenue reports — all delivered as Telegram messages.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              This isn&apos;t just convenient, it&apos;s strategic. When you&apos;re running a business solo, context-switching 
              kills productivity. Opening 5 different dashboards to check on things means you never actually check on things. 
              One interface means I actually use the system.
            </p>
          </FadeIn>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">The Escape Hatch: Claude Code</h3>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Real talk: agents are great for 90% of things. But when you hit a gnarly refactor or a complex architectural 
              decision, you need horsepower. That&apos;s where <strong className="text-white">Claude Code</strong> comes in.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              It runs on the same machine as the agent stack, and if Lurkr or any sub-agent gets stuck on a complex coding 
              task, I can invoke Claude Code directly for the heavy-duty development work. Think of it as the power tool — 
              the agents handle the day-to-day, but Claude Code is there for deep coding sessions.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              This is what makes the system practical instead of fragile. It&apos;s not "agents or nothing" — it&apos;s 
              agents as the default, with a proven escape hatch when things get complicated.
            </p>
          </FadeIn>

          <Callout variant="tip">
            <p className="font-semibold mb-2">Smart Model Allocation</p>
            <p className="mb-0">
              Not every task needs the most powerful model. I use <strong>tiered allocation</strong> to match capability to complexity: 
              Claude Opus 4.6 runs the main orchestrator (strategic thinking, complex coding). 
              Sonnet 4.5 handles most sub-agents (practical work, API calls, content). 
              Haiku 4.5 runs lightweight checks and heartbeats. 
              All three are included in Claude Max, so it&apos;s about smart usage, not extra cost.
            </p>
          </Callout>

          {/* The Toolkit */}
          <FadeIn>
            <h2 id="the-toolkit" className="pt-16">The Toolkit</h2>
            <p className="text-gray-200 text-lg leading-loose">
              This isn&apos;t just &ldquo;ChatGPT with API access.&rdquo; Lurkr has access to a full production toolkit — 
              the same tools I use for client work and running the business. Here&apos;s everything in the arsenal:
            </p>
          </FadeIn>

          <div className="my-12">
            <img 
              src="/images/blog/toolkit-grid.png" 
              alt="Complete toolkit grid showing all integrated tools and services" 
              className="w-full rounded-xl border border-white/10 shadow-2xl"
            />
          </div>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                emoji: "🤖",
                category: "AI Generation",
                tools: [
                  "Nano Banana Pro (Gemini) — Image generation",
                  "Veo 3.1 — Video generation",
                  "ElevenLabs — Premium text-to-speech",
                  "Piper TTS — Local offline TTS",
                ],
              },
              {
                emoji: "📧",
                category: "Google Workspace",
                tools: [
                  "Gmail, Calendar, Drive, Sheets, Docs (multi-account)",
                ],
              },
              {
                emoji: "💻",
                category: "Development",
                tools: [
                  "GitHub CLI — PRs, issues, CI/CD, reviews",
                  "Claude Code — Heavy-duty coding sessions",
                  "Coding Agent — Spawns autonomous coding tasks",
                ],
              },
              {
                emoji: "💼",
                category: "Business",
                tools: [
                  "Stripe API — Invoicing, revenue, payments",
                  "Custom CRM (Supabase) — Client pipeline",
                  "Notion — Strategy docs and databases",
                  "Google Places — Local business research",
                ],
              },
              {
                emoji: "💬",
                category: "Communication",
                tools: [
                  "Telegram (primary command interface)",
                  "Slack workspace integration",
                ],
              },
              {
                emoji: "🎬",
                category: "Media & Content",
                tools: [
                  "Video extraction (ffmpeg)",
                  "YouTube video analysis",
                  "PDF editing",
                ],
              },
              {
                emoji: "⚙️",
                category: "Ops & Automation",
                tools: [
                  "System diagnostics & health monitoring",
                  "Security hardening",
                  "Deploy scripts, backup verification",
                  "Custom bash scripts (Stripe sync, CRM, invoicing, proposals, revenue reports)",
                ],
              },
            ].map((category, idx) => (
              <FadeIn key={category.category} delay={0.05 * idx}>
                <div className="h-full border border-white/10 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 hover:border-[#0EA5E9]/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.emoji}</span>
                    <h3 className="text-lg font-semibold text-white m-0">{category.category}</h3>
                  </div>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {category.tools.map((tool, toolIdx) => (
                      <li key={toolIdx} className="text-sm text-white/70 leading-relaxed pl-0 m-0">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p>
              The power here isn&apos;t any single tool — it&apos;s the <strong>synthesis</strong>. Lurkr can pull 
              your calendar from Google, check GitHub CI status, query Stripe for revenue, and format it all into 
              one morning briefing delivered to Telegram. That kind of cross-platform orchestration is what makes 
              this feel like having a real chief of staff.
            </p>
          </FadeIn>

          {/* 3-Tier Model */}
          <FadeIn>
            <h2 id="three-tier" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">The Secret Sauce: The 3-Tier Action Model</h2>
            <p className="text-gray-200 text-lg leading-loose mb-10">
              The thing that makes this actually useful instead of terrifying is what I call the 3-tier action model:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="space-y-5 my-10">
              {[
                {
                  tier: "AUTO",
                  color: "emerald",
                  desc: "Agent does it silently.",
                  examples: "Reading files, running checks, updating logs.",
                },
                {
                  tier: "NOTIFY",
                  color: "amber",
                  desc: "Agent does it and tells me.",
                  examples: "Drafts an email, prepares a report.",
                },
                {
                  tier: "CONFIRM",
                  color: "red",
                  desc: "Agent proposes it and waits.",
                  examples: "Sending emails, deploying code, anything external.",
                },
              ].map((item) => (
                <div
                  key={item.tier}
                  className={`border rounded-xl p-6 ${
                    item.color === "emerald"
                      ? "border-emerald-500/20 bg-emerald-500/5"
                      : item.color === "amber"
                      ? "border-amber-500/20 bg-amber-500/5"
                      : "border-red-500/20 bg-red-500/5"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-bold font-mono px-2.5 py-1 rounded ${
                        item.color === "emerald"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : item.color === "amber"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {item.tier}
                    </span>
                    <span className="text-gray-200 text-sm font-medium">{item.desc}</span>
                  </div>
                  <p className="text-white/60 text-sm ml-0 mb-0 leading-relaxed">{item.examples}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <Callout variant="warning">
            This is the difference between &ldquo;AI that helps&rdquo; and &ldquo;AI that sends weird emails to your clients at 3 AM.&rdquo;
            Trust me, the tiers matter.
          </Callout>

          {/* Safety & Guardrails */}
          <FadeIn>
            <h2 id="safety-guardrails" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">Safety &amp; Guardrails: How I Keep This In Check</h2>
            <p className="text-gray-200 text-lg leading-loose mb-10">
              Look, I get it. &ldquo;24 AI agents with access to your business tools&rdquo; sounds like the opening 
              scene of a cautionary tech tale. So let&apos;s talk about safety. This isn&apos;t a runaway experiment — 
              it&apos;s a production-grade system with real safeguards.
            </p>
          </FadeIn>

          <div className="my-12">
            <img 
              src="/images/blog/ai-control-panel.png" 
              alt="AI Control Panel and Safety Systems" 
              className="w-full rounded-xl border border-white/10 shadow-2xl"
            />
          </div>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">🛑 Kill Switch via Telegram</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              The most important safety feature is dead simple: <strong className="text-white">I can stop anything instantly from my phone.</strong>
            </p>
          </FadeIn>

          <Callout variant="tip">
            <p className="mb-3">
              <strong>Real control looks like this:</strong>
            </p>
            <ul className="space-y-2 text-sm list-disc list-inside mb-0">
              <li>Send &ldquo;kill that task&rdquo; to Lurkr on Telegram → any running sub-agent dies immediately</li>
              <li>Pause the entire system with one command</li>
              <li>Restart services without SSH-ing into the machine</li>
              <li>No dashboard. No web UI. Just Telegram. The control panel is in my pocket.</li>
            </ul>
          </Callout>

          <FadeIn>
            <p className="text-gray-200 text-lg leading-loose mb-10">
              This matters because complex systems fail in complex ways. When they do, you need a big red button, 
              not a 5-step process through a web interface. Telegram is that button.
            </p>
          </FadeIn>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">💰 Cost Controls: Expensive Mistakes Are Prevented by Design</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              AI API costs can spiral fast if you&apos;re not careful. Here&apos;s how the system stays cheap:
            </p>
          </FadeIn>

          <div className="my-10 space-y-6">
            <FadeIn delay={0.05}>
              <div className="border border-emerald-500/20 rounded-xl p-6 bg-emerald-500/5">
                <h4 className="text-emerald-300 font-semibold mb-3 mt-0">Model Tiering</h4>
                <p className="text-white/70 text-sm mb-0 leading-relaxed">
                  Claude Opus 4.6 runs only the orchestrator (strategic thinking). Sonnet 4.5 handles most sub-agents 
                  (practical work). Haiku 4.5 runs lightweight checks. All three are included in Claude Max — it&apos;s 
                  about smart allocation, not extra spend.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border border-blue-500/20 rounded-xl p-6 bg-blue-500/5">
                <h4 className="text-blue-300 font-semibold mb-3 mt-0">Permission Gating (The 3-Tier Model)</h4>
                <p className="text-white/70 text-sm mb-0 leading-relaxed">
                  Agents can&apos;t do expensive things without approval. The CONFIRM tier prevents any sub-agent from 
                  running wild on API calls, deployments, or external actions. Everything goes through me first.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-amber-500/20 rounded-xl p-6 bg-amber-500/5">
                <h4 className="text-amber-300 font-semibold mb-3 mt-0">Cron Job Timeouts</h4>
                <p className="text-white/70 text-sm mb-0 leading-relaxed">
                  Scheduled tasks have hard timeouts. If something runs longer than expected, it gets killed automatically. 
                  No runaway processes burning through API credits while I sleep.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-purple-500/20 rounded-xl p-6 bg-purple-500/5">
                <h4 className="text-purple-300 font-semibold mb-3 mt-0">Fallback Chain (Cheaper, Not More Expensive)</h4>
                <p className="text-white/70 text-sm mb-0 leading-relaxed">
                  If a model hits rate limits, the system falls back to cheaper alternatives (Gemini Flash, not more Opus). 
                  The system degrades gracefully toward free-tier options, never toward burning more money.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="border border-cyan-500/20 rounded-xl p-6 bg-cyan-500/5">
                <h4 className="text-cyan-300 font-semibold mb-3 mt-0">Monthly Cost Monitoring</h4>
                <p className="text-white/70 text-sm mb-0 leading-relaxed">
                  A cron job checks Gemini API spend mid-month. If usage is trending high, I get alerted before it becomes 
                  a problem. Proactive monitoring beats surprise bills.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">🔒 Security: Trust, But Verify</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              Running 24 agents means 24 potential security surfaces. Here&apos;s how I locked it down:
            </p>
          </FadeIn>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.05}>
              <div className="border border-red-500/20 rounded-xl p-6 bg-red-500/5">
                <div className="text-2xl mb-3">🚫</div>
                <h4 className="text-red-300 font-semibold mb-2 mt-0 text-base">No Auto-Send on External Actions</h4>
                <p className="text-white/60 text-sm mb-0 leading-relaxed">
                  Agents can&apos;t send emails, push code, or deploy without explicit approval. Everything goes through 
                  the CONFIRM tier. No surprises.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border border-orange-500/20 rounded-xl p-6 bg-orange-500/5">
                <div className="text-2xl mb-3">🔥</div>
                <h4 className="text-orange-300 font-semibold mb-2 mt-0 text-base">UFW Firewall Active</h4>
                <p className="text-white/60 text-sm mb-0 leading-relaxed">
                  The host machine runs UFW with strict rules. Only necessary ports are open. Everything else is blocked 
                  by default.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-pink-500/20 rounded-xl p-6 bg-pink-500/5">
                <div className="text-2xl mb-3">🔐</div>
                <h4 className="text-pink-300 font-semibold mb-2 mt-0 text-base">Secrets Protected</h4>
                <p className="text-white/60 text-sm mb-0 leading-relaxed">
                  No API keys or credentials are exposed in agent responses. All secrets are stored in environment 
                  variables and config files with restricted permissions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-yellow-500/20 rounded-xl p-6 bg-yellow-500/5">
                <div className="text-2xl mb-3">⚠️</div>
                <h4 className="text-yellow-300 font-semibold mb-2 mt-0 text-base">External Content = Untrusted</h4>
                <p className="text-white/60 text-sm mb-0 leading-relaxed">
                  Agents treat all external content (scraped sites, API responses, user input) as untrusted. Validation 
                  and sanitization happen before anything touches internal systems.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="border border-indigo-500/20 rounded-xl p-6 bg-indigo-500/5">
                <div className="text-2xl mb-3">🛡️</div>
                <h4 className="text-indigo-300 font-semibold mb-2 mt-0 text-base">Agents Can&apos;t Self-Modify</h4>
                <p className="text-white/60 text-sm mb-0 leading-relaxed">
                  No agent can modify its own security settings or expand its access. System-level changes require 
                  manual intervention from me.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border border-teal-500/20 rounded-xl p-6 bg-teal-500/5">
                <div className="text-2xl mb-3">🔑</div>
                <h4 className="text-teal-300 font-semibold mb-2 mt-0 text-base">Gateway Auth Required</h4>
                <p className="text-white/60 text-sm mb-0 leading-relaxed">
                  Every connection to the OpenClaw gateway requires an auth token. No token, no access. Simple as that.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">🏗️ System Resilience: Fail Gracefully, Not Catastrophically</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              Complex systems fail. The goal isn&apos;t zero failures — it&apos;s controlled, recoverable failures.
            </p>
          </FadeIn>

          <Callout variant="insight">
            <ul className="space-y-2 mb-0 list-disc list-inside">
              <li><strong>Agent failures escalate to Lurkr</strong> — if a sub-agent crashes, Lurkr takes over or flags me</li>
              <li><strong>Daily automated backups to GitHub</strong> — all agent memory, configs, and logs</li>
              <li><strong>System health diagnostics on every heartbeat</strong> — early warning for issues</li>
              <li><strong>Session logs preserved for debugging</strong> — full audit trail of what happened</li>
              <li><strong>Graceful degradation</strong> — if Anthropic goes down, fall back to Gemini free tier</li>
            </ul>
          </Callout>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">📊 Transparency: Full Audit Trail, Always</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              I&apos;m not flying blind. Every action, every decision, every failure is logged and surfaced appropriately:
            </p>
          </FadeIn>

          <div className="my-10 space-y-4">
            <FadeIn delay={0.05}>
              <div className="flex gap-4 items-start border-l-4 border-blue-500/50 pl-6 py-4">
                <div className="text-2xl">📝</div>
                <div>
                  <h4 className="text-white font-semibold mb-2 mt-0 text-base">Daily Memory Files</h4>
                  <p className="text-white/60 text-sm mb-0 leading-relaxed">
                    Every agent writes to daily logs. Full record of what happened, when, and why. No black boxes.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex gap-4 items-start border-l-4 border-emerald-500/50 pl-6 py-4">
                <div className="text-2xl">☀️</div>
                <div>
                  <h4 className="text-white font-semibold mb-2 mt-0 text-base">Morning Briefing</h4>
                  <p className="text-white/60 text-sm mb-0 leading-relaxed">
                    Every morning, full system status lands in my Telegram. What happened overnight, what needs attention, 
                    what&apos;s coming today.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex gap-4 items-start border-l-4 border-red-500/50 pl-6 py-4">
                <div className="text-2xl">🚨</div>
                <div>
                  <h4 className="text-white font-semibold mb-2 mt-0 text-base">Failed Jobs Surface Automatically</h4>
                  <p className="text-white/60 text-sm mb-0 leading-relaxed">
                    Cron job failures show up in diagnostics. No silent failures. If something broke, I know about it.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-4 items-start border-l-4 border-purple-500/50 pl-6 py-4">
                <div className="text-2xl">💵</div>
                <div>
                  <h4 className="text-white font-semibold mb-2 mt-0 text-base">Revenue &amp; Costs Tracked</h4>
                  <p className="text-white/60 text-sm mb-0 leading-relaxed">
                    Stripe revenue and API costs are monitored and reported. I always know if the system is costing 
                    more than it&apos;s saving.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <Callout variant="warning">
            <p className="font-semibold mb-2">The Bottom Line</p>
            <p className="mb-0">
              I built this to be <strong>useful, not dangerous</strong>. The 3-tier action model, kill switch via Telegram, 
              cost controls, security boundaries, and full audit trail aren&apos;t afterthoughts — they&apos;re core design. 
              This is production infrastructure, not a demo that works until it doesn&apos;t.
            </p>
          </Callout>

          {/* Monday Morning */}
          <FadeIn>
            <h2 id="monday-morning" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">Real Example: Monday Morning</h2>
            <p className="text-gray-200 text-lg leading-loose mb-10">Here&apos;s what happened last Monday, entirely through Telegram, before I even opened my laptop:</p>
          </FadeIn>

          <div className="my-10 border border-white/10 rounded-xl bg-white/[0.02] p-8">
            <TimelineStep time="9:00 AM" index={0}>
              <strong>Lurk Report</strong> drops in my Telegram DM:
              <ul className="mt-3 space-y-2 text-white/60 text-sm list-disc list-inside">
                <li>3 new emails (1 client inquiry, 1 invoice paid, 1 spam)</li>
                <li>GitHub: 2 PRs ready for review, CI green across all repos</li>
                <li>Revenue: $2,400 collected last 7 days, +15% WoW</li>
                <li>Calendar: 2 meetings today, one has a conflict → suggested resolution</li>
                <li>RenFaire Directory: 3 new contact form submissions</li>
              </ul>
            </TimelineStep>
            <TimelineStep time="9:01 AM" index={1}>
              I reply in Telegram: <span className="text-[#0EA5E9] font-mono text-xs">&quot;send that proposal to Nick&quot;</span> (a client from last week)
            </TimelineStep>
            <TimelineStep time="9:02 AM" index={2}>
              Lurkr orchestrates → Muse (content agent) generates proposal from template → result comes back to my Telegram with the PDF preview, asking permission to send
            </TimelineStep>
            <TimelineStep time="9:02 AM" index={3}>
              I reply in Telegram: <span className="text-[#0EA5E9] font-mono text-xs">&quot;send it&quot;</span>
            </TimelineStep>
            <TimelineStep time="9:03 AM" index={4}>
              <strong>Done.</strong> Email sent, confirmation delivered back to my Telegram. Coffee&apos;s not even ready. ☕
            </TimelineStep>
          </div>

          <FadeIn>
            <p className="text-gray-200 text-lg leading-loose mb-8 mt-8">
              The key here: <strong className="text-white">every step happened in one Telegram thread.</strong> No switching apps. 
              No logging into dashboards. No &quot;let me check the CRM.&quot; Just a conversation with an AI 
              that has access to everything and reports back in the same place.
            </p>
          </FadeIn>

          {/* Lessons */}
          <FadeIn>
            <h2 id="lessons" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">What I&apos;d Do Differently</h2>
            <p className="text-gray-200 text-lg leading-loose mb-10">A few hard-won lessons:</p>
          </FadeIn>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">Start with one agent, not twenty-four.</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              I built the whole system incrementally over weeks. Start with email triage or deployment monitoring —
              something you do every day. Get that working, then expand.
            </p>
          </FadeIn>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">Memory is everything.</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              An agent without memory is just a chatbot with extra steps. The daily log files and long-term memory
              system is what makes Lurkr actually useful across sessions.
            </p>
          </FadeIn>

          <Callout variant="quote" attribution="Hard-won lesson #3">
            Don&apos;t over-automate sending. The CONFIRM tier exists because I learned the hard way that letting AI
            send emails unsupervised is a speedrun to embarrassment. Draft everything, send nothing without approval.
          </Callout>

          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-6 mt-12">Use cron, not polling.</h3>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              Scheduled tasks with clear delivery channels beat agents constantly checking things. More predictable,
              less resource usage, easier to debug.
            </p>
          </FadeIn>

          {/* Should You Build This? */}
          <FadeIn>
            <h2 id="should-you" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">Should You Build This?</h2>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              If you&apos;re a developer who runs a freelance business or small agency — <strong className="text-white">absolutely</strong>.
              The ROI is insane. Not just avoiding $200-300/mo in SaaS subscriptions, but the time. I estimate I save 6-8 hours a week
              on admin work that the agents handle.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              If you&apos;re not technical? Honestly, wait a year. This stuff is moving fast. The tooling will get easier.
              But if you&apos;re curious, start with something like{" "}
              <a href="https://openclaw.com" className="text-[#0EA5E9] underline underline-offset-2 hover:text-[#06B6D4]">OpenClaw</a>{" "}
              or a simpler agent framework and just get one automation working.
            </p>
          </FadeIn>

          <Callout variant="insight">
            The future isn&apos;t &ldquo;AI replaces developers.&rdquo; It&apos;s <strong>&ldquo;developers with AI agents are
            10x more effective than developers without them.&rdquo;</strong>
            <br /><br />
            And yeah, that&apos;s a competitive advantage I plan to keep.
          </Callout>
        </div>
      </div>
    </section>
  );
}
