# Registro de experimentos — @navistron

Uma linha por post. Métricas preenchidas ≥ 48 h após a publicação (Buffer `get_post` com `includeMetrics`).
`eng%` = engagementRate do Buffer. Para reels, anotar também views e tempo médio assistido na coluna "resultado".
Coluna "resultado" é a leitura curta: o que aprendemos.

**Atenção (descoberto em 27/09):** o Buffer recalcula as métricas **uma vez por dia** (o carimbo `metricsUpdatedAt`
é o mesmo para todos os posts da conta). Como a rodada roda à 01:00, o post do dia anterior sempre aparece com o
valor de ~30 minutos de vida. **Nunca preencher a linha do post de ontem; preencher a do post de anteontem.**

| data | slug | formato | pilar | gancho | horário (BRT) | buffer_id | alcance | likes | coment. | saves | eng% | resultado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 | 2026-09-23-94-horas-e-a-denise | reel 14,0 s | hall da fama / shout-out (nick novo) | "94 horas sem partida. Aí veio a DENISE." → contador até 6.768 → "3 partidas ontem · 511 no total" → "E você, joga hoje?" | **13:00** (qua) | 6ab3501eb777b65977eff22b | 4 | 0 | 0 | 0 | 0 | Primeiro post sobre evento real em 5 dias. 3º dia do pedido na primeira linha (sim/não). **Lido com ~26 h: 6 views, 4 alcance.** Foi a véspera do dia de 10 partidas no jogo |
| 2026-09-24 | 2026-09-24-faltaram-215-pontos | reel 14,0 s | desafio (barreira dos 20 mil) | "O AMM2026 parou a 215 pontos dos 20 mil." → contador até 19.785 → "17.351 · sem nick · seria o 4º de sempre" → "Quem chega aos 20 mil?" | **13:00** (qui) | 6ab4a188521044626fe41b75 | 10 | 0 | 0 | 0 | 0 | 4º dia do pedido na primeira linha (aposta sim/não). **Lido em 26/09 (~25 h): 11 views, 10 alcance.** O maior evento da série no conteúdo teve um dos piores alcances |
| 2026-09-25 | 2026-09-25-de-zero-a-dez | reel 14,0 s | telemetria / marco (a virada da semana) | "Segunda: zero partidas. Ontem: dez." → contador até 10 → "43 pilotos · ROBER e YAGO entraram ontem" → "A semana virou. Vem junto?" | **13:00** (sex) | 6ab5f37e607bee5b03261ea4 | **56** | 0 | 0 | 0 | 0 | 5º dia do pedido na primeira linha, o primeiro que pede **marcação**. **Final (~24 h): 65 views, 56 alcance — 3º melhor da série.** Em 26/09 esta linha dizia "1", lido com 1h30 de vida: foi essa leitura parcial que sustentou a tese bimodal, corrigida em 27/09 |
| 2026-09-26 | 2026-09-26-voce-nao-atira | reel 14,0 s | mecânica explicada (tiro automático) | "Aqui você não atira. Só desvia." → contador até 400 ("Tier II · cadência da nave") → "5 mísseis teleguiados por salva · automáticos" → "O jogo é sobre posição." | **13:00** (sáb) | 6ab744fd80521ded5520b7bb | **14** | 0 | 0 | 0 | 0 | 6º dia do pedido na primeira linha (pergunta de opinião, a única que não exige ter jogado). **Final (~23 h, lido em 28/09): 15 views, 14 alcance.** Dado mais importante da linha: **o mesmo pilar que fez 111 em 22/09 fez 14 aqui** — pilar não prevê alcance, e a regra "mecânica distribui bem" (24/09) não se sustenta |
| 2026-09-27 | 2026-09-27-ninguem-passou-de-5-minutos | reel 14,0 s | desafio (eixo novo: **duração**, não score) | "Ninguém passou de 5 minutos." → relógio até **4:57** ("a partida mais longa", "anônimo · 15.467 pontos · 09/09") → contador **23** ("passaram dos 4 minutos", "4,4% do total", "média geral: 2min01") → "VOCÊ AGUENTA 5 MINUTOS?" | **13:00** (dom) | 6ab8984f9f89edbefe88acfb | | | | | | 7º dia do pedido na primeira linha, o de **menor esforço possível** (comentar um emoji). Primeiro post da conta que usa duração; o contador virou relógio (mm:ss). Preencher em 29/09 |
| 2026-09-28 | 2026-09-28-quatro-nicks-novos | reel 14,0 s | ranking da semana (segunda) — semana 39 | "Quatro nicks novos em uma semana." → contador até **19.785** ("o topo da semana 39", "AMM2026 · 23/09 · 3min10", "20 partidas em 4 tardes") → **lista do top 5 entrando linha a linha** → "VOCÊ ENTRA NO TOP 5?" | **13:00** (seg, agendado — 11º post diurno) | 6ab9e88b612c9e6ac93ecf39 | | | | | | **8ª variação do pedido e a primeira que abandona o comentário**: as sete anteriores deram zero em 100% dos casos, então o pedido virou a ação que importa (jogar e registrar o nick) e a **métrica do teste passa a ser nick novo no ranking**, que acontece de verdade (4 na semana passada). Formato novo na arte: bloco de ranking com 5 linhas animadas, fora do padrão "contador gigante". Preencher em 30/09 |

