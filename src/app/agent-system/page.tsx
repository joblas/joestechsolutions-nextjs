"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  CaretDown,
  Robot,
  Brain,
  CalendarCheck,
  Plug,
  Code,
  ShieldCheck,
  CurrencyDollarSimple,
  Lightning,
  Stack,
  ChatTeardropDots,
  EnvelopeSimple,
  InstagramLogo,
  StripeLogo,
  Clock,
  Cpu,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useState, useRef, useEffect } from "react";
import { agentFaqs } from "./faqs";
import { twMerge } from "tailwind-merge";

const faqs = agentFaqs;

function FAQItem({ question, answer, id }: { question: string; answer: string; id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#0d9488] transition-colors font-space-grotesk">
          {question}
        </span>
        <div
          aria-hidden="true"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <CaretDown className="h-5 w-5 text-white/60" weight="bold" />
        </div>
      </button>
      <div
        id={`faq-panel-${id}`}
        ref={contentRef}
        style={{
          height,
          opacity: height > 0 ? 1 : 0,
          overflow: "hidden",
          transition: "height 0.2s ease, opacity 0.2s ease",
        }}
      >
        <p className="pb-5 text-white/70 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}

export default function AgentSystem() {
  const calendlyLink = "https://calendly.com/joe-joestechsolutions/30min";

  const HeroBlob = ({ className }: { className?: string }) => (
    <div
      className={twMerge(
        "absolute rounded-full blur-[130px] opacity-0 animate-blob-show pointer-events-none",
        className
      )}
    />
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <HeroBlob className="w-[500px] h-[500px] bg-[#0d9488]/15 top-[-100px] left-[-100px]" />
        <HeroBlob className="w-[400px] h-[400px] bg-[#8B5CF6]/10 bottom-[-50px] right-[10%] [animation-delay:1.5s]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="inline-block px-4 py-1.5 bg-[#0d9488]/10 border border-[#0d9488]/20 rounded-full text-[#2dd4bf] text-sm font-medium">
                Full Stack · 24/7 Autonomous
              </span>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Your AI</span>
                <span className="block bg-gradient-to-r from-[#0d9488] via-[#2dd4bf] to-[#8B5CF6] text-transparent bg-clip-text">
                  Workforce.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Not a chatbot. Not a tool. A multi-agent AI system that runs your business —
                coding, content, research, ops — connected to your tools, working while you sleep.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <MagneticButton strength={0.2}>
                  <Button
                    onClick={() => (window.location.href = calendlyLink)}
                    className="bg-gradient-to-r from-[#0d9488] to-[#2dd4bf] hover:from-[#0f766e] hover:to-[#14b8a6] text-white rounded-full group shadow-lg shadow-[#0b7f73]/30 px-8 py-6 text-lg font-space-grotesk font-semibold"
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
                <Button
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#1c1c26]/50 border border-white/20 hover:border-[#2dd4bf]/50 text-white hover:text-[#2dd4bf] rounded-full px-8 py-6 text-lg font-space-grotesk font-semibold transition-all"
                >
                  See Pricing
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0d9488] font-bold text-xs tracking-wider uppercase mb-3">
                The Problem
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk leading-tight">
                ChatGPT gives you answers.
                <br />
                <span className="text-white/40">Hermes gives you results.</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                You can pay Anthropic $200/mo for Claude and hit usage caps by lunch.
                Or you can run the same three-tier model routing on Ollama Cloud for $100/mo
                with zero caps — and get an agent that actually does the work, not just talk about it.
              </p>
            </div>
          </FadeIn>

          {/* Model comparison table */}
          <FadeIn delay={0.2}>
            <Card className="bg-[#1c1c26] border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-white/10">
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Tier</p>
                  <p className="text-sm text-white/60">Workload type</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] mb-2">Anthropic</p>
                  <p className="text-sm text-white/60">$200/mo · usage capped</p>
                </div>
                <div className="p-6 sm:p-8 bg-[#0d9488]/5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2dd4bf] mb-2">Ollama Cloud</p>
                  <p className="text-sm text-white/60">$100/mo · no caps</p>
                </div>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { tier: "Heavy Reasoning", anthropic: "Claude Opus", ollama: "glm-5.2:cloud" },
                  { tier: "Balanced Coding", anthropic: "Claude Sonnet", ollama: "kimi-k2.7-code:cloud" },
                  { tier: "Fast / Lightweight", anthropic: "Claude Haiku", ollama: "minimax-m3:cloud" },
                ].map((row) => (
                  <div key={row.tier} className="grid grid-cols-3 divide-x divide-white/10">
                    <div className="p-6 sm:p-8">
                      <p className="text-lg font-semibold text-white font-space-grotesk">{row.tier}</p>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="text-lg text-white/70">{row.anthropic}</p>
                    </div>
                    <div className="p-6 sm:p-8 bg-[#0d9488]/5">
                      <p className="text-lg text-[#2dd4bf] font-medium">{row.ollama}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-24 sm:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0d9488] font-bold text-xs tracking-wider uppercase mb-3">
                What's Included
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk leading-tight">
                Six layers. One system.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: Robot,
                title: "Agent Hierarchy",
                color: "#0d9488",
                items: [
                  "Orchestrator AI (CTO-level)",
                  "6 C-Suite: CTO, Chief of Staff, CFO, COO, CMO + more",
                  "6 VPs: Engineering, Infrastructure, Product + more",
                  "25 specialized agents",
                ],
              },
              {
                icon: Brain,
                title: "Memory System",
                color: "#8B5CF6",
                items: [
                  "Semantic search across all sessions",
                  "Knowledge graph of people & projects",
                  "Verbatim recall — never forgets",
                  "Gets smarter the more you use it",
                ],
              },
              {
                icon: Stack,
                title: "Skills Library",
                color: "#C084FC",
                items: [
                  "100+ custom skills",
                  "Coding: TDD, review, debug, deploy",
                  "Content: drafting, SEO, social",
                  "Ops: security scans, health checks",
                ],
              },
              {
                icon: Plug,
                title: "Integrations",
                color: "#2dd4bf",
                items: [
                  "Telegram — text & voice control",
                  "Gmail — read, draft, send emails",
                  "Instagram — auto-reply, content",
                  "Stripe — payment monitoring",
                ],
              },
              {
                icon: CalendarCheck,
                title: "24/7 Automation",
                color: "#F472B6",
                items: [
                  "32 cron jobs running on schedule",
                  "Daily standups & briefings",
                  "Weekly reviews per department",
                  "Content posting on autopilot",
                ],
              },
              {
                icon: ShieldCheck,
                title: "You Own It",
                color: "#FBBF24",
                items: [
                  "Runs on your VPS — not SaaS",
                  "Open source, no lock-in",
                  "Data never leaves your server",
                  "No rate limits, no context caps",
                ],
              },
            ].map((layer, i) => (
              <StaggerItem key={i}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[color]/30 transition-all duration-300 h-full p-8 relative overflow-hidden group">
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${layer.color}, transparent)` }}
                    />
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${layer.color}15` }}
                      >
                        <layer.icon weight="duotone" className="h-7 w-7" style={{ color: layer.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-white font-space-grotesk">{layer.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {layer.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-base text-white/60">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] flex-shrink-0 mt-1"
                            style={{ backgroundColor: `${layer.color}10`, color: layer.color }}
                          >
                            <Check weight="bold" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Integrations Strip */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white font-space-grotesk mb-2">
                Connected to the tools you already use
              </h3>
              <p className="text-white/50">No switching costs. Your AI meets you where you are.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Telegram", icon: ChatTeardropDots, desc: "Text & voice" },
                { name: "Gmail", icon: EnvelopeSimple, desc: "Read · Draft · Send" },
                { name: "Instagram", icon: InstagramLogo, desc: "Reply · Post · Schedule" },
                { name: "Stripe", icon: StripeLogo, desc: "Payment monitoring" },
                { name: "Notion CRM", icon: Stack, desc: "Pipeline tracking" },
                { name: "n8n", icon: Lightning, desc: "Workflow automation" },
                { name: "Postiz", icon: CalendarCheck, desc: "Social scheduling" },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#1c1c26] border border-white/10 rounded-xl px-5 py-4 hover:border-[#0d9488]/30 transition-colors"
                >
                  <tool.icon weight="duotone" className="h-6 w-6 text-[#2dd4bf]" />
                  <div>
                    <p className="text-white font-medium text-sm font-space-grotesk">{tool.name}</p>
                    <p className="text-white/40 text-xs">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-24 sm:py-32" id="pricing">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0d9488] font-bold text-xs tracking-wider uppercase mb-3">
                Pricing
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                One setup. One monthly. Everything included.
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                No tiers to navigate. No upsells. The full system, configured for your business.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-gradient-to-br from-[#1c1c26] via-[#1c1c26] to-[#8B5CF6]/5 border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-500 overflow-hidden relative max-w-2xl mx-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0d9488] via-[#2dd4bf] to-[#8B5CF6]" />
              <div className="absolute top-5 right-5 px-3 py-1 bg-gradient-to-r from-[#8B5CF6]/20 to-[#2dd4bf]/20 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                Full System
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center">
                    <Robot weight="duotone" className="h-10 w-10 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-space-grotesk">Agent System</h3>
                    <p className="text-white/40 text-sm">Full multi-agent stack · 1-2 week setup</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#0d0d12] rounded-xl p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Setup</p>
                    <p className="text-4xl font-bold text-white font-space-grotesk">
                      $2,500
                    </p>
                    <p className="text-sm text-white/40 mt-1">One-time · configured for your business</p>
                  </div>
                  <div className="bg-[#0d0d12] rounded-xl p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Monthly</p>
                    <p className="text-4xl font-bold text-white font-space-grotesk">
                      $149
                      <span className="text-lg font-light text-white/40">/mo</span>
                    </p>
                    <p className="text-sm text-white/40 mt-1">Managed hosting + maintenance</p>
                  </div>
                </div>

                <div className="h-px bg-white/10 mb-6" />

                <ul className="space-y-3 mb-8">
                  {[
                    "Multi-agent hierarchy (orchestrator + 25 agents)",
                    "100+ custom skills library",
                    "Memory system (semantic search + knowledge graph)",
                    "Telegram, Gmail, Instagram, Stripe integrations",
                    "24/7 cron automation (32 scheduled jobs)",
                    "Ollama Cloud model routing — $100/mo, no caps",
                    "Dedicated VPS with daily backups",
                    "Weekly health checks + monthly updates",
                    "Priority same-day support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-white/70">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] bg-[#8B5CF6]/10 text-[#8B5CF6] flex-shrink-0 mt-1">
                        <Check weight="bold" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-white/40 mb-6">
                  Ollama Cloud subscription ($100/mo) billed separately. VPS costs (~$10-20/mo) not included.
                </p>

                <MagneticButton strength={0.2} className="w-full">
                  <Button
                    onClick={() => (window.location.href = calendlyLink)}
                    className="w-full bg-gradient-to-r from-[#0d9488] to-[#2dd4bf] hover:from-[#0f766e] hover:to-[#14b8a6] text-white rounded-full group shadow-lg shadow-[#0b7f73]/30 py-6 text-lg font-space-grotesk font-semibold"
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3} className="text-center mt-8 text-sm text-white/40">
            Not sure if this is the right fit?{" "}
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0d9488] underline hover:no-underline"
            >
              Book a free 30min call
            </a>{" "}
            — we'll figure it out together.
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 sm:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0d9488] font-bold text-xs tracking-wider uppercase mb-3">
                How It Works
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk leading-tight">
                From zero to AI workforce in two weeks.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {[
              {
                step: "01",
                title: "Strategy Call",
                desc: "30 minutes. We map your workflow, identify which tasks the agent takes over, and plan the integrations.",
                icon: ChatTeardropDots,
              },
              {
                step: "02",
                title: "Server + Base Install",
                desc: "I provision your VPS, install Hermes, configure Ollama Cloud model routing, and wire up Telegram. You're texting your agent by day 2.",
                icon: Cpu,
              },
              {
                step: "03",
                title: "Skills + Integrations",
                desc: "Gmail, Instagram, Stripe, CRM — each integration wired and tested. Custom skills built for your specific workflow. Agent hierarchy configured.",
                icon: Plug,
              },
              {
                step: "04",
                title: "Tuning + Automation",
                desc: "Teaching the agent your preferences, setting up cron schedules, loading memory with your business context. This is where it becomes yours.",
                icon: Clock,
              },
              {
                step: "05",
                title: "Live + Handoff",
                desc: "System goes live. You get a walkthrough of every agent, every cron job, every integration. Ongoing maintenance and updates included in monthly.",
                icon: Lightning,
              },
            ].map((phase, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#0d9488]/10 border border-[#0d9488]/20 flex items-center justify-center">
                      <phase.icon weight="duotone" className="h-7 w-7 text-[#2dd4bf]" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-bold text-[#0d9488] font-space-grotesk">{phase.step}</span>
                      <h3 className="text-xl font-bold text-white font-space-grotesk">{phase.title}</h3>
                    </div>
                    <p className="text-white/60 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0d9488] font-bold text-xs tracking-wider uppercase mb-3">
                FAQ
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk leading-tight">
                Questions, answered.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-[#1c1c26] border border-white/10 rounded-2xl p-8 sm:p-10">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  id={`agent-${i}`}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk leading-tight">
              Stop renting AI.
              <br />
              <span className="bg-gradient-to-r from-[#0d9488] via-[#2dd4bf] to-[#8B5CF6] text-transparent bg-clip-text">
                Own the workforce.
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-10 font-light leading-relaxed">
              Book a free 30-minute call. We'll map your workflow and see if the Agent System fits.
            </p>
            <MagneticButton strength={0.2}>
              <Button
                onClick={() => (window.location.href = calendlyLink)}
                className="bg-gradient-to-r from-[#0d9488] to-[#2dd4bf] hover:from-[#0f766e] hover:to-[#14b8a6] text-white rounded-full group shadow-lg shadow-[#0b7f73]/30 px-10 py-6 text-lg font-space-grotesk font-semibold"
              >
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}