# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

- 2026-10-03 · **O Avatar V custa ~2,5× o Avatar IV, e o 1º par da pergunta S40 saiu a favor da Estela.** Medido com um
  vídeo só no dia, o story de 21,8 s no Avatar V custou **18 créditos** (519 → 501), ~1 a cada 1,2 s, contra ~1 a cada 3 s
  no Avatar IV. Nos dois stories em que foi usado ele passou no QA, mas um story diário nele custaria ~17 créditos, e só os
  stories somariam ~500 por mês: **o padrão segue Avatar IV** e o Avatar V fica para um vídeo pontual. Na pergunta da
  semana, o reel de dados de 30/09 fechou em **6 de alcance / 7 views** com ~43 h, contra **29 / 42** da estreia da Estela
  na mesma idade e no mesmo slot — ~5×, mas um par só, numa série que vai de 2 a 135 (mediana 14 com 13 posts); o 2º par
  (Estela 02/10 × dados 03/10) fecha em 05 e 06/10. Fora da série, o reel que o Guilherme publicou à mão em 30/09 chegou a
  **80 de alcance / 96 views** (~36 h), o maior da conta desde 22/09. No jogo, 4 partidas anônimas em 02/10 (19:02–20:47)
  e **nenhum nick novo nos cinco dias completos de pedido** (28/09 a 02/10, 44 pilotos); o total chegou a 18h16 de jogo em
  545 partidas, a 1h44 das 20 horas — o tema do reel do dia. **Mais tarde, o story virou teste de formato**: a pedido do
  Guilherme, saiu uma versão lúdica com 6 cortes pela casa da Estela e trilha chiptune baixa, feita no Video Agent da
  HeyGen (14 créditos por 19,5 s) com um cutaway do heygen-video-1; o Seedance 2.0 exige o plano Pro.
- 2026-10-02 · **"Quinto lugar do ranking" depende de qual ranking — e a frase quase foi ao ar.** O Navistron tem três
  listas que parecem a mesma: o `/ranking` (partidas salvas com nick, uma linha por partida), o top 10 de pilotos em `/stats`
  (a melhor partida de cada nick) e a lista de partidas por pontos (inclui as anônimas). A melhor partida anônima, 18.196
  (11/09), ficaria em 5º no top 10 de pilotos, em 11º no `/ranking` e é a 11ª da lista geral. O 1º roteiro do reel dizia
  "mais do que o quinto lugar do ranking" e o vídeo foi refeito antes do push (custo: ~9 créditos). **Regra nova
  (PLAYBOOK, seção 4): posição sempre com a lista nomeada.** O dado em si virou o reel e o artigo do dia: 30 das 50 melhores
  partidas da história não têm nick, e 453 das 541 no total. Produção: a legenda dos reels passou a sair em algarismos
  (2ª renderização com `legenda-digitos.srt`) e o Avatar V estreou num story, sem artefato no QA mas com custo estimado em
  mais que o dobro do Avatar IV. Do lado do jogo, nenhuma partida desde 01/10 às 08h11.
- 2026-10-01 · **A Estela estreou no dobro da mediana — e o post que mais alcançou na semana foi feito à mão pelo Guilherme.**
  A estreia (29/09, reel de 28,5 s com avatar) fechou em **29 de alcance e 42 views** com ~44 h, 1 like e 1 compartilhamento:
  o dobro da mediana dos 11 posts anteriores do slot das 13:00 (14) e o melhor post automático desde 25/09. No mesmo
  período, um reel que o próprio Guilherme publicou pelo app às 19:48 de 30/09 fez **59 de alcance** em ~13 h, contra 4 do
  reel de dados daquele dia com ~20 h. São amostras de um, mas as duas apontam na direção da proposta de 17/09 (sinal
  humano na conta): hipótese para a leitura de segunda (05/10), não regra. Os stories da Estela ficaram em 12 (29/09, com a
  novidade da estreia) e 10 (30/09; o 7 lido em 01/10 era a leitura de ~20 h) de alcance. Operação: o conector do Buffer caiu na rodada da 01:00 (pedia OAuth de novo);
  a regra nova da ROTINA — arte pronta sem agendar e nenhum vídeo da Estela até ele voltar — evitou gasto à toa, e com a
  reautorização o carrossel foi agendado para as 15:00 e o story para as 16:00.
- 2026-09-30 · **A seca acabou com recorde, mas o pedido novo ainda não trouxe nick novo.** Depois de 100 h 25 min sem
  nenhuma partida (25/09 11h42 → 29/09 16h07, mais que as 94 h de 18 → 22/09), o **GUI** — piloto que já estava no
  ranking — jogou cinco partidas em 29/09 e fez **29.901**, o novo recorde geral: o 25.971 do VASCO durava **85 dias**
  (06/07). A primeira partida saiu 31 min depois do 1º story da Estela, que perguntava "quem quebra esse silêncio hoje?"
  — coincidência de horário anotada, sem como provar causa. Na métrica do teste, os dois primeiros dias do pedido
  "joga e põe o nick no game over" (28 e 29/09) deram **zero nick novo** (44 pilotos antes e depois). No alcance, o
  ranking de 28/09 fechou em **3**: no slot das 13:00, os dois rankings de segunda (21 e 28/09) são os dois piores da
  série (2 e 3) — pouco para virar regra, mas o ranking narrado pela Estela em 05/10 é o teste natural. Produção: a
  duração de um vídeo dela depende do texto, não só da contagem de palavras (58 palavras com enumeração → 27,6 s; 50
  diretas → 19,1 s) — conferir `duration` antes do push.

Anteriores em [`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 29/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
