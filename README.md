# América Auto Center — Landing Page

Landing page de alta conversão da **América Auto Center** (Sinop/MT), construída
para receber tráfego pago do Google Ads e da Meta.

Todo o layout foi desenhado em torno de um único objetivo: transformar o clique
do anúncio em uma conversa no WhatsApp — com o menor atrito possível e com cada
conversão devidamente rastreada.

---

## ⚠️ Antes de subir a campanha — dados a confirmar

Os dados do negócio foram extraídos de registros públicos (CNPJ, cadastros
comerciais) porque o perfil do Instagram não pôde ser lido automaticamente.
**Confirme os itens abaixo com o cliente antes de investir em mídia** — todos
estão reunidos em `src/content/site.ts` e marcados com `// CONFIRMAR`:

| Item | Valor no site | Observação |
|---|---|---|
| Telefone / WhatsApp | `(66) 9 9260-7556` | O cadastro público traz `66 9260-7556` (8 dígitos). Assumimos o `9` inicial do celular. **É para cá que vão 100% dos leads.** |
| Horário de atendimento | Seg–Sex 8h–18h · Sáb 8h–12h | Presumido pelo padrão do setor. |
| Bairro | não informado | Não consta no cadastro público. |
| Lista de serviços | 7 serviços | O CNPJ registra apenas comércio de peças (CNAE 4530-7/03). Elétrica e ar-condicionado foram removidos a pedido do cliente. Confirme o restante — anunciar serviço que não existe reprova a conta no Google Ads. |
| Garantia de 90 dias | usada em 4 pontos do site | Promessa comercial. Só mantenha se o cliente confirmar. |
| Domínio (`siteUrl`) | `americaautocenter.com.br` | Ajuste ao domínio real; afeta canonical, sitemap e schema. |

**Depoimentos:** a seção existe, mas o array `testimonials` nasce vazio e a
seção some do site enquanto estiver assim. Preencha apenas com avaliações reais
(Google, Instagram). Depoimento inventado derruba a confiança e viola as
políticas de anúncio do Google e da Meta.

---

## Stack

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | Next.js 16 (App Router) + TypeScript | Metadata, sitemap, robots e OG image nativos. |
| Build | Export estático (`output: "export"`) | Gera HTML/CSS/JS puros em `out/`. TTFB mínimo — o Google Ads cobra caro por página lenta. |
| Estilo | Tailwind CSS v4 | Design system em tokens (`src/app/globals.css`), sem CSS morto. |
| Animação | IntersectionObserver + CSS | Substitui Framer Motion/GSAP. Mesmo efeito, ~0 KB de JS extra. |
| Ícones | SVG inline autoral | Nenhuma requisição, nenhuma dependência. |
| Fontes | Plus Jakarta Sans + Inter via `next/font` | Grotesca pesada em caixa mista nos títulos. Self-hosted no build, sem layout shift. |

Sem backend, sem banco, sem custo recorrente de servidor: o formulário monta a
mensagem e abre direto o WhatsApp.

---

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # gera a pasta out/ pronta para publicar
npm run typecheck
```

---

## Editando o conteúdo

**Praticamente tudo vive em um arquivo só: `src/content/site.ts`.**

| O que mudar | Onde |
|---|---|
| Telefone, endereço, e-mail, Instagram, horários | `business` |
| Serviços (título, descrição, bullets, ícone) | `services` |
| Blocos de "Por que a América" | `differentials` |
| Os 3 passos de "Como funciona" | `steps` |
| Depoimentos (seção some se vazio) | `testimonials` |
| Prova social da primeira dobra (nota do Google, nº de clientes) | `socialProof` |
| Fotos da página | `photos` e `servicePhotos` |
| Perguntas frequentes (alimenta também o rich result do Google) | `faq` |

Nenhum componente precisa ser tocado para atualizar texto.

**Cores e tipografia:** bloco `@theme` em `src/app/globals.css`. Base preta com
o vermelho da marca como única cor de ação, seções escuras alternando com uma
seção clara, cantos generosos e faixa zebrada como divisor.
**Logo:** `src/components/Logo.tsx` (monograma provisório em SVG — substituir
pelo logotipo oficial) e `src/app/icon.svg` (favicon).

---

## Fotos

**A página foi desenhada para foto real e ainda não tem nenhuma.** Enquanto
`src` estiver vazio, cada espaço mostra um bloco gráfico no tom da seção — o
layout não quebra, mas metade do impacto se perde. Priorize isso antes de
rodar tráfego.

Para publicar: salve o arquivo em `public/fotos/`, preencha `src` em
`src/content/site.ts` (ex.: `"/fotos/fachada.jpg"`) e escreva o `alt`
descrevendo a cena.

| Slot | Onde aparece | Proporção | Sugestão |
|---|---|---|---|
| `photos.fachada` | mosaico do bloco de destaque | 4:3 | fachada ou box principal |
| `photos.atendimento` | mosaico | 4:3 | mecânico trabalhando no veículo |
| `photos.pecas` | mosaico | 4:3 | prateleira de peças / estoque |
| `photos.pneus` | mosaico | 4:3 | pneu sendo montado |
| `photos.bastidor` | fundo de "Por que escolher" | 16:9 | motor ou box, será escurecido |
| `servicePhotos.*` | topo de cada card de serviço | 16:10 | uma por serviço |

Exporte em JPG ou WebP com cerca de 200 KB cada — o export é estático e não
há otimização de imagem em runtime. Fora da proporção indicada, a imagem é
cortada no centro.

---

## Rastreamento de conversões

Copie `.env.example` para `.env.local` e preencha os IDs:

```bash
NEXT_PUBLIC_GA_ID=                          # G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=                  # AW-123456789
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=    # rótulo da ação de conversão
NEXT_PUBLIC_META_PIXEL_ID=                  # 1234567890123456
```

Sem nenhum ID preenchido, nada é carregado e o site continua funcionando.

Cada clique que representa um lead dispara `generate_lead` (GA4), `conversion`
(Google Ads) e `Contact` (Meta), com rótulo no formato `canal_origem` — por
exemplo `whatsapp_hero` ou `formulario_contato`. Isso permite ver **qual CTA da
página está gerando lead** e otimizar a campanha em cima disso.

Origens instrumentadas: `header`, `hero`, `servicos`, `processo`, `contato`,
`mapa`, `rodape` e `botao-flutuante`.

> **LGPD:** ao ativar o Meta Pixel ou o GA4, a página passa a gravar cookies de
> terceiros. Avalie incluir um aviso de cookies e uma política de privacidade
> antes de rodar mídia — este repositório ainda não traz nenhum dos dois.

---

## Deploy

O build gera arquivos estáticos, então qualquer hospedagem serve.

**Vercel** (melhor opção quando houver domínio próprio)
1. Importe o repositório.
2. Framework: Next.js. Nada mais a configurar.
3. Cadastre as variáveis `NEXT_PUBLIC_*` em *Settings → Environment Variables*.

**Netlify / Cloudflare Pages**
- Build: `npm run build` · Publish directory: `out`
- O arquivo `public/_headers` já traz cache e cabeçalhos de segurança.

**GitHub Pages** (já configurado neste repositório)
1. Em *Settings → Pages*, mude **Source** para **GitHub Actions**.
   No modo "Deploy from a branch" o GitHub renderiza o README com Jekyll
   em vez de servir o site.
2. Pronto: `.github/workflows/deploy.yml` roda typecheck, build e publica
   em `https://vinikunze.github.io/america-autocenter/`.
