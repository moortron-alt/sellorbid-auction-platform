import { AuctionCard } from "../../components/AuctionCard";
import { CategoryFilter } from "../../components/CategoryFilter";

const mockAuctions = [
  {
    id: "1",
    title: "2017 Ford Kuga 2.0 TDCi",
    category: "Cars",
    reserveMet: false,
    currentBid: 7200,
    reservePrice: 8000,
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString()
  }
];

export default function AuctionsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Live timed auctions</h1>
          <p className="text-sm text-slate-600">
            Items are only won when the reserve price is met. Auctions run for 3 or 7 days.
          </p>
        </div>
        <CategoryFilter />
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {mockAuctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
}
