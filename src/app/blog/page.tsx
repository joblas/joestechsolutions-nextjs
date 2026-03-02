import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

export const metadata: Metadata = {
  title: "Blog | Joe's Tech Solutions",
  description:
    "Practical guides and straight talk on private AI, web development, and technology for small businesses. No hype — just things that actually work.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Joe's Tech Solutions",
    description:
      "Practical guides and straight talk on private AI, web development, and technology for small businesses.",
    url: "https://joestechsolutions.com/blog",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[140px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0EA5E9] rounded-full blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-sm font-medium">The JTS Blog</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-space-grotesk leading-tight">
                Straight Talk on Tech
              </h1>
              <p className="mt-6 text-xl text-white/70 leading-relaxed font-light max-w-2xl">
                Practical guides on private AI, web development, and modern tech for small businesses.
                No hype. No fluff. Just things that actually work.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <FadeIn>
              <p className="text-white/50 text-center text-lg">No posts yet. Check back soon.</p>
            </FadeIn>
          ) : (
            <StaggerContainer
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <AnimatedCard>
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="h-full bg-[#1c1c26] border border-white/10 rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-all duration-500 flex flex-col">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-white mb-3 font-space-grotesk leading-snug group-hover:text-[#8B5CF6] transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                          <div className="flex items-center gap-4 text-white/40 text-xs">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime} min read
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#8B5CF6] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </article>
                    </Link>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[150px] animate-glow" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
              Ready to Keep Your Data Private?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get your own private AI running on your hardware — no monthly subscriptions, no data leaving your building.
            </p>
            <Link
              href="/private-ai-setup"
              className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#0EA5E9]/20"
            >
              Learn About Private AI Setup
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
