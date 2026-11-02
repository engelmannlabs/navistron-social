# Arquivo — aprendizados de 24 a 31/10/2026

Entradas que saíram de [`APRENDIZADOS.md`](APRENDIZADOS.md), que guarda só as 4 mais recentes; a mais recente primeiro.
Anteriores (01 a 23/10) em [`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md). Arquivo aberto em 28/10/2026 para que a rodada
diária não reescreva o arquivo de outubro inteiro (~38 KB) a cada entrada arquivada.

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
- 2026-10-26 · **Leitura das 4 semanas do plano de testes (29/09 a 25/10): nenhum formato mexeu nas estreias — e, desde 21/10, o
  alcance caiu em todos os formatos ao mesmo tempo.** Feed, posts com ≥ 40 h (métrica de 25/10 07:26 BRT): os 14 reels de dados
  fizeram mediana **13,5** de alcance (6 a 122; os três maiores do período — 122, 106 e 65 — são deles), os 10 reels da Estela,
  **21** (3 a 71; às 13:00, 14,5 em 6 vídeos; às 19:00, 27,5 em 4), e os 3 carrosséis, **1** (3, 1 e 1; o de 24/10 tinha 2 com
  ~18 h). O tempo médio assistido foi de 5,6 s nos reels dela (de 17 a 33 s) e 3,3 s nos de dados (14 s): a mesma fração do vídeo,
  ~1/4. O 2º post do dia (S42) somou pouco e não dividiu; o Buffer só traz follows nos carrosséis (0 nos quatro). Stories: mediana
  10 (S40), 6 (S41), 25 (S42) e 2,5 (S43). No jogo, as duas métricas que importam: partidas por semana 18, 47, 38 e 49 (59, 17 e 20
  nas S37–S39), 72 a 91% anônimas, e nicks novos 0, 1, 1 e 1 (KAL-EL, RASEC e MARCAO, contra 7 nas três semanas anteriores) —
  nenhuma semana de teste mudou o ritmo de estreias. **Desde 21/10, tudo caiu junto**: no feed, 6, 3, 11 (~36 h) e 2 (~18 h), todos
  abaixo da mediana do slot (14); nos stories, 5 e depois quatro zeros seguidos (22 a 25/10; antes, zero era caso isolado: 01, 07 e
  10/10) — com reel de dados, Estela e carrossel, 13:00 e 19:00, Friendly e Excited: não é formato. **Pedido ao Guilherme: conferir
  o status da conta no app do Instagram** (a rotina não enxerga isso). Decisão para a S44 (26/10 a 01/11): calendário estável —
  reels de dados às 13:00, a Estela às 19:00 (qua 28 e sex 30) como o único post do dia, sem carrossel, story às 16:00 — para ler
  se o alcance volta. No jogo, a semana 43 fechou com 49 partidas (8 com nick, todas do MARCAO, 20.301), 24 acima dos 10 mil (19 no
  Tier II com 8 ou 9 boosts) e 45 antes do meio-dia; o domingo 25/10 teve uma partida, às 20:07. Produção: o capacete vazio, pedido
  com "its dark visor empty" e "no faces, no eyes, no creatures", saiu certo na 1ª tentativa; no vídeo (Avatar III, 14,2 s, 2
  créditos), **com os braços fora do quadro no look, ela gesticulou** quatro vezes (mãos à altura do peito, naturais) — os looks de
  braços para baixo de 20, 22 e 24/10 não tiveram gesto. HeyGen: 56 → 53. No blog, o ranking da semana 43 (PR #48).
- 2026-10-25 · **O sábado zerou, e a semana 43 jogou de manhã: 45 das 48 partidas saíram antes do meio-dia — e "like a ghost" num
  prompt de look virou um fantasminha de desenho.** No jogo, o sábado 24/10 não teve nenhuma partida; a semana 43 chega ao domingo com
  48 partidas (8 com nick, todas do MARCAO), e 45 delas saíram entre 07:46 e 11:20 (só 3 à tarde: 19/10 às 16:43 e 22/10 às 13:46 e
  16:42). A faixa de 14h a 17h do PLAYBOOK, que decidiu o story às 16:00, não vale há duas semanas (na S42, 20 das 38 antes das 13h):
  fica para a leitura de 26/10. Métricas: a Estela das 13:00 de 22/10 fechou em **3 / 5** (~43 h), o menor vídeo dela no slot (29, 70,
  14, 4 e 14 nas S40–S41); a das 19:00 de 23/10 tinha **10 / 13** com ~13 h; os stories de 21 a 24/10 fizeram 5, 0, 0 e 0 de alcance
  (com 5, 3, 5 e 2 views) — o de hoje testa a duração curta (14,6 s), como os de 11 s que fizeram 28 e 27 em 18 e 20/10. Produção: no
  look do story, "half transparent, like a ghost" saiu como um fantasminha ciano com olhos, parecido com personagem de terceiros
  (vetado); "faint and see-through" com "no faces, no eyes, no creatures" resolveu na 2ª tentativa — **comparação no prompt vira o
  objeto da comparação**. A Friendly a 1,15x leu 44 palavras em 14,6 s (~0,33 s por palavra), vídeo de 2 créditos. HeyGen: 60 → 56; os
  3 stories de 26 a 28/10 pedem ~9–12, contra 26 acima da guarda. No blog, o tutorial do sitemap achou um ponto para o Guilherme: as
  páginas fixas e as de pilotos levam a hora do build como lastmod, porque o sitemap.js usa new Date() e é gerado no build.
- 2026-10-24 · **Três stories seguidos abaixo de 10 de alcance — e a sexta teve 3 partidas acima dos 10 mil, todas sem
  nick.** Métricas: o story de 22/10 fechou em **0 de alcance / 3 views** (~24 h) e o de 23/10 tinha 0 / 0 com ~6,5 h; com
  o de 21/10 (5 / 5), são três stories seguidos abaixo de 10, depois de 25 a 32 nos de 14 a 20/10. O motor não explica
  sozinho (o 1º story no Avatar III, de 20/10, fez 27), nem o rótulo de IA (está em todos desde 29/09); no feed, a Estela
  das 13:00 de 22/10 tinha só **1 / 4** com ~20 h e o reel de 21/10 fechou em **6 / 9** (~44 h). Se a leitura de 26/10
  confirmar a queda nos dois formatos, vale o Guilherme conferir o status da conta no app do Instagram — a rotina não
  enxerga isso. No jogo, a sexta 23/10 teve 3 partidas, das 10:35 às 10:58, todas anônimas e acima dos 10 mil (a de
  16.163 seria a 22ª do /ranking): 574 das 679 partidas (84,5%) terminaram sem nick, e o 100º lugar do /ranking tem 57
  pontos — daí o carrossel do sábado, o 1º post do feed com o passo a passo para salvar o nick. Achado para o Guilherme: o
  /ranking diz "100 pilotos registrados", mas conta as linhas do top 100 de partidas (são 105 partidas com nick de 47
  pilotos). Produção: a **Excited a 1,15x num story no Avatar III** leu 56 palavras em 22,0 s (~0,39 s por palavra, contra
  ~0,29–0,32 da Friendly) e custou 3 — ~1 crédito a mais que a Friendly no mesmo roteiro; com o look de braços para
  baixo, nenhuma mão. O render do Actions voltou a ~1,5 min. HeyGen: 64 → 60; os 4 stories de 25 a 28/10 pedem ~12–16,
  contra 30 acima da guarda. No blog, o power-up entrou como conceito (Pac-Man, Gradius, Super Mario Bros.), com os boosts
  no fim das 679 partidas: o pico é 9 (137), o leque cheio no Tier II, a um boost da virada.
