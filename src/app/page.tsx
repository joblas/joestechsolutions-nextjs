import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { DeviceMobile, Browser, Brain, ChartLineUp, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#231b3d] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff] rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a683ff] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1c1c26] border border-white/10 rounded-full text-[#0099ff] text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Building the future, one solution at a time</span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Premium Tech Solutions</span>
                <span className="block text-[#0099ff]">
                  For Ambitious SMBs
                </span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                From Olympic coaching apps to AI infrastructure—we build mobile apps, web platforms,
                and custom solutions that help growing businesses compete.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/portfolio">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-[#0099ff] hover:bg-[#0088ee] text-white text-lg px-10 py-7 rounded-full group shadow-lg shadow-[#0099ff]/20 transition-all">
                      View Our Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all">
                    Schedule Discovery Call
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
                What We Build
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Full-stack development, AI infrastructure, and strategic consulting
                for growing businesses
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {/* Mobile App Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0099ff]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0099ff]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0099ff]/20 transition-all duration-300">
                      <DeviceMobile weight="duotone" className="h-8 w-8 text-[#0099ff]" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Mobile Apps</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      React Native development for iOS & Android
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Cross-platform mobile applications with native performance and seamless user experiences
                    </p>
                    <Link href="/services#mobile" className="text-[#0099ff] text-sm font-medium hover:text-[#0088ee] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Web Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#a683ff]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#a683ff]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#a683ff]/20 transition-all duration-300">
                      <Browser weight="duotone" className="h-8 w-8 text-[#a683ff]" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Web Development</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Modern web apps with React, Next.js, TypeScript
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Fast, responsive, and SEO-optimized web applications that drive results
                    </p>
                    <Link href="/services#web" className="text-[#a683ff] text-sm font-medium hover:text-[#9573ee] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* AI Infrastructure */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#96a3ff]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#96a3ff]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#96a3ff]/20 transition-all duration-300">
                      <Brain weight="duotone" className="h-8 w-8 text-[#96a3ff]" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">AI Infrastructure</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Private AI deployment & optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Save $50K-$120K/year with private AI infrastructure tailored to your needs
                    </p>
                    <Link href="/services#ai" className="text-[#96a3ff] text-sm font-medium hover:text-[#8593ee] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Consulting */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0099ff]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0099ff]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0099ff]/20 transition-all duration-300">
                      <ChartLineUp weight="duotone" className="h-8 w-8 text-[#0099ff]" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Strategic Consulting</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Technology strategy & operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      From Waymo operations to your technology roadmap—expert guidance
                    </p>
                    <Link href="/services#consulting" className="text-[#0099ff] text-sm font-medium hover:text-[#0088ee] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Case Study - The Skate Workshop */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-block px-4 py-1 bg-[#0099ff]/10 border border-[#0099ff]/20 rounded-full text-[#0099ff] text-sm font-semibold mb-6">
                Featured Project
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Building Real Solutions
              </h2>
              <p className="text-xl text-white/70 font-light">
                For real businesses with real impact
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-[#a683ff]/10 border border-[#a683ff]/20 rounded-full text-[#a683ff] text-sm font-semibold">
                  Mobile App • Subscription Platform
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-space-grotesk">
                  The Skate Workshop
                </h3>

                <p className="text-lg text-white/70 leading-relaxed font-light">
                  Olympic-level skateboarding coaching platform with video feedback,
                  400+ trick database, and multiplayer game modes. Built with Next.js,
                  React Native for iOS/Android, with subscription billing and real-time features.
                </p>

                <div className="space-y-4">
                  {[
                    "Cross-platform mobile app (iOS & Android)",
                    "Video feedback and progress tracking system",
                    "400+ trick database with detailed tutorials",
                    "Subscription billing with Stripe integration",
                    "Multiplayer SKATE game competition mode"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <CheckCircle weight="duotone" className="h-6 w-6 text-[#0099ff] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <span className="text-white/80 text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/portfolio/skate-workshop">
                    <Button className="bg-[#0099ff] hover:bg-[#0088ee] text-white rounded-full group shadow-lg shadow-[#0099ff]/20">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="https://www.theskateworkshop.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/5 hover:border-white/30">
                      Visit Live Site
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-r from-[#0099ff] to-[#a683ff] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow" />
                <div className="relative aspect-4/3 bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-3xl border border-white/10 flex items-center justify-center hover:border-[#0099ff]/30 transition-all duration-500">
                  <div className="text-center p-8">
                    <DeviceMobile weight="duotone" className="h-24 w-24 text-[#0099ff] mx-auto mb-4 opacity-40" />
                    <p className="text-white/50 text-sm font-light">
                      App screenshots coming soon
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Enterprise-Grade Technology
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Leveraging cutting-edge tools from the world's leading technology companies
                to deliver robust, scalable solutions
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.08}>
            {[
              { name: "Anthropic Claude", logo: "/logos/claude-color.png" },
              { name: "OpenAI", logo: "/logos/openai.png" },
              { name: "Replicate", logo: "/logos/replicate.png" },
              { name: "Flux AI", logo: "/logos/flux.png" },
              { name: "Ollama", logo: "/logos/ollama.png" },
              { name: "Open WebUI", logo: "/logos/openwebui.png" },
              { name: "n8n", logo: "/logos/n8n-color.png" },
              { name: "Cloudflare", logo: "/logos/cloudflare-color.png" }
            ].map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="flex items-center justify-center p-8 bg-[#1c1c26] border border-white/10 rounded-2xl hover:border-white/20 hover:bg-[#1c1c26]/80 hover:scale-105 transition-all duration-300 group cursor-pointer backdrop-blur-sm h-32">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#231b3d] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0099ff] rounded-full blur-[150px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Let's discuss your project. Schedule a free discovery call to explore how
              we can help bring your vision to life.
            </p>
            <Link href="/contact">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0099ff] hover:bg-[#0088ee] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0099ff]/30 transition-all">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
