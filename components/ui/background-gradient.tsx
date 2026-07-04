"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundGradient({ className, children }: BackgroundGradientProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-white [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]", className)}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(99,102,241,0.22), transparent 55%)",
            "radial-gradient(circle at 50% 50%, rgba(30,64,175,0.18), transparent 60%)",
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 50%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            "radial-gradient(circle at 70% 30%, rgba(6,182,212,0.10), transparent 40%)",
            "radial-gradient(circle at 30% 70%, rgba(30,64,175,0.10), transparent 45%)",
            "radial-gradient(circle at 70% 30%, rgba(6,182,212,0.10), transparent 40%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}