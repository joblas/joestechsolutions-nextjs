import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mic, Download, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AngleBand } from "@/components/ui/AngleBand";
import { TierCard, tierPriceLabel } from "@/components/ui/TierCard";
import { OfferCatalogSchema } from "@/components/seo/JsonLd";
import { TIERS } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Services | Joe's Tech Solutions",
  description:
    "Six ways I work with you — from a $199 Morning Brief to a full Enterprise Agent System. Every service runs on the same stack I run for my own business.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Joe's Tech Solutions",
    description:
      "Six ways I work with you — from a $199 Morning Brief to a full Enterprise Agent System.",
    url: "https://www.joestechsolutions.com/services",
  },
};

export default function Services() {
  return (
    <div className="min-h-screen">
      <OfferCatalogSchema />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Six ways I</span>
                <span className="block text-[#0d9488]">work with you.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                I run a real AI stack for my own business — an orchestrator with sub-agents for
                coding, research, and content. Every service below is something I run for JTS
                first, then build for yours.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* One anchored section per tier */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {TIERS.map((tier, index) => (
              <FadeIn key={tier.id} delay={0.1 + index * 0.05} className="h-full">
                {/* scroll-mt keeps anchor targets clear of the fixed header */}
                <div id={tier.id} className="h-full scroll-mt-24">
                  <TierCard tier={tier} />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Free Tools */}
          <FadeIn delay={0.35}>
            <div className="mt-20">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-space-grotesk">
                  Free & Open Source
                </h2>
                <p className="text-white/60 text-base font-light">
                  Free tools I built and still ship.
                </p>
              </div>

              <Link href="/whisper-walkie" className="block">
                <AnimatedCard>
                  <Card className="bg-[#1c1c26]/60 border-white/10 hover:border-[#2dd4bf]/40 transition-all duration-500 group overflow-hidden">
                    <div className="relative grid sm:grid-cols-[auto_1fr_auto] items-center gap-6 p-8">
                      <div className="w-16 h-16 bg-[#2dd4bf]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2dd4bf]/20 transition-all duration-300 mx-auto sm:mx-0">
                        <Mic className="h-8 w-8 text-[#2dd4bf]" />
                      </div>

                      <div className="text-center sm:text-left">
                        <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                          <h3 className="text-xl font-bold text-white font-space-grotesk">
                            Whisper Walkie
                          </h3>
                          <span className="px-2.5 py-0.5 bg-[#2dd4bf]/15 rounded-full text-[#2dd4bf] text-xs font-medium">
                            Free
                          </span>
                        </div>
                        <p className="text-white/70 text-base leading-relaxed mb-3">
                          Push-to-talk voice typing for any app. Hold a key, speak, release — text
                          appears wherever your cursor is. 100% local, no cloud, no subscriptions.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {["Windows", "macOS", "Linux", "GPU Accelerated", "Offline"].map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-white/5 rounded text-white/50 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2dd4bf] hover:bg-[#14b8a6] text-white text-sm font-medium rounded-full shadow-lg shadow-[#2dd4bf]/20 transition-colors">
                          <Download className="h-4 w-4" />
                          Download Free
                        </span>
                        <span className="text-white/40 text-xs flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          MIT License
                        </span>
                      </div>
                    </div>
                  </Card>
                </AnimatedCard>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <AngleBand />

      {/* CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Ready to start?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Schedule a free 30min call. I&apos;ll tell you what I&apos;d automate first — from{" "}
              {tierPriceLabel(TIERS[0])} up.
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
