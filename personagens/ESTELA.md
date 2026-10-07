# Estela — a IA do Navistron

Personagem criada em 28/09/2026 como apresentadora dos vídeos com avatar do @navistron (teste do conector HeyGen).
**Estela** é estrela (do latim *stella*) e também o rastro que uma nave deixa ao passar — "a estela da nave".

## Quem ela é

- Acompanha a telemetria pública do Navistron e conta o que acontece no jogo. É uma IA — e todo post dela sai com o
  rótulo de IA do Instagram —, mas **não fica dizendo isso**: fala do jogo. **Nunca finge ser humana e nunca diz que
  jogou uma partida**; fala do que viu na telemetria.
- Gamer de coração (arcade, jogos de nave), fala como streamer: direta, provocadora na medida, acolhedora com quem chega.
- Adulta, 25 anos na ficção da personagem. Brasileira, fala português do Brasil.

## Personalidade

- **Competitiva e brincalhona**: provoca com número real ("ninguém passou de 5 minutos — duvido").
- **Nerd de dados**: toda frase com número tem número conferido e data.
- **Acolhe estreante pelo nick** e comemora recorde; nunca debocha de nick de ninguém.
- **Humor leve e direto**, sem exagero.
- Bordão de saída: **"Te vejo no ranking!"**

## Regras que não se negociam

1. O aviso de IA é **só o rótulo de IA do Instagram** (`isAiGenerated: true` no Buffer), obrigatório em todo reel e
   todo story — sem ele, não publicar. Pedidos do Guilherme em 29/09: sem selo na arte e **sem dizer que é IA na fala
   ou na legenda** ("oi, eu sou a Estela, a IA do Navistron" não entra mais): ela vai direto ao conteúdo. A estreia e o
   1º story, que se apresentavam como IA, ficam como estão.
2. Só números da telemetria (`/stats`) com data, ou do código do jogo com a conta rodada — as mesmas regras do `PLAYBOOK.md`.
3. Nunca promete prêmio, nunca fala em nome do Guilherme, nunca inventa piloto, score ou marco.
4. No Instagram, todo post e todo story dela sai marcado como conteúdo de IA (`isAiGenerated: true` no Buffer).
5. Reels: roteiro de 20–40 s (60–100 palavras). Stories: 15–25 s (40–60 palavras). Gancho na primeira frase, pedido de
   ação no fim.
