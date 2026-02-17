import Stripe from "stripe";

// Lazy initialization of Stripe to avoid build-time errors
let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-12-15.clover",
      typescript: true,
    });
  }
  return stripeInstance;
}

// For backwards compatibility, export as stripe
export const stripe = {
  get checkout() {
    return getStripe().checkout;
  },
  get customers() {
    return getStripe().customers;
  },
  get prices() {
    return getStripe().prices;
  },
  get products() {
    return getStripe().products;
  },
  get subscriptions() {
    return getStripe().subscriptions;
  },
};

// ── Price IDs for Private AI Setup products ──
// Replace with actual Stripe price IDs in Vercel env vars

// Tier 1: "Local AI Setup" — $199 one-time
export const LOCAL_PRICE_ID = process.env.STRIPE_LOCAL_PRICE_ID || "price_1T1w5REPUVHldjzRFYyftUQZ";

// Tier 2: "Cloud AI Server" — $499 one-time setup fee
export const CLOUD_SETUP_PRICE_ID = process.env.STRIPE_CLOUD_SETUP_PRICE_ID || "price_1T1w5SEPUVHldjzRy3WCPIzF";

// Tier 2: "Cloud AI Monthly" — $29/mo subscription
export const CLOUD_MONTHLY_PRICE_ID = process.env.STRIPE_CLOUD_MONTHLY_PRICE_ID || "price_1T1w5TEPUVHldjzRix8wQQ5i";

// Tier 3: "Managed AI + Automation" — $999 one-time setup fee
export const MANAGED_SETUP_PRICE_ID = process.env.STRIPE_MANAGED_SETUP_PRICE_ID || "price_1T1w5UEPUVHldjzRdGuJTcGa";

// Tier 3: "Managed AI Monthly" — $79/mo subscription
export const MANAGED_MONTHLY_PRICE_ID = process.env.STRIPE_MANAGED_MONTHLY_PRICE_ID || "price_1T1w5UEPUVHldjzRd5TlawBn";

// Compliance add-on — +$100 one-time (Healthcare, Legal, Financial, Therapy)
export const COMPLIANCE_ADDON_PRICE_ID = process.env.STRIPE_COMPLIANCE_ADDON_PRICE_ID || "price_1T1w5VEPUVHldjzRFINbdvav";

// Legacy aliases (backwards compat)
export const VPS_SETUP_PRICE_ID = CLOUD_SETUP_PRICE_ID;
export const VPS_MONTHLY_PRICE_ID = CLOUD_MONTHLY_PRICE_ID;

// Base URL for redirects
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Setup type definitions
export type SetupType = "local" | "cloud" | "managed";

export const TIER_LABELS: Record<SetupType, string> = {
  local: "Local AI Setup",
  cloud: "Cloud AI Server",
  managed: "Managed AI + Automation",
};

export const TIER_PRICES: Record<SetupType, { setup: string; monthly?: string }> = {
  local: { setup: "$199" },
  cloud: { setup: "$499", monthly: "$29/mo" },
  managed: { setup: "$999", monthly: "$79/mo" },
};
