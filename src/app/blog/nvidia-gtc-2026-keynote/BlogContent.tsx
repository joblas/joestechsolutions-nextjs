"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Callout } from "@/components/blog/Callout";
import { StatBlock } from "@/components/blog/StatBlock";
import { TableOfContents } from "@/components/blog/TableOfContents";

const tocItems = [
  { id: "tool-to-worker", label: "AI: From \"Tool\" to \"Worker\"" },
  { id: "new-hardware", label: "The New Hardware" },
  { id: "ai-agents", label: "AI Agents: Digital Employees" },
  { id: "robots", label: "Robots Are No Longer Science Fiction" },
  { id: "reality-check", label: "The Reality Check" },
  { id: "what-this-means", label: "What This Means for Your Business" },
];

export function BlogContent() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose-blog space-y-8">
          {/* Table of Contents */}
          <FadeIn delay={0.1}>
            <TableOfContents items={tocItems} />
          </FadeIn>

          {/* Intro */}
          <FadeIn delay={0.15}>
            <p className="lead text-gray-200 text-xl sm:text-2xl leading-loose mb-8">
              NVIDIA&apos;s CEO Jensen Huang just gave a 2-hour presentation that felt less like a tech conference
              and more like a look into the future. GTC 2026 was packed with 18,000 people, 110 robots, and a walking,
              talking Olaf from Frozen on stage. But behind the spectacle was a clear message: AI is about to get a lot
              cheaper, a lot faster, and a lot more independent.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              Here&apos;s what you need to know, even if you&apos;re not an engineer.
            </p>
          </FadeIn>

          {/* Stats block */}
          <StatBlock
            stats={[
              { value: 18, suffix: "K", label: "Attendees", color: "from-[#10B981]/10 to-transparent" },
              { value: 110, suffix: "", label: "Robots on Show Floor", color: "from-[#059669]/10 to-transparent" },
              { value: 10, suffix: "x", label: "Cost Reduction (Vera Rubin)", color: "from-emerald-500/10 to-transparent" },
              { value: 700, suffix: "M", label: "Tokens/sec", color: "from-[#10B981]/10 to-transparent" },
            ]}
          />

          {/* Tool to Worker */}
          <FadeIn>
            <h2 id="tool-to-worker" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">
              The Biggest Takeaway: AI is Going From &ldquo;Tool&rdquo; to &ldquo;Worker&rdquo;
            </h2>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              For the past few years, AI has mostly been something you ask questions to. You type a prompt, it gives you
              an answer. Think ChatGPT, image generators, voice assistants.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Jensen is saying that era is ending. The next phase is AI that works on its own, all day, every day,
              without waiting for you to tell it what to do. He calls it &ldquo;machine-hour computing.&rdquo; Instead of AI
              that responds when you poke it, imagine AI that monitors your business, handles customer questions,
              processes orders, and flags problems — while you sleep.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              That&apos;s the bet NVIDIA is making. And they&apos;re backing it up with some serious hardware.
            </p>
          </FadeIn>

          {/* New Hardware */}
          <FadeIn>
            <h2 id="new-hardware" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">
              The New Hardware: Faster, Cheaper, Smarter
            </h2>
          </FadeIn>

          {/* Vera Rubin */}
          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-4 font-space-grotesk">
              Vera Rubin (Shipping Late 2026)
            </h3>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              The main announcement was a new platform called Vera Rubin. Without getting too deep into the specs,
              here&apos;s what matters: it makes running AI <strong className="text-white">10 times cheaper</strong> than
              the current generation.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              That&apos;s a big deal. A lot of businesses have looked at AI and thought, &ldquo;Cool, but too expensive
              for us.&rdquo; When costs drop by 10x, the math changes completely. AI tools that only made sense for Google
              and Microsoft suddenly become realistic for mid-size companies.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              It&apos;s also significantly faster, pushing out 700 million tokens per second. In plain English: AI
              responses get quicker, and you can serve way more users at the same time.
            </p>
          </FadeIn>

          <Callout variant="insight">
            When AI inference costs drop 10x, the ROI equation changes for every business.
            What wasn&apos;t affordable six months ago might work now — and will definitely work in a year.
          </Callout>

          {/* Groq 3 */}
          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-4 font-space-grotesk">
              Groq 3: The Speed Chip
            </h3>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              NVIDIA also showed off the first product from their $20 billion acquisition of a company called Groq.
              The Groq 3 chip is built for one thing: making AI respond almost instantly.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              If you&apos;ve ever used an AI chatbot that takes a few seconds to start typing, that delay is what Groq
              is designed to eliminate. For businesses building customer-facing AI, that speed difference is the gap
              between &ldquo;this feels like talking to a robot&rdquo; and &ldquo;this feels natural.&rdquo;
            </p>
          </FadeIn>

          {/* Feynman */}
          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-4 font-space-grotesk">
              Feynman: What&apos;s Coming in 2028
            </h3>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Looking ahead, NVIDIA previewed their 2028 architecture called Feynman. It uses some genuinely futuristic
              tech — like sending data between chips using light instead of wires, and stacking chip layers in 3D for the
              first time in a GPU.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              The practical takeaway: NVIDIA has a clear roadmap through 2028, which means businesses investing in AI
              today won&apos;t hit a dead end. The technology keeps getting better on a predictable schedule.
            </p>
          </FadeIn>

          {/* AI Agents */}
          <FadeIn>
            <h2 id="ai-agents" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">
              AI Agents: Your Future Digital Employees
            </h2>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              One of the most interesting announcements was NemoClaw, NVIDIA&apos;s platform for building AI agents that
              can actually <em>do</em> things — not just answer questions.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Think of it this way: instead of an AI chatbot that tells you how to file an expense report, imagine an AI
              agent that files it for you. Instead of an AI that summarizes your emails, one that drafts the replies,
              schedules the meetings, and follows up on action items.
            </p>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              NVIDIA is building the infrastructure to make that possible at an enterprise level, with built-in security
              and privacy controls so businesses can trust these agents with sensitive work.
            </p>
          </FadeIn>

          <Callout variant="warning">
            <p className="mb-0">
              Jensen put it simply: <em>&ldquo;Every single company in the world today has to have an agent strategy.&rdquo;</em>
              <br /><br />
              Whether or not you agree with the timeline, the direction is clear.
            </p>
          </Callout>

          {/* Robots */}
          <FadeIn>
            <h2 id="robots" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">
              Robots Are No Longer Science Fiction
            </h2>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              GTC had 110 robots on the show floor, and these weren&apos;t just cool demos. Real companies are
              deploying them:
            </p>
          </FadeIn>

          <FadeIn>
            <ul className="space-y-3 mb-10 text-gray-200 text-lg leading-loose">
              <li><strong className="text-white">Uber</strong> announced they&apos;ll integrate self-driving taxis powered by NVIDIA&apos;s platform</li>
              <li><strong className="text-white">BYD, Hyundai, and Nissan</strong> signed on for autonomous driving tech</li>
              <li><strong className="text-white">Johnson &amp; Johnson</strong> is using NVIDIA-powered systems for surgical robotics</li>
              <li><strong className="text-white">Disney</strong> had Olaf from Frozen literally walking around the stage, powered by NVIDIA&apos;s physics engine</li>
            </ul>
          </FadeIn>

          <Callout variant="insight">
            The gap between &ldquo;robots in a lab&rdquo; and &ldquo;robots in your world&rdquo; is shrinking fast.
          </Callout>

          {/* Reality Check */}
          <FadeIn>
            <h2 id="reality-check" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">
              The Reality Check
            </h2>
            <p className="text-gray-200 text-lg leading-loose mb-6">
              Not everything is hype. Here&apos;s the honest assessment:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="space-y-5 my-10">
              {[
                {
                  title: "Wall Street wasn't impressed.",
                  color: "amber",
                  desc: "Despite all the announcements, NVIDIA's stock barely moved. Some analysts pointed out that the $1 trillion revenue projection through 2027 only represents about 7% more than what was already expected. The market had already priced in a lot of this growth.",
                },
                {
                  title: "The gaming community pushed back.",
                  color: "amber",
                  desc: "NVIDIA's new graphics technology (DLSS 5) uses AI to generate game visuals, and some developers are worried it'll replace human artists. The demo also required two of NVIDIA's most expensive graphics cards running simultaneously — not exactly consumer-friendly yet.",
                },
                {
                  title: "Manufacturing risks are real.",
                  color: "red",
                  desc: "The 2028 Feynman chip requires manufacturing technology that doesn't exist at scale yet. Timelines could slip.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`border rounded-xl p-6 ${
                    item.color === "amber"
                      ? "border-amber-500/20 bg-amber-500/5"
                      : "border-red-500/20 bg-red-500/5"
                  }`}
                >
                  <h4 className={`text-base font-bold mb-2 ${
                    item.color === "amber" ? "text-amber-300" : "text-red-300"
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm mb-0 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              These aren&apos;t dealbreakers, but they&apos;re worth keeping in mind. The direction is right; the
              execution still has to happen.
            </p>
          </FadeIn>

          {/* What This Means */}
          <FadeIn>
            <h2 id="what-this-means" className="pt-16 text-white text-3xl sm:text-4xl font-bold mb-6">
              What This Means for Your Business
            </h2>
            <p className="text-gray-200 text-lg leading-loose mb-8">
              You don&apos;t need to buy NVIDIA hardware to benefit from these trends. Here&apos;s what to think about:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6 mb-10">
              <div className="border border-[#10B981]/20 bg-[#10B981]/5 rounded-xl p-6">
                <h4 className="text-[#10B981] font-bold text-lg mb-2">1. Revisit your AI budget.</h4>
                <p className="text-gray-200 text-base leading-loose mb-0">
                  If you&apos;ve looked at AI tools before and the cost didn&apos;t make sense, prices are dropping fast.
                  What wasn&apos;t affordable six months ago might work now, and will definitely work in a year.
                </p>
              </div>
              <div className="border border-[#10B981]/20 bg-[#10B981]/5 rounded-xl p-6">
                <h4 className="text-[#10B981] font-bold text-lg mb-2">2. Think about &ldquo;always-on&rdquo; AI.</h4>
                <p className="text-gray-200 text-base leading-loose mb-0">
                  Where in your business do you have people doing repetitive monitoring, triage, or processing? Those are
                  the first candidates for AI agents that work around the clock.
                </p>
              </div>
              <div className="border border-[#10B981]/20 bg-[#10B981]/5 rounded-xl p-6">
                <h4 className="text-[#10B981] font-bold text-lg mb-2">3. Don&apos;t sleep on edge AI.</h4>
                <p className="text-gray-200 text-base leading-loose mb-0">
                  If your business has physical locations (stores, warehouses, clinics, job sites), NVIDIA&apos;s new edge
                  platform means you can run AI directly on-site for real-time decision making — no cloud connection required.
                </p>
              </div>
              <div className="border border-[#10B981]/20 bg-[#10B981]/5 rounded-xl p-6">
                <h4 className="text-[#10B981] font-bold text-lg mb-2">4. Start small, but start now.</h4>
                <p className="text-gray-200 text-base leading-loose mb-0">
                  You don&apos;t need a million-dollar AI strategy. Start with one workflow, one agent, one process. The
                  companies that experiment now will be ready when the technology hits its stride.
                </p>
              </div>
            </div>
          </FadeIn>

          <Callout variant="insight">
            <p className="mb-0">
              The AI infrastructure wave is here. It&apos;s getting cheaper, faster, and more accessible every quarter.
              The question isn&apos;t whether your business will use AI. It&apos;s whether you&apos;ll be early enough
              to gain an advantage.
            </p>
          </Callout>
        </div>
      </div>
    </section>
  );
}
