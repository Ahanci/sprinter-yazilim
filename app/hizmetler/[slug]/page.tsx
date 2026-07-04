import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { HIZMETLER, getHizmetBySlug, type HizmetKategori } from "@/lib/data/hizmetler";
import { buildMetadata, jsonLd } from "@/lib/seo/metadata";
import { SITE } from "@/lib/data/site";
import { PaketComparison } from "@/components/sections/paket-comparison";
import { SSSSection } from "@/components/sections/sss-accordion";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

/** Kategoriye göre ilgili teknoloji vurgusu (her hizmete uygun bağlam). */
const KATEGORI_TEKNOLOJI: Record<HizmetKategori, string> = {
  "web-eticaret": "Next.js, React 19 ve Shopify headless",
  "seo-pazarlama": "Next.js, Google Analytics 4, Search Console ve Schema.org",
  "ai-otomasyon": "Next.js, OpenAI (GPT) ve Anthropic (Claude) API'leri",
  "mobil-marka": "Next.js, React Native / Flutter ve modern tasarım sistemleri",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return HIZMETLER.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hizmet = getHizmetBySlug(slug);
  if (!hizmet) return {};
  return buildMetadata({
    title: hizmet.metaTitle,
    description: hizmet.metaDescription,
    path: `/hizmetler/${hizmet.slug}`,
    keywords: hizmet.anahtarKelimeler,
  });
}

export default async function HizmetDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const hizmet = getHizmetBySlug(slug);
  if (!hizmet) notFound();

  const Icon = (Icons as unknown as Record<string, LucideIcon>)[hizmet.ikon] ?? Icons.Sparkles;

  const ldService = {
    "@type": "Service",
    name: hizmet.baslik,
    description: hizmet.kisaAciklama,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "Country", name: "Turkey" },
    serviceType: hizmet.kategori,
  };
  const ldBreadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE.url}/hizmetler` },
      { "@type": "ListItem", position: 3, name: hizmet.baslik, item: `${SITE.url}/hizmetler/${hizmet.slug}` },
    ],
  };
  const ldFaq = {
    "@type": "FAQPage",
    mainEntity: hizmet.sss.map((s) => ({
      "@type": "Question",
      name: s.soru,
      acceptedAnswer: { "@type": "Answer", text: s.cevap },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldFaq) }} />

      <div className="bg-[var(--background-soft)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)]">Anasayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-[var(--foreground)]">Hizmetler</Link>
            <span>/</span>
            <span className="text-[var(--foreground)] font-semibold">{hizmet.baslik}</span>
          </nav>
        </div>
      </div>

      <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent-to)] mb-6">
            <ArrowLeft className="h-4 w-4" /> Tüm Hizmetler
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-800 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/20">
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              {hizmet.vurgu && (
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  ⭐ Flagship Ürün
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              {hizmet.baslik}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              {hizmet.kisaAciklama}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)] mb-5">
                Neden {hizmet.baslik}?
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--body)] leading-relaxed space-y-4">
                <p>
                  <strong className="text-[var(--foreground)]">{hizmet.baslik}</strong>{" "}
                  modern işletmelerin dijital dönüşümünün temel taşlarından biridir.
                   Sprinter olarak bu hizmeti{" "}
                  <strong className="text-[var(--foreground)]">{KATEGORI_TEKNOLOJI[hizmet.kategori]}</strong>{" "}
                  gibi güncel teknolojilerle sunuyoruz.
                </p>
                <p>
                  Geleneksel PHP sistemlere kıyasla saniyenin altında açılan sayfalar,
                  AI-okunabilir semantik HTML ve SEO odaklı yapı ile rakiplerinizin önüne geçersiniz.
                </p>
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mt-10 mb-4">Özellikler</h3>
              <ul className="space-y-3">
                {hizmet.ozellikler.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--body)] leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white p-7 shadow-2xl">
                <h3 className="text-lg font-bold mb-5">Nasıl Yapıyoruz?</h3>
                <ol className="space-y-4">
                  {hizmet.surec.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="h-7 w-7 rounded-full bg-white/15 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-sm text-blue-100 leading-relaxed">{s.replace(/^\d+\.\s*/, "")}</span>
                    </li>
                  ))}
                </ol>
                <Link href="/iletisim" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm h-12 px-6 transition-colors">
                  Teklif Al →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--background-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <PaketComparison
            baslik={`${hizmet.baslik} Paketleri`}
            altBaslik="İşletmenize en uygun paketi seçin. Tüm paketlerde KVKK, yazılı sözleşme ve şeffaf süreç dahildir."
          />
        </div>
      </section>

      <SSSSection baslik={`${hizmet.baslik} hakkında sıkça sorulan sorular`} items={hizmet.sss} />

      <CTAWhatsApp baslik={`${hizmet.baslik} için teklif alın`} altBaslik="İşletmenize özel çözüm için 30 dakikalık ücretsiz keşif görüşmesi yapalım." />
    </>
  );
}