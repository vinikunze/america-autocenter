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
    "bg-brand-500 text-white shadow-[0_10px_28px_-12px_rgba(224,31,45,0.8)] hover:bg-brand-400 active:translate-y-px",
  outline:
    "border border-ink-600 bg-ink-900/60 text-chalk hover:border-brand-500 hover:text-brand-400",
  ghost: "text-mist hover:text-chalk",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.92rem]",
  lg: "h-13 px-7 text-[1rem]",
};

const shell =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl font-bold tracking-tight transition-all duration-200 focus-visible:outline-2";

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
