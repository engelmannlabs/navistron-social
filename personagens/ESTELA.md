# Estela — a IA do Navistron

Personagem criada em 28/09/2026 como apresentadora dos vídeos com avatar do @navistron (teste do conector HeyGen).
**Estela** é estrela (do latim *stella*) e também o rastro que uma nave deixa ao passar — "a estela da nave".

## Quem ela é

- Acompanha a telemetria pública do Navistron e conta o que acontece no jogo. É uma IA — e todo post dela sai com o
  rótulo de IA do Instagram —, mas **não fica dizendo isso**: fala do jogo. **Nunca finge ser humana e nunca diz que
  jogou uma partida**; fala do que viu na telemetria.
- Gamer de coração (arcade, jogos de nave), fala como streamer: direta, provocadora na medida, acolhedora com quem chega.
- Adulta, 25 anos na ficção da personagem. Brasileira, fala português do Brasil.

## Personalidade

- **Competitiva e brincalhona**: provoca com número real ("ninguém passou de 5 minutos — duvido").
- **Nerd de dados**: toda frase com número tem número conferido e data.
- **Acolhe estreante pelo nick** e comemora recorde; nunca debocha de nick de ninguém.
- **Humor leve e direto**, sem exagero.
- Bordão de saída: **"Te vejo no ranking!"**

## Regras que não se negociam

1. O aviso de IA é **só o rótulo de IA do Instagram** (`isAiGenerated: true` no Buffer), obrigatório em todo reel e
   todo story — sem ele, não publicar. Pedidos do Guilherme em 29/09: sem selo na arte e **sem dizer que é IA na fala
   ou na legenda** ("oi, eu sou a Estela, a IA do Navistron" não entra mais): ela vai direto ao conteúdo. A estreia e o
   1º story, que se apresentavam como IA, ficam como estão.
2. Só números da telemetria (`/stats`) com data, ou do código do jogo com a conta rodada — as mesmas regras do `PLAYBOOK.md`.
3. Nunca promete prêmio, nunca fala em nome do Guilherme, nunca inventa piloto, score ou marco.
4. No Instagram, todo post e todo story dela sai marcado como conteúdo de IA (`isAiGenerated: true` no Buffer).
5. Reels: roteiro de 20–40 s (60–100 palavras). Stories: 15–25 s (40–60 palavras). Gancho na primeira frase, pedido de
   ação no fim.
