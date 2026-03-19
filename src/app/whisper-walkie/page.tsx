import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  ExternalLink,
  CheckCircle,
  Shield,
  Mic,
  Zap,
  Monitor,
  Globe,
  Lock,
  Cpu,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "Whisper Walkie — Local Push-to-Talk Transcription | Joe's Tech Solutions",
  description:
    "Hold a key. Speak. Release. Your words appear in any app — instantly, privately, with no internet connection required. Free and open source.",
  alternates: {
    canonical: "/whisper-walkie",
  },
  openGraph: {
    title: "Whisper Walkie — Local Push-to-Talk Transcription",
    description:
      "Hold a key. Speak. Release. Your words appear in any app — instantly, privately, with no internet connection required. Free and open source.",
    url: "https://joestechsolutions.com/whisper-walkie",
  },
};

const GITHUB_REPO = "https://github.com/joestechsolutions/whisper-walkie";
const GITHUB_RELEASES = "https://github.com/joestechsolutions/whisper-walkie/releases/latest";

const otherToolsProblems = [
  "Cloud required — audio uploaded to their servers",
  "Monthly fees that add up over time",
  "Locked to a single application",
  "Account and login required",
  "Always listening in the background",
];

const whisperwalkieBenefits = [
  "100% local — audio never leaves your machine",
  "Free forever — no subscriptions, no fees",
  "Works in any application on your OS",
  "No account, no login, no tracking",
  "Push-to-talk — only records when you hold the key",
];

const features = [
  {
    icon: Lock,
    title: "100% Local",
    description: "Audio is transcribed entirely on your device using faster-whisper. Nothing is sent to any server, ever.",
    accent: "#0EA5E9",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Browser, Slack, VS Code, Word, games — if your OS can focus it, Whisper Walkie can type into it.",
    accent: "#06B6D4",
  },
  {
    icon: Cpu,
    title: "GPU Accelerated",
    description: "CUDA support on Windows and Linux for near-instant transcription. Falls back to CPU automatically.",
    accent: "#0EA5E9",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description: "Native support for Windows, macOS, and Linux. One codebase, three platforms, zero compromises.",
    accent: "#06B6D4",
  },
  {
    icon: Mic,
    title: "Push-to-Talk",
    description: "Hold Right Alt (customizable), speak, release. It only records when you tell it to — total control.",
    accent: "#0EA5E9",
  },
  {
    icon: Shield,
    title: "Open Source",
    description: "MIT licensed. Read every line of code. Fork it, modify it, ship it. Free now and always.",
    accent: "#06B6D4",
  },
];

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    formats: [".exe installer", "Portable .zip"],
    note: "CUDA GPU acceleration supported",
    accent: "#0EA5E9",
  },
  {
    name: "macOS",
    icon: Monitor,
    formats: [".zip download"],
    note: "Requires Accessibility permissions",
    accent: "#06B6D4",
  },
  {
    name: "Linux",
    icon: Monitor,
    formats: [".tar.gz download"],
    note: "X11 fully supported; Wayland experimental",
    accent: "#0EA5E9",
  },
];

