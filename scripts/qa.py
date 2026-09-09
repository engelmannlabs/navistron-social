#!/usr/bin/env python3
"""Pré-visualização local de um post (Python + Playwright), para conferir a arte antes do push.

Uso: python3 scripts/qa.py posts/AAAA-MM-DD-slug [saida.png]
  - imagem única / carrossel: renderiza cada *.html da pasta -> preview-<nome>.png (ou `saida.png` se houver só um)
  - reel (post.html com <meta name="post-type" content="reel">): monta um contact sheet 3x4 com 12 frames
    ao longo da duração (preview-reel.png), para avaliar gancho, legibilidade e zonas seguras.
Requisitos: playwright (python) com Chromium; fontes em assets/fonts (bash scripts/setup-fonts.sh).
Sai com código 1 se alguma @font-face falhar ou se houver elemento visível fora do canvas.
"""
import json, re, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

post_dir = Path(sys.argv[1]).resolve()
out_arg = Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else None
htmls = sorted(post_dir.glob("*.html"))
if not htmls:
    print("nenhum .html em", post_dir, file=sys.stderr); sys.exit(1)

def meta(html, name, default):
    m = re.search(r'name="%s"\s+content="([^"]+)"' % name, html)
    return m.group(1) if m else default

problems = []
with sync_playwright() as p:
    b = p.chromium.launch()
    for html_path in htmls:
        html = html_path.read_text(encoding="utf-8")
        is_reel = html_path.name == "post.html" and meta(html, "post-type", "image") == "reel"
        w, h = map(int, meta(html, "post-size", "1080x1920" if is_reel else "1080x1440").split("x"))
        pg = b.new_page(viewport={"width": w, "height": h}, device_scale_factor=1)
        pg.goto(html_path.as_uri(), wait_until="networkidle")
        pg.evaluate("document.fonts.ready.then(() => true)")
        pg.wait_for_timeout(400)
        fonts = pg.evaluate("[...document.fonts].map(f => ({family: f.family, status: f.status}))")
        errored = [f for f in fonts if f["status"] == "error"]
        if errored:
            problems.append(f"{html_path.name}: fontes com erro {errored}")
        overflow_js = """() => {
          const W = document.documentElement.clientWidth, H = document.documentElement.clientHeight, out = [];
          for (const el of document.body.querySelectorAll('*')) {
            const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
            if (getComputedStyle(el).opacity === '0') continue;
            if (r.left < -1 || r.top < -1 || r.right > W + 1 || r.bottom > H + 1) out.push((el.className || el.tagName) + ' ' + JSON.stringify([r.left|0, r.top|0, r.right|0, r.bottom|0]));
          }
          return out; }"""
        if not is_reel:
            out = out_arg if (out_arg and len(htmls) == 1) else post_dir / f"preview-{html_path.stem}.png"
            overflow = pg.evaluate(overflow_js)
            pg.screenshot(path=str(out))
            print(json.dumps({"file": html_path.name, "size": f"{w}x{h}", "out": str(out), "fonts": [f["family"] for f in fonts if f["status"] == "loaded"], "overflow": overflow[:8]}, ensure_ascii=False))
            if overflow: problems.append(f"{html_path.name}: fora do canvas {overflow[:4]}")
        else:
            from PIL import Image
            dur = float(meta(html, "reel-duration", "12"))
            times = [round(dur * k / 11, 2) for k in range(12)]
            tiles = []
            worst = []
            for t in times:
                pg.evaluate("t => window.__seek(t)", t)
                overflow = pg.evaluate(overflow_js)
                if overflow: worst.append((t, overflow[:3]))
                png = post_dir / ".qa_frame.png"
                pg.screenshot(path=str(png))
                tiles.append(Image.open(png).convert("RGB").resize((w // 4, h // 4)))
            png.unlink(missing_ok=True)
            cols, rows = 3, 4
            sheet = Image.new("RGB", (cols * (w // 4) + (cols + 1) * 12, rows * (h // 4) + (rows + 1) * 12), (30, 30, 40))
            for i, im in enumerate(tiles):
                x = 12 + (i % cols) * (w // 4 + 12); y = 12 + (i // cols) * (h // 4 + 12)
                sheet.paste(im, (x, y))
            out = out_arg or post_dir / "preview-reel.png"
            sheet.save(out)
            print(json.dumps({"file": html_path.name, "reel": True, "size": f"{w}x{h}", "duration": dur, "times": times, "out": str(out), "fonts": [f["family"] for f in fonts if f["status"] == "loaded"], "overflow": worst[:4]}, ensure_ascii=False))
            if worst: problems.append(f"reel: fora do canvas em t={worst[0][0]} {worst[0][1]}")
        pg.close()
    b.close()

if problems:
    print("ERRO:", *problems, sep="\n  ", file=sys.stderr); sys.exit(1)
print("OK")