3. IDs de rastreamento (opcional): *Settings → Secrets and variables →
   Actions → Variables*, com os mesmos nomes do `.env.example`.

Como é uma página **de projeto**, o site fica em subdiretório, e o workflow
passa `NEXT_PUBLIC_BASE_PATH=/america-autocenter` — sem isso todo CSS e JS
apontaria para a raiz do domínio e retornaria 404. **Ao apontar um domínio
próprio para o Pages, remova essa variável** e ajuste `NEXT_PUBLIC_SITE_URL`.

**Hospedagem tradicional (cPanel, Hostinger, FTP)**
- Rode `npm run build` e suba o conteúdo de `out/` para a raiz do domínio.
- Se o site ficar em subpasta, faça o build com
  `NEXT_PUBLIC_BASE_PATH=/subpasta npm run build`.

---

## SEO já implementado

- Metadata completa (title, description, canonical, OpenGraph, Twitter Card).
- Card de compartilhamento gerado no build (`src/app/opengraph-image.tsx`) — é o
  que aparece ao colar o link no WhatsApp e no Instagram. O passo
  `scripts/og.mjs` republica esse card como `og.png`, porque hospedagens
  estáticas servem arquivo sem extensão como `octet-stream` e a prévia
  não renderiza.
- JSON-LD `AutoRepair` (painel de negócio local), `FAQPage` (acordeão nos
  resultados de busca) e `WebSite`, todos gerados a partir de `site.ts`.
- `sitemap.xml`, `robots.txt` e `manifest.webmanifest` automáticos.
- Hierarquia de headings correta, HTML semântico e conteúdo do carrossel
  também exposto em texto para leitores de tela e para o Google.

**Próximo passo fora do código:** criar/reivindicar o **Perfil da Empresa no
Google**. Para busca local em Sinop, ele pesa mais que o site.

---

## Acessibilidade e performance

- Contraste conferido, foco visível em toda a navegação por teclado.
- FAQ em `<details>` nativo: funciona com leitor de tela e sem JavaScript.
- `prefers-reduced-motion` respeitado — todas as animações são desligadas.
- Menu mobile com trava de rolagem e alvos de toque de 44px.
- Formulário na primeira dobra, sem backend: nenhum JavaScript de terceiros
  bloqueia a renderização.
- Fotos carregam com `loading="lazy"` e `decoding="async"`, exceto onde
  marcado como prioritário.

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              metadata, fontes, JSON-LD
│   ├── page.tsx                ordem das seções
│   ├── globals.css             design system (tokens, utilitários, motion)
│   ├── opengraph-image.tsx     card de compartilhamento
│   ├── sitemap.ts / robots.ts / manifest.ts
│   └── icon.svg
├── components/
│   ├── sections/               Hero, FeatureBar, Showcase, Services,
│   │                           Differentials, Process, Faq, Contact, ...
│   ├── Header.tsx  Footer.tsx  FloatingCta.tsx
│   ├── LeadForm.tsx            formulário do hero e da seção de orçamento
│   ├── Photo.tsx               espaço de foto com bloco de espera
│   ├── CTA.tsx                 botões com rastreamento embutido
│   ├── Icons.tsx  Logo.tsx  Reveal.tsx  Section.tsx
│   ├── Analytics.tsx  StructuredData.tsx
├── content/site.ts             ← conteúdo do site (edite aqui)
└── lib/                        analytics, hooks, links

scripts/og.mjs                  publica o card de OpenGraph como og.png
.github/workflows/deploy.yml    build + publicação no GitHub Pages
```
