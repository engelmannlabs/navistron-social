---
data: 2026-11-04
formato: reel de dados 8 s (1080x1920, 30 fps; post.html + audio.json) — o 1º do teste "enquanto a IA pensa"
pilar: mecânica explicada com previsibilidade + provocação (teste novo, pedido do Guilherme em 04/11 às 23:00: público = quem usa IA e fica esperando a resposta ou o código, e também quem não programa; objetivo = mais jogadores; fase 1 = trocar os textos, fase 2 = tipos de reel; tom apimentado, sem comprometer a página). A regra do código: trocou de aba, a partida congela; voltou, continua do mesmo ponto
gancho: "A IA PROGRAMA. VOCÊ ESPERA." (legível no quadro 0, com "ESPERA." em dourado; "e o jogo espera você" e as abas "IA · pensando" e "NAVISTRON" a partir de 0,5 s; a capa, em 1,6 s, tem os três) → "trocou de aba? a partida congela": o relógio da partida anda de 0:40 para 0:41; aos 3,2 s a aba da IA fica ativa ("IA · pronta", depois "pensando" de novo), a partida congela (véu azul, "congelada", o meteoro ao lado da nave contornado) e o relógio para em 0:41, em azul; no hit (4,4 s) a aba do jogo volta, o relógio fica dourado e anda para 0:42 (5,15 s) e o meteoro sai do contorno → "voltou: continua do mesmo ponto" → "ESPERA JOGANDO · NAVISTRON.IO · grátis, sem login · abre numa aba do navegador"
horario_publicacao: 2026-11-04 (quarta), publicado na hora (shareNow) depois do render, a pedido do Guilherme às 23:00 BRT — o 2º post do feed no dia
buffer_post_id: 6aebe717f283c8dd45b3b4c0 (publicado na hora, shareNow, às 23:16:55 de 04/11; sent às 23:17:51, https://www.instagram.com/reel/DfV8FMjmVHQ/; reel de 8,0 s, capa em 1,6 s)
render: reel.mp4 e reel-cover.png no commit f3a5c0ee (~1,5 min depois do push), 1.925.035 bytes, igual à main; 8,0 s, H.264 1080×1920 a 30 fps (240 quadros), áudio presente (média −17,2 dB, pico −0,9 dB); quadros conferidos (o gancho inteiro no quadro 0; na capa, em 1,6 s, o gancho, o subtítulo e as abas; aos 3,5 s a aba da IA ativa e "pronta", o véu azul, "congelada" e o contorno; aos 4,6 s o relógio dourado em 0:41 e a aba do jogo ativa; aos 5,33 s 0:42 e "voltou: continua do mesmo ponto"; o CTA no último quadro)
teste_do_dia: teste "enquanto a IA pensa", fase 1 (textos), post 1 — ângulo: provocação a quem programa com IA ("a IA programa, você espera") + a regra do jogo que serve a quem espera (a partida congela fora da aba). Palavras do gancho: "IA", "programa" e "espera", fora dos ganchos dos últimos 10 dias. Pedido na 1ª linha: "espera jogando"; pergunta no fim para puxar comentário. Hashtags para o público novo (#programacao #programador #dev #ia #inteligenciaartificial)
fonte_dados: código do jogo (src/app/play/page.js, blob 36d68b9a, sem commit desde 07/09/2026): o laço roda em requestAnimationFrame com dt = min((ts - lastTime) / 1000, 0,05); timeAlive += dt (o TIME do game over, em m:ss); o único envio ao sair é o sendBeacon do beforeunload. MDN, "Window: requestAnimationFrame() method" (lida em 04/11): as chamadas ficam pausadas em abas em segundo plano na maioria dos navegadores. Média de 2m 4s em 699 partidas: navistron.io/stats lido em 04/11/2026 ~01:03 BRT (até 03/11). O relógio 0:40–0:42 do reel é ilustrativo
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
---

A IA programa. Você espera. Então espera jogando — o Navistron abre numa aba do navegador.

Foi ver se a IA terminou? Trocou de aba, a partida congela. Voltou, ela continua do mesmo ponto: na volta, o jogo anda no máximo 0,05 s (regra do código do jogo).

Uma partida dura, em média, 2 minutos (2m 4s em 699 partidas, até 03/11).

E aí: você ainda programa ou só revisa o que a IA escreve? Responde nos comentários.

Grátis, sem login, link na bio 🚀

#navistron #programacao #programador #dev #ia #inteligenciaartificial #jogogratis #reels
