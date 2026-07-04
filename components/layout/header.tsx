"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data/site";
import { cn } from "@/lib/utils";
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
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-[var(--body)] hover:text-[var(--foreground)] rounded-lg hover:bg-slate-100 transition-colors">
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
        <div className="lg:hidden border-t border-[var(--border)] bg-white">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-slate-50 rounded-lg">
                {link.label}
              </Link>
            ))}
            <Link href="/iletisim" onClick={() => setOpen(false)} className="mt-2 px-3 py-3 text-base font-semibold text-white bg-[var(--primary)] hover:bg-[var(--foreground-strong)] rounded-lg text-center">
              Teklif Al →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}