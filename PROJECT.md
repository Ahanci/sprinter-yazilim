# Sprinter Yazılım — Proje Dökümantasyonu

> **Aydınlık temada, modern lacivert-beyaz SaaS hissi.**
> Next.js 16 + React 19 + Tailwind v4 + Aceternity UI 3D bileşenleri + Three.js.

---

## 1. Pozisyonlama & Değer Önerisi

**Modern headless e-ticaret & dijital ürünler stüdyosu.**

Piyasadaki rakipler (Ticimax, ideasoft, T-Soft) **eski nesil PHP monolitik** altyapılarla çalışır.
**Sprinter**, **Next.js + Shopify (headless)** yaklaşımıyla; hız, SEO, modern UI ve AI-okunabilirlik
avantajını konumlandırır.

Ana mesaj:
> "İşletmenizi geleceğe taşıyan modern, hızlı ve AI-okunabilir dijital altyapılar.
> Next.js + Shopify headless, SEO odaklı, AI destekli."

Farklılaştırıcılar:
- **Headless Next.js + Shopify** (Storefront API / Hydrogen) — saniyenin altında sayfa açılışı
- **SSG/ISR** ile %100 statik önbellek → Google'da hız puanı 90+
- **AI-okunabilir semantik HTML** (Schema.org JSON-LD, doğru heading hiyerarşisi)
- **Teklif bazlı, gizli fiyat** (yüksek kâr marjı, kişisel satış)
- **Aceternity UI 3D bileşenleri** ile öne çıkan, akılda kalan deneyim

---

## 2. Teknoloji Stack

| Katman | Teknoloji |
|---|---|
| Framework | **Next.js 16** (App Router, RSC) |
| React | **React 19** |
| Render | **SSG + ISR** (`generateStaticParams`, `revalidate`) |
| Stil | **Tailwind CSS v4** |
| UI bileşenleri | **Aceternity UI 3D** + kendi komponent seti |
| İkonlar | **lucide-react** |
| 3D | **three.js** + **@react-three/fiber** + **@react-three/drei** |
| Animasyon | **framer-motion** |
| Yardımcılar | `clsx`, `tailwind-merge`, `class-variance-authority` |
| E-ticaret (müşterilere teslim) | **Shopify Storefront API / Hydrogen** |
| Lead / Form | Form → **WhatsApp wa.me** derin linki (backend yok) |
| SEO | `metadata` API, `sitemap.ts`, `robots.ts`, JSON-LD |
| Hosting | **Vercel** |

> Not: Sprinter tanıtım sitesi tamamen statik/ISR + Three.js (client). Shopify entegrasyonu
> **müşterilere teslim ettiğimiz** e-ticaret sitelerinde kullanılacak.

---

## 3. Tasarım Dili

### 3.1 Renk Paleti — "Premium Navy Light"

Light theme only (dark mode yok). Linear / Stripe / Notion / Vercel ilhamı.

```css
--background        : #FFFFFF   /* sayfa zemin */
--background-soft   : #F8FAFC   /* kart/bölüm zemin */
--background-muted  : #F1F5F9   /* vurgu bölümleri */
--foreground        : #0A2540   /* başlıklar — deep navy */
--foreground-strong : #0F172A   /* slate-900 */
--body              : #334155   /* paragraflar — slate-700 */
--muted             : #64748B   /* ikincil metin — slate-500 */
--primary           : #1E293B   /* CTA dolu — slate-800 */
--primary-foreground: #FFFFFF
--accent-from       : #0F172A   /* gradient başlangıç — navy */
--accent-to         : #3B82F6   /* gradient bitiş — blue-500 */
--highlight         : #06B6D4   /* küçük vurgu — cyan-500 */
--border            : #E2E8F0   /* kart/ayraç — slate-200 */
--ring              : #3B82F6
--success           : #10B981
--warning           : #F59E0B
--danger            : #EF4444
```

**Gradient kullanımı:**
- Hero başlık: `from-[#0F172A] via-[#1E40AF] to-[#3B82F6]`
- CTA buton: `from-[#0F172A] to-[#3B82F6]` (Moving Border)
- Kart vurgu: `from-[#0A2540]/5 to-[#3B82F6]/5`

