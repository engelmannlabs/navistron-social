# Registro de experimentos — @navistron

Uma linha por post. Métricas preenchidas ≥ 48 h após a publicação (Buffer `get_post` com `includeMetrics`).
`eng%` = engagementRate do Buffer. Para reels, anotar também views e tempo médio assistido na coluna "resultado".
Coluna "resultado" é a leitura curta: o que aprendemos.

| data | slug | formato | pilar | gancho | horário (BRT) | buffer_id | alcance | likes | coment. | saves | eng% | resultado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 | 2026-09-22-41-tiros-num-meteoro | reel 14,0 s | mecânica explicada (vida do meteoro × score) | "Um meteoro morre com 3 tiros. Ou com 41." → contador até 41 → "22 tiros aos 10 mil · 12 aos 5 mil" → "Quantos tiros você aguenta?" | **13:00** (ter) | 6ab1fee56ed20e9354f6ee19 | **111** | 0 | 0 | 0 | 0 | 2º dia do pedido na primeira linha (palpite). Post tirado do código, com as contas rodadas em python antes de virar arte. **Final (~27 h): 137 views, 111 alcance** — **2º melhor da série** e abertura mais rápida já vista (104 com 4h30). **Mecânica pura, sem telemetria nova: conteúdo didático distribui tão bem quanto evento** |
| 2026-09-23 | 2026-09-23-94-horas-e-a-denise | reel 14,0 s | hall da fama / shout-out (nick novo) | "94 horas sem partida. Aí veio a DENISE." → contador até 6.768 → "3 partidas ontem · 511 no total" → "E você, joga hoje?" | **13:00** (qua) | 6ab3501eb777b65977eff22b | 4 | 0 | 0 | 0 | 0 | Primeiro post sobre evento real em 5 dias. 3º dia do pedido na primeira linha (sim/não). **Final (~26 h): 6 views, 4 alcance** — quase nada. **E foi a véspera do dia de 10 partidas no jogo**: alcance baixo, jogo alto |
| 2026-09-24 | 2026-09-24-faltaram-215-pontos | reel 14,0 s | desafio (barreira dos 20 mil) | "O AMM2026 parou a 215 pontos dos 20 mil." → contador até 19.785 → "17.351 · sem nick · seria o 4º de sempre" → "Quem chega aos 20 mil?" | **13:00** (qui) | 6ab4a188521044626fe41b75 | 10 | 0 | 0 | 0 | 0 | 4º dia do pedido na primeira linha (aposta sim/não). **Final em 26/09 (~25 h): 11 views, 10 alcance.** O **maior evento da série no conteúdo** (o 2º geral bateu o próprio recorde) teve um dos piores alcances — prova de que a qualidade do gancho não determina a distribuição |
| 2026-09-25 | 2026-09-25-de-zero-a-dez | reel 14,0 s | telemetria / marco (a virada da semana) | "Segunda: zero partidas. Ontem: dez." → contador até 10 → "43 pilotos · ROBER e YAGO entraram ontem" → "A semana virou. Vem junto?" | **13:00** (sex) | 6ab5f37e607bee5b03261ea4 | 1* | 0 | 0 | 0 | 0 | 5º dia do pedido na primeira linha, e o primeiro que muda de natureza: pede **marcação** em vez de comentário. *Parcial em 26/09 01:05 BRT (~1h30 de métrica): 2 views, 1 alcance — cedo demais. Preencher em 27/09 |
| 2026-09-26 | 2026-09-26-voce-nao-atira | reel 14,0 s | mecânica explicada (tiro automático) | "Aqui você não atira. Só desvia." → contador até 400 ("Tier II · cadência da nave", "salvas por minuto, sem apertar nada") → "5 mísseis teleguiados por salva · automáticos" → "O jogo é sobre posição." | **13:00** (sáb, agendado — 9º post diurno) | 6ab744fd80521ded5520b7bb | | | | | | 6º dia do pedido na primeira linha, agora **pergunta de opinião** ("prefere botão de tiro ou automático?") — a única das seis que não exige ter jogado. Aposta no achado de 24/09: mecânica pura distribui bem. Fato do jogo que nunca tinha virado post: **não existe botão de tiro**. Preencher em 28/09 |

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
| 25/09 (sex) | 1* | telemetria |

Mediana 19, extremos 1 e 135. **Distribuição bimodal**: ou o Instagram dá um empurrão (100+) ou não dá nada (<10),
sem meio-termo e sem variável sob controle que separe os dois grupos. Não usar alcance como métrica de qualidade do post.

## Incidentes e rodadas sem publicação (mais recentes)

Anteriores a 15/09 em [`incidentes-2026-09-08-a-14.md`](incidentes-2026-09-08-a-14.md); de 15 a 19/09 em [`incidentes-2026-09-15-a-19.md`](incidentes-2026-09-15-a-19.md).

- 2026-09-23 01:01 BRT · **A telemetria voltou**: 511 partidas (+3), 41 pilotos — três partidas em 22/09, encerrando **94h08 sem nenhuma partida**, o maior vazio da série. Uma delas de um nick novo, **DENISE**. **O post de 22/09 abriu em 104 de alcance com ~4h30 de métrica** — a abertura mais rápida já registrada.
- 2026-09-24 01:01 BRT · **O maior evento da série no conteúdo**: 515 partidas (+4) — anônimo 17.351 (seria o 4º geral) e **AMM2026 com 19.785** (recorde pessoal, a 215 pontos dos 20 mil). **22/09 fechou em 111 de alcance**, o 2º melhor da série, sendo post de mecânica pura.
- 2026-09-25 01:01 BRT · **O dia mais cheio da telemetria**: 525 partidas (+10), todas em 24/09 entre 13h43 e 15h35, com **dois nicks novos** — ROBER (5 partidas seguidas, chegando ao Tier III) e YAGO. **A hipótese post → partidas caiu**: 23/09 fechou em 4 de alcance e 24/09 em 10, ou seja, os dois dias de MAIS jogo foram os de MENOS alcance. Tratar Instagram e jogo como problemas separados.
- 2026-09-26 01:01 BRT · Rodada disparada sozinha, 6ª seguida. Telemetria: 528 partidas (+3), **44 pilotos** (nick novo XXXX). As três partidas de 25/09 saíram às **11h37–11h42** — antes do post das 13h02, o que reforça de vez a conclusão de ontem, e o **primeiro registro de jogo antes do meio-dia em semanas**, quebrando o padrão "14h–18h" que valia desde o início. Métrica: 24/09 fechou em **10**, ou seja, o maior evento de conteúdo da série teve um dos piores alcances. **Com nove posts no mesmo slot, a leitura fechou: a distribuição é bimodal** (1 a 135, mediana 19, sem meio-termo) e não há variável sob controle que a explique — tabela nova nesta página. Decisão: **parar de usar alcance como métrica de qualidade do post**; manter consistência e qualidade, que é o que a rotina controla. Post do dia apostou no achado de 24/09 (mecânica pura distribui bem) com um fato do jogo inédito em post: não existe botão de tiro.
