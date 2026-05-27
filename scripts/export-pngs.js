const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const conversions = [
  // Logo principal
  { src: 'logo/principal/layk-transparent.svg', out: 'logo/principal/layk-transparent.png', w: 2048 },
  { src: 'logo/principal/layk-dark-bg.svg',     out: 'logo/principal/layk-dark-bg.png',     w: 2048 },
  { src: 'logo/principal/layk-light-bg.svg',    out: 'logo/principal/layk-light-bg.png',    w: 2048 },
  // Símbolo < solo
  { src: 'logo/simbolo/layk-simbolo.svg', out: 'logo/simbolo/layk-simbolo.png', w: 2048 },
  // Lockup
  { src: 'logo/lockup/layk-tagline.svg', out: 'logo/lockup/layk-tagline.png', w: 2048 },
  // Favicons (og-image.png é copiada do site, não gerada aqui)
  { src: 'logo/icon/favicon.svg', out: 'logo/icon/favicon-32.png',       w: 32,  h: 32  },
  { src: 'logo/icon/favicon.svg', out: 'logo/icon/apple-touch-icon.png', w: 180, h: 180 },
  { src: 'logo/icon/favicon.svg', out: 'logo/icon/favicon-192.png',      w: 192, h: 192 },
  // Avatar (único, quadrado)
  { src: 'social/avatar/avatar-square.svg', out: 'social/avatar/avatar-square.png', w: 512, h: 512 },
  // Covers
  { src: 'social/covers/linkedin-cover.svg', out: 'social/covers/linkedin-cover.png', w: 1584, h: 396 },
  { src: 'social/covers/twitter-header.svg', out: 'social/covers/twitter-header.png', w: 1500, h: 500 },
  // Templates
  { src: 'social/templates/post-instagram.svg', out: 'social/templates/post-instagram.png', w: 1080, h: 1080 },
  { src: 'social/templates/story.svg',          out: 'social/templates/story.png',          w: 1080, h: 1920 },
];

async function convert() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const { src, out, w, h } of conversions) {
    const svgPath = path.resolve(__dirname, '..', src);
    const outPath = path.resolve(__dirname, '..', out);

    if (!fs.existsSync(svgPath)) {
      console.warn('⚠ SVG não encontrado: ' + src);
      continue;
    }

    const svgContent = fs.readFileSync(svgPath, 'utf-8');

    const vbMatch = svgContent.match(/viewBox="([^"]+)"/);
    let height = h;
    if (!height && vbMatch) {
      const parts = vbMatch[1].split(/[\s,]+/).map(Number);
      const vbW = parts[2];
      const vbH = parts[3];
      height = Math.round(w * (vbH / vbW));
    }
    if (!height) height = w;

    const page = await browser.newPage();
    await page.setViewport({ width: w, height, deviceScaleFactor: 1 });

    const html = `<!doctype html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${w}px; height: ${height}px; overflow: hidden; }
  body { font-family: 'Inter', sans-serif; }
  svg { display: block; width: ${w}px; height: ${height}px; }
</style>
</head>
<body>${svgContent}</body>
</html>`;

    await page.setContent(html, { waitUntil: 'networkidle0' });
    // Give web fonts an extra moment to apply
    await page.evaluate(() => document.fonts && document.fonts.ready);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await page.screenshot({
      path: outPath,
      omitBackground: src.includes('transparent') || src.includes('favicon') || src.includes('avatar-circle'),
      clip: { x: 0, y: 0, width: w, height },
    });
    await page.close();

    console.log('✓ ' + out);
  }

  await browser.close();
  console.log('\nTodos os PNGs exportados!');
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
