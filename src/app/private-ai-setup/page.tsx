"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { CheckCircle, Robot, Desktop, Clock, Envelope, ShieldCheck, CurrencyDollarSimple, Cloud, Globe, Wrench } from "@phosphor-icons/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data
const faqs = [
  {
    question: "What VPS specs do I get?",
    answer: "Hostinger KVM 1: 1 vCPU, 4GB RAM, 50GB NVMe SSD. Runs 7B parameter models (Mistral 7B, Llama3 8B) smoothly. Larger models need more RAM — we can upgrade anytime."
  },
  {
    question: "What hardware do I need for local install?",
    answer: "8GB RAM minimum (16GB recommended). Modern CPU (2020+). No GPU required, but if you have one, we'll configure it for faster inference."
  },
  {
    question: "Can I cancel VPS hosting anytime?",
    answer: "Yes! Cancel anytime through Hostinger. No contracts, no penalties. Your $29/mo covers the VPS, domain, and ongoing support."
  },
  {
    question: "Is my data really private?",
    answer: "100%. Local install runs entirely on your machine. VPS runs on your dedicated server — no shared resources, no third-party access. You own the hardware and data."
  },
  {
    question: "What open-source models can I run?",
    answer: "Mistral 7B, Llama3 8B, CodeLlama, Phi-2, and many more. I'll recommend the best model for your use case during setup."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#0EA5E9] transition-colors">
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
            <p className="pb-5 text-white/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PrivateAISetup() {
  const handleGetStarted = (type: "local" | "vps") => {
    window.location.href = `/private-ai-setup/qualify?type=${type}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-6">
                <Robot weight="duotone" className="h-5 w-5 text-[#0EA5E9]" />
                <span className="text-[#0EA5E9] font-medium">Done-For-You Setup</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Private AI Setup</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Your own AI workspace — on your computer or a dedicated VPS.
                I handle installation, configuration, and training.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 sm:py-24 -mt-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
            {/* Local Install */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#0EA5E9]/10 to-transparent rounded-full blur-3xl" />
                  <CardHeader className="relative pb-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center">
                        <Desktop weight="duotone" className="h-7 w-7 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white font-space-grotesk">Local Install</h2>
                        <p className="text-[#0EA5E9] font-semibold text-xl">$99 one-time</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed mb-4">
                      On your computer — no monthly costs. Perfect if you have a modern laptop or desktop.
                    </p>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <div className="space-y-3">
                      {[
                        "Ollama + Open WebUI installed",
                        "One open-source model (Mistral 7B/Llama3 8B)",
                        "60-90 min live setup & training",
                        "7 days email support",
                        "No monthly fees — you own it"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle weight="duotone" className="h-5 w-5 text-[#0EA5E9] mr-3 shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <MagneticButton strength={0.2} className="w-full">
                      <Button
                        onClick={() => handleGetStarted("local")}
                        className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full group shadow-lg shadow-[#0EA5E9]/20 py-6 text-lg"
                      >
                        Get Started — $99
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>

            {/* VPS Hosting */}
            <StaggerItem>
              <AnimatedCard>
                <Card className="bg-[#1c1c26] border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-all duration-500 overflow-hidden h-full relative">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#06B6D4]/20 rounded-full text-[#06B6D4] text-sm font-medium">
                    Recommended
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#06B6D4]/10 to-transparent rounded-full blur-3xl" />
                  <CardHeader className="relative pb-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center">
                        <Cloud weight="duotone" className="h-7 w-7 text-[#06B6D4]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white font-space-grotesk">VPS Hosting</h2>
                        <p className="text-[#06B6D4] font-semibold text-xl">$99 setup + $29/mo</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed mb-4">
                      Dedicated VPS with your own domain. Access from anywhere, always on.
                    </p>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <div className="space-y-3">
                      {[
                        "Everything in Local, plus:",
                        "Hostinger KVM 1 VPS (1 vCPU/4GB/50GB NVMe)",
                        "Custom domain setup ($10/yr value)",
                        "Pre-installed with SSL certificate",
                        "Monthly monitoring & updates",
                        "Cancel anytime — no contracts"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle weight="duotone" className="h-5 w-5 text-[#06B6D4] mr-3 shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <MagneticButton strength={0.2} className="w-full">
                      <Button
                        onClick={() => handleGetStarted("vps")}
                        className="w-full bg-[#06B6D4] hover:bg-[#0891b2] text-white rounded-full group shadow-lg shadow-[#06B6D4]/20 py-6 text-lg"
                      >
                        Get Started — $99 + $29/mo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                What You Get
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Both options include personal setup, training, and support.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Local Features */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Desktop weight="duotone" className="h-8 w-8 text-[#0EA5E9]" />
                  <h3 className="text-2xl font-bold text-white font-space-grotesk">Local Setup ($99)</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Robot, text: "Ollama + Open WebUI on your machine" },
                    { icon: ShieldCheck, text: "One open-source model installed" },
                    { icon: Clock, text: "60-90 min live setup & training" },
                    { icon: Envelope, text: "7 days email support" },
                    { icon: CurrencyDollarSimple, text: "No recurring fees ever" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-[#1c1c26] rounded-xl border border-white/5">
                      <item.icon weight="duotone" className="h-6 w-6 text-[#0EA5E9]" />
                      <span className="text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* VPS Features */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud weight="duotone" className="h-8 w-8 text-[#06B6D4]" />
                  <h3 className="text-2xl font-bold text-white font-space-grotesk">VPS Setup ($99 + $29/mo)</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Robot, text: "Everything in Local, plus..." },
                    { icon: Cloud, text: "Hostinger KVM 1 VPS (dedicated resources)" },
                    { icon: Globe, text: "Custom domain with SSL (myai.yourdomain.com)" },
                    { icon: Wrench, text: "Monthly monitoring & updates" },
                    { icon: ShieldCheck, text: "Production-ready, always accessible" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-[#1c1c26] rounded-xl border border-white/5">
                      <item.icon weight="duotone" className="h-6 w-6 text-[#06B6D4]" />
                      <span className="text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 sm:py-32 bg-[#1c1c26]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Our 4-Step Process
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Simple, straightforward, done in one session.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {[
              {
                number: "1",
                title: "Quick Check",
                description: "Confirm your system qualifies for AI setup (30 seconds)."
              },
              {
                number: "2",
                title: "Book Call",
                description: "Schedule a free discovery call to discuss your needs."
              },
              {
                number: "3",
                title: "We Chat",
                description: "I'll answer questions and make sure it's a good fit."
              },
              {
                number: "4",
                title: "Pay & Setup",
                description: "Pay $99, then we do the live setup together."
              }
            ].map((step, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="bg-[#1c1c26] border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 text-center h-full">
                    <CardHeader>
                      <div className="text-5xl font-bold text-[#0EA5E9] mb-3 font-space-grotesk">{step.number}</div>
                      <h3 className="text-xl font-bold text-white font-space-grotesk">{step.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-[#1c1c26] border-white/10 overflow-hidden">
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
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[150px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Ready to Start?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Get your private AI running today. No data harvesting, no third parties — just powerful AI that you control.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.3}>
                <Button
                  onClick={() => handleGetStarted("local")}
                  size="lg"
                  className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-lg px-10 py-7 rounded-full group shadow-2xl shadow-[#0EA5E9]/30"
                >
                  Local — $99
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button
                  onClick={() => handleGetStarted("vps")}
                  size="lg"
                  className="bg-[#06B6D4] hover:bg-[#0891b2] text-white text-lg px-10 py-7 rounded-full group shadow-2xl shadow-[#06B6D4]/30"
                >
                  VPS — $99 + $29/mo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/50">
              <ShieldCheck weight="duotone" className="h-5 w-5" />
              <span className="text-sm">Secure checkout powered by Stripe</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
