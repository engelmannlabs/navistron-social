---
data: 2026-11-05
formato: reel de dados 8 s (1080x1920, 30 fps; post.html + audio.json) — o 2º do teste "enquanto a IA pensa"
pilar: mecânica explicada com previsibilidade + provocação (teste "Enquanto a IA pensa", seção 3c do PLAYBOOK, fase 1: textos). A regra do código: aos 10 s de toda partida, o jogo pergunta "Tá achando fácil?"; depois, solta uma provocação a cada 10 s, sorteada entre 102 frases
gancho: "ATÉ UM ROBÔ JOGARIA MELHOR." (legível no quadro 0, com "MELHOR." em dourado; "quem diz é o próprio jogo" a partir de 0,5 s; a capa, em 1,6 s, tem os dois) → "o jogo provoca no relógio": o relógio da partida corre de 0:00 a 0:10 (acelerado), com a barra rosa enchendo, e trava em dourado no hit da trilha (4,4 s), quando entra "TÁ ACHANDO FÁCIL?" e um pulso rosa sai da nave; a barra recomeça → "depois, 1 a cada 10 s · sorteada entre 102 frases" → "PROVA QUE NÃO. · NAVISTRON.IO · grátis, sem login · joga enquanto a IA pensa"
horario_publicacao: 2026-11-05 13:00 BRT (quinta)
buffer_post_id: 6aec05d780f7fd0537ece60a (agendado à 01:28 de 05/11 para as 13:00, depois de o artigo do dia aparecer no ar; scheduled, reel de 8,0 s, capa em 1,6 s)
render: reel.mp4 e reel-cover.png no commit eadaa05e (~1,5 min depois do push), 1.972.028 bytes, igual à main; 8,0 s, H.264 1080×1920 a 30 fps (240 quadros), áudio presente (média −16,8 dB, pico −1,1 dB); quadros conferidos (o gancho inteiro no quadro 0; na capa, em 1,6 s, o gancho e "quem diz é o próprio jogo"; o relógio de 0:00 a 0:10 com a barra rosa enchendo; aos 4,4 s, 0:10 em dourado, o pulso rosa da nave e "TÁ ACHANDO FÁCIL?"; de ~4,9 a ~5,5 s, "depois, 1 a cada 10 s" e "sorteada entre 102 frases"; o CTA a partir de ~6,1 s até o último quadro)
teste_do_dia: teste "enquanto a IA pensa", fase 1 (textos), post 2 — ângulo: a provocação do próprio jogo ("até um robô jogaria melhor", uma das 102 frases) para quem espera a IA escrever, programando ou não; a legenda fala com quem não programa (o texto que a IA escreve) e usa as hashtags desse público. Palavras do gancho: "robô", "jogaria" e "melhor", fora dos ganchos dos últimos 10 dias. Pedido na 1ª linha: "joga enquanto a IA escreve o seu texto e prova que não"; pergunta no fim para puxar comentário; a legenda cita o artigo do dia (trocar de aba pausa o jogo)
fonte_dados: código do jogo (src/app/play/page.js, blob 36d68b9a, sem commit desde 07/09/2026): startGame() zera tauntTimer = 10 e tauntIndex = 0 a cada partida; em update(dt), que só roda com a partida em andamento, tauntTimer -= dt e, ao chegar a 0, volta a 10 e mostra TAUNT_FIRST ("Tá achando fácil?") na 1ª vez e, depois, uma frase sorteada de TAUNTS (102 frases, contadas no código; "Até um robô jogaria melhor" é uma delas), 3,5 s na tela; timeAlive anda com o mesmo dt. Telemetria: navistron.io/stats lido em 05/11/2026 entre ~01:05 e ~01:20 BRT (o geral e a lista por data com ?v=qui0511a, b, x1, x2 e z9, iguais; a visão de 7 dias atualizada com qui0511c e z10 — começo em 29/10 09:22 — e vinda da cópia de 04/11 com x3): 699 partidas, a última em 03/11 às 12:46; a quarta 04/11 não teve partida; média de 2m 4s
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
---

Até um robô jogaria melhor. Quem diz isso é o próprio Navistron — joga enquanto a IA escreve o seu texto e prova que não.

Aos 10 s de toda partida, o jogo pergunta: "Tá achando fácil?". Depois, solta uma provocação a cada 10 s, sorteada entre 102 frases (regra do código do jogo).

Uma partida dura, em média, 2 minutos (2m 4s em 699 partidas, até 04/11). Se a IA terminar antes, troca de aba: o jogo congela e te espera — o blog de hoje explica, link na bio.

E aí: você joga melhor que um robô ou já deixou a IA fazer isso também? Responde nos comentários.

Grátis, sem login, link na bio 🚀

#navistron #ia #inteligenciaartificial #produtividade #jogogratis #jogosonline #reels
