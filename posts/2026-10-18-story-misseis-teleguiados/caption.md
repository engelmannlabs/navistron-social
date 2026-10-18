---
data: 2026-10-18
formato: story da Estela, take único (Avatar IV, 11,3 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: "a Estela explica" (os mísseis teleguiados da nave: saem sozinhos, um por meteoro, e quanto mais pontos, mais mísseis, até cinco por vez) — diferente dos stories de 16/10 (telemetria: a partida mais longa) e 17/10 (desafio: os sábados sem partida) e do reel do dia (desafio: a partida de 14.012 sem nick, fora do top 10)
gancho: "Sabia que a sua nave solta mísseis teleguiados sozinha?" (palavras-chave "mísseis teleguiados", fora dos ganchos dos últimos 10 dias; em outubro, os mísseis só tinham entrado na conta de dano do reel de 14/10; no blog, há o artigo de 17/09 sobre eles)
cenario: os mísseis teleguiados — a Estela no espaço azul-escuro, com três mísseis pequenos de ponta branca e brilho verde (o Tier II do jogo) em rastros curvos, cada um atrás de um meteorozinho cinza, no quarto de cima do quadro, bem acima da cabeça. Pedido com "nothing glowing below her chin" e "no glowing outline around her body". Diferente do último vídeo dela (os cinco planetinhas, story de 17/10) e do reel de 16/10 (a lupa)
look: os mísseis teleguiados — b24ab9bdf28e8044861a67c34eddfeaa (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-18-story-misseis-looks): fone só no pescoço, nada na cabeça, sem texto nem logo; os mísseis e os meteoros ficam bem acima do cabelo, com o céu limpo até a testa
variavel_testada: voz — Sofia Brazil - Friendly a 1,15x (a 1ª vez acima de 1,1x, para encurtar o story pela regra de orçamento): 35 palavras em 11,3 s (~0,32 s por palavra, contra ~0,36 a 1,1x) → resultado no qa. Braços parados o vídeo todo (padrão dos stories desde 16/10) e expressiveness low (11ª vez); na 2ª tentativa, o motionPrompt ganhou "She is alone in the frame; the starry background stays empty."
heygen_video_id: 6ac8967e475dd4737d6d57c920441ab9 (2ª tentativa; a 1ª, 7a41c8e3ed911f05b41c226d03328e35, renderizada no commit 8d921b6f e descartada no QA: figuras de outras pessoas, de cabelo comprido, apareciam nas bordas do quadro, atrás dela, de ~7,4 a ~10,4 s — nunca agendada)
creditos_heygen: 117 → 116 (o look) → 112 (a 1ª tentativa, 11,3 s, 4) → 108 (a 2ª, 11,3 s, 4). O story custou 9 (5 sem o refazer)
horario_publicacao: 2026-10-18 16:00 BRT (domingo)
buffer_post_id: pendente
qa: pendente
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo (engelmannlabs/navistron, src/app/play/page.js, SHA 36d68b9a), conferido em 18/10/2026: getMissileDef() → count = min(5, max(0, floor(getDiff()) − 1)) e intervalo = max(0,35; 2,0 − (count − 1) × 0,25) s; getDiff() = TIER_DIFF[tier] × (1 + score × 0,0007) (sobe com os pontos e com o tier; o tier só sobe); spawnMissiles() mira os N meteoros mais próximos (um alvo por míssil, repetindo alvo se houver menos meteoros) e updateMissiles() troca de alvo quando o meteoro some; o disparo é automático (missileCooldown, sem botão). O 1º míssil sai com dificuldade 2: 159 pontos no Tier II, 1.429 no Tier I (conta em python). Sem número de telemetria: nada no roteiro muda durante o dia
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela):

Sabia que a sua nave solta mísseis teleguiados sozinha? Cada um persegue um meteoro, e quanto mais pontos, mais mísseis:
até cinco por vez. Joga hoje e põe o nick no game over!
