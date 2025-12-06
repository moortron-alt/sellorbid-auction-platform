"use client";

import { useState } from "react";

type Props = { auctionId: string };

export function TransportRequestPanel({ auctionId }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="rounded-2xl bg-white shadow-sm p-4 space-y-3">
      <header className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold">Transport request</h2>
          <p className="text-xs text-slate-600">
            Ask transport companies to quote for collection and delivery if you win.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-xs rounded-full border border-slate-300 px-3 py-1 hover:bg-slate-100"
        >
          {open ? "Hide" : "Open"}
        </button>
      </header>
      {open && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Transport request submitted (mock).");
          }}
          className="space-y-2"
        >
          <div className="grid gap-2 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium">Collection Eircode / Town</label>
              <input
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Delivery Eircode / Town</label>
              <input
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium">Preferred dates</label>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
              placeholder="e.g. Weekdays only, within 2 weeks"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 hover:bg-black"
          >
            Submit request
          </button>
        </form>
      )}
    </section>
  );
}
