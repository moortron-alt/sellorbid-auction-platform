"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/auctions", label: "Auctions" },
  { href: "/sell", label: "Sell an item" },
  { href: "/account/favourites", label: "Saved" },
  { href: "/account", label: "Account" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
            S
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-sm">Sellorbid.ie</div>
            <div className="text-[11px] text-slate-500">You Sell or Bid</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-full ${
                  active
                    ? "bg-emerald-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/account"
          className="text-xs md:text-sm rounded-full border border-slate-300 px-3 py-1.5 hover:bg-slate-100"
        >
          Sign in / Register
        </Link>
      </div>
    </header>
  );
}
