/**
 * Blog içerik bankası — /blog ve /blog/[slug] için.
 * Yapılandırılmış bölüm formatı: SEO dostu, kolay genişletilebilir.
 */

export interface BlogBolum {
  tip: "p" | "h2" | "h3" | "ul" | "ol" | "blockquote";
  metin?: string;
  liste?: string[];
}

export interface BlogYazi {
  slug: string;
  baslik: string;
  ozet: string;
  kategori: BlogKategori;
  okumaSuresi: number; // dakika
  tarih: string; // ISO
  yazar: string;
  renk: string;
  ikon: string;
  anahtarKelimeler: string[];
  metaDescription: string;
  bolumler: BlogBolum[];
  onerilen?: boolean;
}

export type BlogKategori =
  | "e-ticaret"
  | "yazilim"
  | "ai"
  | "seo"
  | "rehber";

export const BLOG_KATEGORI_ETIKET: Record<BlogKategori, string> = {
  "e-ticaret": "E-Ticaret",
  yazilim: "Yazılım",
  ai: "Yapay Zeka",
  seo: "SEO & Pazarlama",
  rehber: "Rehber",
};

export const BLOG_YAZILAR: BlogYazi[] = [
  // ============================================================
  {
    slug: "shopify-mi-woocommerce-mi",
    baslik: "Shopify mı WooCommerce mi? 2026 Karar Rehberi",
    ozet:
      "Türkiye'de e-ticarete başlayanlar için en sık soru: Shopify mı yoksa WordPress + WooCommerce mi? Artıları, eksileri ve doğru seçimi birlikte değerlendirelim.",
    kategori: "e-ticaret",
    okumaSuresi: 7,
    tarih: "2026-06-20",
    yazar: "Sprinter Ekibi",
    renk: "from-green-500 to-emerald-600",
    ikon: "ShoppingBag",
    onerilen: true,
    anahtarKelimeler: ["shopify", "woocommerce", "e ticaret altyapısı", "shopify mi woocommerce"],
    metaDescription:
      "Shopify mı WooCommerce mi? Türkiye için 2026 karşılaştırması: fiyat, kolaylık, SEO, ölçeklenebilirlik. Doğru e-ticaret altyapısını seçin.",
    bolumler: [
      { tip: "p", metin: "E-ticarete başlarken alınan en kritik karar, altyapı seçimidir. Piyasada iki dev öne çıkar: Shopify (hosted, kapalı ekosistem) ve WooCommerce (WordPress tabanlı, açık kaynak). Türkiye'de her ikisinin de güçlü kullanıcı kitlesi var. Bu yazıda objektif bir karşılaştırma yapacağız." },
      { tip: "h2", metin: "Shopify Nedir?" },
      { tip: "p", metin: "Shopify, tüm teknik yükü üstlenen hosted bir platformdur. Sunucu, güvenlik, güncelleme, ödeme altyapısı dahil her şey sizin için çalışır. Aylık sabit bir ücret ödersiniz, teknik bilgi gerektirmeden mağaza açarsınız." },
      { tip: "h2", metin: "WooCommerce Nedir?" },
      { tip: "p", metin: "WooCommerce, WordPress üzerine kurulan bir eklentidir. Açık kaynaktır; sunucu, güvenlik ve güncellemeler sizin sorumluluğunuzdadır. Esneklik yüksektir ama teknik yük de yüksektir." },
      { tip: "h2", metin: "Karşılaştırma: Hangisi Kimin İçin?" },
      { tip: "ul", liste: [
        "Hız ve teknik yük: Shopify önde (sıfır sunucu yönetimi)",
        "Esneklik ve özelleştirme: WooCommerce önde (istediğin gibi kodlar)",
        "Aylık maliyet: Küçük mağazada Shopify, büyük mağazada WooCommerce avantajlı",
        "Türkiye ödeme entegrasyonu: İkisinde de iyzico, PayTR var",
        "SEO: Doğru yapılandırılırsa ikisi de iyi; Shopify daha tutarlı hız verir",
      ]},
      { tip: "blockquote", metin: "50-500 ürün, düşük-orta hacim, teknik yük istemiyorsanız → Shopify. 1000+ ürün, özel ERP, tam kontrol istiyorsanız → WooCommerce (veya headless Next.js + Shopify)." },
      { tip: "h2", metin: "Üçüncü Seçenek: Headless (Next.js + Shopify)" },
      { tip: "p", metin: "Sprinter'ın önerdiği modern yaklaşım headless'tır: Shopify veri katmanı (ürün, sipariş, ödeme) olarak çalışır, ön yüz Next.js ile özel tasarlanır. Shopify'ın kolaylığını + tam özel, saniyenin altında açılan bir mağazayı birleştirir. Geleneksel Shopify temalarında sayfa hızı 3-5 saniye iken headless'ta 0.6-1.0 saniyedir." },
      { tip: "h2", metin: "Sonuç" },
      { tip: "p", metin: "Tek doğru cevap yok. İhtiyacınıza, bütçenize ve teknik kapasitenize göre değişir. Kararsızsanız ücretsiz keşif görüşmesinde birlikte belirleyebiliriz." },
    ],
  },
  // ============================================================
  {
    slug: "ozel-yazilim-mi-hazir-paket-mi",
    baslik: "Özel Yazılım mı, Hazır Paket mi?",
    ozet:
      "Ticimax/ideasoft gibi hazır paket mi, size özel yazılım mı? Maliyet, esneklik, uzun vadeli toplam sahip olma maliyeti açısından karşılaştırma.",
    kategori: "yazilim",
    okumaSuresi: 6,
    tarih: "2026-06-12",
    yazar: "Sprinter Ekibi",
    renk: "from-blue-500 to-indigo-600",
    ikon: "Code2",
    onerilen: true,
    anahtarKelimeler: ["özel yazılım", "hazır paket", "yazılım yaptırma", "kurumsal yazılım"],
    metaDescription:
      "Özel yazılım mı hazır paket mi? Maliyet, esneklik, uzun vadeli toplam sahip olma maliyeti. Hangi durumda hangisi mantıklı?",
    bolumler: [
      { tip: "p", metin: "Bir yazılım ihtiyacı doğduğunda iki ana yol vardır: hazır paket (SaaS veya altyapı) almak ya da size özel yazılım geliştirmek. Her ikisinin de kendine göre avantajları ve dezavantajları var. Bu yazıda uzun vadeli bakış açısıyla değerlendiriyoruz." },
      { tip: "h2", metin: "Hazır Paket (SaaS / Altyapı) Avantajları" },
      { tip: "ul", liste: [
        "Hızlı başlangıç (günler içinde yayında)",
        "Düşük başlangıç maliyeti (aylık abonelik)",
        "Sıfır teknik bakım yükü",
        "Düzenli güncelleme ve yeni özellikler",
      ]},
      { tip: "h2", metin: "Özel Yazılım Avantajları" },
      { tip: "ul", liste: [
        "Tam olarak iş sürecinize uygun",
        "Rakiplerden farklılaşma imkânı",
        "Veri tamamen sizin kontrolünüzde",
        "Uzun vadede daha düşük toplam sahip olma maliyeti (TCO)",
        "Başka sistemlerle derin entegrasyon",
      ]},
      { tip: "h2", metin: "Toplam Sahip Olma Maliyeti (TCO)" },
      { tip: "p", metin: "Hazır paket başlangıçta ucuz görünür ama aylık ücretler yıllar içinde birikir. 5 yıl sonunda ödediğiniz toplam tutar, özel yazılım maliyetini geçebilir. Öte yandan özel yazılımda bakım, sunucu ve güncelleme maliyetleri size aittir. Doğru analiz için 3-5 yıllık TCO hesabı yapın." },
      { tip: "h2", metin: "Karar Kriterleri" },
      { tip: "ol", liste: [
        "İş süreciniz standart mı, özgün mü? (Özgünse → özel)",
        "Farklılaşma stratejik mi? (Evetse → özel)",
        "Bütçe sabit mi, yatırıma hazır mı? (Sabitse → paket)",
        "Uzun vadede (5+ yıl) kullanılacak mı? (Evetse → özel avantajlı)",
      ]},
      { tip: "blockquote", metin: "Yeni başlayan ve sürecini henüz oturtmamış işletmelere hazır paket; olgunlaşmış ve büyümüş işletmelere özel yazılım öneriyoruz." },
    ],
  },
  // ============================================================
  {
    slug: "e-fatura-entegrasyonu-nasil-yapilir",
    baslik: "E-Fatura Entegrasyonu Nasıl Yapılır? Adım Adım Rehber",
    ozet:
      "E-fatura, e-arşiv, e-irsaliye entegrasyonu: GİB süreçleri, özel entegratörler, API seçenekleri ve e-ticaret sitenize nasıl bağlanır?",
    kategori: "rehber",
    okumaSuresi: 8,
    tarih: "2026-05-28",
    yazar: "Sprinter Ekibi",
    renk: "from-violet-500 to-purple-600",
    ikon: "FileText",
    anahtarKelimeler: ["e fatura entegrasyonu", "e arşiv", "gib e fatura", "fatura yazılımı"],
    metaDescription:
      "E-fatura entegrasyonu rehberi: GİB süreçleri, özel entegratörler, API, Logo/Mikro/Paraşüt. E-ticaret sitenize otomatik fatura bağlayın.",
    bolumler: [
      { tip: "p", metin: "2014'ten beri belirli hacimlerin üzerindeki şirketler için e-fatura zorunlu. E-ticaret yapan işletmelerin büyük çoğunluğu e-fatura, e-arşiv ve e-irsaliye kullanmak durumunda. Bu yazıda entegrasyon sürecini baştan sona anlatıyoruz." },
      { tip: "h2", metin: "E-Fatura, E-Arşiv, E-İrsaliye Farkı" },
      { tip: "ul", liste: [
        "E-Fatura: E-fatura mükellefi iki taraf arasında XML tabanlı fatura",
        "E-Arşiv: E-fatura mükellefi olmayan son tüketiciye electronic fatura",
        "E-İrsaliye: Mal hareketini gösteren sevk irsaliyesi ( elektronik)",
      ]},
      { tip: "h2", metin: "Süreç Adımları" },
      { tip: "ol", liste: [
        "GİB portali üzerinden e-fatura mükellefi olmak (veya özel entegratöre başvurmak)",
        "Özel entegratör seçimi (Logo, Mikro, Paraşüt, Uyumsoft/Kolays, BizimHesap)",
        "Mali mühür veya e-imza temini",
        "Entegratör API'sine erişim",
        "E-ticaret siteniz ile API entegrasyonu (sipariş → otomatik fatura)",
      ]},
      { tip: "h2", metin: "Otomatik Fatura Kesimi" },
      { tip: "p", metin: "Doğru entegrasyonda müşteri sipariş tamamladığında sistem otomatik olarak e-fatura/e-arşiv keser, müşteriye e-posta ile gönderir ve muhasebe yazılımınıza aktarır. Manuel fatura kesimi tamamen ortadan kalkar." },
      { tip: "h2", metin: "Hangi Muhasebe Yazılımı?" },
      { tip: "p", metin: "Türkiye'de yaygın seçenekler: Logo (İşbaşı, Go, Tiger), Mikro, Paraşüt (bulut), Kolays (eski Uyumsoft), BizimHesap. Mevcut muhasebe yazılımınız neyse onun API'si ile entegre oluruz." },
      { tip: "blockquote", metin: "Doğru kurulmuş e-fatura entegrasyonu, muhasebe ekibinizin manuel işini ciddi azaltır ve hata riskini düşürür." },
    ],
  },
  // ============================================================
  {
    slug: "trendyol-api-rehberi",
    baslik: "Trendyol API Entegrasyonu Rehberi",
    ozet:
      "Trendyol satıcıları için API entegrasyonu: ürün yükleme, stok senkronu, sipariş yönetimi. Kategori eşleştirme ve sık karşılaşılan sorunlar.",
    kategori: "e-ticaret",
    okumaSuresi: 7,
    tarih: "2026-05-15",
    yazar: "Sprinter Ekibi",
    renk: "from-orange-500 to-red-500",
    ikon: "ShoppingCart",
    anahtarKelimeler: ["trendyol api", "trendyol entegrasyon", "trendyol satıcı api", "pazaryeri entegrasyonu"],
    metaDescription:
      "Trendyol API entegrasyonu rehberi: ürün yükleme, stok senkronu, sipariş yönetimi. Kategori eşleştirme ve sık karşılaşılan sorunlar.",
    bolumler: [
      { tip: "p", metin: "Trendyol, Türkiye'nin en büyük pazaryeri. Yüksek hacimli satıcılar için manuel ürün yönetimi imkânsızlaşır. Bu noktada Trendyol API entegrasyonu kritik hale gelir. Bu yazıda teknik süreçleri anlatıyoruz." },
      { tip: "h2", metin: "Trendyol API Neler Yapılabilir?" },
      { tip: "ul", liste: [
        "Toplu ürün yükleme ve güncelleme",
        "Gerçek zamanlı stok ve fiyat senkronizasyonu",
        "Sipariş yönetimi (yeni sipariş, kargo bildirimi, iade)",
        "Kategori ve marka eşleştirme",
        "Komisyon ve kâr marjı raporu",
      ]},
      { tip: "h2", metin: "Kimlik Doğrulama" },
      { tip: "p", metin: "Trendyol API, API anahtarı (apiKey) ve secret ile çalışır. Satıcı panelinden 'API Anahtarları' bölümünden alınır. Tüm istekler bu anahtarla imzalanır." },
      { tip: "h2", metin: "Çift Yönlü Stok Senkronu" },
      { tip: "p", metin: "En kritik konu stok senkronudur. Tek yönlü senkron (sizin paneliniz → Trendyol) yetersizdir; Trendyol'da satılan ürün kendi sitenizde hala görünebilir. Doğru çözüm çift yönlü senkron: her sipariş her iki sistemi de günceller." },
      { tip: "h2", metin: "Sık Karşılaşılan Sorunlar" },
      { tip: "ul", liste: [
        "Kategori eşleştirme hataları (yanlış kategori → ürün reddi)",
        "Görsel boyut/format uyumsuzluğu",
        "Varyant yapısı tutarsızlığı",
        "API limit aşımları (rate limit)",
      ]},
      { tip: "blockquote", metin: "Trendyol API'si güçlü ama teknik deneyim gerektirir. Deneyimsiz ekipler genelde 2-3 ayda yorulur; hazır entegrasyon platformları veya uzman bir ekip bu süreyi haftalara indirir." },
    ],
  },
  // ============================================================
  {
    slug: "ai-musteri-temsilcisi-nasil-calisir",
    baslik: "AI Müşteri Temsilcisi Nasıl Çalışır? RAG Açıklaması",
    ozet:
      "AI chatbot'lar nasıl çalışır? RAG (Retrieval-Augmented Generation) nedir? Neden halüsinasyon riskini azaltır? Web ve WhatsApp AI asistanları.",
    kategori: "ai",
    okumaSuresi: 8,
    tarih: "2026-05-02",
    yazar: "Sprinter Ekibi",
    renk: "from-violet-500 to-fuchsia-600",
    ikon: "Bot",
    onerilen: true,
    anahtarKelimeler: ["ai müşteri temsilcisi", "rag", "ai chatbot", "yapay zeka chatbot"],
    metaDescription:
      "AI müşteri temsilcisi nasıl çalışır? RAG (Retrieval-Augmented Generation) ile halüsinasyon riskini azaltan AI chatbot mimarisi. Web ve WhatsApp.",
    bolumler: [
      { tip: "p", metin: "Son iki yılda AI müşteri temsilcileri (chatbot) muazzam gelişti. Artık GPT-4 seviyesinde modeller, bir işletmenin ürün/hizmet bilgisini anlayıp doğru yanıt verebiliyor. Peki bu nasıl çalışıyor? Bu yazıda teknik mimariyi anlaşılır anlatıyoruz." },
      { tip: "h2", metin: "Sorun: Saf LLM Halüsinasyonu" },
      { tip: "p", metin: "Bir GPT modeline 'ürünümün fiyatı ne?' diye sorsanız, bilmediği için uydurabilir (halüsinasyon). Bu müşteri hizmetleri için kabul edilemez. Çözüm: modeli sizin verinizle beslemek." },
      { tip: "h2", metin: "RAG (Retrieval-Augmented Generation)" },
      { tip: "p", metin: "RAG, AI'ı bir bilgi tabanına bağlar. Süreç: kullanıcı soru sorar → sistem bilgi tabanınızdan (SSS, ürün, doküman) en ilgili parçaları bulur → bunları modele bağlam olarak verir → model SADECE bu bağlamdan yanıt üretir." },
      { tip: "h3", metin: "RAG Adımları" },
      { tip: "ol", liste: [
        "Belgelerinizi küçük parçalara bölme (chunking)",
        "Her parçayı vektöre çevirme (embedding)",
        "Vektör veritabanına kaydetme (Pinecone, pgvector)",
        "Kullanıcı sorusu geldiğinde anlamsal arama (semantic search)",
        "En ilgili parçaları modele bağlam olarak verip yanıt alma",
      ]},
      { tip: "h2", metin: "Neden RAG Kullanmalı?" },
      { tip: "ul", liste: [
        "Halüsinasyon riski büyük ölçüde azalır (sadece sizin verinizden yanıtlar)",
        "Bilgi tabanını güncellersiniz, model anında güncel olur",
        "Maliyet düşük (sadece ilgili parça işlenir)",
        "Kaynak gösterilebilir (bu bilgi şu dokümandan)",
      ]},
      { tip: "h2", metin: "İnsan Destekliğine Devir (Handoff)" },
      { tip: "p", metin: "İyi bir AI asistanı, emin olmadığı veya duygusal/özel durumlarda kendini insan temsilciye devreder. Bu güven için kritik. Asistanı 7/24 anında yanıt verirken, karmaşık durumlar insan ekibe aktarılır." },
      { tip: "blockquote", metin: "Doğru kurulmuş RAG tabanlı AI asistanı, destek ekibinin yükünü belirgin azaltırken müşteri memnuniyetini yüksek tutar." },
    ],
  },
  // ============================================================
  {
    slug: "saas-yazilim-nasil-gelistirilir",
    baslik: "SaaS Yazılım Nasıl Geliştirilir? Baştan Sona Süreç",
    ozet:
      "Fikirden yayına SaaS ürünü: mimari, teknoloji seçimi, multi-tenant yapı, ödeme, MVP ve ölçeklendirme. Pratik yol haritası.",
    kategori: "yazilim",
    okumaSuresi: 9,
    tarih: "2026-04-18",
    yazar: "Sprinter Ekibi",
    renk: "from-cyan-500 to-blue-600",
    ikon: "Layers",
    anahtarKelimeler: ["saas yazılım", "saas geliştirme", "multi tenant", "saas mimari"],
    metaDescription:
      "SaaS yazılım nasıl geliştirilir? Mimari, teknoloji stack, multi-tenant yapı, ödeme entegrasyonu, MVP ve ölçeklendirme. Pratik yol haritası.",
    bolumler: [
      { tip: "p", metin: "SaaS (Software as a Service), bulut tabanlı abonelikli yazılım modelidir. SaaS geliştirmek, klasik kurumsal yazılımdan farklı disiplinler gerektirir: multi-tenant mimari, abonelik yönetimi, self-servis onboarding. Bu yazıda baştan sona süreci anlatıyoruz." },
      { tip: "h2", metin: "1. Fikir ve Pazar Doğrulama" },
      { tip: "p", metin: "Kod yazmadan önce gerçek bir ihtiyaç olduğundan emin olun. Potansiyel müşterilerle konuşun, rakip analizi yapın, willingness-to-pay (ödeme isteği) test edin." },
      { tip: "h2", metin: "2. Multi-Tenant Mimari" },
      { tip: "p", metin: "SaaS'ın kalbi multi-tenant yapıdır: tek bir uygulama, birden fazla müşteri (tenant) tarafından kullanılır ama veriler tamamen izoledir. Üç ana yaklaşım: shared database + tenant_id, database-per-tenant, schema-per-tenant. Her birinin trade-off'ları var." },
      { tip: "h2", metin: "3. Teknoloji Stack Seçimi" },
      { tip: "ul", liste: [
        "Frontend: Next.js (SSR + SSG + SEO)",
        "Backend: NestJS veya .NET (kurumsal)",
        "Veritabanı: PostgreSQL (multi-tenant için ideal)",
        "Kimlik: Auth0, Clerk veya özel JWT",
        "Ödeme: Stripe (global) veya iyzico (TR)",
        "Altyapı: AWS/Azure + Docker + Kubernetes",
      ]},
      { tip: "h2", metin: "4. Ödeme ve Abonelik" },
      { tip: "p", metin: "SaaS'ın gelir modeli aboneliktir. Stripe Billing veya iyzico ile planlar (free, pro, enterprise), deneme süresi (trial), upgrade/downgrade, iptal yönetimi kurun. Faturalama ve vergi (KDV/VAT) otomatik olsun." },
      { tip: "h2", metin: "5. MVP ve Lansman" },
      { tip: "p", metin: "İlk sürümde sadece çekirdek fonksiyonları yapın. 3-6 ayda ilk ödeyen müşterileri alın. Gerçek kullanım verisi, her tahminden değerlidir. Erken ölçeklendirme hatasından kaçının." },
      { tip: "h2", metin: "6. Ölçeklendirme" },
      { tip: "p", metin: "Kullanıcı artınca bottleneck'ler ortaya çıkar: veritabanı, cache, queue. Redis cache, read replica, job queue (RabbitMQ), CDN ekleyin. Mikroservise geçiş ihtiyacı çok sonradan; monolitik başlayın." },
      { tip: "blockquote", metin: "SaaS maraton, sprint değil. İlk yıl product-market fit arayışı, ikinci yıl ölçeklendirme. Sabırlı ve veri odaklı ilerleyin." },
    ],
  },
];

export const getBlogBySlug = (slug: string): BlogYazi | undefined =>
  BLOG_YAZILAR.find((y) => y.slug === slug);

export const getBlogByKategori = (kategori: BlogKategori): BlogYazi[] =>
  BLOG_YAZILAR.filter((y) => y.kategori === kategori);