### 3.2 Tipografi

- **Sans (gövde):** **Inter** (Latin Extended, Türkçe uyumlu), Google Fonts
- **Mono (kod):** JetBrains Mono (opsiyonel)
- Font ölçeği:
  - `display-2xl`: 72px / 1.05 / 800 (hero)
  - `display-xl`: 60px / 1.1 / 800
  - `display-lg`: 48px / 1.15 / 700
  - `h1`: 36px / 1.2 / 700
  - `h2`: 28px / 1.25 / 700
  - `h3`: 22px / 1.3 / 600
  - `body-lg`: 18px / 1.6 / 400
  - `body`: 16px / 1.6 / 400
  - `small`: 14px / 1.5 / 400

### 3.3 Stil & Layout

- **Zemin:** beyaz + bölümlerde `#F8FAFC`/`#F1F5F9` soft alternasyon
- **Boşluk:** çok whitespace, section padding `py-24 md:py-32`
- **Yumuşak gölgeler:** `shadow-sm` (kart), `shadow-xl` (hover), `shadow-2xl` (hero)
- **Border radius:** `rounded-2xl` (kart), `rounded-full` (buton), `rounded-xl` (input)
- **Akıcı geçişler:** `transition-all duration-300`
- **Responsive:** mobile-first; breakpoints sm/md/lg/xl/2xl

### 3.4 3D / Animasyon Bileşenleri (Aceternity UI)

| Bileşen | Nerede |
|---|---|
| **Text Generate Effect** | Hero başlığı (kelime kelime belirme) |
| **Background Gradient Animation** | Hero arkaplanı, CTA bölümleri |
| **3D Card Hover Effect** | Hizmet kartları, sektör kartları |
| **Moving Border (buton)** | Tüm birincil CTA'lar (Teklif Al, İletişime Geç) |
| **Globe (Three.js)** | Hero sağ taraf — dönen dünya |
| **Spotlight (mouse takip)** | Hero üzerinde mouse vurgusu |
| **Sparkles** | Vurgu bölümlerinde (örn. AI-okunabilirlik) |
| **Wavy Background** | Bazı section'larda dekoratif |
| **Sticky Scroll Reveal** | Süreç sayfasında aşamalar |
| **Animated Tooltip** | Tooltip'lerde |
| **Lens / Hover Image Compare** | (opsiyonel, portföy bölümünde) |

---

## 4. Sayfa Yapısı (Sitemap)

```
/                              Anasayfa
/hizmetler                     Tüm hizmetler (kategorize grid, 3D Card)
/hizmetler/[slug]              Her hizmet detay (SSG)
/sektorler                     Sektör siteleri overview
/sektorler/[slug]              Her sektör (SSG)
/surec                         Nasıl çalışıyoruz (Sticky Scroll Reveal)
/hakkimizda                    Hikaye, ekip, değerler
/sss                           SSS (FAQPage JSON-LD)
/iletisim                      Form → WhatsApp + iletişim bilgileri
/blog                          (faz 2)
/api/lead                      (opsiyonel — form için endpoint, varsayılan: wa.me)
```

---

## 5. Hizmet & Sektör Veri Modeli

### 5.1 `lib/data/hizmetler.ts` (TypeScript)

```ts
export type HizmetKategori =
  | 'web-eticaret'
  | 'seo-pazarlama'
  | 'ai-otomasyon'
  | 'mobil-marka';

export interface Hizmet {
  slug: string;
  baslik: string;
  kategori: HizmetKategori;
  kisaAciklama: string;       // 1-2 cümle (meta description için de kullanılır)
  ikon: string;                // lucide-react ikon adı
  ozellikler: string[];        // madde madde
  surec: string[];             // "biz nasıl yapıyoruz" adımları
  sss: { soru: string; cevap: string }[];
  ctaMetin: string;
  vurgu?: boolean;             // flagship mi? (örn. e-ticaret-sitesi)
  metaTitle: string;           // ≤60
  metaDescription: string;     // ≤155
  anahtarKelimeler: string[];
}
```

### 5.2 `lib/data/sektorler.ts`

```ts
export interface Sektor {
  slug: string;
  baslik: string;
  ikon: string;
  kisaAciklama: string;
  ozellikler: string[];
  metaTitle: string;
  metaDescription: string;
}
```

### 5.3 SSS verisi (`lib/data/sss.ts`)

Genel SSS + her hizmete özel SSS.

---

## 6. SEO Stratejisi

### 6.1 Hedef Anahtar Kelimeler (Sayfa → Cluster)

| URL | Ana keyword | Long-tail |
|---|---|---|
| `/` | yazılım ajansı | "modern web tasarım ajansı", "headless e-ticaret" |
| `/hizmetler/e-ticaret-sitesi` | e ticaret sitesi kurma | "shopify headless türkiye", "next.js e-ticaret" |
| `/hizmetler/seo-hizmeti` | seo hizmeti | "kurumsal seo ajansı", "e-ticaret seo" |
| `/hizmetler/google-ads-reklam-yonetimi` | google ads yönetimi | "google reklam ajansı" |
| `/hizmetler/meta-reklam-yonetimi` | meta reklam | "facebook instagram reklam" |
| `/hizmetler/whatsapp-otomasyonu` | whatsapp otomasyon | "whatsapp api türkiye" |
| `/hizmetler/online-randevu-sistemi` | online randevu sistemi | "randevu yazılımı" |
| `/hizmetler/mobil-uygulama` | mobil uygulama yaptırma | "ios android uygulama" |
| `/hizmetler/kurumsal-web-sitesi` | kurumsal web tasarım | "kurumsal site kurma" |
| `/sektorler/doktor-klinik` | doktor web sitesi | "klinik randevu sitesi" |
| ... | ... | ... |

### 6.2 Teknik SEO

