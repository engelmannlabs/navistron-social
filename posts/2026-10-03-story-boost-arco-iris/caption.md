---
data: 2026-10-03
formato: story da Estela (vídeo puro, 21,8 s, avatar HeyGen 1080p)
pilar: "a Estela explica" — o boost arco-íris (mecânica conferida no código; não repete o reel do dia, que fala das 20 horas de jogo)
gancho: "Sabia que um dos boosts do Navistron brilha em arco-íris?"
look: setup (original) — c328911551104420832ec0a8a325ffb3 (em casa; o vídeo anterior dela foi no quarto com luzinhas)
variavel_testada: motor Avatar V de novo (2º vídeo), agora como o único vídeo do dia, para medir o custo isolado; sem expressiveness e sem motionPrompt; voz Sofia Brazil - Friendly (0edbc867be6f48c5be8ff8b0fbca0802)
heygen_video_id: 64d8f0e4c724efd7dc67c7b3d80796e1
creditos_heygen: 519 → 501 (18 créditos por 21,8 s no Avatar V, ~1 a cada 1,2 s; no Avatar IV seriam ~8)
horario_publicacao: 2026-10-03 16:00 BRT
buffer_post_id: (preencher)
fonte_dados: código do jogo (src/app/play/page.js, sem mudança desde 07/09/2026), conferido em 03/10/2026 — spawnBoost() marca isTierUp quando falta 1 boost para o próximo tier (5 − totalBoosts % 5 === 1); drawBoost() desenha esse boost com brilho de cor variando (arco-íris) e uma seta ⬆, e os outros em dourado/laranja com uma estrela ★; collectBoost() chama tierUp() a cada 5 boosts, e tierUp() explode todos os meteoros da tela (sem pontos) e volta o spread para 1
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela):

Sabia que um dos boosts do Navistron brilha em arco-íris? Os outros são dourados, com uma estrela. O de arco-íris tem uma
seta: é o quinto de cada ciclo, o que sobe a sua nave de nível — e, quando você pega, todos os meteoros da tela explodem.
Joga hoje e procura o arco-íris. Te vejo no ranking!
