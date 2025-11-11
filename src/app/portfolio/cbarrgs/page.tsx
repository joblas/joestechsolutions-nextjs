import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, Globe, Zap, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cbarrgs Music Case Study | Joe's Tech Solutions",
  description: "Music artist portfolio website with streaming integrations, performance optimization, and SEO.",
};

export default function CbarrgsCaseStudy() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-full text-purple-400 text-sm font-semibold">
                Artist Website • Performance Optimized
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Cbarrgs Music
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Electronic music artist portfolio with seamless streaming platform integrations,
                optimized performance, and SEO strategy for music discovery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://cbarrgs.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Visit Live Site
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src="/images/client-collaboration.jpg"
                  alt="Cbarrgs collaboration"
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
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Next.js Web Platform</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Optimized Font Loading</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Schema.org Structured Data</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Challenge</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Create a professional artist portfolio that serves as a central hub for music discovery
                across multiple streaming platforms while maintaining fast load times and strong SEO
                for organic discoverability.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                The site needed to integrate with Spotify, Apple Music, YouTube, SoundCloud, and Instagram
                while providing an elegant, fast-loading experience that reflects the artist's brand.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Solution</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Built a performance-optimized Next.js website with advanced font loading strategies
                and structured data for SEO.
              </p>
              <div className="space-y-3">
                {[
                  "Next.js with server-side rendering for fast initial loads",
                  "Strategic font-display: swap for optimal performance",
                  "Schema.org markup for rich search results",
                  "Open Graph integration for social sharing",
                  "Direct links to all major streaming platforms",
                  "Responsive design optimized for all devices",
                  "Performance monitoring and optimization"
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
              { category: "Framework", tech: ["Next.js", "React", "TypeScript"] },
              { category: "Styling", tech: ["Tailwind CSS", "Custom CSS", "Responsive Design"] },
              { category: "SEO", tech: ["Schema.org", "Open Graph", "Meta Tags"] },
              { category: "Performance", tech: ["Font Optimization", "Code Splitting", "CDN"] }
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
                title: "Streaming Platform Integration",
                description: "Seamless links to Spotify, Apple Music, YouTube, SoundCloud, and Instagram with clean, user-friendly interface.",
                icon: Globe
              },
              {
                title: "Performance Optimization",
                description: "Advanced font-loading strategies and code splitting ensure fast page loads and smooth user experience.",
                icon: Zap
              },
              {
                title: "SEO & Discoverability",
                description: "Schema.org structured data and Open Graph tags optimize search engine visibility and social sharing.",
                icon: TrendingUp
              },
              {
                title: "Artist Branding",
                description: "Clean, professional design that reflects the artist's electronic/ambient music aesthetic.",
                icon: Globe
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-purple-400" />
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
              Professional online presence driving music discovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Load Time", value: "< 2s", desc: "Optimized performance" },
              { label: "Platforms", value: "5+", desc: "Streaming integrations" },
              { label: "SEO", value: "Optimized", desc: "Schema & Open Graph" }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-600/30 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Professional Website?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's build your online presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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