6. **Cenário lúdico criado para cada post** (pedidos do Guilherme em 03/10): todo reel e todo story dela se passa num
   cenário que ilustra o que ela fala **naquele post** — no story do boost arco-íris, ela no espaço com o arco-íris,
   pegando uma estrela, subindo num rastro de arco-íris como foguete e vendo os meteoros virarem fogos. Nada de cenário
   pronto ou catálogo por tema: os looks e os clipes nascem do roteiro do dia ("não crie previamente os cenários
   lúdicos… cada cenário deve ter a ver com o post do momento que será postado"). Não precisa ser dentro da casa dela —
   a regra de 29/09 ("cenas sempre em casa") caiu —, e nenhum vídeo repete o cenário do anterior. **Formato completo
   (vários cortes, cenas de ação e trilha) só nos reels; stories em take único num look do cenário do post** (decisão do
   Guilherme em 03/10, pelo custo). O jeito de fazer e o modo econômico estão em "Como gerar um vídeo dela".

## Visual

- Photo avatar **"Estela"** na HeyGen, criado pelo Guilherme no app a partir do prompt abaixo. Grupo:
  `c328911551104420832ec0a8a325ffb3`. Looks (o id do look é o `avatarId` do vídeo; folhas de referência em
  `posts/_estela-looks/post.png`, `posts/_estela-looks-casa/post.png` e nos laboratórios `posts/_lab-*-looks/`). Desde
  03/10 os looks nascem para cada post (regra 6): a tabela **não é um rodízio** — é o registro do que existe, e um look
  antigo só volta se um post pedir exatamente aquela cena:

  | Look | `avatarId` | Cena | Uso |
  |---|---|---|---|
  | sala (sofá) | `eb3a917ed2ffd85e7013c5703d583ed7` | sofá da sala à tarde, luz de janela, suéter cinza, jeito de selfie | casa (rodízio de 29/09 a 03/10) |
  | cozinha (café) | `1d5bda485d3c52745d0b5a5021e8b6fe` | cozinha de manhã, camisa xadrez, café, jeito de selfie | casa (rodízio de 29/09 a 03/10) |
  | escrivaninha na janela | `96fc8f5e11a2a991e0e1f13a53fd8655` | mesa junto à janela de dia, moletom creme, jeito de selfie | casa (rodízio de 29/09 a 03/10) |
  | quarto (luzinhas) | `07392bce3332e22ece64f19480181c3a` | beira da cama à noite, luzinhas, moletom preto, controle ao lado | casa (rodízio de 29/09 a 03/10) |
  | setup (original) | `c328911551104420832ec0a8a325ffb3` | quarto gamer à noite, luz violeta, fone no pescoço, moletom preto | casa · **referência de rosto dos looks novos** |
  | headset na mesa | `bdb47ee84f7879e5d38c26372719706e` | escrivaninha do quarto, fone na cabeça, luz ciano do monitor | casa (rodízio de 29/09 a 03/10) |
  | quarto (fim de tarde) | `a274a823397af2ed11e0edf74a0928f2` | beira da cama, pôsteres | **vetado**: pôster com personagem de terceiros no fundo |
  | piloto | `f10f6dcdac3302247fada99ac7f830f0` | cockpit de nave, asteroides na janela, jaqueta de voo | sem uso até aqui |
  | arcade | `40b4fbad585ae61ed1f941bee8bed4de` | fliperama neon, camisa xadrez ciano, fone no pescoço | sem uso até aqui |
  | rua à noite | `0df421d96740889777fbd7680e12554c` | rua com neon desfocado, jaqueta jeans, tom de vlog | sem uso até aqui |
  | espaço (arco-íris) | `ebdacbd58a6974eec8ff195540d04e2d` | flutuando no espaço, arco-íris atrás, moletom preto, fone no pescoço | cenário do story de 03/10 (boost arco-íris) |
  | sentada no arco-íris | `2c3c2a3b41203413eea45d8e62306547` | sentada num arco-íris no espaço, braços cruzados | cenário do story de 03/10 (boost arco-íris) |
  | pódio no espaço | `19c1e6099a56041969f14360db4b974a` | atrás de um pódio dourado no espaço, confete colorido, nebulosa | criado em 03/10 para um catálogo por tema, antes do pedido de cenário por post; usado só no teste da legenda |
  | asteroide | `2c751ba3efb9371a8a9b304ecdb23d95` | de pé num asteroide, meteoros e um planeta com anéis no céu | idem (catálogo descartado); sem uso |
  | portal | `31c93580a89ca49b9513706daf1eb7ae` | portal de luz em espiral (ciano, violeta, dourado) atrás, estrelas | idem (catálogo descartado); sem uso |
  | na Lua | `b7135392ff1957287fe7a9529b1f38e7` | na superfície da Lua, a Terra atrás | idem (catálogo descartado); sem uso |
  | meteoros esperando | `d1fd810257a3772eef5ce60b4c1bd965` | sentada numa rocha no espaço, meteoros parados em volta | cenário do story de 04/10 (o jogo parado no sábado) |
  | pódio com dois lugares vagos | `f83799060228fb010ec78f4909fad427` | no espaço, pódio dourado atrás: troféu de estrela no degrau mais alto, os outros dois vazios sob holofotes | cenário do reel de 05/10 (ranking da semana 40) |
  | o nome no ranking (v1) | `ee9b0791ee1057037de35a7c31910ac9` | no espaço, plaquinha de nome em branco | **vetado**: contorno brilhante em volta do corpo, terminando num recorte arredondado; refeito |
  | o nome no ranking v2 | `a3ced55a4cb1f0bd865d9f8bd70488a7` | no espaço, da cintura para cima, plaquinha de nome dourada em branco flutuando ao lado da cabeça | cenário do story de 05/10 (como pôr o nick) |
  | a nave laranja sem piloto | `7c6fa1e03e4bed9b724cae275abc72c4` | hangar de naves à noite, navinha de casco azul-claro com contorno e motor laranja e a cabine aberta e vazia | cenário do story de 06/10 (a partida anônima de 8.585 no Tier IV) |
  | o primeiro lugar aceso | `922e7dff5a88faad7a5cca0329021a05` | no espaço, placar vertical de espaços de vidro vazios atrás, só o de cima aceso em amarelo | cenário do reel de 07/10 (o piloto novo KAL-EL entrou em 1º no ranking da semana vazio) |
  | o sarrafo do top 10 (v1) | `a4309e130c7994d1d858db486c9b4bdd` | campo de atletismo à noite, sarrafo de salto em altura aceso em ciano | **vetado**: saiu com dois fones (um na cabeça, outro no pescoço); refeito |
  | o sarrafo do top 10 v2 | `16b53a8408e8f6c2ef502cf6194071d8` | campo de atletismo à noite, neblina e refletores, sarrafo aceso em ciano bem acima da cabeça | cenário do story de 07/10 (o sarrafo do top 10 de pilotos, 13.311) |

  Looks novos (um ou dois por post, regra 6): `create_prompt_avatar` com `avatarGroupId` e `avatarId` = setup
  (`c328911551104420832ec0a8a325ffb3`) como referência de rosto, `aspectRatio: "9:16"`, prompt começando por "The same
  woman as in the reference image (Estela)…" e descrevendo a cena do post (onde ela está e o que faz), com a mesma roupa
  em todos os looks do vídeo (o moletom preto com o fone no pescoço funcionou no espaço) e sempre "no posters, no
  characters, no logos, no readable text" (o quarto de 29/09 saiu com um pôster de personagem de terceiros e foi
  vetado). Conferir os looks numa folha renderizada pelo Actions (`posts/_lab-AAAA-MM-DD-<slug>-looks/`) antes de usar.
  Custo medido: 1 crédito por look. Prompt enxuto: em 06/10, dois pedidos de 1.187 e 1.078 caracteres devolveram
  erro 500 sem criar o look nem gastar crédito, e o mesmo pedido em 709 caracteres funcionou na hora. Fone: em 07/10, um
  look saiu com dois fones (um na cabeça e outro no pescoço); pedir "one single pair of over-ear headphones resting around
  her neck, nothing on her head" resolveu na 2ª tentativa.
