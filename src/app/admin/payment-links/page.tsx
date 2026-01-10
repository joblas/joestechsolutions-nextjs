"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Desktop, Cloud, Copy, Check, EnvelopeSimple, Lock } from "@phosphor-icons/react";

// Simple password protection - change this to your secret password
const ADMIN_PASSWORD = "joeadmin2026";

const PAYMENT_LINKS = {
  local: {
    name: "Private AI Local Setup",
    price: "$150",
    description: "One-time payment",
    url: "https://buy.stripe.com/9B6eVc58E5Fvb9reAJ0x200",
    icon: Desktop,
    color: "#0EA5E9",
  },
  vps: {
    name: "Private AI VPS Setup",
    price: "$500 + $50/mo",
    description: "Setup + Monthly hosting",
    url: "https://buy.stripe.com/8x200i30w3xna5n2S10x201",
    icon: Cloud,
    color: "#06B6D4",
  },
  vpsMonthly: {
    name: "VPS Monthly Hosting",
    price: "$50/mo",
    description: "Monthly subscription only",
    url: "https://buy.stripe.com/4gM14mfNi2tjcdv0JT0x202",
    icon: Cloud,
    color: "#8B5CF6",
  },
};

const EMAIL_TEMPLATES = {
  local: {
    subject: "Your Private AI Setup - Payment Link",
    body: `Hi [NAME],

Great chatting with you! As discussed, here's the payment link for your Private AI Local Setup:

[PAYMENT_LINK]

Once payment is complete, I'll reach out to schedule our 75-minute setup session where we'll:
• Go over how everything works (15 min)
• Install and configure your private AI (45 min)
• Demo and hands-on practice (15 min)

Looking forward to getting you set up!

Best,
Joe
Joe's Tech Solutions`,
  },
  vps: {
    subject: "Your Private AI VPS Setup - Payment Link",
    body: `Hi [NAME],

Great chatting with you! As discussed, here's the payment link for your Private AI VPS Setup:

[PAYMENT_LINK]

This includes:
• $500 one-time setup fee
• $50/month for hosting, domain, and ongoing support

Once payment is complete, I'll reach out to schedule our setup session and get your private AI server running.

Looking forward to getting you set up!

Best,
Joe
Joe's Tech Solutions`,
  },
  vpsMonthly: {
    subject: "VPS Monthly Hosting - Subscription Link",
    body: `Hi [NAME],

Here's the link to subscribe to VPS Monthly Hosting:

[PAYMENT_LINK]

This is $50/month and covers your dedicated server, domain, and ongoing support.

Let me know if you have any questions!

Best,
Joe
Joe's Tech Solutions`,
  },
};

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      className={`gap-2 ${copied ? "bg-green-500/20 border-green-500 text-green-400" : "border-white/20 hover:bg-white/10"}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}

export default function PaymentLinksAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const stored = sessionStorage.getItem("admin_auth");
    if (stored === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  // Password screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <Card className="bg-[#1c1c26] border-white/10 w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock weight="duotone" className="h-8 w-8 text-[#0EA5E9]" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-white/60 text-sm">Enter password to continue</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:outline-none"
                autoFocus
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white py-6 rounded-xl"
              >
                Access Admin
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2 font-space-grotesk">
          Payment Links
        </h1>
        <p className="text-white/60 mb-8">
          Copy and send these to customers after discovery calls.
        </p>

        {/* Payment Link Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {Object.entries(PAYMENT_LINKS).map(([key, link]) => (
            <Card key={key} className="bg-[#1c1c26] border-white/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <link.icon
                      weight="duotone"
                      className="h-6 w-6"
                      style={{ color: link.color }}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{link.name}</h2>
                    <p className="text-white/60">
                      {link.price} — {link.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-[#0d0d12] rounded-lg border border-white/10">
                  <code className="text-sm text-white/80 break-all">{link.url}</code>
                </div>
                <div className="flex gap-3">
                  <CopyButton text={link.url} label="Copy Link" />
                  <CopyButton
                    text={EMAIL_TEMPLATES[key as keyof typeof EMAIL_TEMPLATES].body.replace("[PAYMENT_LINK]", link.url)}
                    label="Copy Email"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Templates */}
        <h2 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
          Email Templates
        </h2>
        <div className="space-y-6">
          {Object.entries(EMAIL_TEMPLATES).map(([key, template]) => (
            <Card key={key} className="bg-[#1c1c26] border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <EnvelopeSimple weight="duotone" className="h-5 w-5 text-white/60" />
                    <h3 className="text-lg font-semibold text-white">
                      {key === "local" ? "Local Setup" : key === "vps" ? "VPS Setup" : "VPS Monthly"} Email
                    </h3>
                  </div>
                  <CopyButton
                    text={template.body.replace(
                      "[PAYMENT_LINK]",
                      PAYMENT_LINKS[key as keyof typeof PAYMENT_LINKS].url
                    )}
                    label="Copy"
                  />
                </div>
                <p className="text-white/60 text-sm">
                  Subject: {template.subject}
                </p>
              </CardHeader>
              <CardContent>
                <pre className="p-4 bg-[#0d0d12] rounded-lg border border-white/10 text-sm text-white/70 whitespace-pre-wrap font-sans">
                  {template.body.replace(
                    "[PAYMENT_LINK]",
                    PAYMENT_LINKS[key as keyof typeof PAYMENT_LINKS].url
                  )}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-12 p-6 bg-[#1c1c26] rounded-xl border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Reference</h3>
          <div className="space-y-2 text-white/70">
            <p><strong>Local:</strong> $150 one-time → 75-min live session</p>
            <p><strong>VPS Full:</strong> $500 setup + $50/mo → Setup + hosted server + ongoing support</p>
            <p><strong>VPS Monthly:</strong> $50/mo → Monthly subscription only (for existing customers)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
