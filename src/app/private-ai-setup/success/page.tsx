"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle, Warning, Spinner, CalendarCheck, Desktop, Cloud } from "@phosphor-icons/react";
import { FadeIn } from "@/components/animations/FadeIn";

interface PaymentInfo {
  valid: boolean;
  email?: string;
  name?: string;
  type?: "local" | "vps";
  sessionId?: string;
  error?: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const urlType = searchParams.get("type") as "local" | "vps" | null;

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    setupType: (urlType || "local") as "local" | "vps",
    operatingSystem: "",
    specs: "",
    useCases: "",
    // VPS-specific
    domainPreference: "",
    modelSizePreference: "small" as "small" | "medium" | "large",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Verify payment on mount
  useEffect(() => {
    if (!sessionId) {
      setPaymentInfo({ valid: false, error: "No payment session found" });
      return;
    }

    async function verifyPayment() {
      try {
        const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const data = await response.json();

        if (data.valid) {
          setPaymentInfo(data);
          setFormData((prev) => ({
            ...prev,
            email: data.email || "",
            name: data.name || "",
            setupType: data.type || urlType || "local",
          }));
        } else {
          setPaymentInfo({ valid: false, error: data.error || "Payment verification failed" });
        }
      } catch {
        setPaymentInfo({ valid: false, error: "Unable to verify payment" });
      }
    }

    verifyPayment();
  }, [sessionId, urlType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/intakes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Intake submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isVPS = formData.setupType === "vps";

  // Loading state
  if (!paymentInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Spinner className="h-12 w-12 text-[#0EA5E9] animate-spin mx-auto mb-4" />
          <p className="text-white/70">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  // Invalid payment
  if (!paymentInfo.valid) {
    return (
      <div className="min-h-screen py-24">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <Card className="bg-[#1c1c26] border-red-500/50">
              <CardHeader className="text-center">
                <Warning weight="duotone" className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-white font-space-grotesk mb-2">
                  Payment Verification Failed
                </h1>
                <p className="text-white/70">
                  {paymentInfo.error || "We couldn't verify your payment. Please try again or contact support."}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  onClick={() => (window.location.href = "/private-ai-setup")}
                  className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full"
                >
                  Return to Private AI Setup
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    );
  }

  // Successfully submitted
  if (isSubmitted) {
    return (
      <div className="min-h-screen py-24">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <Card className="bg-[#1c1c26] border-[#0EA5E9]/50">
              <CardHeader className="text-center">
                <CheckCircle weight="duotone" className="h-16 w-16 text-[#0EA5E9] mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-white font-space-grotesk mb-2">
                  You're All Set!
                </h1>
                <p className="text-white/70">
                  I've received your information. Now let's schedule your setup call.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Setup Type Confirmation */}
                <div className="flex items-center justify-center gap-3 p-4 bg-[#0d0d12] rounded-xl border border-white/10">
                  {isVPS ? (
                    <Cloud weight="duotone" className="h-6 w-6 text-[#06B6D4]" />
                  ) : (
                    <Desktop weight="duotone" className="h-6 w-6 text-[#0EA5E9]" />
                  )}
                  <span className="text-white font-medium">
                    {isVPS ? "VPS Hosting Setup" : "Local Install"}
                  </span>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="bg-[#0d0d12] rounded-xl p-8 text-center border border-white/10">
                  <CalendarCheck weight="duotone" className="h-12 w-12 text-[#0EA5E9] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Schedule Your Setup Call</h3>
                  <p className="text-white/60 mb-6">
                    Pick a 90-minute slot that works for you.
                  </p>
                  {/*
                    TODO: Replace with your Calendly embed:

                    <iframe
                      src="https://calendly.com/YOUR_USERNAME/private-ai-setup"
                      width="100%"
                      height="600"
                      frameBorder="0"
                    />

                    Or use Calendly's popup widget:
                  */}
                  <a
                    href="https://calendly.com/YOUR_CALENDLY_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full px-8">
                      Open Scheduler
                    </Button>
                  </a>
                </div>

                <div className="text-center text-white/50 text-sm">
                  <p>Questions? Email me at <a href="mailto:joe@joestechsolutions.com" className="text-[#0EA5E9] hover:underline">joe@joestechsolutions.com</a></p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    );
  }

  // Intake form
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <CheckCircle weight="duotone" className="h-16 w-16 text-[#0EA5E9] mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white font-space-grotesk mb-3">
              Payment Successful!
            </h1>
            <p className="text-xl text-white/70">
              Quick 2-minute form so I can prepare for your {isVPS ? "VPS" : "local"} setup session.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="bg-[#1c1c26] border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Setup Type Indicator */}
                <div className="flex items-center gap-3 p-4 bg-[#0d0d12] rounded-xl border border-white/10 mb-6">
                  {isVPS ? (
                    <Cloud weight="duotone" className="h-6 w-6 text-[#06B6D4]" />
                  ) : (
                    <Desktop weight="duotone" className="h-6 w-6 text-[#0EA5E9]" />
                  )}
                  <div>
                    <span className="text-white font-medium block">
                      {isVPS ? "VPS Hosting Setup" : "Local Install"}
                    </span>
                    <span className="text-white/50 text-sm">
                      {isVPS ? "$99 setup + $29/mo" : "$99 one-time"}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* VPS-specific: Domain Preference */}
                {isVPS && (
                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-white mb-2">
                      Preferred Domain (optional)
                    </label>
                    <input
                      type="text"
                      id="domain"
                      value={formData.domainPreference}
                      onChange={(e) => setFormData({ ...formData, domainPreference: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors"
                      placeholder="myai.yourdomain.com or leave blank for suggestions"
                    />
                    <p className="text-white/50 text-sm mt-1">We'll set up SSL and DNS for you</p>
                  </div>
                )}

                {/* VPS-specific: Model Size */}
                {isVPS && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Expected Model Size
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "small", label: "Small (7B)", desc: "Mistral 7B, Llama3 8B" },
                        { value: "medium", label: "Medium (13B)", desc: "Llama2 13B" },
                        { value: "large", label: "Large (30B+)", desc: "May need upgrade" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex flex-col items-center p-3 rounded-xl border cursor-pointer transition-all text-center ${
                            formData.modelSizePreference === option.value
                              ? "border-[#06B6D4] bg-[#06B6D4]/10"
                              : "border-white/10 hover:border-white/20"
                          }`}
                        >
                          <input
                            type="radio"
                            name="modelSize"
                            value={option.value}
                            checked={formData.modelSizePreference === option.value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                modelSizePreference: e.target.value as typeof formData.modelSizePreference,
                              })
                            }
                            className="sr-only"
                          />
                          <span className="text-white font-medium text-sm">{option.label}</span>
                          <span className="text-white/50 text-xs">{option.desc}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Operating System */}
                <div>
                  <label htmlFor="os" className="block text-sm font-medium text-white mb-2">
                    {isVPS ? "VPS Operating System" : "Your Operating System"}
                  </label>
                  <select
                    id="os"
                    required
                    value={formData.operatingSystem}
                    onChange={(e) => setFormData({ ...formData, operatingSystem: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors"
                  >
                    <option value="">Select OS</option>
                    {isVPS ? (
                      <>
                        <option value="ubuntu-22">Ubuntu 22.04 LTS (Recommended)</option>
                        <option value="ubuntu-20">Ubuntu 20.04 LTS</option>
                        <option value="debian-12">Debian 12</option>
                        <option value="other-linux">Other Linux</option>
                      </>
                    ) : (
                      <>
                        <option value="windows-11">Windows 11</option>
                        <option value="windows-10">Windows 10</option>
                        <option value="macos-sonoma">macOS Sonoma (14)</option>
                        <option value="macos-ventura">macOS Ventura (13)</option>
                        <option value="macos-older">macOS (older)</option>
                        <option value="linux-ubuntu">Linux (Ubuntu/Debian)</option>
                        <option value="linux-other">Linux (Other)</option>
                        <option value="unsure">Not sure</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Specs (only for local) */}
                {!isVPS && (
                  <div>
                    <label htmlFor="specs" className="block text-sm font-medium text-white mb-2">
                      Computer Specs (RAM, CPU, GPU if any)
                    </label>
                    <textarea
                      id="specs"
                      value={formData.specs}
                      onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors resize-none"
                      placeholder="e.g., 16GB RAM, Intel i7, no dedicated GPU&#10;(Leave blank if unsure - I'll help figure it out)"
                    />
                  </div>
                )}

                {/* Use Cases */}
                <div>
                  <label htmlFor="useCases" className="block text-sm font-medium text-white mb-2">
                    What do you want to use AI for?
                  </label>
                  <textarea
                    id="useCases"
                    required
                    value={formData.useCases}
                    onChange={(e) => setFormData({ ...formData, useCases: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors resize-none"
                    placeholder="e.g., Writing assistance, coding help, analyzing documents, brainstorming ideas..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white text-lg py-6 rounded-full shadow-lg disabled:opacity-50 ${
                    isVPS
                      ? "bg-[#06B6D4] hover:bg-[#0891b2] shadow-[#06B6D4]/20"
                      : "bg-[#0EA5E9] hover:bg-[#0284c7] shadow-[#0EA5E9]/20"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Continue to Scheduling"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Spinner className="h-12 w-12 text-[#0EA5E9] animate-spin mx-auto mb-4" />
            <p className="text-white/70">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
