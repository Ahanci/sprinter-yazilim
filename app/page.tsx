import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Search, Bot } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CategoriesOverview } from "@/components/sections/categories-overview";
import { PaketComparison } from "@/components/sections/paket-comparison";
import { SSSSection } from "@/components/sections/sss-accordion";
import { SurecTimeline } from "@/components/sections/surec-timeline";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";
import { GENEL_SSS } from "@/lib/data/sss";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Sprinter Yazılım — Modern Headless E-Ticaret & Dijital Ürünler",
  description:
    "Next.js + Shopify headless, SEO odaklı, AI-okunabilir modern e-ticaret ve dijital ürünler stüdyosu. Kurumsal web, e-ticaret, SEO, reklam ve AI otomasyon.",
  path: "/",
  keywords: [
    "yazılım ajansı",
    "web tasarım",
    "modern web tasarım ajansı",
    "e-ticaret sitesi kurma",
    "next.js ajans",
    "shopify headless türkiye",
    "seo hizmeti",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ek Gelir promosyon banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Sparkles className="h-6 w-6 shrink-0 text-emerald-100" />
            <p className="text-base md:text-lg font-semibold">
              Evden e-ticarete başla, düzenli ek gelir kazan — sıfır tecrübeyle, uçtan uca kurulum dahil.
            </p>
          </div>
          <Link href="/ek-gelir-eticaret" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-sm h-11 px-6 shadow-lg transition-colors">
            Hemen İncele <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative bg-white py-10 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--foreground)] inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-500" />
              Modern Stack
            </span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>Next.js 16</span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>React 19</span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>Shopify Headless</span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>Tailwind v4</span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>Three.js</span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>OpenAI / Claude</span>
            <span className="hidden md:inline text-[var(--border)]">·</span>
            <span>Vercel Edge</span>
          </div>
        </div>
      </section>

      <CategoriesOverview />

      <section className="py-20 md:py-28 bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              NEDEN SPRINTER
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              Modern dijitalin <span className="text-gradient">3 temeli</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon={Zap} baslik="1 saniyenin altında" aciklama="Next.js ile statik derlenen sayfalar, Vercel Edge Network üzerinden CDN'den saniyenin altında açılır. Rakiplerden 5-8 kat daha hızlı." gradient="from-amber-400 to-orange-500" />
            <FeatureCard icon={Search} baslik="SEO skoru 90+" aciklama="Semantik HTML, Schema.org JSON-LD, doğru heading hiyerarşisi ve AI-okunabilir yapı ile Google'da üst sıralarda yer alın." gradient="from-blue-500 to-indigo-600" />
            <FeatureCard icon={Bot} baslik="AI-okunabilir altyapı" aciklama="GPT, Claude ve Google AI crawler'lar içeriğinizi net anlar. Yapılandırılmış veri ve net hiyerarşi ile AI çağında öne çıkın." gradient="from-violet-500 to-purple-600" />
          </div>
        </div>
      </section>

      <PaketComparison />

      <SurecTimeline />

      <SSSSection items={GENEL_SSS.slice(0, 6)} />

      <CTAWhatsApp />
    </>
  );
}

function FeatureCard({
  icon: Icon,
  baslik,
  aciklama,
  gradient,
}: {
  icon: typeof Sparkles;
  baslik: string;
  aciklama: string;
  gradient: string;
}) {
  return (
    <div className="group rounded-2xl bg-white border border-[var(--border)] p-7 md:p-8 hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-2">{baslik}</h3>
      <p className="text-[var(--body)] leading-relaxed mb-4">{aciklama}</p>
      <Link href="/hizmetler" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-to)] group-hover:gap-2 transition-all">
        Detayları İncele <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}