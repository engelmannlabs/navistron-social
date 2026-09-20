# Playbook — Instagram @navistron

Objetivo único: **fazer gente jogar o Navistron** (navistron.io — grátis, sem login, no navegador).
Este arquivo é a memória da operação. Cada rodada diária lê, executa e **atualiza** as seções
"Aprendizados" e o `log/experiments.md`. Mantenha-o curto e factual.

## 1. O que sabemos do público (base: Buffer, 25 posts, fev–set/2026)

- Alcance típico de uma imagem: 100–300 contas. Outliers: 1.100–1.500 quando o Instagram distribui um Reel.
  **O primeiro post automatizado (08/09, imagem) teve 1 visualização nas primeiras horas** — imagem parada
  quase não é distribuída para quem não segue. Reels são a aposta para alcance; imagem/carrossel para
  conversa com quem já segue.
- **O único post que engajou de verdade** (25/06, 7,6% eng., 70 likes, 16 comentários, 11 saves) foi
  pessoal + desafio: "me ajudem a compartilhar este projeto pessoal… duvido alguém bater 25k".
  Os demais ("Jogue grátis, link na bio") ficaram em 0–2 likes com alcance parecido.
- Reels antigos (gameplay) tiveram views, mas tempo médio de 2–8 s → o gancho tem de estar no 1º segundo.
- O desafio de 25k foi batido 11 dias depois (VASCO, 25.971 em 06/07). Desafios com número funcionam.
- Público fala português; nomes dos pilotos ativos: VASCO, AMM2026 (e variações), GUI, BAHIA2026, 哎呦呦, EDMORPHE (novo em 11/09), ASA (novo em 14/09, já 6º geral).
- **Quando o público joga (semana 37, 07–13/09):** 92% das partidas entre 10h e 17h em dias úteis, 68% entre 14h e 17h;
  1 partida depois das 17h na semana inteira; fim de semana quase zero (1 partida no sábado, 0 no domingo). Quem joga,
  joga em série (5–16 partidas seguidas, uma a cada ~3 min). Isso é o jogo, não necessariamente o Instagram — mas é a
  melhor pista de horário que temos (hipótese d, seção 4).
- **E no Instagram o horário é o mesmo:** o post das 13:00 de 16/09 alcançou 133 contas; os posts de 18:30, 19:30 e
  20:30 da mesma semana ficaram entre 1 e 30. Horário explica mais do que pilar, gancho ou formato.

## 2. Pilares de conteúdo (rotacionar; nunca dois iguais em dias seguidos)

| Pilar | Gancho | Fonte |
|---|---|---|
| **Desafio** | "Ninguém chegou ao Tier V", "só 1 piloto passou de 20 mil", "quem chega a Y?" | /stats (best tier, recorde, partidas por score) |
| **Ranking da semana** (segundas) | top 5 dos últimos 7 dias, nome em destaque; contagem regressiva em reel | /stats?periodo=7d (+ `&visao=partidas&ordem=data`, 50 por página, `&pagina=2`, para partidas por dia/hora) |
| **Hall da fama / shout-out** | piloto que bateu recorde, subiu de tier, entrou no top 3 | /stats, /ranking |
| **Mecânica explicada** | fórmula de pontos, HP dos meteoros por tier, 5 boosts = 1 tier, mísseis teleguiados da nave (159 pts no Tier II, até 5 por salva) | código do jogo (`src/app/play/page.js`) + blog do site (fallback quando /stats não abre) |
| **Marco** | 500 partidas, 50 pilotos, 20h jogadas, primeira partida no Tier V | /stats (totais) |
| **Bastidor do dev** | primeira pessoa, honesto, curto | conversa com o Guilherme |

## 3. Formatos e mix semanal

