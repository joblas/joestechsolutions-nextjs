import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Globe, Zap, Briefcase, CheckCircle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/20 via-slate-900/50 to-transparent" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Building the future, one app at a time</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
              <span className="block text-white mb-2">Boutique Development</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                For Ambitious SMBs
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              From Olympic coaching apps to AI infrastructure—we build mobile apps, web platforms,
              and custom solutions that help growing businesses compete.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link href="/portfolio">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 group">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800 hover:border-slate-600">
                  Schedule Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Featured Case Study - The Skate Workshop */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Project
            </h2>
            <p className="text-xl text-slate-400">
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

              <p className="text-lg text-slate-300 leading-relaxed">
                Olympic-level skateboarding coaching platform with video feedback,
                400+ trick database, and multiplayer game modes. Built with Next.js,
                React Native for iOS/Android, with subscription billing and real-time features.
              </p>

              <div className="space-y-3">
                {[
                  "Cross-platform mobile app (iOS & Android)",
                  "Video feedback and progress tracking system",
                  "400+ trick database with detailed tutorials",
                  "Subscription billing with Stripe integration",
                  "Multiplayer SKATE game competition mode"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/portfolio/skate-workshop">
                  <Button className="bg-blue-600 hover:bg-blue-700 group">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                  <p className="text-slate-400 text-sm">
                    App screenshots coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 sm:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Full-stack development, AI infrastructure, and strategic consulting
              for growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mobile App Development */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 hover:bg-slate-800 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Mobile Apps</CardTitle>
                <CardDescription className="text-slate-400">
                  React Native development for iOS & Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  Cross-platform mobile applications with native performance
                </p>
                <Link href="/services#mobile" className="text-blue-400 text-sm font-medium hover:text-blue-300 inline-flex items-center group">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 hover:bg-slate-800 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Web Development</CardTitle>
                <CardDescription className="text-slate-400">
                  Modern web apps with React, Next.js, TypeScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  Fast, responsive, and SEO-optimized web applications
                </p>
                <Link href="/services#web" className="text-purple-400 text-sm font-medium hover:text-purple-300 inline-flex items-center group">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* AI Infrastructure */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 hover:bg-slate-800 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">AI Infrastructure</CardTitle>
                <CardDescription className="text-slate-400">
                  Private AI deployment & optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  Save $50K-$120K/year with private AI infrastructure
                </p>
                <Link href="/services#ai" className="text-orange-400 text-sm font-medium hover:text-orange-300 inline-flex items-center group">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Consulting */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-600/50 hover:bg-slate-800 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Strategic Consulting</CardTitle>
                <CardDescription className="text-slate-400">
                  Technology strategy & operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  From Waymo operations to your technology roadmap
                </p>
                <Link href="/services#consulting" className="text-green-400 text-sm font-medium hover:text-green-300 inline-flex items-center group">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>

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

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project. Schedule a free discovery call to explore how
            we can help bring your vision to life.
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
