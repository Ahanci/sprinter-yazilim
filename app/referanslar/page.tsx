import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "Referanslar ve Proje Tipleri | Sprinter",
  description:
    "Sprinter'ın teslim ettiği proje tipleri: e-ticaret, kurumsal web, mobil uygulama, AI otomasyon, ERP/CRM entegrasyonu. Her projede kullanılan teknolojiler ve sağlanan faydalar.",
  path: "/referanslar",
  keywords: [
    "yazılım referansları",
    "proje portföyü",
    "e ticaret projeleri",
    "mobil uygulama örnekleri",
    "ai otomasyon projeleri",
  ],
});

interface ProjeTipi {
  baslik: string;
  ozet: string;
  ikon: string;
  renk: string;
  teknolojiler: string[];
  problem: string;
  cozum: string;
  sonuc: string[];
  ilgiliHizmet: string;
}

const PROJELER: ProjeTipi[] = [
  {
    baslik: "Headless E-Ticaret Mağazası",
    ozet: "Moda markası için Next.js + Shopify headless mağaza. Pazaryeri entegrasyonlu.",
    ikon: "ShoppingBag",
    renk: "from-pink-500 to-rose-600",
    teknolojiler: ["Next.js", "Shopify Storefront API", "iyzico", "Trendyol API", "GA4"],
    problem: "Mevcut PHP tabanlı site yavaştı (4-6 sn), mobil dönüşüm düşük, SEO zayıf.",
    cozum: "Next.js headless ön yüz + Shopify admin. Pazaryeri senkronu, AI ürün açıklaması, hızlı ödeme.",
    sonuc: [
      "Sayfa açılış süresi 5 sn → 0.8 sn",
      "Lighthouse SEO skoru 40 → 94",
      "Mobil dönüşüm oranı ~%60 artış",
      "Trendyol/Hepsiburada stok senkronu manuel → otomatik",
    ],
    ilgiliHizmet: "/hizmetler/e-ticaret-sitesi",
  },
  {
    baslik: "Klinik Web Sitesi + Online Randevu",
    ozet: "Diş kliniği için KVKK uyumlu kurumsal site ve online randevu sistemi.",
    ikon: "Stethoscope",
    renk: "from-cyan-500 to-blue-600",
    teknolojiler: ["Next.js", "Tailwind", "Google Calendar API", "WhatsApp API", "Schema.org"],
    problem: "Telefon trafiği yoğun, randevular Google'da görünmüyor, eski site güven vermiyor.",
    cozum: "Modern kurumsal site, online randevu + SMS/WhatsApp hatırlatma, Google İş Profili optimizasyonu.",
    sonuc: [
      "Telefon trafiğinde belirli azalma",
      "Online randevu oranı arttı",
      "Yerel aramalarda üst sıralara çıkış",
      "Hasta yorumları otomatik toplama",
    ],
    ilgiliHizmet: "/sektorler/doktor-klinik",
  },
  {
    baslik: "B2B SaaS Dashboard",
    ozet: "Lojistik firması için internal operasyon paneli ve müşteri self-servis portalı.",
    ikon: "BarChart3",
    renk: "from-slate-600 to-slate-800",
    teknolojiler: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
    problem: "Excel tabanlı operasyon, veriler dağınık, müşteri raporu günler sürüyor.",
    cozum: "Rol bazlı dashboard, gerçek zamanlı operasyon takibi, otomatik raporlama, API entegrasyonu.",
    sonuc: [
      "Operasyonel manuel işte önemli azalma",
      "Raporlama süresi günler → dakikalar",
      "Rol bazlı yetki ile güvenli erişim",
      "Müşteri self-servis portalı",
    ],
    ilgiliHizmet: "/hizmetler/ozel-yazilim-gelistirme",
  },
  {
    baslik: "AI Müşteri Temsilcisi (RAG)",
    ozet: "E-ticaret markası için web + WhatsApp AI chatbot. Bilgi tabanından yanıt.",
    ikon: "Bot",
    renk: "from-violet-500 to-purple-600",
    teknolojiler: ["OpenAI GPT-4o", "pgvector", "Next.js", "WhatsApp Business API"],
    problem: "Destek ekibi benzer sorulara (kargo, iade, ürün bilgi) boğuluyor, gece yanıt yok.",
    cozum: "RAG tabanlı AI asistanı. SSS + ürün verisiyle beslenir, insan desteğine devreder.",
    sonuc: [
      "Tekrarlayan sorularda otomatik çözüm",
      "7/24 anında yanıt",
      "İnsan desteğine düşen yükte azalma",
      "Lead toplama ve yönlendirme",
    ],
    ilgiliHizmet: "/hizmetler/ai-chatbot",
  },
  {
    baslik: "Otel Rezervasyon Sitesi",
    ozet: "Butik otel için çok dilli, online rezervasyon altyapılı kurumsal site.",
    ikon: "Hotel",
    renk: "from-amber-500 to-orange-600",
    teknolojiler: ["Next.js", "Channel manager", "i18n", "Cloudflare", "Schema.org"],
    problem: "OTA komisyonları yüksek, doğrudan rezervasyon düşük, uluslararası misafir için dil yok.",
    cozum: "Çok dilli (TR/EN/DE/RU) site, doğrudan rezervasyon motoru, Google'da bölgesel SEO.",
    sonuc: [
      "Doğrudan rezervasyonda artış (OTA komisyon tasarrufu)",
      "Uluslararası misafir erişimi",
      "Bölgesel aramalarda görünürlük",
      "Modern güven veren tasarım",
    ],
    ilgiliHizmet: "/sektorler/otel",
  },
  {
    baslik: "WhatsApp Satış Otomasyonu",
    ozet: "Servis firması için WhatsApp Business API + AI ile lead filtreleme ve randevu.",
    ikon: "MessageCircle",
    renk: "from-emerald-500 to-green-600",
    teknolojiler: ["WhatsApp Business API", "OpenAI", "n8n", "CRM API"],
    problem: "Lead'ler elle karşılanıyor, gece gelen talepler kayboluyor, takip eksik.",
    cozum: "AI karşılama + lead filtreleme + otomatik randevu + CRM'e kayıt.",
    sonuc: [
      "Lead yanıt süresi saatler → saniyeler",
      "Gece gelen taleplerde otomatik karşılama",
      "CRM'e otomatik kayıt",
      "Satış ekibi sadece nitelikli lead'lerle ilgileniyor",
    ],
    ilgiliHizmet: "/hizmetler/whatsapp-otomasyonu",
  },
];

