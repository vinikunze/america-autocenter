# América Auto Center — Site

Site da **América Auto Center** (Sinop/MT): uma landing page de alta conversão
mais sete páginas de serviço, construídas para receber tráfego pago do Google
Ads e da Meta.

**No ar:** https://america-autocenter.vercel.app

Todo o layout foi desenhado em torno de um único objetivo: transformar o clique
do anúncio em uma conversa no WhatsApp — com o menor atrito possível e com cada
conversão devidamente rastreada.

---

## ⚠️ Antes de subir a campanha — dados a confirmar

A foto da fachada enviada pelo cliente resolveu duas pendências: o **telefone
do totem confere** com o número do site, e o totem **lista os serviços que a
oficina de fato executa** — a lista da página agora é exatamente essa. O que
resta confirmar está marcado com `// CONFIRMAR` em `src/content/site.ts`:

| Item | Valor no site | Observação |
|---|---|---|
| Horário de atendimento | Seg–Sex 8h–18h · Sáb 8h–12h | Presumido pelo padrão do setor — **único dado ainda sem fonte**. |
| Bairro | não informado | Não consta no cadastro público. |
| Garantia de 90 dias | usada em 4 pontos do site | Promessa comercial. Só mantenha se o cliente confirmar. |
| Foto do antes e depois | usada em 2 pontos | Idem: é um compromisso que a oficina passa a ter. |
| Domínio (`siteUrl`) | `americaautocenter.com.br` | Ajuste ao domínio real; afeta canonical, sitemap e schema. |

**Já confirmado pela fachada:** telefone `(66) 9 9260-7556`, endereço
`Rua das Primaveras, 7354` e os sete serviços (alinhamento e balanceamento,
troca de óleo, freios, suspensão, revisão geral, escapamento e limpeza de
bicos).

**Depoimentos e prova social:** os arrays `testimonials` e `socialProof`
nascem vazios e somem do site enquanto estiverem assim. Preencha só com
avaliações e números reais. Nota do Google e "clientes atendidos" inventados
derrubam a confiança e violam as políticas de anúncio do Google e da Meta.

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

## Páginas

| Rota | O que é |
|---|---|
| `/` | landing page — é para onde aponta a campanha de marca e o tráfego frio |
| `/servicos/<slug>/` | uma por serviço (7), cada uma mirando o termo que a pessoa digita |

As páginas de serviço existem por dois motivos concretos: no Google Ads, cada
grupo de anúncio cai na página do serviço que ele anuncia — Índice de Qualidade
sobe e o custo por clique cai; e na busca orgânica são sete portas de entrada
em vez de uma. Conteúdo em `src/content/servicePages.ts`, rota em
`src/app/servicos/[slug]/page.tsx`.

O texto delas descreve procedimentos padrão do setor e **não afirma prazo,
preço, marca de equipamento nem tecnologia específica**, porque nada disso foi
confirmado. Se a oficina quiser destacar algo ("alinhamento 3D", "pronto em 1
hora"), confirme antes de escrever.

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
| Conteúdo das páginas de serviço | `src/content/servicePages.ts` |
| Perguntas frequentes (alimenta também o rich result do Google) | `faq` |

Nenhum componente precisa ser tocado para atualizar texto.

**Cores e tipografia:** bloco `@theme` em `src/app/globals.css`. Base preta com
o vermelho da marca como única cor de ação, seções escuras alternando com uma
seção clara, cantos generosos e faixa zebrada como divisor.
**Marca:** o logotipo oficial está em `public/marca/`. `logo.png` mantém as
cores originais (para fundo claro) e `logo-escuro.png` é a variante do site — o
cinza `#6c7577` do contorno do carro e do "AUTO CENTER" não tem contraste
suficiente sobre o preto, então nessa versão ele é clareado; o vermelho fica
intacto nas duas. O favicon (`src/app/icon.png`) usa a silhueta do carro em
branco sobre o vermelho da marca, com o traço engrossado para continuar legível
a 16 px. O vermelho `#d7101a` do tema foi amostrado do próprio arquivo da logo.

---

## Fotos

**A fachada já está publicada.** Os demais espaços seguem vazios: enquanto
`src` estiver em branco, o slot é simplesmente omitido (nos cards de serviço) ou
mostra um bloco gráfico no tom da seção. O layout não quebra, mas cada foto que
entra aumenta o impacto — priorize isso antes de escalar a verba.

Para publicar: salve o arquivo em `public/fotos/`, preencha `src` em
`src/content/site.ts` (ex.: `"/fotos/fachada.jpg"`) e escreva o `alt`
descrevendo a cena.

| Slot | Onde aparece | Proporção | Sugestão |
|---|---|---|---|
| `photos.fachada` | bloco de destaque | 16:9 | ✅ publicada |
| `photos.atendimento` | mosaico | 4:3 | mecânico trabalhando no veículo |

Com uma foto só, o bloco de destaque a exibe em tamanho grande; a partir de
duas, ele vira mosaico automaticamente.

| `photos.pecas` | mosaico | 4:3 | prateleira de peças / estoque |
| `photos.pneus` | mosaico | 4:3 | pneu sendo montado |
| `photos.bastidor` | fundo de "Por que escolher" | 16:9 | motor ou box, será escurecido |
| `servicePhotos.*` | topo de cada card de serviço | 16:10 | uma por serviço (o card fica só com ícone enquanto não houver) |

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

**Vercel — já configurado e no ar**

O site está publicado em **https://america-autocenter.vercel.app**, com deploy
automático a cada push na `main`. Projeto `america-autocenter`, na conta
`vinicius-kunzes-projects`.

A variável `NEXT_PUBLIC_SITE_URL` já está cadastrada apontando para esse
endereço — ela alimenta canonical, sitemap, OpenGraph e schema.org. **Ao
registrar o domínio próprio**, adicione o domínio em *Settings → Domains* e
troque o valor dessa variável; sem isso, a prévia do link no WhatsApp continua
buscando a imagem no endereço antigo.

As demais variáveis (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`,
`NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`, `NEXT_PUBLIC_META_PIXEL_ID`) entram
em *Settings → Environment Variables* quando as campanhas forem criadas.

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
- Card de compartilhamento em `public/og.png` — é o que aparece ao colar o link
  no WhatsApp e no Instagram. É um arquivo estático de propósito: a rota que o
  Next gera para isso sai sem extensão, e tanto a Vercel quanto o GitHub Pages
  a servem como `application/octet-stream`, o que faz a prévia não renderizar.
  Para trocar o card, substitua o arquivo por outro PNG de 1200×630.
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
│   └── icon.png  apple-icon.png    favicon a partir da logo
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

public/marca/                   logotipo oficial (variantes claro e escuro)
public/fotos/                   fotos da oficina
assets-originais/               arquivos-fonte do cliente, fora do deploy

scripts/og.mjs                  publica o card de OpenGraph como og.png
.github/workflows/deploy.yml    build + publicação no GitHub Pages
```
