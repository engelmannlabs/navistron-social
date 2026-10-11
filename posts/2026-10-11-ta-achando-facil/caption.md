---
data: 2026-10-11
formato: reel 14,0 s (reel de dados do calendário S41, dom 11)
pilar: mecânica explicada — as provocações do jogo (a 1ª fixa e as outras sorteadas entre 102, uma a cada 10 s vivo); diferente de 09/10 (desafio/telemetria: a 7 pontos do top 10) e de 10/10 (reação a evento: as 20 horas fecharam)
gancho: "TÁ ACHANDO FÁCIL?" (a 1ª provocação, no estilo do #taunt-text do jogo — mono, caixa alta, branca com brilho ciano —, legível desde o quadro 0; "é o que o jogo te diz aos 10 s de partida") → "depois, uma a cada 10 s vivo": relógio do tempo vivo de 0:20 a 0:50 com 4 das 102 frases ("MEU AVÔ JOGAVA MELHOR", "TIER I ETERNAMENTE", "ATÉ O WIFI JOGA MELHOR", "LICENÇA DE PILOTO: CASSADA"), "sorteadas entre 102 frases" → "a partida mais longa da história": contador até 31, com uma marca a cada 10 s numa linha do tempo de 0:00 a 5:14 ("provocações em 5:14 · VASCO DA GAMA · 07/10"; "partida média · 2:02 → 12") → "QUANTAS VOCÊ AGUENTA?"
horario_publicacao: 2026-10-11 13:00 BRT (domingo)
buffer_post_id: 6acb0e56f91f772d45b6680f (agendado à 01:19 de 11/10 para as 13:00; status scheduled, 14,0 s, capa em 2,0 s)
qa: reel.mp4 baixado pelo SHA do commit do render (8a4604d0) e conferido na folha de contato — 14,0 s, H.264 1080×1920 a 30 fps, AAC (média −17,7 dB); gancho legível no quadro 0 ("TÁ ACHANDO FÁCIL?"), o "aos 10 s de partida" em 0,7 s, a capa em 2,0 s com os dois, a montagem com o relógio de 0:20 a 0:50 e as 4 frases, o contador travando em 31 com as 31 marcas da linha do tempo, o "partida média · 2:02 → 12", a pergunta e o CTA; a main servia o mesmo arquivo (3.127.898 bytes) na hora do agendamento
instagram: metadata.instagram = { type: "reel", shouldShareToFeed: true }
fonte_dados: código do jogo — src/app/play/page.js (SHA 36d68b9a, última mudança em 07/09/2026, 94234551) e src/app/game.css (SHA 1d656730), conferidos em 11/10/2026: TAUNT_FIRST = 'Tá achando fácil?' e TAUNTS com 102 frases (nenhuma repetida); startGame() zera tauntTimer = 10 e tauntIndex = 0; o update() só desconta o tauntTimer com a partida rodando (depois da contagem regressiva, nave viva) e, ao chegar a 0, volta a 10 e mostra a frase — a 1ª é sempre TAUNT_FIRST, as outras saem de Math.random() entre as 102 (podem repetir); cada uma fica 3,5 s no meio da tela. Uma partida ouve floor(tempo / 10) provocações (o tempo salvo é Math.floor(timeAlive), que anda com o mesmo dt). Telemetria: navistron.io/stats lido em 11/10/2026 ~01:06 BRT (com ?v=; a página diz que datas e horários estão no fuso de Brasília) — 593 partidas, tempo médio 2m 2s (122 s → 12 provocações), última partida 09/10 às 16:50 (10/10 sem partidas); ?visao=partidas&ordem=tempo: 1º VASCO DA GAMA, 5:14 (314 s → 31), 30.577 pontos, Tier V, 20 boosts, 07/10 às 14:55; 2º anônima, 4:57 (09/09)
---

Joga uma partida hoje, aguenta as provocações e põe o seu nick no game over.

O Navistron fala com você durante a partida: aos 10 s, aparece no meio da tela "Tá achando fácil?". Depois vem uma provocação a cada 10 s vivo, sorteada entre 102 frases — de "Meu avô jogava melhor" a "Licença de piloto: cassada".

A partida média do jogo dura 2min02 e ouve 12. A mais longa da história, a do VASCO DA GAMA em 07/10 (5min14), ouviu 31.

Quantas você aguenta?

No blog de hoje: como sortear frases sem repetir em JavaScript, a partir das provocações do jogo — link na bio.

Números de navistron.io/stats em 11/10. Grátis, sem login, link na bio 🚀

#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros #reels
