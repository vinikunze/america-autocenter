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
    "bg-brand-500 text-white shadow-[0_10px_30px_-10px_rgba(238,59,50,0.85)] hover:bg-brand-400 hover:shadow-[0_16px_40px_-12px_rgba(238,59,50,0.9)] active:translate-y-px",
  outline:
    "border border-white/15 bg-white/[0.03] text-chalk backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.07]",
  ghost: "text-mist hover:text-chalk",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9rem]",
  lg: "h-13 px-7 text-[0.97rem]",
};

const shell =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2";

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
