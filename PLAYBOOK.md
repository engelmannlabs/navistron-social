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

## 2. Pilares de conteúdo (rotacionar; nunca dois iguais em dias seguidos)

| Pilar | Gancho | Fonte |
|---|---|---|
| **Desafio** | "Ninguém chegou ao Tier V", "só 1 piloto passou de 20 mil", "quem chega a Y?" | /stats (best tier, recorde, partidas por score) |
| **Ranking da semana** (segundas) | top 5 dos últimos 7 dias, nome em destaque; contagem regressiva em reel | /stats?periodo=7d (+ `&visao=partidas&ordem=data`, 50 por página, `&pagina=2`, para partidas por dia/hora) |
| **Hall da fama / shout-out** | piloto que bateu recorde, subiu de tier, entrou no top 3 | /stats, /ranking |
| **Mecânica explicada** | fórmula de pontos, HP dos meteoros por tier, 5 boosts = 1 tier, mísseis a 320 px/s | blog do site + regras fixas (fallback quando /stats não abre) |
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
- **Teste diurno (hipótese d, a partir de 16/09):** 1 post por semana em dia útil às **13:00**, primeiro na quarta 16/09,
  porque a telemetria mostra o público jogando entre 10h e 17h. Comparar o alcance em 24 h com o melhor post noturno
  (25 em 40 h, reel de 12/09); se ganhar, a janela padrão passa a ter um slot diurno fixo.
- Legenda: primeira pessoa (é o Guilherme falando), 3–6 linhas curtas, **um pedido explícito**
  (comente, marque alguém, mande print), fecha com "grátis, sem login, link na bio 🚀". 5–8 hashtags
  no fim: `#navistron #jogodenave #arcade #indiegame #jogogratis #gamedev #jogosbrasileiros` (+ `#reels` em reels).
