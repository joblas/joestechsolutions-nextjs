"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Desktop, Cloud, Rocket, Spinner, ArrowLeft, ArrowRight, CheckCircle, Warning } from "@phosphor-icons/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SetupType, TIER_LABELS, TIER_PRICES } from "@/lib/stripe";

function QualifyForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlType = searchParams.get("type") as SetupType | null;

  const [qualifyData, setQualifyData] = useState({
    setupType: (urlType || "local") as SetupType,
    operatingSystem: "",
    ramAmount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qualificationStatus, setQualificationStatus] = useState<"pending" | "qualified" | "needs-review">("pending");

  useEffect(() => {
    if (!urlType || !["local", "cloud", "managed"].includes(urlType)) {
      router.push("/private-ai-setup");
    }
  }, [urlType, router]);

  const isLocal = qualifyData.setupType === "local";
  const isCloud = qualifyData.setupType === "cloud";
  const isManaged = qualifyData.setupType === "managed";
  const needsVPS = isCloud || isManaged;

  const checkQualification = () => {
    if (needsVPS) return "qualified";

    const ram = qualifyData.ramAmount;
    if (ram === "less-than-8" || ram === "4gb") return "needs-review";
    if (ram === "8gb" || ram === "16gb" || ram === "32gb-plus") return "qualified";
    return "pending";
  };

  useEffect(() => {
    if (qualifyData.operatingSystem && (needsVPS || qualifyData.ramAmount)) {
      setQualificationStatus(checkQualification());
    }
  }, [qualifyData.operatingSystem, qualifyData.ramAmount, needsVPS]);

  const handleProceedToPayment = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Save qualification data
      const intakeResponse = await fetch("/api/intakes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...qualifyData,
          status: "pending_payment",
        }),
      });

      if (!intakeResponse.ok) {
        throw new Error("Failed to save your information");
      }

      const intakeData = await intakeResponse.json();

      // Create Stripe checkout session
      const checkoutResponse = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: qualifyData.setupType === "local" ? "local" : qualifyData.setupType,
          includeMonthly: qualifyData.setupType !== "local",
          intakeId: intakeData.id,
        }),
      });

      if (!checkoutResponse.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await checkoutResponse.json();
      window.location.href = url;
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

  const tierLabel = TIER_LABELS[qualifyData.setupType];
  const tierPrice = TIER_PRICES[qualifyData.setupType];
  const priceDisplay = tierPrice.monthly
    ? `${tierPrice.setup} setup + ${tierPrice.monthly}`
    : `${tierPrice.setup} one-time`;

  const TierIcon = isManaged ? Rocket : needsVPS ? Cloud : Desktop;
  const accentColor = isManaged ? "#8B5CF6" : isCloud ? "#06B6D4" : "#0EA5E9";

  const isFormComplete = qualifyData.operatingSystem && (needsVPS || qualifyData.ramAmount);
  const canProceed = isFormComplete && qualificationStatus !== "pending";

  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-xl px-6">
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
              {isLocal
                ? "Let's make sure your computer is ready for AI."
                : "Just a couple quick questions before we set you up."}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="bg-[#1c1c26] border-white/10">
            <CardContent className="p-8 space-y-6">
              {/* Setup Type Indicator */}
              <div className="flex items-center gap-3 p-4 bg-[#0d0d12] rounded-xl border border-white/10">
                <TierIcon weight="duotone" className="h-6 w-6" style={{ color: accentColor }} />
                <div className="flex-1">
                  <span className="text-white font-medium block">{tierLabel}</span>
                  <span className="text-white/50 text-sm">{priceDisplay}</span>
                </div>
                <button
                  type="button"
                  onClick={() => router.push("/private-ai-setup#pricing")}
                  className="text-sm hover:underline" style={{ color: accentColor }}
                >
                  Change
                </button>
              </div>

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
                  {error}
                </div>
              )}

              {/* Operating System */}
              <div>
                <label htmlFor="os" className="block text-sm font-medium text-white mb-2">
                  {needsVPS ? "Preferred VPS OS" : "Your Operating System"}
                </label>
                <select
                  id="os"
                  value={qualifyData.operatingSystem}
                  onChange={(e) => setQualifyData({ ...qualifyData, operatingSystem: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none transition-colors"
                >
                  <option value="">Select OS</option>
                  {needsVPS ? (
                    <>
                      <option value="ubuntu-22">Ubuntu 22.04 LTS (Recommended)</option>
                      <option value="ubuntu-24">Ubuntu 24.04 LTS</option>
                      <option value="debian-12">Debian 12</option>
                    </>
                  ) : (
                    <>
                      <option value="windows-11">Windows 11</option>
                      <option value="windows-10">Windows 10</option>
                      <option value="macos-sequoia">macOS Sequoia (15)</option>
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
              {isLocal && (
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

              {/* Managed tier note */}
              {isManaged && (
                <div className="p-4 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-xl">
                  <p className="text-[#c4b5fd] text-sm">
                    <strong>Managed tier includes:</strong> n8n workflow automation, document Q&A (RAG), private web search, 3 custom workflows, quarterly strategy calls, and priority support.
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
                        <p className="text-green-400 font-medium">You&apos;re all set!</p>
                        <p className="text-green-400/70 text-sm">
                          {needsVPS
                            ? "We'll configure your dedicated server during the setup call."
                            : "Your system meets the requirements for local AI setup."}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Warning weight="duotone" className="h-6 w-6 text-amber-500 shrink-0" />
                      <div>
                        <p className="text-amber-400 font-medium">Let&apos;s talk first</p>
                        <p className="text-amber-400/70 text-sm">
                          With less than 8GB RAM, we may need to discuss alternatives.
                          Consider the Cloud option, or we can chat during the call.
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
                className="w-full text-white text-lg py-6 rounded-full shadow-lg disabled:opacity-50"
                style={{
                  background: `linear-gradient(to right, ${accentColor}, ${accentColor}dd)`,
                  boxShadow: `0 10px 15px -3px ${accentColor}33`,
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Spinner className="h-5 w-5 animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Proceed to Payment — {tierPrice.setup}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </Button>

              <p className="text-center text-white/50 text-sm">
                Secure checkout via Stripe &middot; Setup call scheduled after payment
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
