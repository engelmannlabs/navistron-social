/* Navistron Social — motor de montagem com gameplay real (reels 9:16, 1080x1920, 30 fps). Guia: MONTAGEM.md.
   O post define window.MONTAGE antes de carregar este arquivo:
     { dur, srcW, srcH, footage: { main: '../../footage/<arquivo>.mp4' }, touch: { minY } ou null,
       view: [cx, cy, z] (padrão), cuts: [ { at, dur, from, speed, view, punch, flash, shake, freeze, dim } ],
       overlay(t, k, lt) }   // atualiza as camadas de texto do post (k = corte atual, lt = tempo dentro dele)
   Cada corte vira um trecho em window.__footage; o scripts/render.mjs extrai os quadros em .frames/c<k>/00001.jpg…
   (30/speed quadros por segundo da fonte) e, com touch, acha o círculo do "mostrar toques" do Android em cada quadro
   (window.__dots). window.__seek(t) é assíncrono: espera o quadro carregar antes do print.
   view: [cx, cy, z] = ponto da fonte (px) no centro da tela e zoom sobre a largura cheia; ou { from, to, at, d }.
   speed < 1 = câmera lenta (0,5 = 2x; 0,25 = 4x — a fonte do celular tem ~120 fps); freeze = segundo local em que a
   imagem congela (o resto do corte repete o quadro, cinza e desfocado); punch = zoom de entrada (0,08 = 8%); flash = cor
   RGB do clarão de entrada ('255,255,255'); shake = [[segundo local, força em px], ...]; dim = 0..1 (escurece, p/ o CTA).
   Também injeta as classes comuns das camadas (m-scrim, m-kick, m-chip, m-bub, m-pill, m-hud, m-cnt) e expõe
   window.MU = { clamp, seg, out3, outBack } para o overlay do post. */