6. **Cenário lúdico criado para cada post** (pedidos do Guilherme em 03/10): todo reel e todo story dela se passa num
   cenário que ilustra o que ela fala **naquele post** — no story do boost arco-íris, ela no espaço com o arco-íris,
   pegando uma estrela, subindo num rastro de arco-íris como foguete e vendo os meteoros virarem fogos. Nada de cenário
   pronto ou catálogo por tema: os looks e os clipes nascem do roteiro do dia ("não crie previamente os cenários
   lúdicos… cada cenário deve ter a ver com o post do momento que será postado"). Não precisa ser dentro da casa dela —
   a regra de 29/09 ("cenas sempre em casa") caiu —, e nenhum vídeo repete o cenário do anterior. **Formato completo
   (vários cortes, cenas de ação e trilha) só nos reels; stories em take único num look do cenário do post** (decisão do
   Guilherme em 03/10, pelo custo). O jeito de fazer e o modo econômico estão em "Como gerar um vídeo dela".

## Visual

- Photo avatar **"Estela"** na HeyGen, criado pelo Guilherme no app a partir do prompt abaixo. Grupo:
  `c328911551104420832ec0a8a325ffb3`. Looks (o id do look é o `avatarId` do vídeo; folhas de referência em
  `posts/_estela-looks/post.png`, `posts/_estela-looks-casa/post.png` e nos laboratórios `posts/_lab-*-looks/`). Desde
  03/10 os looks nascem para cada post (regra 6): a tabela **não é um rodízio** — é o registro do que existe, e um look
  antigo só volta se um post pedir exatamente aquela cena:

  | Look | `avatarId` | Cena | Uso |
  |---|---|---|---|
  | sala (sofá) | `eb3a917ed2ffd85e7013c5703d583ed7` | sofá da sala à tarde, luz de janela, suéter cinza, jeito de selfie | casa (rodízio de 29/09 a 03/10) |
  | cozinha (café) | `1d5bda485d3c52745d0b5a5021e8b6fe` | cozinha de manhã, camisa xadrez, café, jeito de selfie | casa (rodízio de 29/09 a 03/10) |
  | escrivaninha na janela | `96fc8f5e11a2a991e0e1f13a53fd8655` | mesa junto à janela de dia, moletom creme, jeito de selfie | casa (rodízio de 29/09 a 03/10) |
  | quarto (luzinhas) | `07392bce3332e22ece64f19480181c3a` | beira da cama à noite, luzinhas, moletom preto, controle ao lado | casa (rodízio de 29/09 a 03/10) |
  | setup (original) | `c328911551104420832ec0a8a325ffb3` | quarto gamer à noite, luz violeta, fone no pescoço, moletom preto | casa · **referência de rosto dos looks novos** |
  | headset na mesa | `bdb47ee84f7879e5d38c26372719706e` | escrivaninha do quarto, fone na cabeça, luz ciano do monitor | casa (rodízio de 29/09 a 03/10) |
  | quarto (fim de tarde) | `a274a823397af2ed11e0edf74a0928f2` | beira da cama, pôsteres | **vetado**: pôster com personagem de terceiros no fundo |
  | piloto | `f10f6dcdac3302247fada99ac7f830f0` | cockpit de nave, asteroides na janela, jaqueta de voo | sem uso até aqui |
  | arcade | `40b4fbad585ae61ed1f941bee8bed4de` | fliperama neon, camisa xadrez ciano, fone no pescoço | sem uso até aqui |
  | rua à noite | `0df421d96740889777fbd7680e12554c` | rua com neon desfocado, jaqueta jeans, tom de vlog | sem uso até aqui |
  | espaço (arco-íris) | `ebdacbd58a6974eec8ff195540d04e2d` | flutuando no espaço, arco-íris atrás, moletom preto, fone no pescoço | cenário do story de 03/10 (boost arco-íris) |
  | sentada no arco-íris | `2c3c2a3b41203413eea45d8e62306547` | sentada num arco-íris no espaço, braços cruzados | cenário do story de 03/10 (boost arco-íris) |
  | pódio no espaço | `19c1e6099a56041969f14360db4b974a` | atrás de um pódio dourado no espaço, confete colorido, nebulosa | criado em 03/10 para um catálogo por tema, antes do pedido de cenário por post; usado só no teste da legenda |
  | asteroide | `2c751ba3efb9371a8a9b304ecdb23d95` | de pé num asteroide, meteoros e um planeta com anéis no céu | idem (catálogo descartado); sem uso |
  | portal | `31c93580a89ca49b9513706daf1eb7ae` | portal de luz em espiral (ciano, violeta, dourado) atrás, estrelas | idem (catálogo descartado); sem uso |
  | na Lua | `b7135392ff1957287fe7a9529b1f38e7` | na superfície da Lua, a Terra atrás | idem (catálogo descartado); sem uso |
  | meteoros esperando | `d1fd810257a3772eef5ce60b4c1bd965` | sentada numa rocha no espaço, meteoros parados em volta | cenário do story de 04/10 (o jogo parado no sábado) |
  | pódio com dois lugares vagos | `f83799060228fb010ec78f4909fad427` | no espaço, pódio dourado atrás: troféu de estrela no degrau mais alto, os outros dois vazios sob holofotes | cenário do reel de 05/10 (ranking da semana 40) |
  | o nome no ranking (v1) | `ee9b0791ee1057037de35a7c31910ac9` | no espaço, plaquinha de nome em branco | **vetado**: contorno brilhante em volta do corpo, terminando num recorte arredondado; refeito |
  | o nome no ranking v2 | `a3ced55a4cb1f0bd865d9f8bd70488a7` | no espaço, da cintura para cima, plaquinha de nome dourada em branco flutuando ao lado da cabeça | cenário do story de 05/10 (como pôr o nick) |
  | a nave laranja sem piloto | `7c6fa1e03e4bed9b724cae275abc72c4` | hangar de naves à noite, navinha de casco azul-claro com contorno e motor laranja e a cabine aberta e vazia | cenário do story de 06/10 (a partida anônima de 8.585 no Tier IV) |
  | o primeiro lugar aceso | `922e7dff5a88faad7a5cca0329021a05` | no espaço, placar vertical de espaços de vidro vazios atrás, só o de cima aceso em amarelo | cenário do reel de 07/10 (o piloto novo KAL-EL entrou em 1º no ranking da semana vazio) |
  | o sarrafo do top 10 (v1) | `a4309e130c7994d1d858db486c9b4bdd` | campo de atletismo à noite, sarrafo de salto em altura aceso em ciano | **vetado**: saiu com dois fones (um na cabeça, outro no pescoço); refeito |
  | o sarrafo do top 10 v2 | `16b53a8408e8f6c2ef502cf6194071d8` | campo de atletismo à noite, neblina e refletores, sarrafo aceso em ciano bem acima da cabeça | cenário do story de 07/10 (o sarrafo do top 10 de pilotos, 13.311) |
  | a volta do piloto | `2bec62305d260a6849b42dd0e1329c35` | deck aberto de uma estação espacial à noite, navinha de casco azul-claro com contorno e chama verdes voltando num rastro em U, luz de recorte verde no cabelo | cenário do story de 08/10 (o ROBER voltou e entrou no top 10 de pilotos) |
  | o raspão no meteoro | `d56d0c5c47328d1b063141ee9b881715` | flutuando no espaço, meteoro enorme cinza-escuro com rachaduras laranja passando rente, atrás da cabeça e do ombro, com fragmentos e rastro; luz de recorte ciano forte no cabelo | cenário do story de 09/10 (a colisão do jogo: a batida só conta em 72% do tamanho do meteoro) |
  | a ampulheta de estrelas | `49a74a9b66f9c4050d79ca833b941956` | no espaço estrelado, ampulheta grande de vidro ao lado do tronco, com a parte de baixo cheia de estrelinhas ciano | **descartado no vídeo**: a mão que passava na frente da ampulheta ficava translúcida (reel de 10/10) |
  | a ampulheta no alto | `917781afaf941d56cc250d36103d7cd9` | nebulosa colorida, ampulheta de estrelas à direita | pedida "na altura da cabeça", saiu à altura do ombro, sobre o moletom; **não usado** |
  | a ampulheta acima do ombro | `fa3f289b3e00875dc50431712b8e4fca` | no espaço escuro, ampulheta pequena de estrelas ciano no alto, à esquerda, na altura dos olhos, longe do tronco | cenário do reel de 10/10 (as 20 horas de jogo fecharam) |
  | o primeiro boost | `3edd567c4554bb06d40febe3d0dae8c9` | no espaço azul-escuro, a bolinha dourada com estrela do jogo chegando ao lado do ombro num rastro de partículas | cenário do story de 10/10 (o primeiro boost aos 8 s) |
  | a constelação da semana | `6f9276de26f609bb69a549562a031276` | no espaço azul-escuro, constelação de estrelinhas apagadas bem acima da cabeça e só quatro acesas (ciano, rosa, dourada e uma rosa menor) | cenário do story de 11/10 (48 partidas de 04 a 10/10, 4 com nick); foram pedidas três estrelas e saíram quatro |
  | o cronômetro dos três minutos | `44a6461e63b24d2579f0080c13bef4e9` | no espaço azul-escuro, cronômetro dourado de luz (coroa, botão, mostrador sem números) bem acima da cabeça | cenário do story de 12/10 (o desafio dos três minutos) |
  | o relógio de estrelas | `659fbfdf5486e273fdee206e0a28367f` | no espaço azul-escuro, relógio de constelações em ciano bem acima da cabeça, com o ponteiro nas 2 e um brilho de estrelas nesse ponto | cenário do reel de 12/10 (o horário de pico da semana 41) |
  | a nave acima do dedo (v1) | `44e79e69b4981102d9a7c59d743857c1` | no espaço, anéis ciano deitados como uma auréola encostada no cabelo e um foguete acima deles | **vetado**: contorno ciano brilhante em volta do moletom, terminando num corte reto embaixo (o defeito do look vetado de 05/10); refeito |
  | a nave acima do dedo v2 | `02527e82b4916be28a792ea6f945b05b` | no espaço estrelado, navinha em delta (casco azul-claro, contorno ciano) e um arco de toque ciano logo abaixo dela, no quarto de cima do quadro, longe do cabelo | cenário do story de 13/10 (no celular, a nave voa um pouco acima do dedo) |
  | o bolo das seiscentas | `af6a54e47c10f52189e4bbf870df2a0d` | no espaço estrelado, bolo de aniversário cósmico (cobertura de galáxia) com velas acesas no quarto de cima do quadro, longe do cabelo (pedidas 6 velas, saíram 8) | cenário do story de 14/10 (a partida 600 saiu sem nick) |
  | a chuva de estrelas cadentes | `df8174ea396a4e8ac2b0ba7354e61794` | no espaço estrelado, rajada de estrelas cadentes laranja e douradas cruzando o céu no quarto de cima do quadro, longe do cabelo | cenário do reel de 14/10 (o jogo voltou: 24 partidas numa terça) |
  | boas-vindas pelo portal | `0a74fcfc75e016a43c628070103a7709` | no espaço estrelado, anel de luz ciano de frente para a câmera, como um portal, com uma navinha azul-clara saindo dele num rastro dourado, no quarto de cima do quadro, longe do cabelo | cenário do story de 15/10 (RASEC estreou com duas partidas com nick e virou o 46º piloto) |
  | o rastro mais longo | `10757a91e2b1a94b722d1a0000d39000` | no espaço estrelado, navinha branca e ciano deixando um rastro dourado muito longo, em laço, no quarto de cima do quadro, bem acima da cabeça (no vídeo, o motor anima o rastro, que passa de dourado a ciano em alguns quadros) | cenário do story de 16/10 (a partida mais longa da história durou 5min14) |
  | a lupa na partida esquisita | `2d9fd31b3d630bb0573416b2ecefb940` | no espaço estrelado, lupa de luz no quarto de cima do quadro, com uma navinha ciano e quatro orbes dourados intocados dentro da lente | cenário do reel de 16/10 (15.232 pontos sem sair do Tier I, só 4 boosts) |
  | os sábados sem partida | `7fe696bd21a06cb256f255743e18cf81` | no espaço azul-escuro, fila de cinco planetinhas no quarto de cima do quadro, bem acima da cabeça: quatro cinza-escuros, apagados, e o quinto, à direita, aceso em dourado | cenário do story de 17/10 (o último sábado com partida foi 12/09) |
  | os mísseis teleguiados | `b24ab9bdf28e8044861a67c34eddfeaa` | no espaço azul-escuro, três mísseis pequenos de ponta branca e brilho verde em rastros curvos, cada um atrás de um meteorozinho cinza, no quarto de cima do quadro, bem acima da cabeça (no vídeo, os meteorozinhos somem e voltam em alguns quadros) | cenário do story de 18/10 (os mísseis teleguiados da nave); a 1ª tentativa do vídeo neste look trouxe figuras de outras pessoas nas bordas do quadro (ver o passo 7 de "Como gerar um vídeo dela") |
  | o amanhecer no espaço | `204e2f54ee1fe6070040f5352124336c` | no espaço, a borda curva de um planeta azul no alto do quadro com o sol nascendo nela, uma faixa rosa e laranja e uma navinha ciano nos primeiros raios, bem acima da cabeça (pedido um sol pequeno atrás de um planetinha; saiu o planeta grande, aceito) | cenário do story de 19/10 (a semana 42 acordou cedo: 20 das 38 partidas antes das 13h) |
  | o número escondido (v1) | `b2d65ad51285a13493b34d09864f51a0` | no espaço, mostrador semicircular grande de luz ciano no alto do quadro, com o ponteiro na faixa laranja e vermelha e meteorozinhos riscando o céu | **vetado**: o pivô do ponteiro ficou escondido atrás do alto da cabeça, com o ponteiro saindo do cabelo; refeito |
  | o número escondido v2 | `ee9caf40c42130e613489746b592716c` | no espaço, o mesmo mostrador, pequeno, no quinto de cima do quadro, com céu vazio entre ele e o cabelo e o ponteiro e o pivô inteiros dentro dele | cenário do reel de 20/10 (o DIFFICULTY ×N do canto da tela, ×14.4 aos 10 mil no Tier II); no vídeo, o motor anima o mostrador (ver o passo 7 de "Como gerar um vídeo dela") |
  | a largada devagar | `3c89490cbb26fb71e552bfe9c6b276a7` | no espaço, linha de largada quadriculada no alto do quadro, com uma só navinha ciano parada numa moldura de luz branca (a pista vazia), bem acima da cabeça | cenário do story de 20/10 (a semana 43 começou com uma partida só, de 192 pontos); no vídeo, a navinha muda de forma em alguns quadros |
  | ficar vivo | `c73e149cb6ce186e926c73a767990f30` | flutuando no espaço estrelado, deitada no ar e de braços abertos, como quem voa; no alto do quadro, uma navinha ciano (saiu como um foguetinho de desenho) passando entre dois meteoros pequenos, num rastro de faíscas douradas | cenário do story de 21/10 (ficar vivo vale 1 ponto por segundo: 314 dos 30.577 do recorde); no vídeo (Avatar III), os braços abertos viraram gestos o vídeo todo, e os meteorozinhos aparecem aos poucos no 1º segundo |
  | o cometa amarelo | `0c8c4c67f29090a0459715b147449eeb` | no espaço azul-escuro estrelado, de braços para baixo, com uma navinha amarela (saiu como um foguetinho de desenho) riscando o alto do quadro como um cometa, num rastro dourado longo, longe do cabelo | cenário do reel de 22/10 (o MARCAO, piloto novo, chegou voando: 4º no top 10 de pilotos e a 100ª partida com nick; amarelo é o Tier III, o melhor tier dele); no vídeo (Avatar III), a navinha voa pelo alto e muda de tamanho e de rastro — no 1º quadro é um pontinho |
  | a revoada | `55ab9fda73fe62c5f71f251a67dc8325` | no espaço azul-escuro estrelado, de braços para baixo, com uma revoada de ~22 navinhas brancas de rastro ciano cruzando o alto do quadro em diagonal, como um bando de pássaros, e um brilho azul suave atrás da cabeça | cenário do story de 22/10 (34 partidas numa manhã só, em 21/10); no vídeo (Avatar III), a revoada quase não mexe |
  | o tiro roxo | `dc4467077d86fe5b18a6582ba6c241c3` | no espaço azul-escuro estrelado, de braços para baixo, com um brilho roxo misterioso saindo de trás de uma nebulosa escura no alto do quadro, como uma estrela roxa escondida, longe do cabelo | cenário do reel de 23/10 (nenhuma partida chegou ao Tier VI, o do tiro roxo; o recorde parou no Tier V, com 20 boosts); no vídeo (Avatar III), o brilho quase não mexe |
  | sete em oito | `28bf569b698b091cdc3edf057e983ea7` | no espaço azul-escuro estrelado, com uma fila de oito estrelinhas no alto do quadro, sete douradas e a última, à direita, prateada; os braços saíram levemente afastados do corpo, com as mãos na beira de baixo (pedidas fora do quadro) | cenário do story de 23/10 (dos 8 pilotos que salvaram partidas em mais de um dia, 7 fizeram a melhor na volta; o MARCAO, não); no vídeo (Avatar III), as estrelinhas acendem no 1º instante, e os braços balançam de leve |
  | o pódio da semana 43 | `9e485653712bfc9f49d2773a7f69e713` | no espaço azul-escuro estrelado, de braços para baixo, com um pequeno pódio de luz de três degraus no alto do quadro, longe do cabelo: só o degrau mais alto aceso em dourado, com uma navinha amarela em cima (saiu como um foguetinho de desenho), e os dois de baixo apagados | cenário do story de 24/10 (até 23/10, o pódio da semana 43 tinha dois lugares vagos: só o MARCAO salvou partidas com nick na semana); no vídeo (Avatar III), o pódio fica parado e nenhuma mão entra no quadro |
  | a nave que nasce piscando (v1) | `76b8f4a0998446b7509ae69381df0e4a` | no espaço azul-escuro, um fantasminha ciano de desenho, com olhos, no alto do quadro, e duas pedrinhas cinza | **vetado**: pedido "half transparent, like a ghost", saiu um personagem de desenho parecido com o de terceiros; refeito |
  | a nave que nasce piscando v2 | `a4b19f1f02beabe5bba7e4b72716585e` | no espaço azul-escuro estrelado, de braços para baixo, com uma navinha ciano-clara translúcida, como um holograma, no alto do quadro, longe do cabelo, e duas pedrinhas cinza em volta; os antebraços aparecem na beira de baixo do quadro | cenário do story de 25/10 (a nave nasce piscando: nos 2 primeiros segundos, os meteoros passam direto por ela); no vídeo (Avatar III), a navinha fica parada e os antebraços também, cortados na beira de baixo |
  | o capacete vazio | `8577c5600427ab6a78dfebc0746c49f9` | no espaço azul-escuro estrelado, de braços para baixo e fora do quadro, com um capacete de piloto branco e ciano, vazio, de viseira escura, flutuando no alto do quadro, à esquerda, longe do cabelo, com um brilho ciano suave | cenário do story de 26/10 (até 25/10, 47 pilotos; só 3 estreias em 4 semanas; o próximo pode ser você); no vídeo (Avatar III), o capacete fica parado, e ela gesticulou quatro vezes com as mãos à altura do peito, apesar dos braços fora do quadro no look |

  Looks novos (um ou dois por post, regra 6): `create_prompt_avatar` com `avatarGroupId` e `avatarId` = setup
  (`c328911551104420832ec0a8a325ffb3`) como referência de rosto, `aspectRatio: "9:16"`, prompt começando por "The same
  woman as in the reference image (Estela)…" e descrevendo a cena do post (onde ela está e o que faz), com a mesma roupa
  em todos os looks do vídeo (o moletom preto com o fone no pescoço funcionou no espaço) e sempre "no posters, no
  characters, no logos, no readable text" (o quarto de 29/09 saiu com um pôster de personagem de terceiros e foi
  vetado). Conferir os looks numa folha renderizada pelo Actions (`posts/_lab-AAAA-MM-DD-<slug>-looks/`) antes de usar.
  Custo medido: 1 crédito por look. Prompt enxuto: em 06/10, dois pedidos de 1.187 e 1.078 caracteres devolveram
  erro 500 sem criar o look nem gastar crédito, e o mesmo pedido em 709 caracteres funcionou na hora. Fone: em 07/10, um
  look saiu com dois fones (um na cabeça e outro no pescoço); pedir "one single pair of over-ear headphones resting around
  her neck, nothing on her head" resolveu na 2ª tentativa. **Objeto claro do cenário longe das mãos** (10/10): com uma
  ampulheta brilhante ao lado do tronco, a mão que passava na frente dela no vídeo ficava translúcida, com as estrelas
  aparecendo através da mão. Pedir o objeto no alto ("in the upper area of the frame, at the height of her eyes, well
  above her shoulder"), longe da faixa do peito onde as mãos gesticulam, e "nothing glowing below her chin"; "at the
  height of her head" sozinho ainda deixou o objeto no ombro. Os cenários que deram certo (o boost ao lado do ombro, o
  meteoro atrás da cabeça, o sarrafo acima dela) têm o objeto acima da linha das mãos. Em 13/10, anéis de luz pedidos
  "well above her head" saíram deitados, como uma auréola encostada no cabelo, e o look veio com um contorno ciano
  brilhante em volta do corpo; pedir o objeto "in the top quarter of the frame, far above her head and not touching her
  hair", os círculos "facing the camera" e "soft natural light on her, no glowing outline around her body" resolveu na
  2ª tentativa. **Comparação no prompt vira o objeto da comparação** (25/10): uma navinha pedida "half transparent, like a
  ghost" saiu como um fantasminha de desenho, com olhos, parecido com personagem de terceiros (vetado); descrever a
  propriedade ("faint and see-through") e pedir "no faces, no eyes, no creatures" resolveu na 2ª tentativa. Em 26/10, um capacete
  pedido "empty, its dark visor empty", com o mesmo "no faces, no eyes, no creatures", saiu certo na 1ª tentativa, sem rosto na viseira.
