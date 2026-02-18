import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { FadeIn } from "@/components/animations/FadeIn";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Joe's Tech Solutions" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `https://joestechsolutions.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.seo.ogImage
        ? [{ url: post.seo.ogImage, width: 1200, height: 630, alt: post.title }]
        : [{ url: "/logo-main.png", width: 2400, height: 1200, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [post.seo.ogImage ?? "/logo-main.png"],
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B5CF6] rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0EA5E9] rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back link */}
          <FadeIn delay={0}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Posts
            </Link>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-space-grotesk leading-tight mb-6">
              {post.title}
            </h1>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap items-center gap-5 text-white/50 text-sm border-t border-b border-white/10 py-4">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-linear-to-br from-[#0EA5E9]/10 via-[#1c1c26] to-[#8B5CF6]/10 border border-white/10 rounded-3xl p-10 sm:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0EA5E9] rounded-full blur-[100px] opacity-10" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#8B5CF6] rounded-full blur-[80px] opacity-10" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <span className="text-[#0EA5E9] text-sm font-medium">Private AI Setup Service</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
                  Keep Your Data Where It Belongs
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
                  I'll set up a fully private AI on your hardware — Ollama, Open WebUI, model configuration, and team onboarding. One flat fee. No monthly subscriptions. Your data never leaves your building.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/private-ai-setup"
                    className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#0EA5E9]/20"
                  >
                    See the Setup Package
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/10 transition-colors"
                  >
                    More Posts
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
