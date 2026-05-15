# LAYK Brand Assets

> AI-native software house — brand identity kit

## Estrutura

```
layk-brand/
├── logo/
│   ├── principal/       ← Logo LAYK (dark, light, transparent)
│   ├── hub/             ← Logo LAYK HUB (dark, light, transparent)
│   ├── lockup/          ← Logo + tagline "AI-native software house"
│   └── icon/            ← Favicon SVG
├── social/
│   ├── avatar/          ← Avatar circular e quadrado para redes
│   ├── covers/          ← LinkedIn cover, Twitter/X header
│   └── templates/       ← Templates post Instagram, story
├── colors/
│   └── palette.css      ← CSS variables da paleta da marca
└── guidelines.md        ← Regras de uso da marca
```

## Quick start

### Web (HTML)
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="icon" type="image/svg+xml" href="/logo/icon/favicon.svg">
```

### CSS
```css
@import url('./colors/palette.css');

body {
  background: var(--layk-bg-primary);
  font-family: var(--layk-font-primary);
  color: var(--layk-text-primary);
}
```

## Paleta

| Cor | Hex | Uso |
|---|---|---|
| Background | `#0a0e1a` | Fundo principal |
| Teal | `#2DD4BF` | Acento, prompt, CTAs |
| Indigo | `#6366f1` | Acento secundário, gradients |
| White | `#FFFFFF` | Texto principal |
| Muted | `#3A4F6F` | Texto secundário |

## Tipografia

- **Space Grotesk** — headers, logo, UI
- **JetBrains Mono** — código, elementos técnicos

## Licença

Assets proprietários da Layk. Uso restrito a materiais oficiais da marca.