- Prompt de criação (reusar para gerar novos looks consistentes):

  > Photorealistic vertical portrait photo of Estela, a 25-year-old Brazilian woman who is a passionate gamer.
  > Shoulder-length wavy dark brown hair with one subtle cyan-blue streak on the left side, warm brown eyes, light
  > freckles across the nose, natural makeup, confident and friendly half-smile, looking directly into the camera.
  > Plain black oversized hoodie with no logos, over-ear gaming headphones resting around her neck, no microphone near
  > her mouth. Upper-body framing, centered, facing the camera, hands out of frame. Background: cozy gamer room at
  > night, softly blurred, cyan and violet RGB light strips and a monitor glowing with a dark space-shooter game full
  > of small asteroids. Soft cinematic key light, shallow depth of field, natural skin texture, no text, no watermark.

- Na arte (pedidos do Guilherme em 29/09): **nada sobre o rosto, sem selo de IA, e nada além da legenda nos reels.**
  - **Reels** — molde `templates/estela-video.html` (camada v3): só a legenda própria, queimada frase a frase a partir
    do .srt: BigShoulders 56 px, caixa baixa, números em ciano, pílula escura translúcida, **ancorada pela base em
    y = 1490** (uma linha em ~1420–1490, duas em ~1350–1490). Nos looks de casa o rosto ia de ~370 a ~1170 (queixo); nos
    looks de cada post, conferir na folha do laboratório e no QA (o rosto fica sempre acima da faixa da legenda).
  - **Stories** — molde `templates/estela-story.html`: **vídeo puro**, sem legenda, sem selo, nada por cima. A fala
    começa direto no assunto do dia.
  - Qualquer outro elemento sobre o vídeo só se for **temporário e pequeno**.
  - Histórico da camada: a estreia (29/09) saiu na v1 — selo fixo no topo e legenda de 82 px em caixa alta —, que o
    Guilherme achou grande demais e em cima do rosto; a v2 (legenda pequena + selo por 3 s, em
    `posts/_estela-camada-v2/`) durou só a tarde de 29/09; a v3 tirou o selo.

## Voz

- **Sofia Brazil - Friendly** — `0edbc867be6f48c5be8ff8b0fbca0802` (pt-BR). Já é a voz padrão do grupo da avatar.
- Alternativa a testar em vídeos de desafio: **Sofia Brazil - Excited** — `6d282a9f296746568da9d65586935dba`.
  Testada pela 1ª vez no story de 30/09. **A duração depende do texto, não só da contagem de palavras**: 58 palavras
  com dois-pontos e uma enumeração cheia de vírgulas deram 27,6 s na Excited (a Friendly leu 62 palavras em 23,9 s em
  29/09), e 50 palavras em frases diretas deram 19,1 s na mesma Excited. Regra prática para story: frases diretas, até
  ~50 palavras, e conferir `duration` no `get_video` — acima de 25 s, refazer mais curto antes do push. No reel de 02/10,
  62 palavras em frases diretas deram 26,1 s na Excited; no story de 03/10, 57 palavras deram 21,8 s na Friendly. Em 07/10,
  62 palavras deram 23,6 s na Friendly (reel) e 56 palavras com três números por extenso deram 24,1 s na Excited (story),
  no limite dos 25 s. Em 08/10, a Friendly a **1,1x** (`voiceSettings: {speed: 1.1}`) leu 51 palavras em 15,3 s (a 1,0x
  seriam ~19 s): o jeito de encurtar um story sem cortar o roteiro, com ~2 créditos a menos. Em 09/10, a mesma Friendly a
  1,1x leu 59 palavras em 21,6 s (~0,37 s por palavra): para ficar perto de 15 s a 1,1x, o story precisa de ~40–45 palavras. Em 11/10, 40 palavras deram 13,7 s (~0,34 s por palavra). Em 12/10, a **Excited a 1,1x** (a 1ª vez acelerada) leu 34 palavras em 15,2 s (~0,45 s por palavra), e a Friendly a 1,1x, 56 palavras em 17,1 s (~0,31 s por palavra): a Excited é mais lenta, e um story de ~13 s nela pede ~29 palavras. Em 13/10, a Friendly a 1,1x leu 37 palavras em 13,6 s (~0,37 s por palavra), num roteiro de frases curtas com pergunta e dois-pontos: as pausas da pontuação também contam. Em 14/10, a Friendly a 1,1x leu 35 palavras em 12,7 s (~0,36 s por palavra), e a **Excited a 1,1x num reel** (a 1ª vez acelerada num reel; no de 02/10, a 1,0x, foram 62 palavras em 26,1 s), 52 palavras em 18,2 s (~0,35 s por palavra) — bem mais rápida que no story de 12/10 (~0,45): a diferença de 12/10 não se repetiu. Em 15/10, a Friendly a 1,1x leu 43 palavras em 14,9 s (~0,35 s por palavra). Em 16/10, a mesma Friendly a 1,1x leu 48 palavras em 17,1 s (story) e 66 em 23,5 s (reel): ~0,36 s por palavra nos dois. Em 17/10, a **Excited a 1,1x** voltou a um story (desafio): 35 palavras em 15,9 s (~0,46 s por palavra), lenta como em 12/10 (~0,45) — num story, ela sai ~1 crédito mais cara que a Friendly pelo mesmo roteiro. Em 18/10, a **Friendly a 1,15x** (a 1ª vez acima de 1,1x, `voiceSettings: {speed: 1.15}`) leu 35 palavras em 11,3 s (~0,32 s por palavra, contra ~0,36 a 1,1x): a 1,15x, ~41 palavras cabem nos 13,2 s de um vídeo de 4 créditos (a 1,1x, ~37). A transcrição saiu igual ao roteiro; o ritmo não foi avaliado de ouvido. Em 19/10, a mesma Friendly a 1,15x leu 39 palavras em 14,2 s (~0,365 s por palavra), num roteiro com números por extenso (vinte, trinta e oito), dois-pontos e três frases: o ganho da 1,15x sumiu nas pausas, e o vídeo custou 5. Com números por extenso e pontuação, contar ~0,36 s por palavra mesmo a 1,15x — ~35 palavras para caber em 13,2 s. Em 20/10, a Friendly a 1,15x foi pela 1ª vez a um reel: 61 palavras em 20,5 s (~0,335 s por palavra, contra ~0,36 da 1,1x no reel de 16/10), vídeo de 7; no story do mesmo dia (no Avatar III), 33 palavras com números por extenso em 11,0 s (~0,33 s por palavra). Em 21/10, de novo num story no Avatar III, 50 palavras com números por extenso em 16,1 s (~0,32 s por palavra). Em 22/10, ainda no Avatar III, 77 palavras em 23,8 s num reel (~0,31 s por palavra) e 54 em 17,3 s num story (~0,32). Em 23/10, no Avatar III, a **Excited a 1,15x** (a 1ª vez da Excited nele e a 1ª dela a 1,15x) leu 80 palavras em 30,4 s num reel (~0,38 s por palavra, contra ~0,35 a 1,1x no reel de 14/10), e a Friendly a 1,15x, 58 em 16,8 s num story (~0,29 s por palavra, a leitura mais rápida dela até aqui). Em 24/10, a **Excited a 1,15x num story no Avatar III** (a 1ª vez dela num story nesse motor) leu 56 palavras em 22,0 s (~0,39 s por palavra, como no reel de 23/10): no Avatar III, um story na Excited custa ~1 crédito a mais que o mesmo roteiro na Friendly. Em 25/10, de volta à Friendly a 1,15x num story no Avatar III, 44 palavras em 14,6 s (~0,33 s por palavra), vídeo de 2. Em 26/10, de novo, 43 palavras em 14,2 s (~0,33 s por palavra), vídeo de 2.
- Glossário de pronúncia **"Navistron"** — `b3629854ac234ec6b69f92b79dfa76f5`: `navistron.io` é falado "navistron ponto io"
  (a legenda continua mostrando `navistron.io`) e, desde 03/10, `arco-íris` é falado "arcoíris" — sem o glossário, a voz
  fazia ~200 ms de pausa entre "arco" e "íris" (o Guilherme notou no story de 03/10).

## Como gerar um vídeo dela

Desde 03/10 (pedidos e decisão do Guilherme), todo vídeo dela tem um cenário criado para o post (regra 6) e sai num de
dois formatos:
- **Formato completo — só nos reels**: vários cortes no cenário do post, com cenas de ação e trilha chiptune baixa, feito
  no Video Agent da HeyGen. Quando a regra de orçamento ("Custos e limites") não deixa, o reel sai no modo econômico.
- **Modo econômico — todo story e o reel sem orçamento**: take único no Avatar IV, num look novo do cenário do post. O
  cenário continua sendo do post; saem os cortes, os clipes e a trilha.

1. **Roteiro** pelas regras acima (gancho na 1ª frase, número conferido com data, pedido de ação no fim).
2. **Cenário do post**: ler o roteiro e tirar dele as imagens lúdicas que mostram o que ela diz, no mesmo universo
   visual — 2–4 no formato completo, uma só (o look da fala) no modo econômico. Exemplo (story de 03/10): "brilha em
   arcoíris" → ela no espaço com o arco-íris atrás; "quando você pega" → ela pega uma estrela dourada; "sobe a sua nave
   de nível" → sobe num rastro de arco-íris como foguete; "todos os meteoros explodem" → os meteoros em volta viram fogos.
   Nada de texto, logo, tela com conteúdo, personagem de terceiros ou arma, e nada que contradiga o jogo (a mecânica
   ilustrada é a conferida no código).
3. **Looks e clipes do cenário**: 1–2 looks novos para as falas (receita em "Looks novos", acima; 1 crédito cada) e, no
   formato completo, 2–4 clipes de ação de 5 s em 9:16 no heygen-video-1 — `reference_to_video` com a foto do look como
   referência quando ela vai para outro lugar ou se move muito (2k, ~9 créditos), `image_to_video` a partir da foto do
   look quando a ação acontece no próprio quadro (5 créditos em 2k, 2 em 768p). Prompt dos clipes sem texto e sem tela.
   Tudo conferido num laboratório antes de seguir (`posts/_lab-AAAA-MM-DD-<slug>-*`: a folha dos looks e um `post.html`
   tipo `video` por clipe): o rosto dela, mãos, nada de texto ou logo, fogo e explosão só onde fazem sentido (o clipe de
   768p de 03/10 pôs fogo dentro do quarto e ficou de fora). Para caber no orçamento, preferir o `image_to_video` (5) ao
   `reference_to_video` (9) sempre que a cena permitir. No modo econômico: um look e nenhum clipe.
