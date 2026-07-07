import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import type { Tier } from "@/lib/tiers";

// Static class maps per accent so Tailwind can see every class at build time.
const accentStyles: Record<
  Tier["accent"],
  { border: string; text: string; check: string; badge: string; button: string }
> = {
  "#0d9488": {
    border: "border-[#0d9488]/30 hover:border-[#0d9488]/50",
    text: "text-[#0d9488]",
    check: "text-[#0d9488]",
    badge: "bg-[#0b7f73]/20 text-[#2dd4bf]",
    button: "bg-[#0b7f73] hover:bg-[#0f766e] shadow-[#0b7f73]/20",
  },
  "#2dd4bf": {
    border: "border-[#2dd4bf]/30 hover:border-[#2dd4bf]/50",
    text: "text-[#2dd4bf]",
    check: "text-[#2dd4bf]",
    badge: "bg-[#2dd4bf]/20 text-[#2dd4bf]",
    button: "bg-[#2dd4bf] hover:bg-[#14b8a6] shadow-[#2dd4bf]/20",
  },
  "#8B5CF6": {
    border: "border-[#8B5CF6]/30 hover:border-[#8B5CF6]/50",
    text: "text-[#8B5CF6]",
    check: "text-[#8B5CF6]",
    badge: "bg-[#8B5CF6]/20 text-[#a78bfa]",
    button: "bg-[#8B5CF6] hover:bg-[#7c3aed] shadow-[#8B5CF6]/20",
  },
};

// Tier detail pages that exist today. /morning-brief and /business-os ship in Phase 3.
const liveDetailPages = new Set(["/private-ai-setup", "/agent-system"]);

export function tierPriceLabel(tier: Tier) {
  if (tier.cadence === "monthly") return `${tier.price}/mo`;
  if (tier.cadence === "one-time") return `${tier.price} one-time`;
  return tier.price;
}

export function tierCtaHref(tier: Tier) {
  return tier.stripeReady ? tier.href : `/contact?tier=${tier.id}`;
}

export function TierCard({ tier }: { tier: Tier }) {
  const accent = accentStyles[tier.accent];
  const ctaHref = tierCtaHref(tier);
  const showLearnMore = ctaHref !== tier.href && liveDetailPages.has(tier.href);

  return (
    <AnimatedCard className="h-full">
      <Card
        className={`relative h-full flex flex-col bg-[#1c1c26] ${accent.border} transition-all duration-500 overflow-hidden group p-8`}
      >
        {tier.badge && (
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium z-10 ${accent.badge}`}
          >
            {tier.badge}
          </div>
        )}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d0d12] rounded-full blur-3xl" />

        <div className="relative flex flex-col flex-1 space-y-5">
          <div>
            <p className={`text-sm font-semibold mb-1 ${accent.text}`}>{tier.category}</p>
            <h3 className="text-2xl font-bold text-white font-space-grotesk">{tier.name}</h3>
            <p className={`font-semibold text-lg ${accent.text}`}>{tierPriceLabel(tier)}</p>
          </div>

          <p className="text-white/80 leading-relaxed font-light">{tier.blurb}</p>

          <div className="space-y-3 flex-1">
            {tier.features.map((feature) => (
              <div key={feature} className="flex items-start">
                <CheckCircle
                  weight="duotone"
                  className={`h-6 w-6 mr-3 shrink-0 mt-0.5 ${accent.check}`}
                />
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <Link href={ctaHref} className="block">
              <Button
                className={`w-full text-white rounded-full group/btn shadow-lg ${accent.button}`}
              >
                {tier.stripeReady ? "Get Started" : "Talk to Me About This"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {showLearnMore && (
              <p className="text-center text-sm">
                <Link href={tier.href} className={`hover:underline ${accent.text}`}>
                  Learn more about {tier.name} →
                </Link>
              </p>
            )}
          </div>
        </div>
      </Card>
    </AnimatedCard>
  );
}
