/**
 * Site genel yapılandırması — her yerden tek kaynaktan okunur.
 */
export const SITE = {
  name: "Sprinter Yazılım",
  shortName: "Sprinter",
  tagline: "İşletmenizi geleceğe taşıyan modern dijital altyapılar.",
  description:
    "Next.js + Shopify headless, SEO odaklı, AI destekli modern e-ticaret ve dijital ürünler stüdyosu. Kurumsal web, e-ticaret, SEO, reklam ve AI otomasyon.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sprinteryazilim.com",
  // Not: Gerçek OG görseli app/opengraph-image.tsx tarafından dinamik üretilir (PNG).
  // Buradaki değer, manuel metadata için güvenli bir fallbacktir.
  ogImage: "/logo.svg",
  locale: "tr_TR",
  email: "hello@sprinteryazilim.com",
  phoneDisplay: "(539) 654 04 61",
  whatsappRaw: process.env.NEXT_PUBLIC_WHATSAPP ?? "5396540461",
  twitter: "@sprinteryazilim",
  facebook: "sprinteryazilim",
  instagram: "sprinteryazilim",
  linkedin: "sprinteryazilim",
  address: {
    city: "İstanbul",
    country: "TR",
  },
  foundedYear: 2022,
} as const;

/**
 * Üst gezinme başlıkları (footer'da tam liste kullanılır).
 */
export const NAV_LINKS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "E-Ticaret", href: "/e-ticaret" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Teknolojiler", href: "/teknolojiler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Süreç", href: "/surec" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
] as const;

/**
 * Header (üst bar) için sadeleştirilmiş alt küme — çok kalabalık olmasın.
 */
export const HEADER_NAV_LINKS = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "E-Ticaret", href: "/e-ticaret" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Teknolojiler", href: "/teknolojiler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
] as const;