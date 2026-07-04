import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: "section" | "div" | "article" | "main";
  id?: string;
}

export function SectionContainer({ children, className, size = "default", as: Tag = "section", id }: SectionContainerProps) {
  const sizeMap = { narrow: "max-w-5xl", default: "max-w-7xl", wide: "max-w-[88rem]" };
  return (
    <Tag id={id} className={cn("relative w-full", className)}>
      <div className={cn("mx-auto w-full px-5 md:px-8", sizeMap[size])}>{children}</div>
    </Tag>
  );
}