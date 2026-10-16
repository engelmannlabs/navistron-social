---
data: 2026-10-16
formato: reel da Estela 23,5 s (avatar HeyGen, 1080p), modo econômico — take único num look do cenário do post; o 2º post do dia no feed (calendário S42), às 19:00
pilar: bastidor da Estela (o que ela percebeu lendo a telemetria: uma partida de 15.232 pontos sem sair do Tier I) — diferente de 14/10 (mecânica às 13:00, reação a evento às 19:00), de 15/10 (desafio) e do reel das 13:00 do dia (marco)
gancho: "Achei uma partida esquisita na telemetria do Navistron." (palavra-chave "esquisita", fora dos ganchos dos últimos 10 dias)
roteiro: "Achei uma partida esquisita na telemetria do Navistron. Dez de setembro, sem nick: quinze mil duzentos e trinta e dois pontos, sem sair do Tier um. Só quatro boosts em quatro minutos e vinte e quatro. Com esses pontos, a maioria acaba antes dos três minutos. No Tier um, a dificuldade sobe mais devagar. Coincidência ou tática? Testa hoje e põe o nick no game over!" (66 palavras; números por extenso para a voz; na legenda queimada, em algarismos)
cenario: a lupa na partida esquisita — a Estela no espaço estrelado, com uma lupa de luz no quarto de cima do quadro, longe do cabelo, e, dentro da lente, uma navinha ciano (a cor do Tier I) passando por quatro orbes dourados intocados (os boosts que ficaram para trás). Pedido com "nothing glowing below her chin" e "no glowing outline around her body". Diferente do último vídeo dela (o portal, story de 15/10) e do story do dia (o rastro mais longo)
look: a lupa na partida esquisita — 2d9fd31b3d630bb0573416b2ecefb940 (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-16-looks, à direita): fone só no pescoço, nada na cabeça, sem texto nem logo
variavel_testada: duração ~24 s num reel (66 palavras, 23,5 s — o reel dela mais longo desde 07/10, 23,6 s; os de 12 e 14/10 tiveram 17,1 e 18,2 s); Friendly a 1,1x, expressiveness low, motionPrompt calmo com as mãos paradas nos 2 primeiros segundos
heygen_video_id: 405130a409ac7576c4c45df2ebc326ad
orcamento: 139 créditos no começo da rodada. Reserva = 30 + 8 × 13 stories (16 a 28/10) + 11 × 3 reels da Estela que faltam depois deste no calendário (S43) = 167; o formato completo (~35) deixaria 104 < 167 → modo econômico
creditos_heygen: a preencher depois dos dois vídeos do dia
horario_publicacao: 2026-10-16 19:00 BRT (sexta)
buffer_post_id: a preencher no agendamento
qa: a preencher depois do render
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true, isAiGenerated: true }
teste_do_dia: S42 — 3º dia com dois posts no feed (13:00 reel de dados, 19:00 a Estela); pergunta da semana: o 2º post do dia soma alcance ou divide?; o pedido "põe o seu nick no game over" abre a legenda
fonte_dados: navistron.io/stats lido em 16/10/2026 ~01:10–01:20 BRT (com ?v=; fuso de Brasília). Lista por pontos (?visao=partidas): a 46ª linha é anônima, de 10/09/2026 às 15:40 — 15.232 pontos, 4:24, Tier I, 4 boosts, spread 5 —, e as 45 acima dela são de Tier II para cima: é a maior partida do Tier I. Das 20 partidas entre 15.128 e 16.629 pontos (31ª a 50ª), 15 acabaram antes de 3 minutos (as outras: 3:04, 3:09, 3:14, 4:24 e 4:57). Lista por tempo (?visao=partidas&ordem=tempo): ela é uma das 7 mais longas (4:24, empatada com duas). Código (src/app/play/page.js, 36d68b9a): getDiff() = TIER_DIFF[tier] × (1 + score × 0,0007), TIER_DIFF = [1; 1,8; 3,0; 4,8; 7,0; 10,0; 14,0] — no Tier I, a dificuldade sobe mais devagar que em qualquer outro tier; o tier só sobe (tierUp, a cada 5 boosts), então 4 boosts = a partida inteira no Tier I; boosts aos 8 s e depois a cada 12 a 20 s (em 4:24, ao menos 13 apareceram). Fato fechado (10/09)
---

Joga hoje, testa a tática do Tier I e põe o seu nick no game over.

Achei uma partida esquisita na telemetria do Navistron: 10/09, às 15:40, sem nick. 15.232 pontos em 4min24, sem sair do Tier I — só 4 boosts na partida inteira. É a maior partida do Tier I na lista de partidas por pontos.

Das 20 partidas entre 15.128 e 16.629 pontos, 15 acabaram antes dos 3 minutos. E no Tier I a dificuldade do jogo sobe mais devagar que em qualquer outro tier. Coincidência ou tática?

Números de navistron.io/stats, lidos em 16/10. Grátis, sem login, link na bio 🚀

— Estela

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
