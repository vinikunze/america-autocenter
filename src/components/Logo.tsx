import type { SVGProps } from "react";

/**
 * Marca provisória: monograma "A" em escudo, construído em SVG para
 * ficar nítido em qualquer densidade de tela e pesar ~1 KB.
 * ⚠️ Substituir pelo logotipo oficial quando o cliente enviar o arquivo.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <defs>
        <linearGradient id="lg-mark" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#ff6a5e" />
          <stop offset="60%" stopColor="#ee3b32" />
          <stop offset="100%" stopColor="#a81d18" />
        </linearGradient>
      </defs>
      <path
        d="M20 1.8 36.5 7.6v12.1c0 8.7-6.6 16.6-16.5 18.5C10.1 36.3 3.5 28.4 3.5 19.7V7.6Z"
        fill="url(#lg-mark)"
      />
      <path
        d="M20 10.5 27.8 28h-4.3l-1.35-3.35h-4.3L16.5 28h-4.3Zm0 6.9-1.4 3.6h2.8Z"
        fill="#08090b"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.98rem] font-extrabold tracking-tight text-chalk">
          AMÉRICA
        </span>
        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-slate-soft">
          Auto Center
        </span>
      </span>
    </span>
  );
}
