---
data: 2026-11-03
formato: reel de dados 8 s (1080x1920, 30 fps; post.html + audio.json)
pilar: mecânica explicada (terça) — no celular, a nave voa 140 px acima do dedo: TOUCH_OFFSET_Y = −140 em touchstart e touchmove, aplicado em pixels do campo de 540×720 (19,4% da altura, em qualquer tela); no mouse, o alvo é o próprio cursor. Diferente de 01/11 (hall da fama + reação a evento) e de 02/11 (ranking da semana). A mecânica já tinha sido um story da Estela em 13/10 (sem número, 15 de alcance); é a 1ª vez no feed. Calendário: ter 03 = reel de dados de 8 s às 13:00, o 2º dia da S45 e o 1º reel de 8 s
gancho: "NO CELULAR, A NAVE VOA ACIMA DO DEDO" (legível no quadro 0, com "ACIMA DO DEDO" em dourado; "regra do código do jogo" a partir de 0,5 s; a capa, em 1,6 s, tem os dois, a nave e o dedo com as etiquetas) → "no toque, o jogo mira acima": contador de 0 a 140 px junto com a cota entre o dedo e a nave, que trava em dourado no hit da trilha (4,4 s) → "acima do ponto tocado · num campo de 540 × 720" → "o dedo não cobre a nave" → a partir de 5,65 s, "JOGA HOJE · NAVISTRON.IO · grátis, sem login · põe o seu nick no game over" até o fim
horario_publicacao: 2026-11-03 13:00 BRT (terça)
buffer_post_id: 6ae96609a86fdc4e317f4926 (agendado à 01:41 de 03/11 para as 13:00, depois de o artigo do dia aparecer no ar; scheduled, reel de 8,0 s, capa em 1,6 s)
render: reel.mp4 e reel-cover.png no commit 978e248d (~1,4 min depois do push), 2.178.931 bytes, igual à main; 8,0 s, H.264 1080×1920 a 30 fps (240 quadros), áudio presente (média −18,3 dB, pico −1,2 dB); quadros conferidos (o gancho inteiro no quadro 0 e, na capa, em 1,6 s, o gancho, o subtítulo, a nave e o dedo; o contador travado em 140 no hit, com a cota dourada; o CTA de 5,65 s até o fim)
teste_do_dia: S45, dia 2 (pergunta da semana, PLAYBOOK 3b: o reel de dados curto, de 8 s, segura mais gente até o fim e leva mais gente ao jogo do que o de 14 s? Seg, qua, sex e dom com 14 s; ter, qui e sáb com 8 s): hoje, 8 s — o CTA entra aos 5,65 s (nos de 14 s, aos 12,4 s). Palavras do gancho: "celular" e "acima do dedo", fora dos ganchos dos últimos 10 dias ("nave" aparece no story de 25/10, "Sua nave nasce piscando", como palavra comum, não como a palavra do gancho). Pedido "joga e põe o nick no game over" na primeira linha (37º dia)
fonte_dados: a mecânica, no código do jogo (src/app/play/page.js, blob 36d68b9a, sem commit desde 07/09): TOUCH_OFFSET_Y = −140 depois de clientToCanvas (que divide pela escala da tela), mousemove sem deslocamento, SHIP_LERP = 12 e o tiro automático. Os números, em navistron.io/stats (?v=ter0311x8), ?visao=partidas&ordem=data (?v=ter0311x9) e ?periodo=7d&visao=partidas&ordem=data (?v=ter0311x7), lidos em 03/11/2026 ~01:03 BRT — a 1ª leitura (ter0311a…c) veio de uma cópia de 02/11 (697 partidas, a última em 01/11 às 07:31) e foi descartada. Geral: 698 partidas (108 com nick, 590 anônimas), 48 pilotos, 23h 56m, 2m 3s, média 5.750, maior 30.577, a última em 02/11 às 15:53 (anônima, 178 pontos em 0:33, Tier I, 2 boosts, spread 3). Faltam 2 partidas para a 700ª e 3min24s para as 24 h (86.196 s somados). Fundo: a nave no Tier I (ciano #7df4ff, um disparo a cada 0,18 s, como em TIER_DEFS) e meteoros marrons (heat 0, a dificuldade 1 do começo da partida); no reel, o campo está em escala 2, e os 140 px do jogo são 280 px
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
---

Joga hoje e põe o seu nick no game over: no celular, a nave do Navistron voa acima do seu dedo.

No toque, o jogo mira 140 pixels acima do ponto em que o dedo encosta, num campo de 540 × 720 — quase 1/5 da altura. Assim o dedo não cobre a nave, e ela atira sozinha: é só arrastar.

No computador, ela vai direto para o cursor do mouse. O que muda entre o toque e o mouse está no artigo de hoje no blog — link na bio.

O jogo está a 2 partidas da 700ª: 698 até ontem (02/11).

Regra conferida no código do jogo; números de navistron.io/stats, lidos em 03/11 à 01:03. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
