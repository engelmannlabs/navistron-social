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
- Público fala português; nomes dos pilotos ativos: VASCO, AMM2026 (e variações), GUI, BAHIA2026, 哎呦呦, EDMORPHE (novo em 11/09), ASA (novo em 14/09, já 6º geral), EDDMORPHE (40º piloto, 18/09).
- **Quando o público joga:** semana 37 (07–13/09): 92% das partidas entre 10h e 17h em dias úteis, 68% entre 14h e 17h.
  Semana 38 (14–20/09): as 17 partidas saíram em **3 tardes apenas**, todas entre 14h12 e 17h41, zero no fim de semana.
  Quem joga, joga em série (5–16 partidas seguidas, uma a cada ~3 min). **Fim de semana é zero há três semanas seguidas**:
  post de sábado/domingo serve para alcance, não para jogada.
- **E no Instagram o horário é parecido:** os posts das 13:00 fizeram 135 (16/09), 28 (19/09, sábado) e 14 em 12 h (20/09);
  os noturnos fizeram 1 (15/09), 1 (17/09) e 46 (18/09). O slot diurno tem a melhor mediana, mas não é garantia.

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
como formato padrão. **Medida prática do gancho:** cada linha do título cabe em ~13 caracteres a 168px; 4 linhas a
partir de `top: 420px` terminam por volta de y=1250, dentro da zona segura.

## 4. Regras de publicação

- **1 publicação por dia.** Uma segunda só se houver evento (recorde quebrado, Tier V alcançado, marco).
  Nunca mais de 2/dia. Instagram permite 25/dia pela API, o público não.
- **Horário padrão: 13:00, todos os dias, inclusive fim de semana.** Série até 21/09 — diurnos: 135 (16/09, qua),
  28 (19/09, sáb), 14 em 12 h (20/09, dom); noturnos: 1 (15/09, 18:30), 1 (17/09, 20:30), 46 (18/09, 19:30).
  A mediana dos diurnos está acima da dos noturnos e o slot funciona também no fim de semana, mas **o horário ajuda,
  não decide sozinho**: o Instagram distribui de forma irregular. A janela noturna (18:30–22:30) é o plano B de rodada
  atrasada — publicar ainda no dia e anotar "fora do slot". Desde 21/09 a rodada roda à 01:00, então há 12 h de margem:
  perder o slot só acontece se a rodada travar.
- **Só comparar posts com ≥ 40 h.** O alcance dos reels chega quase todo entre 24 h e 48 h, e as métricas do Instagram
  só são recalculadas de madrugada. Nenhuma conclusão de alcance antes disso.
- Legenda: primeira pessoa (é o Guilherme falando), 3–6 linhas curtas, **um pedido explícito**
  (comente, marque alguém, mande print), fecha com "grátis, sem login, link na bio 🚀". 5–8 hashtags
  no fim: `#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros` (+ `#reels` em reels).
  **Desde 21/09 o pedido vai na PRIMEIRA linha** (teste em andamento; ler o resultado em 23/09 — se não vier comentário
  nenhum, o gargalo não é a posição do pedido).
- **Todo número vem da telemetria e traz a data.** Se um dado não puder ser confirmado em /stats,
  não entra. Nunca inventar piloto, score ou marco. Não fazer promessa que o Guilherme não fez.
  Antes de afirmar "só X pilotos…", conferir também as partidas anônimas em `?visao=partidas&ordem=score`.
  Quando der, **fechar a conta**: a soma das durações e dos scores das partidas listadas tem de bater com o tempo total
  e a média que o /stats mostra — foi assim que a semana 38 foi validada antes de virar post e artigo.
- **Toda mecânica citada é conferida no código do jogo** (`src/app/play/page.js` no repo `navistron`, via `search_code` +
  `get_file_contents`; constantes: `TIER_DEFS`, `TIER_DIFF`, `getDiff`, `getMissileDef`, `spawnMeteor`, `spawnThings`, `collectBoost`).
  Os artigos antigos do blog são referência, não fonte: em 15/09 um artigo descreveu os mísseis teleguiados como inimigos e
  eles são da própria nave (corrigido em 17/09).
