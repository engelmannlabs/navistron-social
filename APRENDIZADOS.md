# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

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
- 2026-10-21 · **As partidas com nick fazem o dobro de pontos das anônimas — e o Avatar III cobrou o mesmo por 16 s e por 11 s.**
  O /stats tem filtros por tipo (?tipo=registrados e ?tipo=anonimos, o link "Partidas Anônimas" da página): as 97 partidas com nick
  têm média de **9.799** pontos, e as 535 anônimas, **4.782** (a conta fecha com o geral, 5.552) — e 48% das com nick passaram dos
  10 mil, contra 21% das anônimas. Não dá para separar causa (o nick não muda o jogo; quem joga melhor faz mais questão de salvar),
  mas é o argumento mais concreto que o pedido "põe o nick" já teve, e virou o reel de hoje. No jogo, a terça 20/10 não teve
  partida: desde sábado, uma só (192 pontos, na segunda), e as 11 partidas desde a última com nick (RASEC, 16/10) foram anônimas.
  Métricas: o reel de segunda (ranking da semana 42) fechou em **14 / 15** (~23 h), exatamente a mediana do slot (14, agora com 31
  posts); o story de 19/10 fechou em **18 / 25** — os stories de 13 a 19/10 fizeram 15, 32, 31, 25, 25, 28 e 18 —, e o de 20/10, o
  1º no Avatar III, tinha 17 / 19 com ~6,7 h, no ritmo dos outros. Produção: o 2º story no **Avatar III** (a variável: a duração)
  saiu com 50 palavras em 16,1 s e custou **2 créditos**, o mesmo do de 11,0 s — pelo que se mediu (11,0 s e 16,1 s = 2; 22,9 s = 3),
  ele cobra ~1 crédito a cada ~8–10 s, menos da metade do Avatar IV, e o story pode voltar aos 40–60 palavras da regra sem pesar no
  orçamento. Mas ele não aceita motionPrompt, e **o look decide os gestos**: no look de braços abertos, ela gesticulou o vídeo todo
  (naturais, sem artefato); no de 20/10, nenhuma mão. Para um story sem mãos no Avatar III, pedir o look com os braços para baixo.
  HeyGen: 83 → 80; os 7 stories (22 a 28/10) e os 2 reels da S43 pedem ~37 (stories de 3, reels de 8), contra 50 acima da guarda.
  No blog, o eixo da quarta ganhou o controle: jogos para jogar com uma mão (Hoober, 2013: 49% seguram o celular com uma mão só).
- 2026-10-20 · **O Avatar III passou no story pela metade do preço — e o mostrador do cenário virou animação no Avatar
  IV.** Métricas: o reel de domingo, 18/10 ("Fez 14.012 e ficou fora do top 10"), fechou em **10 de alcance / 15 views**
  (~24 h), e o slot das 13:00 da S42 fechou com 105, 47, 9, 12, 6, 1 e 10 (mediana 10, contra 14 na série toda); o story
  de 18/10 (os mísseis) fechou em **28 / 32**, com 2 reações — os stories de 12 a 18/10 fizeram 7, 15, 32, 31, 25, 25 e
  28. No jogo, a S43 começou devagar: a segunda 19/10 teve **uma partida só** (16:43, anônima, 192 pontos em 25 s),
  depois de uma S42 que jogou de manhã. Na lista por pontos, **162 das 632 partidas passaram dos 10 mil** — 47 das 97
  com nick (48%), contra 115 das 535 anônimas (21%): quem põe o nick joga melhor, ou quem joga melhor põe o nick.
  Produção: o story foi no **Avatar III** (a variável: o motor), o 1º vídeo publicado nele — 2 créditos por 11,0 s (no
  Avatar IV, 4), boca acompanhando a fala, rosto natural, nenhuma mão e bordas limpas. No reel, **o Avatar IV animou o
  mostrador do cenário** como um painel: ele sumia, girava e virava uma bola laranja; refeito com o fundo "parado como
  uma foto" no motionPrompt, o mostrador ainda mexeu, mas ficou sempre um mostrador. Objeto que sugere movimento
  (ponteiro, mostrador) pede o fundo parado já na 1ª tentativa, e a contagem de pixels da cor do objeto pega o que a
  folha de 12 quadros não pega. A Friendly a 1,15x leu 61 palavras em 20,5 s num reel (~0,335 s por palavra). HeyGen:
  102 → 83; os 8 stories e os 2 reels até 28/10 só cabem acima da guarda com os stories no Avatar III (~40 contra 53; no
  Avatar IV, ~56). No blog, o guia dos 10 mil completou a escada dos guias de pontos (10, 20 e 30 mil).

Anteriores em [`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md) (outubro, a partir de 01/10),
[`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 30/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
