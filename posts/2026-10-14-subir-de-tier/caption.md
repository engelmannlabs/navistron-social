---
data: 2026-10-14
formato: reel 14,0 s (reel de dados do calendário S42, qua 14, 13:00 — o 1º dos dois posts do dia no feed; a Estela vem às 19:00)
pilar: mecânica explicada — a virada de tier (o 5º boost do tier fecha o leque em um tiro e o dano dos tiros cai até dois boosts depois); diferente de 12/10 (ranking da semana e bastidor da Estela) e de 13/10 (marco: a partida 600)
gancho: "SUBIR DE TIER ENFRAQUECE" (palavras-chave "subir de tier" e "enfraquece", fora dos ganchos dos últimos 10 dias; legível desde o quadro 0) → "por 2 boosts · é a regra do jogo" a partir de 0,5 s (a capa, em 1,6 s, tem os dois) → "dano máximo por segundo": 66,7 com "tier II · 5 tiros" (a nave verde atirando em leque de 5) → a virada em 4,9 s (flash amarelo, tremor, os meteoros da tela explodem — o hit da trilha) e o contador caindo para 30,8 em vermelho com "tier III · 1 tiro" → "o leque volta a 1 tiro" → "2 boosts depois": de 30,8 a 92,3 em dourado com "tier III · 3 tiros" → "passa os 66,7" → "PEGA O ARCO-ÍRIS NA HORA CERTA" → CTA
horario_publicacao: 2026-10-14 13:00 BRT (quarta)
buffer_post_id: (preencher)
qa: (preencher)
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
teste_do_dia: S42 — quarta com dois posts no feed (o reel de dados às 13:00 e a Estela às 19:00), o 2º dia de dois posts da semana; o pedido "põe o seu nick no game over" abre a legenda
fonte_dados: código do jogo — src/app/play/page.js (SHA 36d68b9a, conferido em 14/10/2026): TIER_DEFS (Tier II: dano 2, um disparo a cada 0,15 s, cor #80ff90; Tier III: dano 4, a cada 0,13 s, cor #ffdd00); collectBoost() faz spreadLevel++ e, a cada 5 boosts, tierUp(), que volta o leque a 1 (spreadLevel = 1), troca a cadência, explode os meteoros da tela sem dar pontos, pisca a tela na cor do tier por 0,5 s e treme por 0,55 s; spawnBullets() solta um tiro por posição do leque (5° entre os tiros no leque 5, 9° no leque 3); spawnBoost() marca como boost de tier (o do arco-íris) o que falta para a virada. Dano máximo dos tiros por segundo, se todos acertarem: Tier II com 5 tiros = 5 × 2 / 0,15 = 66,7; Tier III com 1 tiro = 4 / 0,13 = 30,8 (54% a menos); com 2 tiros, 61,5 (ainda abaixo); com 3, 92,3. Telemetria: navistron.io/stats?visao=partidas&ordem=score lido em 13/10/2026 ~01:20 BRT — das 25 maiores partidas, 20 acabaram com o leque (coluna Spread) em 5; a lista não mudou até 14/10 (a melhor partida de 13/10 fez 13.974, abaixo da 25ª, 16.869, pela lista ?visao=partidas&ordem=data lida em 14/10 ~01:05 BRT)
---

Joga hoje, pega o arco-íris na hora certa e põe o seu nick no game over.

No Navistron, o 5º boost de cada tier — o do arco-íris — sobe a nave de nível e fecha o leque em um tiro só. Do Tier II para o III, cada tiro passa de 2 para 4 de dano, mas o dano máximo dos tiros cai de 66,7 para 30,8 por segundo.

Só dois boosts depois, com 3 tiros, a nave passa o que tinha: 92,3.

Na lista das 25 maiores partidas da história, 20 acabaram com o leque cheio — a um boost da virada.

A conta completa está no artigo dos 30 mil pontos, no blog — link na bio.

Números do código do jogo e de navistron.io/stats (14/10). Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
