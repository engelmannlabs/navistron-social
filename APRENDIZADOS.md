# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

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
- 2026-10-28 · **O pico de 144 do reel de 25/10 chegou todo no 1º dia e não se repetiu — e "a small green spaceship" num prompt de
  look virou a nave de uma série de terceiros.** Métricas: o reel de 25/10 fechou em **144 / 168** (~40 h, métrica de 27/10 05:26
  BRT), os mesmos números da leitura de ~17 h; o seguinte, o ranking de 26/10, tinha **6 / 7** com ~16 h, no nível dos reels de 21
  a 24/10 (6, 3, 11 e 2). Os stories seguem no chão: o de 26/10 fechou em **0 / 4** (~24 h), o 4º com 0 de alcance nos últimos
  cinco (só o de 25/10 fez 6), e o de 27/10 tinha 0 / 2 com ~6,6 h. Um reel forte isolado não responde à pergunta da S44 (o
  alcance volta com o calendário estável?); a semana fecha em 01/11. No jogo, a terça 27/10 teve 2 partidas: às 14:27, uma anônima
  chegou ao Tier III com 12 boosts e fez só 2.428 pontos em 3:08 (o boost não dá ponto, o reel de 27/10), e às 15:38 ROBER fez
  6.573, a 1ª partida com nick depois de 10 seguidas sem nick, no 4º dia com partida desde 24/09 (entre os pilotos com 4 partidas
  ou mais, só o VASCO jogou em mais dias, 5) — o reel do dia, no pilar hall da fama, com o nick sem artigo e sem pronome na fala.
  O tempo total chegou a 23h28min53s, a 31min07s das 24 h. Produção: no look do reel, "a small green spaceship" saiu como uma nave
  de desenho com faixa vermelha, cúpula, janelas redondas e emblema na cauda, parecida com a de uma série de terceiros (vetada); a
  v2, descrita pela forma ("a tiny sleek green arrow-shaped spaceship, simple smooth geometric shape with no windows, no stripes
  and no emblems"), saiu limpa — **objeto genérico pode sair com cara de marca: descrever a forma, não a categoria**, como o
  fantasminha de 25/10. Com "centered in the frame", ela ficou no centro e mais perto, e as mãos entraram no vídeo, juntas à
  frente do corpo, naturais. No código, o jogo não tem pausa, mas congela sozinho quando a aba sai de foco (os navegadores pausam
  o requestAnimationFrame em segundo plano, e o passo do jogo é limitado a 0,05 s): o story do dia. Avatar III: 17,0 s + 26,7 s =
  6 créditos (2 e 4), ~1 a cada ~8,5 s, arredondado para cima. HeyGen: 50 → 41, e os 600 do plano renovam às 21:57 de 28/10. O
  Actions renderizou tudo de primeira (de 1min0 a 1min59). No blog, jogos sem som (PR #50): o jogo não toca áudio nenhum,
  conferido no repositório.
- 2026-10-27 · **O reel do relógio das 24 horas chegou a 144 de alcance em ~17 h, o maior de um post da rotina — e o jogo não
  acompanhou: a segunda teve 3 partidas, e uma delas pegou 9 boosts e fez 556 pontos.** O reel de dados de 25/10 ("faltam 40 min
  para 24h de jogo", marco) tinha **144 de alcance / 168 views** com ~17,4 h (métrica de 26/10 06:26 BRT), acima do maior valor da
  série do slot (135, em 16/09), depois de uma semana em que o feed fez 6, 3, 11 e 2 (21 a 24/10): a conta voltou a ser distribuída
  num reel, então a queda não era um bloqueio do perfil inteiro (a conferência pedida ao Guilherme em 26/10 perde a urgência). Os
  stories seguem baixos: o de 25/10 fechou em **6 / 8** (~24 h), depois de três zeros (22 a 24/10), e o de 26/10 tinha 0 / 0 com
  ~8,5 h; o carrossel de 24/10 fechou em **2** (~41 h), e os quatro do plano ficaram em 3, 1, 1 e 2. O alcance não virou jogo: a
  segunda 26/10 teve 3 partidas, todas anônimas, somando 146 s, e o relógio ficou a 36min37s das 24 h. Uma delas, às 11:19, pegou 9
  boosts, com o leque cheio, e fez **556 pontos** em 2min10 — no código, o boost não soma ponto (só o leque e o tier), e o MARCAO fez
  20.301 com os mesmos 9: o reel do dia. Pelos filtros de tier do /stats, as partidas que terminaram no Tier II fizeram 57,6 pontos
  por segundo, e as do Tier IV, 33,5 (37 das 44 acabaram logo depois do 15º boost) — o artigo do dia no blog. Produção: **o Actions
  voltou a travar com os arquivos da HeyGen** — a folha do look falhou com exit 1 (run #146) e o story estourou os 15 min (run
  #148), e os dois saíram no 2º push, em ~1,5 min; o reel de dados, sem arquivo externo, saiu de primeira. O look "a coroa do
  recorde" saiu certo na 1ª tentativa, e o story (Avatar III, 50 palavras em 16,2 s) não teve mão. HeyGen: 53 → 50.

Anteriores em [`APRENDIZADOS-2026-10-24-a-31.md`](APRENDIZADOS-2026-10-24-a-31.md) (24 a 31/10),
[`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md) (01 a 23/10),
[`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 30/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
