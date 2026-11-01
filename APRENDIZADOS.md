# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

- 2026-11-01 · **O reel de 30/10 fechou em 78, o maior da S44, e o de 31/10 tinha 65 com ~11 h — e, pouco mais de duas horas
  depois do reel "quem faz o próximo 10 mil?", o jogo teve um nick novo e um 10 mil.** Métricas (feed de 01/11 00:27 BRT): o reel
  do meteoro vermelho (30/10, mecânica explicada) foi de 47 com ~12 h para **78 / 86** com ~35 h (tempo médio 2,5 s), o 6º da
  série do slot das 13:00 (39 posts, mediana 14); o do próximo 10 mil (31/10, desafio) tinha **65 / 73** com ~11 h (3,0 s); o de
  29/10 parou em 18. Os posts da S44 fizeram 8, 51, 43 (a Estela das 19:00), 18, 78 e 65 (parcial): cinco de seis acima da mediana
  do slot, depois de 6, 3, 11 e 2 (21 a 24/10) — a leitura da pergunta fecha em 02/11. No jogo, o sábado 31/10 teve 2 partidas: às
  15:14, **PAÇOCA estreou com 9.510** (Tier II), o 48º piloto e o 1º nick novo desde 21/10, e assumiu o 1º lugar da semana 44; às
  15:17, uma partida sem nick fez **10.237**, a 1ª acima dos 10 mil desde 23/10. As duas vieram pouco mais de duas horas depois de
  o reel que pedia o próximo 10 mil sair (13:02) — uma coincidência a observar, não uma regra (é um caso só). 696 partidas e
  23h55min59s somadas: faltam 4 partidas para a 700ª e 4min01s para as 24 h. A HeyGen seguiu no plano free pelo 4º dia, sem story
  — **o Guilherme precisa conferir a assinatura**. A atualização do feed no Buffer seguiu adiantando ~1 h por dia (00:27 de
  01/11): a de 02/11 deve cair por volta das 23:27 de 01/11, antes da rodada. No blog, o tutorial de limitar caracteres em
  JavaScript (PR #54), com um achado: o slice(0, 20) do jogo e da API pode guardar meio emoji num nick que passe de 20 unidades (o
  maxLength do campo segura isso na página).
