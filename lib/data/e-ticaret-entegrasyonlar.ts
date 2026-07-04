/**
 * E-Ticaret entegrasyon veri tabanı — /e-ticaret landing page'i ve
 * sektör sayfası için tek kaynak.
 *
 * Her entegrasyon: isim, kategori, desteklenen özellikler, notlar.
 */

export type EntegrasyonKategori =
  | "pazaryeri"
  | "odeme"
  | "fatura"
  | "kargo"
  | "pos"
  | "erp"
  | "diger";

export interface Entegrasyon {
  isim: string;
  kategori: EntegrasyonKategori;
  ikon: string; // lucide-react adı
  ozellikler: string[];
  notlar?: string;
  url?: string;
  vurgu?: boolean;
}

export const ENTEGRASYON_KATEGORI_ETIKET: Record<EntegrasyonKategori, string> = {
  pazaryeri: "Pazaryeri Entegrasyonları",
  odeme: "Ödeme Sistemleri",
  fatura: "Fatura & Muhasebe",
  kargo: "Kargo Entegrasyonları",
  pos: "POS Cihazları",
  erp: "ERP / Stok / CRM",
  diger: "Diğer Entegrasyonlar",
};

export const ENTEGRASYON_KATEGORI_SIRASI: EntegrasyonKategori[] = [
  "pazaryeri",
  "odeme",
  "pos",
  "fatura",
  "kargo",
  "erp",
  "diger",
];

