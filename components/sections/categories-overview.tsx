import { Building2, Search, Sparkles, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { HIZMETLER, HIZMET_KATEGORI_ETIKETLERI, type HizmetKategori } from "@/lib/data/hizmetler";
import { Card3D } from "@/components/ui/card-3d";
import { cn } from "@/lib/utils";

const KATEGORI_GORSEL: Record<HizmetKategori, { icon: LucideIcon; gradient: string; aciklama: string }> = {
  "web-eticaret": { icon: Building2, gradient: "from-blue-500 via-blue-600 to-indigo-700", aciklama: "Kurumsal web, e-ticaret, tanıtım siteleri — modern stack ile." },
  "seo-pazarlama": { icon: Search, gradient: "from-cyan-500 via-blue-500 to-indigo-600", aciklama: "SEO, Google Ads, Meta Ads, sosyal medya — ölçülebilir büyüme." },
  "ai-otomasyon": { icon: Sparkles, gradient: "from-indigo-500 via-purple-500 to-pink-500", aciklama: "WhatsApp otomasyon, AI chatbot, randevu, CRM — işinizi büyütün." },
  "mobil-marka": { icon: Smartphone, gradient: "from-slate-700 via-blue-700 to-cyan-700", aciklama: "Mobil uygulama, logo, UI/UX, özel yazılım — uçtan uca dijital." },
};

export function CategoriesOverview() {
  const kategoriler: HizmetKategori[] = ["web-eticaret", "seo-pazarlama", "ai-otomasyon", "mobil-marka"];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">HİZMET KATEGORİLERİ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            İşletmeniz için <span className="text-gradient">eksiksiz dijital çözümler</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--body)] max-w-2xl mx-auto">
            Web sitesinden e-ticarete, SEO&apos;dan yapay zekâ entegrasyonlarına kadar tüm dijital ihtiyaçlarınızı tek elden karşılıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {kategoriler.map((kat) => {
            const { icon: Icon, gradient, aciklama } = KATEGORI_GORSEL[kat];
            const items = HIZMETLER.filter((h) => h.kategori === kat);
            return (
              <Card3D key={kat} containerClassName="h-full" className="h-full">
                <div className="flex flex-col h-full p-6 md:p-7">
                  <div className={cn("h-12 w-12 rounded-xl bg-gradient-to-br text-white flex items-center justify-center mb-5 shadow-lg", gradient)}>
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-2">{HIZMET_KATEGORI_ETIKETLERI[kat]}</h3>
                  <p className="text-sm text-[var(--body)] leading-relaxed mb-5">{aciklama}</p>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {items.slice(0, 3).map((h) => (
                      <li key={h.slug}>
                        <Link href={`/hizmetler/${h.slug}`} className="text-xs text-[var(--body)] hover:text-[var(--accent-to)] flex items-center gap-1.5 group/link">
                          <span className="h-1 w-1 rounded-full bg-blue-500" />
                          {h.baslik}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/hizmetler" className="text-sm font-semibold text-[var(--accent-to)] hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Tümünü Gör <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}