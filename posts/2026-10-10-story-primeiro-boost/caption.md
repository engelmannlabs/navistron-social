---
data: 2026-10-10
formato: story da Estela, take único (Avatar IV, 16,8 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: "a Estela explica" — dica de sábado: o primeiro boost cai sempre aos 8 s de partida, e cada boost põe mais um tiro na nave. Complementa o reel do dia (as 20 horas de jogo fecharam) sem repetir: o reel conta o marco; o story dá um jeito de começar bem a próxima partida
gancho: "Dica de sábado: no Navistron, o primeiro boost aparece sempre aos oito segundos de partida."
cenario: o primeiro boost — a Estela no espaço azul-escuro estrelado, com uma bolinha dourada de estrela branca no meio (o boost do jogo: gradiente #fffbe0 → #ffd700 → #ff8800 e ★ em drawBoost) chegando ao lado do ombro, num rastro de partículas douradas. Diferente do último vídeo dela (o raspão no meteoro, story de 09/10) e do reel do dia (a ampulheta)
look: o primeiro boost — 3edd567c4554bb06d40febe3d0dae8c9 (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-10-story-boost-looks): fone só no pescoço, nada na cabeça, sem texto nem logo
variavel_testada: abertura — o motionPrompt pedindo as mãos paradas e fora do quadro nos 2 primeiros segundos já na 1ª tentativa, com expressiveness low (3ª vez) e a Friendly a 1,1x (50 palavras, 16,8 s). Resultado: abriu limpo (as mãos só entram a ~1,4 s), mas gesticulou quase o vídeo todo — o low não segura os gestos do meio
heygen_video_id: d722e7be42bf0cc875f1bfacf81a349c
creditos_heygen: 211 → 209 (os looks do reel e do story, 1 cada) → 196 (os dois primeiros vídeos do dia: o reel de 22,9 s e este story de 16,8 s, 13 juntos); o story sozinho, ~7 (look 1 + vídeo ~6)
horario_publicacao: 2026-10-10 16:00 BRT (agendado)
buffer_post_id: 6ac9c063ed92ed8fa5b88893 (agendado à 01:34 de 10/10 para as 16:00; scheduled, 16,9 s, isAiGenerated true)
qa: reel.mp4 baixado pelo SHA do commit do render (e1533198) e conferido; o reel.mp4 da main tem o mesmo tamanho (8.794.532 bytes). Vídeo puro, sem texto nem nada por cima, o boost dourado ao lado do ombro o vídeo todo, transcrição (legenda.srt) igual ao roteiro palavra por palavra, áudio presente (média −25,0 dB), 16,8 s, fim limpo. Mãos (varredura de pixels de pele na faixa de baixo do quadro a 10 fps e folhas a 3 e 10 fps): nada nos primeiros 1,4 s; depois, mãos à altura do peito em ~1,4–6,9 s e ~8,6–16,8 s — palmas abertas com os dedos abertos (~2,6–4,1 s), mãos juntas como em prece (~9–13 s), punhos (~14 s) e as duas palmas para a câmera no fim (~15,6–16,1 s) —, naturais, borradas só no movimento, sem passar na frente do boost; o esmalte das unhas aparece escuro em alguns quadros (~10–11 s) e claro em outros, discreto
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo (src/app/play/page.js, SHA 36d68b9a, conferido em 10/10/2026) — startGame(): boostTimer = 8; spawnThings(dt) só roda com a partida em andamento (depois da contagem regressiva) e no mesmo dt que soma o timeAlive (score += 1 a cada segundo inteiro vivo), então o primeiro spawnBoost() sai quando a partida chega aos 8 s, e os seguintes a cada 12 + random × 8 s; spawnBoost(): isTierUp só quando falta 1 para o próximo múltiplo de 5, então o primeiro é sempre o dourado com ★ (drawBoost); collectBoost(): totalBoosts++ e spreadLevel++ (spawnBullets dispara spreadLevel tiros) e, quando totalBoosts % 5 === 0, tierUp() (sobe o tier e o leque volta a 1). Sem número de telemetria no roteiro (nada que envelheça entre a 01:00 e as 16:00)
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela; números por extenso para a voz):

Dica de sábado: no Navistron, o primeiro boost aparece sempre aos oito segundos de partida. É a bolinha dourada com
estrela. Pega: os boosts põem mais tiros na nave, e a cada cinco ela sobe de nível. Joga hoje e põe o nick no game over.
Te vejo no ranking!