- **Cache do /stats:** as URLs de /stats podem devolver snapshots de horas diferentes. Antes de citar um número,
  acrescentar um parâmetro qualquer (`&v=hhmm`) para forçar leitura nova e conferir que os totais batem entre as visões.
- **Se /stats estiver inacessível na rodada**, o único pilar permitido é "Mecânica explicada", usando apenas as
  regras fixas do jogo (tiers, dificuldade, fórmula de pontos, 5 boosts) — zero números de telemetria.
- Citar pilotos pelo nick como aparece no ranking (é público). Sem deboche com nick de ninguém.
- Não repetir o mesmo gancho em menos de 10 dias. Checar `log/experiments.md` antes de escolher — vale também para a
  palavra do gancho: "pódio" (20/09) e "sem nome" (19/09) saíram do cardápio por 10 dias.
- Buffer: `schedulingType = "automatic"`; imagem/carrossel → `metadata.instagram.type = "post"`;
  reel → `assets: [{ video: { url, metadata: { thumbnailOffset: <ms da capa>, title } } }]` e
  `metadata.instagram.type = "reel"`; sempre `shouldShareToFeed = true`.
- Se a arte não renderizou (arquivo ausente no repo) ou o Buffer devolveu erro: **não publicar**, registrar no log e avisar.

## 5. Pipeline técnico (resumo — detalhes no README e em ROTINA.md)

1. Ler métricas dos últimos posts no Buffer (`list_posts` com `includeMetrics`), telemetria em
   `navistron.io/stats` (geral, `?periodo=7d`, `?visao=partidas&ordem=data`, `?visao=partidas&ordem=score`) e o blog quando o pilar for mecânica.
2. Escolher formato + pilar + gancho, escrever legenda, montar `posts/AAAA-MM-DD-slug/` (imagem: `templates/base.css`;
   reel: `templates/reel.css` + `window.__seek(t)` — usar o reel anterior como esqueleto) e conferir com `scripts/qa.py`.
3. Publicar os HTML + `caption.md` no repo. O Actions renderiza `post.png`/`slide-N.png` (~1–2 min) ou `reel.mp4` + `reel-cover.png` (~3–7 min).
4. Confirmar que o arquivo existe; URL pública: `https://raw.githubusercontent.com/engelmannlabs/navistron-social/main/posts/<slug>/<arquivo>`.
5. Criar o post no Buffer (canal Instagram `navistron`) agendado para as 13:00 do dia.
6. Registrar em `log/experiments.md` (data, slug, formato, pilar, gancho, horário, id do post no Buffer).
7. Para posts com ≥ 48 h, preencher métricas no log (reels: views, alcance, tempo médio assistido) e atualizar "Aprendizados".

**Horário da rodada:** desde 21/09/2026 o disparo diário é às **01:00 de Brasília** (04:00Z), a pedido do Guilherme.
"Hoje" é o dia que começa; o post vai para as 13:00 do mesmo dia e a telemetria lida já cobre o dia anterior inteiro.

**Tamanho dos logs:** `PLAYBOOK.md`, `log/experiments.md` e `log/blog.md` são reescritos inteiros a cada rodada, então
o que envelhece vai para arquivos de arquivo (`log/experiments-ate-2026-09-13.md`, `log/incidentes-*`, `log/blog-ate-*`,
`APRENDIZADOS-*`). Regra prática: manter na seção 7 os **4 aprendizados mais recentes** e na tabela do log os posts dos
últimos ~8 dias; arquivar o resto quando o arquivo passar de ~10 KB.

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
| Seg | Telemetria e Ranking | "Ranking da semana" (série `ranking-semana-<nº ISO>-<ano>`), quem mais jogou no mês, horários de pico |
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

## 7. Aprendizados (atualizar a cada rodada — o mais recente primeiro; manter só os 4 últimos)

