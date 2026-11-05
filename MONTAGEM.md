# MONTAGEM.md — reels com gameplay real (cortes de gravações do jogo)

Pedido do Guilherme em 05/11/2026, com uma gravação de tela do jogo no celular: "veja se consegue editar cortes e fazer
montagens com os cortes para os reels tambem pra ser algo dinamico tb junto nos reels e criar mais combinações de
reels". Os reels de montagem usam trechos reais da partida (pasta `footage/`), com o texto por cima no estilo da marca e
a trilha própria do `scripts/audio.mjs`. Eles são a fase 2 do teste "Enquanto a IA pensa" (PLAYBOOK, seção 3c).

## Como funciona

- O `post.html` (reel, 1080×1920, 30 fps) define `window.MONTAGE` e carrega `templates/montage.js`. Cada corte diz de onde
  sai na gravação e como aparece: `{ at, dur, from, speed, view, punch, flash, shake, freeze, dim }` — início e duração no
  reel, segundo da gravação, velocidade (0,5 = câmera lenta 2x; 0,25 = 4x; a gravação do celular tem ~120 fps), vista
  `[cx, cy, zoom]` (ou `{ from, to }` para um zoom que anda), zoom de entrada, clarão, tremida, congelamento e escurecido
  do CTA. A função `overlay(t, k, lt)` anima as camadas de texto (classes comuns `m-*` do montage.js).
- O `scripts/render.mjs` (no Actions e no local) extrai os quadros de cada corte com o ffmpeg, cobre o círculo cinza do
  "mostrar toques" do Android (com `touch: { minY: 470 }`), monta cada quadro e junta a trilha. O hash desses posts
  inclui o `montage.js` e o tamanho do vídeo de origem.
- Moldes para copiar: `templates/montagem-provocacoes.html`, `templates/montagem-progressao.html` e
  `templates/montagem-pov.html` (cada um traz o `audio.json` sugerido no comentário do topo).
- Conferir antes do push: `python3 scripts/qa.py posts/<slug>` (para montagem, ele roda o render local e monta a folha
  de 12 quadros a partir do `reel.mp4`). Abrir a folha com Read e, se precisar, quadros soltos com ffmpeg.
- Regras de arte: cortes no tempo da trilha (128 bpm → 1 tempo = 0,46875 s; 2 a 4 tempos por corte); gancho legível no
  quadro 0; texto entre y=300 e y=1500; na vista padrão `[530, 1246, 1.05]`, o jogo ocupa de ~170 a ~1.640 e a nave anda
  por volta de 900–1.300; o CTA entra nos ~2 s finais, com `dim: 0.7`. A frase do jogo vai entre aspas, no balão, com o
  relógio da partida; o resto do texto, no português da norma culta (ROTINA). Toda regra mostrada é conferida no código.
- O trecho tem de caber na gravação (o render falha se passar do fim). Vídeo de `footage/` nunca é editado nem apagado
  depois de usado.

## Índice das gravações

### `footage/Screen_Recording_20261105_123725_Chrome_1.mp4` (gravada pelo Guilherme em 05/11/2026)

- 51,2 s, 1060×1906, ~120 fps (taxa variável), sem áudio, 23,4 MB. Chrome no celular, com o "mostrar toques" ligado (o
  círculo cinza fica 275 px abaixo da nave e é coberto no render).
- Uma partida no Tier I, do placar 56 ao ~490. A gravação começa ~11 s depois do início da partida. Sem tier novo e sem
  game over. Na fonte, o placar (SCORE, TIER, BOOST, SPREAD) ocupa de y=0 a 170, e o campo do jogo, de 464 a ~1.880.
- Provocações (a cada 10 s de partida, ~3,3 s na tela, na altura y≈1.046 da fonte):
  até 2,1 s "Tá achando fácil?" (0:10) · 8,85–12,1 s "Precisa de óculos?" (0:20) · 18,85–22,1 s "Amador detectado"
  (0:30) · 28,85–32,1 s "Tier máximo? Nem em sonho" (0:40) · 38,9–42,15 s "Alguém chama o resgate" (0:50) · de 48,9 s
  ao fim, "Precisa de óculos?" de novo (1:00) — o sorteio repete frase.
- Boosts pegos (o leque ganha +1 tiro; lido no placar): 0,57 s (1→2 tiros), 16,87 s (2→3), 32,0 s (3→4) e 46,7 s (4→5).
  O boost dourado aparece antes: já está na tela no início, depois em 13,6 s, 28,2 s e 42,2 s. Para pegar, a nave sobe
  até y≈1.040–1.115 da fonte; x da nave nesses momentos: ~470, ~450, ~750 e ~320.
- Explosões grandes: 15,2 s, 30,1 s e 50,5 s; médias: 4,9, 18,7, 27,9, 33,6, 41,0 e 44,1 s.
- Placar: 56 (0 s), 105 (7,5 s), 173 (16,5 s), 301 (31,8 s), 460 (46,5 s).
- Trecho contínuo bom para POV: 13,0–19,6 s (boost aparecendo, explosão grande, boost pego e a provocação de 0:30).

## Cardápio de combinações

1. **Provocações** (molde `montagem-provocacoes`): um corte por provocação, no ritmo; o balão repete a frase do jogo com
   o relógio da partida. Variações: três provocações e um dado; o sorteio que repete frase; "qual delas é a pior?".
2. **Progressão** (molde `montagem-progressao`): um momento por corte, em câmera lenta, com um contador por cima (tiros,
   boosts; com uma gravação de tier novo, os tiers e as cores).
3. **POV** (molde `montagem-pov`): um trecho contínuo com uma situação por cima (a IA pensando, o build rodando, o arquivo
   exportando) e o congelamento no fim — a regra da aba.
4. **Dado + gameplay**: as cenas dos reels de dados (o relógio, o contador que trava em dourado) intercaladas com cortes
   reais — o número do dia por cima da partida de verdade.
5. **Momento**: um lance só (a explosão grande de 15,2 s, um boost pego no limite) em câmera lenta 4x, com congelamento e
   um rótulo que explica a regra.
6. **Desafio**: um trecho com o placar e um pedido ("faça mais de 460 pontos no 1º minuto").

Para combinar: gancho (texto, provocação do jogo, pergunta, POV) × miolo (cortes no ritmo, câmera lenta, contínuo, dado)
× fim (CTA com congelamento, desafio, provocação). Não repetir a mesma combinação em 3 dias seguidos e trocar os trechos
(a gravação tem 51 s); quando os trechos começarem a se repetir, pedir gravações novas no relatório.

## Gravações novas

Pedir ao Guilherme: partidas inteiras, até o game over; uma que chegue ao Tier II ou mais (o clarão do tier novo é o
melhor momento do jogo); de preferência com o "mostrar toques" desligado. Ele sobe o arquivo na pasta `footage/` pelo
site do GitHub (Add file → Upload files, até 25 MB por arquivo) ou pelo computador (até 100 MB). Antes de usar uma
gravação nova, a rotina mede os tempos com o ffmpeg (provocações, boosts, explosões, placar) e cria a seção dela no índice.
