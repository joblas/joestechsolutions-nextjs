import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CheckCircle, Code, Database, ShieldCheck, Rocket } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "Services | Joe's Tech Solutions",
  description: "Mobile app development, web platforms, private AI infrastructure, and strategic consulting for ambitious SMBs.",
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Full-Stack Technology Partner</span>
                <span className="block text-[#0EA5E9]">
                  For Growing Businesses
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                From managing Waymo autonomous vehicle operations to building practical technology solutions—
                hands-on builder who understands systems, operations, and execution.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8 mb-20" staggerDelay={0.2}>
            {/* Mobile App Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card id="mobile" className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#0EA5E9]/10 to-transparent rounded-full blur-3xl" />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image src="/icons/mobile-dynamic/premium.png" alt="Mobile Development" width={40} height={40} className="object-contain" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white font-space-grotesk">Mobile App Development</CardTitle>
                        <p className="text-[#0EA5E9] font-semibold text-lg">$25K - $150K</p>
                      </div>
                    </div>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      Cross-platform mobile applications built with React Native for iOS and Android.
                      From concept to App Store deployment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <div className="space-y-3">
                      {[
                        "React Native (iOS + Android from single codebase)",
                        "Subscription billing & in-app purchases (Stripe, RevenueCat)",
                        "Push notifications & real-time features",
                        "Offline-first architecture with data sync",
                        "Native integrations (camera, location, sensors)",
                        "App Store & Google Play deployment",
                        "Analytics & crash reporting setup"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle weight="duotone" className="h-6 w-6 text-[#0EA5E9] mr-3 shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group/btn shadow-lg shadow-[#0EA5E9]/20">
                        Get Mobile App Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Web Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card id="web" className="bg-[#1c1c26] border-white/10 hover:border-[#06B6D4]/50 transition-all duration-500 overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#06B6D4]/10 to-transparent rounded-full blur-3xl" />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image src="/icons/computer-dynamic/premium.png" alt="Web Development" width={40} height={40} className="object-contain" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white font-space-grotesk">Web Development</CardTitle>
                        <p className="text-[#06B6D4] font-semibold text-lg">$30K - $250K</p>
                      </div>
                    </div>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      Modern web applications with React, Next.js, and TypeScript.
                      Fast, responsive, and SEO-optimized for growing businesses.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <div className="space-y-3">
                      {[
                        "Next.js with server-side rendering (proper SEO)",
                        "React + TypeScript for maintainable code",
                        "Responsive design (mobile-first approach)",
                        "Database integration (Supabase, PostgreSQL)",
                        "Authentication & user management",
                        "E-commerce & Shopify customization",
                        "API development & third-party integrations"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle weight="duotone" className="h-6 w-6 text-[#06B6D4] mr-3 shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-[#06B6D4] hover:bg-[#0891b2] text-white rounded-full group/btn shadow-lg shadow-[#06B6D4]/20">
                        Get Web Development Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          {/* Featured Service - AI Infrastructure */}
          <FadeIn delay={0.2}>
            <div id="ai" className="mb-20">
              <div className="relative bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-3xl border-2 border-[#0EA5E9]/50 p-8 lg:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[#0EA5E9]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block px-4 py-2 bg-linear-to-r from-[#0EA5E9] to-[#06B6D4] rounded-full text-white text-sm font-bold shadow-lg">
                    ⭐ SPECIALTY SERVICE
                  </span>
                </div>

                <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center">
                        <Image src="/icons/rocket-dynamic/premium.png" alt="AI Infrastructure" width={40} height={40} className="object-contain" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white font-space-grotesk">Private AI Infrastructure</h2>
                        <p className="text-[#0EA5E9] font-bold text-xl">$9,500 - $35,000</p>
                      </div>
                    </div>

                    <p className="text-lg text-white/80 leading-relaxed font-light">
                      Own your AI infrastructure. Complete private deployment with automated scripts for rapid setup.
                      Ollama, OpenWebUI, VPN, and security—deployed in under 30 minutes.
                    </p>

                    <div className="bg-[#0d0d12]/50 rounded-2xl p-6 border border-[#0EA5E9]/20">
                      <h3 className="text-white font-semibold mb-3 flex items-center gap-2 font-space-grotesk">
                        <Rocket weight="duotone" className="w-5 h-5 text-[#0EA5E9]" />
                        ROI: Save $50K-$120K/year vs cloud APIs
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Typical payback period: 8-12 weeks. After that, it's pure savings compared to
                        ongoing cloud AI API costs.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Code, text: "Automated deployment scripts" },
                        { icon: ShieldCheck, text: "HIPAA/SOC 2 ready" },
                        { icon: Database, text: "Model fine-tuning support" },
                        { icon: Rocket, text: "30-minute setup time" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 bg-[#0d0d12]/50 rounded-xl p-3 border border-white/5">
                          <item.icon weight="duotone" className="w-6 h-6 text-[#0EA5E9] shrink-0" />
                          <span className="text-white/80 text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button size="lg" className="w-full bg-linear-to-r from-[#0EA5E9] to-[#06B6D4] hover:from-[#0284c7] hover:to-[#0891b2] text-white rounded-full group shadow-lg shadow-[#0EA5E9]/30">
                        Get AI Infrastructure Quote
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-4/3 bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-2xl border border-white/10 overflow-hidden">
                      <Image
                        src="/images/tech-monitors-development.jpg"
                        alt="AI Infrastructure Setup"
                        fill
                        className="object-cover opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Strategic Consulting */}
          <FadeIn delay={0.3}>
            <AnimatedCard>
              <Card id="consulting" className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#0EA5E9]/10 to-transparent rounded-full blur-3xl" />
                <div className="relative grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image src="/icons/tools-dynamic/premium.png" alt="Strategic Consulting" width={40} height={40} className="object-contain" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white font-space-grotesk">Strategic Consulting</h2>
                        <p className="text-[#0EA5E9] font-semibold text-lg">$175 - $350/hour</p>
                      </div>
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed font-light">
                      Technology strategy and operations consulting from someone who managed complex
                      technical systems at Waymo and autonomous vehicle startups.
                    </p>

                    <div className="space-y-3">
                      {[
                        "Technology roadmap & architecture design",
                        "AI integration strategy & implementation planning",
                        "Build vs buy decision frameworks",
                        "Operations optimization & process improvement",
                        "System design & scalability planning",
                        "Technical program management"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle weight="duotone" className="h-6 w-6 text-[#0EA5E9] mr-3 shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group/btn shadow-lg shadow-[#0EA5E9]/20">
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-4/3 bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-2xl border border-white/10 overflow-hidden">
                      <Image
                        src="/images/consulting.jpg"
                        alt="Strategic Consulting Team Discussion"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Our Process
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                From discovery to deployment, we follow a proven process
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                number: "1",
                title: "Discovery Call",
                description: "We discuss your project goals, technical requirements, and timeline. Free 30-minute consultation to explore fit."
              },
              {
                number: "2",
                title: "Detailed Proposal",
                description: "Receive a comprehensive proposal with scope, timeline, milestones, and pricing tailored to your needs."
              },
              {
                number: "3",
                title: "Build & Deploy",
                description: "Agile development with regular check-ins. We deliver working software incrementally and deploy to production."
              }
            ].map((step, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 text-center h-full">
                    <CardHeader>
                      <div className="text-6xl font-bold text-[#0EA5E9] mb-4 font-space-grotesk">{step.number}</div>
                      <CardTitle className="text-white text-xl mb-2 font-space-grotesk">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[150px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Ready to Start Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Schedule a free discovery call to discuss your project and get a custom quote.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30">
                  Schedule Discovery Call
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
