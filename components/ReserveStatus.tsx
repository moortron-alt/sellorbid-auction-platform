type Props = {
  reserveMet: boolean;
  reservePrice: number;
  currentBid: number;
};

export function ReserveStatus({ reserveMet, reservePrice, currentBid }: Props) {
  if (reserveMet || currentBid >= reservePrice) {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
        Reserve met
      </div>
    );
  }
  const remaining = reservePrice - currentBid;
  return (
    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
      Reserve not met – €{remaining.toLocaleString()} to go
    </div>
  );
}
