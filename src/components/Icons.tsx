import type { SVGProps } from "react";
import type { IconName } from "@/content/site";

type Props = SVGProps<SVGSVGElement>;

/**
 * Ícones de oficina, desenhados à mão em stroke de 2px — traço mais
 * encorpado que o padrão minimalista, para combinar com a linguagem de
 * ferramenta e placa. Inline = zero requisição extra.
 */
const base: Props = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Icon = {
  /** Pistão — peças e acessórios. */
  piston: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="5" y="2.6" width="14" height="7.2" rx="1.2" />
      <path d="M6.8 12.2h10.4M6.8 14.8h10.4" />
      <path d="M9.2 9.8v1.6M14.8 9.8v1.6" />
      <path d="M12 14.8v3.4" />
      <circle cx="12" cy="20" r="1.9" />
    </svg>
  ),
  /** Prancheta com visto — revisão preventiva. */
  clipboard: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M8.4 4.2H6.6A1.6 1.6 0 0 0 5 5.8v13.6a1.6 1.6 0 0 0 1.6 1.6h10.8a1.6 1.6 0 0 0 1.6-1.6V5.8a1.6 1.6 0 0 0-1.6-1.6h-1.8" />
      <rect x="8.4" y="2.4" width="7.2" height="3.6" rx="1.1" />
      <path d="m8.8 13.4 2.2 2.2 4.2-4.4" />
    </svg>
  ),
  /** Galão de óleo — troca de óleo e filtros. */
  oil: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M4.4 9.4h9.2a1.4 1.4 0 0 1 1.4 1.4v8a1.4 1.4 0 0 1-1.4 1.4H4.4A1.4 1.4 0 0 1 3 18.8v-8a1.4 1.4 0 0 1 1.4-1.4Z" />
      <path d="M6.6 9.4V7.2h4.8v2.2" />
      <path d="M15 12.4h3.4l2.6-4.2" />
      <path d="M19.4 4.6v3.6" />
    </svg>
  ),
  /** Disco de freio com pinça — freios. */
  brake: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="11" cy="12" r="8.2" />
      <circle cx="11" cy="12" r="3" />
      <path d="M11 3.8v2.4M11 17.8v2.4M2.8 12h2.4M16.8 12h2.4" />
      <path d="M18.6 7.4a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2" />
    </svg>
  ),
  /** Amortecedor — suspensão e direção. */
  shock: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.4v3.2M12 18.4v3.2" />
      <circle cx="12" cy="2.4" r="0.1" />
      <path d="M8.6 5.6h6.8M8.6 18.4h6.8" />
      <path d="M9 8.2h6l-6 2.4h6l-6 2.4h6l-6 2.4h6" />
    </svg>
  ),
  /** Volante — alinhamento e balanceamento. */
  steering: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 3.4v5.8M4.2 15.4l5.4-2.2M19.8 15.4l-5.4-2.2" />
    </svg>
  ),
  /** Pneu com banda de rodagem — pneus e borracharia. */
  tire: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3.2v3.4M12 17.4v3.4M3.2 12h3.4M17.4 12h3.4" />
      <path d="m5.8 5.8 2.4 2.4M18.2 18.2l-2.4-2.4M18.2 5.8l-2.4 2.4M5.8 18.2l2.4-2.4" />
    </svg>
  ),
  /** Escudo com visto — orçamento antes, sempre. */
  shield: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.4 4.2 5.4v5.9c0 4.7 3.2 9 7.8 10.3 4.6-1.3 7.8-5.6 7.8-10.3V5.4z" />
      <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
    </svg>
  ),
  /** Câmera — fotos do antes e depois. */
  camera: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3.4 8.2h3.2l1.7-2.4h7.4l1.7 2.4h3.2a1.4 1.4 0 0 1 1.4 1.4v8.4a1.4 1.4 0 0 1-1.4 1.4H3.4A1.4 1.4 0 0 1 2 18V9.6a1.4 1.4 0 0 1 1.4-1.4Z" />
      <circle cx="12" cy="13.6" r="3.6" />
    </svg>
  ),
  /** Carimbo em documento — garantia por escrito. */
  stamp: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M6 2.8h8l4 4v14.4H6z" />
      <path d="M13.6 2.8v4.4H18" />
      <circle cx="12" cy="14.6" r="3.2" />
      <path d="m10.6 14.6 1 1 1.8-2" />
    </svg>
  ),
  /** Relógio — agilidade. */
  clock: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.6V12l3.6 2.2" />
    </svg>
  ),
} satisfies Record<IconName, (p: Props) => React.ReactElement>;

export function ServiceIcon({ name, ...rest }: Props & { name: IconName }) {
  const Cmp = Icon[name];
  return <Cmp {...rest} />;
}

/* ------------------------- Ícones de interface ------------------------- */

export const WhatsAppIcon = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.25-8.22a8.22 8.22 0 0 1 .01 16.44Z" />
  </svg>
);

export const PhoneIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M21 16.9v2.4a1.6 1.6 0 0 1-1.75 1.6 15.9 15.9 0 0 1-6.93-2.47 15.6 15.6 0 0 1-4.8-4.8A15.9 15.9 0 0 1 5.05 6.7 1.6 1.6 0 0 1 6.64 5H9a1.6 1.6 0 0 1 1.6 1.38c.1.77.29 1.52.56 2.24a1.6 1.6 0 0 1-.36 1.69l-1.02 1.01a12.8 12.8 0 0 0 4.8 4.8l1.01-1.01a1.6 1.6 0 0 1 1.69-.36c.72.27 1.47.46 2.24.56A1.6 1.6 0 0 1 21 16.9Z" />
  </svg>
);

export const InstagramIcon = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const PinIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M20 10.4c0 5.4-8 12.1-8 12.1s-8-6.7-8-12.1a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.2" r="2.9" />
  </svg>
);

export const MailIcon = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const ArrowIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const PlusIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const StarIcon = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.44l-5.8 3.06 1.1-6.47-4.7-4.58 6.5-.95z" />
  </svg>
);

export const MenuIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/** Chave de boca — usada no emblema do hero. */
export const WrenchIcon = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M20.3 5.4a5.6 5.6 0 0 1-7.1 7.1l-6.4 6.4a2.2 2.2 0 0 1-3.1-3.1l6.4-6.4a5.6 5.6 0 0 1 7.1-7.1l-3 3 .3 2.8 2.8.3z" />
  </svg>
);
