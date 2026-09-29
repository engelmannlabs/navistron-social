// Renderiza as artes de posts/*/ (Playwright/Chromium + ffmpeg).
//   post.html            -> post.png           (imagem única; <meta name="post-size" content="1080x1440">)
//   slide-2.html, ...    -> slide-2.png, ...   (carrossel: post.png é o slide 1)
//   post.html com <meta name="post-type" content="reel"> -> reel.mp4 + reel-cover.png
//        metas do reel: post-size (1080x1920), reel-duration (s), reel-fps (30), reel-cover (s)
//        o HTML expõe window.__seek(t) para posicionar a animação no tempo t (determinístico)
//        áudio: scripts/audio.mjs gera a trilha; opções em audio.json (opcional) na pasta do post
//   post.html com <meta name="post-type" content="video"> -> reel.mp4 + reel-cover.png
//        vídeo pronto vindo de fora (ex.: avatar gerado na HeyGen). metas: video-src (URL https ou arquivo
//        da própria pasta), post-size (1080x1920), reel-cover (s). O vídeo é enquadrado em 9:16 (cover),
//        normalizado para 30 fps / H.264 / AAC, e o próprio post.html vira uma CAMADA TRANSPARENTE por cima
//        (marca, selo de IA) — por isso o body do HTML deve ter fundo transparente. Opcional: video-subtitles
//        (URL ou arquivo .srt) é salvo como legenda.srt na pasta do post; com video-captions = "srt", cada frase
//        do .srt é queimada no vídeo usando o elemento #cap do post.html como molde (tipografia da marca, na zona
//        segura), com números destacados em <b>. Opcional: video-overlay-until (s) limita a camada base (tudo do
//        post.html menos a legenda, ex.: o selo de IA) aos primeiros N segundos, com fade de saída; sem essa meta a
//        camada fica o vídeo inteiro. A fonte externa é baixada
//        uma única vez: com o reel.mp4 já gerado e o HTML igual, nunca re-baixa (nem com --all), porque
//        URLs assinadas expiram.
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
// ffmpeg: do sistema, ou o binário estático instalado pelo setup-fonts.sh (npm ffmpeg-static)
const FFMPEG = process.env.FFMPEG_PATH || (existsSync(join(root, 'node_modules/ffmpeg-static/ffmpeg')) ? join(root, 'node_modules/ffmpeg-static/ffmpeg') : 'ffmpeg');
const meta = (html, name, def) => { const m = html.match(new RegExp(`name="${name}"\\s+content="([^"]+)"`)); return m ? m[1] : def; };

// duração de um arquivo de mídia (s), lida do cabeçalho que o ffmpeg imprime; null se não conseguir
function probeDuration(file) {
  try { execFileSync(FFMPEG, ['-hide_banner', '-i', file], { stdio: 'pipe' }); }
  catch (e) {
    const m = String(e.stderr || '').match(/Duration: (\d+):(\d+):([\d.]+)/);
    if (m) return +((+m[1]) * 3600 + (+m[2]) * 60 + (+m[3])).toFixed(2);
  }
  return null;
}

