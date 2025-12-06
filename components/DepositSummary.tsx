type Props = {
  currentBid: number;
  depositRate: number;
};

export function DepositSummary({ currentBid, depositRate }: Props) {
  const deposit = Math.round(currentBid * depositRate);
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-700 space-y-1">
      <p className="font-semibold">Deposit if you win</p>
      <p>
        A 10% deposit is required when the auction ends and you are the winning bidder. Based on the current bid,
        the estimated deposit is <strong>€{deposit.toLocaleString()}</strong>.
      </p>
      <p>The deposit is paid straight to the Seller. Remaining balance is arranged directly.</p>
    </div>
  );
}
