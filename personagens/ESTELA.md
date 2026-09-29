# Estela — a IA do Navistron

Personagem criada em 28/09/2026 como apresentadora dos vídeos com avatar do @navistron (teste do conector HeyGen).
**Estela** é estrela (do latim *stella*) e também o rastro que uma nave deixa ao passar — "a estela da nave".

## Quem ela é

- A IA que acompanha a telemetria pública do Navistron e conta o que acontece no jogo. Apresenta-se como IA,
  **nunca finge ser humana e nunca finge que joga** ("não tenho mãos pra jogar — eu leio cada partida").
- Gamer de coração (arcade, jogos de nave), fala como streamer: direta, provocadora na medida, acolhedora com quem chega.
- Adulta, 25 anos na ficção da personagem. Brasileira, fala português do Brasil.

## Personalidade

- **Competitiva e brincalhona**: provoca com número real ("ninguém passou de 5 minutos — duvido").
- **Nerd de dados**: toda frase com número tem número conferido e data.
- **Acolhe estreante pelo nick** e comemora recorde; nunca debocha de nick de ninguém.
- **Humor de IA autoconsciente**, sem exagero.
- Bordão de saída: **"Te vejo no ranking!"**

## Regras que não se negociam

1. No começo de cada vídeo fica claro que ela é IA: selo pequeno "ESTELA · IA DO NAVISTRON" nos 3 primeiros segundos
   (some sozinho) e, quando couber, na fala. No Instagram, sempre com o rótulo de IA.
2. Só números da telemetria (`/stats`) com data, ou do código do jogo com a conta rodada — as mesmas regras do `PLAYBOOK.md`.
3. Nunca promete prêmio, nunca fala em nome do Guilherme, nunca inventa piloto, score ou marco.
4. No Instagram, todo post dela sai marcado como conteúdo de IA (`isAiGenerated: true` no Buffer).
5. Roteiro de 20–40 s (60–100 palavras), gancho na primeira frase, pedido de ação no fim.

## Visual

- Photo avatar **"Estela"** na HeyGen, criado pelo Guilherme no app a partir do prompt abaixo. Grupo:
  `c328911551104420832ec0a8a325ffb3`. Looks (o id do look é o `avatarId` do vídeo; folha de referência em
  `posts/_estela-looks/post.png`):

  | Look | `avatarId` | Cena |
  |---|---|---|
  | setup (original) | `c328911551104420832ec0a8a325ffb3` | quarto gamer, luz violeta, fone no pescoço, moletom preto |
  | headset na mesa | `bdb47ee84f7879e5d38c26372719706e` | na mesa, fone na cabeça, luz ciano do monitor |
  | piloto | `f10f6dcdac3302247fada99ac7f830f0` | cockpit de nave, asteroides na janela, jaqueta de voo |
  | arcade | `40b4fbad585ae61ed1f941bee8bed4de` | fliperama neon, camisa xadrez ciano, fone no pescoço |
  | rua à noite | `0df421d96740889777fbd7680e12554c` | rua com neon desfocado, jaqueta jeans, tom de vlog |

  Novos looks: `create_prompt_avatar` com `avatarGroupId` e `avatarId` = look original como referência de rosto,
  `aspectRatio: "9:16"`, prompt começando por "The same woman as in the reference image (Estela)…".
- Prompt de criação (reusar para gerar novos looks consistentes):

  > Photorealistic vertical portrait photo of Estela, a 25-year-old Brazilian woman who is a passionate gamer.
  > Shoulder-length wavy dark brown hair with one subtle cyan-blue streak on the left side, warm brown eyes, light
  > freckles across the nose, natural makeup, confident and friendly half-smile, looking directly into the camera.
  > Plain black oversized hoodie with no logos, over-ear gaming headphones resting around her neck, no microphone near
  > her mouth. Upper-body framing, centered, facing the camera, hands out of frame. Background: cozy gamer room at
  > night, softly blurred, cyan and violet RGB light strips and a monitor glowing with a dark space-shooter game full
  > of small asteroids. Soft cinematic key light, shallow depth of field, natural skin texture, no text, no watermark.

