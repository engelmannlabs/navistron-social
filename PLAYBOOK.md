# Playbook — Instagram @navistron

Objetivo único: **fazer gente jogar o Navistron** (navistron.io — grátis, sem login, no navegador).
Este arquivo é a memória da operação. Cada rodada diária lê, executa e **atualiza** as seções
"Aprendizados" e o `log/experiments.md`. Mantenha-o curto e factual.

## 1. O que sabemos do público (base: Buffer, 25 posts, fev–set/2026)

- Alcance típico de um post: 100–300 contas. Outliers: 1.100–1.500 quando o Instagram distribui um Reel.
- **O único post que engajou de verdade** (25/06, 7,6% eng., 70 likes, 16 comentários, 11 saves) foi
  pessoal + desafio: "me ajudem a compartilhar este projeto pessoal… duvido alguém bater 25k".
  Os demais ("Jogue grátis, link na bio") ficaram em 0–2 likes com alcance parecido.
- Reels tiveram views, mas tempo médio de 2–8 s → gancho fraco nos primeiros 2 s. Só temos imagens
  estáticas por enquanto; compensar com título forte na arte.
- O desafio de 25k foi batido 11 dias depois (VASCO, 25.971 em 06/07). Desafios com número funcionam.
- Público fala português; nomes dos pilotos ativos: VASCO, AMM2026 (e variações), GUI, BAHIA2026, 哎呦呦.

## 2. Pilares de conteúdo (rotacionar; nunca dois iguais em dias seguidos)

| Pilar | Gancho | Fonte |
|---|---|---|
| **Desafio** | "Ninguém chegou ao Tier V", "duvido passar de X pts", "quem chega a Y?" | /stats (best tier, recorde) |
| **Ranking da semana** (segundas) | top 5 dos últimos 7 dias, nome em destaque | /stats?periodo=7d |
| **Hall da fama / shout-out** | piloto que bateu recorde, subiu de tier, entrou no top 3 | /stats, /ranking |
| **Mecânica explicada** | fórmula de pontos, HP dos meteoros por tier, 5 boosts = 1 tier, mísseis a 320 px/s | blog do site |
| **Marco** | 500 partidas, 50 pilotos, 20h jogadas, primeira partida no Tier V | /stats (totais) |
| **Bastidor do dev** | primeira pessoa, honesto, curto ("eu que programei não passo do Tier III") | conversa com o Guilherme |

## 3. Regras de publicação

- **1 post no feed por dia.** Um segundo só se houver evento (recorde quebrado, Tier V alcançado, marco).
  Nunca mais de 2/dia. Instagram permite 25/dia pela API, o público não.
- Janela padrão **18:30–21:00 (America/Sao_Paulo)**. Rotacionar o horário para testar: 18:30 / 19:30 / 20:30.
  Segunda-feira: ranking semanal às 19:30.
- Formato **1080×1440 (3:4)** — o Instagram exibe 3:4 inteiro no feed e na grade.
- Arte: título ≤ 12 palavras, 1 ideia só, número grande, cores dos tiers, fundo espaço. Nada de emoji na arte.
- Legenda: primeira pessoa (é o Guilherme falando), 3–6 linhas curtas, **um pedido explícito**
  (comente, marque alguém, mande print), fecha com "grátis, sem login, link na bio 🚀". 5–8 hashtags
  no fim: `#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros`.
- **Todo número vem da telemetria e traz a data.** Se um dado não puder ser confirmado em /stats,
  não entra. Nunca inventar piloto, score ou marco. Não fazer promessa que o Guilherme não fez.
- Citar pilotos pelo nick como aparece no ranking (é público). Sem deboche com nick de ninguém.
- Não repetir o mesmo gancho em menos de 10 dias. Checar `log/experiments.md` antes de escolher.
- Sempre `metadata.instagram.type = "post"`, `shouldShareToFeed = true`, `schedulingType = "automatic"`.
- Se a arte não renderizou (post.png ausente no repo) ou o Buffer devolveu erro: **não publicar**, registrar no log e avisar.

## 4. Pipeline técnico (resumo — detalhes no README)

1. Ler métricas dos últimos posts no Buffer (`list_posts` com `includeMetrics`), telemetria em
   `navistron.io/stats` (geral, `?periodo=7d`, `?visao=partidas&ordem=data`) e o blog quando o pilar for mecânica.
2. Escolher pilar + gancho, escrever legenda, montar `posts/AAAA-MM-DD-slug/post.html` a partir de `templates/base.css`
   (componentes prontos: `.ladder`, `.rank`, `.hero-number`, `.panel`) e renderizar localmente para conferir.
3. Publicar `post.html` + `caption.md` no repo (GitHub). O Actions renderiza `post.png` em ~2 min.
4. Confirmar que `post.png` existe; URL pública: `https://raw.githubusercontent.com/engelmannlabs/navistron-social/main/posts/<slug>/post.png`.
5. Criar o post no Buffer (canal Instagram `navistron`) agendado para a janela do dia.
6. Registrar em `log/experiments.md` (data, slug, pilar, gancho, horário, id do post no Buffer).
7. Para posts com ≥ 48 h, preencher métricas no log e atualizar "Aprendizados".

## 5. Aprendizados (atualizar a cada rodada — o mais recente primeiro)

- 2026-09-08 · Ponto de partida. Hipóteses a testar: (a) desafio com número > divulgação genérica;
  (b) citar piloto pelo nick gera comentário/compartilhamento; (c) 19:30 > 18:30 em alcance.
