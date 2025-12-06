"use client";

import { useState } from "react";

const categories = [
  "Cars",
  "Trucks",
  "Trailers",
  "Lawnmowers",
  "Household",
  "Agri",
  "Plant & Machinery"
];

const durations = [
  { label: "3 day auction", value: 3 },
  { label: "7 day auction", value: 7 }
];

export default function SellPage() {
  const [reservePrice, setReservePrice] = useState<number | "">("");
  const [startPrice, setStartPrice] = useState<number | "">("");
  const [duration, setDuration] = useState(7);

  return (
    <div className="max-w-2xl space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">List an item</h1>
        <p className="text-sm text-slate-600">
          Choose a category, reserve price and auction length. Listing fees are based on the reserve.
        </p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Listing submitted (mock). Here you would redirect to Stripe to pay the listing fee.");
        }}
        className="space-y-4 rounded-2xl bg-white shadow-sm p-5"
      >
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Title</label>
          <input
            required
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            placeholder="e.g. 2017 Ford Kuga 2.0 TDCi"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Category</label>
          <select
            required
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Description</label>
          <textarea
            required
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            placeholder="Be honest about the condition, history and collection location."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Reserve price (€)</label>
            <input
              type="number"
              min={0}
              required
              value={reservePrice}
              onChange={(e) =>
                setReservePrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Starting bid (€)</label>
            <input
              type="number"
              min={0}
              value={startPrice}
              onChange={(e) =>
                setStartPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Auction duration</label>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
              <button
                key={d.value}
                type="button"
                onClick={() => setDuration(d.value)}
                className={`rounded-full px-4 py-2 text-sm border ${
                  duration === d.value
                    ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-700 space-y-1.5">
          <p className="font-semibold">Listing fees (based on reserve price):</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>Items under €50: €3</li>
            <li>€51 – €100: €6</li>
            <li>€101 – €500: €10</li>
            <li>€501 – €1,000: €15</li>
            <li>€1,001 – €5,000: €25</li>
            <li>€5,001 – €10,000: €35</li>
            <li>€10,001+: €45</li>
          </ul>
          <p>All listing prices are determined by the reserve price set by the Seller.</p>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-emerald-600 text-white text-sm font-semibold py-2.5 hover:bg-emerald-700"
        >
          Continue to payment
        </button>
      </form>
    </div>
  );
}
