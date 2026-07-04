import type { Metadata } from "next";
import { Sparkles, Heart, Zap, Target } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "Hakkımızda — Sprinter Ekibi ve Değerlerimiz",
  description: "Sprinter Yazılım modern dijital çözümler stüdyosu. Next.js + Shopify headless altyapısı, AI destekli süreçler ve şeffaf çalışma kültürü ile işletmelerin dijital dönüşüm ortağıyız.",
  path: "/hakkimizda",
  keywords: ["sprinter yazılım hakkında", "yazılım ajansı ekibi", "dijital ajans türkiye", "modern yazılım stüdyosu"],
});

export default function HakkimizdaPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">HAKKIMIZDA</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
            Modern dijitalin <span className="text-gradient">mimarı</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
            Sprinter Yazılım, işletmelerin dijitalde sürdürülebilir büyümesini sağlayan modern, hızlı ve AI-okunabilir altyapılar kurar. Next.js, React ve Shopify headless gibi güncel teknolojilerle saniyenin altında açılan, Google&apos;da üst sıralarda yer alan, yapay zekâ çağına hazır ürünler teslim ediyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-10 md:mb-14 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <DegerCard icon={Sparkles} baslik="Modern, her zaman" aciklama="Piyasadakilerin eski nesil PHP sistemlerle çalıştığı bir ortamda biz Next.js + React 19 + Shopify headless ile ürün teslim ediyoruz. Hız, SEO ve AI-okunabilirlik için bugünün doğru cevapları." />
            <DegerCard icon={Zap} baslik="Hız her şeydir" aciklama="Hem teslimat süresi hem de sayfa hızı. 14-21 iş gününde teslim edilen ürünler; Lighthouse 90+, 1 saniyenin altında açılış, A+ Core Web Vitals." />
            <DegerCard icon={Target} baslik="Ölçülebilir sonuç" aciklama="Soyut vaat değil, somut KPI. Aylık raporlar, dashboard&apos;lar, organik trafik artışı, dönüşüm oranı — hepsi ölçülür ve şeffaf paylaşılır." />
            <DegerCard icon={Heart} baslik="Şeffaf süreç" aciklama="Yazılı sözleşme, sabit kapsam, net kilometre taşları. Projenin hangi aşamada olduğunu her zaman bilirsiniz. Sürpriz yok." />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--background-soft)]">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-6">Çalışma Kültürümüz</h2>
          <div className="prose prose-lg max-w-none text-[var(--body)] leading-relaxed space-y-4">
            <p>Sprinter olarak her projeye <strong>tek bir Product Owner</strong> atarız. Tüm iletişim tek kanaldan yürür; karar süreçleri hızlanır, sorumluluk netleşir.</p>
            <p><strong>Haftalık 15 dakikalık check-in</strong> + <strong>aylık sprint review</strong> ile nerede olduğunuzu her zaman bilirsiniz. Tüm kod Git üzerinde, tüm tasarım Figma üzerinde şeffafça paylaşılır.</p>
            <p><strong>KVKK ve güvenlik</strong> her projede varsayılan olarak uygulanır. Çerez politikası, aydınlatma metni, veri saklama planı — hepsi teslim dahildir.</p>
          </div>
        </div>
      </section>

      <CTAWhatsApp baslik="Birlikte çalışalım" altBaslik="Projenizi dinlemek, ihtiyacınızı anlamak için buradayız. İlk görüşme her zaman ücretsiz." />
    </>
  );
}

function DegerCard({ icon: Icon, baslik, aciklama }: { icon: typeof Sparkles; baslik: string; aciklama: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[var(--border)] p-7 md:p-8 hover:shadow-xl hover:border-slate-300 transition-all">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{baslik}</h3>
      <p className="text-[var(--body)] leading-relaxed">{aciklama}</p>
    </div>
  );
}