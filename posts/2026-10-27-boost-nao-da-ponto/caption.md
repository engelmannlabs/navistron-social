---
data: 2026-10-27
formato: reel de dados 14 s (1080x1920, 30 fps; post.html + audio.json)
pilar: mecânica explicada (o boost não dá ponto: só abre o leque e, a cada 5, sobe o tier; ponto vem de meteoro destruído e de cada segundo vivo) — com a partida de ontem (26/10, 11:19: 9 boosts, leque cheio, 2min10 e 556 pontos) contra os 20.301 do MARCAO com os mesmos 9 boosts; diferente de 25/10 (marco) e de 26/10 (ranking da semana). Calendário S44: ter 27 = reel de dados às 13:00, o único post do feed do dia
gancho: "9 BOOSTS · SÓ 556 PONTOS" (legível no quadro 0, com os 9 boosts dourados embaixo; "ontem · 26/10 · 11:19 · 2min10 · tier II · leque de 5 tiros" a partir de 0,5 s; a capa, em 1,6 s, tem os dois) → "BOOST NÃO DÁ PONTO." (cada boost: +1 tiro no leque; a cada 5, a nave sobe de tier; chega pelo relógio: aos 8 s, depois a cada 12 a 20 s) → "os mesmos 9 boosts": ontem 556 (2min10, sem nick) × MARCAO 20.301 (21/10, 2min55), travando em dourado em 7,6 s (o hit da trilha) → "mais de 36 vezes os pontos" → "PONTO VEM DE METEORO." (meteoro destruído: 5 a 15 no Tier I, 9 a 27 no Tier II, e sobe com o placar; +1 por segundo vivo) → "JOGA HOJE E MIRA NOS METEOROS." → CTA navistron.io
horario_publicacao: 2026-10-27 13:00 BRT (terça)
buffer_post_id: 6ae0264a457d00458c180d40 (agendado à 01:19 de 27/10 para as 13:00; scheduled, reel de 14,0 s, capa em 1,6 s)
render: reel.mp4 e reel-cover.png no commit 40a33b18 (~1,8 min depois do push), 3.809.274 bytes, igual à main; 14,0 s, H.264 1080×1920 a 30 fps, áudio presente (média −19,2 dB, pico −0,9 dB); folha de 12 quadros igual à prévia local (qa.py), gancho inteiro no quadro 0 e na capa
teste_do_dia: S44 (calendário estável: reels de dados às 13:00 e a Estela às 19:00, sem carrossel; pergunta: o alcance volta?). Palavras do gancho: "9 boosts" e "556 pontos", fora dos ganchos dos últimos 10 dias (o "boost" só apareceu no corpo do reel do tiro roxo, 23/10, cujo gancho era "ninguém chegou ao tiro roxo"). Pedido "joga e põe o nick no game over" na primeira linha (30º dia), com "mira nos meteoros"
fonte_dados: navistron.io/stats (geral, ?visao=partidas&ordem=data página 1 e ?visao=partidas&ordem=score página 1), lidos em 27/10/2026 ~01:05–01:10 BRT com ?v=. Geral: 683 partidas (105 com nick, 578 anônimas), 47 pilotos, 23h 23m, 2m 3s, média 5.780; última partida 26/10 às 16:56. A segunda 26/10 teve 3 partidas, todas anônimas: 11:19, 556 pontos, 2:10, Tier II, 9 boosts, spread 5; 11:19, 10 pontos em 0:10; e 16:56, 6 pontos em 0:06 (Tier I, sem boost) — 146 s somados: o tempo total foi a 84.203 s (23h23min23s), a 36min37s das 24 h; a média fecha (3.947.578 ÷ 683 = 5.779,8). A 7ª da lista por pontos: MARCAO, 20.301, 2:55, Tier II, 9 boosts, spread 5, 21/10 às 09:02. 20.301 ÷ 556 = 36,5. Mecânica conferida no código (src/app/play/page.js do repo navistron, blob 36d68b9a, sem commit desde 07/09): collectBoost só soma totalBoosts e spreadLevel e, a cada 5, chama tierUp (que volta o leque a 1 tiro) — nenhum ponto; boostTimer = 8 no começo e depois 12 + random × 8 (12 a 20 s); o placar soma 1 por segundo vivo e, por meteoro destruído (tiro ou míssil), round(30 × dif × 0,5) no grande e round(10 × dif × 0,5) no pequeno, com dif = TIER_DIFF[tier] × (1 + score × 0,0007): 15 e 5 no começo do Tier I (dif 1,0), 27 e 9 no começo do Tier II (dif 1,8). A rota da API (src/app/api/anonymous-sessions/route.js) grava o score que o jogo manda (Number(body.score)), depois de validar a sessão e a plausibilidade, sem ajustar. Fundo: a nave no Tier II (verde) com o leque de 5 tiros (−10°, −5°, 0°, 5° e 10°, como em spawnBullets).
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
---

Joga hoje, mira nos meteoros e põe o seu nick no game over: no Navistron, boost não dá ponto.

Ontem (26/10), às 11:19, uma partida pegou 9 boosts — o leque cheio, de 5 tiros, no Tier II — e terminou com 556 pontos em 2min10.

Com os mesmos 9 boosts, o MARCAO fez 20.301 em 21/10: mais de 36 vezes os pontos.

O boost só deixa o tiro mais forte: +1 tiro no leque e, a cada 5, um tier. Ponto vem de meteoro destruído e de cada segundo vivo.

De onde vem cada ponto está no artigo de hoje no blog — link na bio.

Números de navistron.io/stats e do código do jogo, lidos em 27/10 à 01:10. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
