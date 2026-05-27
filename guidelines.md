# LAYK — Brand Guidelines

> Estética **B&W Palantir-style** — monocromática, sóbria, tech, confiante.
> Fonte da verdade do estilo: `identidade/design-guide.md` no LaykOS. Referência viva: o site `layk.com.br`.

## Identidade

A LAYK é uma **AI-native business platform**. Implanta um ambiente digital sob medida que conecta processos, dados, automações e IA no ecossistema da empresa. Tagline: **AI THAT ADAPTS.**

Inspiração visual: Palantir, Stripe, Linear, Vercel. Sem decoração desnecessária, sem gradients chamativos, sem peso 700 "marketing". O verde neon entra com parcimônia, como acento — nunca como cor de base.

## Logo

A logo canônica é **`< LAYK`**:

1. **Chevron `<`** — Inter peso **900** (black), cor verde neon `#00E5A0`, mesmo font-size do wordmark.
2. **LAYK** — Inter peso **700**, branco, letter-spacing escalado (8–12px conforme tamanho).

Sem cursor piscando. Sem prompt `›`. Sem underline em gradient. Esses elementos do padrão antigo estão aposentados.

### Variações

| Variação | Uso |
|---|---|
| `layk-dark-bg` | Fundo preto (`#000000`) — uso principal |
| `layk-light-bg` | Fundo off-white (`#FFFFFF`) — documentos, emails |
| `layk-transparent` | Sobre fotos, cards, apresentações |

### Símbolo

O chevron `<` solo é usado em favicon, avatar e marca d'água. Vive em `logo/simbolo/`.

**Sistema do chevron (dois níveis):**
- **Wordmark `< LAYK`** (logo principal, lockup, covers, posts, header, e-mail) → `<` **tipográfico** (Inter 900). Mesmo `<` que o site e o hub renderizam ao vivo. Funciona em qualquer lugar, inclusive e-mail.
- **Símbolo solo** (favicon, avatar, marca d'água) → `<` **geométrico** (path SVG sólido). Lê melhor em tamanho pequeno.

### Hub

Não existe logo separada do Hub. O painel interno usa a logo principal `< LAYK`. Quando a UI precisa sinalizar que é o Hub, adiciona a palavra "hub" como rótulo contextual ao lado da logo (JetBrains Mono, minúsculo, dimmed) — em código, não como asset de marca.

## Área de respiro

Mínimo de **24px** (ou 1x a altura do chevron `<`) de espaço livre em todos os lados. Nunca encostar a logo em bordas ou outros elementos.

## Tamanho mínimo

- **Digital**: largura mínima de 120px
- **Impressão**: largura mínima de 30mm

## Cores

Monocromática. Verde só em accent — **no máximo 1 elemento por seção, nunca em texto corrido**.

### Base B&W
- **Preto puro**: `#000000` (bg dark padrão)
- **Off-white**: `#FFFFFF` (bg light + texto sobre dark)
- **Texto sobre dark**: `#FFFFFF`, secundário `white/65` · `white/55` · `white/45`
- **Texto sobre light**: `#0a0a0a`, secundário `#555`
- **Hairlines**: `white/12` (dark) · `#0a0a0a/12` (light) — separadores e bordas de grid

### Accent
- **Verde neon**: `#00E5A0` — símbolo `<`, dot de status, hashtag, accents pontuais
- **Verde WhatsApp**: `#25D366` / `#1ebe5a` — apenas em CTAs de WhatsApp

### Aposentado
Teal `#2DD4BF`, indigo `#6366f1`, bg `#0a0e1a` e gradients teal→indigo **não são mais usados**. Substituídos pela paleta B&W em 22/05/2026.

## Tipografia

| Função | Fonte | Pesos |
|---|---|---|
| UI / headlines / body | **Inter** | 400, 500, 600, 700, 900 |
| Destaque (palavra-chave em headline) | **Playfair Display** _italic_ | 400, 500 |
| Kickers / tags / técnicas | **JetBrains Mono** | 400, 500 |

Regras:
- **Headlines** em Inter peso **400 normal** — não peso 700. Letter-spacing `-0.02em`, line-height `1.05`.
- **Palavra-chave destacada** dentro de headline: Playfair italic peso 500.
- **Kickers** (rótulos no topo de seção): JetBrains Mono, uppercase, tracking `0.2em`, cor 45%.
- **Body/subhead**: Inter peso 400, line-height relaxado, cor `white/65` (dark) ou `#555` (light).

## O que NÃO fazer

- Não usar teal `#2DD4BF` ou indigo `#6366f1` como cor de base
- Não usar Space Grotesk (fonte legada)
- Não usar logo com cursor `|` ou prompt `›` (legado)
- Não usar verde `#00E5A0` em texto corrido (só em accents pontuais)
- Não usar headlines em peso 700 "marketing" — usar 400 normal ou all-caps
- Não rotacionar, esticar ou distorcer a logo
- Não adicionar sombras, contornos ou gradients na logo
- Não colocar a logo sobre fundos com baixo contraste

## Favicon / App Icon

O ícone reduzido usa o chevron `<` solo verde em bg escuro. Tamanhos: `favicon.svg` (32×32), `favicon-32.png`, `apple-touch-icon.png` (180×180), `favicon-192.png`. Mesmos arquivos usados em produção no site.

## OG image / preview social

`og-image.png` 1200×630, bg `#000`: `< LAYK` centralizado + **"AI THAT ADAPTS."** em mono verde abaixo, com hairline separador. Conteúdo concentrado no centro (safe area ~500×500) pra sobreviver ao crop quadrado do WhatsApp.

## Avatar redes sociais

Asset quadrado 1:1, chevron `<` solo verde em bg preto. Sobrevive cropado em círculo nas plataformas. Sem borda gradient, sem wordmark (ilegível em tamanho pequeno).

## Covers

Layout largo próprio (não cópia da OG): `< LAYK` + `AI THAT ADAPTS.` alinhados à esquerda em bg preto, com hairline/respiro à direita — pegada Palantir/Linear. LinkedIn 1584×396, Twitter/X 1500×500.