- Prompt de criação (reusar para gerar novos looks consistentes):

  > Photorealistic vertical portrait photo of Estela, a 25-year-old Brazilian woman who is a passionate gamer.
  > Shoulder-length wavy dark brown hair with one subtle cyan-blue streak on the left side, warm brown eyes, light
  > freckles across the nose, natural makeup, confident and friendly half-smile, looking directly into the camera.
  > Plain black oversized hoodie with no logos, over-ear gaming headphones resting around her neck, no microphone near
  > her mouth. Upper-body framing, centered, facing the camera, hands out of frame. Background: cozy gamer room at
  > night, softly blurred, cyan and violet RGB light strips and a monitor glowing with a dark space-shooter game full
  > of small asteroids. Soft cinematic key light, shallow depth of field, natural skin texture, no text, no watermark.

- Na arte (pedidos do Guilherme em 29/09): **nada sobre o rosto, sem selo de IA, e nada além da legenda nos reels.**
  - **Reels** — molde `templates/estela-video.html` (camada v3): só a legenda própria, queimada frase a frase a partir
    do .srt: BigShoulders 56 px, caixa baixa, números em ciano, pílula escura translúcida, **ancorada pela base em
    y = 1490** (uma linha em ~1420–1490, duas em ~1350–1490). Nos looks de casa o rosto ia de ~370 a ~1170 (queixo); nos
    looks de cada post, conferir na folha do laboratório e no QA (o rosto fica sempre acima da faixa da legenda).
  - **Stories** — molde `templates/estela-story.html`: **vídeo puro**, sem legenda, sem selo, nada por cima. A fala
    começa direto no assunto do dia.
  - Qualquer outro elemento sobre o vídeo só se for **temporário e pequeno**.
  - Histórico da camada: a estreia (29/09) saiu na v1 — selo fixo no topo e legenda de 82 px em caixa alta —, que o
    Guilherme achou grande demais e em cima do rosto; a v2 (legenda pequena + selo por 3 s, em
    `posts/_estela-camada-v2/`) durou só a tarde de 29/09; a v3 tirou o selo.

## Voz

- **Sofia Brazil - Friendly** — `0edbc867be6f48c5be8ff8b0fbca0802` (pt-BR). Já é a voz padrão do grupo da avatar.
- Alternativa a testar em vídeos de desafio: **Sofia Brazil - Excited** — `6d282a9f296746568da9d65586935dba`.
  Testada pela 1ª vez no story de 30/09. **A duração depende do texto, não só da contagem de palavras**: 58 palavras
  com dois-pontos e uma enumeração cheia de vírgulas deram 27,6 s na Excited (a Friendly leu 62 palavras em 23,9 s em
  29/09), e 50 palavras em frases diretas deram 19,1 s na mesma Excited. Regra prática para story: frases diretas, até
  ~50 palavras, e conferir `duration` no `get_video` — acima de 25 s, refazer mais curto antes do push. No reel de 02/10,
  62 palavras em frases diretas deram 26,1 s na Excited; no story de 03/10, 57 palavras deram 21,8 s na Friendly. Em 07/10,
  62 palavras deram 23,6 s na Friendly (reel) e 56 palavras com três números por extenso deram 24,1 s na Excited (story),
  no limite dos 25 s.
