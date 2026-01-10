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
// Note: This will throw at runtime if STRIPE_SECRET_KEY is not set
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

// Price IDs for Private AI Setup products
// Replace with your actual price IDs from Stripe Dashboard

// "Private AI Local Setup" — $99 one-time
export const LOCAL_PRICE_ID = process.env.STRIPE_LOCAL_PRICE_ID || "price_LOCAL_REPLACE_ME";

// "Private AI VPS Setup" — $99 one-time setup fee
export const VPS_SETUP_PRICE_ID = process.env.STRIPE_VPS_SETUP_PRICE_ID || "price_VPS_SETUP_REPLACE_ME";

// "VPS Monthly Hosting" — $29/mo subscription (optional, bundled with VPS)
export const VPS_MONTHLY_PRICE_ID = process.env.STRIPE_VPS_MONTHLY_PRICE_ID || "price_VPS_MONTHLY_REPLACE_ME";

// Base URL for redirects
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
