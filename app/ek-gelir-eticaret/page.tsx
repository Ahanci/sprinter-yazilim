import Link from "next/link";
import {
  Rocket,
  Store,
  PackageCheck,
  ShieldCheck,
  Truck,
  GraduationCap,
  LineChart,
  Tag,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { buildMetadata, jsonLd } from "@/lib/seo/metadata";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";
import { LeadForm } from "@/components/sections/lead-form";
import { getWhatsAppWaMe } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Evden E-Ticarete Başla — Ek Gelir İçin Sıfırdan Mağaza Kurulumu",
  description:
    "E-ticarete sıfır tecrübeyle başlayın, evden ek gelir kazanın. Şirket kurulumu, Trendyol/Hepsiburada/n11/Amazon/Pazarama mağazaları, ürün tedariği ve yönetimi dahil uçtan uca hizmet.",
  path: "/ek-gelir-eticaret",
  keywords: [
    "evden ek iş",
    "ek gelir",
    "e ticaret nasıl başlanır",
    "evde para kazanma",
    "trendyol satıcı olma",
    "pazaryerinde satış",
    "internetten para kazanma",
    "yan iş",
    "ek iş fikirleri",
  ],
});

interface Adim {
  no: number;
  baslik: string;
  aciklama: string;
  ikon: string;
}

const SUREC: Adim[] = [
  { no: 1, baslik: "Hedef Belirleme", aciklama: "Amacınız ek gelir mi, yoksa yeni bir iş/girişim mi? Beklenti, sermaye ve zamanınıza göre doğru yolu birlikte seçeriz.", ikon: "Target" },
  { no: 2, baslik: "Eğitim & Planlama", aciklama: "Kısa, pratik e-ticaret eğitimi. Sonra beklenti/kâr/sermaye için size özel bireysel planlama yapılır.", ikon: "GraduationCap" },
  { no: 3, baslik: "Şirket & Resmiyet", aciklama: "Şirket kurulumu, vergi levhası, gerekli izinler — resmi süreçleri sizin adınıza yönetiriz.", ikon: "ShieldCheck" },
  { no: 4, baslik: "Mağaza Açılışı", aciklama: "Trendyol, Hepsiburada, n11, Amazon, Pazarama — mağazalarınızı açar, üyelikleri ve satış izinlerini tamamlarız.", ikon: "Store" },
  { no: 5, baslik: "Ürün Tedarik & Listeleme", aciklama: "Düzenli tedarik edilen ürünlerin listelenmesi, görselleri, açıklamaları, kategori eşleştirme.", ikon: "PackageCheck" },
  { no: 6, baslik: "Yönetim & 'Alırken Kazan'", aciklama: "Mağaza ve stok yönetimi, pazaryeri indirimlerini takip, alırken kazan modeli ile kâr optimizasyonu.", ikon: "LineChart" },
];

const DAHIL: { baslik: string; aciklama: string; ikon: string }[] = [
  { baslik: "Şirket Kurulumu", aciklama: "Şirket kuruluşu, vergi mükellefiyeti, banka hesabı, e-fatura altyapısı.", ikon: "ShieldCheck" },
  { baslik: "Pazaryeri Mağazaları", aciklama: "Trendyol, Hepsiburada, n11, Amazon, Pazarama mağazalarının açılması ve onayları.", ikon: "Store" },
  { baslik: "Ürün Listeleme", aciklama: "Ürünlerin listelenmesi, görsel işleme, SEO uyumlu açıklama, varyant ve kategori eşleştirme.", ikon: "PackageCheck" },
  { baslik: "Satış İzinleri", aciklama: "Marka/category satış izinleri, belge süreçleri, platform kurallarına uyum.", ikon: "CheckCircle2" },
  { baslik: "Üyelik & Hesaplar", aciklama: "Alışveriş platformlarındaki üyelikler, tedarikçi hesapları, ödeme altyapıları.", ikon: "Users" },
  { baslik: "Düzenli Tedarik", aciklama: "Belirli zamanlarda indirimli ürün tedariği, güvenilir tedarikçi ağı, stok planlaması.", ikon: "Truck" },
  { baslik: "Mağaza Yönetimi", aciklama: "Günlük operasyon: sipariş takibi, kargo, müşteri mesajları, kampanyalar.", ikon: "Settings" },
  { baslik: "Kâr Takibi", aciklama: "Komisyon, maliyet, kâr marjı raporları. Hangi ürünün ne kadar kazandırdığı net.", ikon: "LineChart" },
];

