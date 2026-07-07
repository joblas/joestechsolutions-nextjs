import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "About Joe | Joe's Tech Solutions",
  description: "Joe runs a real AI stack for his own business. He's client zero — everything JTS builds, he uses himself first.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About | Joe's Tech Solutions",
    description: "Joe runs a real AI stack for his own business. He's client zero — everything JTS builds, he uses himself first.",
    url: 'https://www.joestechsolutions.com/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[#0d0d12]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-space-grotesk">
                  Client Zero.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light">
                  Joe doesn&apos;t sell tools he read about. He runs a real AI stack for his own business —
                  an orchestrator with sub-agents handling coding, research, content, and memory across
                  sessions. Everything JTS builds, he tested on himself first.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  A background in large-scale operations. Full-stack builder. Building apps,
                  automation, and AI tools for small businesses — stuff that actually works, not hype.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/contact">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-white rounded-full group shadow-lg shadow-[#0b7f73]/20">
                      Let&apos;s Work Together
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0b7f73] rounded-3xl blur-2xl opacity-20" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/joe-profile.jpg"
                    alt="Joe Blasiola, Founder of Joe's Tech Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Joe&apos;s Journey
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Operations experience, hands-on build experience, and a live AI system proving it all works
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Image src="/icons/tools-dynamic/premium.png" alt="Waymo Operations" width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">Waymo Operations</h3>
                    <p className="text-white/70 leading-relaxed">
                      Worked on critical infrastructure at Waymo. Learned to handle complexity, ensure reliability, and deliver under pressure — at autonomous vehicle scale.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#2dd4bf]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-[#2dd4bf]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Image src="/icons/computer-dynamic/premium.png" alt="AI Agent Systems" width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">AI Agent Systems</h3>
                    <p className="text-white/70 leading-relaxed">
                      Runs a multi-agent AI stack for JTS operations right now — an orchestrator delegating to specialized sub-agents for coding, research, and content. Not theory. A live system you can see at <Link href="/stack" className="text-[#2dd4bf] hover:underline">/stack</Link>.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Image src="/icons/rocket-dynamic/premium.png" alt="Private AI Infrastructure" width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">Private AI Infrastructure</h3>
                    <p className="text-white/70 leading-relaxed">
                      Sets up private AI tools for SMBs — local or cloud. Your data stays yours.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Work With Joe */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 font-space-grotesk">
              Why Work With Joe&apos;s Tech Solutions?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.1}>
            {[
              {
                title: "He&apos;s Client Zero",
                description: "Joe runs an AI orchestrator with specialized sub-agents — coding, research, content, memory — for JTS right now. Every system he sells to clients, he battle-tested on his own business first. No vapor, no demos — real production systems."
              },
              {
                title: "Outcomes, Not Tools",
                description: "Most AI consultants hand you a stack and charge by the hour. Joe sells outcomes: your business runs faster, leaner, and smarter. The how is his problem."
              },
              {
                title: "End-to-End Delivery",
                description: "Private AI setup, agent system design, workflow automation, custom dev — all under one roof. No vendor juggling."
              },
              {
                title: "No Corporate BS",
                description: "Direct communication, honest timelines, no fluff. If something isn&apos;t right for your business, Joe will tell you instead of upselling you."
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className={`bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full ${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
                    <CardContent className="p-8">
                      <h3 className="text-white font-bold text-2xl mb-4 font-space-grotesk">{item.title}</h3>
                      <p className="text-white/70 text-lg leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Credentials
              </h2>
              <p className="text-xl text-white/70 font-light">
                From autonomous vehicles to custom apps
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-4/3 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/credentials-google-waymo.jpg"
                alt="Waymo Google Credentials"
                fill
                className="object-cover object-top"
              />
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
                Tools I Actually Use
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                The actual tools, models, and services running right now. <Link href="/stack" className="text-[#2dd4bf] hover:underline">See the live stack</Link>.
              </p>
            </FadeIn>
          </div>

          {/* Top Row - Scrolling Left */}
          <div className="relative mb-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {[
                { name: "Anthropic Claude", logo: "/logos/claude-color.png", url: "https://www.anthropic.com" },
                { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
                { name: "Anthropic Claude", logo: "/logos/claude-color.png", url: "https://www.anthropic.com" },
                { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
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
                { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
                { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
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
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Ready to Start Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Book a free 30min call. No pitch, no pressure — just a straight conversation about what you need and whether I can help.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0b7f73]/30">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
