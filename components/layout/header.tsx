"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, HEADER_NAV_LINKS, SITE } from "@/lib/data/site";
import { cn, getWhatsAppWaMe } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/moving-border";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200/70", scrolled ? "shadow-md bg-white/95" : "shadow-sm")}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-slate-900 via-blue-800 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-extrabold text-lg leading-none">S</span>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base md:text-lg font-extrabold tracking-tight text-[var(--foreground)]">{SITE.shortName}</span>
              <span className="text-[10px] md:text-xs font-medium text-[var(--muted)] tracking-wider uppercase">Yazılım</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {HEADER_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.href === "/ek-gelir-eticaret"
                    ? "px-3 py-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-1.5"
                    : "px-3 py-2 text-sm font-medium text-[var(--body)] hover:text-[var(--foreground)] rounded-lg hover:bg-slate-100 transition-colors"
                }
              >
                {link.href === "/ek-gelir-eticaret" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/iletisim" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent-to)] transition-colors px-3 py-2">Teklif Al</Link>
            <MovingBorder as="a" href="/iletisim" borderRadius="9999px" duration={3500} containerClassName="h-10" className="text-sm">
              <span className="flex items-center gap-2">Hızlı İletişim →</span>
            </MovingBorder>
          </div>

          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-white shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-5 py-4 pb-28 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={link.href === "/ek-gelir-eticaret" ? "px-4 py-3.5 text-base font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors inline-flex items-center gap-2" : "px-4 py-3.5 text-base font-semibold text-[var(--foreground-strong)] hover:bg-slate-100 rounded-xl transition-colors"}>
                {link.href === "/ek-gelir-eticaret" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                {link.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-1 gap-2.5">
              <Link href="/iletisim" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 px-4 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl text-center shadow-lg shadow-blue-500/20 transition-all">
                Teklif Al →
              </Link>
              <a href={`https://wa.me/${getWhatsAppWaMe()}?text=${encodeURIComponent("Merhaba Sprinter, web sitenizden yazıyorum.")}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 px-4 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl text-center shadow-lg shadow-emerald-500/20 transition-all">
                <MessageCircle className="h-5 w-5" />
                WhatsApp'tan Yaz
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}