export default function WhisperWalkiePage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[100px] animate-glow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <FadeIn delay={0.05}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Joe&apos;s Tech Solutions
            </Link>
          </FadeIn>

          <div className="mx-auto max-w-4xl text-center space-y-10">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1c1c26] border border-white/10 rounded-full text-[#0EA5E9] text-sm font-medium backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full" aria-hidden="true" />
                Open Source &middot; Privacy First
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Whisper Walkie</span>
                <span className="block bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">
                  Your voice, your machine.
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Nothing leaves.
              </p>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.25}>
              <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Hold a hotkey, speak naturally, release. The transcribed text types directly into whatever
                window has focus — no clipboard, no cloud, no account. Whisper AI runs entirely on your
                machine.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={GITHUB_RELEASES} target="_blank" rel="noopener noreferrer">
                  <MagneticButton strength={0.2}>
                    <Button
                      size="lg"
                      className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-10 py-7 rounded-full group shadow-lg shadow-[#0EA5E9]/20 transition-all"
                    >
                      <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                      Download Free
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </MagneticButton>
                </a>
                <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" aria-hidden="true" />
                    View Source
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">
                Simple by design
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                How It Works
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                Three seconds from voice to text in any application on your computer.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 relative" staggerDelay={0.12}>
            {/* Connector line — visible on md+ */}
            <div className="hidden md:block absolute top-[2.75rem] left-[calc(16.667%+1.5rem)] right-[calc(16.667%+1.5rem)] h-px bg-gradient-to-r from-[#0EA5E9]/40 via-[#06B6D4]/40 to-transparent pointer-events-none" />

            {[
              {
                step: "01",
                icon: Mic,
                label: "Hold",
                description: "Press and hold the push-to-talk hotkey (default: Right Alt). The app starts recording immediately.",
                color: "#0EA5E9",
                shadowColor: "rgba(14,165,233,0.25)",
              },
              {
                step: "02",
                icon: Zap,
                label: "Speak",
                description: "Talk naturally into your microphone for as long as you need. No time limit, no wake word.",
                color: "#06B6D4",
                shadowColor: "rgba(6,182,212,0.25)",
              },
              {
                step: "03",
                icon: Monitor,
                label: "Done",
                description: "Release the key. Whisper transcribes locally and types the text directly into your focused window.",
                color: "#0EA5E9",
                shadowColor: "rgba(14,165,233,0.25)",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/40 transition-all duration-500 text-center h-full p-8 relative group">
                    {/* Step number circle */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-space-grotesk text-xl font-bold mx-auto mb-6 border-2 transition-shadow duration-300 group-hover:shadow-[0_0_40px_var(--step-glow)]"
                      style={{
                        backgroundColor: `${item.color}18`,
                        color: item.color,
                        borderColor: `${item.color}50`,
                        // @ts-expect-error — css variable
                        "--step-glow": item.shadowColor,
                      }}
                    >
                      {item.step}
                    </div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-space-grotesk mb-3">{item.label}</h3>
                    <p className="text-white/60 leading-relaxed max-w-[240px] mx-auto">{item.description}</p>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Comparison ────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">
                Why switch
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Why Whisper Walkie
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                Most voice tools trade your privacy for convenience. You should not have to choose.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Other tools — muted/negative */}
            <FadeIn delay={0.1} direction="right">
              <Card className="bg-[#1c1c26]/60 border-white/10 h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/30">Other Voice Tools</span>
                    <h3 className="text-xl font-bold text-white/50 font-space-grotesk mt-1">The trade-offs you accept</h3>
                  </div>
                  <ul className="space-y-4" role="list">
                    {otherToolsProblems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-400/70 bg-red-500/10 border border-red-500/20"
                          aria-hidden="true"
                        >
                          ✕
                        </span>
                        <span className="text-white/40 leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Whisper Walkie — positive */}
            <FadeIn delay={0.2} direction="left">
              <Card className="bg-gradient-to-br from-[#0EA5E9]/8 via-[#1c1c26] to-[#06B6D4]/8 border-[#0EA5E9]/25 hover:border-[#0EA5E9]/50 transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">Whisper Walkie</span>
                    <h3 className="text-xl font-bold text-white font-space-grotesk mt-1">What you actually get</h3>
                  </div>
                  <ul className="space-y-4" role="list">
                    {whisperwalkieBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle
                          className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#06B6D4]"
                          aria-hidden="true"
                        />
                        <span className="text-white/80 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Features Grid ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-32 bg-[#1c1c26]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">
                What&apos;s inside
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Features
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                Everything you need. Nothing you don&apos;t.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/40 transition-all duration-500 h-full group">
                    <CardContent className="p-6 sm:p-8 space-y-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${feature.accent}15` }}
                      >
                        <feature.icon
                          className="w-6 h-6"
                          style={{ color: feature.accent }}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white font-space-grotesk">{feature.title}</h3>
                      <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Download ──────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">
                Get started
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Download
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                Whisper AI model is bundled — no internet needed after download.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {platforms.map((platform) => (
              <StaggerItem key={platform.name}>
                <AnimatedCard>
                  <a
                    href={GITHUB_RELEASES}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`Download Whisper Walkie for ${platform.name}`}
                  >
                    <Card
                      className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 h-full group cursor-pointer"
                    >
                      <CardContent className="p-8 text-center space-y-5">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${platform.accent}15` }}
                        >
                          <Monitor
                            className="w-7 h-7"
                            style={{ color: platform.accent }}
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white font-space-grotesk">{platform.name}</h3>
                        <ul className="space-y-1" role="list">
                          {platform.formats.map((format) => (
                            <li key={format} className="text-white/60 text-sm">{format}</li>
                          ))}
                        </ul>
                        <p className="text-xs text-white/40 leading-relaxed">{platform.note}</p>
                        <div
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                          style={{ color: platform.accent }}
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                          Download
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="text-center text-sm text-white/40 mt-8">
              All downloads on{" "}
              <a
                href={GITHUB_RELEASES}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0EA5E9] hover:underline"
              >
                GitHub Releases
              </a>
              . Whisper AI model bundled — no internet needed after download.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Built with AI ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-32 bg-[#1c1c26]/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-6">
              Human + AI collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              Built with AI
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-2xl mx-auto">
              This entire app was built through human-AI collaboration with Claude by Anthropic.
              The architecture, the cross-platform backend, the GUI — all designed and iterated through
              a tight loop between a developer who knew what the app needed to do and an AI that could
              help ship it faster without cutting corners.
            </p>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl mx-auto mb-8">
              That is not a disclaimer — it is the point. AI-assisted development lets a single developer
              build and maintain production-quality, cross-platform software that would otherwise require
              a team. Whisper Walkie is a working proof of that model.
            </p>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0EA5E9] hover:text-[#38bdf8] font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Read the source on GitHub
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        {/* Blobs */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0EA5E9] rounded-full blur-[130px] animate-glow" />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#06B6D4] rounded-full blur-[110px] animate-glow"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-space-grotesk">
              Try Whisper Walkie Today
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xl text-white/70 mb-10 font-light">
              Free. Private. Works in any app.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={GITHUB_RELEASES} target="_blank" rel="noopener noreferrer">
                <MagneticButton strength={0.25}>
                  <Button
                    size="lg"
                    className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-10 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30 transition-all"
                  >
                    <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                    Download Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </MagneticButton>
              </a>
              <a href={`${GITHUB_REPO}/stargazers`} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-full border-white/20 hover:bg-white/5 hover:border-white/30 backdrop-blur-sm transition-all"
                >
                  Star on GitHub
                </Button>
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-8 text-white/30 text-sm">
              MIT License &middot; No account required &middot; Audio never leaves your machine
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
