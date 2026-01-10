import { NextRequest, NextResponse } from "next/server";
import { addIntake, getRecentIntakes, type IntakeData } from "@/lib/intakes";

// POST - Create new intake
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields (sessionId is optional - added after payment)
    const requiredFields = ["email", "name", "setupType", "operatingSystem", "useCases"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate setupType
    if (!["local", "vps"].includes(body.setupType)) {
      return NextResponse.json(
        { error: "Invalid setupType. Must be 'local' or 'vps'." },
        { status: 400 }
      );
    }

    // Create intake data object
    const intakeData: Omit<IntakeData, "id" | "timestamp" | "status"> = {
      sessionId: body.sessionId || "", // Will be updated after Stripe payment
      email: body.email,
      name: body.name,
      setupType: body.setupType,
      operatingSystem: body.operatingSystem,
      specs: body.specs || "",
      useCases: body.useCases,
    };

    // Add VPS-specific fields if applicable
    if (body.setupType === "vps") {
      intakeData.domainPreference = body.domainPreference || "";
      intakeData.modelSizePreference = body.modelSizePreference || "small";
    }

    const intake = await addIntake(intakeData);

    console.log(`[Intake Created] ${intake.id} - ${intake.setupType} - ${intake.email}`);

    return NextResponse.json({
      success: true,
      id: intake.id,
    });
  } catch (error) {
    console.error("Intake creation error:", error);
    return NextResponse.json(
      { error: "Failed to create intake" },
      { status: 500 }
    );
  }
}

// GET - Get recent intakes (basic admin endpoint)
export async function GET(request: NextRequest) {
  try {
    // Optional: Add basic auth check here
    // const authHeader = request.headers.get("authorization");
    // if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const limit = parseInt(request.nextUrl.searchParams.get("limit") || "50", 10);
    const intakes = await getRecentIntakes(limit);

    return NextResponse.json({
      count: intakes.length,
      intakes,
    });
  } catch (error) {
    console.error("Intake fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch intakes" },
      { status: 500 }
    );
  }
}

/*
 * STRIPE WEBHOOK (Future enhancement)
 *
 * To automatically log payments even if user doesn't complete intake form,
 * set up a Stripe webhook for the checkout.session.completed event:
 *
 * 1. Create /api/webhooks/stripe/route.ts
 * 2. Configure webhook in Stripe Dashboard → Developers → Webhooks
 * 3. Listen for checkout.session.completed
 * 4. Log payment to database with session metadata
 *
 * See: https://stripe.com/docs/webhooks
 */
