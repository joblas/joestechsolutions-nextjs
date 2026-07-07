import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "newsletter-subscribers.json");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscriberRecord = {
  email: string;
  subscribedAt: string;
  source?: string;
};

async function loadSubscribers(): Promise<SubscriberRecord[]> {
  try {
    const raw = await readFile(DB_PATH, "utf8");
    return JSON.parse(raw) as SubscriberRecord[];
  } catch {
    return [];
  }
}

async function saveSubscribers(subscribers: SubscriberRecord[]) {
  await writeFile(DB_PATH, JSON.stringify(subscribers, null, 2) + "\n", "utf8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body.source === "string" ? body.source.trim().slice(0, 64) : undefined;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const subscribers = await loadSubscribers();
    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json({ success: true, message: "You're already subscribed." });
    }

    subscribers.push({ email, subscribedAt: new Date().toISOString(), ...(source ? { source } : {}) });
    await saveSubscribers(subscribers);

    return NextResponse.json({ success: true, message: "You're in." });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json({ success: false, error: "Something went wrong." }, { status: 500 });
  }
}
