# Registro de experimentos — @navistron

Uma linha por post. Métricas preenchidas ≥ 48 h após a publicação (Buffer `get_post` com `includeMetrics`).
`eng%` = engagementRate do Buffer. Para reels, anotar também views e tempo médio assistido na coluna "resultado".
Coluna "resultado" é a leitura curta: o que aprendemos.

**Atenção (descoberto em 27/09):** o Buffer recalcula as métricas **uma vez por dia** — em 26/09 e 25/09 o carimbo
`metricsUpdatedAt` dos dois posts era exatamente o mesmo (26/09 16:34Z). Como a rodada roda à 01:00, o post do dia
anterior sempre aparece com o valor de ~30 minutos de vida. **Nunca preencher a linha do post de ontem; preencher a
do post de anteontem.**

| data | slug | formato | pilar | gancho | horário (BRT) | buffer_id | alcance | likes | coment. | saves | eng% | resultado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 | 2026-09-22-41-tiros-num-meteoro | reel 14,0 s | mecânica explicada (vida do meteoro × score) | "Um meteoro morre com 3 tiros. Ou com 41." → contador até 41 → "22 tiros aos 10 mil · 12 aos 5 mil" → "Quantos tiros você aguenta?" | **13:00** (ter) | 6ab1fee56ed20e9354f6ee19 | **111** | 0 | 0 | 0 | 0 | 2º dia do pedido na primeira linha (palpite). Post tirado do código, com as contas rodadas em python antes de virar arte. **Final (~27 h): 137 views, 111 alcance** — **2º melhor da série** e abertura mais rápida já vista (104 com 4h30). **Mecânica pura, sem telemetria nova: conteúdo didático distribui tão bem quanto evento** |
| 2026-09-23 | 2026-09-23-94-horas-e-a-denise | reel 14,0 s | hall da fama / shout-out (nick novo) | "94 horas sem partida. Aí veio a DENISE." → contador até 6.768 → "3 partidas ontem · 511 no total" → "E você, joga hoje?" | **13:00** (qua) | 6ab3501eb777b65977eff22b | 4 | 0 | 0 | 0 | 0 | Primeiro post sobre evento real em 5 dias. 3º dia do pedido na primeira linha (sim/não). **Lido com ~26 h: 6 views, 4 alcance** — pode ter crescido depois; foi o último valor conferido. E foi a véspera do dia de 10 partidas no jogo |
| 2026-09-24 | 2026-09-24-faltaram-215-pontos | reel 14,0 s | desafio (barreira dos 20 mil) | "O AMM2026 parou a 215 pontos dos 20 mil." → contador até 19.785 → "17.351 · sem nick · seria o 4º de sempre" → "Quem chega aos 20 mil?" | **13:00** (qui) | 6ab4a188521044626fe41b75 | 10 | 0 | 0 | 0 | 0 | 4º dia do pedido na primeira linha (aposta sim/não). **Lido em 26/09 (~25 h): 11 views, 10 alcance.** O **maior evento da série no conteúdo** (o 2º geral bateu o próprio recorde) teve um dos piores alcances |
| 2026-09-25 | 2026-09-25-de-zero-a-dez | reel 14,0 s | telemetria / marco (a virada da semana) | "Segunda: zero partidas. Ontem: dez." → contador até 10 → "43 pilotos · ROBER e YAGO entraram ontem" → "A semana virou. Vem junto?" | **13:00** (sex) | 6ab5f37e607bee5b03261ea4 | **56** | 0 | 0 | 0 | 0 | 5º dia do pedido na primeira linha, e o primeiro que pede **marcação** em vez de comentário. **Final (~24 h): 65 views, 56 alcance — 3º melhor da série.** Em 26/09 esta linha dizia "1", lido com 1h30 de vida: foi essa leitura parcial que sustentou a tese bimodal, corrigida hoje |
| 2026-09-26 | 2026-09-26-voce-nao-atira | reel 14,0 s | mecânica explicada (tiro automático) | "Aqui você não atira. Só desvia." → contador até 400 ("Tier II · cadência da nave") → "5 mísseis teleguiados por salva · automáticos" → "O jogo é sobre posição." | **13:00** (sáb) | 6ab744fd80521ded5520b7bb | | | | | | 6º dia do pedido na primeira linha, agora **pergunta de opinião** — a única das seis que não exige ter jogado. Aposta no achado de 24/09: mecânica pura distribui bem. Publicado 16:02Z; o único snapshot disponível é de 16:34Z (32 min de vida, 0/0) e por isso **não vale nada**. Preencher em 28/09 |
| 2026-09-27 | 2026-09-27-ninguem-passou-de-5-minutos | reel 14,0 s | desafio (eixo novo: **duração**, não score) | "Ninguém passou de 5 minutos." → relógio até **4:57** ("a partida mais longa", "anônimo · 15.467 pontos · 09/09", "a 2ª mais longa: 4min24") → contador **23** ("de 528 partidas, só", "passaram dos 4 minutos", "4,4% do total", "média geral: 2min01") → "VOCÊ AGUENTA 5 MINUTOS?" | **13:00** (dom, agendado — 10º post diurno) | 6ab8984f9f89edbefe88acfb | | | | | | 7º dia do pedido na primeira linha, agora o de **menor esforço possível**: comentar um único emoji (⏱). Primeiro post da conta que usa duração — todos os desafios anteriores eram de pontuação ou tier. O contador virou relógio (mm:ss). Barreira que ninguém cruzou em 528 partidas e que **não exige fazer ponto**, só sobreviver. Preencher em 29/09 |

