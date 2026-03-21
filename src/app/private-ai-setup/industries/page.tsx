import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Robot, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import {
  FirstAidKit, Scales, ChartLine, Heart, GraduationCap,
  Buildings, HardHat, PaintBrush, Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { VERTICALS_DATA } from "@/lib/verticals";

// Map icon names to components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  FirstAidKit, Scales, ChartLine, Heart, GraduationCap,
  Buildings, HardHat, PaintBrush, Storefront,
};

export default function IndustriesPage() {
  const verticals = Object.values(VERTICALS_DATA);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d9488] rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5CF6] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 mb-6">
                <Robot weight="duotone" className="h-5 w-5 text-[#0d9488]" />
                <span className="text-[#0d9488] font-medium">9 Industry Assistants</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Built for Your Industry</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Every Private AI Setup includes pre-configured assistants with industry-specific prompts,
                recommended models, and compliance features — ready to use from day one.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {verticals.map((vertical) => {
              const IconComponent = iconMap[vertical.icon];
              return (
                <StaggerItem key={vertical.slug}>
                  <AnimatedCard>
                    <Link href={`/private-ai-setup/industries/${vertical.slug}`} className="block h-full">
                      <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full group cursor-pointer overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-br from-[#0d9488]/5 to-transparent rounded-full blur-3xl" />
                        <CardContent className="p-8 relative">
                          <div className="flex items-start justify-between mb-6">
                            <div className="w-14 h-14 bg-[#0d9488]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                              {IconComponent && <IconComponent weight="duotone" className="h-7 w-7 text-[#0d9488]" />}
                            </div>
                            {vertical.isPremium && (
                              <span className="flex items-center gap-1 px-3 py-1 bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] text-xs font-medium">
                                <ShieldCheck weight="fill" className="h-3.5 w-3.5" />
                                Compliance
                              </span>
                            )}
                          </div>

                          <h2 className="text-2xl font-bold text-white font-space-grotesk mb-2 group-hover:text-[#0d9488] transition-colors">
                            {vertical.name}
                          </h2>
                          <p className="text-[#0d9488] text-sm font-medium mb-3">{vertical.tagline}</p>
                          <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                            {vertical.description}
                          </p>

                          <div className="flex items-center gap-2 text-[#0d9488] font-medium text-sm group-hover:gap-3 transition-all">
                            Learn More
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0d9488] rounded-full blur-[150px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              All 9 industry assistants are included with every Private AI Setup — starting at $199.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/private-ai-setup">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0d9488]/30">
                  View Pricing
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
