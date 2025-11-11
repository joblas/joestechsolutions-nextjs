import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Code, Zap } from "lucide-react";
import type { Metadata } from "next";

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm Joe
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                From managing Waymo autonomous vehicle operations to building practical
                technology solutions—a hands-on builder who understands systems, operations,
                and execution.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                  Let's Work Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src="/images/joe-profile.jpg"
                  alt="Joe - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Background
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Technical operations at scale, now applied to custom development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Waymo Operations</h3>
                <p className="text-slate-400">
                  Managed complex technical systems for autonomous vehicle operations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Full-Stack Developer</h3>
                <p className="text-slate-400">
                  Building mobile and web applications with modern tech stacks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">AI Infrastructure</h3>
                <p className="text-slate-400">
                  Deploying private AI solutions that save businesses $50K-120K/year
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why Work With Joe's Tech Solutions?
          </h2>

          <div className="space-y-8">
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
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Credentials
            </h2>
            <p className="text-xl text-slate-400">
              From autonomous vehicles to custom software
            </p>
          </div>

          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-700">
            <Image
              src="/images/credentials-google-waymo.jpg"
              alt="Waymo Google Credentials"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 group">
              Schedule Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
