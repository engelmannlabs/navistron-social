# Aprendizados — operação @navistron

O mais recente primeiro. **Manter apenas os 4 últimos aqui**; ao acrescentar um novo, mover o mais antigo para um
arquivo `APRENDIZADOS-<período>.md`. Separado do `PLAYBOOK.md` em 22/09/2026 para que a rodada diária reescreva
apenas este arquivo, e não o playbook inteiro.

- 2026-10-09 · **Os stories da Estela caíram de 15 para 2 views em nove dias — e a Estela de quarta fechou em 4.** O story de
  07/10 (o sarrafo do top 10) fechou em **2 views e 0 de alcance** com ~24 h, o 9º numa linha quase só descendente (15, 11, 9,
  11, 13, 10, 7, 5, 2), e o republicado de 08/10 tinha 1 view com ~5 h; as respostas seguem em zero. A queda atravessa temas,
  cenários, vozes e durações (cada story testou uma variável diferente), então nenhum deles parece ser a causa; as hipóteses
  são o cansaço do story diário entre os poucos seguidores ou o Instagram mostrando menos os stories de uma conta sem
  respostas — a conferir na leitura de 26/10, que pode decidir se o story diário ainda vale os ~6–8 créditos por dia. No
  feed, a Estela de 07/10 (boas-vindas ao KAL-EL) fechou em **4 de alcance / 7 views** (~35 h), o menor vídeo dela: na S41,
  os vídeos dela fecharam em 14 e 4 e o reel de dados de 06/10 em 13 (o de 08/10 tinha 13 com ~11 h); a mediana do slot caiu
  para 14, com 19 posts. No jogo, a quinta (08/10) teve 18 partidas e nenhuma com nick — a melhor, 14.000 no Tier IV, ficou 7
  pontos abaixo do 10º do top 10 de pilotos e virou o carrossel do dia —, e a semana, 45 partidas e 4 com nick. Produção: com
  expressiveness low ela gesticulou do mesmo jeito (a 1ª versão do story abriu com um gesto de mãos e foi refeita), e o saldo
  de 211 créditos só cobre os vídeos até 28/10 com stories de ~15 s e sem refazer.
- 2026-10-08 · **Uma partida respondeu duas perguntas dos reels — e um story foi ao ar com um número velho.** Em 07/10
  às 14:55, VASCO DA GAMA fez **30.577** pontos com 20 boosts em 5min14: a 1ª partida no Tier V em 568, o recorde novo
  e a maior partida em boosts e em duração — a resposta para "quem chega aos 30 mil?" (reel de 30/09) e "quem chega
  primeiro no Tier V?" (reel de 06/10, ~26 h antes). Nada liga a partida aos posts (o piloto não é novo: jogou em
  27/06), mas a pergunta com número deu pauta de continuação, e o gancho do dia saiu do código: no Tier V, os tiros
  ficam rosa. No mesmo dia, o ROBER voltou depois de 13 dias e entrou no top 10 de pilotos às 13:37 — **duas horas e
  meia antes de o story das 16:00 ir ao ar dizendo que o sarrafo do top 10 era 13.311** (já era 14.007). O roteiro é
  escrito à 01:00 e o story sai 15 horas depois: número que muda durante o dia vai com a hora da leitura ou como fato
  fechado (regra nova no passo 5c.b da ROTINA). No alcance, a S41 está fraca nos dois formatos: o ranking narrado pela
  Estela (05/10) fechou em **14** e o reel de dados de 06/10 em **13** (~36–38 h), os dois abaixo da mediana do slot (18
  com 18 posts), e a Estela de 07/10 tinha 3 com ~12 h; os stories caíram de 9–15 views para 7 e 5. Custo: o story com a
  voz a **1,1x** (51 palavras em 15,3 s) custou 6 créditos com o look, contra 8–9 dos de ~24 s — nesse ritmo, os 226 de
  hoje cobrem os 20 stories e os 7 reels econômicos até a renovação (~190), acima da guarda de 30. À tarde, o story das
  16:00 ficou em `error` no Buffer — o mesmo "unknown error" do reel de 05/10, que tinha saído — e, desta vez, **não saiu**:
  o Guilherme avisou às 17:34 e ele foi republicado às 17:36. O status `error` sozinho não diz se o post foi ao ar; quem
  diz é o Instagram (ou um post via network no Buffer), e a rodada da 01:00 só vê o erro no dia seguinte.
