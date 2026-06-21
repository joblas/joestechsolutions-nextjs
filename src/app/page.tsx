import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Joe's Tech Solutions — Custom tools and automation",
  description:
    "I build custom tools and automation for small businesses. Solo operation — building the same systems I run on my own business, then handing them to you.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joe's Tech Solutions — Custom tools and automation",
    description:
      "I build custom tools and automation for small businesses. Solo operation — building the same systems I run on my own business, then handing them to you.",
    url: "https://www.joestechsolutions.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Left: text */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2DD4BF]" />
                Joe&apos;s Tech Solutions — San Diego
              </div>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] font-space-grotesk">
                  <span className="block text-white">I build custom tools</span>
                  <span className="block text-white">and </span>
                  <span className="block text-[#2DD4BF]">automation</span>
                  <span className="block text-white">for small businesses.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed font-light">
                  Solo operation. No team of account managers, no offshore dev
                  shop, no markup. Just me — building the same kind of systems I
                  run on my own business every day, then handing them to you.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a
                  href="mailto:joe@joestechsolutions.com"
                  className="inline-flex items-center gap-2 text-lg text-[#2DD4BF] hover:text-[#14b8a6] transition-colors font-medium group"
                >
                  Let&apos;s talk
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </FadeIn>

              <p className="text-sm text-white/30">
                Currently building — last shipped June 2026
              </p>
            </div>

            {/* Right: live counter card */}
            <div className="lg:mt-12">
              <div className="border border-white/10 rounded-lg p-8 bg-[#0F0F12]">
                <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                  Running right now
                </div>
                <div className="text-6xl sm:text-7xl font-bold text-white font-space-grotesk tracking-tight">
                  16
                </div>
                <p className="text-white/50 mt-3 text-sm leading-relaxed">
                  automated systems on my own business, 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <FadeIn>
              <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
                The numbers
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-space-grotesk leading-tight">
                <span className="block text-white">I don&apos;t just build</span>
                <span className="block text-white">things.</span>
                <span className="block text-[#2DD4BF]">I run them.</span>
              </h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <p className="text-white/60 text-lg leading-relaxed font-light max-w-lg">
                  Every tool I&apos;ve ever handed to a client was tested on my
                  own business first. Not in a sandbox. Not in a demo. In
                  production, against real work, every day.
                </p>
              </FadeIn>

              <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-white/5">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-[#2DD4BF] font-space-grotesk tracking-tight">
                    16
                  </div>
                  <p className="text-white/40 text-sm mt-2 leading-relaxed">
                    systems running 24/7 on my own operations
                  </p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk tracking-tight">
                    5+
                  </div>
                  <p className="text-white/40 text-sm mt-2 leading-relaxed">
                    apps shipped and actively maintained
                  </p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-white font-space-grotesk tracking-tight">
                    365
                  </div>
                  <p className="text-white/40 text-sm mt-2 leading-relaxed">
                    days a year — morning briefing, automated
                  </p>
                </div>
              </div>

              <p className="text-white/40 text-sm leading-relaxed max-w-lg pt-4">
                16 automated systems running on my business right now. Content
                pipelines, data collection, daily briefings, monitoring. If it
                breaks, I fix it — because it&apos;s mine too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What I Build ─── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
              What I build
            </div>
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-space-grotesk leading-tight mb-8">
                <span className="text-white">Tools that actually </span>
                <span className="text-[#2DD4BF]">get used.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/60 text-lg leading-relaxed font-light mb-6">
                Not dashboards nobody opens. Not reports nobody reads. Custom
                tools that fit into how you already work — or change how you
                work for the better.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-white/50 leading-relaxed mb-6">
                Most of what I build falls into three buckets.{" "}
                <span className="text-white/80">Automation</span> — taking
                repetitive work off your plate so you can do the part that
                actually matters. <span className="text-white/80">Custom tools</span>{" "}
                — web apps, internal dashboards, client portals, the thing
                you&apos;ve been doing in a spreadsheet that deserves to be its
                own tool.{" "}
                <span className="text-white/80">Content pipelines</span> —
                automated systems that research, draft, and publish so
                you&apos;re not staring at a blank page every morning.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[#2DD4BF] text-lg font-medium mb-8">
                If it doesn&apos;t save you at least an hour a day, I probably
                wouldn&apos;t build it.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
                The work ranges from a single script that runs once a week to a
                full multi-service system with dashboards, alerts, and
                automated reporting. The scale depends on what you need. The
                approach is always the same: build it, run it on my business,
                fix what breaks, then hand it over.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── How I Work ─── */}
      <section className="border-t border-white/5 bg-[#0F0F12]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
                How I work
              </div>
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-space-grotesk leading-tight">
                  <span className="block text-white">I eat my own</span>
                  <span className="block text-[#2DD4BF]">cooking.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/50 text-lg leading-relaxed font-light mt-6 max-w-sm">
                  Everything I build for you, I&apos;ve already built and run
                  for myself. Here&apos;s what that looks like.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-10">
              {[
                {
                  num: "01",
                  title: "I run it on my business first",
                  body: "Every system — content pipelines, monitoring, daily briefings — gets built for my own operations and run in production. If it breaks at 2am, I'm the one who gets the alert.",
                },
                {
                  num: "02",
                  title: "I figure out what actually matters",
                  body: "Running things on myself tells me what's genuinely useful versus what looks good in a demo. The stuff that wastes my time gets cut. The stuff that saves time gets hardened.",
                },
                {
                  num: "03",
                  title: "I build the same for you",
                  body: "Once it works for me — reliably, not just on a good day — I adapt it for your business. Same patterns, same approach, configured for what you actually need.",
                },
                {
                  num: "04",
                  title: "You own it",
                  body: 'No black boxes. No "proprietary platform." You get the code, the configs, the keys. If you want to run it yourself, you can. If you want me to keep running it, I will.',
                },
              ].map((step, i) => (
                <FadeIn key={step.num} delay={0.1 * (i + 1)}>
                  <div className="flex gap-6">
                    <div className="text-2xl font-bold text-white/20 font-space-grotesk tracking-tight shrink-0 w-12">
                      {step.num}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-sm">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Recent Work ─── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
            Recent work
          </div>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-space-grotesk leading-tight mb-16">
              <span className="text-white">Things I&apos;ve </span>
              <span className="text-[#2DD4BF]">shipped.</span>
            </h2>
          </FadeIn>

          {/* Project 1 — Skate Workshop */}
          <FadeIn delay={0.1}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 py-8 border-t border-white/5">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Coaching platform
                </div>
                <h3 className="text-2xl font-bold text-white font-space-grotesk">
                  <Link href="#" className="hover:text-[#2DD4BF] transition-colors">
                    Skate Workshop
                  </Link>
                </h3>
                <p className="text-white/30 text-sm">Web app · Active · Solo build</p>
              </div>
              <p className="text-white/60 leading-relaxed">
                A coaching app for skateboarding instructors — lesson plans,
                student tracking, progress milestones. Built for people who
                teach on ramps, not behind desks.
              </p>
            </div>
          </FadeIn>

          {/* Project 2 — Fairway Roll */}
          <FadeIn delay={0.2}>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 py-8 border-t border-white/5">
              <p className="text-white/60 leading-relaxed lg:order-2">
                A map-based app for finding skate spots and golf courses. Two
                things that don&apos;t seem related until you meet the person
                who built it.
              </p>
              <div className="space-y-2 lg:order-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Map + discovery
                </div>
                <h3 className="text-2xl font-bold text-white font-space-grotesk">
                  <Link href="#" className="hover:text-[#2DD4BF] transition-colors">
                    Fairway Roll
                  </Link>
                </h3>
                <p className="text-white/30 text-sm">Mobile web · Active · Solo build</p>
              </div>
            </div>
          </FadeIn>

          {/* Project 3 — RenFaire Directory */}
          <FadeIn delay={0.3}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 py-8 border-t border-white/5">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Directory
                </div>
                <h3 className="text-2xl font-bold text-white font-space-grotesk">
                  <Link href="#" className="hover:text-[#2DD4BF] transition-colors">
                    RenFaire Directory
                  </Link>
                </h3>
                <p className="text-white/30 text-sm">Web app · Active · Solo build</p>
              </div>
              <p className="text-white/60 leading-relaxed">
                A full directory of Renaissance Faires — dates, locations,
                vendors, maps. Because sometimes the niche project is the one
                people actually need. Built, maintained, and used by someone
                who goes to these things.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Approach ─── */}
      <section className="border-t border-white/5 bg-[#0F0F12]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
            How I work with people
          </div>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-space-grotesk leading-tight mb-10">
              <span className="block text-white">No tiers. No packages.</span>
              <span className="block text-[#2DD4BF]">Just a conversation.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-6">
              I don&apos;t sell plans. I don&apos;t have a &ldquo;Starter&rdquo;
              and a &ldquo;Pro&rdquo; and an &ldquo;Enterprise.&rdquo;
              That&apos;s not how building custom tools works, and pretending it
              does would be lying to you.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/50 leading-relaxed mb-6">
              Here&apos;s what happens instead: you tell me what you&apos;re
              trying to fix. The thing that&apos;s eating your time, the
              spreadsheet that&apos;s become a monster, the process you know
              could be automated but haven&apos;t gotten to. I tell you whether
              I can build it, how long it&apos;ll take, and what it&apos;ll
              cost. Then I build it.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-[#2DD4BF] text-lg font-medium mb-6">
              I run everything on my own business first.
              <br />
              If it works for me, it&apos;ll work for you.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Sometimes that means a week of work. Sometimes it means a month.
              Sometimes it means I tell you the thing you want isn&apos;t worth
              building and there&apos;s a simpler way. That happens more than
              you&apos;d think, and I&apos;d rather say that than sell you
              something you don&apos;t need.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-white/40 text-sm leading-relaxed">
              After it&apos;s built, you own it. The code, the configs, the keys.
              If you want me to maintain it, I will. If you want to take it
              in-house, it&apos;s yours. No lock-in, no licensing fees, no
              &ldquo;platform.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 sm:py-32 text-left">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-space-grotesk leading-tight mb-6">
              <span className="block text-white">Got something</span>
              <span className="block text-[#2DD4BF]">that needs building?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-10 max-w-lg">
              Email me. Tell me what you&apos;re trying to fix. I&apos;ll tell
              you if I can help — usually within a day.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <a
              href="mailto:joe@joestechsolutions.com"
              className="inline-flex items-center gap-2 text-2xl text-[#2DD4BF] hover:text-[#14b8a6] transition-colors font-medium group"
            >
              Let&apos;s talk
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-white/40 text-sm mt-6">
              Or just email me directly at{" "}
              <a
                href="mailto:joe@joestechsolutions.com"
                className="text-white/60 hover:text-[#2DD4BF] transition-colors underline underline-offset-2 decoration-white/20"
              >
                joe@joestechsolutions.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}