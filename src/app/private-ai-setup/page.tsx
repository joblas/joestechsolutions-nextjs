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
    answer: "Hostinger KVM 1: 1 vCPU, 4GB RAM, 50GB NVMe SSD. I've found this handles 7B parameter models (Mistral 7B, Llama3 8B) really well for most use cases. If you need to run larger models down the road, we can always upgrade — I'll help you scale when you're ready."
  },
  {
    question: "What hardware do I need for local install?",
    answer: "8GB RAM minimum, though I recommend 16GB for a smoother experience. Any modern CPU from 2020 or later works great. GPU isn't required, but if you have one, I'll configure it for faster responses. During our call, I'll check your specs and make sure you're set up for success."
  },
  {
    question: "Can I cancel VPS hosting anytime?",
    answer: "Absolutely — no contracts, no penalties. Cancel anytime through Hostinger. Your $29/mo covers the VPS, domain, and my ongoing support. I want this to work for you, and if it's ever not the right fit, you're free to go."
  },
  {
    question: "Is my data really private?",
    answer: "Yes, and this is the whole point. With local install, everything runs on your machine — your prompts, outputs, and data never leave your computer. With VPS, you get your own dedicated server — no shared resources, no third-party access. You own the hardware and data completely. I set this up for clients specifically because they want that control back."
  },
  {
    question: "What open-source models can I run?",
    answer: "Mistral 7B, Llama3 8B, CodeLlama, Phi-2, and many more. During our call, I'll ask about what you want to use AI for, then recommend the best model for your specific needs. Most clients start with Mistral or Llama and we can always add more later."
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
                <span className="text-[#0EA5E9] font-medium">Done-For-You AI Setup</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-space-grotesk">
                <span className="block text-white mb-3">Your AI. Your Data. Your Control.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                I set up private AI systems for business owners who want powerful AI tools
                without sending sensitive data to big tech companies. Running locally or on your own server —
                you keep full control.
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
                        <p className="text-[#0EA5E9] font-semibold text-xl">$150 one-time</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed mb-4">
                      Runs entirely on your computer — your data never leaves your machine. Perfect for professionals who want AI without subscriptions or data concerns.
                    </p>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <div className="space-y-3">
                      {[
                        "ChatGPT-like interface, runs 100% locally",
                        "Powerful AI model included (Mistral or Llama)",
                        "75-min session: 15 min overview, 45 min install, 15 min demo",
                        "7 days email support after setup",
                        "Pay once — no subscriptions, ever"
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
                        Get Started — $150
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
                        <p className="text-[#06B6D4] font-semibold text-xl">$500 setup + $50/mo</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed mb-4">
                      Your own private AI server, accessible from anywhere. I handle the hosting, updates, and maintenance so you can just use it.
                    </p>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <div className="space-y-3">
                      {[
                        "Everything in Local, plus:",
                        "Dedicated server (4GB RAM, 50GB SSD)",
                        "Your own domain (myai.yourdomain.com)",
                        "Secure HTTPS access from any device",
                        "I monitor and update it monthly",
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
                        Get Started — $500 + $50/mo
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
                What's Included
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                I walk you through everything live — you'll know exactly how to use it when we're done.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Local Features */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Desktop weight="duotone" className="h-8 w-8 text-[#0EA5E9]" />
                  <h3 className="text-2xl font-bold text-white font-space-grotesk">Local Setup ($150)</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Robot, text: "ChatGPT-style interface on your computer" },
                    { icon: ShieldCheck, text: "AI model configured for your use case" },
                    { icon: Clock, text: "75-min live session (overview, install, demo)" },
                    { icon: Envelope, text: "7 days email support for questions" },
                    { icon: CurrencyDollarSimple, text: "One payment — yours forever" }
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
                  <h3 className="text-2xl font-bold text-white font-space-grotesk">VPS Setup ($500 + $50/mo)</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Robot, text: "Everything in Local, plus..." },
                    { icon: Cloud, text: "Your own dedicated server (not shared)" },
                    { icon: Globe, text: "Custom domain with HTTPS security" },
                    { icon: Wrench, text: "I handle monthly updates for you" },
                    { icon: ShieldCheck, text: "Access your AI from any device, anywhere" }
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
                How It Works
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                We'll start with a free call so I can understand your needs before anything else.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {[
              {
                number: "1",
                title: "Quick Check",
                description: "Answer 2 questions so I know your system is ready."
              },
              {
                number: "2",
                title: "Free Call",
                description: "Book a 15-min call — I want to understand what you need."
              },
              {
                number: "3",
                title: "We Decide",
                description: "If it's a good fit, I'll send you a payment link."
              },
              {
                number: "4",
                title: "Live Setup",
                description: "75 min together: overview, install, and hands-on demo."
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
              Take Back Control of Your Data
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Stop sending every prompt to OpenAI or Google. I'll set up your own private AI workspace —
              powerful, secure, and completely under your control.
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
                  Local — $150
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button
                  onClick={() => handleGetStarted("vps")}
                  size="lg"
                  className="bg-[#06B6D4] hover:bg-[#0891b2] text-white text-lg px-10 py-7 rounded-full group shadow-2xl shadow-[#06B6D4]/30"
                >
                  VPS — $500 + $50/mo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/50">
              <ShieldCheck weight="duotone" className="h-5 w-5" />
              <span className="text-sm">Free discovery call — no payment until we chat</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