| Formato | Arquivo | Quando usar | Regras da arte |
|---|---|---|---|
| **Reel** (9:16, 1080×1920, 8–15 s, 30 fps) | `post.html` com `<meta name="post-type" content="reel">` + `audio.json` opcional | **Padrão para alcance.** Desafio, recorde, contagem regressiva do ranking, mecânica animada, marco | Gancho legível no **frame 0** (texto grande já visível); 1 ideia por cena, 3–5 cenas; número grande animado (contador) sempre que houver número; CTA nos últimos 2 s; texto entre y=300 e y=1500 (zonas seguras); trilha chiptune própria (`scripts/audio.mjs`, `hit` no clímax); capa (`reel-cover`) no instante do gancho completo |
| **Carrossel** (3:4, 3–6 slides) | `post.html` (slide 1) + `slide-2.html`… | Ranking semanal (1 piloto por slide), mecânica passo a passo, "5 fatos da telemetria" | Slide 1 = gancho + "arrasta →"; cada slide 1 ideia; último slide = CTA + @navistron; mesma paleta em todos |
| **Imagem única** (3:4) | `post.html` | Marco, shout-out rápido, bastidor | Título ≤ 12 palavras, número grande, cores dos tiers |

Mix semanal alvo (ajustar com os dados): **3–4 reels, 1–2 carrosséis, 1–2 imagens**. Segunda-feira: ranking
(carrossel ou reel de contagem regressiva 5→1). Enquanto os reels tiverem alcance ≥ 3× o das imagens, eles ficam
como formato padrão.

## 4. Regras de publicação

- **1 publicação por dia.** Uma segunda só se houver evento (recorde quebrado, Tier V alcançado, marco).
  Nunca mais de 2/dia. Instagram permite 25/dia pela API, o público não.
- Janela padrão **18:30–21:00 (America/Sao_Paulo)**. Rotacionar o horário para testar: 18:30 / 19:30 / 20:30.
  Segunda-feira: ranking semanal às 19:30. Se a rodada rodar atrasada e a janela já tiver passado, publicar
  ainda no dia (até ~22:30) e anotar como "fora da janela" — melhor que perder o dia.
- **Horário padrão: 13:00, todos os dias.** O reel diurno de 16/09 fechou em **135 de alcance / 148 views**, o melhor da
  série. Mas o horário ajuda, não decide sozinho: o post de 18/09 às 19:30 fez **45** enquanto os de 15 e 17/09 (18:30 e
  20:30) fizeram 1 cada. Ou seja, 13:00 é a melhor aposta conhecida e a janela noturna não está morta — é o plano B de
  rodada atrasada (publicar até ~22:30 e anotar "fora do slot"). Reavaliar quando 19, 20 e 21/09 fecharem: se a mediana
  dos diurnos ficar abaixo de 30, voltar a alternar os horários.
- Legenda: primeira pessoa (é o Guilherme falando), 3–6 linhas curtas, **um pedido explícito**
  (comente, marque alguém, mande print), fecha com "grátis, sem login, link na bio 🚀". 5–8 hashtags
  no fim: `#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros` (+ `#reels` em reels).
- **Todo número vem da telemetria e traz a data.** Se um dado não puder ser confirmado em /stats,
  não entra. Nunca inventar piloto, score ou marco. Não fazer promessa que o Guilherme não fez.
  Antes de afirmar "só X pilotos…", conferir também as partidas anônimas em `?visao=partidas&ordem=score`.
- **Toda mecânica citada é conferida no código do jogo** (`src/app/play/page.js` no repo `navistron`, via `search_code` +
  `get_file_contents`; constantes: `TIER_DEFS`, `TIER_DIFF`, `getDiff`, `getMissileDef`, `spawnMeteor`, `spawnThings`, `collectBoost`).
  Os artigos antigos do blog são referência, não fonte: em 15/09 um artigo descreveu os mísseis teleguiados como inimigos e
  eles são da própria nave (corrigido em 17/09).
- **Cache do /stats:** as URLs de /stats podem devolver snapshots de horas diferentes (ex.: `/stats` com 490 partidas
  e `?visao=partidas&ordem=data` ainda com 475). Antes de citar um número, acrescentar um parâmetro qualquer
  (`&v=hhmm`) para forçar leitura nova e conferir que os totais batem entre as visões.
