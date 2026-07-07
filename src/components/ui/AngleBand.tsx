import { FadeIn } from "@/components/animations/FadeIn";

// Approved positioning angle — verbatim copy, do not paraphrase.
export function AngleBand() {
  return (
    <section className="relative py-16 sm:py-20 border-y border-white/5 bg-[#1c1c26]/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light text-center">
            Look around — businesses are automating scheduling, content, lead routing, project
            updates. It&apos;s not future talk, it&apos;s happening now. I build the same
            automations for JTS first, then ship them to clients. Same play, same stack, same 2am
            break I found for myself.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
