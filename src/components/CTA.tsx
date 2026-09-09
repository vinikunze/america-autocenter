"use client";

import type { ReactNode } from "react";
import { trackLead, type LeadChannel, type LeadSource } from "@/lib/analytics";
import { WhatsAppIcon, PhoneIcon } from "@/components/Icons";
import { whatsappUrl, telUrl } from "@/lib/links";
import { business } from "@/content/site";

type Variant = "primary" | "ghost" | "outline";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white border-b-[3px] border-brand-700 hover:bg-brand-400 active:translate-y-[2px] active:border-b-[1px]",
  outline:
    "border-2 border-ink-600 bg-ink-850 text-chalk hover:border-amber-500 hover:text-amber-400",
  ghost: "text-mist hover:text-chalk",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.88rem]",
  lg: "h-13 px-7 text-[0.98rem]",
};

/**
 * Botão com aresta viva e borda inferior mais grossa: sugere chapa
 * pintada e dá o feedback físico de "afundar" no clique.
 */
const shell =
  "group inline-flex items-center justify-center gap-2.5 rounded-[3px] font-bold uppercase tracking-[0.06em] transition-all duration-200 focus-visible:outline-2";

/** Botão-âncora genérico com rastreamento de conversão embutido. */
export function ActionLink({
  href,
  channel,
  source,
  variant = "primary",
  size = "md",
  className = "",
  external = true,
  children,
}: {
  href: string;
  channel: LeadChannel;
  source: LeadSource;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => trackLead(channel, source)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${shell} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

/** CTA principal do site. Toda a receita passa por aqui. */
export function WhatsAppButton({
  source,
  label = "Falar no WhatsApp",
  size = "md",
  className = "",
  variant = "primary",
}: {
  source: LeadSource;
  label?: string;
  size?: Size;
  className?: string;
  variant?: Variant;
}) {
  return (
    <ActionLink
      href={whatsappUrl()}
      channel="whatsapp"
      source={source}
      variant={variant}
      size={size}
      className={className}
    >
      <WhatsAppIcon className="h-[1.15em] w-[1.15em] shrink-0" />
      {label}
    </ActionLink>
  );
}

export function CallButton({
  source,
  size = "md",
  className = "",
  variant = "outline",
}: {
  source: LeadSource;
  size?: Size;
  className?: string;
  variant?: Variant;
}) {
  return (
    <ActionLink
      href={telUrl}
      channel="telefone"
      source={source}
      variant={variant}
      size={size}
      external={false}
      className={className}
    >
      <PhoneIcon className="h-[1.05em] w-[1.05em] shrink-0" />
      {business.phone.display}
    </ActionLink>
  );
}
