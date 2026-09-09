"use client";

import { useState, type FormEvent } from "react";
import { business, services } from "@/content/site";
import { trackLead, type LeadSource } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/Icons";

/**
 * Formulário de orçamento. Sem backend: monta a mensagem e abre a
 * conversa no WhatsApp já preenchida — zero infraestrutura e resposta
 * imediata, que é onde o lead de tráfego pago realmente converte.
 *
 * Usado na primeira dobra (captura antes de rolar) e novamente no meio
 * da página, para quem só decide depois de ler tudo.
 */
export function LeadForm({
  source,
  title = "Peça seu orçamento grátis",
  subtitle = "Respondemos pelo WhatsApp no horário comercial.",
}: {
  source: LeadSource;
  title?: string;
  subtitle?: string;
}) {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const mensagem = [
      "Olá! Vim pelo site da América Auto Center e quero um orçamento.",
      "",
      `Nome: ${data.get("nome")}`,
      `WhatsApp: ${data.get("telefone") || "não informado"}`,
      `Serviço: ${data.get("servico")}`,
      `Veículo: ${data.get("modelo") || "não informado"} ${data.get("ano") || ""}`.trim(),
      data.get("observacoes") ? `\nObservações: ${data.get("observacoes")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    trackLead("formulario", source);
    setEnviado(true);

    window.open(
      `https://wa.me/${business.phone.raw}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const rotulo =
    "mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[0.11em] text-slate-soft";
  const campo =
    "h-12 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 text-[0.95rem] text-chalk transition-colors duration-200 placeholder:text-slate-soft/60 focus:border-brand-500 focus:bg-ink-850";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-700 bg-ink-850/90 p-6 backdrop-blur-sm sm:p-7"
    >
      <h2 className="text-[1.35rem] text-chalk">{title}</h2>
      <p className="mt-1 text-[0.88rem] text-mist">{subtitle}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={rotulo}>Nome completo</span>
          <input
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Ex: João da Silva"
            className={campo}
          />
        </label>

        <label className="block">
          <span className={rotulo}>WhatsApp</span>
          <input
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(66) 9 9999-9999"
            className={campo}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={rotulo}>Tipo de serviço</span>
          <select name="servico" required defaultValue="" className={campo}>
            <option value="" disabled>
              Selecione o serviço...
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Não sei / preciso de diagnóstico">
              Não sei — preciso de um diagnóstico
            </option>
          </select>
        </label>

        <label className="block">
          <span className={rotulo}>Modelo do carro</span>
          <input name="modelo" type="text" placeholder="Ex: Hilux, HB20..." className={campo} />
        </label>

        <label className="block">
          <span className={rotulo}>Ano</span>
          <input
            name="ano"
            type="text"
            inputMode="numeric"
            placeholder="Ex: 2021"
            className={campo}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={rotulo}>Observações (opcional)</span>
          <input
            name="observacoes"
            type="text"
            placeholder="Algum detalhe extra..."
            className={campo}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-brand-500 text-[1rem] font-bold text-white transition-colors duration-200 hover:bg-brand-400 active:translate-y-px"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Enviar pelo WhatsApp
      </button>

      <p aria-live="polite" className="mt-3 min-h-5 text-center text-[0.78rem] text-slate-soft">
        {enviado
          ? "Conversa aberta no WhatsApp. Se não abriu, libere o bloqueador de pop-ups."
          : "Seus dados são usados apenas para contato."}
      </p>
    </form>
  );
}
