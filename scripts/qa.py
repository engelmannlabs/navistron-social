#!/usr/bin/env python3
"""Pré-visualização local de um post (Python + Playwright), para conferir a arte antes do push.

Uso: python3 scripts/qa.py posts/AAAA-MM-DD-slug [saida.png]
Requisitos: playwright (python) com Chromium instalado; fontes em assets/fonts (npm run fonts).
Sai com código 1 se alguma @font-face falhar ou se houver elemento fora do canvas.
"""
import json, re, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

post_dir = Path(sys.argv[1]).resolve()
out = Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else post_dir / "preview.png"
html_path = post_dir / "post.html"
html = html_path.read_text(encoding="utf-8")
m = re.search(r'name="post-size"\s+content="(\d+)x(\d+)"', html)
w, h = (int(m.group(1)), int(m.group(2))) if m else (1080, 1440)

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": w, "height": h}, device_scale_factor=1)
    pg.goto(html_path.as_uri(), wait_until="networkidle")
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(400)
    fonts = pg.evaluate("[...document.fonts].map(f => ({family: f.family, status: f.status}))")
    overflow = pg.evaluate("""() => {
      const W = document.documentElement.clientWidth, H = document.documentElement.clientHeight, out = [];
      for (const el of document.body.querySelectorAll('*')) {
        const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
        if (r.left < -1 || r.top < -1 || r.right > W + 1 || r.bottom > H + 1) out.push((el.className || el.tagName) + ' ' + JSON.stringify([r.left|0, r.top|0, r.right|0, r.bottom|0]));
      }
      return out; }""")
    pg.screenshot(path=str(out))
    b.close()

errored = [f for f in fonts if f["status"] == "error"]
print(json.dumps({"size": f"{w}x{h}", "out": str(out), "fonts": fonts, "overflow": overflow[:8]}, ensure_ascii=False, indent=2))
if errored:
    print("ERRO: fontes não carregaram:", errored, file=sys.stderr); sys.exit(1)
if overflow:
    print("ERRO: elementos fora do canvas:", overflow[:8], file=sys.stderr); sys.exit(1)
print("OK")
