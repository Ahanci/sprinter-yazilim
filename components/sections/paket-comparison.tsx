"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import {
  ETICARET_PAKETLER,
  KURUMSAL_PAKETLER,
  PAKET_SIRASI,
  type Paket,
  type PaketAdi,
} from "@/lib/data/paketler";
import { cn } from "@/lib/utils";

type TabType = "e-ticaret" | "kurumsal";

interface PaketComparisonProps {
  /** Opsiyonel: sadece belirli paketleri göster (tek tip, sekmesiz). */
  only?: PaketAdi[];
  /** Gösterilecek başlık (varsayılan). */
  baslik?: string;
  /** Alt başlık. */
  altBaslik?: string;
  /** Varsayılan sekme (sadece iki sekme gösterilecekse). */
  defaultTab?: TabType;
  /** Sekmeleri gizle (tek tip paket gösterimi için). */
  hideTabs?: boolean;
}

export function PaketComparison({
  only,
  baslik = "Hizmet Paketlerimiz",
  altBaslik = "İşletmenizin ihtiyacına uygun paketi seçin.",
  defaultTab = "e-ticaret",
  hideTabs = false,
}: PaketComparisonProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  const paketler = activeTab === "e-ticaret" ? ETICARET_PAKETLER : KURUMSAL_PAKETLER;
  const filteredIds = only ?? PAKET_SIRASI;
  const filteredPaketler = filteredIds.map((id) => paketler[id] as Paket);

  const tabs: { key: TabType; label: string }[] = [
    { key: "e-ticaret", label: "E-Ticaret Paketleri" },
    { key: "kurumsal", label: "Kurumsal Web Paketleri" },
  ];

  return (
    <div className="w-full">
      {(baslik || altBaslik) && (
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            {baslik}
          </h2>
          {altBaslik && (
            <p className="mt-3 text-base md:text-lg text-[var(--body)] max-w-2xl mx-auto">
              {altBaslik}
            </p>
          )}
        </div>
      )}

      {/* Sekmeler */}
      {!hideTabs && (
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                  activeTab === tab.key
                    ? "bg-white text-[var(--foreground)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--body)]",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
        {filteredPaketler.map((p) => (
          <PaketCard key={p.id} paket={p} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-[var(--muted)]">
        Tüm paketlerde{" "}
        <strong className="text-[var(--foreground)]">%100 şeffaf süreç</strong>,{" "}
        <strong className="text-[var(--foreground)]">yazılı sözleşme</strong> ve{" "}
        <strong className="text-[var(--foreground)]">KVKK uyumu</strong> dahildir.
      </p>
    </div>
  );
}

function PaketCard({ paket: p }: { paket: Paket }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-white p-6 md:p-7 flex flex-col h-full transition-all duration-300",
        p.populer
          ? "border-blue-500 shadow-2xl shadow-blue-500/10 lg:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30"
          : "border-[var(--border)] shadow-sm hover:shadow-xl hover:border-slate-300",
      )}
    >
      {p.populer && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
          <Star className="h-3 w-3 fill-current" />
          EN POPÜLER
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
          {p.baslik}
        </h3>
        <p className="text-sm text-[var(--body)] leading-relaxed min-h-[3rem]">
          {p.slogan}
        </p>
      </div>

      <div className="mb-5 pb-5 border-b border-dashed border-[var(--border)]">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mb-1">
          {p.vurgu}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-[var(--foreground)]">
            {p.fiyatNotu}
          </span>
        </div>
        <p className="text-xs text-[var(--muted)] mt-1">
          {p.hedefKitle}
        </p>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {p.ozellikler.map((o, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-[var(--body)] leading-snug"
          >
            <Check
              className={cn(
                "h-4 w-4 mt-0.5 shrink-0",
                p.populer ? "text-blue-600" : "text-emerald-600",
              )}
              strokeWidth={2.5}
            />
            <span>{o}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/iletisim?paket=${p.id}&tipi=${p.tipi}`}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm h-12 px-6 transition-all",
          p.populer
            ? "bg-[var(--primary)] text-white hover:bg-[var(--foreground-strong)] shadow-lg shadow-slate-900/10"
            : "bg-slate-50 text-[var(--foreground)] hover:bg-slate-100 border border-[var(--border)]",
        )}
      >
        {p.ctaMetin}
      </Link>
    </div>
  );
}