Posts de 18 a 21/09/2026 em [`experiments-2026-09-18-a-21.md`](experiments-2026-09-18-a-21.md); de 14 a 17/09 em [`experiments-2026-09-14-a-17.md`](experiments-2026-09-14-a-17.md); até 13/09 em [`experiments-ate-2026-09-13.md`](experiments-ate-2026-09-13.md).

### Série de alcance do slot das 13:00 (todos os posts, mesmo horário)

| data | alcance | pilar |
|---|---|---|
| 16/09 (qua) | **135** | desafio + telemetria |
| 19/09 (sáb) | 28 | marco |
| 20/09 (dom) | 35 | desafio |
| 21/09 (seg) | **2** | ranking da semana |
| 22/09 (ter) | **111** | mecânica |
| 23/09 (qua) | **4** | shout-out |
| 24/09 (qui) | 10 | desafio |
| 25/09 (sex) | **56** | telemetria |

Ordenada: 2, 4, 10, 28, 35, 56, 111, 135. **Mediana 31,5**, extremos 2 e 135 (67× entre eles).
**Correção de 27/09:** a tabela publicada ontem trazia 25/09 como "1" — valor parcial de 1h30 — e a partir disso
concluímos que a distribuição era *bimodal, sem meio-termo*. Com o número real (56), **o meio-termo existe**: 28, 35 e 56.
A leitura correta é mais simples e menos vistosa: **variância altíssima, sem nenhuma variável sob controle que explique**.
A decisão prática continua a mesma — não usar alcance como nota de qualidade do post. Atenção também a que vários
desses valores foram lidos com 24–29 h e podem ter crescido depois; só os de ≥ 40 h são comparáveis de verdade.

## Incidentes e rodadas sem publicação (mais recentes)

Anteriores a 15/09 em [`incidentes-2026-09-08-a-14.md`](incidentes-2026-09-08-a-14.md); de 15 a 19/09 em [`incidentes-2026-09-15-a-19.md`](incidentes-2026-09-15-a-19.md).

- 2026-09-24 01:01 BRT · **O maior evento da série no conteúdo**: 515 partidas (+4) — anônimo 17.351 (seria o 4º geral) e **AMM2026 com 19.785** (recorde pessoal, a 215 pontos dos 20 mil). **22/09 fechou em 111 de alcance**, o 2º melhor da série, sendo post de mecânica pura.
- 2026-09-25 01:01 BRT · **O dia mais cheio da telemetria**: 525 partidas (+10), todas em 24/09 entre 13h43 e 15h35, com **dois nicks novos** — ROBER (5 partidas seguidas, chegando ao Tier III) e YAGO. **A hipótese post → partidas caiu**: 23/09 fechou em 4 de alcance e 24/09 em 10, ou seja, os dois dias de MAIS jogo foram os de MENOS alcance. Tratar Instagram e jogo como problemas separados.
- 2026-09-26 01:01 BRT · Rodada disparada sozinha, 6ª seguida. Telemetria: 528 partidas (+3), **44 pilotos** (nick novo XXXX). As três partidas de 25/09 saíram às **11h37–11h42**, antes do post das 13h02, reforçando a conclusão da véspera, e são o **primeiro registro de jogo antes do meio-dia em semanas**. Decisão do dia: **parar de usar alcance como métrica de qualidade do post**. (A leitura "bimodal" registrada aqui foi corrigida em 27/09.)
- 2026-09-27 01:10 BRT · Rodada disparada sozinha, 7ª seguida. **Telemetria congelada**: 528 partidas e 44 pilotos, os mesmos de ontem — **26/09 fechou sem nenhuma partida**, e a última foi em 25/09 11h42. Sem evento, sem nick novo: shout-out e marco fora do cardápio, e mecânica/telemetria bloqueados pela regra dos dois dias. Saída: **desafio num eixo que nunca tinha sido usado — duração**. `?visao=partidas&ordem=tempo` mostra a partida mais longa de todas com **4:57** (anônimo, 15.467 pts, 09/09) e o corte dos 4 minutos na 23ª posição: 23 de 528, 4,4%. **Descoberta operacional do dia:** o Buffer só recalcula métrica uma vez por dia, então o post de ontem sempre chega à rodada com ~30 min de vida — foi isso que produziu o "1" de 25/09 (que fechou em **56**) e a tese bimodal que caiu hoje.
