import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  CreditCard,
  FileText,
  Truck,
  Database,
  MessageCircle,
  GraduationCap,
  Settings,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getWhatsAppNumber } from "@/lib/utils";
import * as Icons from "lucide-react";
import {
  ENTEGRASYONLAR,
  ENTEGRASYON_KATEGORI_ETIKET,
  ENTEGRASYON_KATEGORI_SIRASI,
  type Entegrasyon,
  type EntegrasyonKategori,
} from "@/lib/data/e-ticaret-entegrasyonlar";
import { buildMetadata, jsonLd } from "@/lib/seo/metadata";
import { SITE } from "@/lib/data/site";
import { PaketComparison } from "@/components/sections/paket-comparison";
import { SSSSection } from "@/components/sections/sss-accordion";
import { CTAWhatsApp } from "@/components/sections/cta-whatsapp";

export const metadata = buildMetadata({
  title: "E-Ticaret Çözümleri | Trendyol, Hepsiburada, N11, Amazon Entegrasyonu",
  description:
    "Türkiye'nin önde gelen pazaryeri, ödeme, fatura ve kargo entegrasyonları. Trendyol, Hepsiburada, N11, Amazon, iyzico, PayTR, e-Fatura, POS cihazları tek elden. Mağaza yönetimi, eğitim ve danışmanlık.",
  path: "/e-ticaret",
  keywords: [
    "eticaret entegrasyonu",
    "trendyol entegrasyonu",
    "hepsiburada entegrasyonu",
    "n11 entegrasyonu",
    "amazon entegrasyonu",
    "iyzico entegrasyonu",
    "e fatura entegrasyonu",
    "pazaryeri entegrasyonu",
    "online mağaza yönetimi",
    "eticaret danışmanlık",
    "eticaret eğitimi",
  ],
});

const KATEGORI_IKONLARI: Record<EntegrasyonKategori, LucideIcon> = {
  pazaryeri: ShoppingBag,
  odeme: CreditCard,
  pos: CreditCard,
  fatura: FileText,
  kargo: Truck,
  erp: Database,
  diger: Settings,
};

const KATEGORI_BASLIK_DETAY: Record<EntegrasyonKategori, { baslik: string; aciklama: string; renk: string }> = {
  pazaryeri: {
    baslik: "Pazaryeri Entegrasyonları",
    aciklama: "Trendyol, Hepsiburada, N11, Amazon ve daha fazlası. Ürün ve stoklarınız tek panelden yönetin.",
    renk: "from-pink-500 to-rose-600",
  },
  odeme: {
    baslik: "Ödeme Sistemleri",
    aciklama: "Türkiye'nin tüm sanal POS sağlayıcıları. Taksit, 3D Secure, link ile ödeme.",
    renk: "from-blue-500 to-indigo-600",
  },
  pos: {
    baslik: "POS Cihazları",
    aciklama: "Visa, Mastercard, Amex, TROY, Apple Pay, Google Pay — tüm kartlar ve dijital cüzdanlar.",
    renk: "from-emerald-500 to-teal-600",
  },
  fatura: {
    baslik: "Fatura & Muhasebe",
    aciklama: "e-Fatura, e-Arşiv, e-İrsaliye — Logo, Mikro, Paraşüt, Kolays ve daha fazlası.",
    renk: "from-violet-500 to-purple-600",
  },
  kargo: {
    baslik: "Kargo Entegrasyonları",
    aciklama: "Yurtiçi, Aras, MNG, PTT, UPS, DHL. Otomatik etiket ve takip.",
    renk: "from-amber-500 to-orange-600",
  },
  erp: {
    baslik: "ERP / Stok / CRM",
    aciklama: "Logo, SAP, Mikro, Odoo, HubSpot — kurumsal entegrasyonlar.",
    renk: "from-slate-600 to-slate-800",
  },
  diger: {
    baslik: "Diğer Entegrasyonlar",
    aciklama: "Analytics, pixel, CRM, WhatsApp Business API ve daha fazlası.",
    renk: "from-cyan-500 to-blue-600",
  },
};