- 2026-10-31 · **O alcance voltou na S44 — 8, 51, 43, 18 e 47 (este com ~12 h), quatro de cinco acima da mediana do slot —
  e o jogo parou: a sexta 30/10 não teve partida, e a semana 44 ainda não teve nenhum 10 mil.** Métricas (feed de 31/10 01:27
  BRT, a atualização no meio da rodada, como previsto em 30/10): a Estela de 28/10 (ROBER de novo, 19:00) fechou em **43 / 50**
  (~54 h), a maior das seis Estelas das 19:00 (antes, 32, 12, 28, 27 e 11); o reel de 29/10 (a partida 700) fechou em **18 /
  21** (~36 h); e o de 30/10 (meteoro vermelho) tinha **47 / 50** com ~12 h, mas com 1,6 s de tempo médio, o menor da semana.
  Depois de 6, 3, 11 e 2 de alcance (21 a 24/10), a pergunta da S44 (o alcance volta com o calendário estável?) tem resposta
  parcial positiva; a leitura fecha em 02/11. A HeyGen seguiu no plano free pelo 3º dia, e o story foi pulado de novo — **o
  Guilherme precisa conferir a assinatura**. No jogo, a sexta 30/10 zerou (694 partidas, 23h51min00s somadas), e a última
  partida acima dos 10 mil foi em 23/10 (12.535, sem nick): na semana 44, 0 de 14 partidas, contra 24 de 49 na semana 43 — o
  reel do dia, no pilar desafio. **Cache do /stats: um ?v= já usado volta com a cópia antiga** — com v=0112, a página 1 da
  lista por data veio de 26/10 (680 partidas) enquanto a página 2 mostrava 694; usar um valor que nunca foi usado (v=sab3110x)
  e conferir o cabeçalho das páginas antes de contar. O ambiente perdeu a pasta de trabalho, e tudo foi refeito a partir do
  GitHub, com o índice do blog e o validador conferidos pelo hash dos blobs. No blog, high score (PR #53).
- 2026-10-30 · **A HeyGen seguiu no plano free — a Estela de sexta virou reel de dados e o story foi pulado de novo —, o reel
  de mecânica de 27/10 fechou em 51, o maior da S44, e a atualização das métricas no Buffer adianta 1 h por dia.** HeyGen: à
  01:02, `get_current_user` mostrou de novo o plano free, sem saldo e sem data de renovação; pela guarda de
  `personagens/ESTELA.md`, a Estela das 19:00 de sex 30 virou o reel de dados "meteoro vermelho aguenta mais" às 13:00
  (mecânica explicada: a cor do meteoro mostra a dificuldade; vermelho máximo a partir de 6.508 pontos no Tier II, 3.334 no
  III e 1.548 no IV; a vida do grande vai de 3 a 30) e o story foi pulado pelo 2º dia — **o Guilherme precisa conferir a
  assinatura**. Métricas (feed de 29/10 03:26 BRT): o reel de 27/10 ("9 boosts, só 556 pontos") fechou em **51 / 57** (~38 h,
  tempo médio 5,1 s), o 9º da série do slot das 13:00 (37 posts, mediana 14), com mais 10 de alcance entre ~15 e ~38 h; a
  Estela de 28/10 (ROBER de novo, 19:00) tinha **16 / 20** com ~8 h; o story de 28/10 fechou em **0 / 3** — seis dos últimos
  sete stories com 0 de alcance. **A atualização diária das métricas do feed no Buffer adianta ~1 h por dia** (`metricsUpdatedAt`
  em 26/10 06:26, 27/10 05:26, 28/10 04:26 e 29/10 03:26 BRT, ~23 h entre uma e outra): se seguir assim, a de 31/10 cai por
  volta da 01:26, no meio da rodada, e a de 01/11 antes dela — calcular a idade de cada post pelo `metricsUpdatedAt`, não pela
  hora da rodada. No jogo, a quinta 29/10 teve 6 partidas, todas anônimas, 5 delas entre 09:22 e 10:39, uma no Tier IV (5.983
  em 4:03); 694 partidas (faltam 6 para a 700ª) e 23h51min00s somadas (faltam 9 min para as 24 h). No blog, o horário de pico
  (PR #52), com as 694 partidas lidas uma a uma e a conta fechada contra o /stats: 41,1% entre 14h e 16h59, a quinta com
  30,1% (puxada por 09/07, 16/07 e 03/09) e outubro com a manhã de volta à frente da tarde (77 a 68). Nesta rodada o WebFetch
  não veio como ferramenta direta; o agente de leitura da web (web-fetch) leu o /stats e as 14 páginas sem erro.
- 2026-10-29 · **A HeyGen amanheceu no plano free no dia da renovação — sem créditos, o story do dia foi pulado — e o reel
  de mecânica de 27/10 segurou o olho: 41 de alcance com ~15 h e 5,8 s de tempo médio em 14 s.** HeyGen: às 01:16, 01:21 e
  01:31, `get_current_user` mostrou a assinatura no plano **free**, sem saldo e sem data de renovação, no dia em que o
  Creator (600) deveria renovar (29/10, 00:57 UTC) — nenhum vídeo gerado, story pulado e relatado (a guarda de
  `personagens/ESTELA.md`); **o Guilherme precisa conferir a assinatura**. Enquanto o plano seguir free, os stories ficam
  pulados e o reel da Estela de sex 30 (19:00) vira reel de dados. O fim de "Custos e limites" em `ESTELA.md` ainda conta
  com a renovação de 29/10: corrigir na próxima rodada que gravar o arquivo (88 KB; não foi reescrito hoje só por isso).
  Métricas (feed de 28/10 04:26 BRT): o reel de 27/10 ("9 boosts, só 556 pontos", mecânica explicada) tinha **41 / 48** com
  ~15,4 h e **5,82 s de tempo médio**, bem acima dos 3,3 s de média dos reels de dados nas 4 semanas do plano e dos 3,9 s do
  reel de 25/10 (o de 144) — o 2º reel forte em três dias, depois de 21 a 24/10 no chão; o ranking de 26/10 fechou em
  **8 / 9** (~39 h, 2,9 s), e a série do slot foi a 36 posts, mediana 13,5. Os stories seguem no zero: o de 27/10 fechou em
  **0 / 6** (~19 h) e o de 28/10 tinha 0 / 1 com ~7,8 h — cinco dos últimos seis com 0 de alcance. No jogo, a quarta 28/10
  teve 3 partidas: ROBER de novo, **8.389** às 14:47 (2:24, Tier II), no 2º dia seguido e no 5º dia com partida (empata
  com o VASCO), e duas anônimas no fim da tarde; 688 partidas (faltam 12 para a 700ª) e 23h34min13s somadas (faltam
  25min47s para as 24 h). As sete partidas redondas, da 1ª à 600ª, saíram todas sem nick — o reel do dia, com o pedido
  "a 700ª pode ter o seu nick". No blog, cores HSL (PR #51), com um achado para o Guilherme: dois artigos de 2025 em
  `blogArticles.js` (o do motor do jogo e o de performance) dizem que as estrelas do Tier VII andam 4,15× mais rápido, mas o
  código dá 1 + 6 × 0,45 = 3,7× (o Tier I é o powerTier 0); e o do motor diz que o fundo escurece a cada tier, quando ele vai
  do azul-escuro rgb(0, 1, 14) ao vermelho-escuro rgb(84, 1, 2) — a rotina não edita esse arquivo.

Anteriores em [`APRENDIZADOS-2026-10-24-a-31.md`](APRENDIZADOS-2026-10-24-a-31.md) (24 a 31/10),
[`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md) (01 a 23/10),
[`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 30/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
