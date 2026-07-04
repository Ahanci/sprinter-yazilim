import { SEKTORLER } from "@/lib/data/sektorler";
import { Card3D } from "@/components/ui/card-3d";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";
import { buildMetadata } from "@/lib/seo/metadata";
import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Sektörel Web Sitesi Çözümleri",
  description: "Doktor, otel, emlak, restoran, kuaför, avukat ve daha birçok sektör için hazır web sitesi şablonları. Modern, hızlı, SEO uyumlu.",
  path: "/sektorler",
  keywords: ["sektörel web sitesi", "doktor web sitesi", "otel web sitesi", "emlak web sitesi", "restoran web sitesi"],
});

export default function SektorlerPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">SEKTÖREL ÇÖZÜMLER</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              Sektörünüze özel <span className="text-gradient">modern web siteleri</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              Doktordan otele, emlakçıdan butiğe kadar her sektörün ihtiyaç analizini yaptık. Sektörünüze özel şablon ve özelliklerle projenizi hızlandırıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {SEKTORLER.map((s) => {
              const Icon = (Icons as unknown as Record<string, LucideIcon>)[s.ikon] ?? Icons.Building2;
              return (
                <Card3D key={s.slug} containerClassName="h-full" className="h-full">
                  <Link href={`/sektorler/${s.slug}`} className="group flex flex-col h-full p-6 md:p-7">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-900 via-blue-800 to-blue-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-to)] transition-colors">{s.baslik}</h3>
                    <p className="text-sm text-[var(--body)] leading-relaxed mb-5 line-clamp-3">{s.kisaAciklama}</p>
                    <ul className="space-y-1.5 mb-5">
                      {s.ozellikler.slice(0, 3).map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--body)]">
                          <span className="mt-1 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto text-sm font-semibold text-[var(--accent-to)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Sektör Detayı <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      <CTAWhatsApp baslik="Sektörünüz için doğru çözüm" altBaslik="Hangi sektörde olursanız olun, ihtiyacınıza uygun bir paket sunuyoruz. Ücretsiz keşif görüşmesinde birlikte planlayalım." />
    </>
  );
}