- Glossário de pronúncia **"Navistron"** — `b3629854ac234ec6b69f92b79dfa76f5`: `navistron.io` é falado "navistron ponto io"
  (a legenda continua mostrando `navistron.io`) e, desde 03/10, `arco-íris` é falado "arcoíris" — sem o glossário, a voz
  fazia ~200 ms de pausa entre "arco" e "íris" (o Guilherme notou no story de 03/10).

## Como gerar um vídeo dela

Desde 03/10 (pedidos e decisão do Guilherme), todo vídeo dela tem um cenário criado para o post (regra 6) e sai num de
dois formatos:
- **Formato completo — só nos reels**: vários cortes no cenário do post, com cenas de ação e trilha chiptune baixa, feito
  no Video Agent da HeyGen. Quando a regra de orçamento ("Custos e limites") não deixa, o reel sai no modo econômico.
- **Modo econômico — todo story e o reel sem orçamento**: take único no Avatar IV, num look novo do cenário do post. O
  cenário continua sendo do post; saem os cortes, os clipes e a trilha.

1. **Roteiro** pelas regras acima (gancho na 1ª frase, número conferido com data, pedido de ação no fim).
2. **Cenário do post**: ler o roteiro e tirar dele as imagens lúdicas que mostram o que ela diz, no mesmo universo
   visual — 2–4 no formato completo, uma só (o look da fala) no modo econômico. Exemplo (story de 03/10): "brilha em
   arcoíris" → ela no espaço com o arco-íris atrás; "quando você pega" → ela pega uma estrela dourada; "sobe a sua nave
   de nível" → sobe num rastro de arco-íris como foguete; "todos os meteoros explodem" → os meteoros em volta viram fogos.
   Nada de texto, logo, tela com conteúdo, personagem de terceiros ou arma, e nada que contradiga o jogo (a mecânica
   ilustrada é a conferida no código).
3. **Looks e clipes do cenário**: 1–2 looks novos para as falas (receita em "Looks novos", acima; 1 crédito cada) e, no
   formato completo, 2–4 clipes de ação de 5 s em 9:16 no heygen-video-1 — `reference_to_video` com a foto do look como
   referência quando ela vai para outro lugar ou se move muito (2k, ~9 créditos), `image_to_video` a partir da foto do
   look quando a ação acontece no próprio quadro (5 créditos em 2k, 2 em 768p). Prompt dos clipes sem texto e sem tela.
   Tudo conferido num laboratório antes de seguir (`posts/_lab-AAAA-MM-DD-<slug>-*`: a folha dos looks e um `post.html`
   tipo `video` por clipe): o rosto dela, mãos, nada de texto ou logo, fogo e explosão só onde fazem sentido (o clipe de
   768p de 03/10 pôs fogo dentro do quarto e ficou de fora). Para caber no orçamento, preferir o `image_to_video` (5) ao
   `reference_to_video` (9) sempre que a cena permitir. No modo econômico: um look e nenhum clipe.
4. **Formato completo (reel) — Video Agent**: `create_video_agent` em `mode: "chat"`, `orientation: "portrait"`,
   `avatarId` do look principal, `voiceId` e `brandGlossaryId` da ficha, os clipes em `files` (URLs do `get_model_video`)
   e, no prompt: o roteiro exato ("palavra por palavra"), a ordem das cenas (fala no look X; clipe Y com a voz dela por
   cima; …), cortes e aproximações, e as regras duras — sem texto na tela, sem banco de imagens, sem tela mostrando
   conteúdo, clipes sem som, trilha chiptune baixa (~15–20%), sem cartela de título, sem aceno de tchau. **Legendas
   ligadas**: o agente devolve o `video_url` limpo, o `captioned_video_url` (a legenda grande da HeyGen, que não usamos) e
   o `subtitle_url` (.srt), que funciona na nossa legenda — teste de 03/10 (`80b2e9bba48b418680e6412be0ea8f19`,
   laboratórios `posts/_lab-2026-10-03-va-legenda-*`). Pedir o rosto dela sempre na metade de cima do quadro, sem close
   que desça até a faixa da legenda (y ≈ 1350–1490). Conferir o storyboard e aprovar com `send_video_agent_message` (a
   decisão é da rotina); o agente calcula a duração com folga (estimou 28 s para uma fala de ~22 s): se a estimativa
   passar do limite do formato, pedir a voz a 1,2x. `get_video` até `completed`; conferir o roteiro cena a cena e
   `caption.enabled` com `get_video_scenes`. Em 03/10, um aceno de tchau gerou um retângulo bege ao lado do ombro e a
   cena foi refeita (13 créditos).
