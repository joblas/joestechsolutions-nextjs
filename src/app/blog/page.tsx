import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

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
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/blog-hero.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d12]/60 via-[#0d0d12]/80 to-[#0d0d12]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest">
                  Engineering Notes
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] leading-tight tracking-tight">
                Building with AI,<br />
                <span className="text-white/60">in the open.</span>
              </h1>
              <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-xl">
                How we build private AI systems, ship real products, and automate
                the boring stuff. Field notes from the trenches of modern development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Posts List */}
      <section className="relative py-8 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <FadeIn>
              <p className="text-white/50 text-center text-lg font-[family-name:var(--font-jetbrains-mono)]">
                No posts yet. Check back soon.
              </p>
            </FadeIn>
          ) : (
            <>
              <FadeIn>
                <p className="text-white/30 text-sm font-[family-name:var(--font-jetbrains-mono)] mb-8">
                  {posts.length} post{posts.length !== 1 ? "s" : ""}
                </p>
              </FadeIn>

              <StaggerContainer className="flex flex-col" staggerDelay={0.08}>
                {posts.map((post) => (
                  <StaggerItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <article className="py-6 border-b border-white/5 hover:border-[#8B5CF6]/30 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                          <time className="text-sm text-white/30 font-[family-name:var(--font-jetbrains-mono)] shrink-0 tabular-nums">
                            {formatDate(post.date)}
                          </time>
                          <div className="flex items-baseline gap-3 min-w-0">
                            <h2 className="text-lg font-semibold text-white font-[family-name:var(--font-jetbrains-mono)] leading-snug group-hover:text-[#8B5CF6] transition-colors truncate">
                              {post.title}
                            </h2>
                            <span className="text-white/20 text-xs font-[family-name:var(--font-jetbrains-mono)] shrink-0 hidden sm:inline">
                              {post.readTime}m
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-white/40 text-sm leading-relaxed sm:pl-[calc(theme(spacing.6)+7ch)] line-clamp-2">
                          {post.excerpt}
                        </p>
                      </article>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0d9488] rounded-full blur-[150px] animate-glow" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-jetbrains-mono)]">
              Ready to Keep Your Data Private?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get your own private AI running on your hardware — no monthly subscriptions, no data leaving your building.
            </p>
            <Link
              href="/private-ai-setup"
              className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#0d9488]/20"
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
