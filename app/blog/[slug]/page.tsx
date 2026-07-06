import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import {
  BLOG_YAZILAR,
  BLOG_KATEGORI_ETIKET,
  getBlogBySlug,
} from "@/lib/data/blog";
import { buildMetadata, jsonLd } from "@/lib/seo/metadata";
import { SITE } from "@/lib/data/site";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";
import { slugify } from "@/lib/utils";
import { ReadingProgress } from "@/components/blog/reading-progress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_YAZILAR.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const yazi = getBlogBySlug(slug);
  if (!yazi) return {};
  return buildMetadata({
    title: yazi.baslik,
    description: yazi.metaDescription,
    path: `/blog/${yazi.slug}`,
    keywords: yazi.anahtarKelimeler,
    type: "article",
    publishedTime: new Date(yazi.tarih).toISOString(),
  });
}

function tarihFormatla(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const yazi = getBlogBySlug(slug);
  if (!yazi) notFound();

  const Icon = (Icons as unknown as Record<string, LucideIcon>)[yazi.ikon] ?? Icons.FileText;
  const benzer = BLOG_YAZILAR.filter((y) => y.kategori === yazi.kategori && y.slug !== yazi.slug).slice(0, 3);
  const toc = yazi.bolumler
    .filter((b) => b.tip === "h2")
    .map((b) => ({ id: slugify(b.metin ?? ""), text: b.metin ?? "" }));

  const ldArticle = {
    "@type": "Article",
    headline: yazi.baslik,
    description: yazi.metaDescription,
    datePublished: new Date(yazi.tarih).toISOString(),
    dateModified: new Date(yazi.tarih).toISOString(),
    author: { "@type": "Organization", name: yazi.yazar },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${yazi.slug}`,
    keywords: yazi.anahtarKelimeler.join(", "),
  };
  const ldBreadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: yazi.baslik, item: `${SITE.url}/blog/${yazi.slug}` },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldBreadcrumb) }} />

      {/* Breadcrumb */}
      <div className="bg-[var(--background-soft)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)]">Anasayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--foreground)]">Blog</Link>
            <span>/</span>
            <span className="text-[var(--foreground)] font-semibold line-clamp-1">{yazi.baslik}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <article>
        <header className={`bg-gradient-to-br ${yazi.renk}`}>
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16 text-white">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" /> Tüm yazılar
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold mb-4">
              <Icon className="h-3.5 w-3.5 mr-1.5" />
              {BLOG_KATEGORI_ETIKET[yazi.kategori]}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              {yazi.baslik}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/85">
              <span>{yazi.yazar}</span>
              <span>·</span>
              <span>{tarihFormatla(yazi.tarih)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {yazi.okumaSuresi} dk okuma
              </span>
            </div>
          </div>
        </header>

        {/* İçerik */}
        <div className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-14 items-start">
              <div className="min-w-0 max-w-3xl">
                <p className="text-xl md:text-2xl text-[var(--body)] leading-relaxed font-medium border-l-4 border-[var(--accent-to)] pl-5 mb-10">
                  {yazi.ozet}
                </p>
                <div className="space-y-5">
                  {yazi.bolumler.map((b, i) => {
                    if (b.tip === "h2") {
                      const sid = slugify(b.metin ?? "");
                      return (
                        <h2 key={i} id={sid} className="scroll-mt-28 text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mt-10 mb-2 flex items-center gap-3">
                          <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-cyan-400 shrink-0" />
                          <span>{b.metin}</span>
                        </h2>
                      );
                    }
                    if (b.tip === "h3") {
                      return <h3 key={i} className="text-xl md:text-2xl font-bold text-[var(--foreground)] mt-8 mb-2">{b.metin}</h3>;
                    }
                    if (b.tip === "p") {
                      return <p key={i} className="text-base md:text-lg text-[var(--body)] leading-relaxed">{b.metin}</p>;
                    }
                    if (b.tip === "ul") {
                      return (
                        <ul key={i} className="space-y-2 my-4">
                          {b.liste?.map((m, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-base md:text-lg text-[var(--body)] leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-to)] shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (b.tip === "ol") {
                      return (
                        <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
                          {b.liste?.map((m, j) => (
                            <li key={j} className="text-base md:text-lg text-[var(--body)] leading-relaxed marker:text-[var(--accent-to)] marker:font-bold">{m}</li>
                          ))}
                        </ol>
                      );
                    }
                    if (b.tip === "blockquote") {
                      return (
                        <blockquote key={i} className="my-6 rounded-xl bg-blue-50 border-l-4 border-blue-500 p-5">
                          <p className="text-base md:text-lg text-[var(--foreground-strong)] font-medium italic leading-relaxed">{b.metin}</p>
                        </blockquote>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* CTA */}
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white p-7 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Bu konuda profesyonel destek mi lazım?</h3>
                  <p className="text-blue-100 leading-relaxed mb-5">Sprinter ekibi olarak işletmenize özel çözüm üretelim. Ücretsiz 30 dakikalık keşif görüşmesi.</p>
                  <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm h-12 px-7 transition-colors">
                    Teklif Al <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* İçindekiler (sticky) */}
              {toc.length > 2 && (
                <aside className="hidden lg:block sticky top-28">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-soft)] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">İçindekiler</p>
                    <nav className="space-y-1.5">
                      {toc.map((t) => (
                        <a key={t.id} href={`#${t.id}`} className="block text-sm text-[var(--body)] hover:text-[var(--accent-to)] leading-snug transition-colors">
                          {t.text}
                        </a>
                      ))}
                    </nav>
                    <div className="mt-5 pt-5 border-t border-[var(--border)] flex items-center gap-2 text-xs text-[var(--muted)]">
                      <Clock className="h-3.5 w-3.5" /> {yazi.okumaSuresi} dk okuma
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Benzer yazılar */}
      {benzer.length > 0 && (
        <section className="py-12 md:py-16 bg-[var(--background-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="text-xl md:text-2xl font-extrabold text-[var(--foreground)] mb-6">Benzer Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {benzer.map((b) => (
                <Link key={b.slug} href={`/blog/${b.slug}`} className="group rounded-xl bg-white border border-[var(--border)] p-5 hover:shadow-lg hover:border-slate-300 transition-all">
                  <span className="text-xs font-semibold text-[var(--accent-to)]">{BLOG_KATEGORI_ETIKET[b.kategori]}</span>
                  <h3 className="text-base font-bold text-[var(--foreground)] mt-1.5 mb-2 group-hover:text-[var(--accent-to)] transition-colors leading-snug">{b.baslik}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--muted)]">
                    <Clock className="h-3 w-3" /> {b.okumaSuresi} dk
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAWhatsApp baslik="İşletmenize özel çözüm için konuşalım" altBaslik="Okuduklarınız fikir verdi; şimdi işletmenize özel planı birlikte yapalım." />
    </>
  );
}
