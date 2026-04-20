import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Smartphone, Globe } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "Portfolio | Joe's Tech Solutions",
  description: "See our work building mobile apps, web platforms, and custom solutions for ambitious businesses.",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Portfolio | Joe's Tech Solutions",
    description: "See our work building mobile apps, web platforms, and custom solutions for ambitious businesses.",
    url: 'https://joestechsolutions.com/portfolio',
  },
};

export default function Portfolio() {
  const projects = [
    {
      id: "skate-workshop",
      title: "The Skate Workshop",
      category: "Mobile App • Web Platform",
      description: "Olympic-level skateboarding coaching platform with video feedback, 400+ trick database, and multiplayer features.",
      image: "/images/skate-workshop-hero.png",
      imageContain: true,
      tags: ["React Native", "Next.js", "Stripe", "Real-time"],
      color: "blue",
      href: "/portfolio/skate-workshop",
      liveUrl: "https://www.theskateworkshop.app"
    },
    {
      id: "renfaire-directory",
      title: "RenFaire Directory",
      category: "Content Platform • SEO • Directory",
      description: "A modern, revenue-generating directory featuring 200+ Renaissance faire listings, rich structured data, and top search rankings.",
      image: "/images/renfaire-hero.jpg",
      tags: ["Next.js", "TypeScript", "Supabase", "SEO"],
      color: "blue",
      href: "/portfolio/renfaire-directory",
      liveUrl: "https://www.renfaireguide.com"
    },
    {
      id: "cbarrgs",
      title: "Cbarrgs Music",
      category: "Artist Website",
      description: "Music artist portfolio with streaming integrations, performance optimization, and SEO for discoverability.",
      image: "/images/cbarrgs-logo.jpeg",
      tags: ["Next.js", "SEO", "Performance"],
      color: "blue",
      href: "/portfolio/cbarrgs",
      liveUrl: "https://cbarrgs.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] via-[#0d0d12] to-[#0d0d12]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d9488]/20 via-[#2dd4bf]/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-6">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-2">Our Work</span>
                <span className="block text-[#0d9488] font-bold">
                  Building Real Solutions
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                From Olympic coaching apps to artist portfolios—see how we help
                businesses bring their vision to life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.2}>
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-300 overflow-hidden group h-full">
                <div className={`relative aspect-video overflow-hidden ${project.imageContain ? 'bg-[#1c1c26]' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${project.imageContain ? 'object-contain p-8' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#0b7f73]/20 text-[#0d9488] backdrop-blur-sm rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white mb-2 font-space-grotesk">{project.title}</CardTitle>
                  <CardDescription className="text-white/70 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#1c1c26] border border-white/10 rounded-full text-white/80 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={project.href} className="flex-1">
                      <Button className="w-full bg-[#0b7f73] hover:bg-[#0f766e] group/btn">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                        Live Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* More Projects Coming */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Card className="bg-[#1c1c26]/30 border-white/10 border-dashed">
                <CardContent className="py-12">
                  <p className="text-white/70 text-lg mb-6">
                    More case studies coming soon. Working on something exciting?
                  </p>
                  <a href="https://joestechsolutions.com" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e]">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Let's Build Something Together
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/70 mb-10">
              Have a project in mind? Let's discuss how we can help bring it to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="https://joestechsolutions.com" target="_blank" rel="noopener noreferrer">
              <MagneticButton strength={0.3}>
                <Button size="lg" className="bg-[#0b7f73] hover:bg-[#0f766e] text-lg px-10 py-6 group">
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
