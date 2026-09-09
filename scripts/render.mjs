// Renderiza as artes de posts/*/ (Playwright/Chromium + ffmpeg).
//   post.html            -> post.png           (imagem única; <meta name="post-size" content="1080x1440">)
//   slide-2.html, ...    -> slide-2.png, ...   (carrossel: post.png é o slide 1)
//   post.html com <meta name="post-type" content="reel"> -> reel.mp4 + reel-cover.png
//        metas do reel: post-size (1080x1920), reel-duration (s), reel-fps (30), reel-cover (s)
//        o HTML expõe window.__seek(t) para posicionar a animação no tempo t (determinístico)
//        áudio: scripts/audio.mjs gera a trilha; opções em audio.json (opcional) na pasta do post
// Uso: node scripts/render.mjs [--all] [--only <slug>]
//  - por padrão só renderiza o que não existe ou cujo HTML/base mudou (hashes em render.json)
//  - falha (exit 1) se alguma @font-face não carregar — nunca publicar com fonte fallback.
import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(new URL('..', import.meta.url).pathname);
const args = process.argv.slice(2);
const all = args.includes('--all');
const onlyIdx = args.indexOf('--only');
const only = onlyIdx >= 0 ? args[onlyIdx + 1] : null;

const postsDir = join(root, 'posts');
const slugs = readdirSync(postsDir).filter(d => statSync(join(postsDir, d)).isDirectory() && existsSync(join(postsDir, d, 'post.html')));
console.log(`posts encontrados (${slugs.length}): ${slugs.join(', ')}`);

const sha = s => createHash('sha256').update(s).digest('hex');
const depFiles = ['templates/base.css', 'templates/base.js', 'templates/reel.css', 'scripts/audio.mjs'];
const deps = depFiles.map(p => existsSync(join(root, p)) ? readFileSync(join(root, p), 'utf8') : '').join('\n');
const meta = (html, name, def) => { const m = html.match(new RegExp(`name="${name}"\\s+content="([^"]+)"`)); return m ? m[1] : def; };

const browser = await chromium.launch();
let failures = 0, rendered = 0;

async function openPage(file, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(file).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready.then(() => true));
  await page.waitForTimeout(400);
  const fonts = await page.evaluate(() => [...document.fonts].map(f => ({ family: f.family, status: f.status })));
  const errored = fonts.filter(f => f.status === 'error');
  if (errored.length) { await page.close(); throw new Error('fontes com erro: ' + errored.map(f => f.family).join(',')); }
  const overflow = await page.evaluate(() => {
    const W = document.documentElement.clientWidth, H = document.documentElement.clientHeight, out = [];
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
      const cs = getComputedStyle(el); if (cs.opacity === '0') continue;
      if (r.left < -1 || r.top < -1 || r.right > W + 1 || r.bottom > H + 1) out.push(el.className || el.tagName);
    }
    return out;
  });
  return { page, fonts: fonts.filter(f => f.status === 'loaded').map(f => f.family), overflow };
}

for (const slug of slugs) {
  if (only && slug !== only) continue;
  const dir = join(postsDir, slug);
  const metaPath = join(dir, 'render.json');
  const prev = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : { files: {} };
  const state = { files: { ...(prev.files || {}) }, renderedAt: prev.renderedAt };
  const htmls = readdirSync(dir).filter(f => f.endsWith('.html')).sort();
  let touched = false;

  for (const file of htmls) {
    const html = readFileSync(join(dir, file), 'utf8');
    const isReel = file === 'post.html' && meta(html, 'post-type', 'image') === 'reel';
    const audioOpts = existsSync(join(dir, 'audio.json')) ? readFileSync(join(dir, 'audio.json'), 'utf8') : '{}';
    const hash = sha(html + deps + (isReel ? audioOpts : ''));
    const outName = isReel ? 'reel.mp4' : basename(file, '.html') + '.png';
    const outPath = join(dir, outName);
    if (!all && existsSync(outPath) && state.files[file] && state.files[file].hash === hash) continue;

    const [w, h] = meta(html, 'post-size', isReel ? '1080x1920' : '1080x1440').split('x').map(Number);
    try {
      const { page, fonts, overflow } = await openPage(join(dir, file), w, h);
      if (overflow.length) console.warn(`[${slug}/${file}] aviso: elementos fora do canvas:`, overflow.slice(0, 5));
      if (!isReel) {
        await page.screenshot({ path: outPath, fullPage: false });
        state.files[file] = { hash, out: outName, width: w, height: h, fonts };
        console.log(`[${slug}/${file}] ok ${w}x${h} -> ${outName} fontes=${fonts.join(',')}`);
      } else {
        const dur = parseFloat(meta(html, 'reel-duration', '12'));
        const fps = parseInt(meta(html, 'reel-fps', '30'), 10);
        const coverT = parseFloat(meta(html, 'reel-cover', '1'));
        const frames = Math.round(dur * fps);
        const fdir = join(dir, '.frames'); rmSync(fdir, { recursive: true, force: true }); mkdirSync(fdir);
        const hasSeek = await page.evaluate(() => typeof window.__seek === 'function');
        if (!hasSeek) throw new Error('reel sem window.__seek(t)');
        for (let i = 0; i < frames; i++) {
          await page.evaluate(t => window.__seek(t), i / fps);
          await page.screenshot({ path: join(fdir, `f${String(i).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 92, fullPage: false }); // jpeg: ~6x mais rápido que png
          if (i % 60 === 0) console.log(`[${slug}] frame ${i}/${frames}`);
        }
        await page.evaluate(t => window.__seek(t), coverT);
        await page.screenshot({ path: join(dir, 'reel-cover.png'), fullPage: false });
        const wav = join(fdir, 'audio.wav');
        execFileSync('node', [join(root, 'scripts/audio.mjs'), wav, String(dur), audioOpts], { stdio: 'inherit' });
        execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', join(fdir, 'f%05d.jpg'), '-i', wav,
          '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', String(fps),
          '-c:a', 'aac', '-b:a', '96k', '-shortest', '-movflags', '+faststart', outPath], { stdio: 'inherit' });
        rmSync(fdir, { recursive: true, force: true });
        const size = statSync(outPath).size;
        state.files[file] = { hash, out: outName, width: w, height: h, fonts, duration: dur, fps, frames, bytes: size, cover: 'reel-cover.png' };
        console.log(`[${slug}/${file}] ok reel ${w}x${h} ${dur}s ${fps}fps -> ${outName} (${(size / 1e6).toFixed(1)} MB) fontes=${fonts.join(',')}`);
      }
      await page.close();
      rendered++; touched = true;
    } catch (e) {
      console.error(`[${slug}/${file}] FALHA:`, e.message); failures++;
    }
  }
  if (touched) { state.renderedAt = new Date().toISOString(); writeFileSync(metaPath, JSON.stringify(state, null, 2) + '\n'); }
}
await browser.close();
console.log(`renderizados: ${rendered}, falhas: ${failures}`);
if (failures) process.exit(1);
