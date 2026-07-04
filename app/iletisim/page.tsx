import { buildMetadata } from "@/lib/seo/metadata";
import { LeadForm } from "@/components/sections/lead-form";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { formatPhoneTR, getWhatsAppNumber } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "İletişim & Teklif Al",
  description: "Sprinter ile iletişime geçin. Ücretsiz 30 dakikalık keşif görüşmesi için form doldurun veya WhatsApp'tan yazın. 24 saat içinde dönüş garantisi.",
  path: "/iletisim",
  keywords: ["sprinter iletişim", "yazılım teklif al", "web sitesi teklif"],
});

export default function IletisimPage() {
  const wa = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent("Merhaba Sprinter, teklif almak istiyorum.")}`;

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">İLETİŞİM</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              Projenizi <span className="text-gradient">konuşalım</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--body)] leading-relaxed">
              Ücretsiz 30 dakikalık keşif görüşmesi için formu doldurun veya doğrudan WhatsApp&apos;tan yazın. Teklif 24 saat içinde.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <LeadForm />
            </div>
            <div className="lg:col-span-2 space-y-5">
              <IletisimKart icon={MessageCircle} baslik="WhatsApp" icerik={formatPhoneTR(getWhatsAppNumber())} link={wa} linkText="WhatsApp'tan Yaz →" gradient="from-emerald-500 to-emerald-700" />
              <IletisimKart icon={Mail} baslik="E-posta" icerik={SITE.email} link={`mailto:${SITE.email}`} linkText="E-posta Gönder →" gradient="from-blue-500 to-indigo-600" />
              <IletisimKart icon={MapPin} baslik="Konum" icerik={`${SITE.address.city}, Türkiye`} link={null} linkText="Uzaktan + yerinde çalışma" gradient="from-slate-700 to-slate-900" />

              <div className="rounded-2xl border border-[var(--border)] p-6 bg-[var(--background-soft)]">
                <h3 className="font-bold text-[var(--foreground)] mb-3">Çalışma Saatleri</h3>
                <ul className="space-y-1.5 text-sm text-[var(--body)]">
                  <li className="flex justify-between"><span>Pazartesi - Cuma</span><span className="font-semibold">09:00 - 18:00</span></li>
                  <li className="flex justify-between"><span>Cumartesi</span><span className="font-semibold">10:00 - 14:00</span></li>
                  <li className="flex justify-between"><span>Pazar</span><span className="text-[var(--muted)]">Kapalı</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function IletisimKart({ icon: Icon, baslik, icerik, link, linkText, gradient }: { icon: typeof MessageCircle; baslik: string; icerik: string; link: string | null; linkText: string; gradient: string }) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Wrapper {...(wrapperProps as Record<string, string>)} className={`block rounded-2xl border border-[var(--border)] p-6 bg-white transition-all ${link ? "hover:shadow-xl hover:border-slate-300 cursor-pointer" : ""}`}>
      <div className="flex items-start gap-4">
        <div className={`h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-lg`}>
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[var(--foreground)] mb-1">{baslik}</h3>
          <p className="text-sm text-[var(--body)] mb-2 break-words">{icerik}</p>
          {link ? <p className="text-xs font-semibold text-[var(--accent-to)]">{linkText}</p> : <p className="text-xs text-[var(--muted)]">{linkText}</p>}
        </div>
      </div>
    </Wrapper>
  );
}