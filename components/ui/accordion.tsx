"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  soru: string;
  cevap: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("w-full divide-y divide-[var(--border)]", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--accent-to)]"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-semibold text-[var(--foreground)]">
                {item.soru}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-300",
                  isOpen && "rotate-180 text-[var(--accent-to)]",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-[var(--body)] leading-relaxed">{item.cevap}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export type { AccordionItem as AccordionItemType };