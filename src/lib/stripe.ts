import Stripe from "stripe";

// Re-export pricing constants so existing `@/lib/stripe` imports keep working
export {
  LOCAL_PRICE_ID,
  CLOUD_SETUP_PRICE_ID,
  CLOUD_MONTHLY_PRICE_ID,
  MANAGED_SETUP_PRICE_ID,
  MANAGED_MONTHLY_PRICE_ID,
  COMPLIANCE_ADDON_PRICE_ID,
  VPS_SETUP_PRICE_ID,
  VPS_MONTHLY_PRICE_ID,
  BASE_URL,
  TIER_LABELS,
  TIER_PRICES,
} from "./pricing";
export type { SetupType } from "./pricing";

// Lazy initialization of Stripe to avoid build-time errors
let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
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
