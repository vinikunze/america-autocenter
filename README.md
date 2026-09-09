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
| Lista de serviços | 9 serviços | O CNPJ registra apenas comércio de peças (CNAE 4530-7/03). Ajuste a lista ao que é realmente executado — anunciar serviço que não existe reprova a conta no Google Ads. |
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
| Fontes | Plus Jakarta Sans + Inter via `next/font` | Self-hosted no build, sem layout shift. |

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
| Os 4 destaques abaixo da dobra | `highlights` |
| Serviços (título, descrição, bullets, ícone) | `services` |
| Blocos de "Por que a América" | `differentials` |
| Os 3 passos de "Como funciona" | `steps` |
| Depoimentos (seção some se vazio) | `testimonials` |
| Perguntas frequentes (alimenta também o rich result do Google) | `faq` |

Nenhum componente precisa ser tocado para atualizar texto.

**Cores e tipografia:** bloco `@theme` em `src/app/globals.css`.
**Logo:** `src/components/Logo.tsx` (monograma provisório em SVG — substituir
pelo logotipo oficial) e `src/app/icon.svg` (favicon).

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

**Vercel** (recomendado, gratuito neste porte)
1. Importe o repositório.
2. Framework: Next.js. Nada mais a configurar.
3. Cadastre as variáveis `NEXT_PUBLIC_*` em *Settings → Environment Variables*.

**Netlify / Cloudflare Pages**
- Build: `npm run build` · Publish directory: `out`
- O arquivo `public/_headers` já traz cache e cabeçalhos de segurança.

**Hospedagem tradicional (cPanel, Hostinger, FTP)**
- Rode `npm run build` e suba o conteúdo de `out/` para a raiz do domínio.

---

## SEO já implementado

- Metadata completa (title, description, canonical, OpenGraph, Twitter Card).
- Card de compartilhamento gerado no build (`src/app/opengraph-image.tsx`) — é o
  que aparece ao colar o link no WhatsApp e no Instagram.
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
- HTML da home: ~28 KB comprimido. Nenhuma imagem de terceiros na primeira
  dobra: o visual do hero é 100% SVG e CSS.

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
│   ├── sections/               Hero, Services, Faq, Contact, Location, ...
│   ├── Header.tsx  Footer.tsx  FloatingCta.tsx
│   ├── CTA.tsx                 botões com rastreamento embutido
│   ├── Icons.tsx  Logo.tsx  Reveal.tsx  Section.tsx
│   ├── Analytics.tsx  StructuredData.tsx
├── content/site.ts             ← conteúdo do site (edite aqui)
└── lib/                        analytics, hooks, links
```
