# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

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
- 2026-09-29 · **Primeiros retornos do Guilherme sobre a Estela: menos coisa na tela, mais casa.** A estreia agradou,
  mas a legenda queimada (82 px, caixa alta, logo abaixo do queixo) e o selo fixo no topo pareceram grandes e em cima do
  rosto. Na mesma tarde vieram as regras que valem daqui pra frente: **sem selo de IA na arte** (o rótulo de IA do
  Instagram basta), **nos reels só a legenda pequena** (56 px, caixa baixa, base em y = 1490, molde
  `templates/estela-video.html`), **stories em vídeo puro, 1 por dia**, **cenas sempre dentro da casa dela** — sala,
  cozinha, quarto, escrivaninha — e, por último, **ela não diz mais que é IA** na fala nem na legenda: só o conteúdo
  (o rótulo do Instagram é o aviso). Saíram quatro looks em casa (1 crédito cada; o quarto com pôster de personagem de
  terceiros no fundo foi vetado e refeito sem pôsteres) e o 1º story, gravado na sala, foi ao ar às 15:36. Custo real
  medido: ~1 crédito a cada 3 s de vídeo. Do lado do jogo: 4 dias sem partida (a última foi em 25/09, 11h42), e a
  segunda-feira com o pedido novo ("joga e registra o nick") terminou com zero nick novo.
- 2026-09-28 · **Pilar não prevê alcance — e o pedido de comentário morreu.** Os dois posts de mecânica pura da
  série fecharam em **111 (22/09)** e **14 (26/09)**: mesmo pilar, mesmo formato, mesmo slot das 13:00, 8× de
  diferença. Com a correção de ontem (o "1" de 25/09 era parcial e virou 56), a série do slot fica 2, 4, 10, 14,
  28, 35, 56, 111, 135 — mediana 28 — e **nenhuma variável sob controle explica a diferença**. A regra "mecânica
  distribui bem", de 24/09, **cai**. Do outro lado do funil, sete variações do pedido de comentário na primeira
  linha (melhor score, palpite, sim/não, aposta, marcação, opinião, emoji) deram **zero em 100% dos casos** —
  amostra suficiente para parar. **Decisão: o pedido passa a ser a ação que importa (jogar e registrar o nick) e a
  métrica do teste passa a ser nick novo no ranking**, que acontece de verdade. Semana 39 fechada: 20 partidas,
  34min52 (quase idêntico à semana 38), **quatro estreantes** — 40 → 44 pilotos, 9% de toda a história em sete
  dias — e tempo médio caindo para 1min45 porque cinco das 20 partidas duraram menos de um minuto. 4º fim de
  semana seguido com zero jogo.
- 2026-09-27 · **A leitura "bimodal" era artefato de métrica parcial — e o mecanismo agora está entendido.**
  O post de 25/09, registrado como **1** de alcance, fechou em **56 alcance / 65 views**. O motivo é mecânico:
  o Buffer atualiza as métricas **uma vez por dia** (carimbo `metricsUpdatedAt` igual para todos os posts), então
  **a rodada da 01:00 sempre lê o post do dia anterior com ~30 minutos de vida**, que é quase sempre 0 ou 1.
  **Regra nova: preencher métrica só do post de anteontem, nunca do de ontem.** Do lado do conteúdo, eixo novo
  estreado: **duração**. A partida mais longa de todas durou **4min57** (anônimo, 09/09) e nenhuma das 528 chegou
  aos 5 minutos — só 23 passaram dos 4.

Anteriores em [`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 26/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
