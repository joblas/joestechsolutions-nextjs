import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "About | Joe's Tech Solutions",
  description: "Learn about Joe's Tech Solutions - from Waymo operations to building custom technology solutions for businesses.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-space-grotesk">
                  The Developer Who Speaks Operations
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light">
                  Most developers don't understand how businesses actually work. I do. From managing
                  Waymo's technical operations to building custom software today, I know how to bridge
                  the gap between great technology and practical business needs.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/contact">
                  <MagneticButton strength={0.2}>
                    <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group shadow-lg shadow-[#0EA5E9]/20">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0EA5E9] rounded-3xl blur-2xl opacity-20" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
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
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Background
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Technical operations experience applied to practical solutions
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Image src="/icons/tools-dynamic/premium.png" alt="Waymo Operations" width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">Waymo Operations</h3>
                    <p className="text-white/70 leading-relaxed">
                      Managed critical infrastructure at Waymo—learned how to handle complexity, ensure reliability, and deliver results under pressure
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#06B6D4]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Image src="/icons/computer-dynamic/premium.png" alt="Full-Stack Developer" width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">Full-Stack Developer</h3>
                    <p className="text-white/70 leading-relaxed">
                      Building mobile and web applications with modern tech stacks
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Image src="/icons/rocket-dynamic/premium.png" alt="E-commerce & Custom Solutions" width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 font-space-grotesk">E-commerce & Custom Solutions</h3>
                    <p className="text-white/70 leading-relaxed">
                      Online stores, payment integration, and custom software tailored to your business needs
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 font-space-grotesk">
              Why Work With Joe's Tech Solutions?
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {[
              {
                title: "Hands-On Experience",
                description: "Not just a consultant—an actual builder who's managed complex technical operations and writes code daily."
              },
              {
                title: "Flexible Approach",
                description: "Tailored solutions for businesses of all sizes, from startups to established companies."
              },
              {
                title: "End-to-End Delivery",
                description: "From concept to deployment, we handle the full stack so you don't need to coordinate multiple vendors."
              },
              {
                title: "Practical Solutions",
                description: "Technology choices based on what actually works, not what's trendy. Reliable tech that solves real problems."
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <h3 className="text-white font-bold text-2xl mb-4 font-space-grotesk">{item.title}</h3>
                      <p className="text-white/70 text-lg leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Credentials
              </h2>
              <p className="text-xl text-white/70 font-light">
                From autonomous vehicles to custom software
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-4/3 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
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
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Leveraging cutting-edge tools from leading technology companies
                to deliver reliable, scalable solutions
              </p>
            </div>
          </FadeIn>

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
                <div className="flex items-center justify-center p-8 bg-[#1c1c26] border border-white/10 rounded-2xl hover:border-white/20 hover:bg-[#1c1c26]/80 hover:scale-105 transition-all duration-300 group cursor-pointer h-32">
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
              Let's discuss how we can help bring your vision to life
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
