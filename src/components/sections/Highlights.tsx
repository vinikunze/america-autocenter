import { highlights } from "@/content/site";
import { Reveal } from "@/components/Reveal";

/** Quatro promessas objetivas, logo abaixo da dobra — reduz objeção cedo. */
export function Highlights() {
  return (
    <div className="container-page -mt-4 py-16 sm:py-20">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal
            key={item.value}
            delay={i * 90}
            className="flex flex-col gap-2 bg-ink-950 p-7 transition-colors duration-500 hover:bg-ink-900"
          >
            <span className="font-display text-[1.55rem] font-extrabold leading-none tracking-tight text-chalk">
              {item.value}
            </span>
            <span className="text-[0.88rem] leading-relaxed text-slate-soft">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
