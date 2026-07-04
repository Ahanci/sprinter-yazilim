import type { Metadata } from "next";
import { buildMetadata, jsonLd } from "@/lib/seo/metadata";
import { GENEL_SSS } from "@/lib/data/sss";
import { SSSSection } from "@/components/sections/sss-accordion";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "Sıkça Sorulan Sorular",
  description: "Sprinter hakkında en çok merak edilen sorular: hizmetler, fiyatlandırma, SEO, e-ticaret, AI entegrasyonları, süreç ve garanti.",
  path: "/sss",
  keywords: ["sprinter sss", "yazılım ajansı soruları", "web sitesi sıkça sorulan sorular"],
});

export default function SSSPage() {
  const ldFaq = {
    "@type": "FAQPage",
    mainEntity: GENEL_SSS.map((s) => ({
      "@type": "Question",
      name: s.soru,
      acceptedAnswer: { "@type": "Answer", text: s.cevap },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldFaq) }} />

      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">SSS</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
            Sıkça sorulan <span className="text-gradient">sorular</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
            Sprinter, hizmetler ve süreç hakkında en çok merak edilen konuların net cevapları. Aklınızdaki başka bir soru varsa WhatsApp&apos;tan yazabilirsiniz.
          </p>
        </div>
      </section>

      <SSSSection baslik="" altBaslik="" items={GENEL_SSS} />

      <CTAWhatsApp baslik="Sorunuzun cevabını bulamadınız mı?" altBaslik="WhatsApp'tan yazın, 24 saat içinde dönüş yapalım." />
    </>
  );
}