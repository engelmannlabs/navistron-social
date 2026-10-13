---
data: 2026-10-13
formato: story da Estela, take único (Avatar IV, 13,6 s) num look do cenário criado para o post — o formato completo é só dos reels (decisão do Guilherme em 03/10); roteiro de 37 palavras pela conta de créditos até 28/10
pilar: "a Estela explica" (no celular, a nave voa um pouco acima do dedo) — diferente dos stories de 11/10 (telemetria/lembrete: a semana em nicks) e 12/10 (desafio: os três minutos) e do post do feed do dia (marco: a partida 600)
gancho: "Vai jogar Navistron no celular?" (palavra-chave "celular", fora dos ganchos dos últimos 10 dias)
cenario: a nave acima do dedo — a Estela no espaço estrelado, com uma navinha em delta (casco azul-claro, contorno ciano) e um pequeno toque de luz ciano logo abaixo dela, no quarto de cima do quadro, bem acima da cabeça. Pedido com "nothing glowing below her chin" e "no glowing outline around her body". Diferente do último vídeo dela (o relógio de estrelas, reel de 12/10) e do story anterior (o cronômetro dourado, 12/10)
look: a nave acima do dedo v2 — 02527e82b4916be28a792ea6f945b05b (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-13-story-dedo-v2-looks): navinha em delta e um arco de toque ciano logo abaixo dela, longe do cabelo; luz natural; fone só no pescoço, nada na cabeça, sem texto nem logo. A 1ª versão (44e79e69b4981102d9a7c59d743857c1, folha em posts/_lab-2026-10-13-story-dedo-looks) saiu com os anéis deitados como uma auréola encostada no cabelo, um foguete no lugar da navinha e um contorno ciano brilhante em volta do moletom, terminando num corte reto embaixo (o defeito do look vetado de 05/10), e foi descartada
variavel_testada: dica de controle no celular (o 1º story sobre o toque), sem nenhum número no roteiro; Friendly a 1,1x (37 palavras em 13,6 s, ~0,37 s por palavra), expressiveness low (6ª vez) e o motionPrompt das mãos paradas e fora do quadro nos 2 primeiros segundos
heygen_video_id: 3fb78109a02a1664365012798244359f
creditos_heygen: 165 → 163 (os dois looks, a 1ª versão descartada) → 158 (o vídeo de 13,6 s: 5, pela conta de ~1 crédito a cada 3,3 s, arredondado para cima). O story custou 7 (2 looks + vídeo 5)
horario_publicacao: 2026-10-13 16:00 BRT (terça)
buffer_post_id: (preencher)
qa: (preencher)
instagram: metadata.instagram = { type: "story", shouldShareToFeed: false, isAiGenerated: true }
fonte_dados: código do jogo — src/app/play/page.js (SHA 36d68b9a, conferido em 13/10/2026): TOUCH_OFFSET_Y = -140; no touchstart e no touchmove, o alvo da nave vai para o ponto do dedo com y − 140, num campo de 540×720 (o resizeCanvas mantém 3:4 e só muda a escala); no mousemove, o alvo é o próprio cursor, sem deslocamento, e o jogo desenha uma mira nele (só em aparelho sem toque); a nave persegue o alvo com SHIP_LERP = 12. Nenhum número de telemetria no roteiro (nada que mude entre a 01:00 e as 16:00)
---

Roteiro (fala da Estela; o story não tem texto nem legenda na tela):

Vai jogar Navistron no celular? Repara: a nave não fica embaixo do seu dedo. Ela voa um pouco acima dele. Então nem
precisa encostar nela: arrasta por baixo e vê tudo que vem. Joga hoje e testa!
