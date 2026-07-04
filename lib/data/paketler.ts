/**
 * Evrensel 4-tier paket yapısı — her hizmet sayfasında kullanılır.
 * "Kendi ürün vitrini" yaklaşımı: Sprinter kendi paketlerini öne çıkarır.
 */

export type PaketAdi = "lansman" | "baslangic" | "pro" | "kurumsal";
export type PaketTipi = "e-ticaret" | "kurumsal";

export interface Paket {
  id: PaketAdi;
  tipi: PaketTipi;
  baslik: string;
  slogan: string;
  fiyatNotu: string;
  populer?: boolean;
  vurgu: string;
  ozellikler: string[];
  ctaMetin: string;
  hedefKitle: string;
}

// ================================================================
// E-TİCARET PAKETLERİ
// ================================================================
export const ETICARET_PAKETLER: Record<PaketAdi, Paket> = {
  lansman: {
    id: "lansman",
    tipi: "e-ticaret",
    baslik: "E-Ticaret Lansman",
    slogan: "Pazaryerlerinde satışa hızlı başlangıç.",
    fiyatNotu: "Teklif Al",
    vurgu: "Trendyol/Hepsiburada mağaza kurulumu + ilk 50 ürün",
    hedefKitle: "Pazaryerlerinde satışa yeni başlayanlar",
    ozellikler: [
      "Trendyol veya Hepsiburada mağaza kurulumu",
      "İlk 50 ürün yükleme (görsel + açıklama)",
      "Kategori ve varyant eşleştirme",
      "Ödeme altyapısı kurulumu (iyzico veya PayTR)",
      "Temel e-fatura entegrasyonu",
      "Kargo entegrasyonu (Yurtiçi veya Aras)",
      "1 tur revizyon",
      "14 iş günü teslim",
    ],
    ctaMetin: "E-Ticaret Lansman Teklifi Al",
  },
  baslangic: {
    id: "baslangic",
    tipi: "e-ticaret",
    baslik: "E-Ticaret Başlangıç",
    slogan: "Küçük e-ticaret işletmeleri için sağlam temel.",
    fiyatNotu: "Teklif Al",
    vurgu: "Custom e-ticaret sitesi + 1 pazaryeri + e-fatura",
    hedefKitle: "Küçük e-ticaret işletmeleri, KOBİ'ler",
    ozellikler: [
      "Custom e-ticaret sitesi (Next.js + Shopify)",
      "Sınırsız ürün + varyant + stok yönetimi",
      "1 pazaryeri entegrasyonu (Trendyol veya Hepsiburada)",
      "Ödeme entegrasyonu (iyzico/PayTR + taksit)",
      "e-Fatura + e-Arşiv entegrasyonu",
      "Kargo entegrasyonu (Yurtiçi, Aras, MNG)",
      "Google Analytics + Meta Pixel kurulumu",
      "2 tur revizyon",
      "21 iş günü teslim",
    ],
    ctaMetin: "E-Ticaret Başlangıç Teklifi Al",
  },
  pro: {
    id: "pro",
    tipi: "e-ticaret",
    baslik: "E-Ticaret Pro",
    slogan: "Büyüyen e-ticaret için çoklu pazaryeri + AI.",
    fiyatNotu: "Teklif Al",
    vurgu: "Custom e-ticaret + 3+ pazaryeri + AI + mağaza yönetimi",
    populer: true,
    hedefKitle: "Büyüyen e-ticaret, çoklu kanal satış",
    ozellikler: [
      "Custom e-ticaret sitesi (Next.js + Shopify Headless)",
      "3+ pazaryeri entegrasyonu (Trendyol, HB, N11, Amazon, Çiçeksepeti)",
      "Merkezi stok yönetimi (tüm kanallar senkron)",
      "AI özellikler (ürün açıklaması, chatbot, arama)",
      "WhatsApp Business API + otomatik bildirimler",
      "e-Fatura + e-Arşiv + e-İrsaliye",
      "ERP/CRM entegrasyonu (Logo, Mikro, Paraşüt)",
      "Google Shopping + Meta katalog entegrasyonu",
      "Performans optimizasyonu (LCP < 1.0s, Lighthouse 90+)",
      "3 ay ücretsiz mağaza yönetimi desteği",
      "3 tur revizyon",
      "30 iş günü teslim",
    ],
    ctaMetin: "E-Ticaret Pro Teklifi Al",
  },
  kurumsal: {
    id: "kurumsal",
    tipi: "e-ticaret",
    baslik: "E-Ticaret Kurumsal",
    slogan: "Büyük ölçek e-ticaret için sınırsız, SLA garantili.",
    fiyatNotu: "Teklif Al",
    vurgu: "Sınırsız pazaryeri + ERP + özel AI + SLA garantili destek",
    hedefKitle: "Büyük e-ticaret operasyonları, holding, çoklu mağaza",
    ozellikler: [
      "Custom e-ticaret sitesi + tüm pazaryerleri",
      "Omnichannel panel (merkezi stok, fiyat, sipariş)",
      "ERP / CRM / muhasebe tam entegrasyonu (Logo, SAP, Mikro)",
      "Özel AI ajanları (stok tahmini, dinamik fiyatlandırma)",
      "Çoklu dil + çoklu para birimi",
      "SLA garantili destek (4 saat yanıt)",
      "Özel product owner + geliştirici ataması",
      "Sürekli mağaza yönetimi (opsiyonel)",
      "Sınırsız revizyon",
      "Güvenlik + performans raporları",
    ],
    ctaMetin: "E-Ticaret Kurumsal Teklifi Al",
  },
};