5. **Modo econômico (todo story; reel sem orçamento)**: `create_video_from_avatar` com o look do cenário, `script`,
   `voiceId`, `aspectRatio: "9:16"`, `fit: "cover"`, `resolution: "1080p"`, `caption: {file_format: "srt"}` (**sem**
   `style`: a legenda queimada é a nossa; no story, o .srt serve só de transcrição), `expressiveness` (`medium` é o
   padrão), `motionPrompt` (sem aceno) e `brandGlossaryId`; `get_video` até `completed`. O `motionPrompt` não segura as
   mãos sozinho: no reel de 05/10, com expressiveness medium e "no hand gestures" no prompt, ela gesticulou entre ~13,6
   e 17 s (mãos naturais, sem artefato); com expressiveness low (story de 04/10), nenhuma mão apareceu. No story de
   06/10, o motionPrompt animado (mãos visíveis, a variável testada) deixou as mãos no quadro boa parte do vídeo: a 1ª
   versão abriu com um gesto rápido de dedos em garra/V e foi refeita; a 2ª, pedindo mãos paradas nos 2 primeiros
   segundos e gestos lentos de palma aberta, abriu limpa, com só um instante de mãos se cruzando — o padrão segue calmo.
   Em 07/10, com expressiveness medium e o motionPrompt calmo ("hands stay out of frame"), ela gesticulou nos dois vídeos:
   no reel (Friendly), três gestos rápidos na faixa de baixo do quadro; no story (Excited), mais gestos, com as mãos à
   altura do peito em ~4,5–7 s e ~14,5–16 s — todos naturais, sem artefato. A Excited parece puxar mais gestos.
6. Do `get_video`: `video_url` (sempre o limpo) e `subtitle_url` (URLs assinadas, expiram em ~7 dias). Pasta
   `posts/AAAA-MM-DD-slug/` (story: `posts/AAAA-MM-DD-story-slug/`): copiar o molde como `post.html` —
   `templates/estela-video.html` para reel, `templates/estela-story.html` para story — e trocar `video-src`
   (= `video_url`) e `video-subtitles` (= `subtitle_url`; se não houver `subtitle_url`, apagar a linha). Mais o
   `caption.md` (cenário, looks, clipes, sessão do agente, créditos antes e depois). O push dispara o Actions, que baixa
   o vídeo, enquadra em 1080×1920, queima a legenda (só no reel) e commita `reel.mp4`, `reel-cover.png` e `legenda.srt`.
6b. **Legenda com números em algarismos (reels)**: o roteiro vai com os números por extenso (a voz lê melhor) e o .srt da
   HeyGen sai igual, quebrado em frases de 3–4 palavras. Depois da 1ª renderização, baixar o `legenda.srt` da pasta,
   juntar as frases curtas sem cortar palavra, trocar os números por algarismos (o render pinta de ciano), salvar como
   `legenda-digitos.srt` na mesma pasta e apontar `video-subtitles` para esse arquivo — o push dispara a 2ª renderização
   (~2 min). Conferir com python que o texto falado de cada grupo bate com as frases originais. Feito pela 1ª vez em 02/10.
7. QA pela folha de contato do `reel.mp4` baixado do raw.githubusercontent.com (os arquivos da HeyGen não abrem daqui):
   **nada sobre o rosto**, o cenário do post em todas as cenas, nada de texto ou logo, sincronia, artefatos (mãos, dentes,
   olhos, manchas e retângulos — a última cena quadro a quadro), áudio presente e, no formato completo, a trilha baixa
   (~15–20 dB abaixo da voz).
8. Buffer, sempre com `metadata.instagram.isAiGenerated: true`:
   - reel: como qualquer reel (`type: "reel"`, `shouldShareToFeed: true`), capa no instante mais bonito da folha de
     contato (`thumbnailOffset`, padrão 1000);
   - story: `metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }`, sem texto,
     `assets` com o `reel.mp4`. Horário padrão **16:00**. O 1º story (29/09) saiu às 15:36 e foi publicado na hora.

## Custos e limites

- **Plano Creator desde 29/09/2026**: 600 créditos por mês, 1080p, sem marca d'água. Renovam todo dia 29 — o `resets_at`
  da HeyGen marca 00:57 UTC, 21:57 BRT do dia 28. Na página de preços da HeyGen (lida em 03/10): Creator US$ 29/mês com
  600 créditos, Pro US$ 49/mês com 1.000 (o Seedance 2.0 pede o Pro), Business US$ 149/mês + US$ 20 por assento com 1.500.