- Her sayfa: `metadata` export (title ≤60, description ≤155), OpenGraph, Twitter card, canonical
- **JSON-LD**: Organization (global), Service (her hizmet), FAQPage (SSS sayfaları), BreadcrumbList
- `app/sitemap.ts` (tüm dinamik URL'ler otomatik)
- `app/robots.ts`
- Semantik HTML (`<main>`, `<article>`, `<nav>`, doğru `<h1>` → `<h2>` → `<h3>`)
- `alt` metinleri (görsel/ikon), `aria-label` (buton)
- Core Web Vitals: SSG + `next/image` + font `display:swap` + Three.js `dynamic import ssr:false`
- `prefers-reduced-motion` desteği (animasyonları kapat)

### 6.3 AI-Okunabilirlik (GPT/Claude/Google AI Crawler)

- Temiz, hiyerarşik heading yapısı
- Net `<dl>` / tablolar ile özellik listeleri
- Structured data zengin (Service schema her hizmette)
- İçerikte net "ne / nasıl / kim için / ne zaman / neden" cümleleri
- Görsel yerine metin ağırlıklı (görsellerde `alt` zorunlu)

---

## 7. İçerik Yaklaşımı

Her hizmet sayfası için (min. 800-1200 kelime):

1. **Hero** — net değer önerisi + CTA
2. **"X nedir?"** — tanım paragrafı (kim için, ne zaman, neden)
3. **Neden önemli / faydaları** — 3-6 madde
4. **Biz nasıl yapıyoruz** — süreç adımları
5. **Özellikler** — madde madde detaylı
6. **Sıkça sorulan sorular** — 4-6 soru (FAQ schema)
7. **CTA** — WhatsApp teklif formu

---

## 8. Lead / Form Akışı

Form alanları: **Ad Soyad, Firma, Hizmet (select), Telefon, Mesaj**
Submit → `https://wa.me/90${NEXT_PUBLIC_WHATSAPP}?text=${encodedText}`
Telefon numarası: **NEXT_PUBLIC_WHATSAPP=5396540461** (`.env.local`).

Mesaj şablonu:
```
Merhaba Sprinter,
Ad: {ad}
Firma: {firma}
Hizmet: {hizmet}
Telefon: {telefon}
Mesaj: {mesaj}
```

---

## 9. Etik İzlenim Çizgisi

- **Sahte müşteri adı / tarih / sertifika YOK**
- "Yüzlerce müşteri" gibi süslü rakamlar YOK
- Somut metodoloji ve teknoloji derinliği (gerçek farklılaştırıcı)
- Kendinden emin ama mütevazı ton
- "Türkiye'nin en iyisi" gibi iddialı süperlatiflerden kaçınma

---

## 10. Proje Yapısı

```
sprinter-yazilim/
├── app/
│   ├── layout.tsx              # RootLayout (Header + Footer + WhatsApp Float)
│   ├── page.tsx                # Anasayfa
│   ├── globals.css             # Tailwind v4 + CSS değişkenleri
│   ├── hizmetler/
│   │   ├── page.tsx            # Tüm hizmetler
│   │   └── [slug]/page.tsx     # Dinamik (generateStaticParams)
│   ├── sektorler/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── surec/page.tsx
│   ├── hakkimizda/page.tsx
│   ├── sss/page.tsx
│   ├── iletisim/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── whatsapp-float.tsx
│   │   └── section-container.tsx
│   ├── ui/                     # Aceternity-style primitives
│   │   ├── background-gradient.tsx
│   │   ├── card-3d.tsx
│   │   ├── moving-border.tsx
│   │   ├── text-generate.tsx
│   │   ├── spotlight.tsx
│   │   ├── sparkles.tsx
│   │   ├── wavy-background.tsx
│   │   ├── sticky-scroll-reveal.tsx
│   │   ├── animated-tooltip.tsx
│   │   └── button.tsx
│   ├── three/
│   │   └── globe.tsx           # react-three-fiber globe
│   ├── sections/               # Sayfa bölümleri (kompoze)
│   │   ├── hero.tsx
│   │   ├── categories-grid.tsx
│   │   ├── surec-timeline.tsx
│   │   ├── sss-accordion.tsx
│   │   ├── cta-whatsapp.tsx
│   │   └── footer-cta.tsx
│   └── seo/
│       └── json-ld.tsx
├── lib/
│   ├── utils.ts                # cn() ve yardımcılar
│   ├── seo.ts                  # metadata üretici
│   └── data/
│       ├── hizmetler.ts
│       ├── sektorler.ts
│       ├── sss.ts
│       └── surec.ts
├── public/
│   ├── og-image.png
│   └── logo.svg
├── .env.local                  # NEXT_PUBLIC_WHATSAPP=5396540461
├── .env.example
├── next.config.ts
├── tailwind.config.ts          (gerekirse)
├── tsconfig.json
└── PROJECT.md
```

---

## 11. Bağımlılıklar

### Zorunlu (`dependencies`)
- `next@16.x`, `react@19.x`, `react-dom@19.x`
- `tailwindcss@^4`, `@tailwindcss/postcss@^4`
- `framer-motion@^11`
- `three`, `@react-three/fiber`, `@react-three/drei`
- `lucide-react`
- `clsx`, `tailwind-merge`, `class-variance-authority`
- `react-icons` (sosyal medya ikonları için)

### Dev
- `typescript@^5`, `@types/node`, `@types/react`, `@types/react-dom`, `@types/three`
- `eslint`, `eslint-config-next`

---

## 12. Launch Checklist

- [ ] Dependencies yüklü
- [ ] `globals.css` palet + Tailwind v4 direktifi
- [ ] Layout (Header + Footer + WhatsApp Float)
- [ ] Anasayfa (Hero + Kategoriler + Süreç + SSS + CTA)
- [ ] `/hizmetler` + `/hizmetler/[slug]` (20 sayfa SSG)
- [ ] `/sektorler` + `/sektorler/[slug]` (10 sayfa SSG)
- [ ] `/hakkimizda`, `/surec`, `/sss`, `/iletisim`
- [ ] `sitemap.ts`, `robots.ts`
- [ ] JSON-LD (Organization, Service, FAQPage, BreadcrumbList)
- [ ] `.env.example` + `.env.local`
- [ ] `npm run build` ✅
- [ ] `npm run lint` ✅
- [ ] Local test (`npm run dev` → tarayıcıda gez)
- [ ] Vercel deploy

---

## 13. İletişim (env)

```bash
NEXT_PUBLIC_WHATSAPP=5396540461
NEXT_PUBLIC_SITE_URL=https://sprinteryazilim.com  # (ileride)
NEXT_PUBLIC_BRAND_EMAIL=hello@sprinteryazilim.com   # (ileride)
```