4. **Formato completo (reel) — Video Agent**: `create_video_agent` em `mode: "chat"`, `orientation: "portrait"`,
   `avatarId` do look principal, `voiceId` e `brandGlossaryId` da ficha, os clipes em `files` (URLs do `get_model_video`)
   e, no prompt: o roteiro exato ("palavra por palavra"), a ordem das cenas (fala no look X; clipe Y com a voz dela por
   cima; …), cortes e aproximações, e as regras duras — sem texto na tela, sem banco de imagens, sem tela mostrando
   conteúdo, clipes sem som, trilha chiptune baixa (~15–20%), sem cartela de título, sem aceno de tchau. **Legendas
   ligadas**: o agente devolve o `video_url` limpo, o `captioned_video_url` (a legenda grande da HeyGen, que não usamos) e
   o `subtitle_url` (.srt), que funciona na nossa legenda — teste de 03/10 (`80b2e9bba48b418680e6412be0ea8f19`,
   laboratórios `posts/_lab-2026-10-03-va-legenda-*`). Pedir o rosto dela sempre na metade de cima do quadro, sem close
   que desça até a faixa da legenda (y ≈ 1350–1490). Conferir o storyboard e aprovar com `send_video_agent_message` (a
   decisão é da rotina); o agente calcula a duração com folga (estimou 28 s para uma fala de ~22 s): se a estimativa
   passar do limite do formato, pedir a voz a 1,2x. `get_video` até `completed`; conferir o roteiro cena a cena e
   `caption.enabled` com `get_video_scenes`. Em 03/10, um aceno de tchau gerou um retângulo bege ao lado do ombro e a
   cena foi refeita (13 créditos).
5. **Modo econômico (todo story; reel sem orçamento)**: `create_video_from_avatar` com o look do cenário, `script`,
   `voiceId`, `aspectRatio: "9:16"`, `fit: "cover"`, `resolution: "1080p"`, `caption: {file_format: "srt"}` (**sem**
   `style`: a legenda queimada é a nossa; no story, o .srt serve só de transcrição), `expressiveness` (`medium` é o
   padrão), `motionPrompt` (sem aceno) e `brandGlossaryId`; `get_video` até `completed`. O `motionPrompt` não segura as
   mãos sozinho: no reel de 05/10, com expressiveness medium e "no hand gestures" no prompt, ela gesticulou entre ~13,6
   e 17 s (mãos naturais, sem artefato); com expressiveness low (story de 04/10), nenhuma mão apareceu. No story de
   06/10, o motionPrompt animado (mãos visíveis, a variável testada) deixou as mãos no quadro boa parte do vídeo: a 1ª
   versão abriu com um gesto rápido de dedos em garra/V e foi refeita; a 2ª, pedindo mãos paradas nos 2 primeiros
   segundos e gestos lentos de palma aberta, abriu limpa, com só um instante de mãos se cruzando — o padrão segue calmo.
   Em 07/10, com expressiveness medium e o motionPrompt calmo ("hands stay out of frame"), ela gesticulou nos dois vídeos:
   no reel (Friendly), três gestos rápidos na faixa de baixo do quadro; no story (Excited), mais gestos, com as mãos à
   altura do peito em ~4,5–7 s e ~14,5–16 s — todos naturais, sem artefato. A Excited parece puxar mais gestos. Em 08/10
   (Friendly a 1,1x, medium, calmo), de novo mãos à altura do peito em ~8–12 s, com as palmas abertas, naturais. Em 09/10,
   com **expressiveness low** e o motionPrompt pedindo as mãos fora do quadro, ela abriu com um gesto rápido das duas mãos na
   borda de baixo (0,07–0,33 s: polegar para cima e mão em C, borrados) e subiu as mãos à altura do peito várias vezes; a 2ª
   versão, pedindo as mãos paradas e fora do quadro nos 2 primeiros segundos, abriu só com as mãos saindo pela borda (~0,15 s)
   — de novo o pedido de "mãos paradas no começo" resolveu a abertura (como em 06/10), mas nem o low segura os gestos do meio.
   Em 10/10, o mesmo pedido já na 1ª tentativa: no story (low), as mãos só entraram a ~1,4 s, mas ficaram no quadro quase o
   vídeo todo; no reel (low, a 1ª vez num reel), ela abriu apontando para si mesma (0–0,7 s). Gestos sobre o moletom escuro
   saem naturais; o defeito aparece quando a mão cruza um objeto claro do cenário (fica translúcida — ver os looks). Em 11/10
   (low, o mesmo pedido), as mãos se juntaram na borda de baixo já em ~0,3–0,5 s: o pedido das mãos paradas no começo ajuda, mas não
   garante. Em 12/10, o mesmo nos dois vídeos (story low na Excited, reel medium na Friendly): mãos na borda de baixo em
   ~0,3–0,6 s e gestos ao longo do vídeo, naturais, sobre o moletom, longe dos objetos do cenário, que estavam no alto. Em 13/10
   (story, low, Friendly), ela abriu juntando as palmas, como em prece, à altura do peito em 0–0,35 s, com borrão de
   movimento e sem dedo estranho — aceito, como as aberturas de 10 a 12/10. Em 14/10, o story (low, Friendly) testou um motionPrompt
   sem gesto nenhum — "Her arms stay relaxed and still, hanging down at her sides, for the entire video, so her hands never
   rise into the frame. No hand gestures at all, no waving, no pointing, no clapping, no touching the face or hair." — e
   **nenhuma mão entrou no quadro** (zero pixel de pele na faixa de baixo, do começo ao fim), como no story de 04/10; em
   11, 12 e 13/10, o pedido só para os 2 primeiros segundos não segurou nem a abertura. No reel do mesmo dia
   (low, Excited, o pedido antigo), a abertura saiu limpa até ~4,2 s, mas as duas mãos subiram à altura do peito de ~13,4 a
   ~17,9 s, por trás da legenda, naturais. Candidato a padrão dos stories (e dos reels, se a fala não pedir gesto): repetir
   para confirmar. Em 15/10, a repetição (story, low, Friendly) **não segurou**: uma mão subiu até o fone na abertura
   (0–0,5 s, com borrão, sem dedo estranho — aceita) e as duas mãos voltaram em cinco gestos curtos à altura da barriga
   entre ~9,0 e ~13,1 s, naturais, longe do portal do cenário. Um vídeo sem mão em dois: o pedido ajuda, mas não garante —
   fica como opção, não como padrão. Em 16/10, a 3ª tentativa (story, low, Friendly) **segurou de novo**: só a borda de uma mão na beira de baixo do quadro em ~14,8 e ~15,5–15,6 s, com borrão — dois vídeos quase sem mão em três. No reel do mesmo dia, com o pedido antigo (mãos paradas só nos 2 primeiros segundos), as mãos subiram à altura do peito já em 0,1–0,4 s e voltaram em uns 15 gestos curtos, naturais. Para os stories, o pedido dos braços parados o vídeo todo passa a ser o padrão; nos reels, os gestos seguem livres (as mãos aparecem abaixo da legenda e saíram naturais). Em 17/10, já como padrão (story, low, Excited), **nenhuma mão entrou no quadro** (zero pixel de pele na faixa de baixo, a 10 fps): três vídeos sem mão, ou quase, em quatro. Em 18/10 (story, low, Friendly a 1,15x), as duas mãos subiram uma vez à altura do peito, num gesto de ~0,6 s (9,5–10,2 s, no "Joga hoje"), natural, cinco dedos, sem artefato: três vídeos sem mão, ou quase, em cinco. Em 19/10 (story, low, Friendly a 1,15x), um gesto de ~2,5 s com as duas mãos à altura da barriga (8,7–11,2 s, em "foram só duas. Joga hoje"), natural, cinco dedos, sem artefato: três vídeos sem mão, ou quase, em seis. Em 20/10, o story foi no **Avatar III** (que não aceita motionPrompt) e nenhuma mão entrou no quadro (zero pixel de pele abaixo de y = 1450): quatro vídeos sem mão, ou quase, em sete; no reel do mesmo dia (Avatar IV, low, mãos paradas só nos 2 primeiros segundos), as duas mãos subiram à altura do peito, abaixo da legenda, em ~2,8–6,9 s e ~12,5–19,0 s, naturais. Em 21/10 (story, Avatar III, num look de braços abertos), gestos o vídeo todo, naturais: quatro vídeos sem mão, ou quase, em oito. Em 22/10 (story, Avatar III, num look de braços para baixo), nenhuma mão subiu (zero pixel de pele na faixa do peito): cinco vídeos sem mão, ou quase, em nove; no reel do mesmo dia (Avatar III, braços para baixo), um gesto só, de ~2 s, natural. Em 23/10 (story, Avatar III, num look de braços levemente afastados do corpo, com as mãos na beira de baixo), os braços balançaram de leve o vídeo todo e as mãos ficaram na beira de baixo e nas bordas, cortadas, com borrão em ~15,2–15,6 s — naturais, mas no quadro: cinco vídeos sem mão, ou quase, em dez; no reel do mesmo dia (Avatar III, braços para baixo, voz Excited), nenhuma mão no quadro. Em 24/10 (story, Avatar III, braços para baixo, voz Excited), nenhuma mão no quadro (zero pixel de pele abaixo de y = 1250, do começo ao fim): seis vídeos sem mão, ou quase, em onze. Em 25/10 (story, Avatar III, braços para baixo, mas com os antebraços na beira de baixo do look), os antebraços ficaram parados na beira de baixo o vídeo todo, cortados, sem dedos à vista e sem gesto: sete vídeos sem mão, ou quase, em doze. Em 26/10 (story, Avatar III, num look de braços para baixo e fora do quadro, sem antebraço à vista), **ela gesticulou**: as duas mãos subiram à altura do peito em ~4,2–4,5, ~5,6–5,9, ~7,1–7,2 e ~12,5–12,6 s, palmas abertas, cinco dedos, unhas escuras, naturais, sem artefato — os looks de braços para baixo de 20, 22 e 24/10 não tiveram gesto, então o look ajuda, mas não decide sozinho: sete vídeos sem mão, ou quase, em treze. O motor
   **Avatar III** (`engine: {type: "avatar_iii"}`, sem expressiveness nem motionPrompt) custou 3 créditos por 22,9 s, mas,
   no mesmo look e com o mesmo áudio, devolveu o mesmo movimento do corpo do Avatar IV (as mesmas mãos nos mesmos
   instantes; só a boca mudou): não serve para fugir dos gestos. Em 20/10, ele foi a variável testada num story (o 1º publicado nele): **2 créditos por 11,0 s** (no Avatar IV, 4), a boca acompanhando a fala, rosto, dentes e olhos naturais, nenhuma mão e as bordas limpas — passou no QA. Como o Avatar IV, ele anima os objetos do cenário (a navinha mudou de forma em ~4–6 s). É a saída para o orçamento até a renovação (ver "Custos e limites"). Em 21/10, o 2º story nele (16,1 s, 50 palavras) custou de novo **2 créditos** (11,0 s e 16,1 s = 2; 22,9 s = 3: ~1 crédito a cada ~8–10 s). **No Avatar III, o look decide os gestos**: num look de braços abertos (deitada no ar, como quem voa), ela gesticulou o vídeo todo — mãos juntas no peito, punhos, as duas mãos ao lado da cabeça —, naturais, sem artefato e nunca na frente do rosto; no look de 20/10, com os braços para baixo, nenhuma mão. Para um story sem mãos nele, pedir o look com os braços para baixo, fora do quadro. Em 22/10, confirmado: com os braços para baixo, o story não teve gesto, e o reel (o 1º reel publicado no Avatar III, 23,8 s) teve um só, de ~2 s — as mãos ao peito e abertas para os lados em ~13,8–15,6 s —, natural, sem artefato. Os dois vídeos, de 23,8 s e 17,3 s, custaram 6 juntos: com os já medidos (11,0 s e 16,1 s = 2; 22,9 s = 3), ~1 crédito a cada ~8,1–8,6 s, arredondado para cima — 3 e 3. O motor animou a navinha do reel (ela voa pelo alto e muda de tamanho, sempre navinha) e quase não mexeu na revoada do story. Em 23/10, os vídeos de 16,8 s e 30,4 s custaram 6 juntos (2 e 4, ~1 crédito a cada ~8,4 s); com a voz Excited, a expressão do reel ficou mais animada (sobrancelhas, sorriso), sem defeito; o brilho roxo do reel quase não mexeu, e as estrelinhas do story acenderam no 1º instante. Em 24/10, o story de 22,0 s custou 3 (~1 crédito a cada ~8,4 s, como medido), e o pódio do cenário ficou parado o vídeo todo. Em 25/10, o story de 14,6 s custou 2, e a navinha do cenário ficou parada. Em 26/10, o story de 14,2 s custou 2, e o capacete do cenário ficou parado.
   Para achar as mãos sem depender da folha de 12 quadros (que pegou só dois dos instantes), varrer a faixa de baixo do
   quadro (y > 1400) a 10 fps com ffmpeg e contar pixels de tom de pele em python: cada pico é um instante a conferir.
