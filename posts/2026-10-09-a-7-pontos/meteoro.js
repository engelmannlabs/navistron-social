// Desenha um meteoro do Navistron com 0–7 rachaduras acesas, reproduzindo drawMeteor() e spawnMeteor() do jogo
// (src/app/play/page.js, conferido em 01/10/2026): polígono de 8–12 vértices, cor pelo "calor" (heat) e 7 grupos de
// rachaduras pré-gerados no nascimento, recortados pelo contorno. No jogo, o nível aceso é
// min(7, ceil((1 - vida/vidaMáxima) * 7)). Aqui as espessuras são escaladas pelo raio (r / 40) para a arte ampliada.
window.drawNavMeteor = function (ctx, x, y, r, level, seed, heat, crackScale) {
  const cs = crackScale || 1; // engrossa só as rachaduras (para meteoros pequenos na arte)
  let s = seed >>> 0;
  const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
  const k = r / 40;
  const n = 8 + Math.floor(rnd() * 5), pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, d = r * (0.7 + rnd() * 0.3);
    pts.push({ x: Math.cos(a) * d, y: Math.sin(a) * d });
  }
  const cracks = [];
  for (let c = 0; c < 7; c++) {
    const sa = rnd() * Math.PI * 2, sd = r * (0.05 + rnd() * 0.2);
    let qx = Math.cos(sa) * sd, qy = Math.sin(sa) * sd;
    const segs = [];
    const dir = sa + (rnd() - 0.5) * 1.2;
    const nSeg = 3 + Math.floor(rnd() * 3);
    const step = r * (0.55 + rnd() * 0.35) / nSeg;
    for (let q = 0; q < nSeg; q++) {
      const jit = (rnd() - 0.5) * 0.7;
      const nx = qx + Math.cos(dir + jit) * step, ny = qy + Math.sin(dir + jit) * step;
      segs.push({ x1: qx, y1: qy, x2: nx, y2: ny });
      qx = nx; qy = ny;
      if (rnd() < 0.45) {
        const ba = dir + (rnd() > 0.5 ? 1 : -1) * (0.4 + rnd() * 0.6), bd = step * (0.3 + rnd() * 0.4);
        segs.push({ x1: qx, y1: qy, x2: qx + Math.cos(ba) * bd, y2: qy + Math.sin(ba) * bd });
      }
    }
    cracks.push(segs);
  }
  const path = () => {
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
  };
  ctx.save(); ctx.translate(x, y);
  const aa = 0.06 + heat * 0.25;
  const ag = ctx.createRadialGradient(0, 0, r * 0.3, 0, 0, r * 1.9);
  ag.addColorStop(0, `rgba(255,${Math.floor(140 - heat * 140)},40,0)`);
  ag.addColorStop(0.5, `rgba(255,${Math.floor(80 - heat * 80)},20,${aa})`);
  ag.addColorStop(1, 'rgba(255,0,0,0)');
  ctx.beginPath(); ctx.arc(0, 0, r * 1.9, 0, Math.PI * 2); ctx.fillStyle = ag; ctx.fill();
  path();
  const r1 = Math.floor(154 + heat * 90), g1 = Math.floor(110 - heat * 90), b1 = Math.floor(80 - heat * 60);
  const rg = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
  rg.addColorStop(0, `rgb(${r1},${g1},${b1})`);
  rg.addColorStop(0.6, `rgb(${Math.floor(r1 * 0.6)},${Math.floor(g1 * 0.5)},${Math.floor(b1 * 0.4)})`);
  rg.addColorStop(1, '#150500');
  ctx.fillStyle = rg; ctx.fill();
  ctx.strokeStyle = heat > 0.5 ? 'rgba(255,60,0,.9)' : `rgba(${r1},${Math.max(g1 - 20, 0)},20,.75)`;
  ctx.lineWidth = (1.5 + heat * 1.5) * k; ctx.stroke();
  const lv = Math.max(0, Math.min(7, level));
  if (lv > 0) {
    ctx.save(); path(); ctx.clip();
    for (let c = 0; c < lv; c++) {
      const t = c / 6;
      ctx.strokeStyle = `rgba(255,${Math.floor(180 - t * 130)},${Math.floor(80 - t * 70)},${(0.5 + t * 0.45).toFixed(2)})`;
      ctx.lineWidth = (0.7 + t * 1.0) * k * cs;
      ctx.shadowColor = `rgba(255,${Math.floor(120 - t * 100)},30,0.8)`;
      ctx.shadowBlur = (4 + t * 6) * k;
      ctx.beginPath();
      for (const sg of cracks[c]) { ctx.moveTo(sg.x1, sg.y1); ctx.lineTo(sg.x2, sg.y2); }
      ctx.stroke();
    }
    ctx.restore();
  }
  ctx.fillStyle = 'rgba(0,0,0,.2)';
  for (let i = 0; i < 4; i++) {
    const cx = Math.sin(i * 2.3) * 0.4 * r, cy = Math.cos(i * 1.7) * 0.4 * r, cr = r * (0.1 + i * 0.04);
    ctx.beginPath(); ctx.ellipse(cx, cy, cr, cr * 0.6, i, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
};
