import { notFound } from "next/navigation";
import { CountdownTimer } from "../../../components/CountdownTimer";
import { ReserveStatus } from "../../../components/ReserveStatus";
import { DepositSummary } from "../../../components/DepositSummary";
import { TransportRequestPanel } from "../../../components/TransportRequestPanel";
import { MessageSellerPanel } from "../../../components/MessageSellerPanel";
import { UnsoldOffersPanel } from "../../../components/UnsoldOffersPanel";

type Props = { params: { id: string } };

const mockAuction = {
  id: "1",
  title: "2017 Ford Kuga 2.0 TDCi",
  description:
    "Irish car, NCT tested, good service history. Reserve must be met before the car can be won.",
  category: "Cars",
  reserveMet: false,
  currentBid: 7200,
  reservePrice: 8000,
  depositRate: 0.1,
  endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString()
};

export default function AuctionDetailPage({ params }: Props) {
  if (params.id !== mockAuction.id) notFound();

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{mockAuction.title}</h1>
          <p className="text-sm text-slate-600">{mockAuction.category}</p>
        </div>
        <CountdownTimer endsAt={mockAuction.endsAt} />
      </header>

      <section className="grid gap-6 md:grid-cols-[2fr,1.3fr] items-start">
        <div className="space-y-4">
          <div className="rounded-2xl bg-white shadow-sm p-4">
            <h2 className="text-sm font-semibold mb-2">Description</h2>
            <p className="text-sm text-slate-700 whitespace-pre-line">
              {mockAuction.description}
            </p>
          </div>

          <UnsoldOffersPanel auctionId={mockAuction.id} reservePrice={mockAuction.reservePrice} />
          <TransportRequestPanel auctionId={mockAuction.id} />
          <MessageSellerPanel auctionId={mockAuction.id} />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white shadow-sm p-4 space-y-3">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-slate-600">Current bid</span>
              <span className="text-2xl font-semibold">
                €{mockAuction.currentBid.toLocaleString()}
              </span>
            </div>

            <ReserveStatus
              reserveMet={mockAuction.reserveMet}
              reservePrice={mockAuction.reservePrice}
              currentBid={mockAuction.currentBid}
            />

            <DepositSummary
              currentBid={mockAuction.currentBid}
              depositRate={mockAuction.depositRate}
            />

            <button className="w-full rounded-full bg-emerald-600 text-white text-sm font-semibold py-2.5 hover:bg-emerald-700">
              Place bid
            </button>

            <p className="text-[11px] text-slate-500">
              When the auction ends and the reserve price is met, the winning bidder pays a 10% deposit.
              The deposit goes straight to the Seller. Remaining balance and collection are arranged
              directly between Seller and buyer.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
