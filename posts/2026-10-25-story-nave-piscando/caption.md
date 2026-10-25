---
data: 2026-10-25
formato: story da Estela, take único (Avatar III, 14,6 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: a Estela explica (a nave nasce piscando: nos 2 primeiros segundos, os meteoros passam direto por ela; por isso a partida mais curta possível dura 2 s, e 16 das 679 duraram só isso) — diferente dos stories de 23/10 (bastidor: sete em oito) e 24/10 (ranking da semana: o pódio da semana 43) e do reel do dia (marco: as 24 horas de jogo)
gancho: "Sua nave nasce piscando no Navistron!" (palavras-chave "nasce piscando" e "dois segundos", fora dos ganchos dos últimos 10 dias)
cenario: a nave que nasce piscando — a Estela no espaço azul-escuro estrelado, de braços para baixo, com uma navinha ciano-clara translúcida, como um holograma, no alto do quadro, longe do cabelo, e duas pedrinhas cinza em volta dela, sem estrago. Pedido com "soft natural light on her, no glowing outline around her body" e "no faces, no eyes, no creatures", sem texto, número nem logo. Diferente do último vídeo dela (o story de 24/10: o pódio da semana 43)
look: a nave que nasce piscando v2 — a4b19f1f02beabe5bba7e4b72716585e (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-25-story-nave-piscando-looks). A v1 (76b8f4a0998446b7509ae69381df0e4a), pedida "half transparent, like a ghost", saiu como um fantasminha ciano de desenho, com olhos, parecido com personagem de terceiros — vetada; a v2 pediu "arrow-shaped spaceship, faint and see-through" e saiu limpa, com as mãos na beira de baixo do quadro
variavel_testada: duração curta — 44 palavras em 14,6 s na Friendly a 1,15x (~0,33 s por palavra), depois de quatro stories de 16,1 a 22,0 s no Avatar III (21 a 24/10: 5, 0, 0 e 0 de alcance); os stories de 11 s de 18 e 20/10 fizeram 28 e 27. Sem expressiveness nem motionPrompt (o Avatar III não aceita)
heygen_video_id: 2a38ae6b241d01ae3d08c0ee2c05f64c
creditos_heygen: 60 → 56 (2 looks, 1 cada — a v1 vetada —, e o vídeo de 14,6 s, 2 — no Avatar III, ~1 crédito a cada ~8,4 s, arredondado para cima)
horario_publicacao: 2026-10-25 16:00 BRT (domingo)
buffer_post_id: 6add86dc0b5343d070b614ab (agendado à 01:34 de 25/10 para as 16:00; scheduled, 14,6 s, isAiGenerated true; miniatura em 2,1 s, porque em 1,0 s ela pisca um olho)
qa: reel.mp4 baixado pelo SHA do commit do render (4a156855) e conferido; a main serve o mesmo arquivo (4.891.560 bytes). Vídeo puro (render.json: captions 0), sem texto nem nada por cima; transcrição (legenda.srt) igual ao roteiro palavra por palavra (44 palavras); áudio presente (média −24,7 dB, pico −6,2 dB); 14,6 s, H.264 1080×1920 a 30 fps. Rosto natural, boca acompanhando a fala, dentes e olhos sem defeito. Mãos: como no look, os antebraços ficam parados na beira de baixo do quadro o vídeo todo, cortados, sem dedos à vista (pele abaixo de y = 1500 em todos os quadros, sem gesto); bordas sem ninguém entrando (zero pixel de pele nas faixas laterais); a navinha parada (diferença no alto contra a mediana do vídeo de no máximo 1,0)
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo (src/app/play/page.js, blob 36d68b9a, conferido em 25/10/2026: createShip() com invincible:2; em updateMeteors, a colisão nave × meteoro só é testada com ship.invincible <= 0; drawShip não desenha a nave quando Math.floor(invincible × 10) % 2 === 0 — pisca a cada 0,1 s; invincible -= dt a cada quadro; timeAlive soma 1 ponto por segundo vivo). navistron.io/stats?visao=partidas&ordem=tempo&dir=asc lido em 25/10/2026 ~01:10 BRT: 16 partidas de 0:02 (a última em 22/10 às 07:46, 2 pontos), 8 de 0:03 e 7 de 0:04, em 679 partidas (período dos dados até 23/10 10:58; o sábado 24/10 não teve partida). Fato fechado e datado ("até ontem"), porque o story vai ao ar às 16:00
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela):

Sua nave nasce piscando no Navistron! Nos dois primeiros segundos, os meteoros passam direto por ela. Por isso, a partida
mais curta possível dura dois segundos, e, até ontem, dezesseis partidas duraram só isso. Joga hoje e põe o seu nick no
game over!
