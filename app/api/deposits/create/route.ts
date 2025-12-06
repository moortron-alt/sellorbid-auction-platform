import { NextResponse } from "next/server";

export async function POST() {
  // Use Stripe to create Checkout session for 10% deposit (placeholder).
  return NextResponse.json({ ok: true, checkoutUrl: "https://example.com" });
}
