---
data: 2026-10-30
formato: reel de dados 14 s (1080x1920, 30 fps; post.html + audio.json)
pilar: mecânica explicada (a cor do meteoro mostra a dificuldade: no começo da partida ele nasce marrom e, quanto mais a dificuldade sobe, mais vermelho nasce — e com mais vida: o grande vai de 3 para 30; vermelho máximo a partir de 12.858 pontos no Tier I, 6.508 no II, 3.334 no III, 1.548 no IV e 613 no V; no VI, desde o início) — com a telemetria de 29/10 (3 das 6 partidas chegaram ao vermelho máximo); diferente de 28/10 (hall da fama) e de 29/10 (marco). Calendário S44: sex 30 = Estela às 19:00; sem créditos na HeyGen (plano free desde 29/10), virou reel de dados às 13:00, pela guarda de personagens/ESTELA.md
gancho: "METEORO VERMELHO AGUENTA MAIS" (legível no quadro 0; "a cor mostra a dificuldade · regra do código do jogo" a partir de 0,5 s; a capa, em 1,6 s, tem os dois) → "a cor de cada meteoro": um meteoro grande do marrom ao vermelho, com a vida do meteoro grande de 3 a 30 e a dificuldade de 1 a 10, que chegam ao máximo no hit da trilha (6,2 s) → "10× mais vida" → "vermelho máximo a partir de": Tier I 12.858, II 6.508, III 3.334, IV 1.548 e V 613 pontos; "tier VI: já nascem vermelhos" → "ontem · 29/10: 3 de 6 partidas chegaram ao vermelho máximo" → CTA navistron.io
horario_publicacao: 2026-10-30 13:00 BRT (sexta)
buffer_post_id: 6ae41ca92782e7f331d0c154 (agendado à 01:27 de 30/10 para as 13:00; scheduled, reel de 14,0 s, capa em 1,6 s)
render: reel.mp4 e reel-cover.png no commit f5e6189d (~2,3 min depois do push), 4.863.263 bytes, igual à main; 14,0 s, H.264 1080×1920 a 30 fps, áudio presente (média −17,1 dB, pico −1,0 dB); quadros conferidos (o gancho inteiro no quadro 0 e, na capa, em 1,6 s, o gancho e o subtítulo)
teste_do_dia: S44 (calendário estável: reels de dados às 13:00 e a Estela às 19:00, sem carrossel; pergunta: o alcance volta?). A Estela de sex 30 virou reel de dados às 13:00 (HeyGen no plano free) e entra na série do slot das 13:00. Palavras do gancho: "vermelho" e "aguenta", fora dos ganchos dos últimos 10 dias ("meteoro" só apareceu no corpo do reel de 27/10, "PONTO VEM DE METEORO"). Pedido "joga e põe o nick no game over" na primeira linha (33º dia)
fonte_dados: src/app/play/page.js (repo navistron, blob 36d68b9a): getDiff() = TIER_DIFF[tier] × (1 + score × 0,0007), TIER_DIFF = [1; 1,8; 3,0; 4,8; 7,0; 10,0; 14,0]; spawnMeteor() fixa, quando o meteoro nasce, heat = min((dif − 1) / 9, 1) e vida = max(1, round((grande ? 3 : 1) × dif)); drawMeteor() pinta a superfície em rgb(154 + 90·heat, 110 − 90·heat, 80 − 60·heat) — de rgb(154,110,80) a rgb(244,20,20) —, com brilho em volta de alfa 0,06 + 0,25·heat e contorno vermelho rgba(255,60,0,.9) quando heat > 0,5. Vermelho máximo (heat = 1, dificuldade 10) pela 1ª pontuação inteira que chega lá, contas em node com a aritmética do jogo: Tier I 12.858, II 6.508, III 3.334, IV 1.548, V 613; VI e VII desde 0 (dificuldade 10 e 14 no início). Vida do grande: 3 com dificuldade 1 e 30 com dificuldade 10. Telemetria: navistron.io/stats e ?visao=partidas&ordem=data (página 1), lidos em 30/10/2026 ~01:05 BRT com ?v=: 694 partidas (107 com nick, 587 anônimas), 47 pilotos, 23h 51m, 2m 4s, média 5.755; a última em 29/10 às 17:15. A quinta 29/10 teve 6 partidas, todas anônimas: 09:22, 6.061 (3:44, Tier III, 13 boosts); 09:24, 676 (2:28, Tier II, 8 boosts); 09:25, 51 (0:31, Tier I, 2 boosts); 09:33, 5.983 (4:03, Tier IV, 15 boosts); 10:39, 7.524 (3:44, Tier III, 14 boosts); 17:15, 5.506 (2:17, Tier II, 8 boosts) — 84.853 + 1.007 = 85.860 s (23h51min00s) e 3.967.828 + 25.801 = 3.993.629 pontos (÷ 694 = 5.754,5 → 5.755): a conta fecha com o /stats. Dificuldade no fim de cada uma (tier e pontuação finais, que só sobem durante a partida): 15,7, 2,7, 1,0, 24,9, 18,8 e 8,7 — três chegaram a 10 (o vermelho máximo); a de 17:15 parou no calor 0,86. Fundo: a nave no Tier II (verde #80ff90, um tiro a cada 0,15 s, como em TIER_DEFS), e os meteoros guardam a cor do instante em que entram na tela, como no jogo.
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
---

Joga hoje e põe o seu nick no game over: no Navistron, meteoro vermelho aguenta mais.

A cor mostra a dificuldade. No começo da partida, os meteoros nascem marrons; quanto mais a dificuldade sobe, mais vermelhos eles nascem — e com mais vida: o meteoro grande vai de 3 para 30, dez vezes mais.

O vermelho chega ao máximo a partir de 6.508 pontos no Tier II, de 3.334 no Tier III e de 1.548 no Tier IV. No Tier VI, eles já nascem vermelhos.

Ontem (29/10), 3 das 6 partidas chegaram lá.

Regras conferidas no código do jogo; números de navistron.io/stats, lidos em 30/10 à 01:05. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
