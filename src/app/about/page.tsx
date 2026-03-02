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
  title: "About Joe Blas | Joe's Tech Solutions",
  description: "Learn about Joe's Tech Solutions - boutique development studio building custom technology solutions for ambitious SMBs.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About | Joe's Tech Solutions",
    description: "Learn about Joe's Tech Solutions - boutique development studio building custom technology solutions for ambitious SMBs.",
    url: 'https://joestechsolutions.com/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-space-grotesk">
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
                <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group shadow-lg shadow-[#0EA5E9]/20">
                    Let's Work Together
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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

      {/* Career Timeline */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Joe's Journey
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                From autonomous vehicles to custom software solutions
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical timeline line - hidden on mobile */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0EA5E9] via-[#06B6D4] to-[#0EA5E9] hidden lg:block" />

            <StaggerContainer className="space-y-16 lg:space-y-24" staggerDelay={0.15}>
              {/* 2025 - Present: Joe's Tech Solutions */}
              <StaggerItem>
                <FadeIn>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:text-right lg:pr-12">
                      <div className="bg-[#1c1c26] border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-500">
                        <div className="inline-block px-4 py-1.5 bg-[#0EA5E9]/10 rounded-full mb-4">
                          <span className="text-[#0EA5E9] font-bold text-sm font-space-grotesk">2025 – PRESENT</span>
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-3 font-space-grotesk">Joe's Tech Solutions LLC</h3>
                        <p className="text-white/70 leading-relaxed mb-2 font-medium">Founder</p>
                        <p className="text-white/60 leading-relaxed">
                          Custom software, mobile apps, AI infrastructure
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="w-6 h-6 bg-[#0EA5E9] rounded-full border-4 border-[#0d0d12] shadow-lg shadow-[#0EA5E9]/50" />
                    </div>
                  </div>
                </FadeIn>
              </StaggerItem>

              {/* 2023 - Present: OvationCXM */}
              <StaggerItem>
                <FadeIn>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="hidden lg:flex justify-center">
                      <div className="w-6 h-6 bg-[#06B6D4] rounded-full border-4 border-[#0d0d12] shadow-lg shadow-[#06B6D4]/50" />
                    </div>
                    <div className="lg:pl-12">
                      <div className="bg-[#1c1c26] border border-white/10 rounded-2xl p-8 hover:border-[#06B6D4]/50 transition-all duration-500">
                        <div className="inline-block px-4 py-1.5 bg-[#06B6D4]/10 rounded-full mb-4">
                          <span className="text-[#06B6D4] font-bold text-sm font-space-grotesk">2023 – PRESENT</span>
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-3 font-space-grotesk">OvationCXM</h3>
                        <p className="text-white/70 leading-relaxed mb-2 font-medium">POS Field Service</p>
                        <p className="text-white/60 leading-relaxed">
                          POS field service across San Diego
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </StaggerItem>

              {/* 2016 - 2019: Uber ATG → Pronto.ai */}
              <StaggerItem>
                <FadeIn>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:text-right lg:pr-12">
                      <div className="bg-[#1c1c26] border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-500">
                        <div className="inline-block px-4 py-1.5 bg-[#0EA5E9]/10 rounded-full mb-4">
                          <span className="text-[#0EA5E9] font-bold text-sm font-space-grotesk">2016 – 2019</span>
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-3 font-space-grotesk">Uber ATG → Pronto.ai</h3>
                        <p className="text-white/70 leading-relaxed mb-2 font-medium">Autonomous Vehicle Operations</p>
                        <p className="text-white/60 leading-relaxed">
                          Autonomous truck builds, SF-to-NYC self-driving road trip
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="w-6 h-6 bg-[#0EA5E9] rounded-full border-4 border-[#0d0d12] shadow-lg shadow-[#0EA5E9]/50" />
                    </div>
                  </div>
                </FadeIn>
              </StaggerItem>

              {/* 2009 - 2016: Google/Waymo */}
              <StaggerItem>
                <FadeIn>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="hidden lg:flex justify-center">
                      <div className="w-6 h-6 bg-[#06B6D4] rounded-full border-4 border-[#0d0d12] shadow-lg shadow-[#06B6D4]/50" />
                    </div>
                    <div className="lg:pl-12">
                      <div className="bg-[#1c1c26] border border-white/10 rounded-2xl p-8 hover:border-[#06B6D4]/50 transition-all duration-500">
                        <div className="inline-block px-4 py-1.5 bg-[#06B6D4]/10 rounded-full mb-4">
                          <span className="text-[#06B6D4] font-bold text-sm font-space-grotesk">2009 – 2016</span>
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-3 font-space-grotesk">Google/Waymo</h3>
                        <p className="text-white/70 leading-relaxed mb-2 font-medium">Self-Driving Car Program</p>
                        <p className="text-white/60 leading-relaxed">
                          150K autonomous miles. 75+ EV builds.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16 font-space-grotesk">
              Why Work With Joe's Tech Solutions?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.1}>
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
                  <Card className={`bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 h-full ${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
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

      {/* CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Ready to Start Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Let's discuss how we can help bring your vision to life
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
