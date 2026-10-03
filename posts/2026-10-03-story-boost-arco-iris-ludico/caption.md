---
data: 2026-10-03
formato: story da Estela, versão LÚDICA (teste pedido pelo Guilherme em 03/10, às 11:40): vídeo puro com 6 cortes e trilha chiptune baixa, no lugar do story original do dia
pilar: "a Estela explica" — o boost arco-íris (mesmo roteiro e mesma mecânica do story original, posts/2026-10-03-story-boost-arco-iris)
gancho: "Sabia que um dos boosts do Navistron brilha em arco-íris?"
cenas: 1) setup (quarto gamer) → 2) headset na mesa → 3a) cutaway de 2 s: a Estela reage à luz de arco-íris no rosto (heygen-video-1, sem fala, voz por cima) → 3b) cozinha → 4) setup em close → 5) sala (sofá), acenando no fim — todas dentro da casa dela
producao: HeyGen Video Agent, modo chat com storyboard revisado antes do render (sessão 3ea8c81e9f0c4e47a549ebf05a61f3d1); o Seedance 2.0 (Cinematic Shots) foi tentado antes e respondeu 403, "requer plano Pro", sem gasto
cutaway: heygen-video-1, image_to_video do look setup, 2k (1536x2030), 5 s, 5 créditos — video_id 2afb8e6e9a454160b2156598bdd8536c (laboratório em posts/_lab-2026-10-03-hv1-arcoiris)
voz: Sofia Brazil - Friendly (0edbc867be6f48c5be8ff8b0fbca0802) a 1,2x (o Video Agent estimou 27 s a 1,1x, acima do limite de 25 s dos stories); glossário Navistron
trilha: chiptune gerada pelo próprio Video Agent, em volume baixo, com fade-out
heygen_video_id: 1b029d53b9d345a884c8b2737f7f8a23
creditos_heygen: 501 → 480 no teste todo (21): Video Agent 14 (19,5 s), cutaway do arco-íris 5 e um clipe de explosão de 768p (2) que ficou de fora — o fogo aparecia dentro do quarto
duracao: 19,5 s
horario_publicacao: 2026-10-03 16:00 BRT — substitui o story original (Buffer 6ac081d116dec17c265229e2, apagado a pedido do Guilherme)
buffer_post_id: (preencher)
fonte_dados: código do jogo (src/app/play/page.js, sem mudança desde 07/09/2026), conferido em 03/10/2026 — spawnBoost() marca isTierUp quando falta 1 boost para o próximo tier (5 − totalBoosts % 5 === 1); drawBoost() desenha esse boost com brilho de cor variando (arco-íris) e uma seta ⬆, e os outros em dourado/laranja com uma estrela ★; collectBoost() chama tierUp() a cada 5 boosts, e tierUp() explode todos os meteoros da tela (sem pontos) e volta o spread para 1
---

Roteiro (fala da Estela, idêntico ao do story original; o story não tem texto nem legenda na tela):

Sabia que um dos boosts do Navistron brilha em arco-íris? Os outros são dourados, com uma estrela. O de arco-íris tem uma
seta: é o quinto de cada ciclo, o que sobe a sua nave de nível — e, quando você pega, todos os meteoros da tela explodem.
Joga hoje e procura o arco-íris. Te vejo no ranking!
