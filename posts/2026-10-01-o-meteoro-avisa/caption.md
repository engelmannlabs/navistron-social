---
data: 2026-10-01
formato: carrossel 5 slides 1080x1440 (post.html + slide-2.html … slide-5.html; os meteoros são desenhados por meteoro.js, cópia do drawMeteor do jogo)
pilar: mecânica explicada — as rachaduras do meteoro (calendário S40: qui 01 = carrossel; pilar diferente de 29/09 estreia da Estela e 30/09 recorde)
gancho: "O meteoro avisa quando vai quebrar." → "Uma a cada 1/7 da vida" (fila de 7 meteoros, >0% … >86% de vida perdida) → "7 acesas: sobrou menos de 1/7" → exemplo (meteoro grande, Tier III, 10 mil pontos: 72 de vida, 18 acertos, a 7ª acende no 16º) → "Repara nas rachaduras" + CTA
horario_publicacao: NÃO AGENDADO — em 01/10 01:05 BRT o conector do Buffer pedia nova autorização (OAuth), então não houve como agendar. Arte pronta e atemporal: pode sair em qualquer dia de carrossel quando o Buffer voltar.
buffer_post_id: —
teste_do_dia: pedido "joga e põe o nick no game over" na primeira linha (4º dia); a legenda cita o artigo do blog do dia (mesmo tema).
fonte_dados: código do jogo (src/app/play/page.js do repo navistron, sem mudança desde 07/09), conferido em 01/10/2026 — spawnMeteor() pré-gera 7 grupos de rachaduras por meteoro; drawMeteor() acende min(7, ceil((1 - hp/maxHp) * 7)), só quando maxHp > 1, recortadas pelo contorno. Vida = round(3 × dificuldade) (grande) e round(dificuldade) (pequeno); dificuldade = base do tier × (1 + score × 0,0007); dano por acerto = 1/2/4/7/12/20/35 por tier. Exemplo rodado em python: Tier III aos 10.000 pontos → dificuldade 24, vida 72, 18 acertos; rachaduras por acerto 1 1 2 2 2 3 3 4 4 4 5 5 6 6 6 7 7 → quebra.
---

Joga uma partida hoje, põe o seu nick no game over — e repara nas rachaduras.

No Navistron não tem barra de vida. Cada meteoro nasce com 7 rachaduras escondidas, e elas vão acendendo conforme ele apanha: uma a cada 1/7 da vida perdida.

Viu a 7ª? Sobrou menos de 1/7 da vida. Um meteoro grande no Tier III, aos 10 mil pontos, tem 72 de vida e cai com 18 acertos — a 7ª rachadura acende no 16º.

Arrasta pra ver o passo a passo. No blog de hoje: como o jogo desenha essas rachaduras e por que elas fazem o papel da barra de vida — link na bio.

Mecânica conferida no código do jogo em 01/10. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros
