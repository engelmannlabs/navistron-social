---
data: 2026-10-05
formato: story da Estela, take único (Avatar IV, 19,9 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10)
pilar: lembrete do dia / "a Estela explica" — como pôr o nick no game over; complementa o reel do dia (o pódio da semana com dois lugares vagos) sem repetir o assunto
gancho: "Pôr o seu nick no Navistron é rapidinho."
cenario: o nome que entra no ranking — a Estela no espaço com uma plaquinha de nome dourada, em branco, flutuando ao lado da cabeça (diferente do pódio do reel do dia)
look: o nome no ranking v2 — a3ced55a4cb1f0bd865d9f8bd70488a7 (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-05-story-nome-looks). A 1ª versão (ee9b0791ee1057037de35a7c31910ac9) saiu com um contorno brilhante em volta do corpo, que terminava num recorte arredondado, e a plaquinha parecendo um crachá no peito: refeita uma vez
variavel_testada: motionPrompt "inclinada pra câmera" (1ª vez; plano de testes, gestos), com expressiveness medium e sem gestos de mão; voz Sofia Brazil - Friendly
heygen_video_id: 0c3a3f7cf96e000544d1da98cadbcaba
creditos_heygen: o dia foi de 286 a 266 (3 looks — um do reel e dois deste story, um refeito —, o reel de 32,9 s e este story de 19,9 s); este story, ~8 (2 looks + ~6 do vídeo)
horario_publicacao: 2026-10-05 16:00 BRT
buffer_post_id: (a preencher depois do agendamento)
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo (src/app/play/page.js do repo navistron, sem mudança desde 833dddae), conferido em 05/10/2026 — na tela de game over, o rótulo "ENTER YOUR NAME" e o campo com maxLength 20; submitName() salva o nome com trim e em maiúsculas (até 20 caracteres) e abre o ranking com a linha da partida destacada; com o campo em branco, a partida vai para AnonymousDB (anônima) e não entra no ranking
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela):

Pôr o seu nick no Navistron é rapidinho. Quando a partida acaba, a tela pede o seu nome: digita até vinte caracteres e
salva. Se deixar em branco, a partida fica anônima e não entra no ranking. Hoje, faz o teste: joga, põe o nick e vê o seu
nome aparecer lá. Te vejo no ranking!
