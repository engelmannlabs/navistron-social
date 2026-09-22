---
data: 2026-09-22
formato: reel 14,0 s 1080x1920 (post.html + audio.json)
pilar: mecânica explicada (vida do meteoro × dificuldade × score) — último uso do pilar em 17/09
gancho: "Um meteoro morre com 3 tiros. Ou com 41." → contador até 41 ("Tier II · 20.000 pontos", "no primeiro minuto o mesmo meteoro cai com 3") → "22 tiros aos 10 mil · 12 aos 5 mil" + "a dificuldade sobe 0,07% por ponto" → "QUANTOS TIROS VOCÊ AGUENTA?" → CTA
horario_publicacao: 2026-09-22 13:00 BRT (terça, agendado — 5º post no slot diurno)
buffer_post_id: 6ab1fee56ed20e9354f6ee19
teste_do_dia: 2º dia com o **pedido de comentário na primeira linha** da legenda — aqui em forma de palpite ("quantos tiros você acha?"), que é mais fácil de responder que "qual seu melhor score". Ler os dois em 23 e 24/09.
fonte_dados: código do jogo (`src/app/play/page.js` do repo navistron), conferido em 22/09/2026 ~01:05 BRT — `spawnMeteor`: hp = max(1, round((big?3:1) × diff)); `getDiff`: TIER_DIFF[tier] × (1 + score × 0,0007); TIER_DIFF = [1, 1.8, 3.0, 4.8, 7.0, 10.0, 14.0]; TIER_DEFS dmg = 1/2/4/7/12/20/35. Tier II, meteoro grande: score 0 → hp 5 → 3 tiros; 5.000 → hp 24 → 12; 10.000 → hp 43 → 22; 20.000 → hp 81 → 41. Telemetria sem partida nova desde 18/09 17:41 (508 partidas, 4º dia parado), por isso o post veio do código e não de evento.
---

Quantos tiros você acha que precisa para derrubar um meteoro no Navistron? Comenta o seu palpite.

São 3 no começo da partida e 41 aos 20 mil pontos — o mesmo meteoro, a mesma nave, o mesmo Tier II.

A vida de um meteoro grande é 3× a dificuldade, e a dificuldade sobe 0,07% a cada ponto seu. O jogo não endurece com o tempo: endurece com o seu placar. Aos 5 mil são 12 tiros, aos 10 mil são 22.

Por isso abrir o leque importa tanto — com 5 tiros por salva, 41 vira 9 salvas.

O ranking desta semana está zerado: ninguém joga desde sexta. Qualquer score entra em primeiro.

No blog de hoje, a tabela completa por tier e por score — link na bio.

Números lidos no código do jogo em 22/09. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
