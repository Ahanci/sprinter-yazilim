import Link from "next/link";
import { Building2, Globe, MessageCircle, Users } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/data/site";
import { HIZMETLER } from "@/lib/data/hizmetler";

export function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1120] to-[#020617] text-slate-200">
      {/* Üst accent çizgisi */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Marka + açıklama */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-extrabold text-xl">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-white">Sprinter</span>
                <span className="text-[11px] font-semibold text-slate-400 tracking-[0.18em] uppercase mt-1">Yazılım</span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-slate-300 leading-relaxed max-w-sm">
              {SITE.tagline} Next.js + Shopify headless, SEO odaklı, AI destekli.
            </p>

            {/* Sosyal */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${SITE.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-emerald-500 border border-slate-700 hover:border-emerald-400 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-slate-200" />
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 border border-slate-700 hover:border-pink-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Globe className="h-4 w-4 text-slate-200" />
              </a>
              <a
                href={`https://facebook.com/${SITE.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-blue-600 border border-slate-700 hover:border-blue-400 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Globe className="h-4 w-4 text-slate-200" />
              </a>
              <a
                href={`https://linkedin.com/company/${SITE.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-sky-600 border border-slate-700 hover:border-sky-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Users className="h-4 w-4 text-slate-200" />
              </a>
            </div>
          </div>

          {/* Sayfalar */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Sayfalar</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Hizmetler</h4>
            <ul className="space-y-2.5">
              {HIZMETLER.slice(0, 6).map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/hizmetler/${h.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Building2 className="h-3.5 w-3.5 text-blue-400" />
                    {h.baslik}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sektörler + Özel */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Çözümler</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/e-ticaret" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-base leading-none">🛒</span>
                  E-Ticaret Çözümleri
                </Link>
              </li>
              <li>
                <Link href="/sektorler" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Tüm Sektörler →
                </Link>
              </li>
              <li>
                <Link href="/sektorler/doktor-klinik" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Doktor & Klinik
                </Link>
              </li>
              <li>
                <Link href="/sektorler/otel" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Otel & Konaklama
                </Link>
              </li>
              <li>
                <Link href="/sektorler/emlak" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Emlak & Gayrimenkul
                </Link>
              </li>
              <li>
                <Link href="/sektorler/restoran" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Restoran & Kafe
                </Link>
              </li>
              <li>
                <Link href="/sektorler/butik" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Butik & Moda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© {yil} {SITE.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-5">
            <Link href="/iletisim" className="text-xs text-slate-300 hover:text-white transition-colors">
              İletişim
            </Link>
            <Link href="/sss" className="text-xs text-slate-300 hover:text-white transition-colors">
              SSS
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="text-xs text-slate-300 hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}