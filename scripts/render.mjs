// Renderiza posts/*/post.html -> post.png (Playwright/Chromium).
// Uso: node scripts/render.mjs [--all] [--only <slug>]
//  - por padrão renderiza só posts cujo post.png não existe ou cujo HTML mudou (hash em render.json)
//  - falha (exit 1) se alguma @font-face não carregar — nunca publicar com fonte fallback.
import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(new URL('..', import.meta.url).pathname);
const args = process.argv.slice(2);
const all = args.includes('--all');
const onlyIdx = args.indexOf('--only');
const only = onlyIdx >= 0 ? args[onlyIdx + 1] : null;

const postsDir = join(root, 'posts');
const slugs = readdirSync(postsDir).filter(d => statSync(join(postsDir, d)).isDirectory() && existsSync(join(postsDir, d, 'post.html')));

const sha = s => createHash('sha256').update(s).digest('hex');
const deps = ['templates/base.css', 'templates/base.js'].map(p => existsSync(join(root, p)) ? readFileSync(join(root, p), 'utf8') : '');

const browser = await chromium.launch();
let failures = 0, rendered = 0;
for (const slug of slugs) {
  if (only && slug !== only) continue;
  const dir = join(postsDir, slug);
  const html = readFileSync(join(dir, 'post.html'), 'utf8');
  const hash = sha(html + deps.join('\n'));
  const metaPath = join(dir, 'render.json');
  const prev = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : null;
  if (!all && existsSync(join(dir, 'post.png')) && prev && prev.hash === hash) continue;

  const m = html.match(/name="post-size"\s+content="(\d+)x(\d+)"/);
  const width = m ? +m[1] : 1080, height = m ? +m[2] : 1440;
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(join(dir, 'post.html')).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const fonts = await page.evaluate(() => [...document.fonts].map(f => ({ family: f.family, status: f.status })));
  const bad = fonts.filter(f => f.status !== 'loaded');
  // fontes declaradas mas não usadas ficam "unloaded" — só é erro se status === 'error'
  const errored = fonts.filter(f => f.status === 'error');
  if (errored.length) {
    console.error(`[${slug}] FONTES COM ERRO:`, errored);
    failures++;
    await page.close();
    continue;
  }
  const overflow = await page.evaluate(() => {
    const W = document.documentElement.clientWidth, H = document.documentElement.clientHeight;
    const out = [];
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.left < -1 || r.top < -1 || r.right > W + 1 || r.bottom > H + 1) out.push(el.className || el.tagName);
    }
    return out;
  });
  if (overflow.length) console.warn(`[${slug}] aviso: elementos fora do canvas:`, overflow.slice(0, 5));
  await page.screenshot({ path: join(dir, 'post.png'), fullPage: false });
  writeFileSync(metaPath, JSON.stringify({ hash, width, height, renderedAt: new Date().toISOString(), fonts: fonts.filter(f => f.status === 'loaded').map(f => f.family) }, null, 2) + '\n');
  console.log(`[${slug}] ok ${width}x${height} fontes=${fonts.filter(f => f.status === 'loaded').map(f => f.family).join(',')} ${bad.length ? 'não-carregadas=' + bad.map(f => f.family).join(',') : ''}`);
  rendered++;
  await page.close();
}
await browser.close();
console.log(`renderizados: ${rendered}, falhas: ${failures}`);
if (failures) process.exit(1);
