# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

- 2026-11-07 · **Três dias de teste, uma partida: o alcance do slot das 13:00 voltou (82 no reel de 05/11, o 9º da série), mas não
  virou jogo — a sexta 06/11 não teve partida.** Métricas (feed de 06/11 18:28 BRT, ~1 h mais cedo que a anterior, como previsto):
  o reel "até um robô jogaria melhor" (05/11, 13:00) fechou em **82 / 90** (~29 h; 3,20 s, 40% dos 8 s); o de 06/11 ("2 minutos
  encarando a IA?") tinha **42 / 51** com ~5 h (3,79 s, 47%); os dois publicados na hora fecharam em **6** (04/11, 23:17) e **11**
  (05/11, 09:25). Nenhum dos quatro teve like, comentário, save ou compartilhamento: a pergunta do fim não puxou comentário. No
  jogo: 04/11, 0 partidas; 05/11, 1 (GUI, piloto antigo, a 700ª); 06/11, 0 — abaixo da base de 1 a 2 por dia, e nenhum piloto novo
  desde 31/10. O tempo médio dos reels de 8 s do teste fica entre 40 e 50% da duração (fora o das 23:17, com 6 de alcance): metade
  do vídeo, e o CTA só no fim. A leitura da fase 1 sai em 12/11, como previsto, mas o sinal até aqui é que trocar só o texto não
  leva ninguém ao jogo; a fase 2 (montagem com gameplay real) depende da gravação em `footage/` — **o Guilherme precisa subir o
  arquivo**. Hoje, o 4º post do teste ("pediu um texto para a IA?", para quem não programa: o 1º boost aparece sempre aos 8 s de
  jogo). Operação: o push_files decodifica uma 2ª vez as sequências de escape de barra invertida + u (o escape da estrela no
  fillText virou o caractere ★); para o JavaScript é o mesmo texto, mas o blob muda — conferir o SHA sempre e não usar esses
  escapes nos textos dos logs. No blog, o que é hitbox (PR #61), com um achado do código: a hitbox de 18 px da nave é menor que o
  desenho no bico e nas asas, mas maior nas laterais da frente.
- 2026-11-06 · **O 1º dia inteiro do teste "Enquanto a IA pensa" não mexeu no jogo: a quinta 05/11 teve 1 partida, de um piloto
  que já estava no ranking — mas foi a 700ª, a 1ª partida redonda com nick, e fechou as 24 h de jogo somadas.** A partida: 12:37,
  GUI, 11.429 em 2:32, Tier II, entre o convite das 09:25 e o reel das 13:00; GUI tem a 2ª melhor marca do jogo (29.901, em 29/09)
  e passou a liderar a semana 45. Nenhum piloto novo: 48, como desde 31/10. Métricas (feed de 05/11 19:28 BRT, ~1 h mais cedo que
  a anterior, como previsto): o reel agendado das 13:00 de 05/11 ("até um robô jogaria melhor") tinha **60 / 67** com ~6 h (3,36
  s, 42% dos 8 s); os dois publicados na hora ficaram bem abaixo — o das 23:17 de 04/11 com **6 / 13** (~20 h; 8,49 s, 106%: quem
  viu, viu de novo) e o convite das 09:25 de 05/11 com **10 / 13** (~10 h; 4,04 s, 50,5%). Nenhum dos três teve like, comentário,
  save ou compartilhamento. Um sinal a observar, não uma regra (três posts, idades diferentes): os dois que saíram na hora, fora
  do slot e como 2º post do dia, quase não foram distribuídos. O reel de 14 s de 04/11 fechou em **11 / 12** (~30 h; 1,33 s, 9,5%
  dos 14 s), e a S45 fechou o slot com 91, 99 e 11 (a série tem 44 posts, mediana 15). O reel de hoje usa a média como número ("2
  minutos encarando a IA?": a partida média, 2m 4s, cabe na espera), para quem programa. A gravação de gameplay ainda não está em
  `footage/`, então a fase 2 (montagem) espera — **o Guilherme precisa subir o arquivo**. No blog, as 700 partidas (PR #60), com
  uma correção pega na revisão: a partida que fechou as 20 h (09/10, 16:28) não era a 593ª — 593 era o total do fim daquele dia;
  número de partida, só pela lista por data, nunca pelo total do dia.
- 2026-11-05 · **O teste "Enquanto a IA pensa" começou (pedido do Guilherme em 04/11, às 23:00) com uma base fraca: a quarta 04/11
  não teve partida, e o reel de 14 s de 04/11 fez 8 de alcance com ~7 h, o menor parcial da S45.** A decisão de 04/11: a Estela e
  a HeyGen pausadas; um público novo (quem espera a IA, programando ou não) e o objetivo de jogadores, não de alcance; fase 1
  trocando só os textos no reel de 8 s de previsibilidade (o do dedo, de 03/11, que ele elogiou pela sensação de padrão), fase 2
  os tipos de reel; tom apimentado, sem comprometer a página (PLAYBOOK 3c). A S45 ficou interrompida com três reels: o de 8 s de
  03/11 fechou em **99 / 125** (~31 h) com **4,11 s** de tempo médio (51,4% dos 8 s), o 6º da série do slot das 13:00 (43 posts,
  mediana 15); os de 14 s fizeram 91 (02/11, 2,46 s, 17,6%) e 8 com ~7 h (04/11, 1,43 s, 10,2%). O curto segurou quase 3 vezes a
  fração da duração, mas nenhum dos três mexeu no jogo: 1, 1 e 0 partidas nos dias dos posts — é isso que o teste tenta virar. O
  1º post do teste ("a IA programa, você espera", para quem programa) saiu na hora, às 23:17 de 04/11; o 2º ("até um robô jogaria
  melhor", para quem não programa, com a provocação do próprio jogo: "Tá achando fácil?" aos 10 s e, depois, uma frase a cada 10
  s, sorteada entre 102 frases) sai às 13:00 de hoje. A medida que decide: partidas e pilotos novos no dia do post e no seguinte,
  contra 1 a 2 partidas por dia. No blog, um artigo ligado ao teste, trocar de aba pausa o jogo (PR #58), com um cuidado novo: o
  navegador pode descartar uma aba escondida para poupar recursos (Chrome, Page Lifecycle), e aí a partida pausada se perde. Às
  09:15, o Guilherme pediu um post "mais na linha de 'enquanto vc espera sua IA, vem jogar uma partidinha com a gente'" — "a ideia
  é as pessoas conhecerem o jogo" —, e o convite que mostra como se joga (guia a nave, pega os boosts, sobe de tier) saiu às 09:25
  (6aec75cf…), o 2º do dia. O convite passa a ser um ângulo da fase 1, ao lado da provocação; levar a nota para a seção 3c do
  PLAYBOOK na próxima vez que o arquivo for gravado. Às ~09:40, ele pediu o português da norma culta ("guie a nave", não "guia a
  nave") e a revisão de todo texto antes de postar (regra nova em "Limites que não se negociam", na ROTINA). O reel das 13:00 foi
  corrigido antes de sair (PROVE QUE NÃO., jogue enquanto a IA pensa; na legenda, jogue, prove, troque, espera por você,
  responda), com o render c0819c07 e o post do Buffer editado; o das 09:25 já tinha saído com guia, pega, sobe e vem. Na rodada de
  06/11, a linha de 05/11 13:00 de `log/experiments.md` recebeu o CTA e o pedido corrigidos. Às ~13:30, ele mandou uma gravação
  de tela da partida (51 s, Tier I, Chrome no celular) e pediu montagens com cortes nos reels e mais combinações de reels: saíram
  três protótipos (as provocações, de 1 a 5 tiros, o POV com a imagem congelando), e a fase 2 da seção 3c foi adiantada — reels de
  montagem com gameplay real (motor em `templates/montage.js`, quadros extraídos com o ffmpeg no render, guia, índice da gravação
  e cardápio de combinações em `MONTAGEM.md`), valendo assim que o vídeo estiver em `footage/` (só ele consegue subir o arquivo; o
  conector não grava binário). Nota do convite e exemplos do PLAYBOOK no português da norma culta: levados à seção 3c em 05/11.
- 2026-11-04 · **1ª leitura da S45: o reel de 8 s segurou quase metade da duração (3,77 s de tempo médio, 47% dos 8 s), contra
  17,6% do ranking de 14 s — mas é um par só, e o jogo não mexeu: 1 partida por dia.** Métricas (feed de 03/11 21:27 BRT, ~1 h
  mais cedo que a anterior, como previsto): o ranking de 02/11 (14 s) fechou em **91 / 98** (~32 h, 2,47 s de tempo médio), o 7º
  da série do slot das 13:00 (42 posts, mediana 15); o reel de 8 s de 03/11 (no celular, a nave voa acima do dedo) tinha **99 /
  122** com ~8 h — mais que o ranking com ~9 h (79). Nos de 14 s da S44, o tempo médio ficou entre 2,1 e 5,1 s (15 a 36%). Faltam
  o alcance com ≥ 40 h e as partidas do dia seguinte; a leitura da pergunta fecha em 09/11. No jogo, a segunda 02/11 e a terça
  03/11 tiveram 1 partida cada: a de terça, às 12:46, foi de ROBER (7.685, Tier II), 17 minutos antes de o reel de 8 s sair — o 1º
  nick da semana 45 e o reel de hoje (desafio: com 7.686, um nick passa a liderar). 699 partidas: a próxima é a 700ª, e faltam 68
  s para as 24 h de jogo somadas. Telemetria: com a regra de 03/11, três leituras com ?v= diferentes, sem diferença entre elas. A
  HeyGen seguiu no plano free pelo 7º dia (**o Guilherme precisa conferir a assinatura**). No blog, jogos que gastam pouca bateria
  (PR #57), com um número do código: o quadro fixo de 540×720 pinta 388.800 pixels, 6,7 vezes menos que uma tela de 1080×2400.

Anteriores em [`APRENDIZADOS-2026-11.md`](APRENDIZADOS-2026-11.md) (01 a 03/11),
[`APRENDIZADOS-2026-10-24-a-31.md`](APRENDIZADOS-2026-10-24-a-31.md) (24 a 31/10),
[`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md) (01 a 23/10),
[`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 30/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
