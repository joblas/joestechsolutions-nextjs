import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Github, Linkedin, Globe } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { BlogContent } from "./BlogContent";

const POST = {
  title: "How I Replaced $285/mo in SaaS Tools With AI Agents at Zero Marginal Cost",
  date: "2026-03-10",
  readTime: 7,
  author: "Joe Blas",
  tags: ["AI Agents", "Automation", "SaaS", "OpenClaw", "Cost Savings"],
};

export const metadata: Metadata = {
  title: "How I Replaced $285/mo in SaaS Tools With AI Agents at Zero Marginal Cost | Joe's Tech Solutions",
  description:
    "How one developer replaced $285/mo in SaaS subscriptions with 24 AI agents running on his existing Claude subscription — zero additional cost.",
  alternates: { canonical: "/blog/replace-saas-with-ai-agents" },
  openGraph: {
    title: "How I Replaced $285/mo in SaaS Tools With AI Agents at Zero Marginal Cost",
    description: "How one developer replaced $285/mo in SaaS subscriptions with 24 AI agents running on his existing Claude subscription — zero additional cost.",
    url: "https://joestechsolutions.com/blog/replace-saas-with-ai-agents",
    type: "article",
    publishedTime: POST.date,
    authors: [POST.author],
    tags: POST.tags,
    images: [{ url: "/images/blog/replace-saas-og.png", width: 1200, height: 630, alt: POST.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Replaced $285/mo in SaaS Tools With AI Agents at Zero Marginal Cost",
    description: "How one developer replaced $285/mo in SaaS subscriptions with 24 AI agents running on his existing Claude subscription — zero additional cost.",
    images: ["/images/blog/replace-saas-og.png"],
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ReplaceSaasPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: POST.title,
            description: "How one developer replaced $285/mo in SaaS subscriptions with 24 AI agents running on his existing Claude subscription — zero additional cost.",
            image: "https://joestechsolutions.com/images/blog/replace-saas-og.png",
            author: {
              "@type": "Person",
              name: "Joe Blas",
              url: "https://joestechsolutions.com",
              jobTitle: "Generative AI Full-Stack Developer",
            },
            publisher: {
              "@type": "Organization",
              name: "Joe's Tech Solutions",
              url: "https://joestechsolutions.com",
              logo: { "@type": "ImageObject", url: "https://joestechsolutions.com/logo-main.png" },
            },
            datePublished: POST.date,
            dateModified: POST.date,
            mainEntityOfPage: "https://joestechsolutions.com/blog/replace-saas-with-ai-agents",
            keywords: POST.tags.join(", "),
            wordCount: 1200,
            timeRequired: `PT${POST.readTime}M`,
          }),
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <ParallaxSection speed={0.3}>
            <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] bg-[#8B5CF6] rounded-full blur-[200px]" />
          </ParallaxSection>
          <ParallaxSection speed={0.2} direction="down">
            <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[180px]" />
          </ParallaxSection>
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn delay={0}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Posts
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              {POST.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-space-grotesk leading-[1.1] mb-6">
              How I Replaced $285/mo in SaaS Tools With{" "}
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent">
                AI Agents
              </span>{" "}
              at Zero Marginal Cost
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              Most &ldquo;AI automation&rdquo; content is someone connecting Zapier to ChatGPT. I wanted Jarvis. So I built it.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-5 text-white/50 text-sm border-t border-white/10 pt-5">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {POST.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(POST.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {POST.readTime} min read
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ CONTENT (client component) ═══════════ */}
      <BlogContent />

      {/* ═══════════ AUTHOR BIO ═══════════ */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative border border-white/10 rounded-2xl bg-[#1c1c26]/50 overflow-hidden">
              {/* Photo strip */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/images/blog/joe-hot-tub-multitask.jpg"
                  alt="Joe cleaning his hot tub in San Diego while his AI agents handle business operations"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c26] via-[#1c1c26]/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-white/50 text-xs italic">
                    While my AI agents built this blog post, I was cleaning my hot tub in San Diego. That&apos;s the point.
                  </p>
                </div>
              </div>
              {/* Bio content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA5E9] mb-1">About the Author</p>
                    <h3 className="text-xl font-bold text-white font-space-grotesk mb-3">Joe Blas</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      Generative AI Full-Stack Developer based in San Diego and founder of Joe&apos;s Tech Solutions LLC. He builds AI-powered applications and private AI systems for businesses that want to own their intelligence stack — not rent it.
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://joestechsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/40 hover:text-[#0EA5E9] text-sm transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                      <a
                        href="https://github.com/joblas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/40 hover:text-[#0EA5E9] text-sm transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/joe-blas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/40 hover:text-[#0EA5E9] text-sm transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-[#0EA5E9]/10 via-[#1c1c26] to-[#8B5CF6]/10 border border-white/10 rounded-3xl p-10 sm:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0EA5E9] rounded-full blur-[100px] opacity-10" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#8B5CF6] rounded-full blur-[80px] opacity-10" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                  <span className="text-[#0EA5E9] text-sm font-medium">Want This For Your Business?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
                  Stop Renting Intelligence. Start Owning It.
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
                  I build private AI systems and agent architectures for businesses that want the same competitive edge. One setup. Your hardware. Your data. No monthly SaaS drain.
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
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/10 transition-colors"
                  >
                    Let&apos;s Talk
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