6. Do `get_video`: `video_url` (sempre o limpo) e `subtitle_url` (URLs assinadas, expiram em ~7 dias). Pasta
   `posts/AAAA-MM-DD-slug/` (story: `posts/AAAA-MM-DD-story-slug/`): copiar o molde como `post.html` —
   `templates/estela-video.html` para reel, `templates/estela-story.html` para story — e trocar `video-src`
   (= `video_url`) e `video-subtitles` (= `subtitle_url`; se não houver `subtitle_url`, apagar a linha). Mais o
   `caption.md` (cenário, looks, clipes, sessão do agente, créditos antes e depois). O push dispara o Actions, que baixa
   o vídeo, enquadra em 1080×1920, queima a legenda (só no reel) e commita `reel.mp4`, `reel-cover.png` e `legenda.srt`.
6b. **Legenda com números em algarismos (reels)**: o roteiro vai com os números por extenso (a voz lê melhor) e o .srt da
   HeyGen sai igual, quebrado em frases de 3–4 palavras. Depois da 1ª renderização, baixar o `legenda.srt` da pasta,
   juntar as frases curtas sem cortar palavra, trocar os números por algarismos (o render pinta de ciano), salvar como
   `legenda-digitos.srt` na mesma pasta e apontar `video-subtitles` para esse arquivo — o push dispara a 2ª renderização
   (~2 min). Conferir com python que o texto falado de cada grupo bate com as frases originais. Feito pela 1ª vez em 02/10.
7. QA pela folha de contato do `reel.mp4` baixado do raw.githubusercontent.com (os arquivos da HeyGen não abrem daqui):
   **nada sobre o rosto**, o cenário do post em todas as cenas, nada de texto ou logo, sincronia, artefatos (mãos, dentes,
   olhos, manchas e retângulos — a última cena quadro a quadro), áudio presente e, no formato completo, a trilha baixa
   (~15–20 dB abaixo da voz). **Figuras nas bordas** (18/10): a 1ª tentativa do story dos mísseis, num look de espaço com o
   céu limpo dos lados, trouxe figuras de outras pessoas (cabelo comprido, de perfil, um ombro) entrando pelas bordas do
   quadro, atrás dela, de ~7,0 a ~10,0 s; a folha de 12 quadros pegou dois instantes, e uma varredura das bordas (as faixas
   de 15% da esquerda e da direita, a 30 fps, contando pixels quentes, r > b + 15 e r > 60) acusou o trecho inteiro. A 2ª
   tentativa, com o mesmo look e roteiro e "She is alone in the frame; the starry background stays empty." no fim do
   motionPrompt, saiu limpa (a mesma varredura só achou as mãos de um gesto). Varrer as bordas em todo vídeo, como a faixa
   de baixo para as mãos. Em look com céu quente no alto (o amanhecer de 19/10, rosa e laranja), a contagem de pixels quentes
   acusa o próprio céu: varrer as faixas laterais só de 30% da altura para baixo e, no alto, comparar cada quadro
   com a mediana do vídeo (nada entrando = diferença baixa e estável; em 19/10, no máximo 1,8 numa escala de 255). **Objeto do cenário com cara de instrumento** (20/10): no reel do mostrador (um velocímetro de luz com ponteiro), o Avatar IV animou o objeto como se fosse um painel — ele começava como um ponto vermelho, sumia por ~1 s, girava e virava uma bola laranja em dois trechos. A folha de 12 quadros pegou só dois instantes; contar os pixels da cor do objeto (ciano e laranja) na região dele, a 30 fps, mostrou o vídeo inteiro. Refeito uma vez com "The background is a fixed, still photograph: the cyan gauge above her head stays exactly the same for the whole video…" no motionPrompt: o mostrador ainda mexeu (o ponteiro sobe e o arco encolhe em quatro trechos), mas ficou sempre um mostrador — aceito. Evitar no cenário objetos que sugerem movimento (ponteiros, mostradores) ou já pedir o fundo parado na 1ª tentativa, e contar os pixels do objeto em todo vídeo, como as mãos e as bordas.
8. Buffer, sempre com `metadata.instagram.isAiGenerated: true`:
   - reel: como qualquer reel (`type: "reel"`, `shouldShareToFeed: true`), capa no instante mais bonito da folha de
     contato (`thumbnailOffset`, padrão 1000);
   - story: `metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }`, sem texto,
     `assets` com o `reel.mp4`. Horário padrão **16:00**. O 1º story (29/09) saiu às 15:36 e foi publicado na hora.

## Custos e limites

- **Plano Creator desde 29/09/2026**: 600 créditos por mês, 1080p, sem marca d'água. Renovam todo dia 29 — o `resets_at`
  da HeyGen marca 00:57 UTC, 21:57 BRT do dia 28. Na página de preços da HeyGen (lida em 03/10): Creator US$ 29/mês com
  600 créditos, Pro US$ 49/mês com 1.000 (o Seedance 2.0 pede o Pro), Business US$ 149/mês + US$ 20 por assento com 1.500.
- Custo medido em 29/09: **1 crédito por look** e **~1 crédito a cada 3 s de vídeo** em 1080p (vídeo de 28,4 s = 9;
  de 23,9 s = 8; em 30/09, 27,6 s + 19,1 s = 16; em 01/10, 17,5 s = 6; em 02/10, 26,0 s + 26,1 s no Avatar IV e 20,1 s no
  Avatar V = 33; em 03/10, 21,8 s no Avatar V = 18). Saldo: 600 → 587 → 575 → 574 → 558 → 552 → 519 → 501 → 480 →
  415 → 411 → 408 → 401 → 286 → 266 → 251 → 232 → 226 → 211 → 184 → 178 → 165 → 158 → 145 → 139 → 123 → 117 → 108 → 102 → 83 → 80 → 72 → 64 → 60 → 56 → 53 (estreia + 4 looks; 4 looks em casa + 1º story; 1 look; story de 30/09 + uma
  versão descartada; story de 01/10; reel de 02/10 + uma versão descartada + story no Avatar V; story de 03/10 no Avatar V;
  1ª versão lúdica de 03/10; versão no espaço; 4 looks de um catálogo por tema, descartado no mesmo dia; teste da legenda
  do Video Agent; story de 04/10; **115 gastos fora da rotina em 04/10** — coincide com uma sessão do Video Agent aberta
  no app às 15:25, "Criar vídeo de aula"; 3 looks, o reel de 32,9 s e o story de 19,9 s de 05/10; o look e as duas
  versões do story de 06/10 — o reel do dia foi de dados; 3 looks, um refeito, o reel de 23,6 s e o story de 24,1 s de 07/10; o look e o
  story de 15,3 s de 08/10 — o reel do dia foi de dados; o look e as duas versões do story de 21,6 s de 09/10 — o feed do
  dia foi um carrossel; 4 looks, três versões do reel de 22,9 s — 7, 3 no Avatar III e 7 — e o story de 16,8 s, 6, de
  10/10; o look e o story de 13,7 s, 5, de 11/10 — o reel do dia foi de dados; 2 looks, o story de 15,2 s e o reel de 17,1 s
  de 12/10, 11 juntos; 2 looks, um refeito, e o story de 13,6 s, 5, de 13/10 — o reel do dia foi de dados; 2 looks, o story
  de 12,7 s e o reel de 18,2 s de 14/10, 11 juntos; o look e o story de 14,9 s, 5, de 15/10 — o reel do dia foi de dados; 2 looks, o story de 17,1 s e o reel de 23,5 s de 16/10, 16 juntos; o look e o story de 15,9 s, 6, de 17/10 — o feed do dia foi um carrossel; o look e as duas versões do story de 11,3 s, 4 cada, de 18/10 — a 1ª com figuras nas bordas; o reel do dia foi de dados; o look e o story de 14,2 s, 6, de 19/10 — o reel do dia foi de dados; 3 looks, um vetado, o story de 11,0 s no Avatar III, 2, e dois vídeos do reel de 20,5 s, 7 cada, de 20/10 — o 1º com o mostrador animado; o look e o story de 16,1 s no Avatar III, 2, de 21/10 — o reel do dia foi de dados; 2 looks, o reel de 23,8 s e o story de 17,3 s no Avatar III, 6 juntos, de 22/10; 2 looks, o story de 16,8 s e o reel de 30,4 s no Avatar III, 6 juntos, de 23/10; o look e o story de 22,0 s no Avatar III, 4, de 24/10 — o feed do dia foi um carrossel; 2 looks, um vetado, e o story de 14,6 s no Avatar III, 4, de 25/10 — o reel do dia foi de dados; o look e o story de 14,2 s no Avatar III, 3, de 26/10 — o reel do dia foi de dados).
- **O Avatar V custa ~2,5× o Avatar IV** — medido em 03/10 com um vídeo só no dia: 21,8 s = **18 créditos** (~1 a cada
  1,2 s), contra ~1 a cada 3 s no Avatar IV; confirma a estimativa de 02/10 (~15 pelo story de 20 s). Nos dois stories
  (02 e 03/10) ele passou no QA, sem artefato e com movimento natural, mas **não cabe como padrão diário**: um story de
  ~20 s sai por ~17 créditos (contra ~7), e só os stories somariam ~500 por mês, quase o plano inteiro. **Padrão:
  Avatar IV.** O Avatar V fica para um vídeo pontual, registrado como a variável testada.
- **Teste do story lúdico (03/10):** o **Seedance 2.0** (Cinematic Shots, `create_video_from_cinematic_avatar`) exige o
  **plano Pro** — respondeu 403, sem gasto. Pela tabela de créditos da central de ajuda da HeyGen (lida em 03/10), ele
  custa 60 créditos por clipe em 720p e 150 em 1080p. O **heygen-video-1** (`image_to_video` a partir da foto do look)
  funciona no Creator: 2 créditos por clipe de 5 s em 768p e 5 em 2k (1536x2030). O **Video Agent** no modo padrão custou
  14 créditos por 19,5 s (~43 por minuto, perto dos 40 da tabela), com 5 cenas de Avatar IV, um cutaway e a trilha; o
  teste de legenda (uma cena de 4,8 s) custou 3. Na versão no espaço: 2 looks novos e 4 clipes de 2k em 9:16 custaram 38
  (~9 por clipe de 5 s), o Video Agent 14 e a cena final refeita mais 13 — 65 no total. No dia, o story custou 104
  créditos (519 → 415), contra ~7 de um story padrão.
