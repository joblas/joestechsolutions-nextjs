import { NextRequest, NextResponse } from "next/server";
import {
  getStripe,
  LOCAL_PRICE_ID,
  CLOUD_SETUP_PRICE_ID,
  CLOUD_MONTHLY_PRICE_ID,
  MANAGED_SETUP_PRICE_ID,
  MANAGED_MONTHLY_PRICE_ID,
  COMPLIANCE_ADDON_PRICE_ID,
  BASE_URL,
  SetupType,
} from "@/lib/stripe";

interface CheckoutRequest {
  type: SetupType;
  includeMonthly?: boolean;
  includeCompliance?: boolean;
  intakeId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    const { type, includeMonthly = true, includeCompliance = false, intakeId } = body;

    // Validate request
    if (!type || !["local", "cloud", "managed"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid checkout type. Must be 'local', 'cloud', or 'managed'." },
        { status: 400 }
      );
    }

    // Check if we're in demo mode (Stripe not configured)
    const isDemoMode =
      LOCAL_PRICE_ID.includes("REPLACE_ME") ||
      CLOUD_SETUP_PRICE_ID.includes("REPLACE_ME") ||
      !process.env.STRIPE_SECRET_KEY;

    if (isDemoMode) {
      console.log("Demo mode: Stripe not configured, redirecting to success page");
      const demoSessionId = `demo_${Date.now()}_${type}`;
      return NextResponse.json({
        url: `${BASE_URL}/private-ai-setup/success?session_id=${demoSessionId}&type=${type}&demo=true`,
      });
    }

    // Build line items based on type
    const lineItems: { price: string; quantity: number }[] = [];

    if (type === "local") {
      lineItems.push({ price: LOCAL_PRICE_ID, quantity: 1 });
    } else if (type === "cloud") {
      lineItems.push({ price: CLOUD_SETUP_PRICE_ID, quantity: 1 });
      if (includeMonthly) {
        lineItems.push({ price: CLOUD_MONTHLY_PRICE_ID, quantity: 1 });
      }
    } else if (type === "managed") {
      lineItems.push({ price: MANAGED_SETUP_PRICE_ID, quantity: 1 });
      if (includeMonthly) {
        lineItems.push({ price: MANAGED_MONTHLY_PRICE_ID, quantity: 1 });
      }
    }

    // Add compliance add-on if requested
    if (includeCompliance) {
      lineItems.push({ price: COMPLIANCE_ADDON_PRICE_ID, quantity: 1 });
    }

    const stripe = getStripe();

    // Determine mode: subscription if monthly items present, otherwise payment
    const hasSubscription = lineItems.some(
      (item) =>
        item.price === CLOUD_MONTHLY_PRICE_ID ||
        item.price === MANAGED_MONTHLY_PRICE_ID
    );

    const session = await stripe.checkout.sessions.create({
      mode: hasSubscription ? "subscription" : "payment",
      line_items: lineItems,
      success_url: `${BASE_URL}/private-ai-setup/success?session_id={CHECKOUT_SESSION_ID}&type=${type}`,
      cancel_url: `${BASE_URL}/private-ai-setup/qualify?type=${type}&cancelled=true`,
      metadata: {
        type,
        intakeId: intakeId || "",
        includeCompliance: includeCompliance ? "true" : "false",
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