- 2026-09-21 · **O slot diurno aguenta o fim de semana — e a interação virou o único teste que falta.** Fecharam duas
  métricas: 18/09 (19:30) em **46** e 19/09 (sábado, 13:00) em **28**; 20/09 (domingo, 13:00) abriu em **14 com 12 h**, a
  melhor abertura da série. Ou seja, o sábado diurno foi distribuído e o slot das 13:00 vale sete dias por semana, ainda
  que sem garantia. Com 14 posts publicados e **zero comentários, saves, compartilhamentos e seguidores novos**, o gargalo
  segue sendo interação, e hoje entrou o teste guardado no playbook: **pedido de comentário na primeira linha da legenda**
  ("Qual foi o seu melhor score? Comenta aí"), em vez da terceira. Ler em 23/09; se continuar zero, a posição do pedido
  não é o problema e sobra a proposta de 17/09 (sinal humano na conta). Telemetria: **508 partidas há três dias**, o maior
  vazio da série. Semana 38 fechada: 17 partidas em 3 tardes, 34min08, média 7.481 — 71% menos partidas que a semana 37 e
  30% acima da média histórica de pontos, ou seja, menos gente experimentando e mais gente que já sabe jogar. Operação:
  disparo diário passou para a 01:00 (seção 5) e os logs antigos foram arquivados para baratear a reescrita diária.
- 2026-09-20 · **O horário ajuda, mas não decide sozinho.** O post de 18/09 às 19:30 chegou a 45 de alcance em 29 h —
  segundo melhor da série e o único noturno distribuído desde 14/09. Com 16/09 (13:00) em 135 e 15 e 17/09 (18:30 e 20:30)
  em 1, a leitura honesta é que o Instagram distribui de forma irregular e o slot das 13:00 é a melhor aposta, não uma
  garantia. Sem evento, o post do dia saiu do histórico: as três melhores partidas de sempre são do VASCO e ninguém passa
  de 20 mil há 76 dias. Nota de produção: gancho de cinco linhas exige baixar a fonte do título (168px) e subir a camada
  para top 420 — a 210px o texto passa de y=1500 e cai na zona onde o Instagram põe a legenda.
- 2026-09-19 · **A 500ª partida saiu — e foi anônima.** Aconteceu em 18/09 às 16h22 (846 pontos, Tier II) e ninguém
  reivindicou, apesar do pedido de print no post do dia anterior. O dia rendeu 9 partidas entre 16h22 e 17h41, a tarde
  mais movimentada desde 14/09: BAHIA2026 voltou com 18.738 (3º geral) e entrou o 40º piloto, EDDMORPHE (8.695). De novo
  tudo entre 16h e 18h. Os dois pedidos que a conta já tinha feito ("me manda o print da 500ª", "reivindique a partida
  anônima") tiveram resposta zero: com 135 de alcance e 0 comentários, o gargalo é **interação**, não distribuição.
- 2026-09-18 · **O horário era o gargalo.** O reel diurno de 16/09 (13:00) fechou em 133 de alcance e 145 views — 4,4×
  o melhor noturno (30, em 13/09) e 133× o de 15/09, que morreu em 1. Mesma conta, mesmo formato, mesmo tipo de gancho e
  de pedido: a única variável era a hora. O alcance chegou quase todo entre 24 h e 48 h, então a régua de leitura continua
  sendo ≥ 40 h. Contra: a rodada ficou parada das 11:00 às 18:44, perdeu o slot das 13:00 e o post do marco 500 saiu às
  19:30; o artigo do blog levou 14 min para ficar no ar (contra ~3 min) — foi o que motivou mudar o disparo para a
  madrugada em 21/09.

Aprendizados anteriores em [`APRENDIZADOS-2026-09-14-a-17.md`](APRENDIZADOS-2026-09-14-a-17.md) e
[`APRENDIZADOS-2026-09-08-a-13.md`](APRENDIZADOS-2026-09-08-a-13.md).
