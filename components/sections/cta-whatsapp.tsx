import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppNumber } from "@/lib/utils";

interface CTAWhatsAppProps {
  baslik?: string;
  altBaslik?: string;
  mesaj?: string;
}

export function CTAWhatsApp({
  baslik = "Projenizi konuşalım",
  altBaslik = "Ücretsiz 30 dakikalık keşif görüşmesinde işletmenizin ihtiyaçlarını birlikte analiz edelim. Teklif 24 saat içinde.",
  mesaj,
}: CTAWhatsAppProps) {
  const waMessage = mesaj ?? "Merhaba Sprinter, ücretsiz keşif görüşmesi için randevu almak istiyorum.";
  const wa = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.3), transparent 50%)",
      }} />
      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        {/* CTA — büyük ve görünür */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base h-14 px-8 shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Ücretsiz Keşif Görüşmesi
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-base h-14 px-8 shadow-xl transition-all hover:scale-105"
          >
            Direkt Bize Ulaşın
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Ücretsiz · 30 dk · Yazılı teklif
        </div>

        <p className="mt-8 text-xs text-white/70">KVKK uyumlu · Verileriniz sadece size ulaşmak için kullanılır</p>
      </div>
    </section>
  );
}