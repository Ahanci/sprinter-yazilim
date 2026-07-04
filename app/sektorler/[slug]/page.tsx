import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { SEKTORLER, getSektorBySlug } from "@/lib/data/sektorler";
import { buildMetadata, jsonLd } from "@/lib/seo/metadata";
import { SITE } from "@/lib/data/site";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";
import { PaketComparison } from "@/components/sections/paket-comparison";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEKTORLER.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sektor = getSektorBySlug(slug);
  if (!sektor) return {};
  return buildMetadata({
    title: sektor.metaTitle,
    description: sektor.metaDescription,
    path: `/sektorler/${sektor.slug}`,
    keywords: sektor.anahtarKelimeler,
  });
}

export default async function SektorDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const sektor = getSektorBySlug(slug);
  if (!sektor) notFound();

  const Icon = (Icons as unknown as Record<string, LucideIcon>)[sektor.ikon] ?? Icons.Building2;

  const ldBreadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Sektörler", item: `${SITE.url}/sektorler` },
      { "@type": "ListItem", position: 3, name: sektor.baslik, item: `${SITE.url}/sektorler/${sektor.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldBreadcrumb) }} />

      <div className="bg-[var(--background-soft)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)]">Anasayfa</Link>
            <span>/</span>
            <Link href="/sektorler" className="hover:text-[var(--foreground)]">Sektörler</Link>
            <span>/</span>
            <span className="text-[var(--foreground)] font-semibold">{sektor.baslik}</span>
          </nav>
        </div>
      </div>

      <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link href="/sektorler" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent-to)] mb-6">
            <ArrowLeft className="h-4 w-4" /> Tüm Sektörler
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-800 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/20">
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              {sektor.baslik} Web Sitesi
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[var(--body)] leading-relaxed">{sektor.tanim}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-cyan-50 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-[var(--foreground)] mb-5">Kim İçin?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sektor.kimIcin.map((k, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-[var(--body)]">
                <span className="mt-1 h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-5">Neler Var?</h2>
              <ul className="space-y-3">
                {sektor.ozellikler.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--body)] leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-5">Faydaları</h2>
              <ul className="space-y-4">
                {sektor.faydalar.map((f, i) => (
                  <li key={i} className="rounded-xl bg-slate-50 border border-[var(--border)] p-4">
                    <p className="text-[var(--body)] leading-relaxed">{f}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--background-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <PaketComparison baslik={`${sektor.baslik} Paketleri`} altBaslik="Sektörünüze uygun paketi seçin. Tüm paketlerde KVKK uyumlu, mobil uyumlu, SEO odaklı altyapı dahildir." />
        </div>
      </section>

      <CTAWhatsApp baslik={`${sektor.baslik} için teklif alın`} altBaslik="Sektörünüze özel çözüm için 30 dakikalık ücretsiz keşif görüşmesi yapalım." />
    </>
  );
}