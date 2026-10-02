import { ServiceIcon } from "@/components/Icons";
import type { IconName } from "@/content/site";

/**
 * Barra logo abaixo da dobra: quatro promessas objetivas, separadas por
 * divisórias. Corta as principais objeções antes que o visitante role.
 */
const itens: { icon: IconName; title: string; note: string }[] = [
  { icon: "shield", title: "Orçamento antes", note: "Você aprova, aí a gente executa" },
  { icon: "stamp", title: "Garantia por escrito", note: "90 dias em peça e mão de obra" },
  { icon: "piston", title: "Peças novas", note: "Marcas reconhecidas, com nota" },
  { icon: "clock", title: "Serviço no dia", note: "Manutenção rápida sem deixar o carro" },
];

export function FeatureBar() {
  return (
    <>
      <div className="stripe-hazard h-2.5" aria-hidden />

      <div className="border-b border-ink-800 bg-ink-900">
        <ul className="container-page grid divide-ink-800 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {itens.map((item) => (
            <li key={item.title} className="flex items-center gap-3.5 px-1 py-5 sm:px-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                <ServiceIcon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.95rem] font-bold text-chalk">{item.title}</p>
                <p className="text-[0.82rem] text-slate-soft">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
