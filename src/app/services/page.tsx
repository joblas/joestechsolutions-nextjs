import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Smartphone, Globe, Zap, Briefcase, Code, Database, Shield, Rocket } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/20 via-slate-900/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white mb-2">Full-Stack Technology Partner</span>
                <span className="block text-blue-400 font-bold">
                  For Growing Businesses
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
                From managing Waymo autonomous vehicle operations to building practical technology solutions—
                hands-on builder who understands systems, operations, and execution.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8 mb-20" staggerDelay={0.2}>
            {/* Mobile App Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card id="mobile" className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl" />
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Mobile App Development</CardTitle>
                    <p className="text-blue-400 font-semibold">$25K - $150K</p>
                  </div>
                </div>
                <CardDescription className="text-slate-100 text-base">
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
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group/btn">
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
                <Card id="web" className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 transition-all duration-300 overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl" />
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Web Development</CardTitle>
                    <p className="text-purple-400 font-semibold">$30K - $250K</p>
                  </div>
                </div>
                <CardDescription className="text-slate-100 text-base">
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
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 group/btn">
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
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border-2 border-orange-600/50 p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full text-white text-sm font-bold shadow-lg">
                  ⭐ SPECIALTY SERVICE
                </span>
              </div>

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Private AI Infrastructure</h2>
                      <p className="text-orange-400 font-bold text-xl">$9,500 - $35,000</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-100 leading-relaxed">
                    Own your AI infrastructure. Complete private deployment with automated scripts for rapid setup.
                    Ollama, OpenWebUI, VPN, and security—deployed in under 30 minutes.
                  </p>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-orange-600/20">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-orange-400" />
                      ROI: Save $50K-$120K/year vs cloud APIs
                    </h3>
                    <p className="text-slate-200 text-sm">
                      Typical payback period: 8-12 weeks. After that, it's pure savings compared to
                      ongoing cloud AI API costs.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Code, text: "Automated deployment scripts" },
                      { icon: Shield, text: "HIPAA/SOC 2 ready" },
                      { icon: Database, text: "Model fine-tuning support" },
                      { icon: Zap, text: "30-minute setup time" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
                        <item.icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 group">
                      Get AI Infrastructure Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="relative">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 overflow-hidden">
                    <Image
                      src="/images/tech-monitors-development.jpg"
                      alt="AI Infrastructure Setup"
                      fill
                      className="object-cover opacity-80"
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
              <Card id="consulting" className="bg-slate-800/50 border-slate-700 hover:border-green-600/50 transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-600/10 to-transparent rounded-full blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Strategic Consulting</h2>
                    <p className="text-green-400 font-semibold text-lg">$175 - $350/hour</p>
                  </div>
                </div>

                <p className="text-slate-100 text-lg leading-relaxed">
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
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-green-600 hover:bg-green-700 group/btn">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 overflow-hidden">
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
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto">
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
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-colors text-center h-full">
                    <CardHeader>
                      <div className="text-6xl font-bold text-blue-400 mb-4">{step.number}</div>
                      <CardTitle className="text-white text-xl mb-2">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-200">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Schedule a free discovery call to discuss your project and get a custom quote.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 group">
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
