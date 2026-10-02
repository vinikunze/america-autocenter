import { basePath } from "@/content/site";

/**
 * Prefixa um caminho de `public/` com o basePath do deploy.
 *
 * O Next só aplica o basePath automaticamente no que passa pelos
 * helpers dele (metadata, next/image, next/link). Uma tag <img> escrita
 * à mão aponta para a raiz do domínio — o que quebra em qualquer deploy
 * servido de subdiretório, como uma página de projeto do GitHub Pages.
 *
 * Por isso todo caminho de imagem do site passa por aqui. Os caminhos
 * ficam limpos em `site.ts` ("/fotos/fachada.jpg") e o prefixo é
 * aplicado no momento de renderizar.
 */
export function asset(path: string): string {
  if (!path) return path;
  // Caminho absoluto externo (http, data:) não leva prefixo.
  if (/^[a-z]+:/i.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
