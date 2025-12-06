"use client";

import { useState } from "react";

type Props = { auctionId: string; reservePrice: number };

export function UnsoldOffersPanel({ auctionId, reservePrice }: Props) {
  const [offer, setOffer] = useState<number | "">("");

  return (
    <section className="rounded-2xl bg-white shadow-sm p-4 space-y-3">
      <h2 className="text-sm font-semibold">Offer on unsold items</h2>
      <p className="text-xs text-slate-600">
        If an item does not meet its reserve, the Seller can review offers here and accept or reject them.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Offer submitted (mock). Seller would be notified.");
        }}
        className="space-y-2"
      >
        <div className="space-y-1">
          <label className="text-xs font-medium">Your offer (€)</label>
          <input
            type="number"
            min={0}
            value={offer}
            onChange={(e) => setOffer(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
          />
        </div>
        <p className="text-[11px] text-slate-500">
          Reserve price: €{reservePrice.toLocaleString()}. Sellers are not obliged to accept any offer.
        </p>
        <button
          type="submit"
          className="rounded-full bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 hover:bg-black"
        >
          Place offer
        </button>
      </form>
    </section>
  );
}
