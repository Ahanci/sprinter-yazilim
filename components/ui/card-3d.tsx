"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Aceternity-style 3D Card. Mouse ile takip eden 3D tilt + parıltı.
 * Client component; motion framer-motion ile yapılır.
 */
export function Card3D({
  children,
  className,
  containerClassName,
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !innerRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    innerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    innerRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex items-center justify-center",
        containerClassName,
      )}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={innerRef}
        className={cn(
          "relative rounded-2xl bg-white border border-[var(--border)] shadow-xl transition-transform duration-200 ease-out",
          "hover:shadow-2xl hover:border-slate-300",
          className,
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}