import { services } from "@/content/site";
import { ServiceIcon, ArrowIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeader
        eyebrow="O que fazemos"
        title={
          <>
            Um endereço só para <span className="text-accent">tudo que o seu carro precisa</span>
          </>
        }
        description="Da peça ao serviço executado. Você não precisa rodar a cidade atrás de três fornecedores diferentes para resolver um problema só."
      />

      {/*
        Sete serviços mais o bloco de chamada, que ocupa duas colunas:
        a grade de três fecha exata, sem buraco na última linha.
      */}
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.id} delay={(i % 3) * 80}>
            <article className="surface-card group relative flex h-full flex-col p-7 transition-colors duration-300 hover:border-amber-500/60">
              {/* Barra de acento no topo, como faixa pintada na bancada. */}
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />

              <span className="flex h-14 w-14 items-center justify-center border-2 border-ink-700 bg-ink-950 text-brand-500 transition-colors duration-300 group-hover:border-amber-500 group-hover:text-amber-400">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>

              <h3 className="mt-6 font-display text-[1.45rem] font-bold text-chalk">
                {service.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.94rem] leading-relaxed text-mist">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="border border-ink-700 bg-ink-950 px-2.5 py-1 text-[0.74rem] font-medium uppercase tracking-wide text-slate-soft"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal as="li" delay={160} className="sm:col-span-2">
          <div className="relative flex h-full flex-col justify-center overflow-hidden border-2 border-ink-700 bg-ink-900 p-8">
            <div className="bg-plate absolute inset-0 opacity-60" aria-hidden />
            <div className="stripe-hazard absolute inset-y-0 left-0 w-2.5" aria-hidden />

            <div className="relative pl-4">
              <h3 className="font-display text-[1.6rem] font-bold text-chalk">
                Não achou o que precisa?
              </h3>
              <p className="mt-2 max-w-md text-[0.96rem] leading-relaxed text-mist">
                Descreva o problema no WhatsApp. Se for serviço que a gente faz,
                já sai o orçamento; se não for, indicamos quem faz direito.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <WhatsAppButton source="servicos" label="Falar com a equipe" />
                <ArrowIcon className="hidden h-5 w-5 text-slate-soft sm:block" />
              </div>
            </div>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}
