"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Sparkles as SparklesBg } from "@/components/ui/sparkles";
import { MovingBorder } from "@/components/ui/moving-border";

const Globe = dynamic(
  () => import("@/components/three/globe").then((m) => m.Globe),
  { ssr: false },
);

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <BackgroundGradient />
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol: Metin */}
          <div>
            {/* Rozet */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Next.js 16 · React 19 · Shopify Headless
            </motion.div>

            {/* Başlık */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[var(--foreground)]">
              <TextGenerateEffect
                words="İşletmenizi geleceğe taşıyan"
                className="text-[var(--foreground)]"
              />
              <span className="block mt-2 text-gradient">
                modern dijital altyapılar
              </span>
            </h1>

            {/* Açıklama */}
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-xl">
              Kurumsal web siteleri, Next.js + Shopify headless e-ticaret, SEO
              odaklı içerik ve AI destekli otomasyon. Saniyenin altında açılan,
              Google'da üst sıralarda yer alan, AI-okunabilir altyapılar.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <MovingBorder
                as="a"
                href="/iletisim"
                borderRadius="9999px"
                duration={3000}
                containerClassName="h-14"
                className="text-base px-8 py-4"
              >
                <span className="flex items-center gap-2 text-[var(--foreground)]">
                  Ücretsiz Keşif Görüşmesi
                  <ArrowRight className="h-4 w-4" />
                </span>
              </MovingBorder>

              <Link
                href="/hizmetler"
                className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent-to)] px-4 py-3 inline-flex items-center gap-1.5 group"
              >
                Hizmetleri İncele
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Güven sinyalleri */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                SEO skoru 90+ garantili
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                1 saniyenin altında açılış
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                AI-okunabilir semantik HTML
              </div>
            </div>
          </div>

          {/* Sağ: Globe */}
          <div className="relative h-[360px] md:h-[480px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30 border border-[var(--border)] overflow-hidden shadow-xl">
              <SparklesBg density={50} size={1.2} color="#3B82F6" opacity={0.6} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe />
              </div>
              {/* Köşe rozetler */}
              <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                Next.js
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                Shopify
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                AI Ready
              </div>
              <div className="absolute bottom-4 right-4 rounded-full bg-white/90 backdrop-blur border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                SEO 90+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}