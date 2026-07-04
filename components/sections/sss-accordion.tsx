import { Accordion } from "@/components/ui/accordion";
import type { SSSEtiket } from "@/lib/data/hizmetler";

interface SSSSectionProps {
  baslik?: string;
  altBaslik?: string;
  items: SSSEtiket[];
  id?: string;
}

export function SSSSection({
  baslik = "Sıkça Sorulan Sorular",
  altBaslik = "En çok merak edilen konular hakkında net cevaplar.",
  items,
  id = "sss",
}: SSSSectionProps) {
  return (
    <section id={id} className="py-20 md:py-28 bg-[var(--background-soft)]">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">SSS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">{baslik}</h2>
          {altBaslik && <p className="mt-3 text-base md:text-lg text-[var(--body)]">{altBaslik}</p>}
        </div>
        <Accordion items={items} className="rounded-2xl bg-white border border-[var(--border)] p-2 md:p-4 shadow-sm" />
      </div>
    </section>
  );
}