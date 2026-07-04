import { Search, Palette, Code, Rocket, TrendingUp, type LucideIcon } from "lucide-react";
import { SUREC_ADIMLARI } from "@/lib/data/surec";

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search, palette: Palette, code: Code, rocket: Rocket, "trending-up": TrendingUp,
};

interface SurecTimelineProps {
  baslik?: string;
  altBaslik?: string;
}

export function SurecTimeline({
  baslik = "Nasıl Çalışıyoruz?",
  altBaslik = "5 net adım. Şeffaf süreç. Yazılı sözleşme. Ölçülebilir sonuçlar.",
}: SurecTimelineProps) {
  return (
    <section className="py-20 md:py-28 bg-[var(--background-soft)]">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">SÜREÇ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">{baslik}</h2>
          {altBaslik && <p className="mt-4 text-base md:text-lg text-[var(--body)] max-w-2xl mx-auto">{altBaslik}</p>}
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" aria-hidden="true" />

          <ol className="space-y-8 md:space-y-12">
            {SUREC_ADIMLARI.map((adim, idx) => {
              const Icon = ICON_MAP[adim.ikon] ?? Search;
              const isLeft = idx % 2 === 0;
              return (
                <li key={idx} className="relative">
                  <div className={`md:grid md:grid-cols-2 md:gap-12 ${isLeft ? "" : "md:[&>:first-child]:order-2"}`}>
                    <div className={isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}>
                      <div className={`inline-flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""} mb-2`}>
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <Icon className="h-5 w-5" strokeWidth={2.2} />
                        </div>
                        <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">ADIM {idx + 1}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-2">{adim.baslik.replace(/^\d+\.\s*/, "")}</h3>
                      <p className="text-[var(--body)] leading-relaxed mb-3">{adim.aciklama}</p>
                      <div className={`inline-flex items-center gap-2 rounded-full bg-white border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--foreground)] ${isLeft ? "md:ml-auto" : ""}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Çıktı: {adim.cikti}
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 h-8 w-8 rounded-full bg-white border-4 border-blue-500 shadow-lg items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">{idx + 1}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}