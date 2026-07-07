import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Robot,
  Gear,
  Buildings,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AngleBand } from "@/components/ui/AngleBand";
import { PricingLadder } from "@/components/ui/PricingLadder";
import { OfferCatalogSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Solutions | Joe's Tech Solutions",
  description:
    "Private AI, back-office automation, a full Business OS, and multi-agent systems. Six ways I work with you — all built on the stack I run for my own business.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Joe's Tech Solutions",
    description:
      "Private AI, back-office automation, a full Business OS, and multi-agent systems. Six ways I work with you.",
    url: "https://www.joestechsolutions.com/solutions",
  },
};

const solutions = [
  {
    name: "Private AI Setup",
    icon: Robot,
    accent: "#0d9488",
    description:
      "Your own AI running on your machine or server. No subscriptions, no data leaving your environment. You own it forever.",
    href: "/private-ai-setup",
    cta: "Get Private AI",
  },
  {
    name: "Back Office Automation",
    icon: Gear,
    accent: "#2dd4bf",
    description:
      "An AI assistant on your own server handling outreach, scheduling, and reporting — tuned and maintained every month.",
    href: "/services#back-office",
    cta: "See Back Office",
  },
  {
    name: "Business OS",
    icon: Buildings,
    accent: "#8B5CF6",
    description:
      "The full operations layer: daily briefings, automation, reporting, and a light agent org working your workflows.",
    href: "/contact?tier=business-os",
    cta: "Talk Business OS",
  },
  {
    name: "Agent System",
    icon: TreeStructure,
    accent: "#8B5CF6",
    description:
      "An orchestrator delegating to specialized sub-agents — the same 14-agent architecture running my business right now.",
    href: "/agent-system",
    cta: "Explore the System",
  },
] as const;

const solutionAccent: Record<string, { iconBg: string; iconText: string; border: string; link: string }> = {
  "#0d9488": {
    iconBg: "bg-[#0b7f73]/10",
    iconText: "text-[#0d9488]",
    border: "border-white/10 hover:border-[#0d9488]/50",
    link: "text-[#0d9488]",
  },
  "#2dd4bf": {
    iconBg: "bg-[#2dd4bf]/10",
    iconText: "text-[#2dd4bf]",
    border: "border-white/10 hover:border-[#2dd4bf]/50",
    link: "text-[#2dd4bf]",
  },
  "#8B5CF6": {
    iconBg: "bg-[#8B5CF6]/10",
    iconText: "text-[#8B5CF6]",
    border: "border-white/10 hover:border-[#8B5CF6]/50",
    link: "text-[#8B5CF6]",
  },
};

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <OfferCatalogSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.joestechsolutions.com" },
          { name: "Solutions", url: "https://www.joestechsolutions.com/solutions" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Solutions I build.</span>
                <span className="block text-[#0d9488]">Tested on my own business first.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Private AI, automation, and agent systems. Everything here runs for JTS before it
                ships to you — no demos, no vaporware.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4-Solution Grid */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 gap-8" staggerDelay={0.15}>
            {solutions.map((solution) => {
              const accent = solutionAccent[solution.accent];
              const Icon = solution.icon;
              return (
                <StaggerItem key={solution.name} className="h-full">
                  <AnimatedCard className="h-full">
                    <Card
                      className={`relative h-full bg-[#1c1c26] ${accent.border} transition-all duration-500 overflow-hidden group p-8`}
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d0d12] rounded-full blur-3xl" />
                      <div className="relative space-y-5">
                        <div
                          className={`w-16 h-16 ${accent.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon weight="duotone" className={`h-10 w-10 ${accent.iconText}`} />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-space-grotesk">
                          {solution.name}
                        </h2>
                        <p className="text-white/70 leading-relaxed">{solution.description}</p>
                        <Link
                          href={solution.href}
                          className={`inline-flex items-center gap-2 font-medium hover:underline ${accent.link}`}
                        >
                          {solution.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Full 6-Tier Ladder */}
      <PricingLadder />

      <AngleBand />

      {/* CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Not sure which one fits?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Tell me what's eating your time. I'll tell you what I'd automate first — free 30min
              call, no pitch deck.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact">
              <MagneticButton strength={0.3}>
                <Button
                  size="lg"
                  className="bg-[#0b7f73] hover:bg-[#0f766e] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0b7f73]/30"
                >
                  Schedule 30min Call
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
