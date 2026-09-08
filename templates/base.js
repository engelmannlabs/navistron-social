// Fundo: campo de estrelas + meteoros poligonais (assinatura visual do jogo).
// Determinístico: mesma seed => mesma imagem. Use data-seed no <canvas> para variar.
(function () {
  const c = document.getElementById('stars');
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = c.width, H = c.height;
  let s = parseInt(c.dataset.seed || '20260908', 10) >>> 0;
  const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
  // zona central protegida (sem estrelas brilhantes/meteoros sobre o conteúdo)
  const core = (c.dataset.core || '100,180,980,1380').split(',').map(Number); // x1,y1,x2,y2
  const inCore = (x, y) => x > core[0] && x < core[2] && y > core[1] && y < core[3];

  for (let i = 0; i < 900; i++) {
    const x = rnd() * W, y = rnd() * H, r = 0.4 + rnd() * 0.9, a = 0.12 + rnd() * 0.35;
    ctx.fillStyle = `rgba(210,225,255,${a})`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  for (let i = 0; i < 46; i++) {
    const x = rnd() * W, y = rnd() * H;
    if (inCore(x, y)) continue;
    const r = 1.2 + rnd() * 1.4;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
    g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(0.35, 'rgba(180,210,255,0.35)'); g.addColorStop(1, 'rgba(180,210,255,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * 5, 0, Math.PI * 2); ctx.fill();
  }
  for (let i = 0; i < 14; i++) {
    const x = rnd() * W, y = rnd() * H;
    if (inCore(x, y)) continue;
    const R = 10 + rnd() * 22, n = 8 + Math.floor(rnd() * 5);
    ctx.beginPath();
    for (let k = 0; k < n; k++) {
      const ang = (k / n) * Math.PI * 2, rr = R * (0.72 + rnd() * 0.28);
      const px = x + Math.cos(ang) * rr, py = y + Math.sin(ang) * rr;
      k ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(143,163,199,0.22)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = 'rgba(143,163,199,0.05)'; ctx.fill();
  }
})();