const FAQ = [
  {
    soru: "Daha önce e-ticaret yapmadım, başarılı olur muyum?",
    cevap:
      "Evet. Bu hizmet tam olarak tecrübesiz kişiler için tasarlandı. Süreç hatasız kurulur, kısa eğitim alırsınız ve her aşamada desteklenirsiniz. Önemli olan doğru ürün, sabır ve süreci takip etmek.",
  },
  {
    soru: "Ne kadar sermaye gerekiyor?",
    cevap:
      "Ürün grubuna ve hedefe göre değişir. İlk görüşmede sermayenize ve beklentinize göre gerçekçi bir plan yapılır. Çok düşük sermayeyle başlamak mümkün ama büyümek için yeniden yatırım gerekir.",
  },
  {
    soru: "Ek gelir mi, tam zamanlı iş mi?",
    cevap:
      "İkisi de mümkün. Hedef belirleme adımında amacınızı netleştiririz: ek gelir mi (part-time), yoksa yeni bir iş/girişim mi (full-time). Plana göre ilerleriz.",
  },
  {
    soru: "'Alırken kazan' modeli nedir?",
    cevap:
      "Pazaryeri indirimlerini ve tedarik fırsatlarını takip ederek ürünleri düşük fiyattan tedarik edip, doğru zamanda satışa sunma stratejisidir. Stok ve mağaza yönetimi ile optimize edilir.",
  },
  {
    soru: "Hangi platformlarda mağaza açılıyor?",
    cevap:
      "Türkiye'de Trendyol, Hepsiburada, n11, Pazarama; yurt dışı için Amazon. Hangilerinin ürününüze uygun olduğuna ilk analizde karar verilir.",
  },
  {
    soru: "Ne kadar sürede para kazanmaya başlarım?",
    cevap:
      "Kurulum 2-4 hafta. İlk satışlar genelde mağaza açıldıktan kısa süre sonra gelir. Anlamlı düzenli gelir için 2-6 ay gerçekçi bir süredir; garantili kazanç yoktur.",
  },
];

const IkonMap: Record<string, LucideIcon> = {
  Target: Target,
  GraduationCap: GraduationCap,
  ShieldCheck: ShieldCheck,
  Store: Store,
  PackageCheck: PackageCheck,
  LineChart: LineChart,
  CheckCircle2: CheckCircle2,
  Users: Users,
  Truck: Truck,
  Settings: Settings,
};

