"use client";

import { useEffect, useState } from "react";

export function CountdownTimer({ endsAt }: { endsAt: string }) {
  const [remaining, setRemaining] = useState<string>("");

  useEffect(() => {
    const target = new Date(endsAt).getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setRemaining("Auction ended");
        return;
      }
      const seconds = Math.floor(diff / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      setRemaining(`${days}d ${hours}h ${minutes}m remaining`);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [endsAt]);

  return (
    <div className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs font-medium px-3 py-1.5">
      {remaining || "Loading..."}
    </div>
  );
}
