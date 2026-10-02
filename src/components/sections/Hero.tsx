import { business, socialProof } from "@/content/site";
import { LeadForm } from "@/components/LeadForm";
import { StarIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

/** Itens da barra de prova social — some quando não há valor preenchido. */
const proofVisivel = socialProof.filter((item) => item.value.length > 0);

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden pb-14 pt-[calc(var(--header-h)+2rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+3rem)]"
    >
      <div className="bg-mesh absolute inset-0 -z-20 [mask-image:radial-gradient(75%_60%_at_50%_0%,#000_10%,transparent_78%)]" />
      <div className="glow-shop absolute inset-x-0 -top-32 -z-20 h-[32rem]" />

      <div className="container-page grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* --------------------------- Copy --------------------------- */}
        <div className="lg:pt-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/80 px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-mist">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
              Auto center em {business.city}/{business.state}
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-5 text-[clamp(2.3rem,5.6vw,3.7rem)] text-chalk">
              Seu carro nas mãos de quem{" "}
              <span className="text-accent">explica antes de cobrar.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-mist">
              Alinhamento, freios, suspensão, escapamento e revisão em{" "}
              {business.city}. Você recebe o valor fechado no seu WhatsApp{" "}
              <strong className="font-semibold text-chalk">antes</strong> da
              gente encostar no carro.
            </p>
          </Reveal>

          {proofVisivel.length > 0 ? (
            <Reveal delay={210}>
              <ul className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                {proofVisivel.map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    {item.kind === "rating" ? (
                      <span className="flex gap-0.5 text-brand-500" aria-hidden>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon key={i} className="h-3.5 w-3.5" />
                        ))}
                      </span>
                    ) : null}
                    <span className="text-[0.95rem] font-bold text-chalk">{item.value}</span>
                    <span className="text-[0.9rem] text-mist">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={260}>
            <ul className="mt-7 flex flex-col gap-2.5 border-t border-ink-800 pt-6">
              {[
                "Orçamento aprovado antes do serviço",
                "Peças novas com nota fiscal",
                "Foto do antes e depois, e a peça velha na sua mão",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[0.95rem] text-mist">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="m5 12.5 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ------------- Formulário na primeira dobra ------------- */}
        <Reveal delay={120}>
          <LeadForm source="hero" />
        </Reveal>
      </div>
    </section>
  );
}
