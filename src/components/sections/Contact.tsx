import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { ArrowIcon } from "@/components/Icons";

/**
 * Segunda chance de conversão, para quem só decide depois de ler a
 * página inteira. Reaproveita o mesmo formulário da primeira dobra —
 * um componente só, dois pontos de captura.
 */
export function Contact() {
  return (
    <Section id="orcamento" className="overflow-hidden">
      <div className="glow-shop absolute inset-x-0 top-0 -z-10 h-72 opacity-70" aria-hidden />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Orçamento sem compromisso"
            title={
              <>
                Conte o que está acontecendo{" "}
                <span className="text-accent">e a gente resolve</span>
              </>
            }
            description="Preencha em 30 segundos. A mensagem chega organizada no nosso WhatsApp e a resposta sai no horário comercial."
          />

          <Reveal delay={140} className="mt-10 flex flex-col gap-4">
            {[
              "Você não paga nada para receber o diagnóstico.",
              "Nenhuma peça é trocada sem a sua autorização.",
              "Se não for com a gente, você leva o orçamento e compara.",
            ].map((line) => (
              <p key={line} className="flex gap-3 text-[0.95rem] leading-relaxed text-mist">
                <ArrowIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {line}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120}>
          <LeadForm
            source="contato"
            title="Peça seu orçamento grátis"
            subtitle="Sem compromisso e sem pegadinha."
          />
        </Reveal>
      </div>
    </Section>
  );
}
