---
data: 2026-10-03
formato: story da Estela, versão LÚDICA NO ESPAÇO (2º pedido do Guilherme em 03/10, depois de ver a 1ª versão lúdica): vídeo puro com 7 cortes e trilha chiptune baixa
pilar: "a Estela explica" — o boost arco-íris (mesmo roteiro e mesma mecânica do story original, posts/2026-10-03-story-boost-arco-iris)
gancho: "Sabia que um dos boosts do Navistron brilha em arcoíris?"
pedido: "arco-íris" falado emendado, sem a pausa no meio que a 1ª versão tinha; menos "casa", mais lúdico, com ela andando no espaço e no arco-íris — exceção à regra "cenas sempre dentro da casa dela", só neste story
cenas: 1) fala no espaço com arco-íris atrás (look novo ebdacbd58a6974eec8ff195540d04e2d) → 2) clipe: pega uma estrela dourada → 3) clipe: anda por uma estrada de arco-íris → 4a) fala sentada num arco-íris (look novo 2c3c2a3b41203413eea45d8e62306547) → 4b) clipe: sobe num rastro de arco-íris como foguete → 5) clipe: os meteoros em volta viram fogos de artifício → 6) fala no espaço, sorrindo (sem aceno: o tchau da 1ª renderização saiu com defeito)
producao: HeyGen Video Agent, modo chat com storyboard revisado antes do render (sessão b1779b30f5d34e7a90f710934a747ceb); 3 cenas de Avatar IV com fala e 4 clipes do heygen-video-1 (reference_to_video com a foto do look setup, 9:16, 2k, 5 s cada: 7f61d863866f41008f79640efb130949, a7cc8d39669e4ea198fb261d176f6d35, 97bc560a949b415f93a690a34a9d1ada, 8bc0fb1c12654823ba0fc1ae1d5e8c68; laboratório em posts/_lab-2026-10-03-espaco-*)
voz: Sofia Brazil - Friendly (0edbc867be6f48c5be8ff8b0fbca0802) a 1,2x; "arcoíris" escrito junto no roteiro (conferido nos 3 trechos com get_video_scenes); o glossário Navistron também passou a trocar "arco-íris" por "arcoíris" (vale para os próximos vídeos)
trilha: chiptune do próprio Video Agent, baixa
heygen_video_id: 64266252add848d8adee10d3ef593521 (2ª renderização; na 1ª, 311ca4b6f7be4bd68f1c9945187c4d1b, o tchau final saiu com um retângulo bege ao lado do ombro dela e a cena foi refeita sem gesto de mão)
creditos_heygen: 480 → 415 nesta versão (65): 2 looks novos e 4 clipes de 2k em 9:16 (38 juntos, ~9 por clipe), o Video Agent (14) e a cena final refeita (13); no dia todo, desde o story original, 519 → 415
duracao: 20,8 s
horario_publicacao: 2026-10-03 16:00 BRT — agendado no Buffer às 12:47; substitui a 1ª versão lúdica (Buffer 6ac11a4afec59133947b3b92, apagado às 12:47)
buffer_post_id: 6ac12384fec59133947c83e5
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
qa: 1080x1920, 30 fps, 20,8 s, -20,3 LUFS; 7 cenas na ordem pedida, sem legenda e sem texto (get_video_scenes: caption.enabled = false); roteiro conferido nos 7 trechos; "arcoíris" sem pausa interna nas 3 vezes (na 1ª versão lúdica, medido no gancho, havia ~200 ms de silêncio entre "arco" e "íris"; agora o "o-í" é contínuo e o único trecho fraco é o "rc", ~100 ms de consoante); trilha ~17–19 dB abaixo da voz, mais audível que na 1ª versão lúdica (~-38 dB nas pausas, antes ~-46); o arquivo que o Buffer lê é o mesmo conferido (cmp)
fonte_dados: código do jogo (src/app/play/page.js, sem mudança desde 07/09/2026), conferido em 03/10/2026 — spawnBoost() marca isTierUp quando falta 1 boost para o próximo tier (5 − totalBoosts % 5 === 1); drawBoost() desenha esse boost com brilho de cor variando (arco-íris) e uma seta ⬆, e os outros em dourado/laranja com uma estrela ★; collectBoost() chama tierUp() a cada 5 boosts, e tierUp() explode todos os meteoros da tela (sem pontos) e volta o spread para 1
---

Roteiro (fala da Estela; mesmo texto do story original, com "arcoíris" escrito junto só para a voz; o story não tem texto
nem legenda na tela):

Sabia que um dos boosts do Navistron brilha em arcoíris? Os outros são dourados, com uma estrela. O de arcoíris tem uma
seta: é o quinto de cada ciclo, o que sobe a sua nave de nível — e, quando você pega, todos os meteoros da tela explodem.
Joga hoje e procura o arcoíris. Te vejo no ranking!
