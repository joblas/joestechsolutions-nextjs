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
  { id: "three-tier", label: "The 3-Tier Action Model" },
  { id: "monday-morning", label: "Real Example: Monday Morning" },
  { id: "lessons", label: "What I'd Do Differently" },
  { id: "should-you", label: "Should You Build This?" },
];

export function BlogContent() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose-blog">
          {/* Table of Contents */}
          <FadeIn delay={0.1}>
            <TableOfContents items={tocItems} />
          </FadeIn>

          {/* Intro */}
          <FadeIn delay={0.15}>
            <p className="lead">
              Most &ldquo;AI automation&rdquo; content is someone connecting Zapier to ChatGPT and calling it a day.
              No shade — that works for some people. But when you&apos;re a developer running a real business,
              you start to feel the ceiling pretty fast.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              I wanted something different. I wanted Jarvis. Not the Marvel version — the version where I wake up
              and my AI has already triaged my inbox, checked my deployments, drafted a proposal for a new client,
              and reminded me that my SSL cert expires in 6 days.
            </p>
            <p>So I built it.</p>
          </FadeIn>

          {/* Stats block */}
          <StatBlock
            stats={[
              { value: 24, suffix: "", label: "AI Agents", color: "from-[#0EA5E9]/10 to-transparent" },
              { value: 285, prefix: "$", label: "SaaS Replaced/mo", color: "from-red-500/10 to-transparent" },
              { value: 0, prefix: "$", label: "Marginal Cost", color: "from-emerald-500/10 to-transparent" },
              { value: 8, suffix: "h", label: "Saved Weekly", color: "from-[#8B5CF6]/10 to-transparent" },
            ]}
          />

          {/* The Stack */}
          <FadeIn>
            <h2 id="the-stack">The Stack: OpenClaw + 24 Specialized Agents</h2>
            <p>
              Here&apos;s the setup: one orchestrator agent (we call him Lurkr — long story) that sits on top of
              24 sub-agents. Each one has a lane:
            </p>
          </FadeIn>

          <FadeIn>
            <ul>
              <li><strong>Forge</strong> handles code — PRs, reviews, CI/CD monitoring</li>
              <li><strong>Radar</strong> does lead gen and competitive research</li>
              <li><strong>Muse</strong> creates content (yeah, this blog post is meta like that)</li>
              <li><strong>Helm</strong> manages infrastructure and deployments</li>
              <li><strong>Beacon</strong> watches SEO health and indexing</li>
              <li><strong>Ledger</strong> tracks revenue and invoicing</li>
            </ul>
          </FadeIn>

          <Callout variant="insight">
            The whole thing runs on <a href="https://openclaw.com" className="text-[#0EA5E9] underline underline-offset-2 hover:text-[#06B6D4]">OpenClaw</a>, an open-source agent framework, deployed on my own local Linux machine. Not a cloud VPS. Not a cluster. Not Kubernetes. <strong>One box in my house.</strong>
          </Callout>

          {/* Comparison Table */}
          <FadeIn>
            <h2 id="what-it-replaced">What It Actually Replaced</h2>
            <p>Let me break down the SaaS tools I stopped paying for:</p>
          </FadeIn>

          <SaasComparisonTable />

          <Callout variant="tip">
            <p className="mb-0">
              Here&apos;s the kicker: I already pay for Claude Max ($100/mo) for my daily development work — coding, research, phone app, web interface. 
              The 24 agents run on that <strong>same subscription at zero marginal cost</strong>. So I replaced $285/mo in SaaS with effectively $0 additional spend.
            </p>
          </Callout>

          <FadeIn>
            <h3>The Economics: Why This Actually Makes Sense</h3>
            <p>
              If you&apos;re a developer, you&apos;re probably already paying for an AI subscription. Claude Max, ChatGPT Plus, Cursor Pro — 
              pick your poison. That cost is a sunk cost for your workflow.
            </p>
            <p>
              The insight here is that <strong>the same API access you use for coding can power an entire automation stack</strong>. 
              You&apos;re not adding a new expense — you&apos;re maximizing ROI on something you&apos;re already paying for.
            </p>
            <p>
              Compare that to SaaS: every tool is a separate subscription, a separate login, a separate integration. 
              My old stack had 10+ tools across email, CRM, monitoring, invoicing, SEO, content scheduling. 
              Each one individually competent, collectively expensive, and none of them talked to each other.
            </p>
            <p>
              With agents, it&apos;s one system, one workspace, one subscription. The marginal cost of adding a new agent is... writing a prompt file.
            </p>
          </FadeIn>

          {/* Architecture */}
          <FadeIn>
            <h2 id="architecture">The Architecture (Keep It Simple, Stupid)</h2>
            <p>
              Here&apos;s what trips people up: they think &ldquo;multi-agent&rdquo; means complex. It doesn&apos;t have to be.
            </p>
          </FadeIn>

          <ArchitectureDiagram />

          <FadeIn>
            <p>Each agent is basically:</p>
            <ol>
              <li><strong>A system prompt</strong> defining its role and boundaries</li>
              <li><strong>Access to relevant tools</strong> (API keys, scripts, file paths)</li>
              <li><strong>A memory system</strong> (daily logs + long-term memory files)</li>
            </ol>
            <p>
              That&apos;s it. No vector databases (okay, I have one, but it&apos;s optional). No LangChain. No framework soup.
              Just agents with clear responsibilities and a shared workspace.
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

          {/* 3-Tier Model */}
          <FadeIn>
            <h2 id="three-tier">The Secret Sauce: The 3-Tier Action Model</h2>
            <p>
              The thing that makes this actually useful instead of terrifying is what I call the 3-tier action model:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4 my-8">
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
                  className={`border rounded-xl p-5 ${
                    item.color === "emerald"
                      ? "border-emerald-500/20 bg-emerald-500/5"
                      : item.color === "amber"
                      ? "border-amber-500/20 bg-amber-500/5"
                      : "border-red-500/20 bg-red-500/5"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                        item.color === "emerald"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : item.color === "amber"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.tier}
                    </span>
                    <span className="text-white/80 text-sm font-medium">{item.desc}</span>
                  </div>
                  <p className="text-white/50 text-sm ml-0 mb-0">{item.examples}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <Callout variant="warning">
            This is the difference between &ldquo;AI that helps&rdquo; and &ldquo;AI that sends weird emails to your clients at 3 AM.&rdquo;
            Trust me, the tiers matter.
          </Callout>

          {/* Monday Morning */}
          <FadeIn>
            <h2 id="monday-morning">Real Example: Monday Morning</h2>
            <p>Here&apos;s what happened last Monday before I even opened my laptop:</p>
          </FadeIn>

          <div className="my-8 border border-white/10 rounded-xl bg-white/[0.02] p-6">
            <TimelineStep time="9:00 AM" index={0}>
              <strong>Lurk Report</strong> drops in my Telegram DM:
              <ul className="mt-2 space-y-1 text-white/50 text-sm list-disc list-inside">
                <li>3 new emails (1 client inquiry, 1 invoice paid, 1 spam)</li>
                <li>GitHub: 2 PRs ready for review, CI green across all repos</li>
                <li>Revenue: $2,400 collected last 7 days, +15% WoW</li>
                <li>Calendar: 2 meetings today, one has a conflict → suggested resolution</li>
                <li>RenFaire Directory: 3 new contact form submissions</li>
              </ul>
            </TimelineStep>
            <TimelineStep time="9:01 AM" index={1}>
              I reply <span className="text-[#0EA5E9] font-mono text-xs">&quot;send that proposal to Nick&quot;</span> (a client from last week)
            </TimelineStep>
            <TimelineStep time="9:02 AM" index={2}>
              Agent generates proposal from template, shows me the PDF, asks to send
            </TimelineStep>
            <TimelineStep time="9:02 AM" index={3}>
              I reply <span className="text-[#0EA5E9] font-mono text-xs">&quot;send it&quot;</span>
            </TimelineStep>
            <TimelineStep time="9:03 AM" index={4}>
              <strong>Done.</strong> Coffee&apos;s not even ready. ☕
            </TimelineStep>
          </div>

          {/* Lessons */}
          <FadeIn>
            <h2 id="lessons">What I&apos;d Do Differently</h2>
            <p>A few hard-won lessons:</p>
          </FadeIn>

          <FadeIn>
            <h3>Start with one agent, not twenty-four.</h3>
            <p>
              I built the whole system incrementally over weeks. Start with email triage or deployment monitoring —
              something you do every day. Get that working, then expand.
            </p>
          </FadeIn>

          <FadeIn>
            <h3>Memory is everything.</h3>
            <p>
              An agent without memory is just a chatbot with extra steps. The daily log files and long-term memory
              system is what makes Lurkr actually useful across sessions.
            </p>
          </FadeIn>

          <Callout variant="quote" attribution="Hard-won lesson #3">
            Don&apos;t over-automate sending. The CONFIRM tier exists because I learned the hard way that letting AI
            send emails unsupervised is a speedrun to embarrassment. Draft everything, send nothing without approval.
          </Callout>

          <FadeIn>
            <h3>Use cron, not polling.</h3>
            <p>
              Scheduled tasks with clear delivery channels beat agents constantly checking things. More predictable,
              less resource usage, easier to debug.
            </p>
          </FadeIn>

          {/* Should You Build This? */}
          <FadeIn>
            <h2 id="should-you">Should You Build This?</h2>
            <p>
              If you&apos;re a developer who runs a freelance business or small agency — <strong>absolutely</strong>.
              The ROI is insane. Not just the money saved on SaaS, but the time. I estimate I save 6-8 hours a week
              on admin work that the agents handle.
            </p>
            <p>
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
