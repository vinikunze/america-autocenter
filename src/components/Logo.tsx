import type { SVGProps } from "react";

/**
 * Marca provisória: monograma "A" em escudo, construído em SVG para
 * ficar nítido em qualquer densidade de tela e pesar ~1 KB.
 * ⚠️ Substituir pelo logotipo oficial quando o cliente enviar o arquivo.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <path
        d="M20 1.8 36.5 7.6v12.1c0 8.7-6.6 16.6-16.5 18.5C10.1 36.3 3.5 28.4 3.5 19.7V7.6Z"
        fill="#d9342a"
      />
      <path
        d="M20 4.6 33.7 9.4v10.3c0 7.2-5.5 13.8-13.7 15.4C11.8 33.5 6.3 26.9 6.3 19.7V9.4Z"
        fill="none"
        stroke="#f4efe9"
        strokeOpacity="0.28"
        strokeWidth="1.1"
      />
      <path
        d="M20 10.5 27.8 28h-4.3l-1.35-3.35h-4.3L16.5 28h-4.3Zm0 6.9-1.4 3.6h2.8Z"
        fill="#121010"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-extrabold uppercase leading-none tracking-wide text-chalk">
          América
        </span>
        <span className="mt-0.5 text-[0.56rem] font-bold uppercase tracking-[0.3em] text-amber-400">
          Auto Center
        </span>
      </span>
    </span>
  );
}
