import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, ShieldCheck, Robot, ChatCircle, Cpu } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { VERTICALS_DATA, getAllVerticalSlugs } from "@/lib/verticals";
import type { Metadata } from "next";

// Generate static params for all verticals
export function generateStaticParams() {
  return getAllVerticalSlugs().map((slug) => ({
    vertical: slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical: slug } = await params;
  const vertical = VERTICALS_DATA[slug];

  if (!vertical) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${vertical.name} AI Assistant | Private AI Setup | Joe's Tech Solutions`,
    description: vertical.description,
    alternates: {
      canonical: `/private-ai-setup/industries/${slug}`,
    },
    openGraph: {
      title: `${vertical.name} AI Assistant | Joe's Tech Solutions`,
      description: vertical.tagline + " — " + vertical.description,
      url: `https://calendly.com/joe-joestechsolutions/30min/private-ai-setup/industries/${slug}`,
    },
  };
}

export default async function VerticalDetailPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical: slug } = await params;
  const vertical = VERTICALS_DATA[slug];

  if (!vertical) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b7f73] rounded-full blur-[120px] animate-glow" />
          {vertical.isPremium && (
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5CF6] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
          )}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/private-ai-setup/industries"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>All Industries</span>
            </Link>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                {vertical.isPremium && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] text-sm font-medium">
                    <ShieldCheck weight="fill" className="h-4 w-4" />
                    Compliance-Ready
                  </span>
                )}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk text-white mb-6">
                {vertical.name} AI
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-[#0d9488] font-medium mb-4">
                {vertical.tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light">
                {vertical.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Private + Features */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Why Private AI */}
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-space-grotesk">
                  Why Private AI for {vertical.name}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {vertical.whyPrivate}
                </p>

                {/* Welcome Message */}
                <div className="p-6 bg-[#0b7f73]/5 border border-[#0d9488]/20 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Robot weight="duotone" className="h-5 w-5 text-[#0d9488]" />
                    <span className="text-[#0d9488] font-medium text-sm">What your AI says when you log in</span>
                  </div>
                  <p className="text-white/80 italic leading-relaxed">
                    &ldquo;{vertical.welcomeMessage}&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* What the AI Can Do */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-space-grotesk">
                  What Your AI Can Do
                </h2>
                <div className="space-y-4">
                  {vertical.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-[#1c1c26] rounded-xl border border-white/5">
                      <CheckCircle weight="duotone" className="h-6 w-6 text-[#0d9488] shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sample Prompts */}
      <section className="relative py-16 sm:py-24 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
                Try These Prompts
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Here are example conversations to get you started with your {vertical.name.toLowerCase()} AI assistant.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {vertical.samplePrompts.map((prompt, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <ChatCircle weight="duotone" className="h-6 w-6 text-[#0d9488] mb-3" />
                      <p className="text-white/80 leading-relaxed">&ldquo;{prompt}&rdquo;</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recommended Models */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
                Recommended Models
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The installer auto-detects your hardware and picks the best model. Here&apos;s what works best for {vertical.name.toLowerCase()}.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {vertical.recommendedModels.map((model, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#2dd4bf]/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <Cpu weight="duotone" className="h-8 w-8 text-[#2dd4bf] mx-auto mb-3" />
                      <p className="text-[#2dd4bf] font-semibold mb-1">{model.ram} RAM</p>
                      <p className="text-white font-mono text-sm mb-2">{model.model}</p>
                      <p className="text-white/50 text-sm">{model.why}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance Checklist (premium verticals only) */}
      {vertical.isPremium && vertical.complianceNotes && (
        <section className="relative py-16 sm:py-24 bg-[#1c1c26]/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <ShieldCheck weight="duotone" className="h-8 w-8 text-[#8B5CF6]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
                  Security &amp; Compliance Checklist
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  I configure these security hardening steps during your setup session.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="bg-[#1c1c26] border-[#8B5CF6]/20">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {vertical.complianceNotes.map((note, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle weight="duotone" className="h-5 w-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span className="text-white/80">{note}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0b7f73] rounded-full blur-[150px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Get Your {vertical.name} AI Today
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              {vertical.isPremium
                ? `The ${vertical.name} assistant is included with every tier. For compliance features, we recommend the Enterprise plan ($999 + $79/mo).`
                : `The ${vertical.name} assistant is included with every Private AI Setup — starting at $199.`}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/private-ai-setup">
                <MagneticButton strength={0.3}>
                  <Button size="lg" className={`text-white text-lg px-10 py-7 rounded-full group shadow-2xl ${
                    vertical.isPremium
                      ? "bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-[#8B5CF6]/30"
                      : "bg-[#0b7f73] hover:bg-[#0f766e] shadow-[#0b7f73]/30"
                  }`}>
                    View Pricing
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/private-ai-setup/industries">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 text-white">
                  Browse All Industries
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