- **Se /stats estiver inacessível na rodada**, o único pilar permitido é "Mecânica explicada", usando apenas as
  regras fixas do jogo (tiers, dificuldade, fórmula de pontos, 5 boosts) — zero números de telemetria.
- Citar pilotos pelo nick como aparece no ranking (é público). Sem deboche com nick de ninguém.
- Não repetir o mesmo gancho em menos de 10 dias. Checar `log/experiments.md` antes de escolher.
- Buffer: `schedulingType = "automatic"`; imagem/carrossel → `metadata.instagram.type = "post"`;
  reel → `assets: [{ video: { url, metadata: { thumbnailOffset: <ms da capa>, title } } }]` e
  `metadata.instagram.type = "reel"`; sempre `shouldShareToFeed = true`.
- Se a arte não renderizou (arquivo ausente no repo) ou o Buffer devolveu erro: **não publicar**, registrar no log e avisar.

## 5. Pipeline técnico (resumo — detalhes no README e em ROTINA.md)

1. Ler métricas dos últimos posts no Buffer (`list_posts` com `includeMetrics`), telemetria em
   `navistron.io/stats` (geral, `?periodo=7d`, `?visao=partidas&ordem=data`, `?visao=partidas&ordem=score`) e o blog quando o pilar for mecânica.
2. Escolher formato + pilar + gancho, escrever legenda, montar `posts/AAAA-MM-DD-slug/` (imagem: `templates/base.css`;
   reel: `templates/reel.css` + `window.__seek(t)` — usar o reel anterior como esqueleto) e conferir com `scripts/qa.py`.
3. Publicar os HTML + `caption.md` no repo. O Actions renderiza `post.png`/`slide-N.png` (~1–2 min) ou `reel.mp4` + `reel-cover.png` (~3–5 min).
4. Confirmar que o arquivo existe; URL pública: `https://raw.githubusercontent.com/engelmannlabs/navistron-social/main/posts/<slug>/<arquivo>`.
5. Criar o post no Buffer (canal Instagram `navistron`) agendado para a janela do dia.
6. Registrar em `log/experiments.md` (data, slug, formato, pilar, gancho, horário, id do post no Buffer).
7. Para posts com ≥ 48 h, preencher métricas no log (reels: views, alcance, tempo médio assistido) e atualizar "Aprendizados".

## 6. Blog diário em navistron.io (1 artigo por dia, SEO)

**Onde fica**: repo privado `engelmannlabs/navistron` (Next.js 15, Vercel). Os 23 artigos originais estão em
`src/lib/blogArticles.js` (não editar — 340 KB). Os diários ficam em `src/lib/blog/daily/AAAA-MM-DD-slug.js`
(um objeto por arquivo, `export default`) e são registrados em `src/lib/blog/daily/index.js` (import + entrada no
array, mais recente primeiro). `src/lib/blog/index.js` junta tudo, ordena por data e alimenta `/blog`,
`/blog/[slug]` e o `sitemap.xml` (dinâmico: `lastmod` = data do artigo). `robots.txt` aponta o sitemap.
Merge em `main` = deploy automático na Vercel (~2 min; já levou 14 min em 18/09 — só tratar como falha depois de ~15 min).

**Formato do objeto** (igual aos originais): `slug`, `title`, `description`, `keywords`, `category`, `date`
(`AAAA-MM-DD`), `heroImage` + `heroImageAlt` (uma das imagens em `public/images/screenshots/` ou `pages/`),
`content` (HTML dentro de template literal — **nunca** usar crase ou `${` no texto). Tags cobertas pelo CSS:
`p, h2, h3, ul, ol, li, table/tr/th/td, code, strong, em, a`. FAQ no fim: `<h2>FAQ</h2>` seguido de pares
`<h3>pergunta</h3><p>resposta</p>` sem tags dentro (vira `FAQPage` no JSON-LD automaticamente). Tabelas podem ter
quantas colunas precisarem: desde 14/09 a página envolve cada `<table>` em `.table-scroll` (rolagem horizontal no celular).