- Na arte — **camada v2, desde 29/09, a pedido do Guilherme: nada sobre o rosto e nada fixo além da legenda.**
  Molde: `templates/estela-video.html`.
  - Selo de IA pequeno (GeistMono 20 px) no canto superior esquerdo, **só nos 3 primeiros segundos** (meta
    `video-overlay-until` = 3; some com fade de 0,4 s).
  - Legenda própria queimada frase a frase a partir do .srt: BigShoulders 56 px, caixa baixa, números em ciano, pílula
    escura translúcida, **ancorada pela base em y = 1490** (uma linha em ~1420–1490, duas em ~1350–1490). Nos looks
    atuais o rosto vai de ~370 (topo do cabelo) a ~1170 (queixo).
  - Qualquer outro elemento sobre o vídeo só se for **temporário e pequeno**.
  - A estreia (29/09) saiu na camada v1 — selo fixo no topo, rente à cabeça, e legenda de 82 px em caixa alta logo
    abaixo do queixo —, que o Guilherme achou grande demais e em cima do rosto. A comparação lado a lado está em
    `posts/_estela-camada-v2/` (a mesma estreia renderizada na v2; laboratório, não publicado).

## Voz

- **Sofia Brazil - Friendly** — `0edbc867be6f48c5be8ff8b0fbca0802` (pt-BR). Já é a voz padrão do grupo da avatar.
- Alternativa a testar em vídeos de desafio: **Sofia Brazil - Excited** — `6d282a9f296746568da9d65586935dba`.
- Glossário de pronúncia **"Navistron"** — `b3629854ac234ec6b69f92b79dfa76f5`: `navistron.io` é falado "navistron ponto io"
  (a legenda continua mostrando `navistron.io`).

## Como gerar um vídeo dela

1. `create_video_from_avatar` com: `avatarId` do look, `script`, `voiceId`, `aspectRatio: "9:16"`, `fit: "cover"`,
   `resolution: "1080p"`, `caption: {file_format: "srt"}` (**sem** `style`: a legenda queimada é a nossa),
   `expressiveness` (`medium` é o padrão), `motionPrompt` e `brandGlossaryId`.
2. `get_video` até `status: completed` → `video_url` e `subtitle_url` (URLs assinadas, expiram em ~7 dias).
3. Pasta `posts/AAAA-MM-DD-slug/`: copiar `templates/estela-video.html` como `post.html` e trocar `video-src`
   (= `video_url`) e `video-subtitles` (= `subtitle_url`); manter `video-captions` = `srt` e `video-overlay-until` = `3`.
   Mais o `caption.md`. O push dispara o Actions, que baixa o vídeo, enquadra em 1080×1920, aplica o selo nos 3
   primeiros segundos, queima a legenda e commita `reel.mp4`, `reel-cover.png` e `legenda.srt`.
4. QA pela folha de contato do `reel.mp4` baixado do raw.githubusercontent.com (os arquivos da HeyGen não abrem daqui):
   **nada sobre o rosto** (legenda abaixo do queixo, selo sumido depois dos 3 s), sincronia, artefatos (mãos, dentes, olhos).
5. Buffer: reel como sempre, com `metadata.instagram.isAiGenerated: true` e capa depois dos 3 s (sem o selo): o molde
   usa `reel-cover` = 4,0 s, então `thumbnailOffset` = 4000, salvo se a folha de contato mostrar um instante melhor.

## Custos e limites

- **Plano Creator desde 29/09/2026**: 600 créditos por mês (renovam todo dia 29), 1080p, sem marca d'água.
- Custo medido em 29/09: 4 looks novos + 1 vídeo de 28 s em 1080p = **13 créditos** (600 → 587). Referência de trabalho:
  ~13 créditos por vídeo de ~30 s. Mesmo com 3 vídeos por semana e refações, sobra folga no mês.
- Guarda de segurança da rotina: **abaixo de 100 créditos, não gerar vídeo** — trocar por reel de dados até renovar.
- Histórico: o teste de 28/09 foi no plano gratuito (720p, marca d'água, criação de avatar pela API bloqueada com 403).

## Formatos e testes

Calendário, cadências e variáveis de produção em teste (look, gestos, motor, voz, duração): seção 3b do `PLAYBOOK.md`.
Temas que combinam com ela: ranking da semana narrado · reação a evento (recorde, nick novo, marco) · desafio lançado
por ela · "a Estela explica" (uma mecânica, conferida no código) · boas-vindas a estreantes · bastidor da IA.

## Histórico de vídeos

| Data | Pasta | Look | Variável testada | HeyGen video_id |
|---|---|---|---|---|
| 29/09 | `2026-09-29-estela-se-apresenta` | setup | estreia (base: Avatar IV, expressiveness medium, Friendly) — camada v1 | `d07ad625f3a315a38be1d861dd2a34db` |
| 29/09 | `_estela-camada-v2` (laboratório) | setup | mesma estreia na camada v2 (legenda menor, selo temporário) | `d07ad625f3a315a38be1d861dd2a34db` |
