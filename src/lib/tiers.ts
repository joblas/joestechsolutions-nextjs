// Marketing tier ladder — the canonical 6-tier model for homepage, /solutions, /services.
// NOT lib/pricing.ts — that's the live Stripe funnel for /private-ai-setup.
// Overlap: Quick Start ($199) = pricing.ts `local`.

export type Tier = {
  id:
    | "morning-brief"
    | "quick-start"
    | "back-office"
    | "business-os"
    | "custom-build"
    | "agent-system";
  name: string;
  price: string;
  cadence: "monthly" | "one-time" | "from";
  href: string;
  category: string;
  blurb: string;
  features: string[];
  badge?: "New" | "Most Popular" | "Most Impactful";
  accent: "#0d9488" | "#2dd4bf" | "#8B5CF6";
  stripeReady: boolean; // false → CTA routes to /contact until Stripe product exists
};

export const TIERS: Tier[] = [
  {
    id: "morning-brief",
    name: "Morning Brief",
    price: "$199",
    cadence: "monthly",
    href: "/morning-brief",
    category: "Daily briefing",
    blurb:
      "Your business, briefed every morning — calendar, inbox, pipeline, blockers in a 6am digest.",
    features: [
      "6am digest of calendar, inbox, pipeline, and blockers",
      "Tuned to your business and the tools you already use",
      "The same brief I get from Hermes every morning",
      "Cancel anytime",
    ],
    badge: "New",
    accent: "#2dd4bf",
    stripeReady: false,
  },
  {
    id: "quick-start",
    name: "Quick Start",
    price: "$199",
    cadence: "one-time",
    href: "/private-ai-setup",
    category: "Private AI",
    blurb: "Private AI on your machine or server. You own it. No subscriptions.",
    features: [
      "Runs on your own machine or private server",
      "75-minute live setup session",
      "No data leaks, no subscriptions",
      "You own everything when we're done",
    ],
    badge: "Most Popular",
    accent: "#0d9488",
    stripeReady: true,
  },
  {
    id: "back-office",
    name: "Back Office",
    price: "$499",
    cadence: "monthly",
    href: "/services#back-office",
    category: "Automation",
    blurb: "AI assistant on your server — outreach, scheduling, reporting; tuned monthly.",
    features: [
      "AI assistant running on your own server",
      "Handles outreach, scheduling, and reporting",
      "Tuned and maintained every month",
      "Your data never leaves your infrastructure",
    ],
    accent: "#0d9488",
    stripeReady: false,
  },
  {
    id: "business-os",
    name: "Business OS",
    price: "$999",
    cadence: "monthly",
    href: "/business-os",
    category: "Operations layer",
    blurb: "Full operations layer — briefings, automation, reporting, a light agent org.",
    features: [
      "Daily briefings plus back-office automation",
      "Reporting across your whole operation",
      "A light agent org working your workflows",
      "Managed, monitored, and tuned monthly",
    ],
    accent: "#8B5CF6",
    stripeReady: false,
  },
  {
    id: "custom-build",
    name: "Custom Build",
    price: "$2,500+",
    cadence: "from",
    href: "/services#custom-build",
    category: "Mobile + web",
    blurb:
      "Mobile/web apps built with the stack I use daily — React Native, Next.js, AI-assisted.",
    features: [
      "React Native and Next.js — the stack I ship with daily",
      "AI-assisted development, human-verified",
      "Scoped and priced before I write a line",
      "You own the code and the repo",
    ],
    accent: "#2dd4bf",
    stripeReady: false,
  },
  {
    id: "agent-system",
    name: "Enterprise Agent System",
    price: "$8K–$40K+",
    cadence: "from",
    href: "/agent-system",
    category: "Full automation",
    blurb:
      "Orchestrator delegating to specialized sub-agents — the architecture I run for JTS.",
    features: [
      "Orchestrator + specialized sub-agents on your VPS",
      "Memory system, skills library, cron automation",
      "Telegram, Gmail, Instagram, Stripe integrations",
      "The same architecture running JTS right now",
    ],
    badge: "Most Impactful",
    accent: "#8B5CF6",
    stripeReady: false,
  },
];
