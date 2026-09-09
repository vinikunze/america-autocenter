const items = [
  "Peças e acessórios",
  "Troca de óleo",
  "Freios",
  "Suspensão",
  "Alinhamento 3D",
  "Balanceamento",
  "Revisão preventiva",
  "Pneus e borracharia",
  "Peças com nota fiscal",
];

/**
 * Faixa contínua com o mix de serviços. Comunica amplitude de oferta
 * sem ocupar uma seção inteira — e ancora palavras-chave para SEO.
 */
export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-800 bg-ink-900 py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex w-max animate-marquee items-center" aria-hidden>
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center">
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-slate-soft"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Versão acessível/indexável do conteúdo da faixa. */}
      <p className="sr-only">
        Serviços da América Auto Center: {items.join(", ")}.
      </p>
    </div>
  );
}
