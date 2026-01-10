import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CheckCircle, Code, Database, ShieldCheck, Rocket, Robot } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "Services | Joe's Tech Solutions",
  description: "Mobile app development, web platforms, e-commerce solutions, and custom software for businesses of all sizes.",
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
                  For Your Business
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Websites, mobile apps, e-commerce platforms, and custom software—
                practical technology solutions tailored to your needs.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Private AI Setup - Featured */}
          <FadeIn delay={0.1}>
            <div id="ai-setup" className="mb-16">
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-[#0EA5E9]/30 hover:border-[#0EA5E9]/50 transition-all duration-500 overflow-hidden group relative">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0EA5E9]/20 rounded-full text-[#0EA5E9] text-sm font-medium z-10">
                    Most Popular
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#0EA5E9]/10 to-transparent rounded-full blur-3xl" />
                  <div className="relative grid lg:grid-cols-2 gap-8 p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Robot weight="duotone" className="h-10 w-10 text-[#0EA5E9]" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white font-space-grotesk">Private AI Setup</h2>
                          <div className="flex flex-col">
                            <p className="text-[#0EA5E9] font-semibold text-lg">$150 one-time (local)</p>
                            <p className="text-[#06B6D4] font-semibold text-sm">$500 + $50/mo (business VPS)</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed font-light">
                        Your own private AI workspace — ChatGPT-like interface running on your computer or dedicated server.
                        No subscriptions to OpenAI, no data leaving your environment. You own everything.
                      </p>

                      <div className="space-y-3">
                        {[
                          "ChatGPT-style interface, runs 100% privately",
                          "75-min live session: overview, install, hands-on demo",
                          "Powerful AI model configured for your use case",
                          "7 days email support after setup",
                          "VPS option: Custom domain + SSL + monthly updates"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle weight="duotone" className="h-6 w-6 text-[#0EA5E9] mr-3 shrink-0 mt-0.5" />
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/private-ai-setup">
                        <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group/btn shadow-lg shadow-[#0EA5E9]/20">
                          Get Private AI Setup
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 bg-[#0EA5E9]/20 rounded-3xl blur-2xl" />
                        <div className="relative bg-[#0d0d12] rounded-2xl border border-white/10 p-8 text-center">
                          <Robot weight="duotone" className="h-24 w-24 text-[#0EA5E9] mx-auto mb-6" />
                          <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Private. Powerful. Yours.</h3>
                          <p className="text-white/60 text-sm">
                            Run AI locally or on your own server. No cloud APIs, no data harvesting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </div>
          </FadeIn>

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
                      iOS and Android apps that your customers will love. Whether you need subscription billing,
                      real-time features, or offline functionality, we build mobile-first solutions that engage users.
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
                    <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group/btn shadow-lg shadow-[#0EA5E9]/20">
                        Get Mobile App Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
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
                      Beautiful, fast websites that convert visitors into customers. From startup landing pages
                      to complex web applications, we build with SEO, mobile responsiveness, and user experience in mind.
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
                    <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#06B6D4] hover:bg-[#0891b2] text-white rounded-full group/btn shadow-lg shadow-[#06B6D4]/20">
                        Get Web Development Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          {/* E-commerce Solutions */}
          <FadeIn delay={0.2}>
            <div id="ecommerce" className="mb-20">
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#0EA5E9]/10 to-transparent rounded-full blur-3xl" />
                  <div className="relative grid lg:grid-cols-2 gap-8 p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Image src="/icons/rocket-dynamic/premium.png" alt="E-commerce" width={40} height={40} className="object-contain" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white font-space-grotesk">E-commerce Solutions</h2>
                          <p className="text-[#0EA5E9] font-semibold text-lg">$5K - $50K</p>
                        </div>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed font-light">
                        Turn browsers into buyers. Custom-built stores or Shopify setups with everything you need:
                        secure payments, inventory management, mobile optimization, and analytics that tell you what's working.
                      </p>

                      <div className="space-y-3">
                        {[
                          "Custom e-commerce platforms (Next.js, React)",
                          "Shopify theme customization & app integration",
                          "Stripe & PayPal payment processing",
                          "Inventory management & order tracking",
                          "Mobile-responsive design",
                          "SEO optimization for product pages"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle weight="duotone" className="h-6 w-6 text-[#0EA5E9] mr-3 shrink-0 mt-0.5" />
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group/btn shadow-lg shadow-[#0EA5E9]/20">
                          Get E-commerce Quote
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>

                    <div className="relative">
                      <div className="relative aspect-4/3 bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-2xl border border-white/10 overflow-hidden">
                        <Image
                          src="/images/tech-monitors-development.jpg"
                          alt="E-commerce Platform"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </div>
          </FadeIn>

          {/* Custom Solutions */}
          <FadeIn delay={0.3}>
            <AnimatedCard>
              <Card id="custom" className="bg-[#1c1c26] border-white/10 hover:border-[#06B6D4]/50 transition-all duration-500 overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#06B6D4]/10 to-transparent rounded-full blur-3xl" />
                <div className="relative grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image src="/icons/tools-dynamic/premium.png" alt="Custom Solutions" width={40} height={40} className="object-contain" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white font-space-grotesk">Custom Solutions</h2>
                        <p className="text-[#06B6D4] font-semibold text-lg">Contact for Quote</p>
                      </div>
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed font-light">
                      Have a unique business need? We build custom software solutions, APIs, and integrations
                      that solve your specific challenges and connect your systems.
                    </p>

                    <div className="space-y-3">
                      {[
                        "Custom application development",
                        "API development & third-party integrations",
                        "Database design & optimization",
                        "Legacy system modernization",
                        "Automation & workflow tools",
                        "Technical consulting & architecture",
                        "System migrations & data imports"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle weight="duotone" className="h-6 w-6 text-[#06B6D4] mr-3 shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#06B6D4] hover:bg-[#0891b2] text-white rounded-full group/btn shadow-lg shadow-[#06B6D4]/20">
                        Discuss Your Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-4/3 bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-2xl border border-white/10 overflow-hidden">
                      <Image
                        src="/images/consulting.jpg"
                        alt="Custom Software Solutions"
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
            <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