- **Custo por vídeo** (medido até 03/10): look 1; clipe de 5 s no heygen-video-1 ~9 (`reference_to_video` 2k), 5
  (`image_to_video` 2k) ou 2 (768p); Video Agent ~0,7 por segundo (14 por 19,5 s, 14 por 20,8 s, 3 por 4,8 s); Avatar IV
  ~1 a cada 3 s. **Formato completo (só reels): ~35 por reel de ~28 s** (2 looks, 2–3 clipes e o Video Agent; ~45 se os
  clipes forem todos `reference_to_video`). **Modo econômico (1 look + take único no Avatar IV): ~8 por story e ~11 por
  reel.** Antes da decisão de 03/10, um story no formato completo foi estimado em ~30.
- **Regra de orçamento** (decisão do Guilherme em 03/10: formato completo só nos reels). Story: sempre no modo
  econômico. Reel: antes de cada um, `reserva = 30 + 8 × (stories que faltam até a renovação, contando o de hoje) + 11 ×
  (reels da Estela que faltam no calendário até a renovação, sem contar este)`; **formato completo se `créditos − custo
  estimado do completo ≥ reserva`; senão, modo econômico.** O custo estimado é a soma do plano do reel: looks + clipes +
  0,7 × segundos do Video Agent. Registrar a conta no `caption.md`. Com 408 créditos em 03/10 (25 stories e 9 reels até
  28/10), pela estimativa a regra dava o formato completo aos reels de 05, 07 e 10/10 e o modo econômico aos outros seis.
  **Em 05/10 o saldo era 286** (115 gastos fora da rotina em 04/10): reserva 310, e o reel do dia saiu no modo econômico.
  Pela estimativa, nenhum reel sai no formato completo até a renovação, e o saldo não cobre todos os vídeos até 28/10:
  com ~8 por story e ~11 por reel, a guarda de 30 para os vídeos dela por volta de 24–25/10. Em 07/10: 251 contra uma
  reserva de 283 (22 stories e 7 reels até 28/10) — modo econômico de novo; o dia fechou em 232. Em 08/10 (reel de
  dados), o dia fechou em 226, com o story a 1,1x custando 6 (look 1 + vídeo de 15,3 s, 5): com stories assim (~6) e os
  7 reels econômicos (~10), os 20 stories e 7 reels até 28/10 pedem ~190 créditos, dentro dos 196 acima da guarda de 30.
  Em 09/10 (carrossel no feed), o dia fechou em 211: o story custou 15 (look 1 + duas versões de 21,6 s, 7 cada — a 1ª
  abriu com um gesto de mãos). Os 19 stories e 7 reels econômicos até 28/10 pedem ~184 com stories de ~15 s (6) e reels de
  ~10, contra 181 acima da guarda: só cabem com stories curtos (~40–45 palavras a 1,1x) e sem refazer — um refazer custa um
  story. Em 10/10: 211 contra uma reserva de 248 (19 stories e 6 reels depois deste) — modo econômico; o dia fechou em
  **184**, com o reel custando 20 (3 looks e três versões, por causa da mão translúcida) e o story 7. Os 18 stories e 6
  reels até 28/10 pedem ~138 com stories de ~13 s (5: look 1 + vídeo ~4) e reels de ~23 s (8), contra 154 acima da guarda:
  cabe só com stories de **até ~40 palavras** a 1,1x e sem refazer — cada vídeo refeito tira um ou dois stories. Em
  11/10 (reel de dados), o story de 40 palavras saiu com 13,7 s e o vídeo custou **5**, não 4: pelos vídeos medidos, o
  Avatar IV parece cobrar **~1 crédito a cada 3,3 s, arredondado para cima** (13,6 s e 13,7 s = 5; 15,3 s = 5; 16,8 s = 6; 20,8 s =
  7; 21,6 s = 7; 22,9 s = 7; 23,6 s e 24,1 s = 8 cada; 28,4 s = 9; 32,9 s = 10) — conta tirada dos saldos, não da tabela
  da HeyGen. O dia fechou em **178**. Os 17 stories (12 a 28/10) e 6 reels pedem ~150 com stories como o de hoje (6) e
  reels de ~23 s (8), contra 148 acima da guarda; com stories de **até ~13 s** (~37 palavras a 1,1x: vídeo de 4, story
  de 5), ~133 — é o tamanho que cabe com folga. Em 12/10: 178 contra uma reserva de 221 (17 stories, de 12 a 28/10, e 5 reels
  da Estela depois deste) — modo econômico, com o reel mais curto dela (17,1 s, 56 palavras: 6 de vídeo) e o story na Excited (15,2 s,
  34 palavras: 5); o dia fechou em **165**. Os 16 stories (13 a 28/10) e os 5 reels pedem ~115–131 com stories de 5–6 e
  reels de ~7, contra 135 acima da guarda: cabe sem refazer, e um refazer custa um story. Em 13/10 (reel de dados), o dia
  fechou em **158**: o story custou 7 (2 looks — o 1º saiu com o contorno brilhante em volta do corpo — e o vídeo de 13,6 s, 5).
  Os 15 stories (14 a 28/10) e os 5 reels (qua 14 e sex 16 na S42, 3 na S43) pedem ~110–125 com stories de 5–6 e reels de
  ~7, contra 128 acima da guarda: cabe sem refazer vídeo; um look refeito custa 1. Em 14/10: 158 contra uma reserva de 194
  (15 stories, de 14 a 28/10, e 4 reels da Estela depois deste) — modo econômico; os 2 looks e os vídeos do story (12,7 s) e
  do reel (18,2 s), 11 juntos, fecharam o dia em **145**. Os 14 stories (15 a 28/10) e os 4 reels (sex 16 na S42, 3 na S43)
  pedem ~98–112 com stories de 5–6 e reels de ~7, contra 115 acima da guarda: cabe sem refazer vídeo, com folga de poucos looks.
  Em 15/10 (reel de dados), o look e o story de 14,9 s (5) fecharam o dia em **139**. Os 13 stories (16 a 28/10) e os 4 reels
  (sex 16 na S42, 3 na S43) pedem ~93–106 com stories de 5–6 e reels de ~7, contra 109 acima da guarda: cabe sem refazer
  vídeo, com folga de poucos looks. Em 16/10: 139 contra uma reserva de 167 (13 stories, de 16 a 28/10, e 3 reels da Estela
  depois deste) — modo econômico; os 2 looks e os vídeos do story (17,1 s) e do reel (23,5 s), 16 juntos, fecharam o dia em
  **123**. Os 12 stories (17 a 28/10) e os 3 reels da S43 pedem ~84–99 (stories de 5–6, reels de 8–9), contra 93 acima da
  guarda: só cabe com stories de até ~13 s (~37 palavras a 1,1x: vídeo de 4, story de 5), reels de até ~23 s (vídeo de 7) e
  sem refazer — o story de 16/10, com 48 palavras (17,1 s), custou 6, e o reel de 23,5 s, 8. Em 17/10 (carrossel no feed), o
  look e o story de 15,9 s na Excited (5) fecharam o dia em **117**. Os 11 stories (18 a 28/10) e os 3 reels da S43 pedem
  ~79–93 (stories de 5–6, reels de 8–9), contra 87 acima da guarda: cabe com stories de 5 (Friendly, até ~13 s) e sem refazer. Em 18/10 (reel de dados), o look e as duas versões do story de 11,3 s (4 cada) fecharam o dia em **108**: o refazer custou
  um story. Os 10 stories (19 a 28/10) e os 3 reels da S43 pedem ~74–77 (stories de 5, reels de 8–9), contra 78 acima da
  guarda: cabe só sem refazer nada. Com a Friendly a 1,15x, ~41 palavras dão até 13,2 s (vídeo de 4, story de 5); um story
  de até ~9,9 s (~31 palavras) sai por 4. Em 19/10 (reel de dados), o look e o story de 14,2 s (vídeo de 5: a Friendly a 1,15x leu ~0,365 s por
  palavra num roteiro com números por extenso) fecharam o dia em **102**. Os 9 stories (20 a 28/10) e os 3 reels da S43
  pedem ~69–72 (stories de 5, reels de 8–9), contra 72 acima da guarda: cabe só com stories de até ~35 palavras
  (vídeo de 4) e sem refazer nada. Em 20/10: 102 contra uma reserva de 124 (9 stories, de 20 a 28/10, e 2 reels da Estela depois deste) — modo econômico; os 3 looks (um vetado), o story no Avatar III (11,0 s, 2) e os dois vídeos do reel (20,5 s, 7 cada — o 1º descartado pelo mostrador animado) fecharam o dia em **83**. Os 8 stories (21 a 28/10) e os 2 reels da S43 (qui 22 e sex 23) pedem ~56 com stories no Avatar IV (5) e reels de 8, contra 53 acima da guarda — não cabe; com os stories no Avatar III (look 1 + vídeo ~2), ~40, com folga para um refazer. **Até a renovação (29/10), o story vai no Avatar III enquanto ele passar no QA**; se reprovar, voltar ao Avatar IV com vídeo de 4 (até ~13,2 s) e não refazer look. Em 21/10 (reel de dados), o look e o story de 16,1 s no Avatar III (2) fecharam o dia em **80** — o Avatar III cobrou por 16,1 s o mesmo que por 11,0 s. Os 7 stories (22 a 28/10) e os 2 reels da S43 (qui 22 e sex 23) pedem ~37 (stories de 3, reels de 8), contra 50 acima da guarda: cabe com folga para um ou dois refazer, e os stories podem voltar aos 40–60 palavras da regra 5. Em 22/10: 80 contra uma reserva de 97 (7 stories, de 22 a 28/10, e 1 reel da Estela depois deste) — modo econômico, com o reel no Avatar III (~3, contra ~7–8 no Avatar IV); os 2 looks e os dois vídeos (23,8 s e 17,3 s, 6 juntos) fecharam o dia em **72**. Os 6 stories (23 a 28/10) e o reel de sex 23 pedem ~22–33 (stories de 3–4; o reel, ~4 no Avatar III ou ~9 no IV), contra 42 acima da guarda: cabe com folga. Em 23/10: 72 contra uma reserva de 78 (6 stories, de 23 a 28/10, e nenhum reel da Estela depois deste no calendário da S43) — modo econômico, no Avatar III; os 2 looks e os dois vídeos (16,8 s e 30,4 s, 6 juntos) fecharam o dia em **64**. Os 5 stories (24 a 28/10) pedem ~15–20 (look 1 + vídeo 2–3), contra 34 acima da guarda; um reel da Estela de 26 a 28/10, se o calendário pedir, sai por ~5 no Avatar III. Em 24/10 (carrossel no feed), o look e o story de 22,0 s na Excited (3) fecharam o dia em **60**. Os 4 stories (25 a 28/10) pedem ~12–16 (look 1 + vídeo 2–3), contra 30 acima da guarda: cabe com folga; na Excited, que lê mais devagar, um story de ~55 palavras passa de 16,8 s e custa 3. Em 25/10 (reel de dados), 2 looks (a v1 vetada) e o story de 14,6 s (2) fecharam o dia em **56**. Os 3 stories (26 a 28/10) pedem ~9–12 (look 1 + vídeo 2–3), contra 26 acima da guarda: cabe com folga, inclusive um reel da Estela de ~5 no Avatar III, se o calendário de 26 a 28/10 pedir. Em 26/10 (reel de dados), o look e o story de 14,2 s (2) fecharam o dia em **53**. Os 2 stories (27 e 28/10) e o reel da Estela de qua 28 às 19:00 (calendário da S44) pedem ~11–13 (stories de 3–4; o reel, ~5 no Avatar III), contra 23 acima da guarda: cabe com folga. A renovação (29/10, 00:57 UTC = 21:57 BRT de 28/10) devolve os 600 créditos: a regra de orçamento volta a valer com o saldo cheio a partir do story de 29/10 e do reel de sex 30.
