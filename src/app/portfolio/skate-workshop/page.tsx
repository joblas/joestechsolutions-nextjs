import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, Smartphone, Globe, Zap, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Skate Workshop Case Study | Joe's Tech Solutions",
  description: "Olympic-level skateboarding coaching platform built with React Native, Next.js, and real-time features. Mobile app development case study.",
  alternates: {
    canonical: '/portfolio/skate-workshop',
  },
  openGraph: {
    title: "The Skate Workshop Case Study | Joe's Tech Solutions",
    description: "Olympic-level skateboarding coaching platform built with React Native, Next.js, and real-time features.",
    url: 'https://joestechsolutions.com/portfolio/skate-workshop',
  },
};

export default function SkateWorkshopCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0d0d12]">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-8">
        <Link href="/portfolio">
          <Button variant="outline" className="border-white/20 hover:bg-white/5">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/20 via-[#0d0d12]/20 to-[#0d0d12]/20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#0d9488]/20 border border-[#0d9488]/30 rounded-full text-[#0d9488] text-sm font-semibold">
                Mobile App • Web Platform • Subscription SaaS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-space-grotesk">
                The Skate Workshop
              </h1>

              <p className="text-xl text-white/90 leading-relaxed">
                Olympic-level skateboarding coaching delivered through a mobile-first platform
                with video feedback, comprehensive trick database, and multiplayer features.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.theskateworkshop.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] rounded-full shadow-lg shadow-[#0d9488]/20">
                    Visit Live Site
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/skateboarding-action.jpg"
                  alt="Skateboarding action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="relative py-20 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#1c1c26] border-white/10 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0d9488]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-[#0d9488]" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-space-grotesk">Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">iOS, Android, Web</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1c26] border-white/10 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2dd4bf]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#2dd4bf]" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-space-grotesk">Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Beta Testing Phase</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1c26] border-white/10 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-space-grotesk">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">400+ Tricks, Video Feedback, Multiplayer</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-space-grotesk">The Challenge</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Create a comprehensive skateboarding coaching platform that brings Olympic-level
                instruction to skaters of all skill levels. The platform needed to handle video
                uploads, provide personalized feedback, track progression through hundreds of tricks,
                and facilitate community engagement through multiplayer features.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                The solution required both mobile apps (iOS & Android) and a web platform, with
                real-time features, subscription billing, and seamless content delivery.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-space-grotesk">The Solution</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Built a cross-platform solution using React Native for mobile and Next.js for web,
                ensuring consistent experience across all devices while maintaining native performance.
              </p>
              <div className="space-y-3">
                {[
                  "React Native mobile apps for iOS and Android",
                  "Next.js web platform with server-side rendering",
                  "Video upload and feedback system",
                  "400+ trick database with detailed tutorials",
                  "Real-time multiplayer SKATE game mode",
                  "Stripe subscription billing integration",
                  "Progress tracking and analytics"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 font-space-grotesk">Technology Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Mobile", tech: ["React Native", "Expo", "TypeScript"] },
              { category: "Web", tech: ["Next.js", "React", "Tailwind CSS"] },
              { category: "Backend", tech: ["Supabase", "PostgreSQL", "Real-time DB"] },
              { category: "Integrations", tech: ["Stripe", "Video Processing", "Analytics"] }
            ].map((stack, index) => (
              <Card key={index} className="bg-[#1c1c26] border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white font-space-grotesk">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.tech.map((item, i) => (
                      <li key={i} className="text-white/80 text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-20 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 font-space-grotesk">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Video Feedback System",
                description: "Users upload their skateboarding videos and receive personalized coaching feedback from Olympic-level instructors.",
                icon: Globe
              },
              {
                title: "400+ Trick Database",
                description: "Comprehensive library of skateboarding tricks with video tutorials, difficulty ratings, and step-by-step instructions.",
                icon: Smartphone
              },
              {
                title: "Progress Tracking",
                description: "Track learning progression, completed tricks, and skill development over time with detailed analytics.",
                icon: Zap
              },
              {
                title: "Multiplayer SKATE Game",
                description: "Challenge friends to classic SKATE competitions with real-time gameplay and scoring.",
                icon: Users
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#0d9488]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-[#0d9488]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-space-grotesk">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-space-grotesk">Results & Impact</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Currently in beta testing with positive feedback from early users
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Platform Launch", value: "Beta Testing", desc: "iOS, Android & Web" },
              { label: "Trick Database", value: "400+", desc: "Comprehensive tutorials" },
              { label: "Features", value: "Real-time", desc: "Multiplayer & Feedback" }
            ].map((stat, index) => (
              <Card key={index} className="bg-linear-to-br from-[#0d9488]/10 to-[#2dd4bf]/10 border-[#0d9488]/30 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#0d9488] mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 bg-linear-to-r from-[#0d9488]/10 via-[#0d0d12] to-[#2dd4bf]/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
            Ready to Build Your App?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's discuss your mobile or web platform project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/joe-joestechsolutions/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] rounded-full shadow-lg shadow-[#0d9488]/20">
                Schedule Discovery Call
              </Button>
            </a>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
