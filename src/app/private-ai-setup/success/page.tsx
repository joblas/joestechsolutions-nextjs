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
  const isDemo = searchParams.get("demo") === "true";

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  const isVPS = paymentInfo?.type === "vps" || urlType === "vps";

  // Verify payment on mount (or bypass in demo mode)
  useEffect(() => {
    if (!sessionId) {
      setPaymentInfo({ valid: false, error: "No payment session found" });
      return;
    }

    // Demo mode: bypass payment verification
    if (isDemo) {
      setPaymentInfo({
        valid: true,
        email: "demo@example.com",
        name: "Demo User",
        type: urlType || "local",
        sessionId: sessionId,
      });
      return;
    }

    async function verifyPayment() {
      try {
        const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const data = await response.json();

        if (data.valid) {
          setPaymentInfo(data);
        } else {
          setPaymentInfo({ valid: false, error: data.error || "Payment verification failed" });
        }
      } catch {
        setPaymentInfo({ valid: false, error: "Unable to verify payment" });
      }
    }

    verifyPayment();
  }, [sessionId, urlType, isDemo]);

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

  // Success - show scheduling
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-2xl px-6">
        {/* Demo Mode Banner */}
        {isDemo && (
          <div className="mb-6 p-4 bg-amber-500/20 border border-amber-500/50 rounded-xl text-center">
            <p className="text-amber-400 font-medium">
              🧪 Demo Mode — Stripe not configured. This is a UI preview only.
            </p>
          </div>
        )}

        <FadeIn>
          <Card className="bg-[#1c1c26] border-[#0EA5E9]/50">
            <CardHeader className="text-center">
              <CheckCircle weight="duotone" className="h-16 w-16 text-[#0EA5E9] mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white font-space-grotesk mb-2">
                {isDemo ? "Demo: Payment Success" : "Payment Successful!"}
              </h1>
              <p className="text-white/70">
                Thank you{paymentInfo.name ? `, ${paymentInfo.name.split(" ")[0]}` : ""}! Now let's schedule your setup call.
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
                  {isVPS ? "VPS Hosting Setup" : "Local Install"} — {isVPS ? "$99 + $29/mo" : "$99"}
                </span>
              </div>

              {/* Confirmation Email Notice */}
              <div className="text-center text-white/60 text-sm">
                <p>A confirmation email has been sent to <span className="text-white">{paymentInfo.email}</span></p>
              </div>

              {/* Calendly Embed Placeholder */}
              <div className="bg-[#0d0d12] rounded-xl p-8 text-center border border-white/10">
                <CalendarCheck weight="duotone" className="h-12 w-12 text-[#0EA5E9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Schedule Your Setup Call</h3>
                <p className="text-white/60 mb-6">
                  Pick a 90-minute slot that works for you. I'll walk you through everything.
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
                  href="https://calendly.com/joe-joestechsolutions/private-ai-setup-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full px-8">
                    Open Scheduler
                  </Button>
                </a>
              </div>

              {/* What to expect */}
              <div className="bg-[#0d0d12] rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-medium mb-3">What happens next:</h4>
                <ol className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EA5E9] font-bold">1.</span>
                    <span>Book a time slot that works for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EA5E9] font-bold">2.</span>
                    <span>I'll review your setup details before our call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EA5E9] font-bold">3.</span>
                    <span>We'll do the installation together via screen share</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0EA5E9] font-bold">4.</span>
                    <span>You'll have your private AI running by the end of the call!</span>
                  </li>
                </ol>
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
