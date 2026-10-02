import { copyFile, access, readFile, writeFile, readdir } from "node:fs/promises";
import { join, extname } from "node:path";

/**
 * Ajuste do card de OpenGraph após o `next build`.
 *
 * O Next gera o card em `out/opengraph-image` — sem extensão e com a URL
 * `/opengraph-image?<hash>`. Hospedagens estáticas simples (GitHub Pages
 * entre elas) servem arquivo sem extensão como application/octet-stream,
 * e aí o WhatsApp e o Facebook não renderizam a prévia do link.
 *
 * Este passo publica o mesmo conteúdo em `out/og.png` e reescreve as
 * referências no HTML. A imagem continua sendo gerada a partir de
 * `src/content/site.ts`, então telefone e endereço no card nunca ficam
 * dessincronizados do site.
 */

const out = join(process.cwd(), "out");
const origem = join(out, "opengraph-image");

try {
  await access(origem);
} catch {
  console.warn("[og] out/opengraph-image não encontrado — nada a fazer.");
  process.exit(0);
}

await copyFile(origem, join(out, "og.png"));

/** Percorre out/ recursivamente e devolve os caminhos dos .html. */
async function listarHtml(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const arquivos = await Promise.all(
    entradas.map((entrada) => {
      const caminho = join(dir, entrada.name);
      if (entrada.isDirectory()) return listarHtml(caminho);
      return extname(entrada.name) === ".html" ? [caminho] : [];
    }),
  );
  return arquivos.flat();
}

// A URL sempre carrega um hash de cache: /opengraph-image?2909dcdb0414e9e8
const referencia = /opengraph-image\?[A-Za-z0-9]+/g;

let alterados = 0;
for (const arquivo of await listarHtml(out)) {
  const html = await readFile(arquivo, "utf8");
  if (!referencia.test(html)) continue;
  await writeFile(arquivo, html.replace(referencia, "og.png"));
  alterados += 1;
}

console.log(`[og] og.png publicado; ${alterados} arquivo(s) HTML atualizado(s).`);