Posts de 18 a 22/09/2026 em [`experiments-2026-09-18-a-21.md`](experiments-2026-09-18-a-21.md); de 14 a 17/09 em [`experiments-2026-09-14-a-17.md`](experiments-2026-09-14-a-17.md); até 13/09 em [`experiments-ate-2026-09-13.md`](experiments-ate-2026-09-13.md).

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
| 26/09 (sáb) | 14 | mecânica |

Ordenada: 2, 4, 10, 14, 28, 35, 56, 111, 135. **Mediana 28**, extremos 2 e 135.
O par mais informativo da tabela são os dois posts de **mecânica**: 111 em 22/09 e **14** em 26/09, mesmo pilar,
mesmo formato, mesmo slot. Junto com a correção de 27/09 (o "1" de 25/09 era parcial e virou 56), a leitura
final é: **variância altíssima, sem nenhuma variável sob controle que explique** — nem horário, nem pilar, nem
formato. Não usar alcance como nota de qualidade do post.

## Incidentes e rodadas sem publicação (mais recentes)

Anteriores a 15/09 em [`incidentes-2026-09-08-a-14.md`](incidentes-2026-09-08-a-14.md); de 15 a 19/09 em [`incidentes-2026-09-15-a-19.md`](incidentes-2026-09-15-a-19.md).

- 2026-09-25 01:01 BRT · **O dia mais cheio da telemetria**: 525 partidas (+10), todas em 24/09 entre 13h43 e 15h35, com **dois nicks novos** — ROBER (5 partidas seguidas, chegando ao Tier III) e YAGO. **A hipótese post → partidas caiu**: 23/09 fechou em 4 de alcance e 24/09 em 10, ou seja, os dois dias de MAIS jogo foram os de MENOS alcance. Tratar Instagram e jogo como problemas separados.
- 2026-09-26 01:01 BRT · Rodada disparada sozinha, 6ª seguida. Telemetria: 528 partidas (+3), **44 pilotos** (nick novo XXXX). As três partidas de 25/09 saíram às **11h37–11h42**, antes do post das 13h02, e são o **primeiro registro de jogo antes do meio-dia em semanas**. Decisão do dia: **parar de usar alcance como métrica de qualidade do post**. (A leitura "bimodal" registrada aqui foi corrigida em 27/09.)
- 2026-09-27 01:10 BRT · Rodada disparada sozinha, 7ª seguida. **Telemetria congelada**: 528 partidas e 44 pilotos — 26/09 fechou sem nenhuma partida. Sem evento, sem nick novo: saída foi **desafio num eixo inédito, duração** (partida mais longa 4:57; 23 de 528 passaram dos 4 minutos). **Descoberta operacional:** o Buffer só recalcula métrica uma vez por dia, então o post de ontem sempre chega à rodada com ~30 min de vida — foi isso que produziu o "1" de 25/09, que fechou em **56**, e a tese bimodal que caiu.
- 2026-09-28 01:15 BRT · Rodada disparada sozinha, 8ª seguida. **Semana 39 fechada**: 20 partidas, 34min52, 10 registradas e 10 anônimas, 5 pilotos com nick e **quatro estreantes** (DENISE, ROBER, YAGO, XXXX) — 40 → 44 pilotos, 9% de toda a história em sete dias. Tempo médio caiu de 2min00 (semana 38) para 1min45 porque cinco das 20 partidas duraram menos de um minuto, todas no Tier I. **Telemetria segue congelada em 528**: 26 e 27/09 sem nenhuma partida, o **4º fim de semana seguido com zero jogo**. Métrica: 26/09 fechou em 14, contra 111 do outro post de mecânica — pilar não prevê alcance. Decisão: **o pedido da legenda deixa de ser comentário** (sete variações, zero em todas) e passa a ser a ação no jogo, medida por nick novo no ranking.
