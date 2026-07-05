"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { getWhatsAppWaMe, cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const wa = `https://wa.me/${getWhatsAppWaMe()}?text=${encodeURIComponent("Merhaba Sprinter, web sitenizden yazıyorum. Detaylı bilgi almak istiyorum.")}`;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişim" className={cn("fixed bottom-6 right-6 z-40 group", "transition-all duration-500", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
        <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl shadow-emerald-500/30 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        </div>
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden md:block whitespace-nowrap rounded-full bg-[var(--foreground-strong)] text-white text-xs font-medium px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Hızlıca WhatsApp'tan yaz →
        </span>
      </div>
    </a>
  );
}