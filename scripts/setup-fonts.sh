#!/usr/bin/env bash
# Prepara o ambiente de renderização (idempotente):
#  1) fontes variáveis (woff2, OFL) do npm/fontsource em assets/fonts/ com os nomes usados por templates/*.css
#  2) ffmpeg para os reels: usa o do sistema; se não houver, instala via apt (runner do GitHub) ou npm (ffmpeg-static)
set -euo pipefail
cd "$(dirname "$0")/.."

mkdir -p assets/fonts
if [ -f assets/fonts/BigShoulders.woff2 ] && [ -f assets/fonts/GeistMono.woff2 ] && [ -f assets/fonts/Tektur.woff2 ]; then
  echo "fontes já presentes"
else
  tmp=$(mktemp -d)
  pushd "$tmp" >/dev/null
  npm pack @fontsource-variable/big-shoulders@5.3.0 @fontsource-variable/geist-mono@5.3.0 @fontsource-variable/tektur@5.3.0 --silent
  for t in *.tgz; do
    rm -rf package; tar xzf "$t"
    case "$t" in
      *big-shoulders*) cp package/files/big-shoulders-latin-wght-normal.woff2 "$OLDPWD/assets/fonts/BigShoulders.woff2";;
      *geist-mono*)    cp package/files/geist-mono-latin-wght-normal.woff2    "$OLDPWD/assets/fonts/GeistMono.woff2";;
      *tektur*)        cp package/files/tektur-latin-wght-normal.woff2        "$OLDPWD/assets/fonts/Tektur.woff2";;
    esac
  done
  popd >/dev/null
  rm -rf "$tmp"
  ls -la assets/fonts
fi

if command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg: $(command -v ffmpeg)"
elif [ -x node_modules/ffmpeg-static/ffmpeg ]; then
  echo "ffmpeg: node_modules/ffmpeg-static/ffmpeg"
elif sudo -n true 2>/dev/null; then
  echo "instalando ffmpeg via apt…"
  sudo apt-get update -qq >/dev/null && sudo apt-get install -y -qq ffmpeg >/dev/null
  echo "ffmpeg: $(command -v ffmpeg)"
else
  echo "instalando ffmpeg-static via npm…"
  npm install --no-save --no-audit --no-fund ffmpeg-static
  echo "ffmpeg: node_modules/ffmpeg-static/ffmpeg"
fi