**Checklist SEO de cada artigo**
- 1 palavra-chave principal + 2–3 secundárias; a principal aparece no título (≤ 65 caracteres), na `description`
  (140–160), no primeiro parágrafo, em ≥ 1 H2 e no slug (curto, sem data, sem stopwords).
- 1.300–1.900 palavras; intro que responde a pergunta em 3 linhas; H2 a cada 200–300 palavras; 1 tabela ou lista.
- 6–12 links internos: `/play`, `/ranking`, `/stats` (com filtros), 2–4 artigos existentes (conferir slugs em
  `daily/index.js` e em `blogArticles.js`), 1 link para o Instagram. Nunca link externo para concorrente sem motivo.
- Dados da telemetria **com data** ("em 10/09/2026, 457 partidas…"). Fórmulas do jogo conforme os artigos originais.
- Sem canibalização: antes de escolher o tema, ler os títulos/keywords dos artigos existentes; se o tema já existe,
  escolher ângulo diferente (pergunta, comparação, dado novo) e linkar o original.
- Categorias: `Guias e Estratégia`, `Telemetria e Ranking`, `Jogos`, `Tutoriais`, `Tecnologia`, `Mecânicas do Jogo`.

**Clusters e rotação semanal** (ajustar pelo Search Console quando houver dados)

| Dia | Cluster | Exemplos de pauta |
|---|---|---|
| Seg | Telemetria e Ranking | "Ranking da semana", "quem mais jogou em setembro", análise de horários de pico |
| Ter | Guias e Estratégia | como passar do tier X, como usar mísseis, erros que matam no Tier II |
| Qua | Jogos (aquisição) | "jogo de nave online grátis para celular", "jogos rápidos de 2 minutos", "jogos tipo Asteroids" |
| Qui | Mecânicas / Tecnologia | uma fórmula por artigo, bastidores do código |
| Sex | Guias ou Telemetria | dúvidas dos comentários do Instagram, desafio da semana |
| Sáb | Jogos / curiosidades | história do gênero, comparativos, listas |
| Dom | Tutoriais (dev) | Next.js, canvas, MongoDB, Playwright — com o Navistron como exemplo |

**Pipeline**: escrever o artigo localmente → validar com `scripts/validate-blog.mjs` (repo navistron; slug único,
campos, tamanho, FAQ, links internos, sem crase/`${`) → `create_branch` (`blog/AAAA-MM-DD-slug`) → `push_files`
(artigo + `daily/index.js` atualizado) → `create_pull_request` → `merge_pull_request` (squash) → esperar ~3 min →
WebFetch em `https://navistron.io/blog/<slug>?v=<data>` e no `sitemap.xml`. Registrar em `log/blog.md`
(data, slug, cluster, keyword, URL). O post do Instagram do dia pode citar o artigo ("link na bio").

**Indexação**: `sitemap.xml` e `robots.txt` já existem. Falta confirmar a propriedade no Google Search Console
(`verification` em `src/app/layout.js` está vazio — se o Guilherme passar o token, adicionar) e enviar o sitemap lá.

## 7. Aprendizados (atualizar a cada rodada — o mais recente primeiro)

- 2026-09-20 · **O horário ajuda, mas não decide sozinho.** O post de 18/09 às 19:30 chegou a **45 de alcance em 29 h** —
  segundo melhor da série e o único noturno distribuído desde 14/09. Com 16/09 (13:00) em 135 e 15 e 17/09 (18:30 e 20:30)
  em 1, a leitura honesta é que o Instagram distribui de forma irregular e o slot das 13:00 é a melhor aposta, não uma
  garantia. O sábado às 13:00 estava em 1 com 7 h, cedo demais para ler. Telemetria parada: 508 partidas, nenhuma desde
  18/09 17:41 — fim de semana zerado outra vez, o que confirma que o jogo só acontece em dia útil à tarde e sugere que
  **o post de fim de semana serve para alcance, não para jogada**. Sem evento, o post do dia saiu do histórico: as três
  melhores partidas de sempre são todas do VASCO e ninguém passa de 20 mil há 76 dias. Nota de produção: gancho de cinco
  linhas exige baixar a fonte do título (168px) e subir a camada para top 420 — a 210px o texto passa de y=1500 e cai na
  zona onde o Instagram põe a legenda.
