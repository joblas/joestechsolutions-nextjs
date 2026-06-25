import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Joe's Tech Solutions — Custom Apps, Automation, and AI Infrastructure",
  description:
    "I help my friends fix their businesses. Custom apps, automation, and private AI tools — built and battle-tested on my own business first.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joe's Tech Solutions — Custom Apps, Automation, and AI Infrastructure",
    description:
      "I help my friends fix their businesses. Custom apps, automation, and private AI tools — built and battle-tested on my own business first.",
    url: "https://joestechsolutions.com",
  },
};
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Transparent -- particles come from global ThreeBackground behind this */}

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1c1c26] border border-white/10 rounded-full text-[#0d9488] text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b7f73] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2dd4bf]" />
                </span>
                <span>Building stuff myself and learning as I go — not as hard as people make it seem</span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">I Help My Friends</span>
                <span className="block text-[#0d9488]">
                  Fix Their Businesses.
                </span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Custom apps, automation, and AI tools — built on the same stack I run for my own business.
                No hype. Just stuff that works.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
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
                <a href="https://calendly.com/joe-joestechsolutions/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all">
                    Let&apos;s Talk
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
                What I Do
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Apps, automation, and AI tools. All tested on my own business first.
              </p>
            </FadeIn>
          </div>

          {/* Featured: The Quick Start */}
          <FadeIn delay={0.1}>
            <Link href="/private-ai-setup" className="block mb-8">
              <AnimatedCard>
                <Card className="relative bg-[#1c1c26] border-[#0d9488]/30 hover:border-[#0d9488]/60 transition-all duration-500 group backdrop-blur-sm overflow-hidden">
                  {/* Most Popular badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0b7f73]/20 rounded-full text-[#2dd4bf] text-sm font-medium z-10">
                    Most Popular
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="space-y-4">
                      <div className="w-14 h-14 bg-[#0b7f73]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0b7f73]/30 transition-all duration-300">
                        <Image src="/icons/computer-dynamic/premium.png" alt="The Quick Start" width={36} height={36} sizes="36px" className="object-contain" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-space-grotesk mb-2">The Quick Start</CardTitle>
                        <CardDescription className="text-white/70 text-base">
                          Your own AI tools. No data leaks. No subscriptions.
                        </CardDescription>
                      </div>
                      <p className="text-white/60 leading-relaxed">
                        Run powerful AI on your own computer or private server. Keep sensitive data in-house.
                        I set it up, show you how it works, and you own it. Starting at $199.
                      </p>
                      <div className="flex items-center gap-2 text-[#0d9488] font-medium group/link">
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#0d9488] font-semibold">100%</span>
                          <span className="text-white/60 block">Private</span>
                        </div>
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#2dd4bf] font-semibold">$0/mo</span>
                          <span className="text-white/60 block">After Setup</span>
                        </div>
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#0d9488] font-semibold">75 min</span>
                          <span className="text-white/60 block">Live Session</span>
                        </div>
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#2dd4bf] font-semibold">24</span>
                          <span className="text-white/60 block">Models</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {/* The Back Office */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0b7f73]/20 transition-all duration-300">
                      <Image src="/icons/chat-bubble-dynamic/premium.png" alt="The Back Office" width={36} height={36} sizes="36px" className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">The Back Office</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Recurring automation — $200-$1,200/mo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      I set up an AI assistant on your server that handles the boring stuff —
                      outreach, scheduling, reporting. Then I keep it tuned up every month.
                    </p>
                    <Link href="/services#back-office" className="text-[#0d9488] text-sm font-medium hover:text-[#0f766e] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Multi-agent Systems */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#2dd4bf]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#2dd4bf]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#2dd4bf]/20 transition-all duration-300">
                      <Image src="/icons/tools-dynamic/premium.png" alt="Multi-agent Systems" width={32} height={32} sizes="32px" className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Multi-agent Systems</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Full automation — $8K-$40K+
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      An AI orchestrator that delegates to specialized sub-agents — coding, research, content.
                      The same architecture I run for my own business. See the <Link href="/stack" className="text-[#2dd4bf] hover:underline">live stack</Link>.
                    </p>
                    <Link href="/services#agent-systems" className="text-[#2dd4bf] text-sm font-medium hover:text-[#14b8a6] inline-flex items-center group/link transition-colors">
                      Explore systems
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Custom App Build */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0b7f73]/20 transition-all duration-300">
                      <Image src="/icons/rocket-dynamic/premium.png" alt="Custom App Build" width={32} height={32} sizes="32px" className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Custom App Build</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Mobile + web apps — $5K-$25K
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Got an app idea? I build mobile and web apps with the same tools I use every day —
                      React Native, Next.js, and AI-assisted development.
                    </p>
                    <Link href="/services#custom-app" className="text-[#0d9488] text-sm font-medium hover:text-[#0f766e] inline-flex items-center group/link transition-colors">
                      Explore custom apps
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          {/* Free Tool: Whisper Walkie */}
          <FadeIn delay={0.3}>
            <Link href="/whisper-walkie" className="block mt-8">
              <AnimatedCard>
                <Card className="bg-[#1c1c26]/60 border-white/10 hover:border-[#2dd4bf]/40 transition-all duration-500 group backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
                    <div className="w-14 h-14 bg-[#2dd4bf]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2dd4bf]/20 transition-all duration-300">
                      <Image src="/icons/chat-text-dynamic/premium.png" alt="Whisper Walkie" width={36} height={36} sizes="36px" className="object-contain" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center gap-3 justify-center sm:justify-start mb-1">
                        <h3 className="text-white text-lg font-semibold font-space-grotesk">Whisper Walkie</h3>
                        <span className="px-2.5 py-0.5 bg-[#2dd4bf]/15 rounded-full text-[#2dd4bf] text-xs font-medium">Free & Open Source</span>
                      </div>
                      <p className="text-white/60 text-sm">
                        Push-to-talk voice typing that works in any app. 100% local — your voice never leaves your machine.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#2dd4bf] text-sm font-medium shrink-0 group-hover:translate-x-1 transition-transform">
                      Download Free
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured Case Study - RenFaire Directory */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-block px-4 py-1 bg-[#0b7f73]/10 border border-[#0d9488]/20 rounded-full text-[#0d9488] text-sm font-semibold mb-6">
                Featured Project
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Real Stuff I Built
              </h2>
              <p className="text-xl text-white/70 font-light">
                Not mockups. Not concepts. Things people actually use.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-[#0b7f73]/10 border border-[#0d9488]/20 rounded-full text-[#0d9488] text-sm font-semibold">
                  Content Platform • SEO • Directory
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-space-grotesk">
                  RenFaire Directory
                </h3>

                <p className="text-lg text-white/70 leading-relaxed font-light">
                  The modern guide to Renaissance faires across America. A revenue-generating
                  directory with 200+ event listings, rich structured data, affiliate monetization,
                  and top search engine rankings — live and serving thousands of visitors.
                </p>

                <div className="space-y-4">
                  {[
                    "200+ Renaissance faire listings nationwide",
                    "SEO-first architecture with structured data",
                    "Affiliate revenue and monetization built in",
                    "Top Google rankings for target keywords",
                    "Interactive maps and location-based search"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <CheckCircle weight="duotone" className="h-6 w-6 text-[#0d9488] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <span className="text-white/80 text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/portfolio/renfaire-directory">
                    <Button className="bg-[#0b7f73] hover:bg-[#0f766e] text-white rounded-full group shadow-lg shadow-[#0b7f73]/20">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="https://www.renfaireguide.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/5 hover:border-white/30">
                      Visit Live Site
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="relative group">
                <div className="relative aspect-[4/3] bg-[#1c1c26] rounded-3xl border border-white/10 overflow-hidden hover:border-[#0d9488]/30 transition-all duration-500">
                  <Image
                    src="/images/renfaire-hero.jpg"
                    alt="RenFaire Directory — Renaissance faire listings"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Secondary: The Skate Workshop */}
          <FadeIn delay={0.3}>
            <div className="mt-16 pt-16 border-t border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-square bg-[#1c1c26] rounded-3xl border border-white/10 overflow-hidden hover:border-[#2dd4bf]/30 transition-all duration-500">
                    <Image
                      src="/images/skate-workshop-hero.png"
                      alt="The Skate Workshop app icon"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-8"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 rounded-full text-[#2dd4bf] text-sm font-semibold">
                    Mobile App • iOS & Android • In Development
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-space-grotesk">
                    The Skate Workshop
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed font-light">
                    Cross-platform skateboarding coaching app with video feedback,
                    400+ trick database, and multiplayer game modes. Built with React Native
                    for iOS and Android with subscription billing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/portfolio/skate-workshop">
                      <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 group">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                The Stack
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                This is what I actually run. Not a list of logos — the real tools, models, and services powering my business right now.
              </p>
            </FadeIn>
          </div>

          <div className="text-center">
            <FadeIn delay={0.2}>
              <Link href="/stack">
                <MagneticButton strength={0.2}>
                  <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-white rounded-full group shadow-lg shadow-[#0b7f73]/20">
                    See the Live Stack
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </MagneticButton>
              </Link>
            </FadeIn>
          </div>

          {/* Logo scroll rows kept for visual continuity */}
          {/* Top Row - Scrolling Left */}
          <div className="relative mb-8 mt-12 overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {[
                { name: "Ollama Cloud", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
                { name: "Ollama Cloud", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 bg-[#1c1c26] border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:border-white/20 hover:bg-[#1c1c26]/80 transition-colors backdrop-blur-sm"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-right">
              {[
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
                { name: "Next.js", logo: "/logos/nextjs.svg", url: "https://nextjs.org" },
                { name: "React Native", logo: "/logos/react.svg", url: "https://reactnative.dev" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
                { name: "Next.js", logo: "/logos/nextjs.svg", url: "https://nextjs.org" },
                { name: "React Native", logo: "/logos/react.svg", url: "https://reactnative.dev" },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 bg-[#1c1c26] border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:border-white/20 hover:bg-[#1c1c26]/80 transition-colors backdrop-blur-sm"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Got Something That Needs Fixing?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Book a free 30min call. No pitch, no pressure — just a straight conversation about
              what you need and whether I can help.
            </p>
            <a href="https://calendly.com/joe-joestechsolutions/30min" target="_blank" rel="noopener noreferrer">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0b7f73]/30 transition-all">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </MagneticButton>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}