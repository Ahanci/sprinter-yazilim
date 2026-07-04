/**
 * Süreç adımları — anasayfa + /surec sayfasında kullanılır.
 * Sticky Scroll Reveal veya Timeline görseli ile basılır.
 */
export interface SurecAdimi {
  baslik: string;
  aciklama: string;
  cikti: string;
  ikon: "search" | "palette" | "code" | "rocket" | "trending-up";
}

export const SUREC_ADIMLARI: SurecAdimi[] = [
  {
    baslik: "1. Keşif & Analiz",
    aciklama:
      "İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. Mevcut dijital varlıklarınızı (site, sosyal medya, reklam) inceliyor; net bir brief ve KPI listesi çıkarıyoruz.",
    cikti: "Analiz raporu, hedef KPI'lar, proje brief'i",
    ikon: "search",
  },
  {
    baslik: "2. Tasarım & Prototip",
    aciklama:
      "Marka kimliğinize uygun wireframe ve görsel taslak hazırlıyoruz. Mobil + masaüstü için etkileşimli prototip üzerinden onayınızı alıyoruz.",
    cikti: "Onaylı Figma prototip, tasarım sistemi",
    ikon: "palette",
  },
  {
    baslik: "3. Geliştirme",
    aciklama:
      "Next.js + Tailwind + (Shopify headless veya özel backend) ile yazılımı inşa ediyoruz. AI-okunabilir semantik HTML, hız optimizasyonu ve SEO altyapısı dahil.",
    cikti: "Çalışan ürün, staging URL, kaynak kod",
    ikon: "code",
  },
  {
    baslik: "4. Test & Lansman",
    aciklama:
      "Tüm cihazlarda, tarayıcılarda ve sayfa hızı testlerini geçtikten sonra canlıya alıyoruz. DNS, SSL, analytics, search console kurulumlarını yapıyoruz.",
    cikti: "Canlı site, eğitim, doküman",
    ikon: "rocket",
  },
  {
    baslik: "5. Büyüme & Optimizasyon",
    aciklama:
      "Sürekli ölçüm, A/B testi ve içerik güncellemeleri ile büyümenizi destekliyoruz. Aylık performans raporu ve öneriler sunuyoruz.",
    cikti: "Aylık rapor, optimizasyon önerileri",
    ikon: "trending-up",
  },
];