export default function ETicaretPage() {
  const waLink = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent("Merhaba Sprinter, e-ticaret entegrasyonları hakkında bilgi almak istiyorum.")}`;
  const toplamEntegrasyon = ENTEGRASYONLAR.length;
  const toplamPazaryeri = ENTEGRASYONLAR.filter((e) => e.kategori === "pazaryeri").length;
  const toplamOdeme = ENTEGRASYONLAR.filter((e) => e.kategori === "odeme").length;

  const ldFaq = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Trendyol, Hepsiburada, N11 ve Amazon'a aynı anda entegrasyon yapabilir miyim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Omnichannel panelimizle tüm pazaryerlerinize tek noktadan ürün, stok ve sipariş yönetimi sağlıyoruz. Trendyol, Hepsiburada, N11, Amazon (TR) başta olmak üzere 8+ pazaryerini entegre edebiliyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "e-Fatura entegrasyonu hangi muhasebe programlarıyla çalışır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logo İşbaşı, Mikro, Liko, Paraşüt, Kolays (eski Uyumsoft), BizimHesap ve GİB'in tüm e-Fatura/e-Arşiv/e-İrsaliye uyumlu yazılımlarıyla entegre çalışıyoruz. Sipariş tamamlandığında otomatik fatura kesilir ve muhasebe yazılımınıza aktarılır.",
        },
      },
      {
        "@type": "Question",
        name: "Mağaza yönetimi hizmeti veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Lansman ve Başlangıç paketlerimizde teslim sonrası 30 gün ücretsiz mağaza yönetimi desteği var. Pro pakette 3 ay, Kurumsal pakette sürekli mağaza yönetimi, ürün ekleme, sipariş takibi, kampanya yönetimi hizmeti sunuyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Trendyol mağaza eğitimi veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. 4 saatlik birebir eğitimde Trendyol, Hepsiburada, N11 ve Amazon panellerini uygulamalı öğretiyoruz: ürün yükleme, varyant yönetimi, kampanya oluşturma, sipariş ve iade süreçleri, komisyon ve kâr marjı analizi.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(ldFaq) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-5">
            <ShoppingBag className="h-3.5 w-3.5" />
            E-Ticaret Çözümleri · {toplamEntegrasyon}+ Entegrasyon
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.05] max-w-4xl">
            E-ticaretinizi <span className="text-gradient">tek elden yönetin</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-3xl">
            Trendyol, Hepsiburada, N11, Amazon pazaryerleri; iyzico, PayTR ödeme
            altyapıları; e-Fatura, e-Arşiv; Visa, MasterCard, TROY, Apple Pay;
            Yurtiçi, Aras, MNG kargo — tüm entegrasyonlar tek panelde.
            Üstelik mağaza yönetimi, eğitim ve danışmanlık dahil.
          </p>

          {/* Metrikler */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl">
            <Metric value={`${toplamPazaryeri}+`} label="Pazaryeri" />
            <Metric value={`${toplamOdeme}+`} label="Ödeme Sistemi" />
            <Metric value="30+" label="Kargo / ERP" />
            <Metric value="7/24" label="Mağaza Yönetimi" />
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base h-14 px-8 shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Ücretsiz Keşif Görüşmesi
            </a>
            <Link
              href="#entegrasyonlar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[var(--border)] hover:border-slate-400 text-[var(--foreground)] font-semibold text-base h-14 px-8 transition-all"
            >
              Entegrasyonları İncele
            </Link>
          </div>
        </div>
      </section>

      {/* HİZMET KAPSAMI */}
      <section className="py-16 md:py-24 bg-white border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              NELER YAPIYORUZ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              Sadece entegrasyon değil, <span className="text-gradient">uçtan uca hizmet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <HizmetKutu
              icon={ShoppingBag}
              baslik="Pazaryeri Mağaza Kurulumu"
              aciklama="Trendyol, Hepsiburada, N11, Amazon mağaza açılışı, kategori eşleştirme, ürün yükleme."
              gradient="from-pink-500 to-rose-600"
            />
            <HizmetKutu
              icon={CreditCard}
              baslik="Ödeme Altyapısı"
              aciklama="iyzico, PayTR, Shopify Payments kurulumu + 3D Secure + taksit ayarları."
              gradient="from-blue-500 to-indigo-600"
            />
            <HizmetKutu
              icon={FileText}
              baslik="e-Fatura & Muhasebe"
              aciklama="GİB uyumlu e-Fatura, e-Arşiv, e-İrsaliye; Logo, Mikro, Paraşüt entegrasyonu."
              gradient="from-violet-500 to-purple-600"
            />
            <HizmetKutu
              icon={Truck}
              baslik="Kargo Entegrasyonu"
              aciklama="Yurtiçi, Aras, MNG, PTT, UPS, DHL — otomatik etiket ve takip."
              gradient="from-amber-500 to-orange-600"
            />
            <HizmetKutu
              icon={Database}
              baslik="ERP & Stok Senkronu"
              aciklama="Logo, SAP, Mikro, Odoo ile gerçek zamanlı stok ve cari senkronu."
              gradient="from-slate-600 to-slate-800"
            />
            <HizmetKutu
              icon={Settings}
              baslik="Mağaza Yönetimi"
              aciklama="Ürün ekleme, sipariş takibi, kampanya yönetimi, iade/değişim — günlük operasyon."
              gradient="from-cyan-500 to-blue-600"
            />
            <HizmetKutu
              icon={GraduationCap}
              baslik="Eğitim & Danışmanlık"
              aciklama="Panel eğitimi, pazaryeri danışmanlığı, SEO ve reklam stratejisi."
              gradient="from-emerald-500 to-teal-600"
            />
            <HizmetKutu
              icon={MessageCircle}
              baslik="WhatsApp Destek Hattı"
              aciklama="Sipariş onayı, kargo takibi, müşteri desteği için WhatsApp Business API."
              gradient="from-green-500 to-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* ENTEGRASYONLAR — Responsive Tablo */}
      <section id="entegrasyonlar" className="py-20 md:py-28 bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              ENTEGRASYONLAR
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              {toplamEntegrasyon}+ entegrasyon, <span className="text-gradient">tek panel</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--body)] max-w-2xl mx-auto">
              Pazaryeri, ödeme, POS, fatura, kargo, ERP — ihtiyacınız olan tüm sistemleri entegre ediyoruz.
            </p>
          </div>

          {/* Kategori bazlı responsive grid */}
          <div className="space-y-12 md:space-y-16">
            {ENTEGRASYON_KATEGORI_SIRASI.map((kat) => {
              const liste = ENTEGRASYONLAR.filter((e) => e.kategori === kat);
              if (liste.length === 0) return null;
              const { baslik, aciklama, renk } = KATEGORI_BASLIK_DETAY[kat];
              const Icon = KATEGORI_IKONLARI[kat];

              return (
                <div key={kat}>
                  {/* Kategori başlığı */}
                  <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6">
                    <div className={`shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br ${renk} text-white flex items-center justify-center shadow-lg`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-extrabold text-[var(--foreground)]">{baslik}</h3>
                      <p className="text-sm md:text-base text-[var(--body)] mt-1">{aciklama}</p>
                    </div>
                  </div>

                  {/* Entegrasyon kartları — responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {liste.map((e) => (
                      <EntegrasyonKart key={e.isim} entegrasyon={e} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAĞAZA YÖNETİMİ & EĞİTİM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
              YÖNETİM & EĞİTİM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              Siz satışa odaklanın, <span className="text-gradient">biz yönetelim</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mağaza Yönetimi */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-7 md:p-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mb-5 shadow-lg">
                <Settings className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-3">Mağaza Yönetimi</h3>
              <p className="text-[var(--body)] leading-relaxed mb-5">
                Trendyol, Hepsiburada, N11 ve kendi sitenizdeki ürün, sipariş ve stok yönetimini sizin adınıza yapıyoruz.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Ürün ekleme / güncelleme (görsel + açıklama + varyant)",
                  "Stok ve fiyat senkronizasyonu (tüm kanallar)",
                  "Sipariş takibi ve kargo etiketi",
                  "Kampanya yönetimi (pazaryeri indirimleri)",
                  "Müşteri yorumları yanıtlama",
                  "İade / değişim yönetimi",
                  "Aylık performans raporu",
                ].map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--body)]">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" strokeWidth={2.5} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eğitim & Danışmanlık */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 p-7 md:p-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-5 shadow-lg">
                <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-3">Eğitim & Danışmanlık</h3>
              <p className="text-[var(--body)] leading-relaxed mb-5">
                Panel kullanımı, SEO, reklam ve pazaryeri stratejisi konularında uygulamalı eğitim ve danışmanlık.
              </p>
              <ul className="space-y-2.5">
                {[
                  "4 saat birebir panel eğitimi (canlı ekran paylaşımlı)",
                  "Trendyol/Hepsiburada/N11/Amazon mağaza yönetimi",
                  "Ürün açıklaması SEO yazımı",
                  "Google Ads + Meta Ads temelleri",
                  "Komisyon ve kâr marjı hesaplama",
                  "Rekabet ve fiyat analizi",
                  "Video kayıtları + doküman teslimi",
                ].map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--body)]">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" strokeWidth={2.5} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAKETLER */}
      <section className="py-20 md:py-28 bg-[var(--background-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <PaketComparison
            baslik="E-Ticaret Paketleri"
            altBaslik="İşletmenizin ölçeğine uygun paketi seçin. Tüm paketlerde entegrasyon + kurulum + eğitim dahildir."
          />
        </div>
      </section>

      {/* SSS */}
      <SSSSection
        baslik="E-Ticaret Sıkça Sorulan Sorular"
        altBaslik="Trendyol entegrasyonu, e-Fatura, mağaza yönetimi ve eğitim hakkında sık sorulanlar."
        items={[
          {
            soru: "Trendyol, Hepsiburada, N11 ve Amazon'a aynı anda entegrasyon yapabilir miyim?",
            cevap:
              "Evet. Omnichannel panelimizle tüm pazaryerlerinize tek noktadan ürün, stok ve sipariş yönetimi sağlıyoruz. Trendyol, Hepsiburada, N11, Amazon (TR) başta olmak üzere 8+ pazaryerini entegre edebiliyoruz. Mevcut mağazalarınızı da taşıyabiliyoruz (ürün + yorum + puan korunarak).",
          },
          {
            soru: "e-Fatura entegrasyonu hangi muhasebe programlarıyla çalışır?",
            cevap:
              "Logo İşbaşı, Mikro, Liko, Paraşüt, Kolays (eski Uyumsoft), BizimHesap ve GİB'in tüm e-Fatura/e-Arşiv/e-İrsaliye uyumlu yazılımlarıyla entegre çalışıyoruz. Sipariş tamamlandığında otomatik fatura kesilir ve muhasebe yazılımınıza aktarılır.",
          },
          {
            soru: "Mağaza yönetimi hizmeti veriyor musunuz?",
            cevap:
              "Evet. Lansman ve Başlangıç paketlerimizde teslim sonrası 30 gün ücretsiz mağaza yönetimi desteği var. Pro pakette 3 ay, Kurumsal pakette sürekli mağaza yönetimi, ürün ekleme, sipariş takibi, kampanya yönetimi hizmeti sunuyoruz.",
          },
          {
            soru: "Trendyol mağaza eğitimi veriyor musunuz?",
            cevap:
              "Evet. 4 saatlik birebir eğitimde Trendyol, Hepsiburada, N11 ve Amazon panellerini uygulamalı öğretiyoruz: ürün yükleme, varyant yönetimi, kampanya oluşturma, sipariş ve iade süreçleri, komisyon ve kâr marjı analizi. Video kayıtları + doküman teslimi.",
          },
          {
            soru: "POS cihazı entegrasyonu ne anlama geliyor?",
            cevap:
              "Fiziksel mağazanızdaki POS cihazından yapılan ödemeleri e-ticaret sitenizle entegre edebiliyoruz. Visa, Mastercard, Amex, TROY (yerli kart), Apple Pay, Google Pay tümü desteklenir. Aynı zamanda e-ticaret sitenizdeki sanal POS'u fiziksel mağazanızda da kullanabilirsiniz (tek cihaz).",
          },
          {
            soru: "Kargo şirketlerini otomatik entegre edebiliyor musunuz?",
            cevap:
              "Evet. Yurtiçi, Aras, MNG, PTT, UPS, DHL, Sendcloud dahil tüm büyük kargo şirketleriyle API entegrasyonumuz var. Sipariş onayında otomatik kargo etiketi oluşturulur, müşteriye SMS/WhatsApp ile takip numarası gönderilir.",
          },
        ]}
      />

      <CTAWhatsApp
        baslik="E-ticaret projenizi başlatalım"
        altBaslik="Trendyol, Hepsiburada, N11, Amazon mağaza entegrasyonu + e-Fatura + ödeme + kargo + eğitim — hepsi tek elden."
      />
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[var(--border)] p-4 md:p-5">
      <div className="text-2xl md:text-3xl font-extrabold text-[var(--accent-to)]">{value}</div>
      <div className="text-xs md:text-sm text-[var(--body)] mt-1">{label}</div>
    </div>
  );
}

function HizmetKutu({
  icon: Icon,
  baslik,
  aciklama,
  gradient,
}: {
  icon: LucideIcon;
  baslik: string;
  aciklama: string;
  gradient: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[var(--border)] p-6 hover:shadow-xl hover:border-slate-300 transition-all group">
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{baslik}</h3>
      <p className="text-sm text-[var(--body)] leading-relaxed">{aciklama}</p>
    </div>
  );
}

function EntegrasyonKart({ entegrasyon }: { entegrasyon: Entegrasyon }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[entegrasyon.ikon] ?? Icons.Circle;
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-white border p-5 transition-all hover:shadow-xl hover:border-slate-300 h-full flex flex-col",
        entegrasyon.vurgu ? "border-blue-300 bg-gradient-to-br from-white to-blue-50/30 shadow-md" : "border-[var(--border)]",
      )}
    >
      {entegrasyon.vurgu && (
        <span className="absolute -top-2 right-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white shadow">
          ⭐ ÖNE ÇIKAN
        </span>
      )}

      <div className="flex items-start gap-3 mb-3">
        <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-slate-100 to-blue-100 text-slate-700 flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white transition-all">
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>
        <h4 className="font-bold text-[var(--foreground)] leading-tight">{entegrasyon.isim}</h4>
      </div>

      <ul className="space-y-1.5 mt-auto">
        {entegrasyon.ozellikler.slice(0, 4).map((o, i) => (
          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--body)] leading-snug">
            <CheckCircle2 className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0" strokeWidth={2.5} />
            <span>{o}</span>
          </li>
        ))}
        {entegrasyon.ozellikler.length > 4 && (
          <li className="text-[10px] text-[var(--muted)] pl-4">+{entegrasyon.ozellikler.length - 4} özellik daha</li>
        )}
      </ul>

      {entegrasyon.notlar && (
        <p className="mt-3 pt-3 border-t border-dashed border-[var(--border)] text-[10px] text-[var(--muted)] italic leading-relaxed">
          {entegrasyon.notlar}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";