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
  ogImage: "/og-image.png",
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
  foundedYear: 2024,
} as const;

/**
 * Üst gezinme başlıkları.
 */
export const NAV_LINKS = [
  { label: "Anasayfa", href: "/" },
  { label: "E-Ticaret", href: "/e-ticaret" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Süreç", href: "/surec" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
] as const;