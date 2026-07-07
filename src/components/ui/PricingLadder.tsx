import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TierCard } from "@/components/ui/TierCard";
import { TIERS } from "@/lib/tiers";

// The full 6-tier ladder, cheapest to biggest. Data comes from lib/tiers.ts.
export function PricingLadder() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Six ways I work with you.
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              From a $199 daily brief to a full agent system. Every tier runs on the same stack I
              run for my own business.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {TIERS.map((tier) => (
            <StaggerItem key={tier.id} className="h-full">
              <TierCard tier={tier} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