- 2026-10-07 · **O 1º nick novo em 11 dias chegou numa terça às 21:13 — e o "Estela > dados" da S40 não fechou.** KAL-EL
  estreou em 06/10 com **13.154 pontos** (Tier III, 2min56): o 45º piloto, o 11º da lista de pilotos (a 157 do top 10) e o
  1º nick novo desde o XXXX (25/09), no 9º dia do pedido "põe o nick". Chegou quatro horas depois de o ranking da semana
  esvaziar (a última partida do GUI saiu da janela de 7 dias às 16:52), virou o 1º sozinho — e a partida saiu à noite, fora da
  faixa das 14h às 17h em que o jogo costuma acontecer. Nada liga a estreia a um post, mas nick novo é uma das duas métricas da
  leitura de 26/10 — e virou o reel da Estela do dia, com as boas-vindas pelo nick. No alcance, o reel de mecânica de
  04/10 ("A chuva acelera", dados) fechou em **122** com ~39 h, o 2º maior da série das 13:00 (mediana 25 com 16 posts),
  acima das duas Estelas da S40 (29 e 70): a leitura de 05/10 ("rosto e voz distribuem mais") fica como hipótese fraca, e
  a variância segue maior que qualquer efeito de formato. O ranking narrado pela Estela em 05/10, que o Buffer marcou como
  erro, reapareceu como post "via network", com **14 de alcance e 23 views com ~15 h** (tempo médio 8,7 s de 32,9 s),
  contra 68 da Estela de 02/10 na mesma idade — o 1º dos três vídeos dela na S41 começou fraco. Operação: um post em
  `error` que saiu de verdade aparece depois no Buffer como post via network, com `sentAt` e métricas — a prova de
  publicação sem depender do Instagram (nota no passo 2 da ROTINA).
- 2026-10-05 · **Leitura da semana S40: nos dois pares do mesmo slot, a Estela alcançou 3 a 5× o reel de dados.** A estreia
  (29/09) fechou em 29 contra 6 do reel de dados de 30/09 (~43–44 h); a Estela de 02/10 fechou em **70** (~41 h), o maior
  alcance de um post automático desde 22/09, e o reel de dados de 03/10 tinha 21 com ~17 h, quando ela tinha 68 (o final
  dele sai em 06/10). Dois pares numa série que vai de 2 a 135 (mediana agora 21) não fecham regra, mas a direção é a
  mesma do reel que o Guilherme publicou à mão em 30/09 (82): rosto e voz distribuem mais que arte de dados. A S41 testa se
  três vídeos dela por semana somam ou cansam, começando pelo ranking de segunda narrado por ela. No story, o formato
  completo de 03/10 (7 cortes e trilha) fechou em 13 views e 10 de alcance, dentro da faixa dos de take único (15, 11, 9 e
  11 views): num caso só, nada que justifique o custo nos stories. No jogo, a semana 40 teve 18 partidas, o recorde do
  GUI e **nenhum nick novo em 8 dias de pedido** "põe o nick" (44 pilotos). **Orçamento**: o saldo da HeyGen abriu em 286,
  115 abaixo do deixado em 04/10 — o gasto coincide com uma sessão do Video Agent aberta no app em 04/10, fora da rotina —;
  com a reserva da ficha em 310, o reel de hoje saiu no modo econômico e, no ritmo atual, os vídeos dela param pela guarda
  de 30 por volta de 24–25/10, antes da renovação (28/10).

Anteriores em [`APRENDIZADOS-2026-10.md`](APRENDIZADOS-2026-10.md) (outubro, a partir de 01/10),
[`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) (14 a 17/09, 23 a 30/09) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
