---
data: 2026-10-24
formato: carrossel 6 slides 1080x1440 (post.html + slide-2.html … slide-6.html)
pilar: mecânica explicada — o game over passo a passo: como salvar a partida com o nick e entrar no /ranking (calendário S43: sáb 24 = carrossel, o único post do feed do dia; pilar diferente de 22/10, boas-vindas e reação a evento, e de 23/10, desafio)
gancho: "Seu nome no ranking em 3 passos" (o campo ENTER YOUR NAME com SAVE & RANKING e SKIP; o 100º lugar do /ranking tem 57 pontos, e 84,5% das partidas terminam sem nome) → "3 partidas, nenhum nome." (sexta, 23/10: 11.846, 16.163 e 12.535, todas anônimas; com um nick, a de 16.163 seria a 22ª do /ranking) → "Espera o painel." (a explosão dura 2,5 s e o painel abre 0,7 s depois, com SCORE, TIME, TIER, BOOSTS e SPREAD) → "Digita o seu nick." (até 20 caracteres, salvo em maiúsculas e sem os espaços das pontas) → "Save & Ranking." (ou Enter; SKIP ou nome em branco = partida anônima, fora do /ranking) → "Põe o nick no game over." (até 23/10, um nick só na semana 43, MARCAO 20.301, e 2 lugares vagos no pódio; a semana fecha no domingo, 25/10) + CTA
horario_publicacao: 2026-10-24 13:00 BRT
buffer_post_id: 6adc327f6887a2efc19b8a0f (agendado à 01:22 de 24/10 para as 13:00; scheduled, 6 imagens 1080×1440 com alt text)
render: os 6 PNGs saíram no commit 129b019c (~1,4 min depois do push), de 597 a 686 KB, iguais à prévia local (qa.py)
teste_do_dia: o carrossel da S43 (a leitura de 26/10 decide se o formato fica: os dois do slot das 13:00 fecharam em 1); 1º post do feed que ensina a salvar o nick passo a passo. Pedido "joga e põe o nick no game over" na primeira linha (27º dia); sem linha do blog (o artigo do dia é sobre power-up). Palavras do gancho: "seu nome", "no ranking" e "3 passos", fora dos ganchos dos últimos 10 dias (o "com nick" de 21/10 e o "ficou fora do top 10" de 18/10 ficaram fora do título)
fonte_dados: navistron.io/stats lido em 24/10/2026 ~01:05–01:10 BRT (com ?v=; horários de Brasília). Totais: 679 partidas (105 com nick, 574 anônimas: 84,5%), 47 pilotos, 23h19m, tempo médio 2m04s, média 5.812. Partidas de 23/10 (?visao=partidas&ordem=data): 3, todas anônimas — 10:35 (11.846, Tier II, 8 boosts, 2:37), 10:53 (16.163, Tier II, 9 boosts, 2:45) e 10:58 (12.535, Tier II, 8 boosts, 2:35); a conta fecha com os totais (676 + 3 partidas; 83.496 + 477 = 83.973 s; 3.905.763 + 40.544 = 3.946.307 pontos, ÷ 679 = 5.811,9 → 5.812). navistron.io/ranking lido em 24/10 ~01:15 BRT: "os 100 maiores scores já registrados"; 100º XXXX, 57 (25/09); 21º ASA 16.720 e 22º GUI 16.141 (a de 16.163 seria a 22ª); partidas com Skip não entram no ranking público. Semana 43 (19 a 25/10) até 23/10: 48 partidas, 8 com nick, todas do MARCAO (melhor 20.301, 21/10 às 09:02); ?periodo=7d (17/10 11:42 a 23/10 10:58): 51 partidas, 8 registradas, 1 piloto. Painel do GAME OVER conferido no código (src/app/play/page.js, blob 36d68b9a): explosão de 2,5 s (deathAnimTimer), painel 700 ms depois de endGame(), campo ENTER YOUR NAME com maxLength 20, nome gravado com trim() e toUpperCase(), SAVE & RANKING ou Enter (submitName), nome em branco conta como Skip, SKIP grava a sessão anônima (Unregistered); SPREAD 5 com 9 boosts (collectBoost: spreadLevel++; tierUp a cada 5, spreadLevel = 1)
alt_text:
  - "Slide 1: título 'Seu nome no ranking em 3 passos' sobre um campo ENTER YOUR NAME com os botões SAVE & RANKING e SKIP; embaixo, 'O 100º lugar do /ranking tem 57 pontos — e 84,5% das partidas terminam sem nome'."
  - "Slide 2: '3 partidas, nenhum nome' — as partidas de sexta, 23/10: 10:35, 11.846; 10:53, 16.163; 10:58, 12.535, todas anônimas, no Tier II. Com um nick, a de 16.163 seria a 22ª do /ranking."
  - "Slide 3: passo 1, 'Espera o painel' — o painel GAME OVER com SCORE 16.163, TIME 2:45, TIER II, BOOSTS 9 e SPREAD 5. A explosão dura 2,5 segundos, e o painel abre sozinho logo depois."
  - "Slide 4: passo 2, 'Digita o seu nick' — o campo ENTER YOUR NAME com SEU NICK e o contador 8/20. Até 20 caracteres, salvo em maiúsculas."
  - "Slide 5: passo 3, 'Save & Ranking' — o botão SAVE & RANKING, ou Enter. Com SKIP ou com o nome em branco, a partida fica anônima e não aparece no /ranking."
  - "Slide 6: 'Põe o nick no game over' — até ontem, a semana 43 tinha um nick só no ranking (MARCAO, 20.301) e 2 lugares vagos no pódio. Jogar grátis em navistron.io."
---

Joga hoje e põe o seu nick no game over: são 3 passos, e o 100º lugar do ranking do Navistron tem 57 pontos.

Ontem (23/10), o jogo teve 3 partidas, e as 3 passaram dos 10 mil — 11.846, 16.163 e 12.535 —, mas nenhuma salvou o nome. Com um nick, a de 16.163 seria a 22ª do /ranking.

No game over: espera o painel abrir, digita o nick (até 20 caracteres) e toca em SAVE & RANKING — ou aperta Enter. Com SKIP ou com o nome em branco, a partida fica anônima.

Até ontem, só o MARCAO tinha partida com nick na semana 43, que fecha amanhã (25/10).

Números de navistron.io/stats e /ranking, lidos em 24/10 à 01:15. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros
