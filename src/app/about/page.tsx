import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Code, Zap } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "About | Joe's Tech Solutions",
  description: "Learn about Joe's Tech Solutions - from Waymo operations to building custom solutions for ambitious SMBs.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Hi, I'm Joe
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl sm:text-2xl text-slate-100 leading-relaxed">
                  From managing Waymo autonomous vehicle operations to building practical
                  technology solutions—a hands-on builder who understands systems, operations,
                  and execution.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/contact">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} direction="left">
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/joe-profile.jpg"
                    alt="Joe Blasiola, Founder of Joe's Tech Solutions, former Waymo operations manager"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Background
              </h2>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                Technical operations at scale, now applied to custom development
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-colors h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Waymo Operations</h3>
                    <p className="text-slate-200">
                      Managed complex technical systems for autonomous vehicle operations
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 transition-colors h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Code className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Full-Stack Developer</h3>
                    <p className="text-slate-200">
                      Building mobile and web applications with modern tech stacks
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 transition-colors h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-7 h-7 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">AI Infrastructure</h3>
                    <p className="text-slate-200">
                      Deploying private AI solutions that save businesses $50K-120K/year
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Why Work With Joe's Tech Solutions?
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {[
              {
                title: "Hands-On Experience",
                description: "Not just a consultant—an actual builder who's managed complex technical operations and writes code daily."
              },
              {
                title: "SMB-Focused",
                description: "Pricing and approach designed for growing businesses, not enterprises with unlimited budgets."
              },
              {
                title: "End-to-End Delivery",
                description: "From concept to deployment, we handle the full stack so you don't need to coordinate multiple vendors."
              },
              {
                title: "Practical Solutions",
                description: "Technology choices based on what actually works, not what's trendy. Boring tech that solves real problems."
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                      <p className="text-slate-100 text-lg">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Credentials
              </h2>
              <p className="text-xl text-slate-200">
                From autonomous vehicles to custom software
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-700">
              <Image
                src="/images/credentials-google-waymo.jpg"
                alt="Waymo Google Credentials"
                fill
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-20 sm:py-32 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Built with Enterprise-Grade Technology
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Leveraging cutting-edge tools and platforms from the world's leading technology companies
                to deliver robust, scalable solutions
              </p>
            </div>
          </FadeIn>

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
              Let's discuss how we can help bring your vision to life
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
