import Link from "next/link";
import { ArrowRight, Clock, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import {
  BLOG_YAZILAR,
  BLOG_KATEGORI_ETIKET,
  type BlogKategori,
} from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "Blog — Yazılım, E-Ticaret ve AI Rehberleri",
  description:
    "Sprinter blog: Shopify, WooCommerce, e-fatura, pazaryeri entegrasyonu, AI chatbot, RAG, SaaS geliştirme ve SEO hakkında derin rehberler.",
  path: "/blog",
  keywords: [
    "yazılım blogu",
    "e ticaret blogu",
    "yapay zeka blogu",
    "shopify rehberi",
    "ai chatbot",
  ],
});

const KATEGORI_RENK: Record<BlogKategori, string> = {
  "e-ticaret": "bg-green-100 text-green-700",
  yazilim: "bg-blue-100 text-blue-700",
  ai: "bg-violet-100 text-violet-700",
  seo: "bg-cyan-100 text-cyan-700",
  rehber: "bg-amber-100 text-amber-700",
};

function tarihFormatla(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const onerilen = BLOG_YAZILAR.filter((y) => y.onerilen);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              BLOG
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              Yazılım, e-ticaret ve <span className="text-gradient">AI rehberleri</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              Doğru kararlar için derin içerikler. Altyapı seçiminden AI entegrasyonuna,
              e-faturadan SaaS geliştirmeye kadar pratik rehberler.
            </p>
          </div>
        </div>
      </section>

      {/* Önerilenler */}
      {onerilen.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">Öne Çıkanlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onerilen.map((y) => (
                <BlogKart key={y.slug} yazi={y} onerilen />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tüm yazılar */}
      <section className="py-12 md:py-16 bg-[var(--background-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">Tüm Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_YAZILAR.map((y) => (
              <BlogKart key={y.slug} yazi={y} />
            ))}
          </div>
        </div>
      </section>

      <CTAWhatsApp baslik="Rehberlerden birini kendi işinize uyarlayalım" altBaslik="Okuduklarınızı işletmenize özel bir çözüme dönüştürelim. Ücretsiz 30 dakikalık keşif görüşmesi." />
    </>
  );
}

function BlogKart({ yazi: y, onerilen: _onerilen }: { yazi: typeof BLOG_YAZILAR[number]; onerilen?: boolean }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[y.ikon] ?? Icons.FileText;
  return (
    <Link href={`/blog/${y.slug}`} className="group flex flex-col h-full rounded-2xl border border-[var(--border)] bg-white overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all">
      <div className={`h-40 bg-gradient-to-br ${y.renk} relative flex items-center justify-center`}>
        <Icon className="h-14 w-14 text-white/90" strokeWidth={1.8} />
        <span className={`absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${KATEGORI_RENK[y.kategori]}`}>
          {BLOG_KATEGORI_ETIKET[y.kategori]}
        </span>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
          <span>{tarihFormatla(y.tarih)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {y.okumaSuresi} dk
          </span>
        </div>
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-to)] transition-colors leading-snug">
          {y.baslik}
        </h3>
        <p className="text-sm text-[var(--body)] leading-relaxed line-clamp-3 mb-4 flex-1">{y.ozet}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-to)]">
          Devamını oku <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
