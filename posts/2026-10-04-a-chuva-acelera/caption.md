---
data: 2026-10-04
formato: reel 14,0 s (1080x1920, 30 fps) com trilha chiptune (audio.json)
pilar: mecânica explicada (a chuva de meteoros acelera) — calendário S40: dom 04 = reel de dados; pilar diferente de 02/10 (desafio) e 03/10 (marco)
gancho: "A chuva de meteoros acelera." → contador de meteoros por segundo de 0,8 até **5,3** ("no limite · tier III a partir de 15,7 mil pontos", "no começo: 0,8 por segundo") → escada: Tier I no começo 0,8 · Tier II aos 2 mil 1,9 · Tier III aos 10 mil 4,5 · limite 5,3, "e caindo até 3,8× mais rápido" → "ATÉ ONDE VOCÊ AGUENTA?"
horario_publicacao: 2026-10-04 13:00 BRT (domingo)
buffer_post_id: 6ac1d1c57d53b827e0f9d16a
teste_do_dia: S40 — último reel de dados da semana no slot das 13:00; 7º dia do pedido "joga e põe o nick no game over"; a legenda cita o artigo do blog do dia (tutorial de dificuldade progressiva em JavaScript)
fonte_dados: código do jogo (src/app/play/page.js do repo navistron, ref 833dddae), conferido em 04/10/2026 — spawnThings(): intervalo = max(0,2; 1,2/√dif) + sorteio de 0 a 0,15 s; por vez cai 1 meteoro, ou 2 com chance de 25% (dif > 4) ou 45% (dif > 8); getDiff() = TIER_DIFF[tier] × (1 + score × 0,0007), TIER_DIFF = 1 / 1,8 / 3 / 4,8 / 7 / 10 / 14; spawnMeteor(): velocidade × min(1 + (dif − 1) × 0,2; 3,8); o tier só sobe durante a partida (tierUp). Contas em python (média de longo prazo = meteoros por vez ÷ intervalo médio): Tier I, 0 pts → 0,78/s; Tier II, 2.000 → dif 4,32 → 1,92/s; Tier III, 10.000 → dif 24 → 4,53/s, velocidade 3,8× (teto, alcançado aos 5.715 pts no Tier III); limite com dif ≥ 36 → Tier III a partir de 15.715 pts → 5,27/s. Recorde 29.901 (GUI, 29/09, Tier III no fim): dif 65,8, dentro do limite. Telemetria (navistron.io/stats, 04/10 ~01:05 BRT): nenhuma partida desde 02/10 20:47; 545 partidas, 44 pilotos
---

Joga uma partida hoje e põe o seu nick no game over — e vê até onde você aguenta a chuva.

No Navistron, os meteoros não caem sempre no mesmo ritmo. No começo, é menos de um por segundo (0,8, em média). No Tier III, aos 10 mil pontos, já são 4,5 por segundo, caindo 3,8× mais rápido.

A partir de ~15,7 mil pontos no Tier III, a chuva chega no limite do código: 5,3 por segundo. O recorde, 29.901 pontos do GUI (29/09), terminou lá dentro.

No blog de hoje: como programar uma dificuldade que acelera assim, em JavaScript, com as fórmulas do jogo — link na bio.

Contas feitas com as fórmulas do código do jogo, conferidas em 04/10. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
