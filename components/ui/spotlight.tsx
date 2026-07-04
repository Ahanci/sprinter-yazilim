"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

/**
 * Aceternity-style spotlight. Mouse takip eden radial gradient vurgu.
 * Koyu tema için tasarlanmış, bizim açık temada opacity düşük tutulur.
 */
export function Spotlight({ children, className }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white",
        className,
      )}
    >
      {/* Spotlight radial gradient — açık temada subtle */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.08), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}