- 2026-09-19 · **A 500ª partida saiu — e foi anônima.** Aconteceu em 18/09 às 16h22 (846 pontos, Tier II) e ninguém
  reivindicou, apesar do pedido de print no post do dia anterior. O dia rendeu **9 partidas entre 16h22 e 17h41**, a tarde
  mais movimentada desde 14/09: BAHIA2026 voltou com 18.738 (3º geral) e entrou o 40º piloto, EDDMORPHE (8.695). De novo
  tudo entre 16h e 18h — o jogo tem um único horário. Métricas: o diurno de 16/09 subiu para **135 de alcance em 77 h** e
  os três posts noturnos em volta dele (15, 17 e 18/09) ficaram em 1. Com isso o slot das 13:00 passa a valer **todos os
  dias** (seção 4) e o post de hoje, sábado às 13:00, é o teste do fim de semana. Os dois pedidos que a conta já fez
  ("me manda o print da 500ª", "reivindique a partida anônima") tiveram resposta zero: com 135 de alcance e 0 comentários,
  o gargalo agora é claramente **interação**, não distribuição. Próximo teste, depois do 3º post diurno: pedido de
  comentário na primeira linha da legenda, em vez da terceira. Organização: incidentes de 08 a 14/09 foram para
  `log/incidentes-2026-09-08-a-14.md` para manter o log diário curto.
- 2026-09-18 · **O horário era o gargalo.** O reel diurno de 16/09 (13:00) fechou em **133 de alcance e 145 views** — 4,4×
  o melhor noturno (30, em 13/09) e 133× o de 15/09, que morreu em 1. Mesma conta, mesmo formato, mesmo tipo de gancho e
  de pedido: a única variável era a hora. O alcance chegou quase todo entre 24 h e 48 h, então a régua de leitura continua
  sendo ≥ 40 h. Decisão: **13:00 vira o horário padrão em dia útil** (seção 4). Segundo sinal, ainda fraco: as duas
  primeiras partidas desde 14/09 saíram em 17/09 às 16:01 e 16:04 (16.998 e 8.750, anônimas) — a maior delas seria o 6º
  lugar geral. Contra: a rodada de hoje ficou parada das 11:00 às 18:44, perdeu o slot das 13:00 e o post do marco 500 saiu
  às 19:30; o artigo do blog levou 14 min para ficar no ar (contra ~3 min). Interação segue em zero em 10 posts: o próximo
  teste, depois de 3 posts diurnos, é mover o pedido de comentário para a **primeira linha** da legenda.
