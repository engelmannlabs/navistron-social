# navistron-social

Artes e operação dos posts do Instagram [@navistron](https://instagram.com/navistron), o jogo de nave
arcade em [navistron.io](https://navistron.io). Os posts são gerados a partir da **telemetria pública**
do jogo (`navistron.io/stats`) e das métricas do Buffer; a estratégia está em [`PLAYBOOK.md`](PLAYBOOK.md)
e a instrução completa da rodada diária em [`ROTINA.md`](ROTINA.md).

## Como funciona

```
posts/AAAA-MM-DD-slug/post.html   ← arte em HTML (1080×1440), usa templates/base.css + base.js
posts/AAAA-MM-DD-slug/caption.md  ← legenda publicada + metadados (pilar, gancho, horário, id no Buffer)
posts/AAAA-MM-DD-slug/post.png    ← renderizado pelo GitHub Actions (não editar à mão)
templates/                        ← design system "Telemetria Silenciosa" (cores dos tiers, componentes)
scripts/render.mjs                ← Playwright: HTML → PNG; falha se alguma fonte não carregar
scripts/qa.py                     ← pré-visualização local (Python) de um post antes do push
scripts/setup-fonts.sh            ← baixa as fontes variáveis (woff2, OFL) do npm/fontsource
log/experiments.md                ← registro de cada post e suas métricas
log/blog.md                       ← registro dos artigos diários do blog (repo navistron)
ROTINA.md                         ← instrução completa lida pelo Claude a cada rodada diária
```

Ao dar push em um `post.html`, o workflow [`render.yml`](.github/workflows/render.yml) renderiza o PNG e
faz commit de volta. A URL pública fica em
`https://raw.githubusercontent.com/engelmannlabs/navistron-social/main/posts/<slug>/post.png`
e é o que o Buffer usa para publicar no Instagram.

## Como a rotina diária roda

A rodada (Instagram + blog) roda todo dia às 11:00 de Brasília dentro da conversa persistente do Guilherme no
Claude (Cowork), com as permissões já concedidas ali — por isso nunca para para pedir autorização. O mecanismo é
um lembrete de uso único (`send_later`) vinculado à conversa: o primeiro passo de cada rodada é agendar a rodada
seguinte, e só então executar o dia. A instrução completa está em [`ROTINA.md`](ROTINA.md); para mudar o
comportamento, basta editar `ROTINA.md` ou `PLAYBOOK.md`.

## Rodar localmente

```bash
npm install            # playwright
npx playwright install chromium
npm run fonts          # assets/fonts/*.woff2
npm run render         # renderiza o que mudou (ou: npm run render:all)
python3 scripts/qa.py posts/<slug>   # preview rápido de um post
```

Fontes: Big Shoulders, Geist Mono e Tektur (SIL Open Font License), via `@fontsource-variable/*`.
