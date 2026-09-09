import { WhatsAppButton, CallButton } from "@/components/CTA";
import { LogoMark } from "@/components/Logo";
import { Icon, PinIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { business } from "@/content/site";

const trustRow = [
  "Orçamento aprovado antes do serviço",
  "Peças novas com nota fiscal",
  "Garantia de 90 dias por escrito",
];

/** Chips que orbitam o hub central — resumem a oferta em 1 segundo. */
const orbit = [
  { icon: "disc" as const, label: "Freios", pos: "left-0 top-10", delay: "0s" },
  { icon: "spring" as const, label: "Suspensão", pos: "right-0 top-2", delay: "1.2s" },
  { icon: "bolt" as const, label: "Elétrica", pos: "left-2 bottom-12", delay: "2.4s" },
  { icon: "target" as const, label: "Alinhamento", pos: "right-2 bottom-4", delay: "3.6s" },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="bg-noise relative isolate overflow-hidden pb-16 pt-[calc(var(--header-h)+2.5rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+4.5rem)]"
    >
      {/* ----------------------- Camadas de fundo ----------------------- */}
      <div className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(78%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="glow-brand absolute inset-x-0 -top-40 -z-20 h-[38rem] opacity-70" />
      <div className="absolute left-1/2 top-0 -z-20 h-px w-[min(90%,60rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* --------------------------- Copy --------------------------- */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.74rem] font-medium text-mist backdrop-blur-sm">
              <PinIcon className="h-3.5 w-3.5 text-brand-400" />
              {business.address.street} — {business.city}/{business.state}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.35rem)] font-extrabold leading-[0.98] text-chalk">
              Seu carro nas mãos de quem{" "}
              <span className="text-gradient">explica antes de cobrar.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-[1.06rem] leading-relaxed text-mist">
              Centro automotivo completo em {business.city}: peças novas, serviço
              feito com diagnóstico honesto e o valor fechado no seu WhatsApp{" "}
              <strong className="font-semibold text-chalk">antes</strong> de
              qualquer reparo começar.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                source="hero"
                size="lg"
                label="Pedir orçamento no WhatsApp"
                className="w-full sm:w-auto"
              />
              <CallButton source="hero" size="lg" className="w-full sm:w-auto" />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-col gap-2.5 border-t border-white/[0.07] pt-7">
              {trustRow.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[0.92rem] text-mist">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/12 text-signal">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="m5 12.5 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ------------------- Composição visual (hub) ------------------- */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <div className="relative aspect-square w-full">
            {/* Anéis concêntricos */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <linearGradient id="ring-a" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff6a5e" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#ee3b32" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ee3b32" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="core" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#ee3b32" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#ee3b32" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="200" cy="200" r="150" fill="url(#core)" />
              <circle cx="200" cy="200" r="188" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
              <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
              <circle cx="200" cy="200" r="112" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />

              {/* Arco de acento — sugere movimento/rotação */}
              <circle
                cx="200" cy="200" r="188"
                stroke="url(#ring-a)" strokeWidth="2" fill="none"
                strokeLinecap="round" strokeDasharray="300 881"
                transform="rotate(-115 200 200)"
              />
              <circle
                cx="200" cy="200" r="150"
                stroke="url(#ring-a)" strokeWidth="1.5" fill="none"
                strokeLinecap="round" strokeDasharray="150 793" opacity="0.6"
                transform="rotate(70 200 200)"
              />
            </svg>

            {/* Marcações tipo tacômetro — repeating-conic-gradient no lugar
                de 48 nós SVG: mesmo resultado, HTML muito mais leve. */}
            <div aria-hidden className="tick-ring absolute inset-0" />

            {/* Núcleo com a marca */}
            <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28%] border border-white/10 bg-ink-900/70 backdrop-blur-xl">
              <LogoMark className="h-[52%] w-[52%] drop-shadow-[0_8px_24px_rgba(238,59,50,0.5)]" />
            </div>

            {/* Chips orbitais */}
            {orbit.map((chip) => {
              const Ico = Icon[chip.icon];
              return (
                <div
                  key={chip.label}
                  style={{ animationDelay: chip.delay }}
                  className={`animate-float-slow surface-card absolute ${chip.pos} flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)]`}
                >
                  <Ico className="h-4 w-4 text-brand-400" />
                  <span className="text-[0.8rem] font-semibold text-chalk">{chip.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
