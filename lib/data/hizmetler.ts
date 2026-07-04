/**
 * Hizmet kataloğu — anasayfa, /hizmetler, /hizmetler/[slug] için tek veri kaynağı.
 * 20 hizmet, 4 kategori: web-eticaret, seo-pazarlama, ai-otomasyon, mobil-marka.
 */

export type HizmetKategori =
  | "web-eticaret"
  | "seo-pazarlama"
  | "ai-otomasyon"
  | "mobil-marka";

export interface SSSEtiket {
  soru: string;
  cevap: string;
}

export interface Hizmet {
  slug: string;
  baslik: string;
  kategori: HizmetKategori;
  ikon: string;
  kisaAciklama: string;
  metaTitle: string;
  metaDescription: string;
  anahtarKelimeler: string[];
  ozellikler: string[];
  surec: string[];
  sss: SSSEtiket[];
  vurgu?: boolean;
  baslangicFiyatNotu?: string;
}

export const HIZMETLER: Hizmet[] = [
  // =========================================================
  // KATEGORI 1 — WEB & E-TICARET
  // =========================================================
  {
    slug: "kurumsal-web-sitesi",
    baslik: "Kurumsal Web Sitesi",
    kategori: "web-eticaret",
    ikon: "Building2",
    kisaAciklama:
      "Modern kurumsal kimliğinize uygun, hızlı ve SEO odaklı Next.js kurumsal web sitesi.",
    metaTitle: "Kurumsal Web Sitesi | Next.js + SEO Odaklı | Sprinter",
    metaDescription:
      "Kurumsal web sitesi kurma hizmeti. Next.js + Tailwind ile hızlı, SEO uyumlu, mobil uyumlu kurumsal site. 5-10 sayfa, blog, CRM entegrasyonu. Teklif alın.",
    anahtarKelimeler: [
      "kurumsal web sitesi",
      "kurumsal web tasarım",
      "web sitesi kurma",
      "kurumsal site",
    ],
    ozellikler: [
      "Özgün kurumsal tasarım (marka kimliğinize özel)",
      "5-10 arası sayfa (hakkımızda, hizmetler, iletişim, KVKK)",
      "Mobil + tablet + masaüstü tam uyumlu (responsive)",
      "SEO temel paketi (meta, başlık, sitemap, robots)",
      "Blog altyapısı (içerik pazarlaması için hazır)",
      "İletişim formu + WhatsApp + CRM entegrasyonu",
      "Google Analytics + Search Console kurulumu",
      "Vercel'de yüksek performanslı barındırma",
      "2 tur revizyon + teslim sonrası 30 gün destek",
    ],
    surec: [
      "1. Keşif: Marka kimliği, hedef kitle, rakip analizi (1-2 gün)",
      "2. Tasarım: Wireframe + görsel mockup onayı (3-5 gün)",
      "3. Geliştirme: Next.js + Tailwind + SEO kodlama (7-10 gün)",
      "4. Test: Performans, mobil uyumluluk, erişilebilirlik (1-2 gün)",
      "5. Lansman: DNS, deploy, eğitim, devir (1 gün)",
    ],
    sss: [
      {
        soru: "Kurumsal web sitesi neden Next.js ile yapılmalı?",
        cevap:
          "Next.js, sayfa açılış hızı, SEO uyumluluğu ve ölçeklenebilirlik açısından geleneksel PHP sistemlere göre belirgin üstünlük sağlar. Statik sayfalar CDN üzerinden saniyenin altında açılır; Google Lighthouse SEO skoru 90+ seviyesindedir. Ayrıca AI destekli crawler'lar semantik HTML'i çok daha iyi okur.",
      },
      {
        soru: "Kaç sayfa ile başlamalıyım?",
        cevap:
          "Yeni kurulan küçük işletmeler için 5-7 sayfa (Anasayfa, Hakkımızda, Hizmetler, Blog, İletişim + KVKK) yeterlidir. Orta-büyük işletmeler için 10-15 sayfa, sektörel detay sayfalarıyla birlikte öneriyoruz.",
      },
      {
        soru: "Kurulum ne kadar sürer?",
        cevap:
          "Lansman paketi 7 iş günü, Başlangıç paketi 14 iş günü, Pro/Kurumsal paketler 21+ iş günü içinde teslim edilir. İçerik (metin, görsel) tarafınızdan sağlanırsa süreç hızlanır.",
      },
      {
        soru: "Domain ve hosting sizden mi?",
        cevap:
          "Domain ve hosting tarafınıza aittir; biz Vercel (kurumsal için) veya isteğinize göre farklı altyapı öneriyoruz. Kurulum, DNS yönlendirmesi ve SSL sertifikası dahil hizmete dahildir.",
      },
    ],
  },
  {
    slug: "tanitim-sitesi",
    baslik: "Tanıtım Sitesi / Landing Page",
    kategori: "web-eticaret",
    ikon: "Rocket",
    kisaAciklama:
      "Kampanyalarınız, ürün lansmanlarınız veya tek hizmetiniz için dönüşüm odaklı açılış sayfaları.",
    metaTitle: "Tanıtım Sitesi / Landing Page Tasarımı | Yüksek Dönüşüm | Sprinter",
    metaDescription:
      "Kampanya, ürün lansmanı veya tek hizmet için dönüşüm odaklı, A/B test edilebilir modern landing page tasarımı. Hızlı teslim, mobil uyumlu. Teklif alın.",
    anahtarKelimeler: [
      "tanıtım sitesi",
      "landing page tasarımı",
      "ürün lansmanı sitesi",
      "kampanya sayfası",
    ],
    ozellikler: [
      "Tek sayfa (one-page) ya da 2-3 bölümlük mikro site",
      "Dönüşüm odaklı CTA ve form yapısı",
      "Hızlı A/B test altyapısı",
      "Meta Pixel + Google Ads dönüşüm takibi",
      "Mobil öncelikli tasarım",
      "SEO + performans optimizasyonu",
      "WhatsApp veya form üzerinden lead toplama",
      "3-5 iş gününde teslim",
    ],
    surec: [
      "1. Brief: Hedef kitle, mesaj, dönüşüm hedefi (1 gün)",
      "2. Tasarım: Mockup + içerik şeması onayı (1-2 gün)",
      "3. Geliştirme: Next.js + animasyonlar (1-2 gün)",
      "4. Yayın + ölçüm (yarım gün)",
    ],
    sss: [
      {
        soru: "Landing page ile kurumsal site arasındaki fark nedir?",
        cevap:
          "Landing page tek bir hedef için (ör. bir kampanyaya kayıt) optimize edilmiş tek sayfadır. Kurumsal site ise genel marka bilinirliği, hizmet tanıtımı ve SEO için çok sayfalı bir vitrindir. Landing page, reklam kampanyalarına özel tıklama başına maliyeti düşürür ve dönüşüm oranını yükseltir.",
      },
      {
        soru: "Kaç günde hazır olur?",
        cevap:
          "İçerik ve görseller hazırsa 3-5 iş günü içinde yayına alabiliriz. Revizyonlar tek tur dahildir.",
      },
      {
        soru: "Reklamla birlikte mi tasarlanmalı?",
        cevap:
          "Evet. Landing page'in gücü, doğru reklamla birleşmesinden gelir. Sprinter olarak Google Ads veya Meta Ads kurulumunu da paket halinde sunuyoruz.",
      },
    ],
  },
  {
    slug: "e-ticaret-sitesi",
    baslik: "E-Ticaret Sitesi (Next.js + Shopify Headless)",
    kategori: "web-eticaret",
    ikon: "ShoppingCart",
    vurgu: true,
    kisaAciklama:
      "Sprinter'ın flagship ürünü. Modern Next.js ön yüz + Shopify Storefront API altyapısı ile 1 saniyenin altında açılan, AI-okunabilir e-ticaret.",
    metaTitle:
      "E-Ticaret Sitesi Kurma | Next.js + Shopify Headless | Sprinter",
    metaDescription:
      "Modern e-ticaret sitesi kurma hizmeti. Next.js + Shopify headless altyapısı ile 1 saniyenin altında açılan, SEO ve AI uyumlu e-ticaret. Teklif alın.",
    anahtarKelimeler: [
      "e ticaret sitesi kurma",
      "e ticaret paketleri",
      "shopify headless türkiye",
      "next js e ticaret",
      "modern e ticaret",
    ],
    ozellikler: [
      "Next.js + Shopify Storefront API (headless mimari)",
      "Saniyenin altında sayfa açılışı (LCP < 1.0s)",
      "Sınırsız ürün, varyant, stok yönetimi",
      "Çoklu para birimi + çoklu dil",
      "Güvenli ödeme (Shopify Payments, iyzico, PayTR)",
      "Kargo entegrasyonları (Yurtiçi, Aras, MNG, Sendcloud)",
      "Lighthouse SEO skoru 90+ garantili",
      "AI özellikler (ürün açıklaması üretimi, chatbot, arama)",
      "Shopify admin paneli (ürün/sipariş yönetimi)",
      "Google Shopping + Meta katalog entegrasyonu",
    ],
    surec: [
      "1. Mağaza analizi: Ürün yapısı, hedef kitle, ödeme/kargo (3-5 gün)",
      "2. Tasarım: Figma mockup + marka uyarlama (5-7 gün)",
      "3. Headless geliştirme: Next.js + Storefront API (10-15 gün)",
      "4. Shopify kurulum: Ödeme, kargo, vergi, e-posta (2-3 gün)",
      "5. Test + SEO + performans optimizasyonu (2-3 gün)",
      "6. Lansman + ekip eğitimi (1 gün)",
    ],
    sss: [
      {
        soru: "Shopify headless ne demek? Neden tercih edilmeli?",
        cevap:
          "Headless'ta Shopify sadece veri katmanı (ürün, sipariş, ödeme, stok) olarak çalışır; ön yüzü Next.js ile sıfırdan tasarlıyoruz. Geleneksel Shopify teması yerine tamamen özel, çok hızlı ve SEO uyumlu bir mağaza elde edersiniz. Sayfa hızı 0.6-1.0s, Lighthouse 90+; geleneksel temalarda bu 3-5 saniye ve 50-70 arasıdır.",
      },
      {
        soru: "Shopify lisans ücreti bana mı ait?",
        cevap:
          "Evet. Shopify'ın kendi aylık planı (Basic, Shopify, Advanced) sizin adınıza açılır. Komisyon oranı Shopify Payments kullanırsanız %0 olur. Biz geliştirme ve altyapı için tek seferlik ücret alıyoruz; Shopify'ın aylığı size ait.",
      },
      {
        soru: "Mevcut e-ticaret sitemi taşıyabilir miyim?",
        cevap:
          "Evet. WooCommerce, OpenCart, IdeaSoft, Ticimax, kendi PHP sisteminiz — hepsinden ürün, müşteri, sipariş verilerini koruyarak geçiş yapabiliyoruz. SEO yönlendirmeleri (301 redirect) ile Google sıralamanızı koruyoruz.",
      },
      {
        soru: "Ürün / sipariş yönetimini nasıl yapacağım?",
        cevap:
          "Shopify'ın kendi admin panelini (shopify.com/admin) kullanıyorsunuz. Ürün ekleme, stok güncelleme, sipariş takibi, kargo etiketi basımı — hepsi Shopify'dan. Sprinter olarak lansman sonrası panel eğitimi veriyoruz.",
      },
      {
        soru: "Hangi ödeme altyapıları destekleniyor?",
        cevap:
          "Shopify Payments (Visa/MasterCard, Apple Pay, Google Pay), iyzico, PayTR, Param, Craftgate, PayU, Sipay ve bölgesel çözümler. Yurt dışı satış için Stripe Connect entegrasyonu da mümkün.",
      },
    ],
  },
  {
    slug: "e-ticaret-kurulumu-egitimi",
    baslik: "E-Ticaret Kurulumu & Eğitimi",
    kategori: "web-eticaret",
    ikon: "GraduationCap",
    kisaAciklama:
      "Kendi e-ticaret sitenizi kendiniz kurmak için Shopify/WooCommerce kurulumu + birebir eğitim.",
    metaTitle:
      "E-Ticaret Kurulumu ve Eğitimi | Shopify/WooCommerce | Sprinter",
    metaDescription:
      "Kendi e-ticaret sitenizi kendiniz kurun. Shopify veya WooCommerce kurulumu, ürün yükleme, ödeme/kargo entegrasyonu + birebir eğitim. Teklif alın.",
    anahtarKelimeler: [
      "shopify kurulum",
      "woocommerce kurulum",
      "e ticaret kurulumu",
      "e ticaret eğitimi",
    ],
    ozellikler: [
      "Shopify veya WooCommerce kurulumu (size uygun platform)",
      "Tema seçimi + özelleştirme rehberi",
      "Ürün yükleme (50-200 ürün örnek)",
      "Ödeme altyapısı entegrasyonu (Shopify Payments, iyzico)",
      "Kargo entegrasyonu (Yurtiçi, Aras, MNG)",
      "Vergi ve fatura ayarları",
      "E-posta bildirim şablonları",
      "6 saat birebir eğitim (ekran paylaşımlı)",
      "Doküman + video kayıtları",
    ],
    surec: [
      "1. Platform ve ihtiyaç analizi (1 gün)",
      "2. Kurulum: tema, ödeme, kargo, e-posta (2-3 gün)",
      "3. Örnek ürün yükleme (1 gün)",
      "4. Eğitim: 2 oturum × 3 saat (1 hafta)",
      "5. 30 gün WhatsApp destek",
    ],
    sss: [
      {
        soru: "Shopify mi WooCommerce mi seçmeliyim?",
        cevap:
          "Eğer 50-500 ürün arasında, düşük-orta hacimli bir mağazanız varsa Shopify (kolay yönetim, düşük teknik yük). Eğer 1000+ ürün, özel ERP entegrasyonu veya sunucu kontrolü istiyorsanız WooCommerce. Karar veremiyorsanız analiz görüşmesinde birlikte kararlaştırıyoruz.",
      },
      {
        soru: "Eğitim canlı mı, kayıt alabilir miyim?",
        cevap:
          "Evet. Eğitim canlı ekran paylaşımlı yapılır; her oturumun video kaydını alırsınız. Sonradan tekrar izleyebilirsiniz.",
      },
    ],
  },
  {
    slug: "e-ticaret-yonetimi",
    baslik: "E-Ticaret Yönetimi & Bakım",
    kategori: "web-eticaret",
    ikon: "Settings",
    kisaAciklama:
      "E-ticaret sitenizin aylık bakımı, güncellemesi, performans ve güvenlik yönetimi.",
    metaTitle:
      "E-Ticaret Yönetimi ve Aylık Bakım Hizmeti | Sprinter",
    metaDescription:
      "E-ticaret sitenizin aylık bakımı: güncelleme, performans optimizasyonu, güvenlik, ürün desteği. Aylık rapor + SLA. Teklif alın.",
    anahtarKelimeler: [
      "e ticaret yönetimi",
      "e ticaret bakım",
      "aylık site bakımı",
      "site güncelleme",
    ],
    ozellikler: [
      "Aylık bakım planı (güncelleme, yedekleme, izleme)",
      "Performans optimizasyonu (Core Web Vitals)",
      "Güvenlik yamaları + SSL yenileme",
      "Ürün ekleme/güncelleme desteği (saat bazlı)",
      "Sipariş ve stok takibi danışmanlığı",
      "Aylık performans raporu (trafik, satış, dönüşüm)",
      "Acil durum müdahalesi (4 saat yanıt)",
      "Küçük geliştirmeler (saat paketi)",
    ],
    surec: [
      "1. Mevcut durum analizi ve bakım planı",
      "2. Aylık rutin bakım takvimi",
      "3. Aylık raporlama ve öneri toplantısı",
      "4. SLA kapsamında sürekli destek",
    ],
    sss: [
      {
        soru: "Aylık ücretlendirme nasıl?",
        cevap:
          "Başlangıç paketinde saat bazlı; Pro pakette sabit aylık + ek saat paketi. Kurumsal pakette SLA garantili sözleşme. Detaylar teklif aşamasında netleşir.",
      },
      {
        soru: "Hangi platformları destekliyorsunuz?",
        cevap:
          "Next.js + Shopify headless (kendi geliştirmemiz), klasik Shopify, WooCommerce, OpenCart, IdeaSoft, Ticimax — hepsine bakım verebiliyoruz.",
      },
    ],
  },

  // =========================================================
  // KATEGORI 2 — SEO & DIJITAL PAZARLAMA
  // =========================================================
  {
    slug: "seo-hizmeti",
    baslik: "SEO Hizmeti (Teknik + İçerik + Yerel + E-Ticaret)",
    kategori: "seo-pazarlama",
    ikon: "Search",
    kisaAciklama:
      "Teknik SEO, içerik SEO, yerel SEO ve e-ticaret SEO'yu kapsayan bütünleşik SEO hizmeti.",
    metaTitle: "SEO Hizmeti | Teknik + İçerik + Yerel + E-Ticaret SEO | Sprinter",
    metaDescription:
      "Bütünleşik SEO hizmeti: teknik SEO, içerik üretimi, yerel SEO, e-ticaret SEO. Google'da üst sıralara çıkın, organik trafiğinizi artırın. Teklif alın.",
    anahtarKelimeler: [
      "seo hizmeti",
      "seo ajansı",
      "kurumsal seo",
      "e ticaret seo",
      "teknik seo",
    ],
    ozellikler: [
      "Teknik SEO: site hızı, crawl, index, schema, sitemap",
      "İçerik SEO: anahtar kelime araştırması, blog, ürün açıklaması",
      "Yerel SEO: Google İş Profili, yerel paketler, NAP tutarlılığı",
      "E-ticaret SEO: kategori, ürün, facet, internal linking",
      "Backlink stratejisi (kaliteli, etik)",
      "Rakip analizi (her çeyrekte)",
      "Aylık performans raporu + toplantı",
      "AI destekli içerik üretimi (verimlilik için)",
    ],
    surec: [
      "1. SEO audit: mevcut durum + rakip analizi (1 hafta)",
      "2. Strateji: anahtar kelime haritası + yol haritası (1 hafta)",
      "3. Uygulama: teknik + içerik + backlink (sürekli)",
      "4. Raporlama: aylık performans + öneri toplantısı",
    ],
    sss: [
      {
        soru: "SEO sonuçları ne zaman görünür?",
        cevap:
          "Teknik SEO düzeltmeleri 1-2 hafta içinde yansır. İçerik SEO ve backlink etkisi 2-4 ayda belirginleşir. Yerel SEO 4-8 hafta. Genel olarak 'ilk ciddi etki 3 ay, sürekli büyüme 6-12 ay' diyoruz.",
      },
      {
        soru: "Hangi sektörlerde deneyiminiz var?",
        cevap:
          "E-ticaret (moda, ev dekor, sağlık ürünleri), B2B hizmet (yazılım, danışmanlık), yerel hizmet (doktor, avukat, diş hekimi). Sektörünüze özel anahtar kelime stratejisi çıkarıyoruz.",
      },
      {
        soru: "Garantili sıralama veriyor musunuz?",
        cevap:
          "Hayır. Kimse gerçekçi bir SEO garantisi veremez (Google'ın algoritması sürekli değişir). Ancak hedef anahtar kelimelerde ilk 3 ayda ilk sayfaya çıkma, 6 ayda ilk 5'e girme gibi gerçekçi KPI'lar sunuyoruz ve aylık raporlarla ölçüyoruz.",
      },
    ],
  },
  {
    slug: "google-ads-reklam-yonetimi",
    baslik: "Google Ads (Reklam) Yönetimi",
    kategori: "seo-pazarlama",
    ikon: "Target",
    kisaAciklama:
      "Google Arama, Görüntülü, YouTube ve Shopping reklamlarında profesyonel yönetim.",
    metaTitle:
      "Google Ads Yönetimi | Arama, Display, YouTube, Shopping | Sprinter",
    metaDescription:
      "Google Ads reklam yönetimi. Arama, görüntülü, YouTube ve Shopping kampanyaları. Dönüşüm odaklı, şeffaf raporlama. Tıklama başı maliyeti düşürün. Teklif alın.",
    anahtarKelimeler: [
      "google ads yönetimi",
      "google reklam yönetimi",
      "google reklam ajansı",
      "google shopping",
    ],
    ozellikler: [
      "Kampanya kurulumu (Arama, Görüntülü, YouTube, Shopping)",
      "Anahtar kelime araştırması + eşleme stratejisi",
      "Reklam metni (RSA) yazımı + A/B testi",
      "Landing page önerileri + dönüşüm takibi",
      "Negatif anahtar kelime yönetimi (israfı önleme)",
      "Bütçe ve teklif optimizasyonu (Target ROAS / CPA)",
      "Dönüşüm raporu (haftalık + aylık)",
      "GA4 + Google Tag Manager entegrasyonu",
    ],
    surec: [
      "1. Hesap analizi ve yapılandırma",
      "2. Kampanya kurulumu + landing page uyumu",
      "3. İlk 30 gün: öğrenme + optimizasyon",
      "4. 2. ay ve sonrası: ölçeklendirme + test",
    ],
    sss: [
      {
        soru: "Minimum bütçe ne olmalı?",
        cevap:
          "Türkiye'de sektöre göre değişir. E-ticaret için aylık 20-50K TL reklam bütçesi + yönetim ücretimiz öneriyoruz. Hizmet sektöründe 5-15K TL ile başlanabilir. Yönetim ücretimiz bütçeden bağımsız sabittir.",
      },
      {
        soru: "Ne kadar sürede sonuç alırım?",
        cevap:
          "Google Ads 'hemen' trafiğe çıkmayı sağlar; ilk dönüşüm genellikle 1-2 hafta içinde gelir. Ancak makine öğrenmesinin optimize olması 30-60 gün sürer; bu yüzden ilk ay 'öğrenme' olarak değerlendirilir.",
      },
    ],
  },
  {
    slug: "meta-reklam-yonetimi",
    baslik: "Meta Reklam Yönetimi (Facebook + Instagram)",
    kategori: "seo-pazarlama",
    ikon: "Megaphone",
    kisaAciklama:
      "Facebook ve Instagram reklamlarında marka bilinirliği, trafik ve satış odaklı kampanya yönetimi.",
    metaTitle:
      "Meta (Facebook + Instagram) Reklam Yönetimi | Sprinter",
    metaDescription:
      "Facebook ve Instagram reklamlarında profesyonel yönetim. Marka, trafik, satış kampanyaları. Pixel kurulumu, A/B testi, ROAS optimizasyonu. Teklif alın.",
    anahtarKelimeler: [
      "meta reklam",
      "facebook reklam yönetimi",
      "instagram reklam",
      "meta ads ajansı",
    ],
    ozellikler: [
      "Kampanya kurulumu (Trafik, Dönüşüm, Marka, Etkileşim)",
      "Meta Pixel + Conversions API kurulumu",
      "Hedef kitle araştırması + Lookalike",
      "Reklam görseli + video üretim rehberi",
      "Carousel, Reels, Stories formatları",
      "Instagram + Facebook Shop entegrasyonu",
      "ROAS odaklı optimizasyon",
      "Aylık şeffaf raporlama",
    ],
    surec: [
      "1. Hedef analizi: bilinirlik mi satış mı?",
      "2. Piksel + ölçüm altyapısı",
      "3. Kreatif üretim + kampanya kurulumu",
      "4. Haftalık optimizasyon + aylık rapor",
    ],
    sss: [
      {
        soru: "Google Ads mi Meta Ads mi daha etkili?",
        cevap:
          "Hedefe bağlı. Satış niyeti yüksekse Google Ads (Arama). Marka bilinirliği, yeni ürün tanıtımı, görsel ürünler için Meta Ads. İkisini birlikte kullanmak en sağlıklı sonuçları verir; biz bütçe dağılımını birlikte planlıyoruz.",
      },
    ],
  },
  {
    slug: "sosyal-medya-yonetimi",
    baslik: "Sosyal Medya Yönetimi",
    kategori: "seo-pazarlama",
    ikon: "Share2",
    kisaAciklama:
      "Instagram, Facebook, TikTok, LinkedIn için içerik üretimi + topluluk yönetimi + raporlama.",
    metaTitle:
      "Sosyal Medya Yönetimi | Instagram, Facebook, TikTok | Sprinter",
    metaDescription:
      "Sosyal medya yönetimi: içerik üretimi, paylaşım planı, topluluk yönetimi, raporlama. Markanızın dijitaldeki sesi olalım. Teklif alın.",
    anahtarKelimeler: [
      "sosyal medya yönetimi",
      "instagram yönetimi",
      "içerik üretimi",
      "sosyal medya ajansı",
    ],
    ozellikler: [
      "Aylık içerik takvimi (12-30 paylaşım)",
      "Görsel + video + Reels üretimi",
      "Story ve canlı yayın yönetimi",
      "Topluluk yönetimi (yorum + DM)",
      "Influencer işbirliği yönetimi (opsiyonel)",
      "Rakip + trend analizi",
      "Aylık performans raporu",
      "Meta Business Suite + içerik kütüphanesi",
    ],
    surec: [
      "1. Marka analizi ve içerik stratejisi",
      "2. İlk ay: stil ve ton belirleme",
      "3. Sürekli: içerik üretimi + paylaşım",
      "4. Aylık rapor + strateji revizyonu",
    ],
    sss: [
      {
        soru: "Kaç paylaşım yapıyorsunuz?",
        cevap:
          "Pakete göre değişir. Başlangıçta ayda 12-16 paylaşım + story; Pro'da 20-30 + story + Reels. Kurumsalda sınırsız.",
      },
      {
        soru: "İçerik görsellerini siz mi üretiyorsunuz?",
        cevap:
          "Stüdyo çekimi yapmıyoruz; markanızın ürün/hizmet görsellerini sizden alıp tasarım, motion ve Reels üretimi yapıyoruz. Profesyonel çekim gerekirse partner stüdyomuzla yönlendiriyoruz.",
      },
    ],
  },
  {
    slug: "google-is-profili-optimizasyonu",
    baslik: "Google İş Profili (Yerel SEO) Optimizasyonu",
    kategori: "seo-pazarlama",
    ikon: "MapPin",
    kisaAciklama:
      "Google Haritalar ve yerel aramalarda üst sırada çıkmak için Google İş Profili kurulumu ve optimizasyonu.",
    metaTitle:
      "Google İş Profili Optimizasyonu | Yerel SEO | Sprinter",
    metaDescription:
      "Google İş Profili kurulumu, optimizasyonu ve yönetimi. Google Haritalar ve yerel aramalarda üst sıralarda yer alın. Teklif alın.",
    anahtarKelimeler: [
      "google iş profili",
      "yerel seo",
      "google haritalar seo",
      "google my business",
    ],
    ozellikler: [
      "Profil kurulumu veya iyileştirme (doğrulama)",
      "İş bilgileri (NAP) tutarlılığı",
      "Kategori ve hizmet optimizasyonu",
      "Görsel yükleme + düzenli paylaşım",
      "Yorum yönetimi (yanıt stratejisi)",
      "Mesaj ve soru yönetimi",
      "Yerel anahtar kelime optimizasyonu",
      "Aylık performans raporu",
    ],
    surec: [
      "1. Profil kurulumu + doğrulama",
      "2. Optimizasyon (kategori, hizmet, açıklama)",
      "3. Görsel ve paylaşım takvimi",
      "4. Yorum ve mesaj yönetimi (sürekli)",
    ],
    sss: [
      {
        soru: "Süreç gerçekten işe yarıyor mu?",
        cevap:
          "Yerel aramalarda (örn. 'İstanbul Kadıköy diş hekimi') Google İş Profili, organik web sitesinden daha üstte görünür. Optimize edilmiş profiller tıklanma oranını 3-5x artırır ve 'yol tarifi', 'ara' gibi etkileşimleri yükseltir.",
      },
    ],
  },

  // =========================================================
  // KATEGORI 3 — AI & OTOMASYON
  // =========================================================
  {
    slug: "whatsapp-otomasyonu",
    baslik: "WhatsApp Otomasyonu",
    kategori: "ai-otomasyon",
    ikon: "MessageCircle",
    kisaAciklama:
      "WhatsApp Business API + AI chatbot + broadcast + CRM akışları ile satış ve destek otomasyonu.",
    metaTitle: "WhatsApp Otomasyonu | AI Chatbot + Broadcast + CRM | Sprinter",
    metaDescription:
      "WhatsApp Business API kurulumu, AI chatbot, otomatik broadcast, CRM entegrasyonu. Müşteri destek ve satış otomasyonu. Teklif alın.",
    anahtarKelimeler: [
      "whatsapp otomasyon",
      "whatsapp api türkiye",
      "whatsapp chatbot",
      "whatsapp business api",
    ],
    ozellikler: [
      "WhatsApp Business API kurulumu (Meta onaylı)",
      "AI chatbot (GPT entegrasyonlu)",
      "Broadcast (toplu mesaj) yönetimi",
      "Otomatik yanıt akışları (ürün, randevu, destek)",
      "CRM entegrasyonu (müşteri kaydı, etiketleme)",
      "Çoklu kullanıcı inbox (ekip yönetimi)",
      "Şablon mesajlar + tasarım",
      "Performans raporu (yanıt süresi, çözüm oranı)",
    ],
    surec: [
      "1. Use case analizi: destek mi satış mı?",
      "2. API kurulumu + chatbot eğitimi",
      "3. CRM + inbox entegrasyonu",
      "4. Akış tasarımı + test",
      "5. Yayın + ekip eğitimi",
    ],
    sss: [
      {
        soru: "WhatsApp API kullanmak için özel onay gerekiyor mu?",
        cevap:
          "Evet. WhatsApp Business API doğrudan değil; Meta onaylı bir Business Solution Provider (BSP) üzerinden kullanılıyor. Sprinter olarak bu süreci sizin adınıza yönetiyoruz (360dialog, Twilio veya yerel BSP).",
      },
      {
        soru: "Konuşmalar KVKK uyumlu mu?",
        cevap:
          "Evet. KVKK kapsamında aydınlatma metni, veri saklama süresi ve kullanıcı onayı akışlarını kuruyoruz. Mesaj içerikleri şifreli olarak saklanır.",
      },
    ],
  },
  {
    slug: "ai-chatbot",
    baslik: "AI Chatbot (Web Sitesi)",
    kategori: "ai-otomasyon",
    ikon: "Bot",
    kisaAciklama:
      "Web sitenize GPT/Claude tabanlı akıllı chatbot. Ürün, destek ve randevu için 7/24 otomatik yanıt.",
    metaTitle:
      "AI Chatbot (Web Sitesi) | GPT/Claude Tabanlı | Sprinter",
    metaDescription:
      "Web sitenize AI chatbot kurulumu. GPT/Claude entegrasyonu, ürün/hizmet bilgisi, randevu, lead toplama. 7/24 otomatik müşteri desteği. Teklif alın.",
    anahtarKelimeler: [
      "ai chatbot",
      "yapay zeka chatbot",
      "web sitesi chatbot",
      "gpt chatbot",
    ],
    ozellikler: [
      "GPT-4 veya Claude entegrasyonu",
      "Web sitenizin içeriğinden öğrenme (RAG)",
      "Ürün/hizmet kataloğu bilgisi",
      "Randevu veya satış yönlendirme",
      "Çoklu dil desteği",
      "Konuşma geçmişi ve analitik",
      "İnsan desteğine devir (handoff)",
      "Marka ses ve tonuna uyum",
    ],
    surec: [
      "1. Use case + bilgi tabanı içeriği",
      "2. Bot eğitimi + prompt mühendisliği",
      "3. Site entegrasyonu (widget veya embed)",
      "4. Test + ince ayar",
      "5. Yayın + sürekli iyileştirme",
    ],
    sss: [
      {
        soru: "Bot yanlış cevap verir mi?",
        cevap:
          "Halüsinasyon (uydurma) riski sıfır değil. Bu yüzden 'bilgi tabanından' (RAG) beslenen bir yapı kuruyoruz; bot sadece sizin onayladığınız içerikten cevap üretir. Emin olmadığı durumlarda 'insan desteğine yönlendirir'.",
      },
    ],
  },
  {
    slug: "online-randevu-sistemi",
    baslik: "Online Randevu Sistemi",
    kategori: "ai-otomasyon",
    ikon: "CalendarCheck",
    kisaAciklama:
      "Doktor, kuaför, avukat, danışman için online randevu + SMS/WhatsApp hatırlatma + takvim entegrasyonu.",
    metaTitle:
      "Online Randevu Sistemi | SMS/WhatsApp Hatırlatma | Sprinter",
    metaDescription:
      "Online randevu sistemi: takvim seçimi, otomatik hatırlatma, ödeme öncesi, CRM entegrasyonu. Telefon trafiğini azaltın. Teklif alın.",
    anahtarKelimeler: [
      "online randevu",
      "randevu sistemi",
      "randevu yazılımı",
      "online randevu sitesi",
    ],
    ozellikler: [
      "Takvim seçimi (hizmet + personel + saat)",
      "Müsaitlik yönetimi (tatil, mola)",
      "SMS + WhatsApp + e-posta hatırlatma",
      "Online ödeme veya kapora",
      "Müşteri paneli (iptal/erteleme)",
      "Google Calendar / Outlook senkronizasyonu",
      "Çoklu şube/uzman desteği",
      "Raporlama (doluluk, iptal oranı)",
    ],
    surec: [
      "1. Hizmet + personel + saat tanımları",
      "2. Sistem kurulumu + ödeme entegrasyonu",
      "3. Hatırlatma şablonları",
      "4. Test + yayın",
    ],
    sss: [
      {
        soru: "Mevcut web siteme entegre edilebilir mi?",
        cevap:
          "Evet. Yeni bir alt domain (randevu.sirketiniz.com) veya mevcut sitenize gömülü widget olarak kurabiliyoruz.",
      },
    ],
  },
  {
    slug: "crm-kurulumu-entegrasyonu",
    baslik: "CRM Kurulumu & Entegrasyonu",
    kategori: "ai-otomasyon",
    ikon: "Users",
    kisaAciklama:
      "HubSpot, Pipedrive, Salesforce kurulumu, özelleştirmesi ve mevcut sistemlerinizle entegrasyonu.",
    metaTitle:
      "CRM Kurulumu ve Entegrasyonu | HubSpot, Pipedrive, Salesforce | Sprinter",
    metaDescription:
      "CRM kurulumu ve entegrasyonu: HubSpot, Pipedrive, Salesforce. Satış süreci otomasyonu, e-posta pazarlama, müşteri segmentasyonu. Teklif alın.",
    anahtarKelimeler: [
      "crm kurulumu",
      "hubspot kurulumu",
      "pipedrive kurulumu",
      "crm entegrasyonu",
    ],
    ozellikler: [
      "CRM seçimi ve kurulumu (HubSpot, Pipedrive, Salesforce)",
      "Satış pipeline tasarımı",
      "Müşteri segmentasyonu ve etiketleme",
      "E-posta pazarlama entegrasyonu",
      "Form → CRM otomasyonu (web sitenizden)",
      "WhatsApp / telefon entegrasyonu",
      "Dashboard + satış raporları",
      "Ekip eğitimi (2 oturum)",
    ],
    surec: [
      "1. İhtiyaç analizi + CRM seçimi",
      "2. Pipeline ve süreç tasarımı",
      "3. Kurulum + veri taşıma (varsa)",
      "4. Entegrasyonlar + otomasyonlar",
      "5. Eğitim + 30 gün destek",
    ],
    sss: [
      {
        soru: "Ücretsiz CRM var mı?",
        cevap:
          "HubSpot Free sürümü küçük ekipler için yeterli. Pipedrive 14 gün ücretsiz deneme sunar. Kurumsal ihtiyaçlar için Salesforce Essentials veya HubSpot Pro öneriyoruz.",
      },
    ],
  },
  {
    slug: "yapay-zeka-dijital-donusum",
    baslik: "Yapay Zeka ile Dijital Dönüşüm Danışmanlığı",
    kategori: "ai-otomasyon",
    ikon: "Sparkles",
    kisaAciklama:
      "İşletmenizin tüm süreçlerini yapay zekâ ile dönüştürmek için strateji + uygulama danışmanlığı.",
    metaTitle:
      "Yapay Zeka ile Dijital Dönüşüm Danışmanlığı | Sprinter",
    metaDescription:
      "Yapay zekâ ile dijital dönüşüm: strateji, içerik otomasyonu, müşteri desteği, veri analizi. İş süreçlerinizi AI ile hızlandırın. Teklif alın.",
    anahtarKelimeler: [
      "yapay zeka danışmanlık",
      "dijital dönüşüm",
      "ai stratejisi",
      "yapay zeka entegrasyonu",
    ],
    ozellikler: [
      "AI fırsat analizi (hangi süreçler otomatikleştirilebilir?)",
      "İçerik üretim otomasyonu (blog, sosyal medya, ürün açıklaması)",
      "Müşteri destek chatbotu (web + WhatsApp)",
      "Veri analizi ve raporlama (AI destekli dashboard)",
      "İç süreç RPA (tekrarlayan görevlerin otomasyonu)",
      "Ekip eğitimi (prompt mühendisliği, araç kullanımı)",
      "Özel AI ajanları (agentic workflows)",
      "Yol haritası + KPI takibi",
    ],
    surec: [
      "1. Keşif: süreç + veri analizi (1 hafta)",
      "2. Strateji: AI fırsat haritası + yol haritası",
      "3. Pilot uygulama (bir süreç)",
      "4. Ölçeklendirme + eğitim",
    ],
    sss: [
      {
        soru: "Hangi araçları kullanıyorsunuz?",
        cevap:
          "OpenAI (GPT-4/4o), Anthropic (Claude 3.5/4), Google Gemini, Mistral; otomasyon için Make, Zapier, n8n; RAG için Supabase, Pinecone. İhtiyaca göre özel model de eğitebiliyoruz.",
      },
    ],
  },
  {
    slug: "ai-gpt-entegrasyonlari",
    baslik: "AI / GPT Entegrasyonları (Mevcut Sistemlere)",
    kategori: "ai-otomasyon",
    ikon: "Wand2",
    kisaAciklama:
      "Mevcut yazılımlarınıza, CRM, ERP ve web sitenize yapay zekâ özellikleri entegre ediyoruz.",
    metaTitle:
      "AI / GPT Entegrasyonları | Mevcut Sistemlere | Sprinter",
    metaDescription:
      "Mevcut sisteminize AI entegrasyonu: CRM, ERP, e-ticaret, iç araçlar. GPT/Claude API ile akıllı özellikler ekleyin. Teklif alın.",
    anahtarKelimeler: [
      "ai entegrasyonu",
      "gpt entegrasyonu",
      "yapay zeka api",
      "ai yazılım",
    ],
    ozellikler: [
      "OpenAI / Anthropic / Google API kurulumu",
      "Mevcut sisteminize AI endpoint'leri",
      "Ürün açıklaması otomatik üretimi",
      "Müşteri e-posta taslak oluşturma",
      "Doküman özetleme + etiketleme",
      "Çok dilli çeviri (içerik korunarak)",
      "Sentiment analiz (yorum, destek talepleri)",
      "Özel AI ajan (agent) geliştirme",
    ],
    surec: [
      "1. Sistem analizi + API keşfi",
      "2. Prompt mühendisliği + test",
      "3. Entegrasyon (REST API veya webhook)",
      "4. UI/UX (kullanıcı arayüzü)",
      "5. Yayın + monitoring",
    ],
    sss: [
      {
        soru: "API maliyetini kim karşılar?",
        cevap:
          "API kullanım ücreti (token bazlı) size aittir. Biz entegrasyonu tek seferlik ücretle yapıyoruz. Aylık API maliyeti kullanım hacmine göre değişir; küçük işletme için 50-200 USD, orta ölçek için 200-1000 USD arası beklenir.",
      },
    ],
  },

  // =========================================================
  // KATEGORI 4 — MOBIL & MARKA
  // =========================================================
  {
    slug: "mobil-uygulama",
    baslik: "Mobil Uygulama (iOS + Android)",
    kategori: "mobil-marka",
    ikon: "Smartphone",
    kisaAciklama:
      "React Native veya Flutter ile cross-platform mobil uygulama. iOS + Android tek kod tabanı, admin dashboard, App Store ve Google Play yayını dahil.",
    metaTitle:
      "Mobil Uygulama Geliştirme | Cross-Platform iOS + Android | Sprinter",
    metaDescription:
      "Cross-platform mobil uygulama: React Native veya Flutter ile iOS + Android tek kod tabanı. Native UI/UX, push notification, offline çalışma, admin dashboard, App Store + Google Play yayını. Teklif alın.",
    anahtarKelimeler: [
      "mobil uygulama yaptırma",
      "ios android uygulama",
      "cross platform mobil uygulama",
      "react native",
      "flutter uygulama",
      "admin dashboard",
      "app store yayını",
      "google play yayını",
    ],
    ozellikler: [
      "iOS + Android tek kod tabanı (React Native veya Flutter)",
      "Cross-platform geliştirme — maliyet ve süre tasarrufu",
      "Native UI/UX (Apple HIG + Material Design uyumlu)",
      "Push notification (anlık + zamanlı + segmentli)",
      "Offline çalışma + otomatik senkronizasyon",
      "Cihaz özellikleri: kamera, konum, biyometri (parmak izi / Face ID)",
      "Bluetooth LE (IoT cihazlar, beacon)",
      "Derin linkleme (deep linking + universal links)",
      "In-App Purchase (uygulama içi satın alma — App Store / Google Play Billing)",
      "Çoklu dil (i18n) + RTL desteği",
      "Erişilebilirlik (WCAG 2.1 AA)",
      "CI/CD pipeline (Fastlane + GitHub Actions)",
      "Crash reporting + analytics (Sentry + Firebase / Mixpanel)",
      "Güvenlik: SSL pinning, jailbreak/root detection, encrypted storage",
      "App Store Optimization (ASO) — başlık, anahtar kelime, screenshot",
      "Admin dashboard (içerik, kullanıcı, sipariş yönetimi)",
      "App Store + Google Play yayın süreci dahil",
      "3 ay ücretsiz bakım + güncelleme",
    ],
    surec: [
      "1. Keşif & Planlama (1 hafta): Hedef kitle, kullanıcı akışları, teknik seçim (React Native vs Flutter), platform kararları",
      "2. UX/UI Tasarım (1-2 hafta): Wireframe, görsel tasarım, interaktif prototip (Figma)",
      "3. Backend & API Geliştirme (2-3 hafta): Veritabanı, authentication, REST/GraphQL API, admin dashboard",
      "4. Mobil Geliştirme - Sprint 1 (2 hafta): Temel yapı, navigation, auth, ana ekranlar",
      "5. Mobil Geliştirme - Sprint 2 (2 hafta): Özellikler, push notification, offline mode",
      "6. Test & QA (1 hafta): TestFlight + Google Play Internal Testing, cihaz testleri, bug fixing",
      "7. App Store + Google Play Yayını (1 hafta): Store listing, ASO optimizasyonu, review süreci",
      "8. Bakım & Güncelleme (3 ay dahil): Crash monitoring, kullanıcı geri bildirimi, OS güncellemeleri",
    ],
    sss: [
      {
        soru: "Cross-platform mu yoksa native mi tercih edilmeli?",
        cevap:
          "Çoğu işletme için cross-platform (React Native / Flutter) hem maliyet hem süre açısından avantajlı: tek kod tabanı iki platforma yayılır, geliştirme süresi yarıya iner, güncellemeler tek yerden yapılır. Ancak yoğun grafik işlemleri (oyun, AR/VR) veya platform-spesifik derin entegrasyonlar için native (Swift/Kotlin) tercih edilebilir. Projenize göre birlikte karar veriyoruz.",
      },
      {
        soru: "React Native mi Flutter mı?",
        cevap:
          "React Native: JavaScript/TypeScript bilen geliştirici havuzu büyük, web kodunuzla paylaşım kolay, kütüphane ekosistemi geniş. Flutter: UI tutarlılığı en yüksek (kendi rendering motoru), performans biraz daha iyi, Dart dili öğrenme eğrisi gerektirir. Ekip tecrübemiz ve projenizin ihtiyaçlarına göre karar veriyoruz — her iki teknolojide de yetkin ekibimiz var.",
      },
      {
        soru: "Admin dashboard dahil mi geliyor?",
        cevap:
          "Evet. Pro ve Kurumsal paketlerimizde özel admin dashboard geliştiriyoruz: kullanıcı yönetimi, içerik yönetimi (CMS), sipariş/ürün yönetimi, raporlar/analitik, bildirim yönetimi (push broadcast), rol tabanlı yetkilendirme (admin, editör, kullanıcı). Web tabanlı erişim — masaüstünden yönetim.",
      },
      {
        soru: "App Store ve Google Play yayın süreci nasıl işliyor?",
        cevap:
          "Yayın sürecini uçtan uca biz yönetiyoruz: App Store Connect ve Google Play Console kurulumu, app icon + screenshot + preview video hazırlanması, ASO (App Store Optimization) — başlık, açıklama, anahtar kelimeler, gizlilik politikası + kullanım şartları. Apple Developer hesabı (yıllık 99 USD) ve Google Play hesabı (25 USD tek seferlik) size aittir. Apple review süreci ortalama 24-48 saat, Google 1-7 gün sürüyor.",
      },
      {
        soru: "Yayın ücreti ne kadar? Apple Developer hesabı gerekli mi?",
        cevap:
          "Evet. Apple Developer hesabı yıllık 99 USD (zorunlu, Apple politikası). Google Play Developer hesabı 25 USD tek seferlik ömür boyu. Bu ücretler size aittir, biz yönetiriz. Hesap açılışı, vergi/banka bilgileri, D-U-N-S numarası (tüzel kişi için) dahil tüm süreçleri biz yönetiyoruz.",
      },
      {
        soru: "Push notification nasıl gönderilir? Yönetim paneli var mı?",
        cevap:
          "Evet. Firebase Cloud Messaging (FCM) + APNs (Apple Push Notification service) entegrasyonu yapıyoruz. Admin dashboard üzerinden broadcast (tüm kullanıcılara), segmentli (kullanıcı grubu, konum, davranış), zamanlı (cron job), tetiklemeli (sipariş onayı, yorum yanıtı, vs.) push notification gönderebilirsiniz. Açılma oranı, tıklama oranı raporları dashboard'da görünür.",
      },
      {
        soru: "Offline çalışma nasıl sağlanıyor?",
        cevap:
          "Realm, SQLite veya AsyncStorage ile local veri cache. Senkronizasyon stratejisi: write-through (anında yaz), read-after-write (anında oku), background sync (arka plan). Kullanıcı offline olduğunda uygulama tam çalışır (içerik okur, form doldurur, sipariş verir), online olunca otomatik senkronize olur.",
      },
      {
        soru: "Mevcut bir web uygulamamı mobil hale getirebilir misiniz?",
        cevap:
          "Evet. Progressive Web App (PWA) → native uygulama dönüşümü veya web tabanlı backend'i (Node.js, Supabase, Firebase) native mobil uygulamaya bağlama en sık yaptığımız işlerden. Mevcut API'leriniz varsa onları kullanıyoruz; yoksa yeni backend kuruyoruz. Web + mobil + admin dashboard tek ekosistem olarak teslim ediyoruz.",
      },
      {
        soru: "Güncelleme ve bakım nasıl yönetiliyor?",
        cevap:
          "Pro pakette 3 ay, Kurumsal pakette sürekli bakım + SLA garantili destek. iOS ve Android OS güncellemeleri (her yıl yeni sürüm çıkıyor) için uyumluluk testleri, yeni cihaz testleri, App Store/Play Store review gereksinim değişiklikleri takibi, crash fix, performans iyileştirmesi, kullanıcı geri bildirimine göre küçük UX iyileştirmeler dahildir.",
      },
    ],
  },
  {
    slug: "logo-marka-kimligi",
    baslik: "Logo & Marka Kimliği",
    kategori: "mobil-marka",
    ikon: "Palette",
    kisaAciklama:
      "Logo, renk paleti, tipografi, kurumsal kimlik kılavuzu — markanızın temel görsel dili.",
    metaTitle:
      "Logo ve Marka Kimliği Tasarımı | Kurumsal Kimlik | Sprinter",
    metaDescription:
      "Logo tasarımı, renk paleti, tipografi, kurumsal kimlik kılavuzu. Markanızın tutarlı görsel dilini oluşturalım. Teklif alın.",
    anahtarKelimeler: [
      "logo tasarım",
      "kurumsal kimlik",
      "marka kimliği",
      "logo yaptırma",
    ],
    ozellikler: [
      "Logo tasarımı (3 konsept, 2 tur revizyon)",
      "Logo varyasyonları (yatay, dikey, ikon)",
      "Renk paleti (primary, secondary, accent)",
      "Tipografi seçimi ve hiyerarşisi",
      "Marka kimliği kılavuzu (PDF)",
      "Kartvizit, antetli kağıt, zarf tasarımı",
      "Sosyal medya profil görselleri",
      "Sunum ve e-posta imza şablonu",
    ],
    surec: [
      "1. Brief: marka kişiliği + rakip analizi",
      "2. Konsept: 3 farklı yön (1 hafta)",
      "3. Seçilen konseptte detaylandırma",
      "4. Kimlik kılavuzu + teslim",
    ],
    sss: [
      {
        soru: "Kaç konsept sunuyorsunuz?",
        cevap:
          "3 farklı yön sunuyoruz. Birini seçtikten sonra o konsept üzerinde 2 tur detay revizyonu yapılır.",
      },
      {
        soru: "Dosyaları hangi formatta alacağım?",
        cevap:
          "SVG (vektör), PNG (şeffaf arka plan), PDF, AI (Adobe Illustrator). Sosyal medya için optimize edilmiş JPG ve PNG'ler dahil.",
      },
    ],
  },
  {
    slug: "ui-ux-tasarim",
    baslik: "UI/UX Tasarım Hizmeti",
    kategori: "mobil-marka",
    ikon: "Layout",
    kisaAciklama:
      "Web ve mobil projeleriniz için kullanıcı odaklı UI/UX tasarım, Figma teslim.",
    metaTitle:
      "UI/UX Tasarım Hizmeti | Web + Mobil | Sprinter",
    metaDescription:
      "Web ve mobil için UI/UX tasarım: kullanıcı akışları, wireframe, görsel tasarım. Figma teslim, geliştirmeye hazır. Teklif alın.",
    anahtarKelimeler: [
      "ui ux tasarım",
      "ui tasarım hizmeti",
      "figma tasarım",
      "kullanıcı deneyimi",
    ],
    ozellikler: [
      "Kullanıcı araştırması + persona",
      "Kullanıcı akış diyagramları (user flow)",
      "Wireframe (düşük sadakat)",
      "Görsel tasarım (yüksek sadakat, Figma)",
      "Tasarım sistemi (component library)",
      "Prototip (interaktif)",
      "Geliştirici notları + asset teslimi",
      "Tasarım-dev handoff desteği",
    ],
    surec: [
      "1. Araştırma + kullanıcı persona",
      "2. Wireframe + akışlar",
      "3. Görsel tasarım",
      "4. Prototip + test",
      "5. Tasarım sistemi + handoff",
    ],
    sss: [
      {
        soru: "Sadece tasarım mı yapıyorsunuz, geliştirme de var mı?",
        cevap:
          "İkisini birlikte de yapıyoruz (tavsiye edilen). Sadece tasarım da yapabiliyoruz; bu durumda başka bir ekiple çalışacaksanız tasarım sistemi + geliştirici notlarını eksiksiz teslim ediyoruz.",
      },
    ],
  },
  {
    slug: "ozel-yazilim-gelistirme",
    baslik: "Özel Yazılım Geliştirme",
    kategori: "mobil-marka",
    ikon: "Code2",
    kisaAciklama:
      "İşletmenize özel web uygulamaları, dashboard, iç araçlar — ihtiyaca göre tasarlanır.",
    metaTitle:
      "Özel Yazılım Geliştirme | Web App, Dashboard | Sprinter",
    metaDescription:
      "İşletmenize özel yazılım geliştirme: web uygulaması, dashboard, iç araçlar. Next.js + modern stack. Teklif alın.",
    anahtarKelimeler: [
      "özel yazılım",
      "web uygulaması geliştirme",
      "dashboard yazılımı",
      "kurumsal yazılım",
    ],
    ozellikler: [
      "İhtiyaç analizi + teknik tasarım",
      "Web uygulaması (Next.js + Supabase / PostgreSQL)",
      "Kullanıcı yönetimi + rol tabanlı yetki (RBAC)",
      "Dashboard + raporlama",
      "API geliştirme (REST veya GraphQL)",
      "Üçüncü parti entegrasyonlar (CRM, ERP, ödeme)",
      "CI/CD + test otomasyonu",
      "SLA garantili destek",
    ],
    surec: [
      "1. Keşif + teknik spesifikasyon (1-2 hafta)",
      "2. Mimari tasarım + prototip",
      "3. Sprint bazlı geliştirme (2 haftalık)",
      "4. Test + UAT (kullanıcı kabul)",
      "5. Yayın + bakım",
    ],
    sss: [
      {
        soru: "Minimum proje bütçesi ne kadar?",
        cevap:
          "Özel yazılımda bütçe projenin karmaşıklığına göre değişir. Minimum MVP için 75-150K TL aralığında başlıyoruz. Detaylı keşif sonrası net teklif sunuyoruz.",
      },
    ],
  },
  {
    slug: "ai-telefon-asistani",
    baslik: "AI Telefon Asistanı (Voice Agent)",
    kategori: "ai-otomasyon",
    ikon: "Phone",
    kisaAciklama:
      "Gelen telefonları yanıtlaran, doğal sesli konuşan AI asistanı. Randevu, destek ve lead filtreleme 7/24.",
    metaTitle: "AI Telefon Asistanı | Voice Agent | Sesli AI | Sprinter",
    metaDescription:
      "AI telefon asistanı (voice agent): gelen çağrıları yanıtlaran, doğal sesli konuşan AI. Randevu alma, lead filtreleme, 7/24 destek. Teklif alın.",
    anahtarKelimeler: [
      "ai telefon asistanı",
      "voice agent",
      "sesli ai",
      "ai çağrı merkezi",
      "yapay zeka telefon",
    ],
    ozellikler: [
      "Doğal sesli konuşma (Türkçe, İngilizce)",
      "Gelen çağrıları otomatik yanıtlama",
      "Randevu oluşturma ve CRM'e kayıt",
      "Sık sorulan sorulara anında yanıt",
      "İnsan temsilciye devir (gerekirse)",
      "Çağrı sonrası özet ve transkript",
      "Çoklu hat desteği",
      "Analitik dashboard (çağrı sayısı, çözüm oranı)",
    ],
    surec: [
      "1. Use case analizi: randevu mu destek mi?",
      "2. Ses ve konuşma akışı tasarımı",
      "3. Bilgi tabanı + CRM entegrasyonu",
      "4. Test ve ses tonu ince ayarı",
      "5. Yayın + izleme",
    ],
    sss: [
      {
        soru: "AI telefon asistanı gerçekçi mi konuşuyor?",
        cevap:
          "Evet. Günümüz voice agent'ları (elevenlabs, OpenAI Realtime, vb.) doğal, akıcı ve Türkçe konuşabiliyor. İnsandan ayırt edilmesi zor; gerektiğinde 'yapay zeka asistanı' olarak kendini tanıtabilir.",
      },
      {
        soru: "Mevcut telefon numaramı kullanabilir miyim?",
        cevap:
          "Evet. Numaranız bir voice agent'a yönlendirilir; meşgul/cevapsız durumlarda veya belirli saatlerde AI devreye girer. İstediğiniz zaman insan temsilciye de aktarabilir.",
      },
    ],
  },
  {
    slug: "rag-sistemleri",
    baslik: "RAG Sistemleri (Bilgi Tabanlı AI)",
    kategori: "ai-otomasyon",
    ikon: "Database",
    kisaAciklama:
      "Kurum içi belgelerinizden, SSS ve ürün verisinden öğrenen, halüsinasyon riskini azaltan RAG mimarisi.",
    metaTitle: "RAG Sistemleri | Bilgi Tabanlı AI | Vektör Arama | Sprinter",
    metaDescription:
      "RAG (Retrieval-Augmented Generation) sistemleri: belgelerinizden öğrenen, doğru ve kaynaklı yanıt veren AI. Halüsinasyon riskini azaltın. Teklif alın.",
    anahtarKelimeler: [
      "rag",
      "retrieval augmented generation",
      "vektör veritabanı",
      "kurum içi ai",
      "semantic search",
    ],
    ozellikler: [
      "Belge yükleme (PDF, Word, web, DB)",
      "Otomatik chunking ve embedding",
      "Vektör veritabanı (pgvector, Pinecone)",
      "Anlamsal arama (semantic search)",
      "Kaynak gösteren yanıtlar (hangı belgeden)",
      "Çoklu dil desteği",
      "Web widget veya API erişimi",
      "Bilgi tabanı yönetim paneli",
    ],
    surec: [
      "1. Veri kaynakları ve erişim analizi",
      "2. Chunking ve embedding stratejisi",
      "3. Vektör DB kurulumu + indeksleme",
      "4. AI yanıtlama + UI entegrasyonu",
      "5. Test, doğrulama, yayın",
    ],
    sss: [
      {
        soru: "RAG neden saf ChatGPT'ten daha güvenilir?",
        cevap:
          "Saf model bilmediği konuyu uydurabilir (halüsinasyon). RAG'da model SADECE sizin yüklediğiniz belgelerden yanıt üretir; kaynak gösterir. Bu yüzden kurumsal kullanımda RAG tercih edilir.",
      },
      {
        soru: "Verilerim güvende mi?",
        cevap:
          "Verileriniz kendi seçtiğiniz veritabanında (kendi sunucunuz veya izole cloud) saklanır. AI model'e kalıcı olarak eğitilmez; sadece sorgu anında bağlam olarak gönderilir.",
      },
    ],
  },
  {
    slug: "saas-yazilim-gelistirme",
    baslik: "SaaS Yazılım Geliştirme",
    kategori: "web-eticaret",
    ikon: "Layers",
    kisaAciklama:
      "Multi-tenant SaaS ürünleri: abonelik yönetimi, self-servis onboarding, ölçeklenebilir mimari. Fikirden yayına.",
    metaTitle: "SaaS Yazılım Geliştirme | Multi-Tenant | Abonelik | Sprinter",
    metaDescription:
      "SaaS yazılım geliştirme: multi-tenant mimari, abonelik/ödeme, self-servis onboarding, ölçeklendirme. Fikrinizi ürün yapın. Teklif alın.",
    anahtarKelimeler: [
      "saas yazılım",
      "saas geliştirme",
      "multi tenant mimari",
      "abonelik yazılımı",
      "bulut yazılım",
    ],
    ozellikler: [
      "Multi-tenant mimari (veri izolasyonu)",
      "Abonelik ve plan yönetimi (Stripe/iyzico)",
      "Kullanıcı kimlik ve yetki (RBAC)",
      "Self-servis kayıt ve onboarding",
      "Ödeme, fatura, deneme süresi (trial)",
      "Admin + tenant dashboard",
      "API + webhook altyapısı",
      "Ölçeklenebilir bulut dağıtım (Docker/K8s)",
    ],
    surec: [
      "1. Ürün ve pazar doğrulama",
      "2. Mimari tasarım (multi-tenant stratejisi)",
      "3. MVP geliştirme (3-6 ay)",
      "4. İlk ödeyen müşteriler + geri bildirim",
      "5. Ölçeklendirme (cache, replica, queue)",
    ],
    sss: [
      {
        soru: "SaaS geliştirmek ne kadar sürer?",
        cevap:
          "MVP için tipik olarak 3-6 ay. İlk yıl product-market fit arayışıdır. Erken ölçeklendirme hatasından kaçının; monolitik başlayıp ihtiyaç olunca mikroservise geçin.",
      },
      {
        soru: "Multi-tenant mu single-tenant mu?",
        cevap:
          "Çoğu SaaS için multi-tenant (paylaşılan altyapı, düşük maliyet) doğrudur. Regüle sektörler (sağlık, finans) veya kurumsal müşteriler için single-tenant/isole tenant gerekebilir. Birlikte karar veririz.",
      },
    ],
  },
  {
    slug: "api-gelistirme",
    baslik: "API Geliştirme & Entegrasyon",
    kategori: "web-eticaret",
    ikon: "Webhook",
    kisaAciklama:
      "REST/GraphQL API geliştirme, üçüncü parti sistemlerle entegrasyon, webhook ve mikroservis. Güvenli ve dokümante.",
    metaTitle: "API Geliştirme | REST, GraphQL, Webhook | Sprinter",
    metaDescription:
      "API geliştirme ve entegrasyon: REST/GraphQL, webhook, mikroservis, üçüncü parti sistemler. Güvenli, dokümante, ölçeklenebilir. Teklif alın.",
    anahtarKelimeler: [
      "api geliştirme",
      "rest api",
      "graphql",
      "webhook",
      "api entegrasyonu",
    ],
    ozellikler: [
      "REST ve GraphQL API tasarımı",
      "Kimlik doğrulama (JWT, OAuth2, API key)",
      "Rate limiting ve güvenlik",
      "Webhook + event-driven yapı",
      "OpenAPI/Swagger dokümantasyon",
      "Sürüm yönetimi (versioning)",
      "Test otomasyonu (unit, integration)",
      "Performans: cache, pagination, async",
    ],
    surec: [
      "1. İhtiyaç ve uç nokta analizi",
      "2. API tasarımı + dokümantasyon",
      "3. Geliştirme + test",
      "4. Güvenlik denetimi",
      "5. Yayın + monitoring",
    ],
    sss: [
      {
        soru: "Mevcut sistemimize API ekleyebilir misiniz?",
        cevap:
          "Evet. Mevcut veritabanınız veya yazılımınız üzerine güvenli bir API katmanı ekleyebiliriz. Böylece mobil uygulama, üçüncü parti veya partner entegrasyonları mümkün olur.",
      },
    ],
  },
  {
    slug: "e-fatura-entegrasyonu",
    baslik: "E-Fatura / E-Arşiv Entegrasyonu",
    kategori: "web-eticaret",
    ikon: "FileText",
    kisaAciklama:
      "GİB uyumlu e-fatura, e-arşiv, e-İrsaliye entegrasyonu. Sipariş sonrası otomatik fatura kesimi ve muhasebe aktarımı.",
    metaTitle: "E-Fatura E-Arşiv Entegrasyonu | GİB Uyumlu | Sprinter",
    metaDescription:
      "E-fatura, e-arşiv, e-İrsaliye entegrasyonu. GİB uyumlu, otomatik fatura kesimi. Logo, Mikro, Paraşüt, Kolays entegrasyonu. Teklif alın.",
    anahtarKelimeler: [
      "e fatura entegrasyonu",
      "e arşiv",
      "e irsaliye",
      "gib e fatura",
      "fatura otomasyonu",
    ],
    ozellikler: [
      "GİB uyumlu e-Fatura, e-Arşiv, e-İrsaliye",
      "Otomatik fatura kesimi (sipariş → fatura)",
      "Muhasebe entegrasyonu (Logo, Mikro, Paraşüt, Kolays)",
      "Müşteriye otomatik e-posta",
      "İade/iptal faturası yönetimi",
      "PDF + XML + e-imza çıktısı",
      "Toplu fatura oluşturma",
      "Vergi ve KDV otomasyonu",
    ],
    surec: [
      "1. Mevcut muhasebe ve GİB durum analizi",
      "2. Özel entegratör seçimi ve API erişimi",
      "3. Sipariş akışına fatura entegrasyonu",
      "4. Test (deneme faturaları)",
      "5. Yayın + eğitim",
    ],
    sss: [
      {
        soru: "Hangi muhasebe programlarıyla çalışıyor?",
        cevap:
          "Logo (İşbaşı, Go, Tiger), Mikro, Paraşüt, Kolays (eski Uyumsoft), BizimHesap ve GİB uyumlu tüm entegratörlerle. Mevcut yazılımınızı koruyarak entegre ediyoruz.",
      },
      {
        soru: "Mali mühür/e-imza gerekli mi?",
        cevap:
          "Evet, e-fatura için mali mühür (tüzel) veya e-imza (gerçek) gereklidir. Bu resmi süreçtir; sizin adınıza GİB ve entegratör kayıtlarını yönetebiliyoruz.",
      },
    ],
  },
  {
    slug: "devops-cloud-migration",
    baslik: "DevOps & Cloud Migration",
    kategori: "mobil-marka",
    ikon: "Cloud",
    kisaAciklama:
      "CI/CD pipeline, konteynerleştirme, bulut taşıma ve altyapı otomasyonu. Güvenilir, ölçeklenebilir dağıtım.",
    metaTitle: "DevOps & Cloud Migration | Docker, Kubernetes, AWS | Sprinter",
    metaDescription:
      "DevOps ve bulut taşıma: CI/CD pipeline, Docker, Kubernetes, AWS/Azure migration. Güvenilir, ölçeklenebilir altyapı. Teklif alın.",
    anahtarKelimeler: [
      "devops",
      "cloud migration",
      "ci cd pipeline",
      "docker kubernetes",
      "bulut taşıma",
    ],
    ozellikler: [
      "CI/CD pipeline (GitHub Actions, GitLab CI)",
      "Docker konteynerleştirme",
      "Kubernetes orkestrasyon",
      "AWS / Azure / GCP migration",
      "Infrastructure as Code (Terraform)",
      "Monitoring + logging (Prometheus, Grafana)",
      "Otomatik backup ve felaket kurtarma",
      "Maliyet optimizasyonu",
    ],
    surec: [
      "1. Mevcut altyapı denetimi",
      "2. Hedef mimari ve cloud seçimi",
      "3. Pipeline + konteyner kurulumu",
      "4. Kademeli taşıma (sıfır kesinti)",
      "5. İzleme + optimizasyon",
    ],
    sss: [
      {
        soru: "Mevcut sunucumdan buluta kesintisiz taşınabilir miyim?",
        cevap:
          "Evet. Kademeli (strangler) geçiş stratejisiyle sıfır veya minimal kesintiyle taşırız. Önce yan servisler, sonra ana uygulama; eski sistem paralel çalışırken yeni doğrulanır.",
      },
      {
        soru: "DevOps sürekli bir hizmet mi, tek seferlik mi?",
        cevap:
          "Her ikisi. İlk kurulum tek seferli; ancak üretim sistemler için sürekli izleme, güncelleme ve optimizasyon aylık DevOps retaini ile yürütülür.",
      },
    ],
  },
];

export const getHizmetBySlug = (slug: string): Hizmet | undefined =>
  HIZMETLER.find((h) => h.slug === slug);

export const getHizmetlerByKategori = (
  kategori: HizmetKategori,
): Hizmet[] => HIZMETLER.filter((h) => h.kategori === kategori);

export const HIZMET_KATEGORI_ETIKETLERI: Record<HizmetKategori, string> = {
  "web-eticaret": "Web & E-Ticaret",
  "seo-pazarlama": "SEO & Pazarlama",
  "ai-otomasyon": "AI & Otomasyon",
  "mobil-marka": "Mobil & Marka",
};