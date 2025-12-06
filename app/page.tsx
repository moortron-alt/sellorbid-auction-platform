import Link from "next/link";
import { CategoryGrid } from "../components/CategoryGrid";
import { AuctionCard } from "../components/AuctionCard";

const mockAuctions = [
  {
    id: "1",
    title: "2017 Ford Kuga 2.0 TDCi",
    category: "Cars",
    reserveMet: false,
    currentBid: 7200,
    reservePrice: 8000,
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString()
  },
  {
    id: "2",
    title: "John Deere 6930 Tractor",
    category: "Agri",
    reserveMet: true,
    currentBid: 46000,
    reservePrice: 45000,
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString()
  }
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-white shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-3">
          <p className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
            Irish auctions • Euro only
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            You Sell or Bid on <span className="text-emerald-700">Sellorbid.ie</span>
          </h1>
          <p className="text-slate-600">
            List items with a reserve, run 3 or 7 day auctions, and collect a 10% deposit when the item is won.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sell"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700"
            >
              List an item
            </Link>
            <Link
              href="/auctions"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 hover:bg-slate-100"
            >
              Browse live auctions
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full">
          <CategoryGrid />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Ending soon</h2>
          <Link href="/auctions" className="text-sm text-emerald-700 hover:underline">
            View all auctions
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {mockAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </section>
    </div>
  );
}
