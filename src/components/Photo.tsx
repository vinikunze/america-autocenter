import type { Photo as PhotoData } from "@/content/site";
import { WrenchIcon } from "@/components/Icons";
import { asset } from "@/lib/asset";

/**
 * Espaço de foto do layout.
 *
 * Enquanto `src` estiver vazio em `src/content/site.ts`, renderiza um
 * bloco gráfico no lugar — o layout nunca quebra e nada aparece como
 * imagem faltando. Basta preencher o caminho no config para a foto real
 * entrar, sem tocar em componente nenhum.
 */
export function Photo({
  photo,
  ratio = "4/3",
  className = "",
  rounded = "rounded-2xl",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  tone = "dark",
}: {
  photo: PhotoData;
  ratio?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
  /** Tom do bloco de espera, para acompanhar a seção em volta. */
  tone?: "dark" | "light";
}) {
  const temFoto = photo.src.length > 0;

  return (
    <figure
      className={`relative overflow-hidden ${rounded} border ${
        tone === "light" ? "border-[color:var(--color-paper-line)]" : "border-ink-700"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {temFoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(photo.src)}
          alt={photo.alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className={`${
            tone === "light" ? "photo-fallback-light" : "photo-fallback"
          } flex h-full w-full items-center justify-center`}
        >
          <WrenchIcon
            className={`h-1/5 w-1/5 max-h-14 max-w-14 ${
              tone === "light" ? "text-brand-500/25" : "text-brand-500/35"
            }`}
          />
        </div>
      )}

      {photo.caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent p-4 pt-10">
          <p className="text-[0.95rem] font-bold text-chalk">{photo.caption}</p>
          {photo.legend ? (
            <p className="text-[0.82rem] text-mist">{photo.legend}</p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