export const ENTEGRASYONLAR: Entegrasyon[] = [
  // ============================================================
  // PAZARYERİ
  // ============================================================
  {
    isim: "Trendyol",
    kategori: "pazaryeri",
    ikon: "ShoppingBag",
    vurgu: true,
    ozellikler: [
      "Ürün otomatik senkronizasyonu (stok + fiyat)",
      "Sipariş yönetimi (Trendyol → kendi paneliniz)",
      "Kategori ve marka eşleştirme",
      "Toplu ürün yükleme (XML/Excel)",
      "Trendyol Kampanya yönetimi",
      "Kargo + fatura otomatik aktarım",
      "Komisyon ve kâr marjı raporu",
    ],
    notlar: "Türkiye'nin 1 numaralı pazaryeri. Stok senkronu kritik — biz çift yönlü yapıyoruz.",
  },
  {
    isim: "Hepsiburada",
    kategori: "pazaryeri",
    ikon: "ShoppingCart",
    vurgu: true,
    ozellikler: [
      "Merchant Service entegrasyonu",
      "Ürün varyant + stok senkronu",
      "Sipariş yönetimi (HMApi)",
      "Hepsiburada Logistics (HB Lojistik)",
      "İade ve iptal yönetimi",
      "Komisyon raporu",
    ],
    notlar: "API altyapısı Trendyol'a göre daha teknik; deneyimli ekip gerektirir.",
  },
  {
    isim: "N11",
    kategori: "pazaryeri",
    ikon: "Store",
    ozellikler: [
      "N11 SOAP API entegrasyonu",
      "Ürün kategori eşleştirme",
      "Stok ve fiyat senkronu",
      "Sipariş ve iade yönetimi",
      "Mağaza puan ve yorum yönetimi",
      "Komisyon takibi",
    ],
  },
  {
    isim: "Amazon (TR)",
    kategori: "pazaryeri",
    ikon: "Package",
    ozellikler: [
      "SP-API entegrasyonu",
      "Listing ve feed yönetimi",
      "FBA (Amazon Lojistik) entegrasyonu",
      "Sipariş ve iade yönetimi",
      "Business Reports (raporlar)",
      "A+ Content desteği",
    ],
    notlar: "Yurt dışı satış için SP-API ile global pazaryerlerine de açılabilir.",
  },
  {
    isim: "Çiçeksepeti",
    kategori: "pazaryeri",
    ikon: "Flower2",
    ozellikler: ["Ürün listeleme", "Sipariş yönetimi", "Bölgesel kargo kuralları", "Komisyon raporu"],
  },
  {
    isim: "PttAVM",
    kategori: "pazaryeri",
    ikon: "Building",
    ozellikler: ["Ürün listeleme", "Stok senkronu", "Sipariş yönetimi"],
  },
  {
    isim: "Çoklu Pazaryeri (Omnichannel)",
    kategori: "pazaryeri",
    ikon: "Layers",
    vurgu: true,
    ozellikler: [
      "Tek panelden tüm pazaryerleri yönetin",
      "Merkezi stok (tüm kanallar senkron)",
      "Fiyat farklılaştırma (her kanalda farklı fiyat)",
      "Birleşik rapor (hangi kanalda ne sattınız)",
      "Otomatik sipariş yönlendirme",
      "Komisyon ve kâr marjı analizi",
    ],
    notlar: "Türkiye'nin önde gelen çoklu pazaryeri yönetim platformları (Dolphin, Ticimax, IdeaSoft) ile entegre.",
  },

  // ============================================================
  // ÖDEME SİSTEMLERİ
  // ============================================================
  {
    isim: "iyzico",
    kategori: "odeme",
    ikon: "CreditCard",
    vurgu: true,
    ozellikler: [
      "Visa, MasterCard, Amex, Troy",
      "Apple Pay, Google Pay",
      "3D Secure 2.0 (zorunlu)",
      "Taksit ve vade farksız taksit",
      "İyzico ödeme formu (PCI uyumlu)",
      "Webhook ile otomatik sipariş",
      "Link ile ödeme (WhatsApp/SMS'ten)",
    ],
  },
  {
    isim: "PayTR",
    kategori: "odeme",
    ikon: "Wallet",
    vurgu: true,
    ozellikler: ["Visa/MC/Amex/Troy", "Taksit", "3D Secure", "Mobil ödeme", "Link ile ödeme"],
  },
  {
    isim: "Sipay",
    kategori: "odeme",
    ikon: "CircleDollarSign",
    ozellikler: ["Sanal POS", "Taksit", "Link ile ödeme", "Abonelik (subscription)"],
  },
  {
    isim: "Param",
    kategori: "odeme",
    ikon: "Banknote",
    ozellikler: ["Sanal POS", "Taksit", "Link ile ödeme"],
  },
  {
    isim: "Craftgate",
    kategori: "odeme",
    ikon: "Shield",
    ozellikler: ["Ödeme altyapısı", "Taksit", "Link ile ödeme"],
  },
  {
    isim: "PayU",
    kategori: "odeme",
    ikon: "Globe",
    ozellikler: ["Global ödeme", "Taksit", "Çoklu para birimi"],
  },
  {
    isim: "BKM Express",
    kategori: "odeme",
    ikon: "Zap",
    ozellikler: ["Banka kartları", "Hızlı ödeme", "Taksit"],
  },
  {
    isim: "Shopify Payments",
    kategori: "odeme",
    ikon: "ShoppingBag",
    vurgu: true,
    ozellikler: [
      "Visa/MC/Amex (komisyon %0)",
      "Apple Pay, Google Pay, Shop Pay",
      "Çoklu para birimi (USD/EUR/GBP)",
      "3D Secure 2.0",
      "Yerel ödeme (Klarna, iDEAL, vb.)",
    ],
    notlar: "Shopify headless projelerimizde Shopify Payments kullanıyoruz — komisyon avantajı büyük.",
  },

  // ============================================================
  // POS CİHAZLARI
  // ============================================================
  {
    isim: "Visa",
    kategori: "pos",
    ikon: "CreditCard",
    ozellikler: ["Visa debit", "Visa credit", "Visa Business", "Contactless"],
  },
  {
    isim: "Mastercard",
    kategori: "pos",
    ikon: "CreditCard",
    ozellikler: ["Mastercard debit", "Mastercard credit", "Maestro", "Contactless"],
  },
  {
    isim: "American Express",
    kategori: "pos",
    ikon: "CreditCard",
    ozellikler: ["Amex Blue/Gold/Platinum", "Türkiye'de kısıtlı kabul"],
  },
  {
    isim: "Troy (Yerli)",
    kategori: "pos",
    ikon: "CreditCard",
    vurgu: true,
    ozellikler: ["Tüm Türk bankaları", "Devlet destekli", "TROY logolu kartlar"],
  },
  {
    isim: "Apple Pay",
    kategori: "pos",
    ikon: "Smartphone",
    ozellikler: ["iPhone / Apple Watch", "Touch/Face ID doğrulama", "Sanal POS entegrasyonu"],
  },
  {
    isim: "Google Pay",
    kategori: "pos",
    ikon: "Smartphone",
    ozellikler: ["Android cihazlar", "Web üzerinden ödeme", "Sanal POS entegrasyonu"],
  },

  // ============================================================
  // FATURA & MUHASEBE
  // ============================================================
  {
    isim: "e-Fatura (GİB)",
    kategori: "fatura",
    ikon: "FileText",
    vurgu: true,
    ozellikler: [
      "Gelir İdaresi uyumlu",
      "UBL-TR XML formatı",
      "Otomatik fatura kesimi (sipariş sonrası)",
      "PDF + e-imza çıktısı",
      "İptal / iade faturası",
    ],
  },
  {
    isim: "e-Arşiv Fatura",
    kategori: "fatura",
    ikon: "Receipt",
    ozellikler: ["e-Fatura mükellefi olmayan müşterilere", "PDF + GİB portalı saklama", "Otomatik kesim"],
  },
  {
    isim: "e-İrsaliye",
    kategori: "fatura",
    ikon: "Truck",
    ozellikler: ["Sevkiyat irsaliyesi", "GİB uyumlu", "Kargo ile entegre"],
  },
  {
    isim: "Logo İşbaşı (e-Fatura)",
    kategori: "fatura",
    ikon: "Database",
    ozellikler: ["Logo muhasebe entegrasyonu", "Otomatik cari hesap", "Stok senkronu"],
  },
  {
    isim: "Mikro (e-Fatura)",
    kategori: "fatura",
    ikon: "Database",
    ozellikler: ["Mikro muhasebe entegrasyonu", "Cari ve stok", "Otomatik aktarım"],
  },
  {
    isim: "Liko Yazılım",
    kategori: "fatura",
    ikon: "Database",
    ozellikler: ["Liko muhasebe entegrasyonu", "Fatura ve irsaliye"],
  },
  {
    isim: "Paraşüt",
    kategori: "fatura",
    ikon: "Cloud",
    ozellikler: ["Bulut muhasebe", "e-Fatura API", "Gider + gelir yönetimi"],
  },
  {
    isim: "Kolays (eski Uyumsoft)",
    kategori: "fatura",
    ikon: "Cloud",
    ozellikler: ["Bulut muhasebe + e-Fatura", "Stok ve cari yönetimi"],
  },
  {
    isim: "BizimHesap",
    kategori: "fatura",
    ikon: "Cloud",
    ozellikler: ["KOBİ muhasebe + e-Fatura", "Kolay arayüz"],
  },

  // ============================================================
  // KARGO
  // ============================================================
  {
    isim: "Yurtiçi Kargo",
    kategori: "kargo",
    ikon: "Truck",
    vurgu: true,
    ozellikler: ["API entegrasyonu", "Otomatik kargo etiketi", "Adresten alma", "Takip numarası"],
  },
  {
    isim: "Aras Kargo",
    kategori: "kargo",
    ikon: "Truck",
    ozellikler: ["API entegrasyonu", "Otomatik etiket", "Takip"],
  },
  {
    isim: "MNG Kargo",
    kategori: "kargo",
    ikon: "Truck",
    ozellikler: ["API entegrasyonu", "Otomatik etiket", "Takip"],
  },
  {
    isim: "PTT Kargo",
    kategori: "kargo",
    ikon: "Truck",
    ozellikler: ["API entegrasyonu", "Otomatik etiket"],
  },
  {
    isim: "UPS",
    kategori: "kargo",
    ikon: "Truck",
    ozellikler: ["Yurt dışı kargo", "API entegrasyonu"],
  },
  {
    isim: "DHL",
    kategori: "kargo",
    ikon: "Truck",
    ozellikler: ["Yurt dışı kargo", "API entegrasyonu"],
  },
  {
    isim: "Sendcloud",
    kategori: "kargo",
    ikon: "Send",
    ozellikler: ["Çoklu kargo yönetimi (Avrupa)", "Toplu etiket"],
  },

  // ============================================================
  // ERP / STOK / CRM
  // ============================================================
  {
    isim: "Logo Tiger / GO3",
    kategori: "erp",
    ikon: "Database",
    ozellikler: ["Stok senkronu", "Cari hesap", "Sipariş aktarımı", "REST API"],
  },
  {
    isim: "SAP Business One",
    kategori: "erp",
    ikon: "Database",
    ozellikler: ["Kurumsal ERP", "Stok + cari + sipariş", "API entegrasyonu"],
  },
  {
    isim: "Mikro ERP",
    kategori: "erp",
    ikon: "Database",
    ozellikler: ["KOBİ ERP", "Stok ve cari", "REST API"],
  },
  {
    isim: "Odoo",
    kategori: "erp",
    ikon: "Database",
    ozellikler: ["Açık kaynak ERP", "E-ticaret modülü", "API"],
  },
  {
    isim: "HubSpot CRM",
    kategori: "erp",
    ikon: "Users",
    ozellikler: ["Müşteri yönetimi", "Pazarlama otomasyonu", "E-posta entegrasyonu"],
  },

  // ============================================================
  // DİĞER
  // ============================================================
  {
    isim: "Google Analytics 4",
    kategori: "diger",
    ikon: "BarChart3",
    ozellikler: ["Sayfa + sipariş + ödeme tracking", "Server-side container (doğru veri)"],
  },
  {
    isim: "Meta Pixel",
    kategori: "diger",
    ikon: "Target",
    ozellikler: ["Facebook + Instagram reklam", "Conversions API"],
  },
  {
    isim: "Google Tag Manager",
    kategori: "diger",
    ikon: "Tag",
    ozellikler: ["Server-side container", "Tüm tag'leri tek yerden yönet"],
  },
  {
    isim: "WhatsApp Business API",
    kategori: "diger",
    ikon: "MessageCircle",
    vurgu: true,
    ozellikler: [
      "Sipariş onay/bildirim",
      "Kargo takip mesajı",
      "AI chatbot",
      "İade/değişim talep toplama",
    ],
  },
  {
    isim: "Google Merchant Center",
    kategori: "diger",
    ikon: "ShoppingBag",
    ozellikler: ["Google Shopping feed", "Ürün XML'i otomatik"],
  },
];

export const getEntegrasyonlarByKategori = (kategori: EntegrasyonKategori): Entegrasyon[] =>
  ENTEGRASYONLAR.filter((e) => e.kategori === kategori);

export const getEntegrasyonByIsim = (isim: string): Entegrasyon | undefined =>
  ENTEGRASYONLAR.find((e) => e.isim === isim);