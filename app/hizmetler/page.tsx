import type { Metadata } from "next";
import { HIZMETLER, HIZMET_KATEGORI_ETIKETLERI, type HizmetKategori } from "@/lib/data/hizmetler";
import { HizmetCard } from "@/components/sections/hizmet-card";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";
import { PaketComparison } from "@/components/sections/paket-comparison";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Tüm Hizmetler",
  description:
    "Sprinter'ın tüm dijital hizmetleri: kurumsal web, e-ticaret, SEO, dijital pazarlama, yapay zekâ entegrasyonları ve mobil uygulama. Her ihtiyaca uygun çözüm.",
  path: "/hizmetler",
  keywords: [
    "yazılım hizmetleri",
    "dijital hizmetler",
    "web tasarım hizmetleri",
    "e-ticaret hizmetleri",
  ],
});

const KATEGORI_SIRASI: HizmetKategori[] = [
  "web-eticaret",
  "seo-pazarlama",
  "ai-otomasyon",
  "mobil-marka",
];

export default function HizmetlerPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              HİZMETLER
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              İşletmeniz için <span className="text-gradient">eksiksiz dijital çözümler</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              Kurumsal web sitesinden e-ticarete, SEO&apos;dan yapay zekâ
              entegrasyonlarına kadar tüm dijital ihtiyaçlarınızı tek elden
              karşılıyoruz. Modern stack, şeffaf süreç, ölçülebilir sonuç.
            </p>
          </div>
        </div>
      </section>

      {KATEGORI_SIRASI.map((kat) => {
        const hizmetler = HIZMETLER.filter((h) => h.kategori === kat);
        if (hizmetler.length === 0) return null;

        return (
          <section key={kat} id={kat} className="py-16 md:py-20 bg-white border-b border-[var(--border)] last:border-b-0">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
                  {HIZMET_KATEGORI_ETIKETLERI[kat]}
                </h2>
                <p className="mt-2 text-[var(--body)]">
                  {kat === "web-eticaret" && "Web siteleri, e-ticaret altyapıları ve dijital vitrin çözümleri."}
                  {kat === "seo-pazarlama" && "Arama motoru optimizasyonu ve dijital reklam yönetimi."}
                  {kat === "ai-otomasyon" && "Yapay zekâ, chatbot, otomasyon ve dijital dönüşüm."}
                  {kat === "mobil-marka" && "Mobil uygulama, marka kimliği ve UI/UX tasarım."}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                {hizmetler.map((h) => (
                  <HizmetCard key={h.slug} hizmet={h} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* PAKETLER */}
      <section className="py-20 md:py-28 bg-[var(--background-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <PaketComparison
            baslik="Hizmet Paketlerimiz"
            altBaslik="İşletmenizin ihtiyacına uygun paketi seçin — E-Ticaret veya Kurumsal Web."
            defaultTab="e-ticaret"
          />
        </div>
      </section>

      <CTAWhatsApp
        baslik="Hangi hizmet sizin için uygun?"
        altBaslik="Hangi paket veya hizmetin işletmenize uygun olduğunu birlikte belirleyelim. Ücretsiz 30 dakikalık keşif görüşmesi."
      />
    </>
  );
}