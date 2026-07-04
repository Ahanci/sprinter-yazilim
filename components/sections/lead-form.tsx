"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { HIZMETLER } from "@/lib/data/hizmetler";
import { buildLeadMessage, whatsappLink, getWhatsAppNumber } from "@/lib/utils";

export function LeadForm() {
  const [form, setForm] = useState({ ad: "", firma: "", hizmet: "", telefon: "", mesaj: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const message = buildLeadMessage(form);
    const link = whatsappLink(getWhatsAppNumber(), message);
    window.setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
      setStatus("success");
    }, 500);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm((p) => ({ ...p, [key]: e.target.value }));

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200 p-8 md:p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Mesajınız WhatsApp'a yönlendirildi</h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto">
          WhatsApp penceresinde "Gönder"e basmanız yeterli. Sprinter ekibi 24 saat içinde dönüş yapacaktır.
        </p>
        <button type="button" onClick={() => { setStatus("idle"); setForm({ ad: "", firma: "", hizmet: "", telefon: "", mesaj: "" }); }} className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-900 underline">
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-[var(--border)] shadow-xl shadow-slate-900/5 p-6 md:p-8 space-y-5">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">Teklif Al</h3>
        <p className="mt-1 text-sm text-[var(--body)]">Formu doldurun, WhatsApp üzerinden iletişime geçelim.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ad" className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Ad Soyad <span className="text-red-500">*</span></label>
          <input id="ad" required type="text" value={form.ad} onChange={update("ad")} className="w-full h-11 rounded-lg border border-[var(--border)] bg-white px-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-to)] focus:ring-2 focus:ring-blue-100 focus:outline-none transition" placeholder="Örn: Ayşe Yılmaz" />
        </div>
        <div>
          <label htmlFor="firma" className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Firma / Marka <span className="text-red-500">*</span></label>
          <input id="firma" required type="text" value={form.firma} onChange={update("firma")} className="w-full h-11 rounded-lg border border-[var(--border)] bg-white px-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-to)] focus:ring-2 focus:ring-blue-100 focus:outline-none transition" placeholder="Örn: Yılmaz Butik" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hizmet" className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Hizmet <span className="text-red-500">*</span></label>
          <select id="hizmet" required value={form.hizmet} onChange={update("hizmet")} className="w-full h-11 rounded-lg border border-[var(--border)] bg-white px-3 text-sm text-[var(--foreground)] focus:border-[var(--accent-to)] focus:ring-2 focus:ring-blue-100 focus:outline-none transition">
            <option value="">Seçiniz…</option>
            {HIZMETLER.map((h) => (
              <option key={h.slug} value={h.baslik}>{h.baslik}</option>
            ))}
            <option value="Diğer / Danışmanlık">Diğer / Danışmanlık</option>
          </select>
        </div>
        <div>
          <label htmlFor="telefon" className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Telefon <span className="text-red-500">*</span></label>
          <input id="telefon" required type="tel" value={form.telefon} onChange={update("telefon")} className="w-full h-11 rounded-lg border border-[var(--border)] bg-white px-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-to)] focus:ring-2 focus:ring-blue-100 focus:outline-none transition" placeholder="0539 123 45 67" />
        </div>
      </div>

      <div>
        <label htmlFor="mesaj" className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">Mesajınız</label>
        <textarea id="mesaj" rows={4} value={form.mesaj} onChange={update("mesaj")} className="w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-to)] focus:ring-2 focus:ring-blue-100 focus:outline-none transition resize-none" placeholder="Projeniz, hedefleriniz, özel istekleriniz…" />
      </div>

      <button type="submit" disabled={status === "sending"} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] hover:bg-[var(--foreground-strong)] disabled:opacity-70 text-white font-bold text-sm h-12 px-6 shadow-lg shadow-slate-900/10 transition-all">
        {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Yönlendiriliyor…</> : <><Send className="h-4 w-4" /> WhatsApp ile Gönder</>}
      </button>

      <p className="text-xs text-[var(--muted)] text-center">Bu form WhatsApp'a yönlendirir. Verileriniz sunucumuzda saklanmaz.</p>
    </form>
  );
}