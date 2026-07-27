import { FadeIn } from "@/components/animations/FadeIn";

// Agency workflow vs JTS workflow — see the copy doc "The Difference" section.
const oldSteps = [
  "Discovery sprint",
  "Strategy deck",
  "Alignment sessions",
  "Team assigned",
  "PowerPoint delivered",
  "No working software",
];

const newSteps = [
  { label: "Tell me what's not working", ai: false },
  { label: "I build the fix", ai: false },
  { label: "Leave it running", ai: false },
];

export function WorkflowComparison() {
  return (
    <section className="relative py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              The difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-mono">
              The agency way vs my way.
            </h2>
          </div>
        </FadeIn>

        {/* Old workflow */}
        <FadeIn delay={0.1}>
          <div className="mb-6">
            <p className="text-foreground/50 text-sm font-medium mb-4 pl-1">The agency way</p>
            <div className="flex flex-wrap items-center gap-2">
              {oldSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-2 bg-card border border-foreground/10 rounded-lg text-sm text-foreground/60 whitespace-nowrap">
                    {step}
                  </span>
                  {i < oldSteps.length - 1 && (
                    <span className="text-foreground/20 text-lg select-none">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground/50 text-sm mt-3 pl-1">
              Six weeks in, you&apos;ve got a PowerPoint and no working software.
            </p>
          </div>
        </FadeIn>

        {/* New workflow */}
        <FadeIn delay={0.2}>
          <div>
            <p className="text-primary text-sm font-medium mb-4 pl-1">My way</p>
            <div className="flex flex-wrap items-center gap-2">
              {newSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-2 rounded-lg text-sm whitespace-nowrap border bg-primary/15 border-primary/40 text-primary">
                    {step.label}
                  </span>
                  {i < newSteps.length - 1 && (
                    <span className="text-foreground/20 text-lg select-none">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground/70 text-sm mt-3 pl-1">
              You&apos;ll see something working in days, not quarters. And the person you talked to is
              the person who built it.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
