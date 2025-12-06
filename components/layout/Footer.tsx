import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p>© {new Date().getFullYear()} Sellorbid.ie. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/legal/terms" className="hover:underline">Terms</Link>
          <Link href="/legal/privacy" className="hover:underline">Privacy</Link>
          <Link href="/legal/cookies" className="hover:underline">Cookies</Link>
          <Link href="/legal/non-payment" className="hover:underline">Non-payment</Link>
        </div>
      </div>
    </footer>
  );
}
