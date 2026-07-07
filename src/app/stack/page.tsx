import type { Metadata } from "next";
import { lastUpdated, models, services, tools, stats } from "./data";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Database, Wrench, GitBranch, Brain, Cloud, Desktop } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "The Stack | Joe's Tech Solutions",
  description: "The actual AI infrastructure powering Joe's Tech Solutions — 14 AI agents, 21 cloud models, 6 services, 60K+ indexed code nodes. Updated live.",
  alternates: {
    canonical: '/stack',
  },
  openGraph: {
    title: "The Stack | Joe's Tech Solutions",
    description: "The actual AI infrastructure powering JTS — 14 AI agents, 21 cloud models, 6 services, 60K+ indexed code nodes.",
    url: 'https://www.joestechsolutions.com/stack',
  },
};

export default function StackPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[#0d0d12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1c1c26] border border-white/10 rounded-full text-[#2dd4bf] text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b7f73] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2dd4bf]" />
                </span>
                <span>Live infrastructure — updated {lastUpdated}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">The Stack.</span>
                <span className="block text-[#0d9488]">No Smoke.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                This isn&apos;t a list of tools I read about. This is what&apos;s running right now —
                the models, services, and infrastructure I use to build everything you see on this site.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <Card className="bg-[#1c1c26] border-white/10 text-center">
                  <CardContent className="pt-6 pb-6">
                    <div className="text-4xl font-bold text-[#0d9488] font-space-grotesk">{stat.value}</div>
                    <div className="text-sm text-white/60 mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Models */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center">
                <Cpu weight="duotone" className="h-8 w-8 text-[#0d9488]" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk">Models</h2>
                <p className="text-white/60 mt-1">24 Ollama Cloud models, routed by task type</p>
              </div>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {models.map((model) => (
              <StaggerItem key={model.name}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white font-space-grotesk">{model.name}</h3>
                          <p className="text-sm text-[#2dd4bf] mt-1">{model.provider}</p>
                        </div>
                        <Cloud weight="duotone" className="h-6 w-6 text-white/30 flex-shrink-0" />
                      </div>
                      <p className="text-white/70 text-sm mb-4">{model.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {model.capabilities.map((cap) => (
                          <span key={cap} className="px-3 py-1 bg-[#0b7f73]/10 border border-[#0d9488]/20 rounded-full text-xs text-[#2dd4bf] font-mono">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center">
                <Desktop weight="duotone" className="h-8 w-8 text-[#0d9488]" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk">Services</h2>
                <p className="text-white/60 mt-1">All running on a single WSL2 box, 127.0.0.1 only</p>
              </div>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.name}>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white font-space-grotesk">{service.name}</h3>
                      {service.port !== "—" && (
                        <span className="px-2.5 py-1 bg-[#0d0d12] border border-white/10 rounded font-mono text-xs text-[#2dd4bf]">
                          :{service.port}
                        </span>
                      )}
                    </div>
                    <p className="text-white/70 text-sm mb-3">{service.purpose}</p>
                    <p className="text-white/40 text-xs font-mono">{service.tech}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center">
                <Wrench weight="duotone" className="h-8 w-8 text-[#0d9488]" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk">Toolchain</h2>
                <p className="text-white/60 mt-1">What each layer does</p>
              </div>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {tools.map((tool) => (
              <StaggerItem key={tool.category}>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-bold text-[#0d9488] mb-4 font-space-grotesk">{tool.category}</h3>
                    <ul className="space-y-2">
                      {tool.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-[#2dd4bf] mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Brain weight="duotone" className="h-10 w-10 text-[#0d9488]" />
                <GitBranch weight="duotone" className="h-10 w-10 text-[#0d9488]" />
                <Database weight="duotone" className="h-10 w-10 text-[#0d9488]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk mb-6">
                How It Actually Works
              </h2>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                A message comes in via Telegram. Hermes (the orchestrator) reads it, decides what to do,
                and either handles it directly or delegates to a coding subagent running through the FCC proxy.
                MemPalace remembers everything across sessions. GitNexus maps the codebase so changes are
                surgical, not guesswork. All inference runs through Ollama Cloud — 24 models, no per-token costs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer note */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm text-white/40 font-mono">
              Config backed up to github.com/joblas/Lurkr-Jo-Blade-Hermes · Last sync: {lastUpdated}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}