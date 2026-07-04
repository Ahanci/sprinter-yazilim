"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number;
  density?: number;
  speed?: number;
  color?: string;
  opacity?: number;
}

export function Sparkles({
  className,
  size = 1.2,
  minSize = 0.6,
  density = 80,
  speed = 1.2,
  color = "#3B82F6",
  opacity = 0.7,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let particles: Array<{ x: number; y: number; size: number; speed: number; opacity: number; phase: number }> = [];

    const initParticles = () => {
      particles = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: minSize + Math.random() * (size - minSize),
          speed: 0.3 + Math.random() * speed,
          opacity: 0,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const h = canvas.offsetHeight;

      for (const p of particles) {
        p.opacity = (Math.sin(t * 0.001 * p.speed + p.phase) + 1) / 2;
        p.y -= p.speed * 0.15;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity * opacity;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [size, minSize, density, speed, color, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    />
  );
}