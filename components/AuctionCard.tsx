import Link from "next/link";
import { CountdownTimer } from "./CountdownTimer";
import { ReserveStatus } from "./ReserveStatus";

type Auction = {
  id: string;
  title: string;
  category: string;
  reserveMet: boolean;
  currentBid: number;
  reservePrice: number;
  endsAt: string;
};

export function AuctionCard({ auction }: { auction: Auction }) {
  return (
    <Link
      href={`/auctions/${auction.id}`}
      className="block rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-200 p-4 space-y-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold">{auction.title}</h3>
          <p className="text-xs text-slate-500">{auction.category}</p>
        </div>
        <CountdownTimer endsAt={auction.endsAt} />
      </div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <div>
          <p className="text-xs text-slate-500">Current bid</p>
          <p className="text-lg font-semibold">€{auction.currentBid.toLocaleString()}</p>
        </div>
        <ReserveStatus
          reserveMet={auction.reserveMet}
          reservePrice={auction.reservePrice}
          currentBid={auction.currentBid}
        />
      </div>
    </Link>
  );
}
