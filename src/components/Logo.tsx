/**
 * Logotipo oficial da América Auto Center.
 *
 * `logo-escuro.png` é a variante para fundo escuro: o cinza original
 * (#6c7577) do contorno do carro e do "AUTO CENTER" tem contraste baixo
 * demais sobre o preto do site, então nessa versão ele é clareado. O
 * vermelho da marca fica intacto nas duas. `logo.png` mantém as cores
 * originais, para uso sobre fundo claro.
 */
export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  /** "dark" = para fundo escuro. "light" = cores originais. */
  variant?: "dark" | "light";
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={variant === "dark" ? "/marca/logo-escuro.png" : "/marca/logo.png"}
      alt="América Auto Center"
      width={520}
      height={261}
      className={`h-11 w-auto ${className}`}
    />
  );
}
