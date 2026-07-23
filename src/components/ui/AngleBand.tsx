import { FadeIn } from "@/components/animations/FadeIn";

// Approved positioning angle — verbatim copy, do not paraphrase.
export function AngleBand() {
  return (
    <section className="relative py-16 sm:py-20 border-y border-white/5 bg-[#1c1c26]/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light text-center">
            I test everything on myself first. 14 agents, 32 automations, all running 24/7 on my
            own infrastructure. If it doesn&apos;t survive me, it doesn&apos;t ship to you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