export default function EkGelirPage() {
  const wa = `https://wa.me/${getWhatsAppWaMe()}?text=${encodeURIComponent("Merhaba, evden e-ticarete başlamak / ek gelir için bilgi almak istiyorum.")}`;

  const ldService = {
    "@type": "Service",
    name: "Evden E-Ticaret Başlangıç ve Ek Gelir Programı",
    description:
      "Sıfır tecrübeyle e-ticarete başlamak isteyenler için uçtan uca hizmet: şirket kurulumu, pazaryeri mağazaları, ürün tedariği ve yönetimi.",
    provider: { "@type": "Organization", name: "Sprinter Yazılım", url: "https://sprinteryazilim.com" },
    areaServed: { "@type": "Country", name: "Turkey" },
    serviceType: "E-Ticaret Başlangıç Danışmanlığı ve Yönetimi",
  };
  const ldFaq = {
    "@type": "FAQPage",
    mainEntity: FAQ.map((s) => ({
      "@type": "Question",
      name: s.soru,
      acceptedAnswer: { "@type": "Answer", text: s.cevap },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ldFaq) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              EVDEKİ EK GELİR FIRSATI · SIFIR TECRÜBEYLE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.05]">
              Evden e-ticarete başla,
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                düzenli ek gelir kazan
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-2xl">
              Daha önce ticaret yapmadıysanız da önemli değil. Şirket kurulumundan mağaza
              açılışına, ürün tedarikinden satış yönetimine kadar <strong>her şeyi biz kuruyoruz</strong>,
              size sadece sürdürmek kalıyor.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base h-14 px-8 shadow-xl shadow-emerald-500/30 transition-all hover:scale-105">
                <MessageCircle className="h-5 w-5" />
                Ücretsiz Bilgi Al
              </a>
              <Link href="#surec" className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[var(--border)] hover:border-slate-400 text-[var(--foreground)] font-semibold text-base h-14 px-8 transition-all">
                Nasıl Çalışır? <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Güven rozetleri */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 18+ herkes için</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Tecrübe gerekmez</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Şirket kurulumu dahil</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 5 pazaryeri</span>
            </div>
          </div>
        </div>
      </section>

      {/* KİMLER İÇİN */}
      <section className="py-16 md:py-24 bg-white border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              İki yol, tek doğru karar
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--body)] max-w-2xl mx-auto">
              Önce amacınızı netleştiriyoruz, sonra size özel planı kuruyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-5 shadow-lg">
                <Rocket className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-2">Ek Gelir İstiyorum</h3>
              <p className="text-[var(--body)] leading-relaxed mb-4">Part-time, mevcut işin yanında. Düşük-orta sermaye, az zaman, düzenli küçük gelir hedefi.</p>
              <ul className="space-y-2 text-sm text-[var(--body)]">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> Haftada birkaç saat</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> Tek mağaza ile başlangıç</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> Düşük risk</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center mb-5 shadow-lg">
                <Store className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-2">Yeni İş / Girişim</h3>
              <p className="text-[var(--body)] leading-relaxed mb-4">Tam zamanlı, büyüme odaklı. Daha fazla sermaye, çoklu mağaza, marka inşası.</p>
              <ul className="space-y-2 text-sm text-[var(--body)]">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" /> Çoklu pazaryeri</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" /> Marka & büyüme</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" /> Ölçeklenebilir model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NE DAHIL */}
      <section className="py-16 md:py-24 bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">HİZMETİN KAPSAMI</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              Hataya yer bırakmadan, <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">uçtan uca kurulum</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--body)] max-w-2xl mx-auto">
              Tek başınıza aylar sürecek kurulumu, profesyonel ekiple haftalar içinde tamamlıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DAHIL.map((d) => {
              const Icon = IkonMap[d.ikon] ?? CheckCircle2;
              return (
                <div key={d.baslik} className="rounded-2xl bg-white border border-[var(--border)] p-6 hover:shadow-xl hover:border-emerald-300 transition-all">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{d.baslik}</h3>
                  <p className="text-sm text-[var(--body)] leading-relaxed">{d.aciklama}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUREÇ */}
      <section id="surec" className="py-16 md:py-24 bg-white border-y border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">NASIL ÇALIŞIR</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">6 adımda yayında</h2>
          </div>
          <div className="space-y-4">
            {SUREC.map((a) => {
              const Icon = IkonMap[a.ikon] ?? CheckCircle2;
              return (
                <div key={a.no} className="flex items-start gap-4 md:gap-6 rounded-2xl border border-[var(--border)] bg-white p-5 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-900 to-blue-700 text-white flex items-center justify-center font-extrabold text-lg shadow-lg">{a.no}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-emerald-600 shrink-0" />
                      <h3 className="text-lg font-bold text-[var(--foreground)]">{a.baslik}</h3>
                    </div>
                    <p className="text-sm md:text-base text-[var(--body)] leading-relaxed">{a.aciklama}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALIRKEN KAZAN */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 items-center justify-center mb-6 shadow-2xl">
            <Tag className="h-7 w-7 text-white" strokeWidth={2.2} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">'Alırken Kazan' Modeli</h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Pazaryeri indirimlerini ve tedarik fırsatlarını sürekli takip ederiz. Doğru zamanda,
            doğru ürünü, doğru fiyata tedarik edip stoklarsınız. Mağaza ve stok yönetimi ile
            kâr marjınızı optimize ederiz.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { t: "İndirim Takibi", d: "Pazaryeri kampanyalarını sürekli izleriz" },
              { t: "Akıllı Tedarik", d: "Düşük fiyatlı, yüksek kâr potansiyelli ürün" },
              { t: "Stok Yönetimi", d: "Doğru miktarda, doğru zamanda stok" },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-white/10 border border-white/15 p-5 backdrop-blur-sm">
                <div className="font-bold text-white mb-1">{x.t}</div>
                <div className="text-sm text-slate-300">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] text-center mb-10">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {FAQ.map((s) => (
              <details key={s.soru} className="group rounded-2xl border border-[var(--border)] bg-white p-5 md:p-6 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-4 font-bold text-[var(--foreground)] list-none">
                  {s.soru}
                  <span className="text-[var(--accent-to)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[var(--body)] leading-relaxed">{s.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24 bg-[var(--background-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">Başvuru / Bilgi Formu</h2>
            <p className="text-[var(--body)]">Formu doldurun, size özel plan için dönüş yapalım.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      <CTAWhatsApp baslik="Hemen başlamak için WhatsApp'tan yazın" altBaslik="Hedefinizi, sermayenizi ve beklentinizi dinleyelim; size en uygun planı çıkaralım." />
    </>
  );
}
