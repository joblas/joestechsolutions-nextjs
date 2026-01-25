import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { CheckCircle, Robot } from "@phosphor-icons/react/dist/ssr";
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
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1c1c26] border border-white/10 rounded-full text-[#0EA5E9] text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Flexible solutions for every business type</span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Technology Built for Your Business</span>
                <span className="block text-[#0EA5E9]">
                  (Whatever That Looks Like)
                </span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Websites, mobile apps, e-commerce platforms, and custom solutions. We work with startups,
                established companies, and businesses of all sizes.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/portfolio">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-10 py-7 rounded-full group shadow-lg shadow-[#0EA5E9]/20 transition-all">
                      View Our Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </MagneticButton>
                </Link>
                <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all">
                    Schedule Discovery Call
                  </Button>
                </a>
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
                Custom software solutions for businesses of all sizes
              </p>
            </FadeIn>
          </div>

          {/* Featured: Private AI Setup */}
          <FadeIn delay={0.1}>
            <Link href="/private-ai-setup" className="block mb-8">
              <AnimatedCard>
                <Card className="relative bg-linear-to-br from-[#0EA5E9]/10 via-[#1c1c26] to-[#06B6D4]/10 border-[#0EA5E9]/30 hover:border-[#0EA5E9]/60 transition-all duration-500 group backdrop-blur-sm overflow-hidden">
                  {/* Most Popular badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0EA5E9]/20 rounded-full text-[#0EA5E9] text-sm font-medium z-10">
                    Most Popular
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="space-y-4">
                      <div className="w-14 h-14 bg-[#0EA5E9]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0EA5E9]/30 transition-all duration-300">
                        <Robot weight="duotone" className="h-8 w-8 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-space-grotesk mb-2">Private AI Setup</CardTitle>
                        <CardDescription className="text-white/70 text-base">
                          Your own AI assistant. No data leaks. No subscriptions.
                        </CardDescription>
                      </div>
                      <p className="text-white/60 leading-relaxed">
                        Run ChatGPT-level AI on your own computer or private server. Keep sensitive data in-house while getting the same powerful capabilities. Starting at $150.
                      </p>
                      <div className="flex items-center gap-2 text-[#0EA5E9] font-medium group/link">
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#0EA5E9] font-semibold">100%</span>
                          <span className="text-white/60 block">Private</span>
                        </div>
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#06B6D4] font-semibold">$0/mo</span>
                          <span className="text-white/60 block">After Setup</span>
                        </div>
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#0EA5E9] font-semibold">75 min</span>
                          <span className="text-white/60 block">Live Session</span>
                        </div>
                        <div className="p-3 bg-[#0d0d12]/60 rounded-xl border border-white/5">
                          <span className="text-[#06B6D4] font-semibold">GPT-4</span>
                          <span className="text-white/60 block">Level AI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {/* Mobile App Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0EA5E9]/20 transition-all duration-300">
                      <Image src="/icons/mobile-dynamic/premium.png" alt="Mobile Development" width={32} height={32} className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Mobile Apps</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      React Native development for iOS & Android
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      iOS and Android apps that your customers will love. Built to engage users and drive your business forward.
                    </p>
                    <Link href="/services#mobile" className="text-[#0EA5E9] text-sm font-medium hover:text-[#0284c7] inline-flex items-center group/link transition-colors">
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
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#06B6D4]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#06B6D4]/20 transition-all duration-300">
                      <Image src="/icons/computer-dynamic/premium.png" alt="Web Development" width={32} height={32} className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Web Development</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Modern web apps with React, Next.js, TypeScript
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Beautiful, fast websites that convert visitors into customers. Built with SEO and user experience in mind.
                    </p>
                    <Link href="/services#web" className="text-[#06B6D4] text-sm font-medium hover:text-[#0891b2] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Custom Solutions */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0EA5E9]/20 transition-all duration-300">
                      <Image src="/icons/tools-dynamic/premium.png" alt="Custom Solutions" width={32} height={32} className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">Custom Solutions</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      API development & integrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Have a unique need? We build custom solutions, APIs, and integrations tailored to your business.
                    </p>
                    <Link href="/services#custom" className="text-[#0EA5E9] text-sm font-medium hover:text-[#0284c7] inline-flex items-center group/link transition-colors">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* E-commerce */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0EA5E9]/20 transition-all duration-300">
                      <Image src="/icons/rocket-dynamic/premium.png" alt="E-commerce Solutions" width={32} height={32} className="object-contain" />
                    </div>
                    <CardTitle className="text-white text-xl font-space-grotesk">E-commerce</CardTitle>
                    <CardDescription className="text-white/60 text-base">
                      Online stores & payment integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Turn browsers into buyers. Custom stores or Shopify setups with secure payments and analytics.
                    </p>
                    <Link href="/services#ecommerce" className="text-[#0EA5E9] text-sm font-medium hover:text-[#0284c7] inline-flex items-center group/link transition-colors">
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
              <div className="inline-block px-4 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full text-[#0EA5E9] text-sm font-semibold mb-6">
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
                <div className="inline-block px-4 py-1.5 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-full text-[#06B6D4] text-sm font-semibold">
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
                      <CheckCircle weight="duotone" className="h-6 w-6 text-[#0EA5E9] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <span className="text-white/80 text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/portfolio/skate-workshop">
                    <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group shadow-lg shadow-[#0EA5E9]/20">
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
                <div className="absolute inset-0 bg-linear-to-r from-[#0EA5E9] to-[#06B6D4] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow" />
                <div className="relative aspect-square bg-linear-to-br from-[#1c1c26] to-[#0d0d12] rounded-3xl border border-white/10 overflow-hidden hover:border-[#0EA5E9]/30 transition-all duration-500">
                  <Image
                    src="/images/skate-workshop-hero.png"
                    alt="The Skate Workshop App"
                    fill
                    className="object-cover p-8"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Leveraging cutting-edge tools from leading technology companies
                to deliver reliable, scalable solutions
              </p>
            </FadeIn>
          </div>

          {/* Top Row - Scrolling Left */}
          <div className="relative mb-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {[
                { name: "Anthropic Claude", logo: "/logos/claude-color.png", url: "https://www.anthropic.com" },
                { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
                { name: "Anthropic Claude", logo: "/logos/claude-color.png", url: "https://www.anthropic.com" },
                { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-48 h-32 bg-[#1c1c26] border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:border-white/20 hover:bg-[#1c1c26]/80 transition-colors backdrop-blur-sm"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-right">
              {[
                { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
                { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-48 h-32 bg-[#1c1c26] border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:border-white/20 hover:bg-[#1c1c26]/80 transition-colors backdrop-blur-sm"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[150px] animate-glow" />
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
            <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-12 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30 transition-all">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </MagneticButton>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
