import { highlights } from "@/content/site";
import { Reveal } from "@/components/Reveal";

/** Quatro promessas objetivas, logo abaixo da dobra — reduz objeção cedo. */
export function Highlights() {
  return (
    <div className="container-page -mt-4 py-16 sm:py-20">
      <div className="grid gap-px overflow-hidden border-2 border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal
            key={item.value}
            delay={i * 90}
            className="relative flex flex-col gap-2 bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-900"
          >
            <span className="absolute right-5 top-4 bay-number text-[2.4rem] leading-none">
              0{i + 1}
            </span>
            <span className="relative font-display text-[1.75rem] font-extrabold uppercase leading-none text-amber-400">
              {item.value}
            </span>
            <span className="relative text-[0.9rem] leading-relaxed text-slate-soft">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
