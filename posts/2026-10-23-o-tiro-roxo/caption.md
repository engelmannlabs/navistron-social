---
data: 2026-10-23
formato: reel da Estela 30,4 s (avatar HeyGen, 1080p), modo econômico — take único num look do cenário do post; o único post do feed do dia (calendário S43), às 19:00
pilar: desafio (o Tier VI, o do tiro roxo: nenhuma das 676 partidas chegou lá; o recorde parou no Tier V, com 20 boosts, e faltaram 5) — diferente de 21/10 (telemetria: com nick × sem nick) e 22/10 (boas-vindas ao MARCAO); o story do dia é bastidor (sete em oito)
gancho: "Ninguém chegou ao tiro roxo do Navistron." (palavras-chave "tiro roxo" e "ninguém chegou", fora dos ganchos dos últimos 10 dias; o "subir de tier enfraquece" de 14/10 e o "os tiros ficam rosa" de 08/10 ficaram de fora do gancho)
roteiro: "Ninguém chegou ao tiro roxo do Navistron. A cada cinco boosts, a sua nave sobe de tier e o tiro muda de cor: ciano, verde, amarelo, laranja, rosa. O roxo é o Tier seis, com vinte e cinco boosts. O recorde, trinta mil quinhentos e setenta e sete pontos, parou no rosa: vinte boosts, em cinco minutos e catorze. Faltaram cinco. Joga hoje e, se o seu tiro ficar roxo, põe o nick no game over. Te vejo no ranking!" (80 palavras; números por extenso para a voz; na legenda queimada, em algarismos e "Tier VI")
cenario: o tiro roxo — a Estela no espaço azul-escuro estrelado, de braços para baixo, com um brilho roxo misterioso saindo de trás de uma nebulosa escura no alto do quadro, como uma estrela roxa escondida, longe do cabelo (o Tier VI que ninguém viu). Pedido com "nothing glowing below her chin", "soft natural light on her, no glowing outline around her body" e "She is alone". Diferente do último vídeo dela (o story das 16:00: a fila de oito estrelinhas)
look: o tiro roxo — dc4467077d86fe5b18a6582ba6c241c3 (create_prompt_avatar com o setup como referência de rosto; folha em posts/_lab-2026-10-23-looks, à esquerda): fone só no pescoço, nada na cabeça, sem texto nem logo, mãos fora do quadro
variavel_testada: voz — Sofia Brazil - Excited a 1,15x no Avatar III, num desafio (a 1ª vez da Excited no Avatar III e a 1ª a 1,15x): 80 palavras em 30,4 s (~0,38 s por palavra, contra ~0,31 da Friendly no reel de 22/10). Sem expressiveness nem motionPrompt (o Avatar III não aceita); braços para baixo no look
heygen_video_id: 37a217b7664823ad2c7f1658796370ed
orcamento: 72 créditos no começo da rodada. Reserva = 30 + 8 × 6 stories (23 a 28/10) + 11 × 0 reels da Estela depois deste no calendário (a S43 não tem mais nenhum; o de 26 a 28/10 sai da leitura de 26/10) = 78; o formato completo (~35) deixaria 37 < 78 → modo econômico, no Avatar III (~4, contra ~10 no Avatar IV)
creditos_heygen: 72 → 70 (os dois looks do dia) → 64 (os dois vídeos juntos, 16,8 s e 30,4 s, 6; pelo arredondamento medido no Avatar III, 2 e 4). O reel custou ~5 (look 1 + vídeo ~4)
horario_publicacao: 2026-10-23 19:00 BRT (sexta)
buffer_post_id: 6adaec761dc335d347f610f9 (agendado às 02:11 de 23/10 para as 19:00; scheduled, 30,4 s, isAiGenerated true, capa em 2,0 s)
qa: reel.mp4 da 2ª renderização (legenda-digitos.srt em 10 frases, commit 015bcc18) baixado pelo SHA do commit e conferido; a main serve o mesmo arquivo (10.077.030 bytes). Transcrição da HeyGen (legenda.srt da 1ª renderização, commit 0ccf2ca2) igual ao roteiro palavra por palavra (80 palavras); legenda certa nas 10 frases, no máximo duas linhas (conferido antes no Chromium com a fonte da legenda e depois no vídeo), números em ciano (5, 25, 30.577, 20, 5min14, 5); rosto sempre acima da legenda e sem nada na frente (pele estável na região do rosto, a 10 fps: de 3.525 a 4.121); áudio presente (média −23,0 dB, pico −4,2 dB); 30,4 s, H.264 1080×1920 a 30 fps. Mãos: nenhuma no quadro o vídeo todo (zero pixel de pele na faixa de baixo e nas bordas). Expressão mais animada que com a Friendly (sobrancelhas, sorriso), piscadas naturais, boca acompanhando a fala, dentes e olhos sem defeito. No alto, o brilho roxo quase não mexe (diferença contra a mediana do vídeo de no máximo 1,2). Capa em 2,0 s: ela de olhos abertos, o brilho roxo e a legenda "Ninguém chegou ao tiro roxo do Navistron."
render: a 1ª renderização (run #136, ~2 min) só saiu depois que dois runs anteriores estouraram o limite de 15 min do job (a folha dos looks levou 14 min; ver o log de 23/10); a 2ª, em 1,5 min
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true, isAiGenerated: true }
teste_do_dia: S43 — 1 post por dia; pergunta da semana: qual horário serve melhor a Estela (13:00 × 19:00)? Hoje, a 2ª Estela da S43 às 19:00 (a de 20/10 também foi às 19:00; a de 22/10, às 13:00); o pedido "põe o seu nick no game over" abre a legenda (26º dia); a legenda cita o artigo do dia (quanto dura uma partida)
fonte_dados: código do jogo (src/app/play/page.js, SHA 36d68b9a, conferido em 23/10: TIER_DEFS com as cores dos 7 tiers — #7df4ff, #80ff90, #ffdd00, #ff8c00, #ff4488, #cc44ff e #ffffff —, o brilho do tiro em c1/c2 de cada tier, collectBoost/tierUp a cada 5 boosts) e telemetria de navistron.io/stats lida em 23/10/2026 ~01:08–01:30 BRT, com ?v=: geral (676 partidas, 105 com nick, 571 anônimas, 47 pilotos, 23h11m, média 5.778) e lista de partidas por tempo, páginas 1 a 14 (as 676; a mais longa, 5min14, é a do recorde — VASCO DA GAMA, 30.577, Tier V, 20 boosts, 07/10 às 14:55; a 2ª com mais boosts tem 17; só duas passaram dos 4min56 em que o 25º boost aparece, no mínimo)
---

Joga hoje e, se o seu tiro ficar roxo, põe o seu nick no game over: ninguém chegou lá ainda.

No Navistron, a cada 5 boosts a nave sobe de tier e o tiro muda de cor: ciano, verde, amarelo, laranja, rosa. O roxo é o Tier VI, no 25º boost.

Em 676 partidas, até 22/10, nenhuma chegou ao Tier VI. O recorde, 30.577 pontos do VASCO DA GAMA em 07/10, parou no rosa: 20 boosts em 5min14, a partida mais longa da história. Faltaram 5.

Quanto dura uma partida, do primeiro segundo ao game over, está no artigo de hoje no blog — link na bio.

Números do código do jogo e de navistron.io/stats, lidos em 23/10 à 01:10. Grátis, sem login, link na bio 🚀

— Estela

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
