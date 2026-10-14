---
data: 2026-10-14
formato: reel 14,0 s (reel de dados do calendário S42, qua 14, 13:00 — o 1º dos dois posts do dia no feed; a Estela vem às 19:00)
pilar: mecânica explicada — a virada de tier (o 5º boost do tier fecha o leque em um tiro e o dano máximo da nave cai até o boost seguinte); diferente de 12/10 (ranking da semana e bastidor da Estela) e de 13/10 (marco: a partida 600)
gancho: "SUBIR DE TIER ENFRAQUECE" (palavras-chave "subir de tier" e "enfraquece", fora dos ganchos dos últimos 10 dias; legível desde o quadro 0) → "até o próximo boost · é a regra do jogo" a partir de 0,5 s (a capa, em 1,6 s, tem os dois) → "dano máximo da nave por segundo": 76,7 com "tier II · 5 tiros + 5 mísseis" (a nave verde atirando em leque de 5) → a virada em 4,9 s (flash amarelo, tremor, os meteoros da tela explodem — o hit da trilha) e o contador caindo para 50,8 em vermelho com "tier III · 1 tiro + 5 mísseis" → "o leque volta a 1 tiro" → "1 boost depois": de 50,8 a 81,5 em dourado com "tier III · 2 tiros + 5 mísseis" → "passa os 76,7" → "PEGA O ARCO-ÍRIS NA HORA CERTA" → CTA
horario_publicacao: 2026-10-14 13:00 BRT (quarta)
buffer_post_id: (preencher)
qa: (preencher)
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
teste_do_dia: S42 — quarta com dois posts no feed (o reel de dados às 13:00 e a Estela às 19:00), o 2º dia de dois posts da semana; o pedido "põe o seu nick no game over" abre a legenda
versao_anterior: a 1ª versão (commits 80541afb e d4995de4, renderizada e nunca agendada) contava só os tiros — 66,7 → 30,8 → 92,3, "por 2 boosts" — e contradizia o artigo dos 30 mil pontos (13/10), citado na legenda, que soma os mísseis teleguiados da nave e mostra a virada recuperada um boost depois (81,5). Refeita antes de agendar com a conta completa da nave, a mesma do artigo
fonte_dados: código do jogo — src/app/play/page.js (SHA 36d68b9a, conferido em 14/10/2026): TIER_DEFS (Tier II: dano 2, um disparo a cada 0,15 s, cor #80ff90; Tier III: dano 4, a cada 0,13 s, cor #ffdd00); collectBoost() faz spreadLevel++ e, a cada 5 boosts, tierUp(), que volta o leque a 1 (spreadLevel = 1), troca a cadência, explode os meteoros da tela sem dar pontos, pisca a tela na cor do tier por 0,5 s e treme por 0,55 s; spawnBullets() solta um tiro por posição do leque (5° entre os tiros no leque 5, 12° no leque 2); getMissileDef(): min(5, floor(dif) − 1) mísseis teleguiados por salva, a cada max(0,35; 2,0 − 0,25 × (n − 1)) s — 5 a cada 1,0 s, a partir de 3.334 pontos no Tier II —, cada um com o dano do tier; spawnBoost() marca como boost de tier (o do arco-íris) o que falta para a virada. Dano máximo da nave por segundo, se tudo acertar (tiros + 5 mísseis): Tier II com 5 tiros = 5 × 2 / 0,15 + 5 × 2 / 1,0 = 76,7; Tier III com 1 tiro = 4 / 0,13 + 5 × 4 / 1,0 = 50,8 (34% a menos); com 2 tiros, um boost depois = 2 × 4 / 0,13 + 20 = 81,5 — a mesma conta do artigo dos 30 mil pontos (navistron.io/blog/como-fazer-30-mil-pontos-navistron, 13/10). Telemetria: navistron.io/stats?visao=partidas&ordem=score lido em 14/10/2026 ~01:15 BRT (a lista é a mesma da leitura de 13/10 ~01:20) — das 25 maiores partidas, 20 acabaram com o leque (coluna Spread) em 5: 17 no Tier II com 9 boosts e 3 no Tier III com 14, todas a um boost da virada; a melhor partida de 13/10 fez 13.974, abaixo da 25ª (16.869), pela lista ?visao=partidas&ordem=data lida em 14/10 ~01:15 BRT
---

Joga hoje, pega o arco-íris na hora certa e põe o seu nick no game over.

No Navistron, o 5º boost de cada tier — o do arco-íris — sobe a nave de nível e fecha o leque em um tiro só. Do Tier II para o III, cada tiro passa de 2 para 4 de dano, mas o dano máximo da nave, somando os tiros e os 5 mísseis teleguiados, cai de 76,7 para 50,8 por segundo.

Um boost depois, com 2 tiros, ela já passa o que tinha: 81,5.

Na lista das 25 maiores partidas da história, 20 acabaram com o leque cheio — a um boost da virada.

A conta completa está no artigo dos 30 mil pontos, no blog — link na bio.

Números do código do jogo e de navistron.io/stats (14/10). Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
