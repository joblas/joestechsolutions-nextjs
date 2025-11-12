import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Globe, Zap, Briefcase, CheckCircle, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-medium shadow-sm">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Building the future, one app at a time</span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-white mb-2">Boutique Development</span>
                <span className="block text-blue-400 font-bold">
                  For Ambitious SMBs
                </span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.3}>
              <p className="mt-6 text-xl sm:text-2xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
                From Olympic coaching apps to AI infrastructure—we build mobile apps, web platforms,
                and custom solutions that help growing businesses compete.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 group">
                      View Our Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800 hover:border-slate-600">
                    Schedule Discovery Call
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Case Study - The Skate Workshop */}
      <section className="relative py-20 sm:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Project
            </h2>
            <p className="text-xl text-slate-200">
              Building real solutions for real businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-semibold">
                Mobile App • Subscription Platform
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                The Skate Workshop
              </h3>

              <p className="text-lg text-slate-100 leading-relaxed">
                Olympic-level skateboarding coaching platform with video feedback,
                400+ trick database, and multiplayer game modes. Built with Next.js,
                React Native for iOS/Android, with subscription billing and real-time features.
              </p>

              <StaggerContainer staggerDelay={0.1}>
                {[
                  "Cross-platform mobile app (iOS & Android)",
                  "Video feedback and progress tracking system",
                  "400+ trick database with detailed tutorials",
                  "Subscription billing with Stripe integration",
                  "Multiplayer SKATE game competition mode"
                ].map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <span className="text-slate-100">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/portfolio/skate-workshop">
                  <Button className="bg-blue-600 hover:bg-blue-700 group">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="https://www.theskateworkshop.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:border-slate-600">
                    Visit Live Site
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center hover:border-blue-600/50 transition-colors">
                <div className="text-center p-8">
                  <Smartphone className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-slate-200 text-sm">
                    App screenshots coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Full-stack development, AI infrastructure, and strategic consulting
              for growing businesses
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {/* Mobile App Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 hover:bg-slate-800 transition-all duration-300 group h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Mobile Apps</CardTitle>
                <CardDescription className="text-slate-200">
                  React Native development for iOS & Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Cross-platform mobile applications with native performance
                </p>
                <Link href="/services#mobile" className="text-blue-400 text-sm font-medium hover:text-blue-300 inline-flex items-center group min-h-[44px] py-2">
                  Learn more about Mobile Apps
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Web Development */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 hover:bg-slate-800 transition-all duration-300 group h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Web Development</CardTitle>
                <CardDescription className="text-slate-200">
                  Modern web apps with React, Next.js, TypeScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Fast, responsive, and SEO-optimized web applications
                </p>
                <Link href="/services#web" className="text-purple-400 text-sm font-medium hover:text-purple-300 inline-flex items-center group min-h-[44px] py-2">
                  Learn more about Web Development
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* AI Infrastructure */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 hover:bg-slate-800 transition-all duration-300 group h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">AI Infrastructure</CardTitle>
                <CardDescription className="text-slate-200">
                  Private AI deployment & optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Save $50K-$120K/year with private AI infrastructure
                </p>
                <Link href="/services#ai" className="text-orange-400 text-sm font-medium hover:text-orange-300 inline-flex items-center group min-h-[44px] py-2">
                  Learn more about AI Infrastructure
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Consulting */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-green-600/50 hover:bg-slate-800 transition-all duration-300 group h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Strategic Consulting</CardTitle>
                <CardDescription className="text-slate-200">
                  Technology strategy & operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  From Waymo operations to your technology roadmap
                </p>
                <Link href="/services#consulting" className="text-green-400 text-sm font-medium hover:text-green-300 inline-flex items-center group min-h-[44px] py-2">
                  Learn more about Strategic Consulting
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 hover:border-slate-600 group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-20 sm:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built with Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leveraging cutting-edge tools and platforms from the world's leading technology companies
              to deliver robust, scalable solutions
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
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
                <div className="flex items-center justify-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 hover:bg-slate-800 hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-slate-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project. Schedule a free discovery call to explore how
            we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <MagneticButton strength={0.3}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 group">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </MagneticButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
