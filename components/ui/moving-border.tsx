"use client";

import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  borderRadius?: string;
  duration?: number;
  containerClassName?: string;
  borderClassName?: string;
  as?: "button" | "a";
  href?: string;
}

/**
 * Aceternity-style moving border (dönen ışık çerçevesi).
 * Conic gradient + CSS @property animation ile döner.
 */
export function MovingBorder({
  children,
  borderRadius = "1.75rem",
  duration = 2500,
  containerClassName,
  borderClassName,
  className,
  as = "button",
  href,
  ...props
}: MovingBorderProps) {
  const Component: "button" | "a" = as;

  return (
    <Component
      {...(props as Record<string, unknown>)}
      href={as === "a" ? href : undefined}
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden bg-transparent p-[1.5px] text-sm font-semibold",
        containerClassName,
      )}
      style={{ borderRadius }}
    >
      {/* Dönen border katmanı */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 1px)` }}
      >
        <div
          className={cn(
            "absolute inset-[-200%] animate-[spin_var(--duration)_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,theme(colors.blue.500)_360deg)]",
            borderClassName,
          )}
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>

      {/* İç yüzey */}
      <div
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center gap-2 bg-white text-[var(--foreground)] backdrop-blur-3xl",
          "px-6 py-3 rounded-[calc(1.75rem*1px)]",
          "hover:bg-slate-50 transition-colors",
          className,
        )}
        style={{ borderRadius: `calc(${borderRadius} * 1px)` }}
      >
        {children}
      </div>
    </Component>
  );
}