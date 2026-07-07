import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import {
  Gear,
  ChartLineUp,
  PencilLine,
  Code,
  MagnifyingGlass,
  DownloadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Free Prompt Library | Joe's Tech Solutions",
  description:
    "The prompt library I actually use — ops, sales, content, coding, and research prompts pulled straight from my daily agent workflows. Free download.",
  alternates: {
    canonical: "/prompt-library",
  },
  openGraph: {
    title: "Free Prompt Library | Joe's Tech Solutions",
    description:
      "The prompt library I actually use — ops, sales, content, coding, and research prompts. Free download.",
    url: "https://www.joestechsolutions.com/prompt-library",
  },
};

const categories = [
  {
    name: "Ops",
    icon: Gear,
    accent: "text-[#0d9488]",
    iconBg: "bg-[#0b7f73]/10",
    description: "Daily briefings, meeting prep, and task triage — the prompts that run my mornings.",
    sample:
      "“Summarize my calendar, inbox, and open tasks for today. Flag anything blocking, anything overdue, and the one thing I should do first.”",
  },
  {
    name: "Sales",
    icon: ChartLineUp,
    accent: "text-[#2dd4bf]",
    iconBg: "bg-[#2dd4bf]/10",
    description: "Outreach drafts, follow-up sequences, and lead qualification that don't sound like a robot wrote them.",
    sample:
      "“Draft a follow-up to this thread. Reference what they actually said, keep it under 100 words, end with one concrete next step.”",
  },
  {
    name: "Content",
    icon: PencilLine,
    accent: "text-[#8B5CF6]",
    iconBg: "bg-[#8B5CF6]/10",
    description: "Blog outlines, social posts, and newsletter drafts in my voice — not generic AI filler.",
    sample:
      "“Turn these build notes into a blog post outline. Lead with the problem, show the real numbers, no hype words.”",
  },
  {
    name: "Coding",
    icon: Code,
    accent: "text-[#0d9488]",
    iconBg: "bg-[#0b7f73]/10",
    description: "Code review, debugging, and refactoring prompts I use with my own agent stack every day.",
    sample:
      "“Review this diff for bugs only — no style nits. For each issue, show the exact failure case that triggers it.”",
  },
  {
    name: "Research",
    icon: MagnifyingGlass,
    accent: "text-[#2dd4bf]",
    iconBg: "bg-[#2dd4bf]/10",
    description: "Competitor scans, tool comparisons, and decision briefs that come back with sources, not vibes.",
    sample:
      "“Compare these three tools for my use case. Cite sources for every claim, and tell me what you'd pick and why.”",
  },
];

export default function PromptLibrary() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.joestechsolutions.com" },
          { name: "Prompt Library", url: "https://www.joestechsolutions.com/prompt-library" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">The prompt library</span>
                <span className="block text-[#0d9488]">I actually use.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Not scraped from Twitter. These are the prompts running my agents right now —
                ops, sales, content, coding, and research. Free, in exchange for your email.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <StaggerItem key={category.name} className="h-full">
                  <AnimatedCard className="h-full">
                    <Card className="h-full bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/40 transition-all duration-500 group p-8">
                      <div className="space-y-4">
                        <div
                          className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon weight="duotone" className={`h-8 w-8 ${category.accent}`} />
                        </div>
                        <h2 className="text-xl font-bold text-white font-space-grotesk">
                          {category.name}
                        </h2>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {category.description}
                        </p>
                        <blockquote className="border-l-2 border-white/10 pl-4 text-white/50 text-sm italic leading-relaxed">
                          {category.sample}
                        </blockquote>
                      </div>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Lead Magnet Form */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30 border-y border-white/5">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
              Get the full library.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light">
              Drop your email and I&apos;ll send you the whole thing — plus the occasional note
              when I add new prompts. No spam, unsubscribe anytime.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <NewsletterSignup
              source="prompt-library"
              buttonLabel="Send Me the Library"
              successContent={
                <div className="bg-[#0d0d12] border border-[#0d9488]/30 rounded-2xl p-8 space-y-3">
                  <DownloadSimple
                    weight="duotone"
                    className="h-10 w-10 text-[#0d9488] mx-auto"
                  />
                  <p className="text-white font-semibold font-space-grotesk">You&apos;re in.</p>
                  <p className="text-white/60 text-sm">
                    Download coming soon — I&apos;m packaging the PDF now. You&apos;ll get it in
                    your inbox the moment it&apos;s ready.
                  </p>
                </div>
              }
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
