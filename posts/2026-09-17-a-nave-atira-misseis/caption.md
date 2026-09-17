---
data: 2026-09-17
formato: reel 14,0 s 1080x1920 (post.html + audio.json)
pilar: mecânica explicada (mísseis teleguiados da nave)
gancho: "A nave atira mísseis sozinha." → contador até 159 ("Tier II · o 1º míssil sai com … pontos · 1 míssil a cada 2 s", "caça o meteoro mais perto") → "5 mísseis por segundo · a partir de 3.334 pontos" → "Quantos já viu juntos?" → CTA "joga uma · conta nos comentários"
horario_publicacao: 2026-09-17 20:30 BRT (quinta, agendado)
buffer_post_id: 6aabf4d4f41b0759986d3dc8
fonte_dados: regras fixas lidas no código-fonte do jogo (src/app/play/page.js, 17/09/2026): mísseis da própria nave, count = min(5, floor(dificuldade) − 1), intervalo 2,0 s − 0,25 s por míssil extra (1,0 s com 5), 320 px/s, giro 5,5 rad/s, vida 2 s, dano = dano do tier, alvo = meteoros mais próximos; dificuldade = base × (1 + score × 0,0007) → Tier II: 1 míssil com 159 pts, 5 com 3.334 pts. Sem números de telemetria (497 partidas, sem partida nova desde 14/09).
---

A nave do Navistron atira mísseis sozinha.

A partir de dificuldade 2 (no Tier II, com 159 pontos) ela dispara um míssil teleguiado a cada 2 segundos, sempre no meteoro mais perto. Cada nível de dificuldade soma mais um: com 3.334 pontos no Tier II são 5 mísseis por segundo, cada um com o dano do seu tier.

Dica: eles miram no meteoro mais próximo da nave. Fica embaixo do que te ameaça e deixa eles trabalharem.

Quantos você já viu juntos? Conta nos comentários. A conta completa (quando aparecem em cada tier, dano, velocidade) está no blog, link na bio.

Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
