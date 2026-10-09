---
data: 2026-10-09
formato: story da Estela, take único (Avatar IV, 21,6 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: "a Estela explica" — a colisão do jogo (a batida só conta num círculo com 72% do tamanho do meteoro). Complementa o carrossel do dia ("A 7 pontos": 7 pontos = 7 segundos vivo) sem repetir: o carrossel mostra quanto valem uns segundos a mais; o story, um jeito de ganhá-los
gancho: "Sabia que dá pra raspar num meteoro no Navistron e sair inteiro?"
cenario: o raspão no meteoro — a Estela flutuando no espaço, com um meteoro enorme, cinza-escuro e de rachaduras laranja (como os meteoros quentes do jogo) passando rente, atrás da cabeça e do ombro, com fragmentos e rastro. Diferente do último vídeo dela (o deck da estação espacial com a navinha verde, story de 08/10)
look: o raspão no meteoro — d56d0c5c47328d1b063141ee9b881715 (create_prompt_avatar com o setup como referência de rosto, prompt de ~620 caracteres; folha em posts/_lab-2026-10-09-story-raspao-looks): fone só no pescoço, nada na cabeça, sem texto nem logo; luz de recorte ciano forte no cabelo
variavel_testada: gestos — expressiveness low (2ª vez; a 1ª foi o story de 04/10, em que nenhuma mão apareceu), com a voz Sofia Brazil - Friendly a 1,1x (a velocidade de 08/10, agora a base da conta do orçamento), Avatar IV, motionPrompt calmo sem aceno; 59 palavras deram 21,6 s
heygen_video_id: 4850fb538ccf1f559100922109cfbf93
creditos_heygen: 226 → 218 (look 1 + vídeo de 21,6 s, 7)
horario_publicacao: 2026-10-09 16:00 BRT (agendado)
buffer_post_id: (preencher)
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo (src/app/play/page.js, SHA 36d68b9a, conferido em 09/10/2026) — updateMeteors(): a nave explode quando circleDist(m.x, m.y, m.r * .72, ship.x, ship.y, 18), isto é, quando a distância entre os centros fica abaixo de 0,72 × o raio do meteoro + 18 px; spawnMeteor(): o contorno tem 8–12 vértices entre 0,7 e 1,0 do raio, então as pontas da pedra passam do círculo da batida; score += 1 a cada segundo inteiro vivo. Sem número de telemetria no roteiro (nada que envelheça entre a 01:00 e as 16:00)
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela; números por extenso para a voz):

Sabia que dá pra raspar num meteoro no Navistron e sair inteiro? A batida só conta no miolo: um círculo com setenta e
dois por cento do tamanho do meteoro. Nas pontas da pedra, a nave passa. E cada segundo vivo vale um ponto. Joga hoje,
passa raspando e põe o nick no game over. Te vejo no ranking!
