# LAYK Brand Assets

> AI-native business platform — **AI WITH STRATEGY.**
> Estética B&W Palantir-style. Fonte da verdade do estilo: `identidade/design-guide.md` no LaykOS.

## Estrutura

```
layk-brand/
├── logo/
│   ├── principal/       ← Logo < LAYK (dark, light, transparent)
│   ├── simbolo/         ← Chevron < solo (favicon, marca d'água)
│   ├── lockup/          ← < LAYK + tagline "AI WITH STRATEGY."
│   └── icon/            ← Favicons + og-image
├── social/
│   ├── avatar/          ← Avatar quadrado (< solo) para redes
│   ├── covers/          ← LinkedIn cover, Twitter/X header
│   └── templates/       ← Templates post Instagram, story
├── colors/
│   └── palette.css      ← CSS variables da paleta da marca
├── scripts/
│   └── export-pngs.js   ← Gera PNGs a partir dos SVGs (Puppeteer)
└── guidelines.md        ← Regras de uso da marca
```

## Quick start

### Web (HTML)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="icon" type="image/svg+xml" href="/logo/icon/favicon.svg">
```

### CSS
```css
@import url('./colors/palette.css');

body {
  background: var(--layk-black);
  font-family: var(--layk-font-sans);
  color: var(--layk-text-on-dark);
}
```

## Paleta

Monocromática (B&W). Verde entra só em accent — no máximo 1 elemento por seção, nunca em texto corrido.

| Cor | Hex | Uso |
|---|---|---|
| Preto puro | `#000000` | Bg dark padrão |
| Off-white | `#FFFFFF` | Bg light + texto sobre dark |
| Texto sobre dark | `#FFFFFF` + `white/65·55·45` | Headlines, subhead, labels |
| Texto sobre light | `#0a0a0a` + `#555` | Headlines, descrições |
| Hairlines | `white/12` · `#0a0a0a/12` | Separadores, bordas de grid |
| Verde neon | `#00E5A0` | Símbolo `<`, dot de status, accents pontuais |
| Verde WhatsApp | `#25D366` / `#1ebe5a` | Apenas CTAs de WhatsApp |

## Tipografia

- **Inter** — UI, headlines (peso 400 normal, não 700), body
- **Playfair Display** _italic_ — palavra-chave de destaque dentro de headline
- **JetBrains Mono** — kickers, tags, elementos técnicos

## Licença

Assets proprietários da LAYK. Uso restrito a materiais oficiais da marca.