- Custo medido em 29/09: **1 crédito por look** e **~1 crédito a cada 3 s de vídeo** em 1080p (vídeo de 28,4 s = 9;
  de 23,9 s = 8; em 30/09, 27,6 s + 19,1 s = 16; em 01/10, 17,5 s = 6; em 02/10, 26,0 s + 26,1 s no Avatar IV e 20,1 s no
  Avatar V = 33; em 03/10, 21,8 s no Avatar V = 18). Saldo: 600 → 587 → 575 → 574 → 558 → 552 → 519 → 501 → 480 →
  415 → 411 → 408 → 401 → 286 → 266 → 251 → 232 (estreia + 4 looks; 4 looks em casa + 1º story; 1 look; story de 30/09 + uma
  versão descartada; story de 01/10; reel de 02/10 + uma versão descartada + story no Avatar V; story de 03/10 no Avatar V;
  1ª versão lúdica de 03/10; versão no espaço; 4 looks de um catálogo por tema, descartado no mesmo dia; teste da legenda
  do Video Agent; story de 04/10; **115 gastos fora da rotina em 04/10** — coincide com uma sessão do Video Agent aberta
  no app às 15:25, "Criar vídeo de aula"; 3 looks, o reel de 32,9 s e o story de 19,9 s de 05/10; o look e as duas
  versões do story de 06/10 — o reel do dia foi de dados; 3 looks, um refeito, o reel de 23,6 s e o story de 24,1 s de 07/10).
- **O Avatar V custa ~2,5× o Avatar IV** — medido em 03/10 com um vídeo só no dia: 21,8 s = **18 créditos** (~1 a cada
  1,2 s), contra ~1 a cada 3 s no Avatar IV; confirma a estimativa de 02/10 (~15 pelo story de 20 s). Nos dois stories
  (02 e 03/10) ele passou no QA, sem artefato e com movimento natural, mas **não cabe como padrão diário**: um story de
  ~20 s sai por ~17 créditos (contra ~7), e só os stories somariam ~500 por mês, quase o plano inteiro. **Padrão:
  Avatar IV.** O Avatar V fica para um vídeo pontual, registrado como a variável testada.
- **Teste do story lúdico (03/10):** o **Seedance 2.0** (Cinematic Shots, `create_video_from_cinematic_avatar`) exige o
  **plano Pro** — respondeu 403, sem gasto. Pela tabela de créditos da central de ajuda da HeyGen (lida em 03/10), ele
  custa 60 créditos por clipe em 720p e 150 em 1080p. O **heygen-video-1** (`image_to_video` a partir da foto do look)
  funciona no Creator: 2 créditos por clipe de 5 s em 768p e 5 em 2k (1536x2030). O **Video Agent** no modo padrão custou
  14 créditos por 19,5 s (~43 por minuto, perto dos 40 da tabela), com 5 cenas de Avatar IV, um cutaway e a trilha; o
  teste de legenda (uma cena de 4,8 s) custou 3. Na versão no espaço: 2 looks novos e 4 clipes de 2k em 9:16 custaram 38
  (~9 por clipe de 5 s), o Video Agent 14 e a cena final refeita mais 13 — 65 no total. No dia, o story custou 104
  créditos (519 → 415), contra ~7 de um story padrão.
- **Custo por vídeo** (medido até 03/10): look 1; clipe de 5 s no heygen-video-1 ~9 (`reference_to_video` 2k), 5
  (`image_to_video` 2k) ou 2 (768p); Video Agent ~0,7 por segundo (14 por 19,5 s, 14 por 20,8 s, 3 por 4,8 s); Avatar IV
  ~1 a cada 3 s. **Formato completo (só reels): ~35 por reel de ~28 s** (2 looks, 2–3 clipes e o Video Agent; ~45 se os
  clipes forem todos `reference_to_video`). **Modo econômico (1 look + take único no Avatar IV): ~8 por story e ~11 por
  reel.** Antes da decisão de 03/10, um story no formato completo foi estimado em ~30.
