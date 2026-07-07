# Sprinter Yazılım — Proje Dökümantasyonu (As-Built)

> **Canlı:** https://sprinter-yazilim.vercel.app
> **Repo:** https://github.com/Ahanci/sprinter-yazilim (public)
> **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Three.js · Framer Motion

Bu döküman, teslim edilen sitenin **nih durumunu** belgeler. Başlangıç planı için `PROJECT.md`'ye bakınız.

---

## 1. Pozisyonlama

**Modern headless e-ticaret & dijital ürünler stüdyosu.**

Rakipler (Ticimax, ideasoft, T-Soft) eski nesil PHP monolitik altyapılarla çalışır.
Sprinter **Next.js + Shopify (headless)** yaklaşımıyla; hız, SEO, modern UI ve AI-okunabilirlik avantajını konumlandırır.

Ana mesaj: *"İşletmenizi geleceğe taşıyan modern, hızlı ve AI-okunabilir dijital altyapılar."*

Ek iş kolu: **Evden e-ticaret ile ek gelir** programı (`/ek-gelir-eticaret`) — sıfır tecrübeli bireylere uçtan uca pazaryeri kurulumu.

---

## 2. Teknoloji Stack

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 16 (App Router) |
| Render | SSG + ISR + Edge (OG görsel) |
| Stil | Tailwind CSS v4 |
| UI | lucide-react, Aceternity-style bileşenler |
| Animasyon | Framer Motion |
| 3D | Three.js (`@react-three/fiber`) |
| E-ticaret (sunulan) | Shopify Storefront API / Hydrogen |
| Form / Lead | Form → WhatsApp `wa.me` derin linki (backend yok) |
| SEO | `metadata` API, `sitemap.ts`, `robots.ts`, JSON-LD |
| Hosting | Vercel |

---

## 3. Sayfa Yapısı (75 statik sayfa)

### Ana sayfalar
- `/` — Anasayfa (hero, ek-gelir banner, kategoriler, paketler, süreç, SSS, CTA)
- `/hizmetler` — Tüm hizmetler (4 kategori grid)
- `/hizmetler/[slug]` — **26 hizmet detay sayfası** (SSG)
- `/e-ticaret` — E-ticaret çözümleri (47 entegrasyon)
- `/sektorler` + `/sektorler/[slug]` — **11 sektör sayfası**
- `/teknolojiler` — Teknoloji stack showcase
- `/referanslar` — 6 proje tipi (Problem→Çözüm→Sonuç)
- `/ek-gelir-eticaret` — Ek gelir landing page (ayrı iş kolu)
- `/surec` — Çalışma süreci
- `/hakkimizda` — Marka, değerler
- `/sss` — Genel SSS
- `/iletisim` — Form + Google Maps + çalışma saatleri
- `/blog` + `/blog/[slug]` — **21 blog yazısı**
- `/opengraph-image` — Dinamik PNG OG görseli (edge)
- `/sitemap.xml`, `/robots.txt`

### Dinamik içerik kaynakları (tek veri kaynağı)
- `lib/data/hizmetler.ts` — 26 hizmet
- `lib/data/sektorler.ts` — 11 sektör
- `lib/data/paketler.ts` — 4-tier paket yapısı (e-ticaret + kurumsal)
- `lib/data/e-ticaret-entegrasyonlar.ts` — 47 entegrasyon
- `lib/data/blog.ts` — 21 blog yazısı
- `lib/data/sss.ts` — Genel SSS
- `lib/data/site.ts` — Site config + navigasyon

---

## 4. Hizmet Kataloğu (26)

**Web & E-Ticaret:** Kurumsal Web Sitesi, Tanıtım Sitesi, E-Ticaret Sitesi (Next.js + Shopify Headless, flagship), E-Ticaret Kurulumu & Eğitimi, E-Ticaret Yönetimi, SaaS Yazılım Geliştirme, API Geliştirme, E-Fatura Entegrasyonu

**SEO & Pazarlama:** SEO Hizmeti, Google Ads, Meta Reklam, Sosyal Medya, Google İş Profili

**AI & Otomasyon:** WhatsApp Otomasyonu, AI Chatbot, Online Randevu, CRM, AI Dijital Dönüşüm, AI/GPT Entegrasyonları, AI Telefon Asistanı, RAG Sistemleri

**Mobil & Marka:** Mobil Uygulama, Logo & Marka Kimliği, UI/UX, Özel Yazılım, DevOps & Cloud

---

## 5. Ek Gelir Programı (`/ek-gelir-eticaret`)

