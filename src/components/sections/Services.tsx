import { services } from "@/content/site";
import { ServiceIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

export function Services() {
  return (
    <Section id="servicos">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="O que fazemos"
          title={
            <>
              Um endereço só para{" "}
              <span className="text-gradient">tudo que o seu carro precisa</span>
            </>
          }
          description="Da peça ao serviço executado. Você não precisa rodar a cidade atrás de três fornecedores diferentes para resolver um problema só."
        />
        <Reveal delay={120}>
          <WhatsAppButton source="servicos" label="Consultar meu caso" variant="outline" />
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.id} delay={(i % 3) * 90}>
            <article className="surface-card group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand-500/35">
              {/* Brilho que segue o hover — detalhe premium discreto */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/0 blur-3xl transition-all duration-700 group-hover:bg-brand-500/20" />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-400 transition-colors duration-500 group-hover:border-brand-500/40 group-hover:bg-brand-500/10">
                <ServiceIcon name={service.icon} className="h-[1.4rem] w-[1.4rem]" />
              </span>

              <h3 className="relative mt-6 font-display text-[1.16rem] font-bold tracking-tight text-chalk">
                {service.title}
              </h3>
              <p className="relative mt-2.5 text-[0.92rem] leading-relaxed text-mist">
                {service.description}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-1.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.72rem] font-medium text-slate-soft"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
