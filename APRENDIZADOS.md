# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

- 2026-09-27 · **A leitura "bimodal" de ontem era artefato de métrica parcial — e o mecanismo agora está entendido.**
  O post de 25/09, registrado ontem como **1** de alcance, fechou em **56 alcance / 65 views**. O motivo é mecânico:
  o Buffer atualiza as métricas **uma vez por dia** — os dois últimos posts têm exatamente o mesmo carimbo,
  `metricsUpdatedAt 26/09 16:34Z`, e o post de 26/09 saíra às 16:02Z. Ou seja, **a rodada da 01:00 sempre lê o post
  do dia anterior com o valor de ~30 minutos de vida**, que é quase sempre 0 ou 1. Com o número real no lugar, a
  série do slot das 13:00 vira 2, 4, 10, 28, 35, 56, 111, 135 — mediana 31,5, **com meio-termo**. Então não é
  bimodal: é variância alta sem variável conhecida que explique. A consequência prática de ontem continua válida
  (não usar alcance como nota de qualidade do post), mas por outro motivo. **Regra nova: preencher métrica só do
  post de anteontem, nunca do de ontem.** Do lado do conteúdo, eixo novo estreado hoje: **duração**. A partida mais
  longa de todas durou **4min57** (anônimo, 09/09) e nenhuma das 528 chegou aos 5 minutos — só 23 passaram dos 4.
  Telemetria congelada em 528 desde 25/09 11h42, ou seja, 26/09 fechou sem nenhuma partida.
- 2026-09-26 · **O alcance da conta varia demais para servir de nota do post.** Com o slot das 13:00 fixo há nove
  posts, dois capturaram distribuição de verdade (135 e 111) e o resto ficou entre 2 e 56 — e **não há variável sob
  controle que separe os grupos**: mesmo horário, mesmo formato, mesma estrutura de legenda, pilares diferentes dos
  dois lados. **Consequência prática: parar de tratar alcance como métrica de qualidade do post.** A rotina deve
  manter consistência e qualidade (que é o que ela controla) e não perseguir um número que o algoritmo sorteia. A
  alavanca real continua sendo a proposta de 17/09: sinal humano na conta. Enquanto isso, **o jogo cresce sozinho** —
  528 partidas, 44 pilotos (nick novo XXXX), e as três partidas de 25/09 saíram às **11h37**, antes do post e fora do
  padrão "14h–18h" que valia até aqui. *(Entrada corrigida em 27/09: a leitura original dizia "bimodal, sem
  meio-termo", o que se apoiava no valor parcial de 25/09.)*
- 2026-09-25 · **O melhor dia da telemetria — e a queda da hipótese do Instagram.** Em 24/09 o jogo teve **10 partidas
  entre 13h43 e 15h35**, o dia mais cheio da série, com **dois nicks novos de uma vez**: ROBER (cinco partidas
  seguidas, chegando ao Tier III) e YAGO. **Mas o post de 23/09 fechou em 4 de alcance e o de 24/09 em 10** — os dias
  de MAIS jogo foram os de MENOS alcance. Isso derruba a leitura de que o post puxa as partidas: o padrão temporal
  continua, mas sem nenhuma correlação com alcance. **Instagram e jogo são dois problemas separados.** Nota de
  produção: o "Y" da GeistMono vira "V" quando reduzido, então **nick novo se confere em crop 1:1**.
- 2026-09-24 · **Conteúdo didático distribui tão bem quanto evento.** O post de 22/09 — mecânica pura, sem nenhuma
  telemetria nova, montado só com fórmulas do código — fechou em **111 de alcance / 137 views**, o 2º melhor da série,
  e teve a abertura mais rápida já vista. Quando a telemetria está parada, mecânica não é prêmio de consolação, é
  pilar de primeira linha. Evento do dia: o AMM2026 fez **19.785** em 23/09, recorde pessoal e a 215 pontos da
  barreira dos 20 mil, intocada há 79 dias.

Anteriores em [`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09 e 23/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
