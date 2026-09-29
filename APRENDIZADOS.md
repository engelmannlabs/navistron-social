# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

- 2026-09-29 · **Primeiro retorno do Guilherme sobre a Estela: menos coisa na tela.** A estreia agradou, mas a
  legenda queimada (82 px, caixa alta, logo abaixo do queixo) e o selo fixo no topo, rente à cabeça, pareceram grandes
  e em cima do rosto. **Regra para todo vídeo com rosto: nada sobre o rosto, nada fixo além da legenda, e qualquer
  outro elemento só se for temporário e pequeno.** Camada v2 em `templates/estela-video.html`: selo de IA de 20 px no
  canto superior esquerdo só nos 3 primeiros segundos (some com fade) e legenda de 56 px, em caixa baixa, com a base em
  y = 1490 — o queixo fica em ~1170 nos looks atuais. O aviso de IA continua garantido pelo selo, pela fala e pelo
  rótulo do Instagram. Do lado do jogo: 3º dia seguido sem partida (26 a 28/09), e a segunda-feira com o pedido novo
  ("joga e registra o nick") terminou com zero nick novo.
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
- 2026-09-26 · **O alcance da conta varia demais para servir de nota do post.** Com o slot das 13:00 fixo há nove
  posts, dois capturaram distribuição de verdade (135 e 111) e o resto ficou entre 2 e 56 — e **não há variável sob
  controle que separe os grupos**. **Consequência prática: parar de tratar alcance como métrica de qualidade do
  post.** A alavanca real continua sendo a proposta de 17/09: sinal humano na conta. Enquanto isso, **o jogo cresce
  sozinho** — 528 partidas, 44 pilotos, e as três partidas de 25/09 saíram às **11h37**, antes do post e fora do
  padrão "14h–18h". *(Entrada corrigida em 27/09: a leitura original dizia "bimodal, sem meio-termo", o que se
  apoiava no valor parcial de 25/09.)*

Anteriores em [`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 25/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
