"use client";

import { useState } from "react";

type Props = { auctionId: string };

export function MessageSellerPanel({ auctionId }: Props) {
  const [message, setMessage] = useState("");

  return (
    <section className="rounded-2xl bg-white shadow-sm p-4 space-y-3">
      <header>
        <h2 className="text-sm font-semibold">Contact the Seller</h2>
        <p className="text-xs text-slate-600">
          Ask questions before you bid. No off-platform deals.
        </p>
      </header>
      <textarea
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
        placeholder="Type your message for the Seller..."
      />
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => alert("Message sent (mock).")}
          className="rounded-full bg-emerald-600 text-white text-xs font-semibold px-4 py-1.5 hover:bg-emerald-700"
        >
          Send message
        </button>
        <button
          type="button"
          onClick={() => alert("Voice note recording UI would open here (mock).")}
          className="text-[11px] rounded-full border border-slate-300 px-3 py-1 hover:bg-slate-100"
        >
          Leave a voice note (coming soon)
        </button>
      </div>
      <p className="text-[11px] text-slate-500">
        When an item is won or an offer accepted, Seller and buyer contact details are shared.
      </p>
    </section>
  );
}