- **Regra de orçamento** (decisão do Guilherme em 03/10: formato completo só nos reels). Story: sempre no modo
  econômico. Reel: antes de cada um, `reserva = 30 + 8 × (stories que faltam até a renovação, contando o de hoje) + 11 ×
  (reels da Estela que faltam no calendário até a renovação, sem contar este)`; **formato completo se `créditos − custo
  estimado do completo ≥ reserva`; senão, modo econômico.** O custo estimado é a soma do plano do reel: looks + clipes +
  0,7 × segundos do Video Agent. Registrar a conta no `caption.md`. Com 408 créditos em 03/10 (25 stories e 9 reels até
  28/10), pela estimativa a regra dava o formato completo aos reels de 05, 07 e 10/10 e o modo econômico aos outros seis.
  **Em 05/10 o saldo era 286** (115 gastos fora da rotina em 04/10): reserva 310, e o reel do dia saiu no modo econômico.
  Pela estimativa, nenhum reel sai no formato completo até a renovação, e o saldo não cobre todos os vídeos até 28/10:
  com ~8 por story e ~11 por reel, a guarda de 30 para os vídeos dela por volta de 24–25/10. Em 07/10: 251 contra uma
  reserva de 283 (22 stories e 7 reels até 28/10) — modo econômico de novo; o dia fechou em 232.
- Por mês (30 stories e ~13 reels da Estela), com os stories no econômico (~240): no Creator (600), a regra deixa o
  formato completo em ~7 dos 13 reels; no Pro (1.000), em todos, com sobra. Antes da decisão, tudo no formato completo
  pediria ~1.500 créditos por mês.
- Guarda de segurança: **abaixo de 30 créditos, não gerar vídeo da Estela** — o reel vira reel de dados e o story é
  pulado e relatado. Era 100 até 03/10; a reserva acima passou a guardar os créditos dos vídeos que faltam.