Sıfır tecrübeli bireyler için evden ek gelir hedefli ayrı iş kolu:
- **6 adım süreç:** Hedef Belirleme → Eğitim & Planlama → Şirket & Resmiyet → Mağaza Açılışı → Ürün Tedarik & Listeleme → Yönetim & "Alırken Kazan"
- **Dahil olanlar:** Şirket kurulumu, Trendyol/Hepsiburada/n11/Amazon/Pazarama mağazaları, ürün listeleme, satış izinleri, üyelikler, düzenli tedarik, mağaza yönetimi, kâr takibi
- **"Alırken Kazan" modeli:** indirim takibi + akıllı tedarik + stok yönetimi
- SSS + LeadForm + Service/FAQ JSON-LD

---

## 6. Blog İçeriği (21 yazı)

Keyword Planner verisinden seçilmiş, 1000-2000 kelime derin SEO yazıları:

**E-Ticaret:** Shopify mı WooCommerce mi, E-Ticaret Maliyeti, Trendyol API, E-İhracat, Evden E-Ticaret ile Ek Gelir, Trendyol'da Satıcı Olma, Sermayesiz Ek İş Fikirleri, Pazaryeri Karşılaştırması

**Yazılım:** Özel vs Hazır, SaaS Geliştirme, Web Tasarım Fiyatları, Kurumsal Web Tasarım, WordPress Site Kurma

**AI:** AI Müşteri Temsilcisi (RAG), AI Telefon Asistanı

**SEO & Pazarlama:** SEO Hizmeti Rehberi, Meta Reklam, Google Ads, Google İş Profili

**Rehber:** E-Fatura Entegrasyonu

Her blog yazısında: okuma ilerleme çubuğu, içindekiler (TOC), anchor'lı H2'ler, Article + Breadcrumb JSON-LD.

---

## 7. SEO Altyapısı

- **Metadata:** Her sayfada title (≤60), description (≤155), OpenGraph, Twitter card, canonical
- **JSON-LD:** Organization, Service, FAQPage, BreadcrumbList, Article
- **Sitemap:** Statik + 26 hizmet + 11 sektör + 21 blog otomatik
- **Robots:** Allow all, sitemap referansı
- **AI-okunabilirlik:** Semantik HTML, doğru H1→H2→H3 hiyerarşisi, Schema.org
- **OG görseli:** Dinamik PNG (Next.js `opengraph-image.tsx`, edge runtime)
- **Hız:** SSG, görsel optimizasyon, font `display:swap`

---

## 8. Dönüşüm (CRO) & İletişim

- **Gizli fiyat, teklif bazlı** ("Teklif Al" her yerde)
- **Lead formu** → WhatsApp'a yönlendirme (`wa.me/905396540461`)
- **Sabit WhatsApp float butonu** (sağ-alt)
- **CTA bölümleri** her sayfada (baslik + altBaslik + WhatsApp butonu)
- **Mobil menü** gradient CTA + WhatsApp butonu
- **Google Maps embed** iletişimde
- Çalışma saatleri, e-posta, konum kartları

---

## 9. Teknik Notlar

- **WhatsApp ülke kodu:** `getWhatsAppWaMe()` helper'ı TR kodu `90`'ı otomatik ekler (`5396540461`/`05396540461`/`905396540461` → `905396540461`)
- **Ortam değişkenleri:** `NEXT_PUBLIC_WHATSAPP`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BRAND_EMAIL` (`.env.local`, Vercel'de ayarlı)
- **İçerik tek kaynaktan:** Tüm metinler `lib/data/*` dosyalarında; kod değil içerik değişikliği oradan
- **Etik çizgi:** Sahte müşteri adı/tarih/sertifika yok; referanslar proje **tipi** olarak (Problem→Çözüm→Sonuç)

---

## 10. Build & Deploy

```bash
npm install
npm run dev        # geliştirme
npm run build      # production build (75 statik sayfa)
npm run lint       # 0 uyarı
```

**Deploy:** GitHub `main` branch'ine push → Vercel otomatik deploy.
**Local deploy:** `vercel --prod --yes`

---

## 11. Sürdürülebilir Genişletme

Yeni içerik eklemek için:
- **Yeni hizmet:** `lib/data/hizmetler.ts`'ye entry ekle → `/hizmetler/[slug]` otomatik üretilir + sitemap'e eklenir
- **Yeni sektör:** `lib/data/sektorler.ts`'ye entry ekle
- **Yeni blog:** `lib/data/blog.ts`'ye entry ekle → `/blog/[slug]` otomatik
- **Yeni entegrasyon:** `lib/data/e-ticaret-entegrasyonlar.ts`

Hiçbir sayfa/rota kodu değiştirmeden içerik genişletilebilir (data-driven mimari).

---

## 12. İstatistik Özeti

- **75 statik sayfa** (44 → 59 → 62 → 66 → 72 → 75)
- **26 hizmet + 11 sektör + 21 blog + 47 entegrasyon**
- **Lint:** 0 uyarı
- **Toplam commit:** ~15 (içerik + düzeltme döngüleri)
- **Marka:** Sprinter Yazılım (kuruluş 2022)

---

*Son güncelleme: Temmuz 2026*
