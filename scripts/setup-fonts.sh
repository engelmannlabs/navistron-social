#!/usr/bin/env bash
# Baixa as fontes variáveis (woff2, OFL) do npm/fontsource e as coloca em assets/fonts/
# com nomes fixos usados por templates/base.css. Idempotente.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/fonts
if [ -f assets/fonts/BigShoulders.woff2 ] && [ -f assets/fonts/GeistMono.woff2 ] && [ -f assets/fonts/Tektur.woff2 ]; then
  echo "fontes já presentes"; exit 0
fi
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
