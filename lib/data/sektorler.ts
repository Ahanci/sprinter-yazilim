/**
 * Sektör sayfaları için içerik bankası.
 * Her sektör: özellikler, varsayılan paketler, açıklama.
 */

export type SektorKategori =
  | "saglik"
  | "konaklama"
  | "emlak"
  | "yiyecek"
  | "guzellik"
  | "hukuk"
  | "insaat"
  | "kamu"
  | "ulasim"
  | "moda"
  | "eticaret";

export interface Sektor {
  slug: string;
  baslik: string;
  kategori: SektorKategori;
  ikon: string;
  kisaAciklama: string;
  tanim: string;
  ozellikler: string[];
  faydalar: string[];
  kimIcin: string[];
  metaTitle: string;
  metaDescription: string;
  anahtarKelimeler: string[];
  vurgu?: boolean;
}

export const SEKTORLER: Sektor[] = [
  {
    slug: "doktor-klinik",
    baslik: "Doktor & Klinik",
    kategori: "saglik",
    ikon: "Stethoscope",
    kisaAciklama:
      "Doktorlar, diş klinikleri, estetik merkezler için online randevu ve KVKK uyumlu kurumsal site.",
    tanim:
      "Hastalarınızın sizi bulmasını, hakkınızda bilgi almasını ve tek tıkla randevu oluşturmasını sağlayan, KVKK uyumlu modern doktor web sitesi.",
    ozellikler: [
      "Online randevu sistemi (tarih, saat, hekim seçimi)",
      "Branş ve hekim profilleri",
      "Anlaşmalı kurum ve sigorta listesi",
      "Sıkça sorulan sorular (hastalar için)",
      "KVKK uyumlu aydınlatma metni ve çerez politikası",
      "Google İş Profili optimizasyonu",
      "WhatsApp hızlı iletişim",
      "Mobil öncelikli tasarım (hastalar çoğunlukla telefondan gelir)",
    ],
    faydalar: [
      "Yeni hasta kazanımı (Google'da üst sıralarda yer alma)",
      "Telefon trafiğini azaltma (online randevu)",
      "Profesyonel güven verme (modern tasarım)",
      "İçerik ile SEO güçlendirme (blog, tedavi rehberleri)",
    ],
    kimIcin: [
      "Diş hekimleri ve diş klinikleri",
      "Estetik ve güzellik klinikleri",
      "Göz, kadın doğum, kardiyoloji vb. uzman doktorlar",
      "Saç ekim merkezleri",
      "Tıp merkezleri ve poliklinikler",
    ],
    metaTitle: "Doktor ve Klinik Web Sitesi | Online Randevu | Sprinter",
    metaDescription:
      "Doktor ve klinikler için KVKK uyumlu, online randevulu, SEO odaklı modern web sitesi. Yeni hasta kazanın, telefon trafiğini azaltın. Teklif alın.",
    anahtarKelimeler: [
      "doktor web sitesi",
      "klinik web sitesi",
      "online randevu",
      "diş hekimi web sitesi",
      "estetik merkezi sitesi",
    ],
  },
  {
    slug: "otel",
    baslik: "Otel & Konaklama",
    kategori: "konaklama",
    ikon: "Hotel",
    kisaAciklama:
      "Oteller, butik oteller, tatil köyleri için rezervasyon altyapılı, çok dilli kurumsal site.",
    tanim:
      "Misafirlerinizin odalarınızı incelemesini, müsaitlik kontrolü yapmasını ve rezervasyon oluşturmasını sağlayan çok dilli modern otel web sitesi.",
    ozellikler: [
      "Oda tanıtım sayfaları (galeri, özellikler, fiyat)",
      "Online rezervasyon altyapısı (Booking motor entegrasyonu)",
      "Çoklu dil desteği (TR/EN/DE/RU/AR)",
      "Hava durumu, transfer, tur önerileri",
      "Misafir yorumları entegrasyonu",
      "Hızlı performans (tatil planlamasında hız kritik)",
      "SEO: 'X bölgesi otel' aramalarında üst sıra",
      "WhatsApp iletişim ve özel teklif talebi",
    ],
    faydalar: [
      "Doğrudan rezervasyon (OTA komisyonundan tasarruf)",
      "Çok dilli erişim (uluslararası misafir)",
      "Marka güveni (modern tasarım)",
      "SEO ile organik trafik artışı",
    ],
    kimIcin: [
      "Butik oteller ve pansiyonlar",
      "4-5 yıldızlı oteller ve tatil köyleri",
      "Boutique hostel ve konukevleri",
      "Apart oteller ve rezidanslar",
    ],
    metaTitle: "Otel ve Konaklama Web Sitesi | Online Rezervasyon | Sprinter",
    metaDescription:
      "Otel ve konaklama tesisleri için çok dilli, online rezervasyon altyapılı, SEO odaklı modern web sitesi. OTA komisyonundan tasarruf edin. Teklif alın.",
    anahtarKelimeler: [
      "otel web sitesi",
      "butik otel sitesi",
      "online rezervasyon",
      "tatil köyü web sitesi",
    ],
  },
  {
    slug: "emlak",
    baslik: "Emlak & Gayrimenkul",
    kategori: "emlak",
    ikon: "Building2",
    kisaAciklama:
      "Emlak ofisleri, gayrimenkul danışmanları için portföy + harita + CRM entegreli site.",
    tanim:
      "Portföyünüzü profesyonelce sergileyen, harita üzerinden arama imkânı sunan ve müşteri adaylarını CRM'e yönlendiren emlak web sitesi.",
    ozellikler: [
      "Portföy listeleme (satılık / kiralık filtreleri)",
      "Detay sayfası (galeri, özellikler, harita, iletişim)",
      "Harita üzerinden arama",
      "Danışman profilleri",
      "CRM entegrasyonu (müşteri adayı takibi)",
      "WhatsApp'tan tek tıkla ilgi gösterme",
      "Sahibinden.com / Hepsiemlak XML besleme (opsiyonel)",
      "SEO: 'X bölgesinde satılık daire' aramaları",
    ],
    faydalar: [
      "Portföyünüze 7/24 vitrin",
      "Müşteri adayı otomasyonu",
      "Profesyonel marka algısı",
      "Bölgesel SEO ile yeni müşteri",
    ],
    kimIcin: [
      "Bireysel emlak danışmanları",
      "Emlak ofisleri ve franchise'lar",
      "Gayrimenkul yatırım şirketleri",
      "Konut projeleri",
    ],
    metaTitle: "Emlak ve Gayrimenkul Web Sitesi | Portföy Vitrin | Sprinter",
    metaDescription:
      "Emlak ofisleri için portföy vitrin, harita arama, CRM entegreli modern web sitesi. Sahibinden'den bağımsız dijital vitrininizi kurun. Teklif alın.",
    anahtarKelimeler: [
      "emlak web sitesi",
      "gayrimenkul sitesi",
      "portföy vitrin",
      "satılık daire sitesi",
    ],
  },
  {
    slug: "restoran",
    baslik: "Restoran & Kafe",
    kategori: "yiyecek",
    ikon: "UtensilsCrossed",
    kisaAciklama:
      "Restoranlar, kafeler, pastaneler için menü + rezervasyon + konum vurgulu site.",
    tanim:
      "Müşterilerinizin menünüzü incelemesini, rezervasyon yapmasını ve şubenize yol bulmasını sağlayan restoran web sitesi.",
    ozellikler: [
      "Online menü (PDF değil, gerçek sayfa)",
      "QR kod menü desteği (masa başı)",
      "Rezervasyon altyapısı",
      "Şube ve konum bilgileri (Google Maps)",
      "Galeri (yemek, atmosfer)",
      "Online sipariş entegrasyonu (opsiyonel: Yemeksepeti, Getir)",
      "Hikaye, şef, malzeme anlatımı",
      "Instagram beslemesi",
    ],
    faydalar: [
      "Yerel aramalarda üst sıra (Google Maps SEO)",
      "Online rezervasyon (telefon trafiğini azaltma)",
      "QR menü ile pandemi sonrası hijyen algısı",
      "Marka hikâyesi ile bağ kurma",
    ],
    kimIcin: [
      "Restoranlar ve lokantalar",
      "Kafeler ve kahve zincirleri",
      "Pastaneler ve tatlıcılar",
      "Bar ve pub'lar",
      "Catering şirketleri",
    ],
    metaTitle: "Restoran ve Kafe Web Sitesi | Online Menü + Rezervasyon | Sprinter",
    metaDescription:
      "Restoran ve kafeler için online menü, QR kod, rezervasyon altyapılı modern web sitesi. Google'da yerel aramalarda üst sıralarda yer alın.",
    anahtarKelimeler: [
      "restoran web sitesi",
      "kafe sitesi",
      "online menü",
      "qr kod menü",
      "restoran rezervasyon",
    ],
  },
  {
    slug: "kuafor",
    baslik: "Kuaför & Güzellik",
    kategori: "guzellik",
    ikon: "Scissors",
    kisaAciklama:
      "Kuaförler, güzellik salonları, nail art stüdyoları için randevu + galeri odaklı site.",
    tanim:
      "Hizmet portföyünüzü ve çalışmalarınızı sergileyen, online randevu altyapısıyla doluluğunuzu artıran güzellik salonu sitesi.",
    ozellikler: [
      "Hizmet listesi (saç kesimi, boya, bakım vb.)",
      "Galeri (önce-sonra, çalışmalar)",
      "Online randevu (hizmet + personel + saat)",
      "Uzman/kuaför profilleri",
      "Fiyat listesi",
      "Instagram entegrasyonu",
      "Sadakat programı (opsiyonel)",
      "WhatsApp hızlı randevu",
    ],
    faydalar: [
      "Doluluğu artırma (online randevu 7/24)",
      "Çalışmaları sergileme (galeri)",
      "Yerel SEO ile yeni müşteri",
      "Marka algısı (modern tasarım)",
    ],
    kimIcin: [
      "Kadın kuaförleri ve erkek kuaförleri",
      "Güzellik salonları",
      "Nail art stüdyoları",
      "Epilasyon ve lazer merkezleri",
      "Makyaj stüdyoları",
    ],
    metaTitle: "Kuaför ve Güzellik Salonu Web Sitesi | Online Randevu | Sprinter",
    metaDescription:
      "Kuaför ve güzellik salonları için online randevu, galeri, fiyat listesi içeren modern web sitesi. Müşteri doluluğunuzu artırın. Teklif alın.",
    anahtarKelimeler: [
      "kuaför web sitesi",
      "güzellik salonu sitesi",
      "online randevu",
      "kuaför sitesi",
    ],
  },
  {
    slug: "avukat",
    baslik: "Avukat & Hukuk",
    kategori: "hukuk",
    ikon: "Scale",
    kisaAciklama:
      "Avukatlar ve hukuk büroları için profesyonel, KVKK uyumlu kurumsal site.",
    tanim:
      "Uzmanlık alanlarınızı, ekibinizi ve referanslarınızı ciddi ve güven veren bir tasarımla sunan hukuk bürosu web sitesi.",
    ozellikler: [
      "Uzmanlık alanları detay sayfaları",
      "Avukat profilleri (CV, yayınlar, dava türleri)",
      "Makale / içtihat paylaşımı (blog)",
      "KVKK uyumlu gizlilik ve çerez politikası",
      "Güvenli iletişim formu (avukat-müvekkil gizliliği)",
      "Randevu talep formu",
      "Ofis konum ve harita",
      "Çok dilli (TR + opsiyonel EN/AR)",
    ],
    faydalar: [
      "Profesyonel güven algısı",
      "İçerik ile SEO (hukuki makaleler)",
      "Doğru müvekkil segmenti çekme",
      "KVKK ve mesleki kurallara uyum",
    ],
    kimIcin: [
      "Bireysel avukatlar",
      "Hukuk büroları",
      "Avukatlık ortaklıkları",
      "Hukuki danışmanlık şirketleri",
    ],
    metaTitle: "Avukat ve Hukuk Bürosu Web Sitesi | KVKK Uyumlu | Sprinter",
    metaDescription:
      "Avukat ve hukuk büroları için profesyonel, KVKK uyumlu, içerik odaklı modern web sitesi. Uzmanlık alanlarınızı öne çıkarın. Teklif alın.",
    anahtarKelimeler: [
      "avukat web sitesi",
      "hukuk bürosu sitesi",
      "avukat kurumsal site",
    ],
  },
  {
    slug: "insaat",
    baslik: "İnşaat & Proje",
    kategori: "insaat",
    ikon: "HardHat",
    kisaAciklama:
      "İnşaat firmaları, müteahhitler, proje şirketleri için portföy + referans odaklı site.",
    tanim:
      "Tamamladığınız projeleri sergileyen, devam eden projeleri tanıtan ve yeni müşteri çeken inşaat firması web sitesi.",
    ozellikler: [
      "Proje portföyü (devam eden + tamamlanan)",
      "Proje detay sayfası (lokasyon, özellikler, görseller)",
      "3D render ve video entegrasyonu",
      "Hakkımızda (ekip, makine parkı, sertifikalar)",
      "Teklif talep formu",
      "Sektörel referanslar",
      "Blog (sektörel içerik, ipuçları)",
      "Çoklu dil desteği (yabancı yatırımcı için)",
    ],
    faydalar: [
      "Proje vitrini (görsel ağırlıklı)",
      "Yeni müşteri çekme",
      "Marka güveni (kurumsal tasarım)",
      "Yabancı yatırımcıya erişim (çoklu dil)",
    ],
    kimIcin: [
      "Konut ve ticari inşaat firmaları",
      "Müteahhitler",
      "Proje geliştirme şirketleri",
      "Mimarlık ofisleri",
    ],
    metaTitle: "İnşaat ve Proje Web Sitesi | Portföy Vitrin | Sprinter",
    metaDescription:
      "İnşaat ve proje şirketleri için portföy vitrin, referanslar, kurumsal tasarım içeren modern web sitesi. Yeni müşterilere ulaşın. Teklif alın.",
    anahtarKelimeler: [
      "inşaat web sitesi",
      "müteahhit sitesi",
      "proje vitrin",
      "konut projesi sitesi",
    ],
  },
  {
    slug: "kamu",
    baslik: "Dernek, Belediye, Kamu",
    kategori: "kamu",
    ikon: "Landmark",
    kisaAciklama:
      "Dernekler, vakıflar, belediyeler, kamu kurumları için erişilebilir ve şeffaf kurumsal site.",
    tanim:
      "Üyeleriniz, vatandaşlarınız veya paydaşlarınız için şeffaf, erişilebilir ve bilgilendirici kurumsal web sitesi.",
    ozellikler: [
      "Yönetim kadrosu ve kurullar",
      "Etkinlik ve haber yönetimi",
      "Üyelik başvuru sistemi (opsiyonel)",
      "KVKK + 5651 loglama uyumu",
      "WCAG erişilebilirlik standardı",
      "Çoklu dil (TR + İngilizce zorunlu, diğerleri opsiyonel)",
      "Duyuru ve ihale yayını",
      "Basın ve medya bölümü",
    ],
    faydalar: [
      "Şeffaflık (hesap verebilirlik)",
      "Erişilebilirlik (engelli vatandaşlar)",
      "Resmî yazışma ve duyurular için dijital alan",
      "Maliyet etkin bilgilendirme",
    ],
    kimIcin: [
      "Dernekler ve vakıflar",
      "Belediyeler ve il özel idareleri",
      "Kamu kurumları",
      "Meslek odaları ve birlikler",
    ],
    metaTitle: "Dernek, Belediye ve Kamu Kurumsal Web Sitesi | Sprinter",
    metaDescription:
      "Dernek, belediye ve kamu kurumları için erişilebilir, KVKK uyumlu, şeffaf kurumsal web sitesi. WCAG standardına uygun. Teklif alın.",
    anahtarKelimeler: [
      "dernek web sitesi",
      "belediye sitesi",
      "kamu kurumsal site",
      "vakıf web sitesi",
    ],
  },
  {
    slug: "rent-a-car",
    baslik: "Rent A Car",
    kategori: "ulasim",
    ikon: "Car",
    kisaAciklama:
      "Rent a car firmaları için filo tanıtımı + online rezervasyon altyapılı site.",
    tanim:
      "Araç filonuzu tanıtan, fiyat karşılaştırması yapan ve online rezervasyon alan rent a car web sitesi.",
    ozellikler: [
      "Filo tanıtımı (marka, model, yıl, özellikler)",
      "Online rezervasyon (tarih, lokasyon, araç sınıfı)",
      "Fiyat hesaplayıcı (gün × km × sigorta)",
      "Lokasyon bilgileri (havalimanı, şehir içi)",
      "Sigorta seçenekleri",
      "Çoklu dil (TR/EN/AR/RU)",
      "7/24 WhatsApp destek",
      "SEO: 'X havalimanı rent a car' aramaları",
    ],
    faydalar: [
      "Doğrudan rezervasyon (komisyonsuz)",
      "Çok dilli erişim (turist)",
      "Havalimanı aramalarında üst sıra",
      "Profesyonel güven algısı",
    ],
    kimIcin: [
      "Rent a car firmaları",
      "Araç kiralama zincirleri",
      "VIP transfer şirketleri",
      "Otomotiv filo kiralama",
    ],
    metaTitle: "Rent A Car Web Sitesi | Online Rezervasyon | Sprinter",
    metaDescription:
      "Rent a car firmaları için filo tanıtımı, online rezervasyon, fiyat hesaplayıcı içeren modern web sitesi. Turist müşteriye ulaşın. Teklif alın.",
    anahtarKelimeler: [
      "rent a car web sitesi",
      "araç kiralama sitesi",
      "online araç rezervasyon",
    ],
  },
  {
    slug: "butik",
    baslik: "Butik & Moda",
    kategori: "moda",
    ikon: "ShoppingBag",
    kisaAciklama:
      "Butikler, moda markaları, tasarımcılar için koleksiyon vitrini + e-ticaret altyapılı site.",
    tanim:
      "Koleksiyonlarınızı görsel ağırlıklı sergileyen, hikâyenizi anlatan ve online satış imkânı sunan butik/moda web sitesi.",
    ozellikler: [
      "Koleksiyon vitrini (sezon bazlı, görsel ağırlıklı)",
      "Ürün detay sayfası (çoklu görsel, beden, stok)",
      "Sepet + ödeme (Shopify veya özel)",
      "Marka hikâyesi, lookbook",
      "Lookbook video entegrasyonu",
      "Instagram + TikTok besleme",
      "Kargo ve iade politikası",
      "Çoklu dil (TR/EN/AR)",
    ],
    faydalar: [
      "Marka kimliğini güçlendirme (görsel + hikâye)",
      "Doğrudan online satış",
      "Sosyal medya entegrasyonu",
      "Yurt dışı satış imkânı (çoklu dil + para)",
    ],
    kimIcin: [
      "Butikler ve mağazalar",
      "Moda tasarımcıları ve markaları",
      "Aksesuar markaları",
      "Vintage / ikinci el platformları",
    ],
    metaTitle: "Butik ve Moda Web Sitesi | Koleksiyon Vitrin + E-Ticaret | Sprinter",
    metaDescription:
      "Butik ve moda markaları için koleksiyon vitrini, marka hikâyesi, e-ticaret altyapılı modern web sitesi. Online satışa geçin. Teklif alın.",
    anahtarKelimeler: [
      "butik web sitesi",
      "moda sitesi",
      "koleksiyon vitrin",
      "tasarımcı web sitesi",
    ],
  },
  {
    slug: "e-ticaret-pazaryeri",
    baslik: "E-Ticaret & Pazaryeri",
    kategori: "eticaret",
    ikon: "ShoppingCart",
    vurgu: true,
    kisaAciklama:
      "Trendyol, Hepsiburada, N11, Amazon satıcıları için pazaryeri mağaza yönetimi + omnichannel entegrasyon + eğitim/danışmanlık.",
    tanim:
      "Trendyol, Hepsiburada, N11, Amazon başta olmak üzere tüm pazaryerlerdeki mağazanızı tek elden yönetin. Ürün, stok, sipariş senkronu; iyzico, PayTR ödeme; e-Fatura, e-Arşiv; Yurtiçi, Aras, MNG kargo entegrasyonları. Üstelik mağaza yönetimi, eğitim ve danışmanlık dahil.",
    ozellikler: [
      "Trendyol, Hepsiburada, N11, Amazon mağaza kurulumu",
      "Omnichannel panel (tek panelden tüm pazaryerleri yönetin)",
      "Ürün + stok + fiyat çift yönlü senkronu",
      "Sipariş yönetimi (tüm kanallar tek yerde)",
      "iyzico, PayTR, Shopify Payments entegrasyonu",
      "e-Fatura, e-Arşiv, e-İrsaliye (Logo, Mikro, Paraşüt)",
      "POS cihazları (Visa, MasterCard, TROY, Apple Pay)",
      "Kargo API entegrasyonu (otomatik etiket + takip)",
      "WhatsApp sipariş bildirimleri",
      "Mağaza yönetimi hizmeti (günlük operasyon)",
      "4 saat birebir panel eğitimi",
      "Komisyon ve kâr marjı raporlama",
    ],
    faydalar: [
      "Tek panelden tüm pazaryerleri yönetin (zaman tasarrufu)",
      "Stok hatası riski sıfır (otomatik senkron)",
      "Komisyon ve kâr marjını net görün",
      "Müşteri memnuniyeti artar (hızlı kargo + bildirim)",
      "Ekip eğitimli ve kendi kendine yönetebilir",
    ],
    kimIcin: [
      "Trendyol / Hepsiburada / N11 / Amazon satıcıları",
      "Pazaryerinde satış yapan KOBİ'ler",
      "Kendi e-ticaret sitesi + pazaryeri (çoklu kanal) yürütenler",
      "Yeni açılacak e-ticaret mağazaları",
      "Omnichannel satış stratejisi kurmak isteyen markalar",
    ],
    metaTitle: "E-Ticaret & Pazaryeri Çözümleri | Trendyol, Hepsiburada, N11, Amazon | Sprinter",
    metaDescription:
      "Trendyol, Hepsiburada, N11, Amazon pazaryeri mağaza yönetimi + iyzico, PayTR ödeme + e-Fatura + kargo entegrasyonu. Mağaza yönetimi, eğitim ve danışmanlık dahil.",
    anahtarKelimeler: [
      "eticaret",
      "pazaryeri entegrasyonu",
      "trendyol entegrasyonu",
      "hepsiburada entegrasyonu",
      "n11 entegrasyonu",
      "amazon entegrasyonu",
      "mağaza yönetimi",
      "eticaret eğitimi",
      "eticaret danışmanlık",
    ],
  },
];

export const getSektorBySlug = (slug: string): Sektor | undefined =>
  SEKTORLER.find((s) => s.slug === slug);