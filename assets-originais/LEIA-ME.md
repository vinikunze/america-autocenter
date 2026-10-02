# Arquivos originais

Fontes enviadas pelo cliente, guardadas fora de `public/` de propósito:
tudo que fica em `public/` é publicado no deploy, e estes arquivos não são
usados pelo site — só serviriam para pesar a hospedagem.

| Arquivo | Origem | O que foi gerado a partir dele |
|---|---|---|
| `logo-original.jpg` | logotipo oficial, JPEG sobre fundo branco | `public/marca/logo.png`, `public/marca/logo-escuro.png`, `src/app/icon.png` e `src/app/apple-icon.png` |
| `fachada-original.jpg` | foto da fachada, 2000×1125, 478 KB | `public/fotos/fachada.jpg` (1600 px, 232 KB) |

Guarde-os: se um dia for preciso regerar a logo em outro tamanho ou variante,
é daqui que se parte — e não do PNG já processado, que perde qualidade a cada
nova conversão.