- Histórico: o teste de 28/09 foi no plano gratuito (720p, marca d'água, criação de avatar pela API bloqueada com 403).

## Formatos e testes

Calendário, cadências e variáveis de produção em teste (gestos, motor, voz, duração; o cenário virou regra em 03/10):
seção 3b do `PLAYBOOK.md`.
Temas que combinam com ela: ranking da semana narrado · reação a evento (recorde, nick novo, marco) · desafio lançado
por ela · "a Estela explica" (uma mecânica, conferida no código) · boas-vindas a estreantes · bastidor dela. O tema não
define o cenário: cada post ganha o seu, tirado do que ela fala (regra 6).

## Histórico de vídeos

| Data | Pasta | Look | Variável testada | HeyGen video_id |
|---|---|---|---|---|
| 29/09 | `2026-09-29-estela-se-apresenta` | setup | estreia (base: Avatar IV, expressiveness medium, Friendly) — camada v1 | `d07ad625f3a315a38be1d861dd2a34db` |
| 29/09 | `_estela-camada-v2` (laboratório) | setup | mesma estreia na camada v2 (legenda menor, selo temporário) | `d07ad625f3a315a38be1d861dd2a34db` |
| 29/09 | `2026-09-29-story-quatro-dias-de-silencio` | sala (sofá) | **1º story** (vídeo puro, 23,9 s, em casa) — Buffer `6abc050cf9bc1204bdf27037` | `4d6870a5cae2dcae9379e14fbf80cbce` |
| 30/09 | `2026-09-30-story-recorde-novo` | escrivaninha na janela | voz **Excited** (story de 19,1 s, o 1º sem dizer que é IA) — Buffer `6abc8e2bf3db08ac9273d2a8`; versão de 27,6 s descartada (`68945e075eb7c6ea8e527d4c98f47be8`) | `c36792024e282e92da15d4bb2169ee6f` |
| 01/10 | `2026-10-01-story-rachaduras` | cozinha (café) | **expressiveness high** com gestos (story de 17,5 s, "a Estela explica" as rachaduras), voz Friendly — Buffer `6abe9d5e0fdd0066b7ac64ca` | `12fa47b232ddde6c8fb3535f1384e7d0` |
| 02/10 | `2026-10-02-partida-sem-nick` | headset na mesa | voz **Excited** num reel (26,1 s, desafio das partidas sem nick), Avatar IV, expressiveness medium; 1º reel com a legenda em algarismos — Buffer `6abf324963de9e09a28c47ca`; versão descartada antes do push por uma frase ambígua (`782b793ab909335ec7363943333d8c40`) | `9a7c8ade598bae02502959ce1524557d` |
| 02/10 | `2026-10-02-story-acordou-cedo` | quarto (luzinhas) | motor **Avatar V** (story de 20,1 s; sem expressiveness, que ele não aceita, e sem motionPrompt), voz Friendly — Buffer `6abf3251c07bdc2fc269c5f5` | `351860d24d1764404e879d860a271407` |
| 03/10 | `2026-10-03-story-boost-arco-iris` | setup | **Avatar V** de novo, como único vídeo do dia, para medir o custo isolado: 18 créditos por 21,8 s (story "a Estela explica" o boost arco-íris), voz Friendly — **não publicado**: o agendamento (`6ac081d116dec17c265229e2`) foi apagado e trocado pela versão lúdica | `64d8f0e4c724efd7dc67c7b3d80796e1` |
| 03/10 | `2026-10-03-story-boost-arco-iris-ludico` | setup → headset na mesa → cutaway → cozinha → setup → sala | **story com 6 cortes e trilha baixa** (pedido do Guilherme): HeyGen Video Agent, Avatar IV, voz Friendly a 1,2x, 19,5 s; cutaway de 2 s do heygen-video-1 (`2afb8e6e9a454160b2156598bdd8536c`) — **não publicado**: agendado (`6ac11a4afec59133947b3b92`) e trocado pela versão no espaço | `1b029d53b9d345a884c8b2737f7f8a23` |
| 03/10 | `2026-10-03-story-boost-arco-iris-espaco` | espaço (arco-íris) → 4 clipes → sentada no arco-íris → espaço | **story no espaço com 7 cortes e trilha baixa** (2º pedido do Guilherme): Video Agent, 3 falas em Avatar IV e 4 clipes do heygen-video-1, "arcoíris" sem pausa, 20,8 s; cena final refeita sem aceno (a 1ª, `311ca4b6f7be4bd68f1c9945187c4d1b`, teve defeito) — Buffer `6ac12384fec59133947c83e5` | `64266252add848d8adee10d3ef593521` |
| 03/10 | `_lab-2026-10-03-va-legenda-puro` e `_lab-2026-10-03-va-legenda-reel` (laboratório) | pódio no espaço | **legenda do Video Agent**: com as legendas ligadas no agente, o `video_url` sai limpo e o `subtitle_url` serve na nossa legenda pequena (4,8 s, 3 créditos) | `80b2e9bba48b418680e6412be0ea8f19` |
| 04/10 | `2026-10-04-story-meteoros-esperando` | meteoros esperando | **1º story no formato novo** (take único no cenário do post), **expressiveness low** (17,8 s, o jogo parado no sábado), voz Friendly — Buffer `6ac1d4798dc991c73c6995d1` | `759eefe52b54918faa94eb45be09626d` |
| 05/10 | `2026-10-05-podio-vago` | pódio com dois lugares vagos | **reel no modo econômico** pela regra de orçamento (286 créditos); variável **duração ~35 s** (32,9 s, ranking da semana 40 narrado), voz Friendly, expressiveness medium; legenda em algarismos na 3ª renderização — Buffer `6ac3285afe1389e4134fc4af`: **saiu no Instagram, mas ficou com status `error` no Buffer**, sem `sentAt` nem métricas (a republicação agendada em 06/10 foi apagada antes de sair); depois o Buffer passou a listar a publicação real como post via network (`6ac49a80970ea04598503a0f`), com as métricas | `b1894fc0152ffaa1dcf196db7c573b2a` |
| 05/10 | `2026-10-05-story-nome-no-ranking` | o nome no ranking v2 | story em take único, **motionPrompt inclinada pra câmera** (19,9 s, como pôr o nick no game over), voz Friendly — Buffer `6ac327815de5ee424c25bbc1` | `0c3a3f7cf96e000544d1da98cadbcaba` |
| 06/10 | `2026-10-06-story-nave-sem-piloto` | a nave laranja sem piloto | story em take único, **motionPrompt animado com mãos visíveis** (20,8 s, a partida anônima de 8.585 no Tier IV), voz Friendly, expressiveness medium; a 1ª versão (`214ca1aa54b429a7ac6d6504c42667ec`) abriu com um gesto de mãos com dedos estranhos e foi refeita — Buffer `6ac47bf198d02b181e21244a` | `d8954a1260446eab5c1c5cdfc29947ab` |
| 07/10 | `2026-10-07-piloto-novo` | o primeiro lugar aceso | reel no modo econômico pela regra de orçamento (251 contra reserva de 283); variável **duração ~20 s** (23,6 s, boas-vindas ao piloto novo KAL-EL), voz Friendly, expressiveness medium; legenda em algarismos na 2ª renderização — Buffer `6ac5cb6953551104161f63cc` | `3e710651f8aaafd91e8584ac409176f1` |
| 07/10 | `2026-10-07-story-sarrafo-top-10` | o sarrafo do top 10 v2 | story em take único, **voz Excited** (24,1 s, o sarrafo do top 10 de pilotos), expressiveness medium; a 1ª versão do look saiu com dois fones e foi refeita — Buffer `6ac5ccd553551104161f8f60` | `d6a9ddc29c35a7662217cbfc2c72f9d6` |
