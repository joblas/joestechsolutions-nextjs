"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Desktop, Cloud, Spinner, ArrowLeft, LockSimple, CheckCircle, Warning } from "@phosphor-icons/react";
import { FadeIn } from "@/components/animations/FadeIn";

function QualifyForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlType = searchParams.get("type") as "local" | "vps" | null;

  const [qualifyData, setQualifyData] = useState({
    setupType: (urlType || "local") as "local" | "vps",
    operatingSystem: "",
    ramAmount: "", // For local only
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qualificationStatus, setQualificationStatus] = useState<"pending" | "qualified" | "needs-review">("pending");

  // Redirect if no type specified
  useEffect(() => {
    if (!urlType) {
      router.push("/private-ai-setup");
    }
  }, [urlType, router]);

  const isVPS = qualifyData.setupType === "vps";

  // Check if system qualifies based on selections
  const checkQualification = () => {
    if (isVPS) {
      // VPS always qualifies
      return "qualified";
    }

    // Local setup requirements
    const ram = qualifyData.ramAmount;
    if (ram === "less-than-8" || ram === "4gb") {
      return "needs-review";
    }
    if (ram === "8gb" || ram === "16gb" || ram === "32gb-plus") {
      return "qualified";
    }
    return "pending";
  };

  useEffect(() => {
    if (qualifyData.operatingSystem && (isVPS || qualifyData.ramAmount)) {
      setQualificationStatus(checkQualification());
    }
  }, [qualifyData.operatingSystem, qualifyData.ramAmount, isVPS]);

  const handleProceedToPayment = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Store qualification data in session storage for use after payment
      sessionStorage.setItem("privateAIQualify", JSON.stringify(qualifyData));

      // Create Stripe checkout session
      const checkoutResponse = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: qualifyData.setupType,
        }),
      });

      const checkoutData = await checkoutResponse.json();

      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!urlType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="h-12 w-12 text-[#0EA5E9] animate-spin" />
      </div>
    );
  }

  const isFormComplete = qualifyData.operatingSystem && (isVPS || qualifyData.ramAmount);
  const canProceed = isFormComplete && qualificationStatus !== "pending";

  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-xl px-6">
        {/* Back Link */}
        <FadeIn>
          <button
            onClick={() => router.push("/private-ai-setup")}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to options</span>
          </button>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white font-space-grotesk mb-3">
              Quick System Check
            </h1>
            <p className="text-xl text-white/70">
              Let's make sure your {isVPS ? "VPS" : "computer"} is ready for AI.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="bg-[#1c1c26] border-white/10">
            <CardContent className="p-8 space-y-6">
              {/* Setup Type Indicator */}
              <div className="flex items-center gap-3 p-4 bg-[#0d0d12] rounded-xl border border-white/10">
                {isVPS ? (
                  <Cloud weight="duotone" className="h-6 w-6 text-[#06B6D4]" />
                ) : (
                  <Desktop weight="duotone" className="h-6 w-6 text-[#0EA5E9]" />
                )}
                <div className="flex-1">
                  <span className="text-white font-medium block">
                    {isVPS ? "VPS Hosting Setup" : "Local Install"}
                  </span>
                  <span className="text-white/50 text-sm">
                    {isVPS ? "$99 setup + $29/mo" : "$99 one-time"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => router.push("/private-ai-setup")}
                  className="text-[#0EA5E9] text-sm hover:underline"
                >
                  Change
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
                  {error}
                </div>
              )}

              {/* Operating System */}
              <div>
                <label htmlFor="os" className="block text-sm font-medium text-white mb-2">
                  {isVPS ? "Preferred VPS OS" : "Your Operating System"}
                </label>
                <select
                  id="os"
                  value={qualifyData.operatingSystem}
                  onChange={(e) => setQualifyData({ ...qualifyData, operatingSystem: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors"
                >
                  <option value="">Select OS</option>
                  {isVPS ? (
                    <>
                      <option value="ubuntu-22">Ubuntu 22.04 LTS (Recommended)</option>
                      <option value="ubuntu-20">Ubuntu 20.04 LTS</option>
                      <option value="debian-12">Debian 12</option>
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
                    </>
                  )}
                </select>
              </div>

              {/* RAM Amount (Local only) */}
              {!isVPS && (
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    How much RAM does your computer have?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "less-than-8", label: "Less than 8GB", warn: true },
                      { value: "8gb", label: "8GB", ok: true },
                      { value: "16gb", label: "16GB", ok: true },
                      { value: "32gb-plus", label: "32GB+", ok: true },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all text-center ${
                          qualifyData.ramAmount === option.value
                            ? option.warn
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-[#0EA5E9] bg-[#0EA5E9]/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="ram"
                          value={option.value}
                          checked={qualifyData.ramAmount === option.value}
                          onChange={(e) => setQualifyData({ ...qualifyData, ramAmount: e.target.value })}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-white/50 text-sm mt-2">
                    8GB minimum required. 16GB+ recommended for best performance.
                  </p>
                </div>
              )}

              {/* Qualification Status */}
              {isFormComplete && (
                <div className={`p-4 rounded-xl border ${
                  qualificationStatus === "qualified"
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-amber-500/10 border-amber-500/30"
                }`}>
                  {qualificationStatus === "qualified" ? (
                    <div className="flex items-center gap-3">
                      <CheckCircle weight="duotone" className="h-6 w-6 text-green-500 shrink-0" />
                      <div>
                        <p className="text-green-400 font-medium">You're all set!</p>
                        <p className="text-green-400/70 text-sm">
                          {isVPS
                            ? "VPS will be pre-configured and ready for your setup call."
                            : "Your system meets the requirements for local AI setup."}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Warning weight="duotone" className="h-6 w-6 text-amber-500 shrink-0" />
                      <div>
                        <p className="text-amber-400 font-medium">Let's talk first</p>
                        <p className="text-amber-400/70 text-sm">
                          With less than 8GB RAM, we may need to discuss alternatives.
                          Consider the VPS option, or we can chat during setup.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Submit */}
              <Button
                onClick={handleProceedToPayment}
                disabled={!canProceed || isSubmitting}
                className={`w-full text-white text-lg py-6 rounded-full shadow-lg disabled:opacity-50 ${
                  isVPS
                    ? "bg-[#06B6D4] hover:bg-[#0891b2] shadow-[#06B6D4]/20"
                    : "bg-[#0EA5E9] hover:bg-[#0284c7] shadow-[#0EA5E9]/20"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Spinner className="h-5 w-5 animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <LockSimple weight="bold" className="h-5 w-5" />
                    Continue to Payment — {isVPS ? "$99 + $29/mo" : "$99"}
                  </span>
                )}
              </Button>

              <p className="text-center text-white/50 text-sm">
                Secure checkout powered by Stripe
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}

export default function QualifyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Spinner className="h-12 w-12 text-[#0EA5E9] animate-spin" />
        </div>
      }
    >
      <QualifyForm />
    </Suspense>
  );
}
