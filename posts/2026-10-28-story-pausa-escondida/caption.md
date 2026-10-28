---
data: 2026-10-28
formato: story da Estela, take único (Avatar III, 17,0 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: a Estela explica (o Navistron não tem botão de pausa, mas, se você trocar de aba ou de aplicativo no meio da partida, tudo congela — os meteoros param no ar e o tempo da partida também — e o jogo continua quando você volta) — diferente dos stories de 26/10 (bastidor) e 27/10 (desafio) e do reel do dia (hall da fama: ROBER de novo)
gancho: "O Navistron não tem botão de pausa, mas a sua partida sabe esperar." (palavras-chave "botão de pausa" e "sabe esperar", fora dos ganchos dos últimos 10 dias)
cenario: os meteoros congelados — a Estela no espaço azul-escuro estrelado, de braços para baixo, com duas pedrinhas cinza paradas no ar, cobertas por uma camada fina de gelo azul-claro, com pingentes e cristais, no alto do quadro, à esquerda, longe do cabelo: o jogo congela quando você sai da aba. Pedido com "soft natural light on her, no glowing outline around her body" e "no faces, no eyes, no creatures", sem texto, número nem logo. Diferente do último vídeo dela (o story de 27/10: a coroa do recorde)
look: os meteoros congelados — b5f5673216994b53c1ba6de05bf95ecc (create_prompt_avatar com o setup como referência de rosto, ~700 caracteres; folha em posts/_lab-2026-10-28-story-gelo-looks). Saiu certo na 1ª tentativa: duas pedrinhas com gelo, pingentes e cristais (a menor tem crateras), um fone só, no pescoço, nada na cabeça; os antebraços aparecem na beira de baixo do quadro, como nos looks de 25 e 27/10
variavel_testada: nenhuma nova — a produção dos stories de 25 a 27/10 (Friendly a 1,15x, Avatar III, ~14–17 s), para seguir lendo a queda de alcance dos stories com a produção igual. Sem expressiveness nem motionPrompt (o Avatar III não aceita)
heygen_video_id: 9ac84966600763f14d0fd759ea6c0e09
creditos_heygen: (preencher)
horario_publicacao: 2026-10-28 16:00 BRT (quarta)
buffer_post_id: (preencher)
qa: (preencher)
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo (src/app/play/page.js do repo navistron, blob 36d68b9a, sem commit desde 07/09): não há botão nem tecla de pausa (nenhum listener de teclado fora do campo do nick e nenhum visibilitychange); o jogo roda num laço de requestAnimationFrame com o passo de tempo limitado a 0,05 s (dt = Math.min((ts − lastTime)/1000, .05)), e meteoros, boosts, tiros, o relógio da partida (timeAlive) e o ponto por segundo andam por esse dt. MDN ("Window: requestAnimationFrame() method", atualizada em 21/08/2026; "Page Visibility API", atualizada em 30/12/2025): "requestAnimationFrame() calls are paused in most browsers when running in background tabs or hidden iframes"; a página fica oculta ao trocar de aba, minimizar a janela ou com a tela desligada. Logo, com a aba ou o aplicativo em segundo plano, o laço para, e na volta o 1º passo é de no máximo 0,05 s: a partida continua de onde parou. A gravação no servidor (src/lib/scoreValidation.js, blob 05c469ac) só recusa um tempo de partida maior que o tempo real desde o início × 1,15 — uma pausa não invalida a partida. Lido em 28/10/2026 ~01:20 BRT
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela):

O Navistron não tem botão de pausa, mas a sua partida sabe esperar. Se você trocar de aba ou de aplicativo no meio do jogo,
tudo congela: os meteoros param no ar, e o tempo da partida também. Quando você volta, continua de onde parou. Joga hoje e
põe o seu nick no game over!