// .srt -> [{start, end, text}] (s). Buracos curtos entre frases são fechados para a legenda não piscar.
function parseSrt(txt) {
  const toS = s => { const m = s.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return m ? (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]) + (+m[4]) / 1000 : NaN; };
  const cues = [];
  for (const block of txt.replace(/\r/g, '').split(/\n\s*\n/)) {
    const lines = block.trim().split('\n');
    const i = lines.findIndex(l => l.includes('-->'));
    if (i < 0) continue;
    const [a, b] = lines[i].split('-->').map(s => toS(s.trim()));
    const text = lines.slice(i + 1).join(' ').trim();
    if (text && !isNaN(a) && !isNaN(b) && b > a) cues.push({ start: a, end: b, text });
  }
  for (let k = 0; k < cues.length - 1; k++) if (cues[k + 1].start - cues[k].end < 0.35) cues[k].end = cues[k + 1].start;
  return cues;
}

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
    const type = file === 'post.html' ? meta(html, 'post-type', 'image') : 'image';
    const isReel = type === 'reel';
    const isVideo = type === 'video';
    const audioOpts = existsSync(join(dir, 'audio.json')) ? readFileSync(join(dir, 'audio.json'), 'utf8') : '{}';
    // vídeo externo: o hash depende só do HTML (mudança de template não pode forçar re-download de URL expirada)
    const hash = isVideo ? sha(html) : sha(html + deps + (isReel ? audioOpts : ''));
    const outName = (isReel || isVideo) ? 'reel.mp4' : basename(file, '.html') + '.png';
    const outPath = join(dir, outName);
    const upToDate = existsSync(outPath) && state.files[file] && state.files[file].hash === hash;
    if (upToDate && (!all || isVideo)) continue;

    const [w, h] = meta(html, 'post-size', (isReel || isVideo) ? '1080x1920' : '1080x1440').split('x').map(Number);
    try {
      const { page, fonts, overflow } = await openPage(join(dir, file), w, h);
      if (overflow.length) console.warn(`[${slug}/${file}] aviso: elementos fora do canvas:`, overflow.slice(0, 5));
      if (isVideo) {
        const src = meta(html, 'video-src', '');
        if (!src) throw new Error('post-type video sem <meta name="video-src">');
        const coverT = parseFloat(meta(html, 'reel-cover', '1'));
        const fdir = join(dir, '.frames'); rmSync(fdir, { recursive: true, force: true }); mkdirSync(fdir);
        const srcPath = join(fdir, 'src.mp4');
        if (/^https?:\/\//.test(src)) {
          const res = await fetch(src);
          if (!res.ok) throw new Error(`download do vídeo falhou: HTTP ${res.status}`);
          writeFileSync(srcPath, Buffer.from(await res.arrayBuffer()));
        } else {
          const local = join(dir, src);
          if (!existsSync(local)) throw new Error('video-src local não encontrado: ' + src);
          writeFileSync(srcPath, readFileSync(local));
        }
        // legenda em texto (opcional): guardada ao lado do vídeo para reuso (tempos exatos de cada frase)
        const subs = meta(html, 'video-subtitles', '');
        if (subs) {
          let srt = '';
          if (/^https?:\/\//.test(subs)) {
            const rs = await fetch(subs);
            if (rs.ok) srt = await rs.text(); else console.warn(`[${slug}] legenda não baixada: HTTP ${rs.status}`);
          } else if (existsSync(join(dir, subs))) srt = readFileSync(join(dir, subs), 'utf8');
          if (srt) writeFileSync(join(dir, 'legenda.srt'), srt);
        }
        const srcDur = probeDuration(srcPath);
        if (!srcDur) throw new Error('vídeo de origem ilegível (sem duração)');
        // legenda própria (opcional): uma camada transparente por frase do .srt, desenhada no #cap do post.html
        const capMode = meta(html, 'video-captions', 'off');
        // camada base temporária (opcional): some com fade depois de N segundos — sobreposição mínima sobre o vídeo
        const overlayUntil = Math.max(0, parseFloat(meta(html, 'video-overlay-until', '0')) || 0);
        const cues = capMode === 'srt' && existsSync(join(dir, 'legenda.srt')) ? parseSrt(readFileSync(join(dir, 'legenda.srt'), 'utf8')) : [];
        if (capMode === 'srt' && !cues.length) throw new Error('video-captions=srt, mas não há legenda.srt utilizável');
        const hasCap = await page.evaluate(() => !!document.getElementById('cap'));
        if (cues.length && !hasCap) throw new Error('video-captions=srt exige um elemento #cap no post.html');
        await page.addStyleTag({ content: 'body.__caponly > *:not(#cap){visibility:hidden !important}' });
        // camada base transparente = o próprio post.html sem fundo e sem legenda
        const overlayPath = join(fdir, 'overlay.png');
        if (hasCap) await page.evaluate(() => { const c = document.getElementById('cap'); c.innerHTML = ''; c.classList.remove('on'); });
        await page.screenshot({ path: overlayPath, fullPage: false, omitBackground: true });
        const capPaths = [];
        if (cues.length) {
          await page.evaluate(() => document.body.classList.add('__caponly'));
          for (let k = 0; k < cues.length; k++) {
            await page.evaluate(text => {
              const esc = s => s.replace(/[&<>]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
              const c = document.getElementById('cap');
              c.innerHTML = '<span>' + esc(text).replace(/(\d[\d.,:%]*\d|\d)/g, '<b>$1</b>') + '</span>';
              c.classList.add('on');
            }, cues[k].text);
            // fonte da legenda carregada antes do print: pede a face exata (peso/tamanho/família) com o texto da frase
            await page.evaluate(async () => {
              const sp = document.querySelector('#cap span');
              if (sp) { const cs = getComputedStyle(sp); await document.fonts.load(`${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`, sp.textContent); }
              await document.fonts.ready;
            });
            const cp = join(fdir, `cap${String(k).padStart(3, '0')}.png`);
            await page.screenshot({ path: cp, fullPage: false, omitBackground: true });
            capPaths.push(cp);
          }
          // nenhuma fonte pode ter falhado durante as legendas (nunca publicar com fonte fallback)
          const capFonts = await page.evaluate(() => [...document.fonts].map(f => ({ family: f.family, status: f.status })));
          const bad = capFonts.filter(f => f.status === 'error');
          if (bad.length) throw new Error('fontes da legenda com erro: ' + bad.map(f => f.family).join(','));
          for (const f of capFonts) if (f.status === 'loaded' && !fonts.includes(f.family)) fonts.push(f.family);
        }
        let graph = `[0:v]scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h},fps=30,setsar=1[bg];`;
        if (overlayUntil > 0) {
          const fd = Math.min(0.4, overlayUntil / 2);
          graph += `[1:v]format=rgba,fade=t=out:st=${(overlayUntil - fd).toFixed(2)}:d=${fd.toFixed(2)}:alpha=1[ob];[bg][ob]overlay=0:0:format=auto:eof_action=pass[v0]`;
        } else graph += `[bg][1:v]overlay=0:0:format=auto[v0]`;
        cues.forEach((c, k) => {
          graph += `;[v${k}][${k + 2}:v]overlay=0:0:format=auto:enable='between(t,${c.start.toFixed(3)},${c.end.toFixed(3)})'[v${k + 1}]`;
        });
        const baseIn = overlayUntil > 0 ? ['-loop', '1', '-framerate', '30', '-t', String(srcDur), '-i', overlayPath] : ['-i', overlayPath];
        execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', srcPath, ...baseIn, ...capPaths.flatMap(cp => ['-i', cp]),
          '-filter_complex', graph, '-map', `[v${cues.length}]`, '-map', '0:a?', '-c:v', 'libx264', '-preset', 'medium',
          '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', '-ar', '44100', '-movflags', '+faststart', outPath],
          { stdio: 'inherit' });
        execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-ss', String(coverT), '-i', outPath, '-frames:v', '1',
          join(dir, 'reel-cover.png')], { stdio: 'inherit' });
        rmSync(fdir, { recursive: true, force: true });
        const dur = probeDuration(outPath);
        const size = statSync(outPath).size;
        // a URL assinada não vai para o render.json: guarda só o endereço sem query string
        state.files[file] = { hash, out: outName, type: 'video', source: src.split('?')[0], width: w, height: h, fonts,
          duration: dur, fps: 30, bytes: size, cover: 'reel-cover.png', captions: cues.length, overlayUntil: overlayUntil || null };
        console.log(`[${slug}/${file}] ok vídeo externo ${w}x${h} ${dur}s -> ${outName} (${(size / 1e6).toFixed(1)} MB)`);
      } else if (!isReel) {
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
        execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', join(fdir, 'f%05d.jpg'), '-i', wav,
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
