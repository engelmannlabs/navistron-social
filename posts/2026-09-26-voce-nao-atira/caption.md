---
data: 2026-09-26
formato: reel 14,0 s 1080x1920 (post.html + audio.json)
pilar: mecânica explicada (tiro automático) — último uso do pilar em 22/09
gancho: "Aqui você não atira. Só desvia." → contador até 400 ("Tier II · cadência da nave", "salvas por minuto, sem apertar nada", "cada boost soma mais um tiro") → "5 mísseis teleguiados por salva · automáticos" → "O JOGO É SOBRE POSIÇÃO." → CTA
horario_publicacao: 2026-09-26 13:00 BRT (sábado, agendado — 9º post no slot diurno)
buffer_post_id: 6ab744fd80521ded5520b7bb
teste_do_dia: 6º dia de pedido na primeira linha. Depois de quatro perguntas factuais (score, palpite, já jogou, aposta) e uma marcação, hoje é **pergunta de opinião** ("prefere botão de tiro ou tiro automático?") — a única das seis que não exige que a pessoa tenha jogado.
fonte_dados: código do jogo (`src/app/play/page.js`), conferido em 26/09/2026 ~01:05 BRT — linha 1283: `if(s.fireCooldown<=0){spawnBullets(s);s.fireCooldown=s.fireRate;}`, ou seja, o tiro acontece no loop sem nenhum input. TIER_DEFS rate = 0,18/0,15/0,13/0,11/0,09/0,08/0,06 s → Tier II = 400 salvas por minuto. Telemetria: 528 partidas, 44 pilotos (nick novo XXXX).
nota: as 3 partidas de 25/09 saíram às **11h37–11h42**, antes do post das 13h02 — reforço direto da conclusão de ontem de que o post não puxa as partidas. Também é o primeiro registro de jogo antes do meio-dia em semanas, quebrando o padrão "14h–18h".
---

Você prefere jogo com botão de tiro ou com tiro automático? Comenta aí — tenho curiosidade real nessa.

No Navistron você não aperta nada para atirar. A nave dispara sozinha a cada 0,15 segundo no Tier II: são 400 salvas por minuto que você nunca pediu.

E não para aí. A partir de 3.334 pontos ela ainda lança 5 mísseis teleguiados por salva, que miram sozinhos no meteoro mais próximo.

O jogo inteiro é sobre onde você está, não sobre mira. É por isso que funciona igual no dedo e no mouse.

No blog de hoje: de onde veio o tiro automático nos jogos e o que se ganha e se perde tirando o botão — link na bio.

Números lidos no código do jogo em 26/09. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
