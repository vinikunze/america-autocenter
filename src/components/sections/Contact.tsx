"use client";

import { useState, type FormEvent } from "react";
import { business, services } from "@/content/site";
import { trackLead } from "@/lib/analytics";
import { WhatsAppIcon, ArrowIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * Formulário sem backend: monta a mensagem e abre a conversa no
 * WhatsApp já preenchida. Zero infraestrutura, zero custo de servidor
 * e resposta imediata — o canal onde o lead realmente converte.
 */
export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const message = [
      "Olá! Vim pelo site da América Auto Center.",
      "",
      `Nome: ${data.get("nome")}`,
      `Veículo: ${data.get("veiculo") || "não informado"}`,
      `Serviço: ${data.get("servico")}`,
      data.get("mensagem") ? `\nDetalhes: ${data.get("mensagem")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    trackLead("formulario", "contato");
    setSent(true);

    window.open(
      `https://wa.me/${business.phone.raw}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const field =
    "h-12 w-full rounded-xl border border-white/[0.09] bg-ink-950/60 px-4 text-[0.94rem] text-chalk placeholder:text-slate-soft/70 transition-colors duration-300 focus:border-brand-500/60 focus:bg-ink-950";

  return (
    <Section id="orcamento" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand-600/12 blur-[110px]"
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Orçamento sem compromisso"
            title={
              <>
                Conte o que está acontecendo.{" "}
                <span className="text-gradient">A gente resolve.</span>
              </>
            }
            description="Preencha em 30 segundos. A mensagem já chega organizada no nosso WhatsApp e a resposta sai no horário comercial."
          />

          <Reveal delay={140} className="mt-10 flex flex-col gap-4">
            {[
              "Você não paga nada para receber o diagnóstico.",
              "Nenhuma peça é trocada sem a sua autorização.",
              "Se não for com a gente, você leva o orçamento e compara.",
            ].map((line) => (
              <p key={line} className="flex gap-3 text-[0.92rem] leading-relaxed text-mist">
                <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                {line}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="surface-card rounded-3xl p-6 sm:p-8"
            noValidate={false}
          >
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[0.8rem] font-semibold text-mist">Seu nome *</span>
                <input
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  className={field}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[0.8rem] font-semibold text-mist">
                  Veículo (marca, modelo e ano)
                </span>
                <input
                  name="veiculo"
                  type="text"
                  placeholder="Ex.: Hilux 2019"
                  className={field}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[0.8rem] font-semibold text-mist">
                  Do que você precisa? *
                </span>
                <select name="servico" required defaultValue="" className={field}>
                  <option value="" disabled>
                    Selecione um serviço
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Não sei / preciso de um diagnóstico">
                    Não sei — preciso de um diagnóstico
                  </option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[0.8rem] font-semibold text-mist">
                  Descreva o problema
                </span>
                <textarea
                  name="mensagem"
                  rows={3}
                  placeholder="Ex.: barulho na suspensão ao passar em lombada"
                  className="w-full resize-none rounded-xl border border-white/[0.09] bg-ink-950/60 px-4 py-3 text-[0.94rem] text-chalk placeholder:text-slate-soft/70 transition-colors duration-300 focus:border-brand-500/60 focus:bg-ink-950"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-brand-500 px-7 text-[0.97rem] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(238,59,50,0.85)] transition-all duration-300 hover:bg-brand-400 active:translate-y-px"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enviar pelo WhatsApp
              </button>

              <p aria-live="polite" className="min-h-5 text-center text-[0.8rem] text-slate-soft">
                {sent
                  ? "Conversa aberta no WhatsApp. Se não abriu, verifique o bloqueador de pop-ups."
                  : "Seus dados vão direto para o nosso WhatsApp. Não enviamos spam."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
