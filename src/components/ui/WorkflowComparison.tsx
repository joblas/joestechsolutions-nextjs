import { FadeIn } from "@/components/animations/FadeIn";

// ponytail: static data, not props — one use case, one place
const oldSteps = [
  "Research trends manually",
  "Write outline",
  "Draft from scratch",
  "Editor reviews",
  "Find images",
  "Final review",
  "Publish",
];

const newSteps = [
  { label: "AI researches trends", ai: true },
  { label: "AI generates first draft", ai: true },
  { label: "Human refines + fact-checks", ai: false },
  { label: "AI generates images", ai: true },
  { label: "Review + publish", ai: false },
];

export function WorkflowComparison() {
  return (
    <section className="relative py-20 sm:py-24 bg-[#0d0d12]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[#2dd4bf] text-sm font-semibold uppercase tracking-wider mb-3">
              Before &amp; after
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk">
              One step becomes five. Five becomes two.
            </h2>
          </div>
        </FadeIn>

        {/* Old workflow */}
        <FadeIn delay={0.1}>
          <div className="mb-6">
            <p className="text-white/50 text-sm font-medium mb-4 pl-1">Old workflow</p>
            <div className="flex flex-wrap items-center gap-2">
              {oldSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-2 bg-[#1c1c26] border border-white/10 rounded-lg text-sm text-white/60 whitespace-nowrap">
                    {step}
                  </span>
                  {i < oldSteps.length - 1 && (
                    <span className="text-white/20 text-lg select-none">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* New workflow */}
        <FadeIn delay={0.2}>
          <div>
            <p className="text-[#2dd4bf] text-sm font-medium mb-4 pl-1">
              With AI <span className="text-white/30">— teal steps are automated</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {newSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap border ${
                      step.ai
                        ? "bg-[#0d9488]/15 border-[#0d9488]/40 text-[#2dd4bf]"
                        : "bg-[#1c1c26] border-white/10 text-white/80"
                    }`}
                  >
                    {step.ai && <span className="mr-1.5 text-[10px]">●</span>}
                    {step.label}
                  </span>
                  {i < newSteps.length - 1 && (
                    <span className="text-white/20 text-lg select-none">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}