- **Todo número vem da telemetria e traz a data.** Se um dado não puder ser confirmado em /stats,
  não entra. Nunca inventar piloto, score ou marco. Não fazer promessa que o Guilherme não fez.
  Antes de afirmar "só X pilotos…", conferir também as partidas anônimas em `?visao=partidas&ordem=score`.
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
Merge em `main` = deploy automático na Vercel (~2 min).

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
- 2026-09-13 · **Primeira rodada disparada sozinha no modo novo** (lembrete vinculado à conversa): passo 0 agendou 14/09,
  zero pedidos de permissão, reel renderizado em ~5 min, blog no ar em ~3 min. Métricas: o reel de marco de 12/09 ("partida
  nº 500 pode ser a sua", 18:30) teve **12 de alcance em 16 h**, o melhor início da série (reels anteriores pararam em 10);
  o reel de mecânica de 10/09 fechou em 11 de alcance com **o 1º like** da série; o carrossel de 11/09 às 22:00 ficou em
  1 de alcance (pior formato/horário até agora). Leitura: reel com número grande + pedido concreto > carrossel; 22:00 é
  tarde demais. Hoje testa o gancho "reivindique a partida" (melhor partida anônima, 18.196) às 20:30, último horário da
  rotação ainda não testado. Segunda-feira 14/09: ranking da semana (carrossel ou reel de contagem 5→1), às 19:30. Se até
  15/09 nenhum post passar de 30 de alcance, vale a proposta ao Guilherme (stories + bastidor gravado por ele).
- 2026-09-12 · **Operação: a rotina passou a rodar dentro da conversa persistente do Guilherme** (ver `ROTINA.md` e
  README). A tarefa agendada de sessão nova travou em pedido de permissão 3 rodadas seguidas (10, 11 e 12/09) porque a
  sessão nova não herda as permissões "Sempre" dos conectores. Primeira rodada no modo novo (12/09, 14:05 BRT): zero
  pedidos de permissão, WebFetch/GitHub/Buffer na primeira tentativa, reel renderizado em ~4 min, blog no ar. Regra
  operacional nova: o passo 0 de cada rodada agenda a rodada seguinte. Conteúdo: os 4 posts automatizados seguem com
  alcance de um dígito (imagem 08/09 = 2; reels 09 e 10/09 = 10 cada, sem diferença entre 08:14 e 19:30; carrossel
  11/09 às 22:00 = 1 view em 16 h). Hoje o teste é o pilar **marco** com pedido concreto ("me manda o print se a sua
  for a 500ª" + "bota o nick no game over"), reel às 18:30. Se até 15/09 nenhum post passar de 30 de alcance, propor
  ao Guilherme: (a) compartilhar o reel do dia nos stories e curtir/comentar os posts para reativar a distribuição;
  (b) um post "bastidor do dev" gravado por ele, o único formato que já funcionou nesta conta.
- 2026-09-11 · **Métricas finais dos 3 primeiros posts automatizados são todas de um dígito**: imagem 08/09 = 2 alcance;
  reel 09/09 = 10 alcance (parou em 10 já no 1º dia); reel 10/09 às 19:30 (dentro da janela) = 8 alcance em 10 h.
  Ou seja, **o horário não explica** — o reel na janela rendeu o mesmo que o reel às 08:14. A conta está sendo tratada
  como inativa pelo Instagram (2 meses parada + posts sem interação). Próximos testes, nesta ordem: (1) nick de piloto
  no gancho (carrossel 11/09, hipótese b); (2) pedir ao Guilherme que interaja/compartilhe nos stories o post do dia —
  o único post que funcionou (25/06) foi pessoal e teve 16 comentários; (3) manter reels, mas medir também saves e
  compartilhamentos, não só alcance. Se nada passar de 30 de alcance até 15/09, propor ao Guilherme um post "bastidor
  do dev" gravado por ele.
- 2026-09-11 · A rodada das 11:00 travou logo no início e só foi retomada às 21:20 (fora da janela). Publicado às 22:00
  mesmo assim (regra nova na seção 4). Blog: 2º artigo diário no ar em 3 min, sem incidente. As páginas de /stats
  servem snapshots com cache diferente por URL — regra do `&v=hhmm` adicionada à seção 4.
- 2026-09-10 · Blog diário começa: primeiro artigo `como-passar-do-tier-3-navistron` (Guias e Estratégia),
  no ar em ~3 min após o merge, já no sitemap com lastmod do dia. Estrutura `daily/` criada para não reescrever
  o arquivo de 340 KB.
- 2026-09-10 · Leitura das 2 primeiras publicações automatizadas: imagem 08/09 (18:42) = 2 de alcance / 3 views em ~39 h;
  reel 09/09 (08:14) = 10 de alcance / 10 views em ~25 h. O reel alcançou 5× a imagem, mas os dois ficaram muito abaixo
  do histórico (100–300 por imagem, 1.000+ por reel). Suspeitas: horário fora da janela (08:14 e 18:42 "na hora") e
  conta parada por 2 meses. Teste de hoje: reel às 19:30, dentro da janela. Telemetria inacessível pelo 2º dia
  (WebFetch sem permissão para navistron.io) → publicado só com regras fixas do jogo (pilar mecânica). **Fallback
  oficial quando /stats não abre: pilar "Mecânica explicada", sem nenhum número de telemetria.**
- 2026-09-09 · Imagem de 08/09 com 1 view em ~3 h. Reels entram como formato padrão; primeiro reel publicado
  em 09/09 (contador do recorde). Hipóteses: (a) reel ≥ 3× o alcance da imagem; (b) contador/número animado
  segura retenção; (c) pedido de print nos comentários gera prova social.
- 2026-09-08 · Ponto de partida. Hipóteses a testar: (a) desafio com número > divulgação genérica;
  (b) citar piloto pelo nick gera comentário/compartilhamento; (c) 19:30 > 18:30 em alcance.