- Por mês (30 stories e ~13 reels da Estela), com os stories no econômico (~240): no Creator (600), a regra deixa o
  formato completo em ~7 dos 13 reels; no Pro (1.000), em todos, com sobra. Antes da decisão, tudo no formato completo
  pediria ~1.500 créditos por mês.
- Guarda de segurança: **abaixo de 30 créditos, não gerar vídeo da Estela** — o reel vira reel de dados e o story é
  pulado e relatado. Era 100 até 03/10; a reserva acima passou a guardar os créditos dos vídeos que faltam.
- Histórico: o teste de 28/09 foi no plano gratuito (720p, marca d'água, criação de avatar pela API bloqueada com 403).

## Formatos e testes

Calendário, cadências e variáveis de produção em teste (gestos, motor, voz, duração; o cenário virou regra em 03/10):
seção 3b do `PLAYBOOK.md`.
Temas que combinam com ela: ranking da semana narrado · reação a evento (recorde, nick novo, marco) · desafio lançado
por ela · "a Estela explica" (uma mecânica, conferida no código) · boas-vindas a estreantes · bastidor dela. O tema não
define o cenário: cada post ganha o seu, tirado do que ela fala (regra 6).

## Histórico de vídeos

| Data | Pasta | Look | Variável testada | HeyGen video_id |
|---|---|---|---|---|
| 29/09 | `2026-09-29-estela-se-apresenta` | setup | estreia (base: Avatar IV, expressiveness medium, Friendly) — camada v1 | `d07ad625f3a315a38be1d861dd2a34db` |
| 29/09 | `_estela-camada-v2` (laboratório) | setup | mesma estreia na camada v2 (legenda menor, selo temporário) | `d07ad625f3a315a38be1d861dd2a34db` |
| 29/09 | `2026-09-29-story-quatro-dias-de-silencio` | sala (sofá) | **1º story** (vídeo puro, 23,9 s, em casa) — Buffer `6abc050cf9bc1204bdf27037` | `4d6870a5cae2dcae9379e14fbf80cbce` |
| 30/09 | `2026-09-30-story-recorde-novo` | escrivaninha na janela | voz **Excited** (story de 19,1 s, o 1º sem dizer que é IA) — Buffer `6abc8e2bf3db08ac9273d2a8`; versão de 27,6 s descartada (`68945e075eb7c6ea8e527d4c98f47be8`) | `c36792024e282e92da15d4bb2169ee6f` |
| 01/10 | `2026-10-01-story-rachaduras` | cozinha (café) | **expressiveness high** com gestos (story de 17,5 s, "a Estela explica" as rachaduras), voz Friendly — Buffer `6abe9d5e0fdd0066b7ac64ca` | `12fa47b232ddde6c8fb3535f1384e7d0` |
| 02/10 | `2026-10-02-partida-sem-nick` | headset na mesa | voz **Excited** num reel (26,1 s, desafio das partidas sem nick), Avatar IV, expressiveness medium; 1º reel com a legenda em algarismos — Buffer `6abf324963de9e09a28c47ca`; versão descartada antes do push por uma frase ambígua (`782b793ab909335ec7363943333d8c40`) | `9a7c8ade598bae02502959ce1524557d` |
| 02/10 | `2026-10-02-story-acordou-cedo` | quarto (luzinhas) | motor **Avatar V** (story de 20,1 s; sem expressiveness, que ele não aceita, e sem motionPrompt), voz Friendly — Buffer `6abf3251c07bdc2fc269c5f5` | `351860d24d1764404e879d860a271407` |
| 03/10 | `2026-10-03-story-boost-arco-iris` | setup | **Avatar V** de novo, como único vídeo do dia, para medir o custo isolado: 18 créditos por 21,8 s (story "a Estela explica" o boost arco-íris), voz Friendly — **não publicado**: o agendamento (`6ac081d116dec17c265229e2`) foi apagado e trocado pela versão lúdica | `64d8f0e4c724efd7dc67c7b3d80796e1` |
| 03/10 | `2026-10-03-story-boost-arco-iris-ludico` | setup → headset na mesa → cutaway → cozinha → setup → sala | **story com 6 cortes e trilha baixa** (pedido do Guilherme): HeyGen Video Agent, Avatar IV, voz Friendly a 1,2x, 19,5 s; cutaway de 2 s do heygen-video-1 (`2afb8e6e9a454160b2156598bdd8536c`) — **não publicado**: agendado (`6ac11a4afec59133947b3b92`) e trocado pela versão no espaço | `1b029d53b9d345a884c8b2737f7f8a23` |
| 03/10 | `2026-10-03-story-boost-arco-iris-espaco` | espaço (arco-íris) → 4 clipes → sentada no arco-íris → espaço | **story no espaço com 7 cortes e trilha baixa** (2º pedido do Guilherme): Video Agent, 3 falas em Avatar IV e 4 clipes do heygen-video-1, "arcoíris" sem pausa, 20,8 s; cena final refeita sem aceno (a 1ª, `311ca4b6f7be4bd68f1c9945187c4d1b`, teve defeito) — Buffer `6ac12384fec59133947c83e5` | `64266252add848d8adee10d3ef593521` |
| 03/10 | `_lab-2026-10-03-va-legenda-puro` e `_lab-2026-10-03-va-legenda-reel` (laboratório) | pódio no espaço | **legenda do Video Agent**: com as legendas ligadas no agente, o `video_url` sai limpo e o `subtitle_url` serve na nossa legenda pequena (4,8 s, 3 créditos) | `80b2e9bba48b418680e6412be0ea8f19` |
| 04/10 | `2026-10-04-story-meteoros-esperando` | meteoros esperando | **1º story no formato novo** (take único no cenário do post), **expressiveness low** (17,8 s, o jogo parado no sábado), voz Friendly — Buffer `6ac1d4798dc991c73c6995d1` | `759eefe52b54918faa94eb45be09626d` |
| 05/10 | `2026-10-05-podio-vago` | pódio com dois lugares vagos | **reel no modo econômico** pela regra de orçamento (286 créditos); variável **duração ~35 s** (32,9 s, ranking da semana 40 narrado), voz Friendly, expressiveness medium; legenda em algarismos na 3ª renderização — Buffer `6ac3285afe1389e4134fc4af`: **saiu no Instagram, mas ficou com status `error` no Buffer**, sem `sentAt` nem métricas (a republicação agendada em 06/10 foi apagada antes de sair); depois o Buffer passou a listar a publicação real como post via network (`6ac49a80970ea04598503a0f`), com as métricas | `b1894fc0152ffaa1dcf196db7c573b2a` |
| 05/10 | `2026-10-05-story-nome-no-ranking` | o nome no ranking v2 | story em take único, **motionPrompt inclinada pra câmera** (19,9 s, como pôr o nick no game over), voz Friendly — Buffer `6ac327815de5ee424c25bbc1` | `0c3a3f7cf96e000544d1da98cadbcaba` |
| 06/10 | `2026-10-06-story-nave-sem-piloto` | a nave laranja sem piloto | story em take único, **motionPrompt animado com mãos visíveis** (20,8 s, a partida anônima de 8.585 no Tier IV), voz Friendly, expressiveness medium; a 1ª versão (`214ca1aa54b429a7ac6d6504c42667ec`) abriu com um gesto de mãos com dedos estranhos e foi refeita — Buffer `6ac47bf198d02b181e21244a` | `d8954a1260446eab5c1c5cdfc29947ab` |
| 07/10 | `2026-10-07-piloto-novo` | o primeiro lugar aceso | reel no modo econômico pela regra de orçamento (251 contra reserva de 283); variável **duração ~20 s** (23,6 s, boas-vindas ao piloto novo KAL-EL), voz Friendly, expressiveness medium; legenda em algarismos na 2ª renderização — Buffer `6ac5cb6953551104161f63cc` | `3e710651f8aaafd91e8584ac409176f1` |
| 07/10 | `2026-10-07-story-sarrafo-top-10` | o sarrafo do top 10 v2 | story em take único, **voz Excited** (24,1 s, o sarrafo do top 10 de pilotos), expressiveness medium; a 1ª versão do look saiu com dois fones e foi refeita — Buffer `6ac5ccd553551104161f8f60` | `d6a9ddc29c35a7662217cbfc2c72f9d6` |
| 08/10 | `2026-10-08-story-rober-voltou` | a volta do piloto | story em take único, **voz Friendly a 1,1x** (15,3 s, o ROBER voltou e entrou no top 10 de pilotos), expressiveness medium, motionPrompt calmo — Buffer `6ac7fea553e023600018c04a` (republicado às 17:36: o agendamento das 16:00, `6ac71c9c365feab0d73e0e50`, ficou em `error` e não saiu) | `179a247d4f67ef2dad0e77337bb5fe49` |
| 09/10 | `2026-10-09-story-raspao` | o raspão no meteoro | story em take único, **expressiveness low** (2ª vez; 21,6 s, "a Estela explica" a colisão com 72% do tamanho do meteoro), voz Friendly a 1,1x, motionPrompt calmo; a 1ª versão (`4850fb538ccf1f559100922109cfbf93`) abriu com um gesto rápido das duas mãos e foi refeita pedindo as mãos paradas nos 2 primeiros segundos — Buffer `6ac86fc37d9f9f33012595f9` | `b68b18ce8dd5f6e8239e33f744a8a70a` |
| 10/10 | `2026-10-10-fechou-a-conta` | a ampulheta acima do ombro | reel no modo econômico pela regra de orçamento (211 contra reserva de 248); variável **expressiveness low num reel** (1ª vez; 23,0 s, as 20 horas de jogo fecharam), voz Friendly a 1,1x, motionPrompt pedindo as mãos paradas nos 2 primeiros segundos; versões descartadas: `00bb5a10b0e5c9769395649f32597acf` (Avatar IV medium, no look "a ampulheta de estrelas": mão translúcida ao cruzar a ampulheta) e `07a507c21889841619a9408d5c8a3f30` (o mesmo look no Avatar III: mesmo movimento, mesmo defeito) — Buffer `6ac9c360b07d37ac975f25c5` | `83f0bcac6f353a42b6ed6e4f10ebf2bf` |
| 10/10 | `2026-10-10-story-primeiro-boost` | o primeiro boost | story em take único, **mãos paradas nos 2 primeiros segundos já na 1ª tentativa** (16,8 s, o primeiro boost aos 8 s), expressiveness low (3ª vez), voz Friendly a 1,1x — abriu limpo, gesticulou no meio — Buffer `6ac9c063ed92ed8fa5b88893` | `d722e7be42bf0cc875f1bfacf81a349c` |
| 11/10 | `2026-10-11-story-semana-em-nicks` | a constelação da semana | story em take único, **roteiro curto pela conta de créditos** (40 palavras, 13,7 s — o mais curto desde o take único; 48 partidas de 04 a 10/10, só 4 com nick), expressiveness low (4ª vez), voz Friendly a 1,1x, mãos paradas pedidas nos 2 primeiros segundos — as mãos se juntam na borda de baixo em ~0,3 s e voltam várias vezes, naturais — Buffer `6acb1088c4de2d2b124c5fa3` | `70ac631583cb1fd64514c9c44156ed4c` |
| 12/10 | `2026-10-12-story-tres-minutos` | o cronômetro dos três minutos | story em take único, **voz Excited a 1,1x** (a 1ª vez acelerada; 15,2 s, 34 palavras, o desafio dos três minutos), expressiveness low — Buffer `6acc62b5ea568e911a50886a` | `1eb2c3f6db3e5f161979198adca428ce` |
| 12/10 | `2026-10-12-horario-de-pico` | o relógio de estrelas | reel no modo econômico pela regra de orçamento (178 contra reserva de 221), o 1º às 19:00 como 2º post do dia (S42); variável **duração curta** (17,1 s, 56 palavras — o reel dela mais curto), voz Friendly a 1,1x, expressiveness medium; legenda em algarismos na 2ª renderização — Buffer `6acc642b63ff33d8c9a82b0f` | `69815d4bc2b311552f5850dd91c166db` |
| 13/10 | `2026-10-13-story-nave-acima-do-dedo` | a nave acima do dedo v2 | story em take único, **dica de controle no celular, sem número** (13,6 s, 37 palavras: no toque, a nave voa um pouco acima do dedo), voz Friendly a 1,1x, expressiveness low (6ª vez); a 1ª versão do look (`44e79e69b4981102d9a7c59d743857c1`) saiu com o contorno brilhante em volta do corpo e foi refeita — Buffer `6acdb59d9f22b96ae7f4d94d` | `3fb78109a02a1664365012798244359f` |
| 14/10 | `2026-10-14-story-festa-das-seiscentas` | o bolo das seiscentas | story em take único, **gestos: braços parados ao lado do corpo o vídeo todo** (12,7 s, 35 palavras: a partida 600 saiu às 11:05 de 13/10, sem nick), voz Friendly a 1,1x, expressiveness low (7ª vez) — nenhuma mão no quadro — Buffer `6acf07f80d20fd15277d5339` | `38c65620fc57b0ed2febf6766783bbd4` |
| 14/10 | `2026-10-14-o-jogo-voltou` | a chuva de estrelas cadentes | reel no modo econômico pela regra de orçamento (158 contra reserva de 194), o 2º às 19:00 (S42); variável **voz Excited a 1,1x num reel** (a 1ª vez acelerada num reel — a Excited fez o reel de 02/10 a 1,0x; 18,2 s, 52 palavras: o jogo voltou com 24 partidas numa terça), expressiveness low; mãos à altura do peito de ~13,4 a ~17,9 s, naturais; legenda em algarismos na 2ª renderização — Buffer `6acf0898b610c3011f9f2063` | `492c66d09a8e46b8560a329fe9fb3b93` |
| 15/10 | `2026-10-15-story-boas-vindas-rasec` | boas-vindas pelo portal | story em take único, **gestos: braços parados o vídeo todo, 2ª vez** (14,9 s, 43 palavras: RASEC estreou em 14/10 e virou o 46º piloto), voz Friendly a 1,1x, expressiveness low (8ª vez) — não se repetiu: mão na abertura e cinco gestos curtos, naturais — Buffer `6ad057a9e09e6bdb27e2c61e` | `5c6de03c9496d39addbd4aff4de7839c` |
| 16/10 | `2026-10-16-story-a-partida-mais-longa` | o rastro mais longo | story em take único, **gestos: braços parados o vídeo todo, 3ª vez** (17,1 s, 48 palavras: a partida mais longa da história durou 5min14, a do recorde), voz Friendly a 1,1x, expressiveness low (9ª vez) — quase sem mão: só a borda de uma mão na beira de baixo em ~14,8 e ~15,6 s — Buffer `6ad1ac8ce991a49db3ca7901` | `428f42b04b023da1106c5ef8a7691e76` |
| 16/10 | `2026-10-16-a-partida-esquisita` | a lupa na partida esquisita | reel no modo econômico pela regra de orçamento (139 contra reserva de 167), o 3º às 19:00 (S42); variável **duração ~24 s** (23,5 s, 66 palavras: 15.232 pontos sem sair do Tier I, em 10/09), voz Friendly a 1,1x, expressiveness low, mãos paradas pedidas só nos 2 primeiros segundos — uns 15 gestos naturais; legenda em algarismos na 2ª renderização — Buffer `6ad1ad3d4ed7d375a446423b` | `405130a409ac7576c4c45df2ebc326ad` |
| 17/10 | `2026-10-17-story-sabados-sem-partida` | os sábados sem partida | story em take único, **voz Excited a 1,1x num desafio** (15,9 s, 35 palavras: o último sábado com partida foi 12/09), braços parados o vídeo todo (padrão desde 16/10) — nenhuma mão no quadro —, expressiveness low (10ª vez) — Buffer `6ad2f98a1c7e49ea4c3880ac` | `6fb13020dfd56078bff694f155da6d69` |
| 18/10 | `2026-10-18-story-misseis-teleguiados` | os mísseis teleguiados | story em take único, **voz Friendly a 1,15x** (a 1ª vez acima de 1,1x; 11,3 s, 35 palavras: os mísseis teleguiados saem sozinhos, um por meteoro, até cinco por vez), braços parados o vídeo todo — um gesto de ~0,6 s com as duas mãos —, expressiveness low (11ª vez); a 1ª versão (`7a41c8e3ed911f05b41c226d03328e35`) trouxe figuras de outras pessoas nas bordas do quadro e foi refeita com "She is alone in the frame" no motionPrompt — Buffer `6ad44c43ae173d6e00e73f62` | `6ac8967e475dd4737d6d57c920441ab9` |
| 19/10 | `2026-10-19-story-a-semana-acordou-cedo` | o amanhecer no espaço | story em take único, **voz Friendly a 1,15x, 2ª vez** (14,2 s, 39 palavras com números por extenso: a semana 42 acordou cedo, 20 das 38 partidas antes das 13h), braços parados e "She is alone in the frame" — um gesto de ~2,5 s com as duas mãos —, expressiveness low (12ª vez) — Buffer `6ad59c87769b457934f0cb76` | `a164432df8f4b13f467c12c3bda93df5` |
| 20/10 | `2026-10-20-story-a-semana-comecou-devagar` | a largada devagar | story em take único, **motor Avatar III** (o 1º publicado nele; 11,0 s, 33 palavras: a semana 43 começou com uma partida só, de 192 pontos, sem nick), voz Friendly a 1,15x, sem expressiveness nem motionPrompt — nenhuma mão, 2 créditos — Buffer `6ad6eebde9c669def5ec94c7` | `6d24e98be48e3e22ccb6fb29d07f215f` |
| 20/10 | `2026-10-20-o-numero-escondido` | o número escondido v2 | reel no modo econômico pela regra de orçamento (102 contra reserva de 124), a 1ª Estela da S43, às 19:00; variável **voz Friendly a 1,15x num reel** (20,5 s, 61 palavras: o DIFFICULTY ×N do canto da tela, ×14.4 aos 10 mil no Tier II), expressiveness low; a 1ª versão (`b8c5437f521d9be6374c9a4e5e490153`) foi descartada pelo mostrador animado (sumia, girava e virava uma bola laranja), refeita com o fundo parado no motionPrompt; legenda em algarismos na 3ª renderização — Buffer `6ad6f31a9d034d7aedda57e9` | `6bd52b4a88b227a5e3bdfa924cdbf58f` |
| 21/10 | `2026-10-21-story-ficar-vivo` | ficar vivo | story em take único, **motor Avatar III, 2ª vez — variável: duração** (16,1 s, 50 palavras: ficar vivo vale 1 ponto por segundo, 314 dos 30.577 do recorde), voz Friendly a 1,15x, sem expressiveness nem motionPrompt — 2 créditos, como o de 11,0 s; com os braços abertos no look, gestos o vídeo todo, naturais — Buffer `6ad8418150009d9e950ae785` | `925596064be3b6c1d4a71892932e1e8a` |
| 22/10 | `2026-10-22-chegou-voando` | o cometa amarelo | reel no modo econômico pela regra de orçamento (80 contra reserva de 97), a 2ª Estela da S43 e a 1ª às 13:00; variável **motor Avatar III num reel** (o 1º publicado nele; 23,8 s, 77 palavras: o MARCAO, piloto novo, chegou voando — 4º no top 10 de pilotos e a 100ª partida com nick), voz Friendly a 1,15x, sem expressiveness nem motionPrompt; braços para baixo no look — um gesto só, de ~2 s, natural; legenda em algarismos (e MARCAO) na 2ª renderização — Buffer `6ad993b47dadc432f73c8980` | `f57480a53a66deb54d09a16b9d440693` |
| 22/10 | `2026-10-22-story-34-numa-manha` | a revoada | story em take único, **Avatar III, 3ª vez — variável: gestos com os braços para baixo no look** (17,3 s, 54 palavras: 34 partidas numa manhã só, em 21/10; 19 acima dos 10 mil, 13 sem nick), voz Friendly a 1,15x — nenhuma mão subiu — Buffer `6ad9937d7dadc432f73c7df6` | `3bede6e85afe2448205c512c577fdb35` |
| 23/10 | `2026-10-23-story-sete-em-oito` | sete em oito | story em take único, **Avatar III, 4ª vez — variável: gestos com os braços levemente afastados no look** (16,8 s, 58 palavras: dos 8 pilotos que voltaram, 7 fizeram a melhor partida na volta; o MARCAO, não), voz Friendly a 1,15x — os braços balançam de leve e as mãos ficam na beira de baixo, cortadas — Buffer `6adaebdecc1b7cdc08d07dce` | `e23735b4a849a21a5855eb4f97bdce05` |
| 23/10 | `2026-10-23-o-tiro-roxo` | o tiro roxo | reel no modo econômico pela regra de orçamento (72 contra reserva de 78), a 3ª Estela da S43 e a 2ª às 19:00; variável **voz Excited a 1,15x no Avatar III** (30,4 s, 80 palavras: nenhuma partida chegou ao Tier VI, o do tiro roxo; o recorde parou no Tier V, com 20 boosts), sem expressiveness nem motionPrompt; braços para baixo no look — nenhuma mão; legenda em algarismos na 2ª renderização — Buffer `6adaec761dc335d347f610f9` | `37a217b7664823ad2c7f1658796370ed` |
| 24/10 | `2026-10-24-story-dois-lugares-vagos` | o pódio da semana 43 | story em take único, **Avatar III, 5ª vez — variável: voz Excited a 1,15x num story** (22,0 s, 56 palavras: até 23/10, o pódio da semana 43 tinha dois lugares vagos — só o MARCAO salvou partidas com nick), braços para baixo no look — nenhuma mão — Buffer `6adc34b83d5b27036b68bfc3` | `ab7c97a9639f7ff0726763458c3f996b` |
| 25/10 | `2026-10-25-story-nave-piscando` | a nave que nasce piscando v2 | story em take único, **Avatar III, 6ª vez — variável: duração curta** (14,6 s, 44 palavras: a nave nasce piscando, e nos 2 primeiros segundos os meteoros passam direto por ela; 16 das 679 partidas duraram 2 s), voz Friendly a 1,15x, look de braços para baixo — os antebraços parados na beira de baixo, sem gesto; a 1ª versão do look (`76b8f4a0998446b7509ae69381df0e4a`) saiu como um fantasminha de desenho e foi vetada — Buffer `6add86dc0b5343d070b614ab` | `2a38ae6b241d01ae3d08c0ee2c05f64c` |
| 26/10 | `2026-10-26-story-capacete-vazio` | o capacete vazio | story em take único, **Avatar III, 7ª vez — sem variável nova** (14,2 s, 43 palavras: até 25/10, 47 pilotos; só 3 estrearam em 4 semanas — KAL-EL, RASEC e MARCAO; o próximo pode ser você), a repetição do story curto de 25/10 para ler a queda de alcance com a produção igual; voz Friendly a 1,15x, look de braços para baixo e fora do quadro — mesmo assim, quatro gestos curtos com as mãos à altura do peito, naturais — Buffer `6aded861e4be8a4d86e4a841` | `abd1a9e55e56cc1f629b38058037fafc` |
