"use client";

import { useState, FormEvent, ReactNode } from "react";
import { Button } from "@/components/ui/button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NewsletterSignupProps {
  // Tags where the subscriber came from (e.g. "prompt-library"); omitted for the default newsletter.
  source?: string;
  buttonLabel?: string;
  // Rendered in place of the form after a successful signup (e.g. a download link).
  successContent?: ReactNode;
}

export function NewsletterSignup({ source, buttonLabel = "Subscribe", successContent }: NewsletterSignupProps = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(source ? { email, source } : { email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  }

  if (status === "success" && successContent) {
    return <div>{successContent}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        aria-label="Email address"
        className="flex-1 min-w-0 rounded-full bg-[#0d0d12] border border-white/10 px-5 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] transition-colors"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#0b7f73] hover:bg-[#0f766e] text-white rounded-full px-7 py-3 h-auto disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : buttonLabel}
      </Button>
      {status !== "idle" && status !== "loading" && (
        <p className={`sm:w-full text-sm ${status === "success" ? "text-[#2dd4bf]" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