(function () {
  const M = window.MONTAGE;
  const FPS = 30, W = 1080, H = 1920;
  const SW = M.srcW, SH = M.srcH, K0 = W / SW;
  const BG = M.bg || 'rgb(2,2,14)';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const seg = (t, a, d) => clamp((t - a) / d, 0, 1);
  const out3 = p => 1 - Math.pow(1 - p, 3);
  const outBack = p => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); };
  const inout = p => p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
  window.MU = { clamp, seg, out3, outBack };

  const css = document.createElement('style');
  css.textContent = `
    #v { position: absolute; inset: 0; }
    .m-scrim { position: absolute; left: 0; right: 0; top: 220px; height: 600px; opacity: 0; background: radial-gradient(ellipse 620px 310px at 50% 50%, rgba(5,7,15,0.82), rgba(5,7,15,0)); }
    .m-pill { display: inline-block; padding: 8px 20px; border-radius: 10px; background: rgba(5,7,15,0.88); }
    .m-kick, .m-chip { position: absolute; left: 0; right: 0; top: 318px; text-align: center; opacity: 0; }
    .m-kick span { display: inline-block; padding: 12px 26px; border-radius: 12px; background: rgba(5,7,15,0.85); font-family: var(--font-ui); font-weight: 600; font-size: 34px; letter-spacing: 0.18em; color: var(--ink); text-transform: uppercase; }
    .m-kick b { color: var(--t1); } .m-kick.pink b { color: var(--t5); }
    .m-chip span { display: inline-flex; align-items: center; gap: 16px; padding: 14px 28px; border-radius: 40px; background: rgba(5,7,15,0.88); border: 2px solid rgba(143,163,199,0.35); font-family: var(--font-ui); font-weight: 600; font-size: 34px; letter-spacing: 0.14em; color: var(--ink); text-transform: uppercase; }
    .m-chip i { display: inline-block; width: 18px; height: 18px; border-radius: 50%; background: var(--t3); box-shadow: 0 0 14px var(--t3); }
    .m-chip.ok i { background: var(--t2); box-shadow: 0 0 14px var(--t2); }
    .m-chip em { font-style: normal; color: var(--muted); font-variant-numeric: tabular-nums; }
    .m-bub { position: absolute; left: 60px; right: 60px; top: 650px; text-align: center; opacity: 0; will-change: transform, opacity; }
    .m-bub .box { display: inline-block; max-width: 940px; padding: 22px 40px 28px; border-radius: 24px; background: rgba(5,7,15,0.88); border: 3px solid rgba(244,114,182,0.8); box-shadow: 0 0 60px rgba(244,114,182,0.35); }
    .m-bub .clk { font-family: var(--font-ui); font-weight: 600; font-size: 30px; letter-spacing: 0.22em; color: var(--t1); text-transform: uppercase; }
    .m-bub .say { white-space: pre-line; margin-top: 8px; font-family: var(--font-mono); font-weight: 800; font-size: 64px; line-height: 1.12; letter-spacing: 0.03em; color: var(--ink); }
    .m-hud { position: absolute; left: 0; right: 0; top: 640px; text-align: center; opacity: 0; }
    .m-hud .in { display: inline-flex; align-items: center; gap: 16px; padding: 12px 24px; border-radius: 14px; background: rgba(5,7,15,0.82); }
    .m-hud .lab { font-family: var(--font-mono); font-weight: 600; font-size: 32px; letter-spacing: 0.18em; color: #E8B931; }
    .m-hud i { display: inline-block; width: 38px; height: 38px; border-radius: 50%; border: 4px solid var(--t1); box-shadow: 0 0 12px rgba(34,211,238,0.6); }
    .m-hud i.on { background: #7df4ff; }
    .m-hud i.gold { border-color: var(--t3); box-shadow: 0 0 16px rgba(250,204,21,0.8); }
    .m-cnt { position: absolute; left: 0; right: 0; top: 392px; text-align: center; opacity: 0; will-change: transform; }
    .m-cnt span { font-family: var(--font-display); font-weight: 800; font-size: 230px; line-height: 1; color: var(--t1); text-shadow: 0 0 50px rgba(34,211,238,0.55), 0 4px 0 rgba(5,7,15,0.9); }
    .m-cnt.gold span { color: var(--t3); text-shadow: 0 0 60px rgba(250,204,21,0.7), 0 4px 0 rgba(5,7,15,0.9); }`;
  document.head.appendChild(css);

  // trechos a extrair (lidos pelo render.mjs)
  const jobs = M.cuts.map((c, k) => {
    const speed = c.speed || 1;
    const hold = c.freeze != null ? Math.min(c.freeze, c.dur) : c.dur;
    return { id: 'c' + k, src: M.footage[c.src || 'main'], from: +c.from.toFixed(4), fps: +(FPS / speed).toFixed(4),
      frames: Math.floor(hold * FPS + 1e-6) + 1, touch: M.touch || null };
  });
  window.__footage = jobs;

  const cv = document.getElementById('v');
  const ctx = cv.getContext('2d');
  const cache = new Map();
  function load(url) {
    if (cache.has(url)) return cache.get(url);
    const p = new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = url; });
    p.catch(() => cache.delete(url));
    cache.set(url, p);
    if (cache.size > 6) cache.delete(cache.keys().next().value);
    return p;
  }

  function viewAt(c, lt) {
    const v = c.view || M.view;
    let a = v, b = v, e = 0;
    if (!Array.isArray(v)) { a = v.from; b = v.to; e = inout(seg(lt, v.at || 0, v.d || c.dur)); }
    let cx = a[0] + (b[0] - a[0]) * e, cy = a[1] + (b[1] - a[1]) * e, z = a[2] + (b[2] - a[2]) * e;
    if (c.punch) z *= 1 + c.punch * (1 - out3(seg(lt, 0, 0.28)));
    const s = K0 * z, half = W / 2 / s;
    cx = clamp(cx, half, SW - half);                 // nunca mostra faixa preta dos lados
    return { cx, cy, s };
  }
  function shakeAt(c, lt) {
    let ox = 0, oy = 0;
    for (const [ts, amp] of (c.shake || [])) {
      const d = lt - ts; if (d < 0 || d > 0.45) continue;
      const f = amp * Math.exp(-d * 8), q = Math.floor(d * FPS);
      ox += f * Math.sin(q * 2.7 + 1.3); oy += f * Math.cos(q * 3.1 + 0.4);
    }
    return [ox, oy];
  }
  function scrims() {
    const top = ctx.createLinearGradient(0, 0, 0, 300);
    top.addColorStop(0, 'rgba(5,7,15,0.85)'); top.addColorStop(1, 'rgba(5,7,15,0)');
    ctx.fillStyle = top; ctx.fillRect(0, 0, W, 300);
    const y0 = M.scrimFrom || 1390, y1 = M.scrimTo || 1660;
    const bot = ctx.createLinearGradient(0, y0, 0, y1);
    bot.addColorStop(0, 'rgba(5,7,15,0)'); bot.addColorStop(1, 'rgba(5,7,15,1)');
    ctx.fillStyle = bot; ctx.fillRect(0, y0, W, y1 - y0);
    ctx.fillStyle = 'rgb(5,7,15)'; ctx.fillRect(0, y1, W, H - y1);
  }

  window.__seek = async function (t) {
    t = clamp(t, 0, M.dur - 1e-6);
    let k = 0;
    for (let i = 0; i < M.cuts.length; i++) if (t >= M.cuts[i].at - 1e-9) k = i;
    const c = M.cuts[k], lt = t - c.at, job = jobs[k];
    const ltF = c.freeze != null ? Math.min(lt, c.freeze) : lt;
    const idx = Math.min(job.frames - 1, Math.floor(ltF * FPS + 1e-6));
    let im = null;
    try { im = await load(`.frames/${job.id}/${String(idx + 1).padStart(5, '0')}.jpg`); } catch (e) { im = null; }
    ctx.save();
    ctx.fillStyle = BG; ctx.fillRect(0, 0, W, H);
    if (im) {
      const { cx, cy, s } = viewAt(c, lt);
      const [ox, oy] = shakeAt(c, lt);
      const dx = W / 2 - cx * s + ox, dy = H / 2 - cy * s + oy;
      let f = M.grade || 'saturate(1.2) contrast(1.06) brightness(1.1)';
      if (c.freeze != null && lt > c.freeze) { const q = out3(seg(lt, c.freeze, 0.3)); f += ` grayscale(${(0.9 * q).toFixed(3)}) brightness(${(1 - 0.5 * q).toFixed(3)}) blur(${(3 * q).toFixed(2)}px)`; }
      if (c.dim) f += ` brightness(${(1 - c.dim * out3(seg(lt, 0, 0.3))).toFixed(3)})`;
      ctx.filter = f;
      ctx.drawImage(im, dx, dy, SW * s, SH * s);
      ctx.filter = 'none';
      const d = window.__dots && window.__dots[job.id] && window.__dots[job.id][idx];
      if (d) {                                        // cobre o círculo do "mostrar toques"
        const x = dx + d[0] * s, y = dy + d[1] * s, r = 36 * s;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, BG); g.addColorStop(0.72, BG); g.addColorStop(1, 'rgba(2,2,14,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
    }
    scrims();
    if (c.flash) {
      const a = 0.38 * (1 - seg(lt, 0, 0.1));
      if (a > 0) { ctx.fillStyle = `rgba(${c.flash},${a.toFixed(3)})`; ctx.fillRect(0, 0, W, H); }
    }
    ctx.restore();
    if (M.overlay) M.overlay(t, k, lt);
  };
  window.__duration = M.dur;
})();
