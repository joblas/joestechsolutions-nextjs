"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes, completely free and open source under the MIT license. No trials, no premium tier, no subscriptions. Forever.",
  },
  {
    question: "Is my audio sent to any server?",
    answer:
      "Never. Whisper Walkie runs the AI model entirely on your machine. Your audio is processed locally and never touches a network. No accounts, no telemetry, no cloud.",
  },
  {
    question: "Windows shows a SmartScreen warning. Is it safe?",
    answer:
      "Yes! SmartScreen warns about apps from new publishers. Since Whisper Walkie is open source, you can read every line of code on GitHub. Click \u2018More info\u2019 \u2192 \u2018Run anyway\u2019 to proceed.",
  },
  {
    question: "Do I need a powerful computer?",
    answer:
      "No. The base Whisper model runs comfortably on any modern CPU. If you have an NVIDIA GPU (Windows/Linux), transcription will be even faster with CUDA acceleration.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. The speech recognition model is bundled with the download. No internet connection needed after you download.",
  },
  {
    question: "What languages does it support?",
    answer:
      "Whisper supports 99+ languages. It auto-detects the spoken language, or you can set a specific one.",
  },
  {
    question: "Can I change the push-to-talk key?",
    answer:
      "Yes. Open Settings in the app and choose from: Right Alt, Scroll Lock, Pause, F13, F14, Insert, or Right Ctrl.",
  },
  {
    question: "How do I grant macOS Accessibility permissions?",
    answer:
      "Go to System Settings \u2192 Privacy & Security \u2192 Accessibility. Click the + button and add the Whisper Walkie app (or your Terminal if running from source).",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-3">
            Common questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
            FAQ
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Everything you might want to know before you download.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                className={`bg-[#1c1c26] transition-all duration-300 ${
                  isOpen
                    ? "border-[#0EA5E9]/40 shadow-[0_0_30px_rgba(14,165,233,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
                role="listitem"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left flex items-center gap-4 px-6 py-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d12] rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? "bg-[#0EA5E9]/20" : "bg-white/5 group-hover:bg-[#0EA5E9]/10"
                      }`}
                    >
                      <HelpCircle
                        className={`w-4 h-4 transition-colors duration-200 ${
                          isOpen ? "text-[#0EA5E9]" : "text-white/40 group-hover:text-[#0EA5E9]/70"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Question */}
                    <span
                      className={`flex-1 font-semibold text-base leading-snug transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "text-[#0EA5E9] rotate-180"
                          : "text-white/30 group-hover:text-white/60"
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-white/60 leading-relaxed text-sm pl-[4.5rem]">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
