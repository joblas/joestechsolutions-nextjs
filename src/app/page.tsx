import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Joe's Tech Solutions — Custom AI Infrastructure & Apps for SMBs",
  description:
    "Multi-agent AI running 24/7 on my own stack. Private LLMs for clients. Production apps in React Native and Next.js. No hype — just things I've shipped.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joe's Tech Solutions — Custom AI Infrastructure & Apps for SMBs",
    description:
      "Multi-agent AI running 24/7 on my own stack. Private LLMs for clients. Production apps in React Native and Next.js. No hype — just things I've shipped.",
    url: "https://www.joestechsolutions.com",
  },
};
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { CountUp } from "@/components/animations/CountUp";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { AngleBand } from "@/components/ui/AngleBand";
import { TIERS, type Tier } from "@/lib/tiers";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  count: boolean;
  display?: string;
};

const stats: Stat[] = [
  { value: 25, suffix: "", label: "AI agents in production", count: true },
  { value: 0, suffix: "", label: "24/7 unattended operation", count: false, display: "24/7" },
  { value: 32, suffix: "", label: "Scheduled cron jobs", count: true },
  { value: 100, suffix: "%", label: "Local & private by default", count: true },
];

// Services preview — data comes from the canonical tier ladder in lib/tiers.ts.
// Images/metrics are homepage presentation only.
const tierMedia: Record<Tier["id"], { image: string; alt: string }> = {
  "morning-brief": {
    image: "/images/joe-presenting-ai.png",
    alt: "Joe presenting a daily AI briefing",
  },
  "quick-start": {
    image: "/images/joe-launch-private-ai.png",
    alt: "Joe launching a private AI setup for a client",
  },
  "back-office": {
    image: "/images/joe-deploying-server.png",
    alt: "Joe deploying a server for back-office automation",
  },
  "business-os": {
    image: "/images/tech-monitors-development.jpg",
    alt: "Operations monitors running business automation",
  },
  "custom-build": {
    image: "/images/skate-workshop-hero.png",
    alt: "The Skate Workshop mobile app",
  },
  "agent-system": {
    image: "/images/blog/22-agent-architecture.png",
    alt: "25-agent architecture diagram",
  },
};

const tierTag = (t: Tier) =>
  `${t.category} — ${t.price}${t.cadence === "monthly" ? "/mo" : ""}`;

// Stripe-blocked tiers route to /contact until their pages + price IDs exist.
const tierHref = (t: Tier) =>
  ["morning-brief", "business-os"].includes(t.id) && !t.stripeReady
    ? `/contact?tier=${t.id}`
    : t.href;

const featuredTier = TIERS.find((t) => t.id === "quick-start")!;
const otherTiers = TIERS.filter((t) => t.id !== "quick-start");

const featuredMetrics = [
  { v: "100%", l: "Private" },
  { v: "$0/mo", l: "After setup" },
  { v: "75 min", l: "Live session" },
  { v: "24", l: "Models" },
];

const portfolio = [
  {
    name: "RenFaire Directory",
    tag: "Live • Revenue-generating",
    desc: "The modern guide to Renaissance faires across America. 200+ listings, SEO-first architecture, affiliate monetization, top Google rankings.",
    href: "/portfolio/renfaire-directory",
    image: "/images/renfaire-hero.jpg",
    alt: "RenFaire Directory homepage",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Hermes Agent System",
    tag: "In prod • 25 agents",
    desc: "My own 24/7 multi-agent system — coding, research, content, ops.",
    href: "/stack",
    image: "/images/blog/22-agent-architecture.png",
    alt: "25-agent architecture",
    span: "",
  },
  {
    name: "The Skate Workshop",
    tag: "Paused • React Native",
    desc: "Cross-platform coaching app. 400+ trick DB, video feedback, multiplayer.",
    href: "/portfolio/skate-workshop",
    image: "/images/skate-workshop-hero.png",
    alt: "The Skate Workshop app",
    span: "",
  },
  {
    name: "Whisper Walkie",
    tag: "Archive · MIT",
    desc: "Push-to-talk voice typing that works in any app. Your voice never leaves your machine.",
    href: "/whisper-walkie",
    image: "/images/joe-ai-typing.png",
    alt: "Whisper Walkie voice typing",
    span: "",
  },
  {
    name: "Private AI Setup",
    tag: "Client work",
    desc: "Self-hosted LLMs for SMBs who don't want their data in someone else's cloud.",
    href: "/private-ai-setup",
    image: "/images/joe-launch-private-ai.png",
    alt: "Private AI setup",
    span: "",
  },
];

