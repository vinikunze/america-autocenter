"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/hooks";

/**
 * Envolve qualquer bloco com a animação de entrada por scroll.
 * `delay` escalona itens de uma mesma grade (stagger).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