export default function ReferanslarPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              REFERANSLAR & PROJE TİPLERİ
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              Teslim ettiğimiz <span className="text-gradient">proje tipleri</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              Sprinter olarak farklı sektörlerde, farklı ölçeklerde projeler teslim ediyoruz.
              Aşağıda representative proje tipleri — her birinin problemi, çözümü ve sağladığı
              fayda. Kendi projenizin benzerini görebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 space-y-8 md:space-y-10">
          {PROJELER.map((p) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[p.ikon] ?? Icons.Sparkles;
            return (
              <article key={p.baslik} className="grid lg:grid-cols-3 gap-6 lg:gap-8 rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="lg:col-span-1">
                  <div className={`inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br ${p.renk} text-white items-center justify-center shadow-lg mb-4`}>
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[var(--foreground)] mb-2">{p.baslik}</h2>
                  <p className="text-sm text-[var(--body)] leading-relaxed mb-4">{p.ozet}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.teknolojiler.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-[var(--foreground-strong)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">Problem</h3>
                    <p className="text-[var(--body)] leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Çözüm</h3>
                    <p className="text-[var(--body)] leading-relaxed">{p.cozum}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Sonuç</h3>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {p.sonuc.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-[var(--body)]">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={p.ilgiliHizmet} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-to)] mt-2">
                    Bu hizmeti inceleyin <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTAWhatsApp baslik="Sizin projeniz hangisi?" altBaslik="Yukarıdaki tiplerden birine benziyor mu, yoksa farklı bir ihtiyacınız mı var? Ücretsiz keşif görüşmesinde birlikte analiz edelim." />
    </>
  );
}
