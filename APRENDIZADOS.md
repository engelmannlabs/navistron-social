# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

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
- 2026-10-23 · **O job de render do Actions passou a estourar o limite de 15 min — e o padrão "quem voltou, melhorou"
  quebrou no 8º piloto.** Na madrugada de 23/10, o render levou 14 min na folha dos looks (contra ~1 min nos dias
  anteriores) e o do story estourou o `timeout-minutes: 15` e foi cancelado; os 2º pushes, feitos para destravar, ficaram na
  fila e foram cancelados por pushes seguintes (o grupo de concorrência `render` guarda um run pendente só) — e, por volta
  das 04:58Z, os runs voltaram a levar ~2 min. **Antes de re-empurrar, olhar a página pública de Actions** (WebFetch em
  github.com/engelmannlabs/navistron-social/actions: o run, o estado e o motivo — timeout, cancelado, na fila): re-empurrar
  com um run pendente só troca um pelo outro, e qualquer run renderiza tudo o que estiver desatualizado. Os runs mostram o
  aviso da migração do `ubuntu-latest` para o Ubuntu 26 (desde 19/10), a causa provável; fixar o runner ou aumentar o limite
  é mudança no workflow, que a rotina não pode fazer. No jogo, a quinta 22/10 teve 10 partidas, e o MARCAO voltou (15.999,
  abaixo dos 20.301 da estreia): dos 8 pilotos que salvaram partidas em mais de um dia, 7 fizeram a melhor na volta — o
  story do dia. A média das partidas com nick passou dos 10 mil (10.210). Métricas: a Estela das 19:00 de 20/10 fechou em
  **27 / 32** (~39 h), no meio das três da S42 (32, 12 e 28); o story de 21/10 fechou em **5 / 5**, o menor desde 10/10, e o
  de 22/10 tinha 0 / 0 com ~8,5 h — depois de 25 a 32 de 14 a 20/10, dois stories seguidos fracos; a leitura de 26/10 diz se
  é queda ou ruído. Produção: a Excited a 1,15x no Avatar III leu 80 palavras em 30,4 s (~0,38 s por palavra), com a
  expressão mais animada e sem mão nenhuma (braços para baixo no look); a Friendly a 1,15x, 58 em 16,8 s (~0,29). No look de
  braços levemente afastados, os braços balançaram de leve e as mãos ficaram na beira de baixo. Avatar III: 16,8 s + 30,4 s
  = 6 créditos (2 e 4), ~1 a cada ~8,4 s. HeyGen: 72 → 64; os 5 stories de 24 a 28/10 pedem ~15–20, contra 34 acima da
  guarda. No blog, a lista de partidas por tempo inteira (14 páginas, com a conta fechada contra o /stats) virou o artigo da
  duração: mediana 2min24, e a partida mais curta possível dura 2 s, porque a nave nasce invencível por 2 s.
- 2026-10-22 · **Um piloto novo fez a 100ª partida com nick antes de o post que contava as que faltavam ir ao ar — e o Avatar III
  passou num reel.** A quarta 21/10 teve 34 partidas, todas de manhã (08:35 a 11:20): 7 com nick, todas do MARCAO, piloto novo (o 47º),
  que entrou em 4º no top 10 de pilotos com 20.301 (a 7ª maior partida da história) e fez a 100ª partida com nick às 08:48 — mais de 4
  horas antes de o reel de dados das 13:00 ir ao ar dizendo "faltam 3". O número estava datado ("até 21/10", "lidos à 01:10"), mas
  envelheceu de manhã: **contagem regressiva num post agendado para 12 horas depois é aposta** — melhor o fato fechado ("até a 01:10,
  eram 97") ou o pedido sem número. Métricas: o story de 20/10, o 1º no Avatar III, fechou em **27 / 31** (~24 h), no meio dos stories
  no Avatar IV (os de 14 a 20/10 fizeram 32, 31, 25, 25, 28, 18 e 27); a Estela das 19:00 de 20/10 tinha **25 / 29** com ~16 h, já perto
  das Estelas das 19:00 da S42 (32, 12 e 28); o story de 21/10 tinha só 0 / 2 com ~7,7 h (o de 20/10, 17 / 19 com ~6,7 h). Produção: o
  reel e o story saíram no **Avatar III**; com os braços para baixo no look, o reel teve um gesto só (as mãos no peito e abertas para os
  lados em ~14–15,6 s, naturais) e o story, nenhum — com o de 20/10, dois stories sem gesto com os braços para baixo, contra um vídeo
  inteiro de gestos com os braços abertos. O motor anima o objeto do cenário: a navinha do reel voou pelo alto e mudou de tamanho, mas
  sempre navinha; a revoada do story quase não mexeu. Preço: os vídeos de 23,8 s e 17,3 s custaram 6 juntos; com os de 11,0 s e 16,1 s (2
  cada) e 22,9 s (3), o Avatar III parece cobrar ~1 crédito a cada ~8,1–8,6 s, arredondado para cima (3 e 3). HeyGen: 80 → 72; os 6
  stories (23 a 28/10) e o reel de sexta pedem ~22–33, contra 42 acima da guarda. No blog, o cooldown entrou como conceito, no modelo do
  RNG (15/10): o Tier VI e o VII, a 1ª ideia, já estavam no artigo do Tier V (08/10) — conferir os guias de cada tier antes da pauta.

Anteriores em [`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md) (outubro, a partir de 01/10),
[`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 30/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
