"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/CTA";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { useScrolled, useScrollLock } from "@/lib/hooks";
import { telUrl, whatsappUrl } from "@/lib/links";
import { business } from "@/content/site";
import { trackLead } from "@/lib/analytics";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#local", label: "Localização" },
];

export function Header() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-ink-800 bg-ink-950/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
          <a href="#topo" aria-label="América Auto Center — início" className="shrink-0">
            <Logo className="h-11 sm:h-13" />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative whitespace-nowrap rounded-lg px-3 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.05em] text-mist transition-colors duration-200 hover:text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telUrl}
              onClick={() => trackLead("telefone", "header")}
              className="hidden items-center gap-2 whitespace-nowrap px-3 py-2 text-[0.9rem] font-bold text-chalk transition-colors hover:text-brand-400 lg:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone.display}
            </a>

            {/* Pílula completa a partir de sm; no mobile vira botão de ícone
                para não disputar espaço com a marca e o menu. */}
            <span className="hidden sm:contents">
              <WhatsAppButton source="header" label="Orçamento" />
            </span>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead("whatsapp", "header")}
              aria-label="Falar no WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_10px_28px_-14px_rgba(224,31,45,0.9)] transition-colors hover:bg-brand-400 sm:hidden"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-chalk transition-colors hover:border-brand-500 lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------- Menu mobile em tela cheia -------------------- */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink-950/85 backdrop-blur-md transition-opacity duration-400 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 origin-top bg-ink-900 px-5 pb-8 pt-5 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo className="h-10" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 text-chalk"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Navegação mobile" className="mt-8">
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-ink-800 last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{ transitionDelay: `${open ? 60 + i * 45 : 0}ms` }}
                    className={`flex items-center justify-between py-4 text-[1.4rem] font-extrabold tracking-tight text-chalk transition-all duration-500 ${
                      open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                    }`}
                  >
                    {item.label}
                    <span className="text-sm font-bold text-brand-500">
                      0{i + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <WhatsAppButton source="header" size="lg" label="Pedir orçamento agora" />
            <a
              href={telUrl}
              onClick={() => trackLead("telefone", "header")}
              className="flex h-13 items-center justify-center gap-2 rounded-xl border border-ink-600 text-[1rem] font-bold text-chalk"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone.display}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
