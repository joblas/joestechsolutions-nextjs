import { NextRequest, NextResponse } from "next/server";
import { getStripe, LOCAL_PRICE_ID, VPS_SETUP_PRICE_ID, VPS_MONTHLY_PRICE_ID, BASE_URL } from "@/lib/stripe";

interface CheckoutRequest {
  type: "local" | "vps";
  includeMonthly?: boolean; // For VPS, whether to include the monthly subscription
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    const { type, includeMonthly = true } = body;

    // Validate request
    if (!type || !["local", "vps"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid checkout type. Must be 'local' or 'vps'." },
        { status: 400 }
      );
    }

    // Validate price IDs are configured
    if (type === "local" && LOCAL_PRICE_ID.includes("REPLACE_ME")) {
      console.error("STRIPE_LOCAL_PRICE_ID is not configured");
      return NextResponse.json(
        { error: "Payment configuration error. Please contact support." },
        { status: 500 }
      );
    }

    if (type === "vps" && (VPS_SETUP_PRICE_ID.includes("REPLACE_ME") || VPS_MONTHLY_PRICE_ID.includes("REPLACE_ME"))) {
      console.error("VPS price IDs are not configured");
      return NextResponse.json(
        { error: "Payment configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Build line items based on type
    const lineItems: { price: string; quantity: number }[] = [];

    if (type === "local") {
      // Local setup: just the one-time $99 fee
      lineItems.push({ price: LOCAL_PRICE_ID, quantity: 1 });
    } else {
      // VPS setup: $99 setup fee + $29/mo subscription
      lineItems.push({ price: VPS_SETUP_PRICE_ID, quantity: 1 });

      if (includeMonthly) {
        lineItems.push({ price: VPS_MONTHLY_PRICE_ID, quantity: 1 });
      }
    }

    // Create Stripe Checkout Session
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: type === "vps" && includeMonthly ? "subscription" : "payment",
      line_items: lineItems,
      // Collect customer email and name
      customer_creation: "always",
      // For subscriptions, allow promotion codes
      allow_promotion_codes: type === "vps",
      // Success and cancel URLs
      success_url: `${BASE_URL}/private-ai-setup/success?session_id={CHECKOUT_SESSION_ID}&type=${type}`,
      cancel_url: `${BASE_URL}/private-ai-setup`,
      // Metadata for tracking
      metadata: {
        product: "private-ai-setup",
        type,
        setup_price: "99",
        monthly_price: type === "vps" && includeMonthly ? "29" : "0",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

/*
 * ALTERNATIVE: Stripe Payment Links
 *
 * If you prefer simpler integration, create Payment Links in Stripe Dashboard:
 * 1. Products → Payment Links → Create
 * 2. Create separate links for Local ($99) and VPS ($99 + $29/mo)
 *
 * Then replace this endpoint with:
 *
 * export async function POST(request: NextRequest) {
 *   const { type } = await request.json();
 *   const urls = {
 *     local: "https://buy.stripe.com/YOUR_LOCAL_LINK",
 *     vps: "https://buy.stripe.com/YOUR_VPS_LINK",
 *   };
 *   return NextResponse.json({ url: urls[type] });
 * }
 */
