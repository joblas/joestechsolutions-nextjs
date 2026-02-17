import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerData = {
      date: new Date().toISOString(),
      name: session.customer_details?.name || "",
      email: session.customer_details?.email || "",
      tier: session.metadata?.type || "unknown",
      amount: session.amount_total ? (session.amount_total / 100).toFixed(2) : "0",
      currency: session.currency?.toUpperCase() || "USD",
      status: session.payment_status || "unknown",
      stripeSessionId: session.id,
      mode: session.mode || "payment",
    };

    console.log("[Stripe Webhook] New customer:", JSON.stringify(customerData));

    // Store in Stripe customer metadata for persistence
    if (session.customer) {
      try {
        await stripe.customers.update(session.customer as string, {
          metadata: {
            tier: customerData.tier,
            onboarded: "false",
            source: "private-ai-setup",
          },
        });
      } catch (err) {
        console.error("Failed to update customer metadata:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
