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
    <div className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: start; }
          .numbers-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem; align-items: start; }
          .work-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem; align-items: start; }
          .how-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; }
        }
        .step-row { display: flex; gap: 2rem; }
        .step-num { flex-shrink: 0; width: 3rem; }
        .project-row { display: grid; gap: 2rem; }
        @media (min-width: 1024px) {
          .project-row { grid-template-columns: 1fr 1.5fr; align-items: start; }
          .project-row-reverse { grid-template-columns: 1.5fr 1fr; }
          .project-row-reverse .project-text { order: 2; }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="hero-grid">
            {/* Left: text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/35 font-medium">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                Joe&apos;s Tech Solutions
              </div>

              <FadeIn delay={0.1}>
                <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-[-0.02em] leading-[1.08] font-space-grotesk">
                  <span className="block text-white">Got something</span>
                  <span className="block text-white">you&apos;ve always </span>
                  <span className="block text-[#2DD4BF]">wanted to build?</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base sm:text-lg text-white/55 max-w-lg leading-[1.65] font-normal pt-2">
                  I&apos;m building stuff myself and learning as I go. It&apos;s
                  not as hard as people make it seem — anyone can do it. If
                  you&apos;ve got an idea, I&apos;ll help you get it going.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a
                  href="mailto:joe@joestechsolutions.com"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 mt-2 text-[15px] font-semibold text-[#0A0A0B] bg-[#2DD4BF] rounded-full hover:bg-[#14b8a6] transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
                >
                  Let&apos;s talk
                  <span aria-hidden="true">→</span>
                </a>
              </FadeIn>

              <p className="text-[13px] text-white/30 pt-1">
                Currently building — last shipped June 2026
              </p>
            </div>

            {/* Right: live counter */}
            <div className="lg:mt-8">
              <div className="border border-white/10 rounded-xl p-7 bg-[#0F0F12] hover:border-white/15 transition-colors">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium mb-5">
                  Running right now
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-white font-space-grotesk tracking-[-0.03em] leading-none">
                  16
                </div>
                <p className="text-white/45 mt-4 text-sm leading-[1.6]">
                  automated systems on my own business, running 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="numbers-grid">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium mb-5">
                The numbers
              </div>
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] font-space-grotesk leading-[1.1]">
                  <span className="block text-white">I don&apos;t just build</span>
                  <span className="block text-white">things. I run them.</span>
                  <span className="block text-[#2DD4BF] mt-1">Every day.</span>
                </h2>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <p className="text-white/55 text-base sm:text-lg leading-[1.65] font-light max-w-lg">
                  Everything I build for someone else, I test on my own business
                  first. If it breaks, I deal with it — not you.
                </p>
              </FadeIn>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#2DD4BF] font-space-grotesk tracking-[-0.03em] leading-none">
                    16
                  </div>
                  <p className="text-white/35 text-[13px] mt-2.5 leading-[1.5]">
                    systems running 24/7
                  </p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk tracking-[-0.03em] leading-none">
                    5+
                  </div>
                  <p className="text-white/35 text-[13px] mt-2.5 leading-[1.5]">
                    apps shipped and maintained
                  </p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk tracking-[-0.03em] leading-none">
                    365
                  </div>
                  <p className="text-white/35 text-[13px] mt-2.5 leading-[1.5]">
                    days a year — automated
                  </p>
                </div>
              </div>

              <p className="text-white/35 text-[13px] leading-[1.6] max-w-lg pt-2">
                Stuff running right now: content pipelines, data collection,
                daily briefings, monitoring. 16 systems, 24/7, on my own
                business. If something breaks at 2am, I&apos;m the one fixing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What I Build ─── */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium mb-5">
              What I build
            </div>
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] font-space-grotesk leading-[1.1] mb-8">
                <span className="text-white">Stuff that actually </span>
                <span className="text-[#2DD4BF]">gets used.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/55 text-base sm:text-lg leading-[1.65] font-light mb-6">
                Not dashboards nobody opens. Not reports nobody reads. Just
                tools that fit into how you already work.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-white/45 leading-[1.65] text-[15px] mb-6">
                Mostly falls into three buckets.{" "}
                <span className="text-white/80 font-medium">Automation</span> —
                taking the repetitive stuff off your plate.{" "}
                <span className="text-white/80 font-medium">Custom tools</span> —
                web apps, dashboards, that spreadsheet that should probably be
                its own thing.{" "}
                <span className="text-white/80 font-medium">Content pipelines</span>{" "}
                — systems that research and draft so you&apos;re not staring at a
                blank page every morning.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[#2DD4BF] text-base font-medium mb-8 leading-[1.5]">
                If it doesn&apos;t save you at least an hour a day, probably not
                worth building.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-white/35 text-[13px] leading-[1.65] max-w-2xl">
                Could be a single script that runs once a week. Could be a full
                system with dashboards, alerts, the works. Depends on what you
                need. Same approach either way: build it, run it on my business,
                fix what breaks, hand it over.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── How I Work ─── */}
      <section className="border-t border-white/[0.06] bg-[#0F0F12]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="how-grid">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium mb-5">
                How I work
              </div>
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] font-space-grotesk leading-[1.1]">
                  <span className="block text-white">I test everything</span>
                  <span className="block text-[#2DD4BF]">on myself first.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/45 text-base leading-[1.65] font-light mt-6 max-w-sm">
                  Before I build something for you, I build it for me. Run it,
                  break it, fix it. Then bring it to you.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "I build it for myself first",
                  body: "Every system gets built for my own business and run in production. If it breaks at 2am, I get the alert.",
                },
                {
                  num: "02",
                  title: "I figure out what's actually useful",
                  body: "Running things on myself tells me what matters versus what just looks good in a demo. Stuff that wastes time gets cut. Stuff that saves time gets kept.",
                },
                {
                  num: "03",
                  title: "I bring it to you",
                  body: "Once it works for me — not just on a good day, reliably — I adapt it for your business. Same patterns, just configured for what you need.",
                },
                {
                  num: "04",
                  title: "You own it",
                  body: "No black boxes. You get the code, the configs, the keys. Run it yourself if you want. Or I can keep running it for you. Either way, it's yours.",
                },
              ].map((step, i) => (
                <FadeIn key={step.num} delay={0.1 * (i + 1)}>
                  <div className="step-row">
                    <div className="step-num text-xl font-bold text-white/20 font-space-grotesk tracking-tight">
                      {step.num}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/45 leading-[1.6] text-[14px]">
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
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium mb-5">
            Recent work
          </div>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] font-space-grotesk leading-[1.1] mb-12">
              <span className="text-white">Things I&apos;ve </span>
              <span className="text-[#2DD4BF]">shipped.</span>
            </h2>
          </FadeIn>

          {/* Skate Workshop */}
          <FadeIn delay={0.1}>
            <div className="project-row py-7 border-t border-white/[0.06]">
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium">
                  Coaching platform
                </div>
                <h3 className="text-xl font-bold text-white font-space-grotesk tracking-[-0.01em]">
                  <Link href="#" className="hover:text-[#2DD4BF] transition-colors">
                    Skate Workshop
                  </Link>
                </h3>
                <p className="text-white/30 text-[12px]">Mobile app · In development</p>
              </div>
              <p className="text-white/55 leading-[1.65] text-[15px]">
                A coaching app for skateboarding instructors. Still building —
                lesson plans, student tracking, progress milestones. Not ready
                for users yet, but the architecture is real.
              </p>
            </div>
          </FadeIn>

          {/* Fairway Roll */}
          <FadeIn delay={0.2}>
            <div className="project-row project-row-reverse py-7 border-t border-white/[0.06]">
              <div className="project-text space-y-2">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium">
                  Map + discovery
                </div>
                <h3 className="text-xl font-bold text-white font-space-grotesk tracking-[-0.01em]">
                  <Link href="#" className="hover:text-[#2DD4BF] transition-colors">
                    Fairway Roll
                  </Link>
                </h3>
                <p className="text-white/30 text-[12px]">Web app · In development</p>
              </div>
              <p className="text-white/55 leading-[1.65] text-[15px]">
                A map-based app for finding skate spots and golf courses.
                Currently in development — not public yet. Two things that
                don&apos;t seem related until you meet the person who built it.
              </p>
            </div>
          </FadeIn>

          {/* RenFaire Directory */}
          <FadeIn delay={0.3}>
            <div className="project-row py-7 border-t border-b border-white/[0.06]">
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium">
                  Directory
                </div>
                <h3 className="text-xl font-bold text-white font-space-grotesk tracking-[-0.01em]">
                  <Link href="#" className="hover:text-[#2DD4BF] transition-colors">
                    RenFaire Directory
                  </Link>
                </h3>
                <p className="text-white/30 text-[12px]">Web app · Live</p>
              </div>
              <p className="text-white/55 leading-[1.65] text-[15px]">
                A directory of Renaissance Faires — dates, locations, vendors,
                maps. The niche project that actually gets traffic. Live and
                serving visitors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Approach ─── */}
      <section className="border-t border-white/[0.06] bg-[#0F0F12]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-medium mb-5">
            How I work with people
          </div>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] font-space-grotesk leading-[1.1] mb-8">
              <span className="block text-white">No tiers. No packages.</span>
              <span className="block text-[#2DD4BF]">Just tell me what you need.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/55 text-base sm:text-lg leading-[1.65] font-light mb-6">
              I don&apos;t sell plans. No &ldquo;Starter&rdquo; and
              &ldquo;Pro&rdquo; tiers. Just tell me what you&apos;re trying to
              fix and we go from there.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/45 leading-[1.65] text-[15px] mb-6">
              The thing eating your time. The spreadsheet that became a monster.
              The process you know could be automated. Tell me about it — I&apos;ll
              tell you if I can build it, how long it&apos;ll take, and what it
              costs. Then we build it.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-[#2DD4BF] text-base font-medium mb-6 leading-[1.5]">
              I run everything on my own business first. If it works for me,
              it&apos;ll work for you.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-white/35 text-[13px] leading-[1.65] mb-6">
              Sometimes it takes a week. Sometimes a month. Sometimes I tell you
              it&apos;s not worth building and there&apos;s an easier way.
              Happens more than you&apos;d think.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-white/35 text-[13px] leading-[1.65]">
              When it&apos;s done, you own it. Code, configs, keys. I can keep
              running it for you or you take it in-house. No lock-in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-left">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] font-space-grotesk leading-[1.1] mb-5">
              <span className="block text-white">So what do you</span>
              <span className="block text-[#2DD4BF]">want to build?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/55 text-base sm:text-lg leading-[1.65] font-light mb-8 max-w-lg">
              Email me. Tell me what you&apos;re thinking. I&apos;ll let you know
              if I can help — usually within a day.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <a
              href="mailto:joe@joestechsolutions.com"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-[#0A0A0B] bg-[#2DD4BF] rounded-full hover:bg-[#14b8a6] transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
            >
              Let&apos;s talk
              <span aria-hidden="true">→</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-white/35 text-[13px] mt-6">
              Or just email me directly at{" "}
              <a
                href="mailto:joe@joestechsolutions.com"
                className="text-white/55 hover:text-[#2DD4BF] transition-colors underline underline-offset-2 decoration-white/20"
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