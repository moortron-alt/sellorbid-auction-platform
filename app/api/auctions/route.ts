import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ auctions: [] });
}

export async function POST() {
  // Validate payload, create auction record, calculate listing fee, etc.
  return NextResponse.json({ ok: true });
}
