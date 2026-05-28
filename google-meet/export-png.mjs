import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'background.html');
const pngPath = resolve(__dirname, 'background.png');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`);

// Aguarda fontes carregarem
await page.evaluateHandle('document.fonts.ready');

// Versão normal
await page.screenshot({ path: pngPath, type: 'png', fullPage: false });

// Versão espelhada (para Google Meet — que inverte o preview local)
const mirroredPath = resolve(__dirname, 'background-mirrored.png');
await page.evaluate(() => {
  document.body.style.transform = 'scaleX(-1)';
  document.body.style.transformOrigin = 'center';
});
await page.screenshot({ path: mirroredPath, type: 'png', fullPage: false });

await browser.close();

console.log('Exportado:', pngPath);
console.log('Espelhado:', mirroredPath);
