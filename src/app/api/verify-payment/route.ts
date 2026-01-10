import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { valid: false, error: "No session ID provided" },
        { status: 400 }
      );
    }

    // Retrieve the Checkout Session from Stripe
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer", "line_items"],
    });

    // Check if payment was successful
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { valid: false, error: "Payment not completed" },
        { status: 400 }
      );
    }

    // Extract customer info
    const customerEmail = session.customer_details?.email || "";
    const customerName = session.customer_details?.name || "";
    const setupType = session.metadata?.type || "local";

    return NextResponse.json({
      valid: true,
      email: customerEmail,
      name: customerName,
      type: setupType,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { valid: false, error: "Unable to verify payment" },
      { status: 500 }
    );
  }
}
