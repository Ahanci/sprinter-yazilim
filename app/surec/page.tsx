import { buildMetadata } from "@/lib/seo/metadata";
import { SurecTimeline } from "@/components/sections/surec-timeline";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "Çalışma Sürecimiz",
  description: "Sprinter'ın 5 adımlı şeffaf çalışma süreci: keşif → tasarım → geliştirme → test → lansman → büyüme. Her aşamada yazılı çıktı ve net kilometre taşları.",
  path: "/surec",
  keywords: ["yazılım geliştirme süreci", "web sitesi süreci", "proje yönetimi", "keşif tasarım geliştirme"],
});

export default function SurecPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">ÇALIŞMA SÜRECİ</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
            Şeffaf, ölçülebilir, <span className="text-gradient">yazılı süreç</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
            5 net adım. Her adımda yazılı çıktı, net kilometre taşı ve sizin onayınız. Projenin hangi aşamada olduğunu her zaman bilirsiniz.
          </p>
        </div>
      </section>

      <SurecTimeline />

      <section className="py-16 md:py-20 bg-white border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-6">Süreç Garantilerimiz</h2>
          <ul className="space-y-4">
            {[
              "Yazılı sözleşme + net kapsam dokümanı (proje başında)",
              "Sabit fiyat + sabit teslim süresi (gizli maliyet yok)",
              "Haftalık 15 dakikalık check-in (WhatsApp/Meet)",
              "Aylık sprint review (canlı demo + metrikler)",
              "Git üzerinde tüm kod şeffafça paylaşılır",
              "KVKK + güvenlik tüm projelerde varsayılan",
              "Teslim sonrası 30 gün ücretsiz destek (Başlangıç paketi)",
            ].map((g, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-[var(--border)] p-4">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                <span className="text-[var(--body)] leading-relaxed">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTAWhatsApp />
    </>
  );
}