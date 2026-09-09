import { faq } from "@/content/site";
import { PlusIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

/**
 * Acordeão construído com <details>/<summary> nativos: acessível por
 * teclado e leitores de tela, indexável pelo Google e com zero JS.
 */
export function Faq() {
  return (
    <Section id="duvidas">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Antes de você perguntar"
            description="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp — respondemos em minutos no horário comercial."
          />
          <Reveal delay={120} className="mt-8">
            <WhatsAppButton source="servicos" label="Tirar minha dúvida" variant="outline" />
          </Reveal>
        </div>

        <ul className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <Reveal as="li" key={item.question} delay={i * 60}>
              <details className="surface-card group overflow-hidden rounded-2xl transition-colors duration-400 open:border-white/15 hover:border-white/15">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[1rem] font-bold leading-snug tracking-tight text-chalk sm:text-[1.05rem]">
                    {item.question}
                  </h3>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 text-mist transition-all duration-400 group-open:rotate-45 group-open:border-brand-500/50 group-open:bg-brand-500/10 group-open:text-brand-400">
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[0.94rem] leading-relaxed text-mist">
                  {item.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
