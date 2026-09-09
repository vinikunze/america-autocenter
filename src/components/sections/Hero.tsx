import { WhatsAppButton, CallButton } from "@/components/CTA";
import { PinIcon, WrenchIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { business } from "@/content/site";

const trustRow = [
  "Orçamento aprovado antes do serviço",
  "Peças novas com nota fiscal",
  "Garantia de 90 dias por escrito",
];

export function Hero() {
  return (
    <section
      id="topo"
      className="bg-grain relative isolate overflow-hidden pb-16 pt-[calc(var(--header-h)+2.5rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+4rem)]"
    >
      {/* --------------------- Camadas de fundo --------------------- */}
      <div className="bg-plate absolute inset-0 -z-20 opacity-70" />
      <div className="bg-bay absolute inset-0 -z-20 [mask-image:radial-gradient(80%_65%_at_50%_10%,#000_10%,transparent_78%)]" />
      <div className="glow-shop absolute inset-x-0 -top-32 -z-20 h-[34rem]" />

      {/* Fita de sinalização no topo, como faixa de área técnica. */}
      <div className="stripe-hazard absolute inset-x-0 top-0 -z-10 h-1.5 opacity-80" aria-hidden />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        {/* --------------------------- Copy --------------------------- */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 border-2 border-ink-700 bg-ink-900 px-3 py-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-mist">
              <PinIcon className="h-4 w-4 text-brand-500" />
              {business.address.street} — {business.city}/{business.state}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.9rem,8.2vw,5.1rem)] font-extrabold text-chalk">
              Seu carro nas mãos de quem{" "}
              <span className="text-accent">explica antes de cobrar</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-[1.08rem] leading-relaxed text-mist">
              Auto center completo em {business.city}: peças novas, serviço bem
              feito e o valor fechado no seu WhatsApp{" "}
              <strong className="font-semibold text-chalk">antes</strong> de
              qualquer reparo começar.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                source="hero"
                size="lg"
                label="Pedir orçamento"
                className="w-full sm:w-auto"
              />
              <CallButton source="hero" size="lg" className="w-full sm:w-auto" />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-col gap-2.5 border-t-2 border-ink-800 pt-7">
              {trustRow.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.95rem] text-mist">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-signal/15 text-signal">
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

        {/* ------------------- Emblema estampado ------------------- */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[24rem] lg:max-w-none">
          <div className="relative aspect-square w-full">
            {/* Anel tracejado — único elemento em movimento, bem lento. */}
            <svg
              viewBox="0 0 400 400"
              className="animate-rotate-slow absolute inset-0 h-full w-full"
              aria-hidden
            >
              <circle
                cx="200" cy="200" r="192"
                fill="none" stroke="#3a3330" strokeWidth="2"
                strokeDasharray="3 14" strokeLinecap="round"
              />
            </svg>

            {/* Selo: anéis, rebites e texto curvo. */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                {/*
                  Dois arcos separados. O de baixo usa sweep-flag 0 para que
                  as letras fiquem em pé — com um arco só, a metade inferior
                  sai de cabeça para baixo.
                */}
                <path id="arco-topo" d="M 44,200 a 156,156 0 0 1 312,0" />
                <path id="arco-base" d="M 56,200 a 144,144 0 0 0 288,0" />
              </defs>

              <circle cx="200" cy="200" r="176" fill="none" stroke="#3a3330" strokeWidth="2" />
              <circle cx="200" cy="200" r="132" fill="none" stroke="#4d4441" strokeWidth="1.5" />

              <text
                className="font-display"
                fill="#b0a69e"
                fontSize="30"
                fontWeight="700"
                letterSpacing="6"
                textAnchor="middle"
              >
                <textPath href="#arco-topo" startOffset="50%">
                  AMÉRICA AUTO CENTER
                </textPath>
              </text>
              <text
                className="font-display"
                fill="#837872"
                fontSize="22"
                fontWeight="600"
                letterSpacing="5"
                textAnchor="middle"
              >
                <textPath href="#arco-base" startOffset="50%">
                  SINOP · MATO GROSSO
                </textPath>
              </text>

              {/* Losangos onde os dois arcos se encontram. */}
              <rect x="34" y="194" width="12" height="12" fill="#d9342a" transform="rotate(45 40 200)" />
              <rect x="354" y="194" width="12" height="12" fill="#d9342a" transform="rotate(45 360 200)" />

              {/* Rebites do anel interno. */}
              {Array.from({ length: 16 }).map((_, i) => (
                <circle
                  key={i}
                  cx="200" cy="52" r="3.4"
                  fill="#4d4441"
                  transform={`rotate(${i * 22.5} 200 200)`}
                />
              ))}
            </svg>

            {/* Disco central */}
            <div className="absolute inset-[26%] flex flex-col items-center justify-center overflow-hidden rounded-full border-4 border-ink-700 bg-ink-900">
              <div className="bg-plate absolute inset-0 opacity-70" aria-hidden />
              <div className="absolute inset-2 rounded-full border border-amber-500/30" aria-hidden />

              <WrenchIcon className="relative h-12 w-12 text-brand-500 sm:h-14 sm:w-14" />
              <span className="relative mt-2 font-display text-[1.6rem] font-extrabold uppercase leading-none tracking-wide text-chalk sm:text-[1.9rem]">
                América
              </span>
              <span className="relative mt-1 text-[0.58rem] font-bold uppercase tracking-[0.32em] text-amber-400">
                Auto Center
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
