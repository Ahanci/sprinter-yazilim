import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Card3D } from "@/components/ui/card-3d";
import type { Hizmet } from "@/lib/data/hizmetler";
import { cn } from "@/lib/utils";

interface HizmetCardProps {
  hizmet: Hizmet;
  variant?: "default" | "compact";
}

export function HizmetCard({ hizmet, variant = "default" }: HizmetCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[hizmet.ikon] ?? Icons.Sparkles;

  return (
    <Card3D containerClassName="h-full" className="h-full">
      <Link href={`/hizmetler/${hizmet.slug}`} className="group flex flex-col h-full p-6 md:p-7">
        <div className="flex items-start justify-between mb-5">
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", "bg-gradient-to-br from-slate-900 via-blue-800 to-blue-600", "text-white shadow-lg shadow-blue-500/20", "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3")}>
            <Icon className="h-6 w-6" strokeWidth={2.2} />
          </div>
          {hizmet.vurgu && (
            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">⭐ Flagship</span>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-to)] transition-colors">{hizmet.baslik}</h3>
        <p className={cn("text-sm text-[var(--body)] leading-relaxed mb-5", variant === "default" ? "line-clamp-3" : "line-clamp-2")}>
          {hizmet.kisaAciklama}
        </p>

        {variant === "default" && (
          <ul className="space-y-1.5 mb-5">
            {hizmet.ozellikler.slice(0, 3).map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--body)]">
                <span className="mt-1 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center text-sm font-semibold text-[var(--accent-to)] group-hover:gap-2 transition-all">
          Detayları İncele
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </Card3D>
  );
}