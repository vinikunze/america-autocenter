import type { SVGProps } from "react";
import type { IconName } from "@/content/site";

type Props = SVGProps<SVGSVGElement>;

/**
 * Ícones desenhados à mão em stroke de 1.5px para manter o traço
 * coerente em todo o site. Inline = zero requisição extra.
 */
const base: Props = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Icon = {
  gear: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .32 1.77l.06.06a1.9 1.9 0 1 1-2.7 2.7l-.05-.06a1.6 1.6 0 0 0-1.78-.32 1.6 1.6 0 0 0-.97 1.47V21a1.9 1.9 0 1 1-3.8 0v-.1a1.6 1.6 0 0 0-1.05-1.46 1.6 1.6 0 0 0-1.77.32l-.06.06a1.9 1.9 0 1 1-2.7-2.7l.06-.06a1.6 1.6 0 0 0 .32-1.77 1.6 1.6 0 0 0-1.47-.97H3a1.9 1.9 0 1 1 0-3.8h.1a1.6 1.6 0 0 0 1.46-1.05 1.6 1.6 0 0 0-.32-1.77l-.06-.06a1.9 1.9 0 1 1 2.7-2.7l.06.06a1.6 1.6 0 0 0 1.77.32H9a1.6 1.6 0 0 0 .97-1.47V3a1.9 1.9 0 1 1 3.8 0v.1a1.6 1.6 0 0 0 .97 1.47 1.6 1.6 0 0 0 1.77-.32l.06-.06a1.9 1.9 0 1 1 2.7 2.7l-.06.06a1.6 1.6 0 0 0-.32 1.77V9a1.6 1.6 0 0 0 1.47.97H21a1.9 1.9 0 1 1 0 3.8h-.1a1.6 1.6 0 0 0-1.47.97z" />
    </svg>
  ),
  check: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M9 11.5 11.5 14 15.5 9" />
      <path d="M12 2.75 4.5 5.6v5.6c0 4.5 3.1 8.7 7.5 10.05 4.4-1.35 7.5-5.55 7.5-10.05V5.6z" />
    </svg>
  ),
  droplet: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.7s6 6.2 6 10.1a6 6 0 0 1-12 0C6 8.9 12 2.7 12 2.7Z" />
      <path d="M9 13.4a3 3 0 0 0 3 3" />
    </svg>
  ),
  disc: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  spring: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M6 3h12M6 21h12" />
      <path d="M7 6h10l-10 3h10l-10 3h10l-10 3h10" />
    </svg>
  ),
  target: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 1.8v3.4M12 18.8v3.4M1.8 12h3.4M18.8 12h3.4" />
    </svg>
  ),
  bolt: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M13.3 2 4.6 13.1h6.2L10.1 22l8.7-11.1h-6.2z" />
    </svg>
  ),
  snow: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2v20M2.9 7l18.2 10M21.1 7 2.9 17" />
      <path d="M12 6.2 9.6 4M12 6.2 14.4 4M12 17.8 9.6 20M12 17.8l2.4 2.2" />
    </svg>
  ),
  shield: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.7 4.6 5.5v5.8c0 4.5 3.1 8.7 7.4 10 4.3-1.3 7.4-5.5 7.4-10V5.5z" />
      <path d="M9.2 12.1 11.3 14.2l3.6-4.1" />
    </svg>
  ),
  camera: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3.5 8.5h3l1.6-2.4h6.8l1.6 2.4h3a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-16A1.5 1.5 0 0 1 2 18V10a1.5 1.5 0 0 1 1.5-1.5Z" />
      <circle cx="12" cy="13.6" r="3.4" />
    </svg>
  ),
  badge: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="9.3" r="6.3" />
      <path d="m8.4 14.6-1.3 6.4 4.9-2.6 4.9 2.6-1.3-6.4" />
    </svg>
  ),
  circle: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <circle cx="12" cy="12" r="4.6" />
      <path d="M12 2.8v4.6M12 16.6v4.6M2.8 12h4.6M16.6 12h4.6" />
    </svg>
  ),
  clock: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2" />
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
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
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
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
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