- 2026-09-17 · **Dois posts seguidos sem distribuição**: 15/09 (shout-out ASA, 18:30) ficou em 1 de alcance em 29 h e 16/09
  (teste diurno, 13:00) em 1 em 10 h, logo depois do melhor reel da série (13/09, 30). Nem horário nem pilar explicam: 18:30,
  13:00, shout-out e desafio deram o mesmo 1. Balanço honesto de 9 posts automatizados: alcance entre 1 e 30 (mediana ~11),
  1 like em 2 posts, zero comentários/saves/compartilhamentos e zero partidas atribuíveis — o jogo está há 3 dias sem
  nenhuma partida (497 desde 14/09 14:28). O que a rotina consegue sozinha (formato, horário, gancho, blog) está feito e
  medido; o que falta é sinal humano na conta. **Proposta ao Guilherme (no relatório de hoje):** (a) compartilhar o reel do
  dia nos stories e curtir/comentar os posts; (b) gravar um "bastidor do dev" na própria voz — o único formato que já
  funcionou aqui (25/06: 1.309 de alcance, 16 comentários); (c) seguir e comentar em perfis de jogos indie brasileiros. A
  rotina continua diária enquanto isso. Regra nova (seção 4): mecânica só com o código do jogo aberto — os mísseis
  teleguiados são da nave, não inimigos; o artigo de 15/09 foi corrigido (PR #8) e virou o post + artigo de hoje. Reel de
  mecânica às 20:30 (2º teste do horário do melhor reel); avaliação do teste diurno fica para 18/09 (48 h).
- 2026-09-16 · **Teste diurno no ar (hipótese d):** reel "O Navistron é jogado no expediente" agendado para as 13:00 de quarta —
  mesmo formato dos reels noturnos (contador + pedido de print) para isolar o horário; gancho tirado da própria telemetria de
  horário (68% das partidas entre 14h e 17h, zero no fim de semana, partida média de 2m02s). Régua de comparação: reels
  noturnos fecharam em 25 (12/09) e 30 (13/09); 14/09 estava em 22 com 29 h. Avaliar em 17/09 (24 h) e 18/09 (48 h); se o
  diurno ≥ 30, o slot de 13:00 vira fixo em dias úteis. Alerta: **15/09 teve zero partidas no jogo** mesmo com o reel do ASA
  no ar, e o reel de 15/09 abriu com 1 de alcance em 5,8 h (as métricas do Instagram só atualizam de madrugada — não
  concluir nada antes de 40 h). Blog: 1º artigo de aquisição em formato lista (jogos rápidos para o intervalo), citado na
  legenda; a série de listas "Jogos" já tem 4 artigos — o próximo de quarta deve atacar uma keyword diferente (ex.: "jogo
  de nave para celular sem baixar").
- 2026-09-15 · **A conta voltou a ser distribuída.** Reel de 13/09 (20:30): 5 → 29 de alcance entre o 1º e o 2º dia; reel de
  14/09 (19:30): 18 de alcance e 1 like em 15 h, melhor abertura da série; reel de 12/09 fechou em 25. Padrão: o alcance dos
  reels chega no 2º dia, então **só comparar posts com ≥ 40 h**. Ainda zero comentários e saves — o próximo gargalo é
  interação, não alcance. Evento do dia: piloto novo ASA entrou no top 10 geral (6º, 16.913) na primeira tarde, com Tier III
  na 1ª partida → shout-out com nick no gancho, em reel (18:30). Faltam 3 partidas para a 500ª: se sair até 16/09, cabe um
  2º post de marco. Amanhã (quarta 16/09): teste diurno às 13:00 (hipótese d), formato reel para isolar o horário.
- 2026-09-14 · **Primeiro sinal de distribuição:** o reel de marco de 12/09 ("partida nº 500 pode ser a sua", 18:30) chegou a
  **25 de alcance / 31 views em 40 h** (dobrou de 13/09 para 14/09) — 2,5× qualquer post automatizado anterior, ainda sem
  interação. O reel de 13/09 ("melhor partida sem nome", 20:30) começou mais devagar (5 em 14,5 h). O carrossel de 11/09
  fechou com 1 de alcance: carrossel + 22:00 é a combinação a evitar. Semana 37 no Instagram: 6 posts (1 imagem, 4 reels,
  1 carrossel); melhor formato = reel com contador + pedido concreto. Telemetria da semana 37 fechada (59 partidas, 4 pilotos
  registrados, 54 anônimas) e transformada no 1º artigo da série "Ranking da semana" + reel de contagem regressiva 4→1 às
  19:30. Descoberta: o público joga de segunda a sexta entre 10h e 17h — daí o teste diurno de quarta 16/09 às 13:00
  (seção 4). Ainda nenhuma jogada atribuível aos posts (0 partidas no domingo 13/09).

Aprendizados de 08 a 13/09 em [`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
