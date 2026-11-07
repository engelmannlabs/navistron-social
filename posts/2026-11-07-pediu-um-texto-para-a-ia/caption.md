---
data: 2026-11-07
formato: reel de dados 8 s (1080x1920, 30 fps; post.html + audio.json) — o 4º do teste "enquanto a IA pensa" no slot das 13:00
pilar: mecânica explicada com previsibilidade + provocação (teste "Enquanto a IA pensa", seção 3c do PLAYBOOK, fase 1: textos; para quem não programa). A regra do código: o 1º boost aparece sempre aos 8 s de jogo (boostTimer = 8 no começo de toda partida, contado depois do 3, 2, 1, GO!); depois, um a cada 12 a 20 s; cada boost pego soma um tiro ao leque
gancho: "PEDIU UM TEXTO PARA A IA?" (legível no quadro 0, com "TEXTO" em dourado; "jogue enquanto ela escreve" a partir de 0,5 s; a capa, em 1,6 s, tem os dois) → "o 1º boost aparece aos": o relógio corre de 0:00 a 0:08 (acelerado), com a barra ciano enchendo, e trava em dourado no hit da trilha (4,4 s), quando o boost dourado aparece acima da nave, com um pulso dourado → "8 segundos de jogo · em toda partida, depois do GO!" → "PEGOU? +1 TIRO." → "depois, 1 a cada 12 a 20 s · regra do código do jogo"; o boost cai sobre a nave e, pego (5,3 s), o leque passa a 2 tiros → "PEGUE O 1º BOOST. · NAVISTRON.IO · grátis, sem login · jogue enquanto a IA escreve"
horario_publicacao: 2026-11-07 13:00 BRT (sábado)
buffer_post_id: 6aeeaa47004e4879a73371a1 (agendado à 01:34 de 07/11 para as 13:00, com o vídeo do commit ef774ae6; scheduled, reel de 8,0 s, capa em 1,6 s, texto igual ao desta legenda, 7 hashtags)
render: reel.mp4 e reel-cover.png no commit ef774ae6 (~1,4 min depois do push de correção 7a268958), 1.905.883 bytes; 8,0 s, H.264 1080×1920 a 30 fps, AAC, áudio presente (média −17,3 dB, pico −1,1 dB); capa 1080×1920; quadros conferidos (o gancho inteiro no quadro 0; "jogue enquanto ela escreve" a partir de 0,6 s; a capa, em 1,6 s, com os dois; o relógio aos 3,0 s, com a barra ciano; aos 4,5 s, 0:08 em dourado, "PEGOU? +1 TIRO." e o boost dourado com o pulso; aos 5,0 s, o boost sobre a nave e o marcador "depois, 1 a cada 12 a 20 s"; o CTA aos 7,6 s). O 1º push (cd15f8f0) gravou o post.html 3 bytes menor: o conector decodificou o escape da estrela (U+2605) no fillText e gravou o caractere ★, o mesmo texto para o JavaScript; o render dele (eb124df4) saiu igual, e o push de correção deixou o arquivo igual ao local
teste_do_dia: teste "enquanto a IA pensa", fase 1 (textos), o 4º do slot das 13:00 — ângulo: quem não programa (pediu um texto para a IA) e a previsibilidade do 1º boost; a legenda usa as hashtags desse público. Palavras do gancho: "pediu" e "texto", fora dos ganchos dos últimos 10 dias ("IA" é a palavra do próprio teste). A gravação de gameplay ainda não está em footage/, então a fase 2 (montagem) espera o vídeo
fonte_dados: código do jogo (src/app/play/page.js, blob 36d68b9a): startGame() com boostTimer = 8; update(dt) só roda com a partida andando (gameRunning, depois de runCountdown: 3, 2, 1, GO!); spawnBoost() solta o boost no alto do campo e boostTimer = 12 + Math.random() × 8; collectBoost() com spreadLevel++ e, a cada 5, tierUp(); spawnBullets com degPerLevel[2] = 12 (±6°). Telemetria: navistron.io/stats, lido em 07/11/2026 por volta de 01:03 BRT (duas leituras por visão, com ?v=0107a e 0107b, iguais, e uma 3ª com ?v=0107z7k e 0107z8k, igual): 700 partidas, a última em 05/11 às 12:37 — a sexta 06/11 não teve partida; média de 2m 4s. O relógio 0:00–0:08 do reel é acelerado (ilustrativo)
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
---

Pediu um texto para a IA? Jogue uma partida de Navistron enquanto ela escreve: aos 8 segundos, aparece o 1º boost.

É regra do código do jogo: em toda partida, depois do 3, 2, 1, GO!, o primeiro boost aparece aos 8 s — sempre. Depois, vem um a cada 12 a 20 s: cada um que você pega soma um tiro ao leque e, no 5º, a nave sobe de tier.

A partida média dura 2m 4s (700 partidas até ontem, 06/11): cabe na espera. Se a IA terminar antes, troque de aba — o jogo congela e espera por você.

E você: lê o texto da IA inteiro ou só copia e cola? Responda nos comentários.

Grátis, sem login, link na bio 🚀

#navistron #ia #inteligenciaartificial #produtividade #jogogratis #jogosonline #reels