// ================================================================
// KURUMSAL WEB PAKETLERİ
// ================================================================
export const KURUMSAL_PAKETLER: Record<PaketAdi, Paket> = {
  lansman: {
    id: "lansman",
    tipi: "kurumsal",
    baslik: "Lansman",
    slogan: "Yeni işletmeler için hızlı, uygun bütçeli başlangıç.",
    fiyatNotu: "Teklif Al",
    vurgu: "Hızlı teslim, hazır şablon, düşük bütçe",
    hedefKitle: "Yeni açılan işletmeler, küçük bütçeyle başlamak isteyenler",
    ozellikler: [
      "Tek sayfa (one-page) modern tasarım",
      "Mobil uyumlu, hızlı açılış",
      "Hazır premium şablon (seçenekler arasından)",
      "İletişim formu + WhatsApp butonu",
      "Temel SEO ayarları (meta, başlık, sitemap)",
      "1 tur revizyon",
      "7 iş günü teslim",
      "Vercel'de barındırma (1 yıl ücretsiz)",
    ],
    ctaMetin: "Lansman Teklifi Al",
  },
  baslangic: {
    id: "baslangic",
    tipi: "kurumsal",
    baslik: "Başlangıç",
    slogan: "KOBİ'ler için kurumsal kimliğe uygun, sağlam temel.",
    fiyatNotu: "Teklif Al",
    vurgu: "Kurumsal kimlik, 5-10 sayfa, SEO temel",
    hedefKitle: "KOBİ'ler, yerel hizmet firmaları, profesyonel ofisler",
    ozellikler: [
      "5-10 arası özgün sayfa",
      "Özel kurumsal tasarım (markanıza özel)",
      "Mobil + tablet + masaüstü uyumlu",
      "Blog altyapısı (içerik pazarlaması için)",
      "SEO temel paketi (yerel + teknik)",
      "Google İş Profili kurulumu + optimizasyonu",
      "Google Analytics + Search Console",
      "İletişim formu + CRM entegrasyonu",
      "2 tur revizyon",
      "14 iş günü teslim",
    ],
    ctaMetin: "Başlangıç Teklifi Al",
  },
  pro: {
    id: "pro",
    tipi: "kurumsal",
    baslik: "Pro",
    slogan: "Büyüyen işletmeler için AI + gelişmiş SEO.",
    fiyatNotu: "Teklif Al",
    vurgu: "Blog + SEO ileri + AI features + WhatsApp Business",
    populer: true,
    hedefKitle: "Büyüyen kurumsal, dijitalde ciddi yatırım yapanlar",
    ozellikler: [
      "Tüm Başlangıç özellikleri",
      "Blog + içerik pazarlaması altyapısı",
      "Gelişmiş SEO paketi (içerik + teknik + yerel)",
      "AI özellikler (ürün açıklaması, içerik önerisi, chatbot)",
      "WhatsApp Business API entegrasyonu",
      "Email marketing kurulumu (Mailchimp/Resend)",
      "Performans + güvenlik optimizasyonu",
      "3 tur revizyon",
      "21 iş günü teslim",
      "3 ay ücretsiz bakım",
    ],
    ctaMetin: "Pro Teklifi Al",
  },
  kurumsal: {
    id: "kurumsal",
    tipi: "kurumsal",
    baslik: "Kurumsal",
    slogan: "Büyük ölçek için sınırsız, özel ekip, SLA garantili.",
    fiyatNotu: "Teklif Al",
    vurgu: "Sınırsız + custom + özel entegrasyonlar + SLA",
    hedefKitle: "Büyük işletmeler, holding, çok uluslu markalar, özel ihtiyaçlar",
    ozellikler: [
      "Tüm Pro özellikleri",
      "Sınırsız sayfa, ürün, kullanıcı",
      "Özel yazılım geliştirme (API, mikroservis)",
      "Çoklu dil (i18n) + çoklu para birimi",
      "ERP / CRM / muhasebe entegrasyonları",
      "Özel AI / GPT entegrasyonları (chatbot, otomasyon)",
      "SLA garantili destek (4 saat yanıt)",
      "Özel product owner + geliştirici ataması",
      "Sınırsız revizyon (çeyreklik plan)",
      "Sürekli bakım + güvenlik güncellemeleri",
      "Çeyreklik performans raporları",
    ],
    ctaMetin: "Kurumsal Teklifi Al",
  },
};

export const PAKET_SIRASI: PaketAdi[] = ["lansman", "baslangic", "pro", "kurumsal"];