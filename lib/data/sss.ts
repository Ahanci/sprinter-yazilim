/**
 * Genel SSS bankası — anasayfa + /sss sayfasında gösterilir.
 * Burada sadece GERÇEKTEN genel sorular olmalı.
 * Hizmete özel SSS'ler hizmetler.ts içinde tanımlı.
 * Sektöre özel SSS'ler ileride sektörler.ts içine eklenebilir.
 */

export interface SSSEtiket {
  soru: string;
  cevap: string;
}

export const GENEL_SSS: SSSEtiket[] = [
  {
    soru: "Sprinter tam olarak ne yapıyor?",
    cevap:
      "Sprinter Yazılım, modern web teknolojileri (Next.js, React, Shopify headless) ile kurumsal web siteleri, e-ticaret altyapıları, SEO ve dijital pazarlama hizmetleri, yapay zekâ entegrasyonları ve mobil uygulamalar geliştiren bir dijital ürünler stüdyosudur. Web tasarımdan SEO'ya, dijital reklamdan AI chatbot'a kadar uçtan uca dijital çözümler sunuyoruz.",
  },
  {
    soru: "Hangi teknolojilerle çalışıyorsunuz?",
    cevap:
      "Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS v4. E-ticaret: Shopify (headless Storefront API, Hydrogen). Animasyon: Framer Motion. 3D: Three.js. Backend: Node.js, PostgreSQL, Supabase. AI: OpenAI (GPT), Anthropic (Claude). Ödeme: iyzico, PayTR, Shopify Payments. Hosting: Vercel Edge. Modern, endüstri standardı, sürdürülebilir teknolojiler.",
  },
  {
    soru: "Neden Next.js ve React yerine PHP değil?",
    cevap:
      "Next.js sayesinde sayfalarınız önceden derlenir (SSG) ve CDN'den saniyenin altında açılır — geleneksel PHP sistemlere kıyasla 5-8 kat daha hızlı. Google Lighthouse SEO skoru 90+ seviyesine çıkar, AI destekli crawler'lar (GPT, Claude, Google) içeriğinizi çok daha iyi okur. Ayrıca ölçeklenebilirlik, sürdürülebilirlik ve geliştirici havuzu açısından modern stack daha avantajlı.",
  },
  {
    soru: "Bir proje ortalama ne kadar sürer?",
    cevap:
      "Projenin kapsamına göre değişir. Kurumsal web sitesi 14 iş günü, E-ticaret (Shopify headless) 21-30 iş günü, SEO paketi 1-3 ay (sürekli), kurumsal özel projeler 4-12 hafta. Detaylı takvim, teklif aşamasında paylaşılır.",
  },
  {
    soru: "Fiyatlandırma nasıl belirleniyor?",
    cevap:
      "Her işletmenin ihtiyacı farklıdır; sabit fiyat listesi yerine teklif bazlı çalışıyoruz. Lansman'dan Kurumsal'a kadar 4 farklı paket sunuyoruz; paketin kapsamı, içerik sayısı, entegrasyonlar ve özel yazılım ihtiyaçlarına göre fiyat şekilleniyor. Ücretsiz keşif görüşmesi sonrası detaylı teklif sunuyoruz — gizli maliyet yok.",
  },
  {
    soru: "Mevcut sitemi Sprinter'a taşıyabilir miyim?",
    cevap:
      "Evet. WordPress, WooCommerce, OpenCart, IdeaSoft, Ticimax, özel PHP, Wix, Squarespace — hepsinden içerik, ürün, müşteri ve SEO verilerini koruyarak Next.js altyapısına taşıyabiliyoruz. 301 yönlendirme planı ile Google sıralamanızı kaybetmeden geçiş sağlıyoruz.",
  },
  {
    soru: "SEO ve hız gerçekten fark yaratıyor mu?",
    cevap:
      "Evet. Google, Core Web Vitals'ı sıralama faktörü olarak kullanıyor. Next.js ile statik derlenen sayfalar 0.6-1.0 saniyede açılır (geleneksel PHP sitelerde 4-8 saniye). Bu fark hemen çıkma oranını düşürür hem de dönüşüm oranını yükseltir. AI uyumlu semantik HTML ve Schema.org yapısı ile Google içeriğinizi doğru anlar.",
  },
  {
    soru: "Mobil uygulama da geliştiriyor musunuz?",
    cevap:
      "Evet. React Native veya Flutter ile iOS + Android tek kod tabanlı cross-platform mobil uygulamalar geliştiriyoruz. Native UI/UX hissi, push notification, offline çalışma, kamera/konum/biyometri, backend API + admin dashboard, App Store + Google Play yayını dahil uçtan uca hizmet sunuyoruz.",
  },
  {
    soru: "Lansman sonrası destek veriyor musunuz?",
    cevap:
      "Evet. Başlangıç pakette 30 gün, Pro pakette 3 ay, Kurumsal pakette sürekli bakım + SLA garantili destek sunuyoruz. Aylık performans raporları, güncellemeler, güvenlik yamaları ve içerik desteği pakete dahildir.",
  },
  {
    soru: "Hangi sektörlere hizmet veriyorsunuz?",
    cevap:
      "Sektör bağımsız çalışıyoruz. Öne çıkan hazır şablonlarımız: doktor/klinik, otel/konaklama, emlak, restoran/kafe, kuaför/güzellik, avukat, inşaat/proje, dernek/belediye/kamu, rent a car, butik/moda ve e-ticaret/pazaryeri. Ancak her proje işletmenin özel ihtiyacına göre tasarlanır; hazır şablon sadece başlangıç noktasıdır.",
  },
  {
    soru: "WhatsApp üzerinden iletişim kurmak güvenli mi?",
    cevap:
      "Evet. Web sitemizdeki iletişim formu, gönderdiğiniz bilgileri önceden doldurulmuş mesajla WhatsApp'a yönlendirir. Bilgileriniz bizim sunucumuzda depolanmaz; doğrudan sizin cihazınızdan Sprinter'ın iş WhatsApp'ına gider. KVKK uyumludur, üçüncü taraf analitik servislerle paylaşılmaz.",
  },
  {
    soru: "Yapay zekâ (AI) entegrasyonlarını nasıl yapıyorsunuz?",
    cevap:
      "OpenAI (GPT-4o, o1), Anthropic (Claude 3.5/4), Google Gemini gibi modelleri işletmenize özel olarak entegre ediyoruz. AI chatbot, otomatik ürün açıklaması üretimi, içerik öneri asistanı, müşteri hizmetleri otomasyonu, iç süreç RPA'ları ve özel AI ajanları kurabiliyoruz. Tüm entegrasyonlar KVKK uyumlu ve güvenli API'ler üzerinden yapılır.",
  },
];