const stackLogos = [
  { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
  { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
  { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
  { name: "Flux", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
  { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
  { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
  { name: "Anthropic", logo: "/logos/anthropic.png", url: "https://anthropic.com" },
  { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Subtle radial glow (replaces particle background) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 0%, rgba(13,148,136,0.18), transparent 60%), radial-gradient(50% 50% at 20% 30%, rgba(45,212,191,0.10), transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            {/* Avatar + Status badge */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#0d9488]/30 shadow-lg shadow-[#0b7f73]/20">
                  <Image
                    src="/images/joe-corporate-headshot.png"
                    alt="Joe Blas — Founder of Joe's Tech Solutions"
                    fill
                    priority
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c1c26] border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b7f73] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2dd4bf]" />
                  </span>
                  <span className="text-white/80">
                    Currently operating <span className="text-[#2dd4bf]">Hermes</span> — 25 agents, 24/7
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Custom AI Infrastructure</span>
                <span className="block text-[#0d9488]">&amp; Apps That Actually Ship.</span>
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                Multi-agent AI running 24/7 on my own stack. Private LLMs for clients. Production
                apps in React Native and Next.js. No hype — just things I&apos;ve shipped.
              </p>
            </FadeIn>

            {/* CTAs — fixed: /services and /contact, not back to homepage */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/services">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-white text-lg px-10 py-7 rounded-full group shadow-lg shadow-[#0b7f73]/20 transition-all">
                      See What I Do
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all">
                    Let&apos;s Talk
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-10 border-y border-white/5 bg-[#1c1c26]/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0d0d12] p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold font-space-grotesk text-white mb-2">
                  {s.count ? (
                    <CountUp to={s.value} suffix={s.suffix} duration={2} />
                  ) : (
                    <span>{s.display}</span>
                  )}
                </div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approved angle */}
      <AngleBand />

      {/* Services */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-[#2dd4bf] text-sm font-semibold uppercase tracking-wider mb-3">Services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk mb-4">
              Six ways I work with you.
            </h2>
            <p className="text-lg text-white/60 font-light">
              From a one-off private AI setup to a full multi-agent system — all battle-tested on
              my own business first.
            </p>
          </div>

          {/* Featured: Quick Start */}
          <AnimatedCard>
            <Link href={tierHref(featuredTier)} className="block mb-6">
              <Card className="relative bg-[#1c1c26] border-[#0d9488]/30 hover:border-[#0d9488]/60 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0b7f73]/20 rounded-full text-[#2dd4bf] text-sm font-medium z-10">
                  {featuredTier.badge}
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="space-y-4 p-6 sm:p-8">
                    <p className="text-[#0d9488] text-sm font-semibold">{tierTag(featuredTier)}</p>
                    <CardTitle className="text-white text-2xl font-space-grotesk">{featuredTier.name}</CardTitle>
                    <p className="text-white/70 leading-relaxed">{featuredTier.blurb}</p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {featuredMetrics.map((m) => (
                        <div key={m.l} className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#0d9488] font-semibold">{m.v}</span>
                          <span className="text-white/60 block text-sm">{m.l}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#0d9488] font-medium group/link pt-2">
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="relative min-h-[240px] bg-[#0d0d12]">
                    <Image
                      src={tierMedia[featuredTier.id].image}
                      alt={tierMedia[featuredTier.id].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          </AnimatedCard>

          {/* Five remaining tiers */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherTiers.map((t) => (
              <AnimatedCard key={t.id}>
                <Link href={tierHref(t)}>
                  <Card className="relative bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 group h-full overflow-hidden">
                    {t.badge && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-[#0b7f73]/20 rounded-full text-[#2dd4bf] text-xs font-medium z-10">
                        {t.badge}
                      </div>
                    )}
                    <div className="relative aspect-[16/10] bg-[#0d0d12] overflow-hidden">
                      <Image
                        src={tierMedia[t.id].image}
                        alt={tierMedia[t.id].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="space-y-2">
                      <p className="text-[#2dd4bf] text-xs font-semibold">{tierTag(t)}</p>
                      <CardTitle className="text-white text-xl font-space-grotesk">{t.name}</CardTitle>
                      <CardDescription className="text-white/60 text-sm leading-relaxed">{t.blurb}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-[#0d9488] text-sm font-medium inline-flex items-center group/link">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio — bento grid */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-[#2dd4bf] text-sm font-semibold uppercase tracking-wider mb-3">Proof of work</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk mb-4">
              Real things I&apos;ve built.
            </h2>
            <p className="text-lg text-white/60 font-light">
              Not mockups. Not concepts. Things people actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 auto-rows-[220px]">
            {portfolio.map((p) => (
              <AnimatedCard key={p.name} className={p.span}>
                <Link href={p.href} className="block h-full">
                  <div className={`relative h-full overflow-hidden rounded-2xl border border-white/10 hover:border-[#0d9488]/40 transition-all duration-500 group ${p.span}`}>
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[#2dd4bf] text-xs font-semibold mb-1">{p.tag}</p>
                      <h3 className="text-white text-lg font-semibold font-space-grotesk mb-1">{p.name}</h3>
                      <p className="text-white/70 text-sm leading-snug line-clamp-2">{p.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[#0d9488] text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        View <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stack — clean grid */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-[#2dd4bf] text-sm font-semibold uppercase tracking-wider mb-3">The stack</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk mb-4">
                What I actually run.
              </h2>
              <p className="text-lg text-white/60 font-light">
                Not a logo wall — the real tools, models, and services powering my business right now.
              </p>
            </div>
            <Link href="/stack" className="shrink-0">
              <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 group">
                See the live stack
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stackLogos.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 h-32 bg-[#1c1c26] border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:bg-[#1c1c26]/80 transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  decoding="async"
                  width={40}
                  height={40}
                  className="max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-white/60">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl bg-[#1c1c26] border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-space-grotesk">
                The JTS Brief
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Weekly notes from a builder actually shipping AI. 100% human. No slop.
              </p>

              <NewsletterSignup />

              <p className="text-xs text-white/40 mt-6">
                No spam. No AI-generated content. Unsubscribe anytime.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA — fixed link to /contact */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 100%, rgba(13,148,136,0.18), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
            Got something that needs fixing?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Book a free 30-min call. No pitch, no pressure — just a straight conversation about
            what you need and whether I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0b7f73]/30 transition-all">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </MagneticButton>
            </Link>
            <a href="mailto:joe@joestechsolutions.com">
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all group">
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                Email me
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}