"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowRight, CaretDown, Check, Briefcase, ShieldCheck, Rocket, HardDrive, GitBranch, CalendarCheck, CheckCircle, Robot, Desktop, CurrencyDollarSimple, Cloud, Globe, Wrench } from "@phosphor-icons/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { privateAiFaqs } from "./faqs";
import { twMerge } from 'tailwind-merge';

// FAQ data
const faqs = privateAiFaqs;

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#0EA5E9] transition-colors font-space-grotesk">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <CaretDown className="h-5 w-5 text-white/60" weight="bold" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/70 leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PrivateAISetup() {
  const handleGetStarted = (type: "local" | "cloud" | "managed") => {
    window.location.href = `/private-ai-setup/qualify?type=${type}`;
  };

  const calendlyLink = "https://calendly.com/joe-joestechsolutions/30-minute-discovery-call";

  const HeroBlob = ({ className }: { className?: string }) => (
    <div className={twMerge("absolute rounded-full blur-[130px] opacity-0 animate-blob-show pointer-events-none", className)}></div>
  );

  const StatCell = ({ value, label, note, colorClass, delay }: { value: string; label: string; note: string; colorClass: string; delay: number }) => (
    <FadeIn delay={delay} className="flex-1 text-center py-5 px-4 relative after:absolute after:top-[20%] after:right-0 after:h-[60%] after:w-[1px] after:bg-white/20 last:after:hidden md:after:block max-md:after:hidden even:max-md:after:hidden max-sm:after:block max-sm:even:after:hidden">
      <div className={twMerge("font-space-grotesk text-5xl font-bold leading-none tracking-[-0.03em] mb-1", colorClass)}>
        {value}
      </div>
      <div className="text-lg font-semibold text-white/80 mb-0.5">{label}</div>
      <div className="text-sm text-white/40">{note}</div>
    </FadeIn>
  );

  const PersonaCard = ({ icon: Icon, pillColorClass, pillText, title, role, description }: { icon: React.ElementType; pillColorClass: string; pillText: string; title: string; role: string; description: string }) => (
    <StaggerItem>
      <AnimatedCard>
        <Card className="bg-[#1c1c26] border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-transform duration-300 hover:translate-y-[-7px] hover:border-[#0EA5E9]/30">
          <div className={twMerge("absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl", pillColorClass === 'pill-blue' ? 'bg-gradient-to-r from-[#0EA5E9] to-[#38bdf8]' : pillColorClass === 'pill-cyan' ? 'bg-gradient-to-r from-[#06B6D4] to-[#67e8f9]' : 'bg-gradient-to-r from-[#8B5CF6] to-[#c4b5fd]')} />
          <div className="w-13 h-13 rounded-xl flex items-center justify-center text-xl mb-6" style={{ background: pillColorClass === 'pill-blue' ? 'rgba(14,165,233,0.08)' : pillColorClass === 'pill-cyan' ? 'rgba(6,182,212,0.08)' : 'rgba(139,92,246,0.08)', color: pillColorClass === 'pill-blue' ? '#0EA5E9' : pillColorClass === 'pill-cyan' ? '#06B6D4' : '#8B5CF6', border: pillColorClass === 'pill-blue' ? '1px solid rgba(14,165,233,0.2)' : pillColorClass === 'pill-cyan' ? '1px solid rgba(6,182,212,0.2)' : '1px solid rgba(139,92,246,0.2)' }}>
            <Icon weight="duotone" />
          </div>
          <div className={twMerge("inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3")}
            style={{ background: pillColorClass === 'pill-blue' ? 'rgba(14,165,233,0.12)' : pillColorClass === 'pill-cyan' ? 'rgba(6,182,212,0.12)' : 'rgba(139,92,246,0.12)', color: pillColorClass === 'pill-blue' ? '#0EA5E9' : pillColorClass === 'pill-cyan' ? '#06B6D4' : '#8B5CF6', border: pillColorClass === 'pill-blue' ? '1px solid rgba(14,165,233,0.25)' : pillColorClass === 'pill-cyan' ? '1px solid rgba(6,182,212,0.25)' : '1px solid rgba(139,92,246,0.25)' }}>
            {pillText}
          </div>
          <h3 className="text-xl font-bold text-white font-space-grotesk mb-0.5">{title}</h3>
          <p className="text-sm text-white/40 font-medium mb-4">{role}</p>
          <p className="text-base text-white/60 leading-relaxed">{description}</p>
        </Card>
      </AnimatedCard>
    </StaggerItem>
  );

  const verticals = [
    { icon: ShieldCheck, title: "Healthcare", desc: "HIPAA-aware medical AI" },
    { icon: Briefcase, title: "Legal", desc: "Attorney-privilege safe" },
    { icon: CurrencyDollarSimple, title: "Financial", desc: "Client data protection" },
    { icon: Globe, title: "Real Estate", desc: "Listings & comps AI" },
    { icon: ShieldCheck, title: "Therapy", desc: "Clinical documentation" },
    { icon: Desktop, title: "Education", desc: "FERPA-safe learning AI" },
    { icon: Wrench, title: "Construction", desc: "Bids & specs AI" },
    { icon: Rocket, title: "Creative", desc: "IP-safe content AI" },
    { icon: Robot, title: "Small Business", desc: "Team productivity AI" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center py-40 sm:py-32 lg:py-40 bg-gradient-to-b from-[#0A1628] via-[#0d0d12] to-[#0d0d12] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBlob className="w-[640px] h-[640px] bg-gradient-to-br from-[#0EA5E9]/20 to-transparent top-[-180px] left-[-80px] animate-blob-drift-a" />
          <HeroBlob className="w-[520px] h-[520px] bg-gradient-to-br from-[#06B6D4]/18 to-transparent top-[100px] right-[-160px] animate-blob-drift-b animation-delay-1000" />
          <HeroBlob className="w-[420px] h-[420px] bg-gradient-to-br from-[#8B5CF6]/14 to-transparent bottom-[-80px] left-[35%] animate-blob-drift-c animation-delay-2000" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-6">
                <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full animate-pulse" />
                <span className="text-[#0EA5E9] font-medium text-sm tracking-wider uppercase">Private AI — Built for Your Business</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold tracking-tight font-space-grotesk leading-tight">
                <span className="block text-white mb-3">Your AI.</span>
                <span className="block bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">Your Data. Your Rules.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                Deploy GPT-4 level intelligence on your own hardware. No monthly API fees, no data harvesting, no compromises.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <MagneticButton strength={0.3}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:from-[#0284c7] hover:to-[#0891b2] text-white text-lg px-8 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30 font-space-grotesk font-semibold"
                  >
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                      <CalendarCheck weight="duotone" className="mr-2 h-5 w-5" />
                      Schedule Discovery Call
                    </a>
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-[#1c1c26]/50 border-white/20 hover:border-[#0EA5E9]/50 text-white hover:text-[#0EA5E9] text-lg px-8 py-7 rounded-full group shadow-2xl shadow-transparent hover:shadow-[#0EA5E9]/10 font-space-grotesk font-semibold transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href="#pricing">
                      See Pricing
                      <CaretDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={0.4} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <CaretDown weight="bold" className="h-4 w-4" />
        </FadeIn>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#1c1c26] border-y border-white/10 py-12 -mt-20 relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 max-sm:divide-x-0 max-sm:divide-y">
            <StatCell value="100%" label="Private" note="Data never leaves your hardware" colorClass="text-[#0EA5E9]" delay={0.1} />
            <StatCell value="$0" label="API Fees" note="No per-query charges ever" colorClass="text-[#06B6D4]" delay={0.2} />
            <StatCell value="1 cmd" label="Install" note="Running in under 5 minutes" colorClass="text-[#8B5CF6]" delay={0.3} />
            <StatCell value="9" label="Industries" note="Tailored starter kits" colorClass="text-[#10B981]" delay={0.4} />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* Who It's For Section */}
      <section className="relative py-24 sm:py-32" id="who-its-for">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Who It&apos;s For</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                Built for People Who Value<br />
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">Real Ownership</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you&apos;re protecting business data or just refusing to feed Big Tech — this is your solution.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            <PersonaCard
              icon={Briefcase}
              pillColorClass="pill-blue"
              pillText="Business Owner"
              title="Keep Your Edge Private"
              role="For small & mid-size businesses"
              description="Automate customer support, generate leads, and streamline documentation — without sharing sensitive business data with Big Tech platforms."
            />
            <PersonaCard
              icon={ShieldCheck}
              pillColorClass="pill-cyan"
              pillText="Privacy Advocate"
              title="Zero Data Collection"
              role="For privacy-conscious individuals"
              description="ChatGPT-level capability, directly on your hardware. No telemetry, no model training on your conversations. Your interactions are truly yours."
            />
            <PersonaCard
              icon={Rocket}
              pillColorClass="pill-violet"
              pillText="Early Adopter"
              title="Own the Revolution"
              role="For tech-forward builders"
              description="The AI era is unfolding now. Don&apos;t just rent access to someone else&apos;s intelligence — own it. Be at the forefront of private, self-hosted AI."
            />
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* How It Works Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0d0d12] via-[#0A1628]/50 to-[#0d0d12]" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">The Process</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                Up and Running in<br />
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">Three Simple Steps</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                No technical experience required. We handle everything so you can focus on using your AI.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 relative" staggerDelay={0.15}>
            <div className="hidden md:block absolute top-[2rem] left-[calc(16.667%+1.5rem)] right-[calc(16.667%+1.5rem)] h-px bg-gradient-to-r from-[#0EA5E9]/30 via-[#06B6D4]/30 to-transparent opacity-50 pointer-events-none" />

            {[
              {
                number: "01",
                title: "Choose Your Setup",
                description: "Local machine, cloud server, or fully managed — we walk you through which option best fits your needs, budget, and workflow."
              },
              {
                number: "02",
                title: "We Install & Configure",
                description: "One command installs everything. We handle model selection, security hardening, and fine-tuning for your exact use case and industry."
              },
              {
                number: "03",
                title: "You Own Your AI",
                description: "Walk away with powerful, private AI — no platform fees, no vendor lock-in, no data ever leaving your control."
              }
            ].map((step, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 text-center h-full p-6 sm:p-8 relative group">
                    <div className={twMerge(
                      "w-16 h-16 rounded-full flex items-center justify-center font-space-grotesk text-2xl font-bold mx-auto mb-7 relative z-10 transition-shadow duration-300",
                      index === 0 && "bg-[#0EA5E9]/10 text-[#0EA5E9] border-2 border-[#0EA5E9]/30 shadow-[0_0_28px_rgba(14,165,233,0.18)] group-hover:shadow-[0_0_50px_#0EA5E9]",
                      index === 1 && "bg-[#06B6D4]/10 text-[#06B6D4] border-2 border-[#06B6D4]/30 shadow-[0_0_28px_rgba(6,182,212,0.18)] group-hover:shadow-[0_0_50px_#06B6D4]",
                      index === 2 && "bg-[#8B5CF6]/10 text-[#8B5CF6] border-2 border-[#8B5CF6]/30 shadow-[0_0_28px_rgba(139,92,246,0.18)] group-hover:shadow-[0_0_50px_#8B5CF6]"
                    )}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white font-space-grotesk mb-3">{step.title}</h3>
                    <p className="text-base text-white/60 leading-relaxed max-w-[260px] mx-auto">{step.description}</p>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* One Command Install Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Dead Simple</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                One Command.<br />
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">That&apos;s It.</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                No Docker. No complex setup. Just paste one line and you&apos;re running private AI.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-[#0d0d12] border-[#0EA5E9]/20 hover:border-[#0EA5E9]/40 transition-all duration-300 overflow-hidden rounded-xl shadow-[0_0_40px_rgba(14,165,233,0.08)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-white/30 font-mono">terminal</span>
                </div>
                <code className="block text-[#0EA5E9] font-mono text-sm sm:text-base leading-relaxed break-all">
                  <span className="text-white/40">$ </span>curl -fsSL https://joestechsolutions.com/install | bash
                </code>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["Mac & Linux", "Windows PowerShell", "Ubuntu VPS"].map((platform) => (
                <span key={platform} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/50 border border-white/10">
                  <CheckCircle weight="fill" className="h-3.5 w-3.5 text-[#10B981]" />
                  {platform}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* Pricing Cards — 3 Tiers */}
      <section className="relative py-24 sm:py-32" id="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Pricing</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">Simple, Transparent Pricing</h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                Choose the setup that fits your needs. No hidden fees. No surprises.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.12}>
            {/* Tier 1: Local AI Setup */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#06B6D4]/30 transition-all duration-300 overflow-hidden h-full p-8 relative flex flex-col hover:translate-y-[-5px]">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Local AI Setup</p>
                  <h2 className="text-5xl font-bold text-white font-space-grotesk tracking-[-0.03em] leading-none mb-1.5">
                    $199 <span className="text-lg font-light text-white/40">one-time</span>
                  </h2>
                  <p className="text-sm text-white/40 mb-8">No recurring charges &middot; Yours forever</p>
                  <div className="h-px bg-white/10 mb-7" />
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Ollama + Open WebUI installed natively",
                      "No Docker required — runs on your hardware",
                      "Hardware auto-detection + optimal model",
                      "Industry-specific starter kit",
                      "30-minute walkthrough call",
                      "30 days email support"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-white/60">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] bg-[#06B6D4]/10 text-[#06B6D4] flex-shrink-0 mt-1">
                          <Check weight="bold" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <MagneticButton strength={0.2} className="w-full">
                    <Button
                      onClick={() => handleGetStarted("local")}
                      className="w-full bg-[#1c1c26]/50 border border-white/20 hover:border-[#06B6D4]/50 text-white hover:text-[#06B6D4] rounded-full group shadow-lg shadow-transparent hover:shadow-[#06B6D4]/10 py-6 text-lg font-space-grotesk font-semibold transition-all duration-300 backdrop-blur-sm"
                    >
                      Get Started — $199
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Tier 2: Cloud AI Server */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-gradient-to-br from-[#1c1c26] via-[#1c1c26] to-[#0EA5E9]/5 border-white/10 hover:border-[#0EA5E9]/40 transition-all duration-300 overflow-hidden h-full p-8 relative flex flex-col hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]" />
                  <div className="absolute top-5 right-5 px-3 py-1 bg-gradient-to-r from-[#0EA5E9]/20 to-[#06B6D4]/20 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Cloud AI Server</p>
                  <h2 className="text-5xl font-bold text-white font-space-grotesk tracking-[-0.03em] leading-none mb-1.5">
                    $499 <span className="text-lg font-light text-white/40">setup</span>
                  </h2>
                  <p className="text-sm text-white/40 mb-8">+ $29/month &middot; Fully managed</p>
                  <div className="h-px bg-white/10 mb-7" />
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Everything in Local, plus:",
                      "Dedicated VPS with custom domain + HTTPS",
                      "Daily automated backups (7-day retention)",
                      "Monthly health checks & updates",
                      "Multi-user access (teams of 2–10)",
                      "Email support included"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-white/60">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] bg-[#0EA5E9]/10 text-[#0EA5E9] flex-shrink-0 mt-1">
                          <Check weight="bold" />
                        </div>
                        <span className={index === 0 ? "font-semibold text-white/80" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <MagneticButton strength={0.2} className="w-full">
                    <Button
                      onClick={() => handleGetStarted("cloud")}
                      className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:from-[#0284c7] hover:to-[#0891b2] text-white rounded-full group shadow-lg shadow-[#0EA5E9]/30 py-6 text-lg font-space-grotesk font-semibold"
                    >
                      Get Started — $499 + $29/mo
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* Tier 3: Managed AI + Automation */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-gradient-to-br from-[#1c1c26] via-[#1c1c26] to-[#8B5CF6]/5 border-white/10 hover:border-[#8B5CF6]/40 transition-all duration-300 overflow-hidden h-full p-8 relative flex flex-col hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#c4b5fd]" />
                  <div className="absolute top-5 right-5 px-3 py-1 bg-gradient-to-r from-[#8B5CF6]/20 to-[#c4b5fd]/20 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    Best Value
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Managed AI + Automation</p>
                  <h2 className="text-5xl font-bold text-white font-space-grotesk tracking-[-0.03em] leading-none mb-1.5">
                    $999 <span className="text-lg font-light text-white/40">setup</span>
                  </h2>
                  <p className="text-sm text-white/40 mb-8">+ $79/month &middot; Full service</p>
                  <div className="h-px bg-white/10 mb-7" />
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Everything in Cloud, plus:",
                      "n8n workflow automation server",
                      "3 custom AI workflows included",
                      "RAG setup — ask your own documents",
                      "Private web search (SearXNG)",
                      "Quarterly strategy call",
                      "Priority same-day support"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-white/60">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] bg-[#8B5CF6]/10 text-[#8B5CF6] flex-shrink-0 mt-1">
                          <Check weight="bold" />
                        </div>
                        <span className={index === 0 ? "font-semibold text-white/80" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <MagneticButton strength={0.2} className="w-full">
                    <Button
                      onClick={() => handleGetStarted("managed")}
                      className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#c4b5fd] hover:from-[#7c3aed] hover:to-[#a78bfa] text-white rounded-full group shadow-lg shadow-[#8B5CF6]/30 py-6 text-lg font-space-grotesk font-semibold"
                    >
                      Get Started — $999 + $79/mo
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2} className="text-center mt-8 text-sm text-white/40">
            Not sure which plan is right?{" "}
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] underline hover:no-underline">
              Book a free discovery call
            </a>{" "}
            — we&apos;ll figure it out together.
          </FadeIn>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* Trust / Privacy Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Privacy First</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                Your Data Stays<br />
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">Yours. Always.</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                No cloud. No OpenAI subscriptions. No data harvesting. Just powerful AI built on trust.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/20 transition-all duration-300 text-center h-full p-6 sm:p-8 hover:translate-y-[-4px]">
                  <div className="w-15 h-15 bg-[#0EA5E9]/10 border border-[#0EA5E9]/18 rounded-lg flex items-center justify-center text-2xl text-[#0EA5E9] mx-auto mb-5">
                    <HardDrive weight="duotone" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-space-grotesk mb-2">On-Premise Control</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Your AI runs on your own hardware. No third-party servers ever touch your data or conversations.</p>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/20 transition-all duration-300 text-center h-full p-6 sm:p-8 hover:translate-y-[-4px]">
                  <div className="w-15 h-15 bg-[#0EA5E9]/10 border border-[#0EA5E9]/18 rounded-lg flex items-center justify-center text-2xl text-[#0EA5E9] mx-auto mb-5">
                    <ShieldCheck weight="duotone" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-space-grotesk mb-2">Zero Tracking</h4>
                  <p className="text-sm text-white/60 leading-relaxed">No usage telemetry, no training data collection, no analytics shared with anyone. Absolute zero.</p>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/20 transition-all duration-300 text-center h-full p-6 sm:p-8 hover:translate-y-[-4px]">
                  <div className="w-15 h-15 bg-[#0EA5E9]/10 border border-[#0EA5E9]/18 rounded-lg flex items-center justify-center text-2xl text-[#0EA5E9] mx-auto mb-5">
                    <GitBranch weight="duotone" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-space-grotesk mb-2">Open Source Models</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Built on fully auditable, open-source AI. Inspect exactly what&apos;s running — no black boxes, ever.</p>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* Industry Solutions Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0d0d12] via-[#0A1628]/50 to-[#0d0d12]" id="industries">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Industry Solutions</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                Built for<br />
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#7dd3fc] text-transparent bg-clip-text">Your Industry</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                Every setup includes industry-specific AI prompts, model recommendations, and compliance guidance.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto" staggerDelay={0.08}>
            {verticals.map((v, i) => (
              <StaggerItem key={i}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/20 transition-all duration-300 p-5 sm:p-6 text-center hover:translate-y-[-3px]">
                    <div className="w-10 h-10 bg-[#0EA5E9]/10 border border-[#0EA5E9]/18 rounded-lg flex items-center justify-center text-lg text-[#0EA5E9] mx-auto mb-3">
                      <v.icon weight="duotone" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-space-grotesk mb-1">{v.title}</h4>
                    <p className="text-xs text-white/50">{v.desc}</p>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-8">
            <p className="text-sm text-white/40">
              Compliance verticals (Healthcare, Legal, Financial, Therapy) include additional security hardening — <span className="text-[#0EA5E9] font-semibold">+$100 setup</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* FAQ Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Questions?</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                Everything you need to know about private AI for your business.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-[#1c1c26] border-white/10 overflow-hidden rounded-xl">
              <CardContent className="p-6 sm:p-8">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#0d0d12] via-[#0A1628]/50 to-[#0d0d12]">
        <div className="absolute inset-0 z-0">
          <HeroBlob className="w-[520px] h-[520px] bg-gradient-to-br from-[#0EA5E9]/20 to-transparent top-[-100px] left-[-80px] animate-blob-drift-a" />
          <HeroBlob className="w-[620px] h-[620px] bg-gradient-to-br from-[#06B6D4]/18 to-transparent top-[60px] right-[-200px] animate-blob-drift-b animation-delay-1000" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center z-10">
          <FadeIn>
            <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">Get Started Today</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk leading-tight">
              Ready to Own Your AI?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Book a free discovery call. We&apos;ll assess your needs, walk you through options, and get you set up — usually in under an hour.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <MagneticButton strength={0.3}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:from-[#0284c7] hover:to-[#0891b2] text-white text-lg px-10 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30 font-space-grotesk font-semibold"
              >
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck weight="duotone" className="mr-2 h-5 w-5" />
                  Schedule Your Discovery Call
                </a>
              </Button>
            </MagneticButton>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-5 flex items-center justify-center gap-2 text-white/40 text-sm">
              <ShieldCheck weight="duotone" className="h-4 w-4" />
              <span className="text-sm">Free discovery call &nbsp;&middot;&nbsp; No commitment required</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
