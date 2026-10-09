---
data: 2026-10-09
formato: carrossel 5 slides 1080x1440 (post.html + slide-2.html … slide-5.html; os meteoros do slide 4 são desenhados por meteoro.js, cópia do drawMeteor do jogo, com o calor máximo do Tier IV aos 14 mil pontos)
pilar: desafio / telemetria — a melhor partida de 08/10 ficou a 7 pontos do 10º lugar do top 10 de pilotos (calendário S41: sex 09 = carrossel; pilar diferente de 07/10, boas-vindas a estreante, e de 08/10, reação a evento)
gancho: "A 7 pontos." (14.007 do 10º × 14.000 sem nick) → "14.000 pontos." (08/10 · 14:41, Tier IV, 17 boosts, 4min24, nick nenhum; a 68ª melhor partida da história, entre 586) → "O 10º tem 14.007." (8º JOGO, 9º ROBER, 10º JOGO MALUCO, linha do top 10, a partida sem nick 7 pontos abaixo) → "7 pontos = 7 segundos." (1 ponto por segundo vivo; aos 14 mil no Tier IV, meteoro pequeno 259 e grande 778) → "Sem nick, fica de fora." (18 partidas na quinta, 0 com nick; com nick, a de 14.000 entraria na lista de pilotos em 11º) + CTA
horario_publicacao: 2026-10-09 13:00 BRT (agendado)
buffer_post_id: 6ac86b95987e694c3c402269 (agendado às 01:20 de 09/10 para as 13:00; scheduled, 5 imagens 1080×1440 com alt text por slide)
qa: render conferido pelo SHA do commit 87e1efb7 (5 PNG de 1080×1440, 670–770 KB) e antes na pré-visualização local (scripts/qa.py: fontes carregadas, nada fora do canvas); ajustes antes do push: o brilho do meteoro grande cortado num retângulo no slide 4, a vírgula do título encostando no "A" de FORA no slide 5 (parecia "FORÁ") e uma estrela e um meteoro de fundo sobre o topo e a 2ª linha do slide 3
teste_do_dia: pedido "joga e põe o nick no game over" na primeira linha (12º dia); a legenda cita o artigo do blog do dia (mesmo tema: quantos pontos levam ao top 10 de pilotos). Palavra do gancho: "7 pontos" — "top 10" ficou fora do título, porque foi gancho do story de 07/10 ("Quer entrar no top dez de pilotos?")
fonte_dados: navistron.io/stats lido em 09/10/2026 ~01:15 BRT (com ?v=; horários de Brasília). Totais: 586 partidas (92 com nick, 494 anônimas), 45 pilotos, 19h45 de jogo. Partidas de 08/10 (?visao=partidas&ordem=data): 18, todas anônimas, 13:41–15:03 e 22:27–22:33; a maior, 14.000 às 14:41 (Tier IV, 17 boosts, 4:24); três no Tier IV no dia (14.000, 11.793 e 5.719; 36 no Tier IV na história, pelo filtro ?tier=3). Top 10 de pilotos (/stats, melhor partida de cada nick): 8º JOGO 15.151 (29/05), 9º ROBER 15.128 (07/10), 10º JOGO MALUCO 14.007 (27/06), 11º VASCAO 13.311 (28/06). Lista de partidas por pontos (?visao=partidas&ordem=score, páginas 1 e 2): a de 14.000 é a 68ª; 65 partidas passaram de 14.007 (40 anônimas). Código do jogo (src/app/play/page.js, SHA 36d68b9a, conferido em 09/10): score += 1 a cada segundo inteiro vivo; meteoro destruído vale round(10 × dif × 0,5) (pequeno) ou round(30 × dif × 0,5) (grande), com dif = 4,8 × (1 + score × 0,0007) no Tier IV → aos 14.000 pontos, dif 51,84, pequeno 259 e grande 778 (conta em python). Ranking de pilotos só com partidas registradas (src/lib/stats.js, agrupamento por nick com bestScore)
---

Joga uma partida hoje e põe o seu nick no game over — a melhor partida de ontem ficou fora do ranking por não ter um.

Ontem (08/10), às 14:41, alguém fez 14.000 pontos no Navistron, até o Tier IV, com 17 boosts — a melhor das 18 partidas do dia.

O 10º do top 10 de pilotos tem 14.007 (JOGO MALUCO, 27/06). Mais 7 segundos vivo e ela encostava: cada segundo vale 1 ponto.

Mas as 18 partidas de ontem ficaram sem nick. Com nick, a de 14.000 já entraria na lista de pilotos, em 11º.

No blog de hoje: quantos pontos levam ao top 10 de pilotos — link na bio.

Números de navistron.io/stats em 09/10, à 01:00. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros
