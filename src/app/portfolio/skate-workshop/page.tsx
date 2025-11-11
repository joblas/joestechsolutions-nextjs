import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, Smartphone, Globe, Zap, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Skate Workshop Case Study | Joe's Tech Solutions",
  description: "Olympic-level skateboarding coaching platform built with React Native, Next.js, and real-time features.",
};

export default function SkateWorkshopCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/portfolio">
          <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-semibold">
                Mobile App • Web Platform • Subscription SaaS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                The Skate Workshop
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Olympic-level skateboarding coaching delivered through a mobile-first platform
                with video feedback, comprehensive trick database, and multiplayer features.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.theskateworkshop.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Visit Live Site
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700">
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
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">iOS, Android, Web</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Beta Testing Phase</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">400+ Tricks, Video Feedback, Multiplayer</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Challenge</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Create a comprehensive skateboarding coaching platform that brings Olympic-level
                instruction to skaters of all skill levels. The platform needed to handle video
                uploads, provide personalized feedback, track progression through hundreds of tricks,
                and facilitate community engagement through multiplayer features.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                The solution required both mobile apps (iOS & Android) and a web platform, with
                real-time features, subscription billing, and seamless content delivery.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Solution</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
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
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Mobile", tech: ["React Native", "Expo", "TypeScript"] },
              { category: "Web", tech: ["Next.js", "React", "Tailwind CSS"] },
              { category: "Backend", tech: ["Supabase", "PostgreSQL", "Real-time DB"] },
              { category: "Integrations", tech: ["Stripe", "Video Processing", "Analytics"] }
            ].map((stack, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.tech.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>

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
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Results & Impact</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Currently in beta testing with positive feedback from early users
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Platform Launch", value: "Beta Testing", desc: "iOS, Android & Web" },
              { label: "Trick Database", value: "400+", desc: "Comprehensive tutorials" },
              { label: "Features", value: "Real-time", desc: "Multiplayer & Feedback" }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your App?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's discuss your mobile or web platform project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Discovery Call
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
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
