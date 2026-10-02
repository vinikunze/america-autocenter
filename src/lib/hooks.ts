"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Revela um elemento quando ele entra na viewport.
 * Substitui bibliotecas de animação (Framer/GSAP) por ~15 linhas e
 * zero KB de dependência — decisivo para o LCP em 4G de Sinop.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; once?: boolean },
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem suporte a IntersectionObserver: mostra tudo imediatamente.
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-reveal", "in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.setAttribute("data-reveal", "");
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}

/** true assim que a página rola além de `offset` px. */
export function useScrolled(offset = 12): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

/** Trava o scroll do body (usado pelo menu mobile). */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
