import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/** Rótulo pequeno que abre cada seção — cria ritmo e hierarquia. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-amber-400">
      <span className="h-3.5 w-1 bg-brand-500" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-[clamp(2.2rem,5.2vw,3.6rem)] font-extrabold text-chalk">
        {title}
      </h2>
      {description ? (
        <p className="text-[1.05rem] leading-relaxed text-mist">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </section>
  );
}
