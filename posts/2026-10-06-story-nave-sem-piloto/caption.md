---
data: 2026-10-06
formato: story da Estela, take único (Avatar IV, 20,8 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: provocação do dia — a melhor partida de segunda (05/10), anônima; complementa o reel do dia (ninguém chegou ao Tier V, de dados) sem repetir o assunto
gancho: "Ontem à tarde, alguém fez 8.585 pontos no Navistron e levou a nave até o nível quatro, o laranja."
cenario: a nave laranja sem piloto — a Estela num hangar de naves à noite, ao lado de uma navinha com casco azul-claro, contorno e motor laranja (a cor do Tier IV no código) e a cabine aberta e vazia; estrelas pela porta do hangar (diferente do pódio do reel de 05/10 e da plaquinha de nome do story de 05/10)
look: a nave laranja sem piloto — 7c6fa1e03e4bed9b724cae275abc72c4 (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-06-story-nave-looks). Duas tentativas anteriores, com prompts de 1.187 e 1.078 caracteres, devolveram erro 500 da HeyGen sem criar look nem gastar crédito; a 3ª, encurtada para 709, funcionou (pode ter sido o tamanho ou uma instabilidade passageira)
variavel_testada: motionPrompt animado, com gestos de mão visíveis (1ª vez; plano de testes, gestos), expressiveness medium, sem aceno; voz Sofia Brazil - Friendly. A 1ª versão (214ca1aa54b429a7ac6d6504c42667ec, 20,8 s) abriu com um gesto rápido das duas mãos, de 0,1 a 0,4 s, com dedos em forma de garra/V (artefato de mão) e foi refeita uma vez com o motionPrompt pedindo mãos paradas nos 2 primeiros segundos, gestos lentos de palma aberta e nada de sinais com os dedos
heygen_video_id: d8954a1260446eab5c1c5cdfc29947ab
creditos_heygen: 266 → 251 no dia (look 1 + duas versões do vídeo de 20,8 s, 7 cada) — os únicos vídeos da HeyGen no dia (o reel do dia é de dados)
horario_publicacao: 2026-10-06 16:00 BRT
buffer_post_id: 6ac47bf198d02b181e21244a
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: navistron.io/stats?visao=partidas&ordem=data lido em 06/10/2026 ~01:05 BRT (com ?v=; total de 554 igual na visão geral) — 05/10 (segunda) teve 8 partidas, todas anônimas, das 13:23 às 14:35; a melhor, 8.585 pontos às 13:28, terminou no Tier IV com 4min10. Tier IV = laranja (#ff8c00 em TIER_DEFS de src/app/play/page.js, cuja última mudança é de 07/09/2026, commit 94234551; conferido em 06/10) e o tier nunca desce na partida (tierUp só soma), então o tier final é o maior alcançado; sem nick, a partida vai para AnonymousDB e não entra no ranking
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela; números por extenso para a voz e "nível" no lugar de "Tier", que a voz pt-BR poderia ler mal):

Ontem à tarde, alguém fez oito mil quinhentos e oitenta e cinco pontos no Navistron e levou a nave até o nível quatro, o
laranja. E ninguém sabe quem foi: a partida ficou sem nick, fora do ranking. Se foi você, joga de novo hoje e, no game
over, digita o seu nome. Te vejo no ranking!
