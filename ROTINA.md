# ROTINA.md — instrução completa da rodada diária (Instagram @navistron + blog navistron.io)

Este arquivo é lido pelo Claude a cada rodada diária. O disparo chega como uma mensagem curta na conversa
persistente do Guilherme (Cowork), com o texto da seção "Texto do disparo" abaixo; tudo o que a rodada precisa
saber está aqui e no `PLAYBOOK.md`. Para mudar o comportamento da rotina, edite este arquivo (ou o PLAYBOOK) —
não é preciso mexer na tarefa agendada.

## Como a rotina roda (mecanismo)

- Cada rodada é um lembrete de uso único (`send_later`) vinculado à conversa do Guilherme — por isso ela roda
  com as permissões já concedidas nessa conversa e **nunca para para pedir autorização**.
- **Passo 0 de toda rodada é agendar a rodada seguinte** (amanhã às 14:00Z = 11:00 de Brasília) com
  `send_later` (`at`, `initiation: "human_schedule"`, `name: "Navistron · rotina diária (Instagram + blog)"`,
  `message` = o texto da seção "Texto do disparo", idêntico). Antes, conferir com `list_triggers` se já existe um
  lembrete pendente com esse nome para amanhã; se existir, não duplicar. Fazer isso ANTES do trabalho do dia
  garante a continuidade mesmo que a rodada de hoje falhe no meio.
- Se o Guilherme tiver escrito instruções novas na conversa desde a última rodada, elas têm prioridade sobre
  este arquivo e o PLAYBOOK — aplicar e registrar na seção "Aprendizados" do `PLAYBOOK.md`.
- Ninguém está lendo em tempo real: não fazer perguntas, não usar AskUserQuestion, não esperar confirmação.
  Decidir, executar e relatar no final com SendUserMessage (curto, em português).

## Texto do disparo (copiar idêntico no `send_later` da próxima rodada)

```
[ROTINA DIÁRIA NAVISTRON — disparo automático] Execute agora a rodada diária do Instagram @navistron + blog navistron.io. Ninguém está lendo em tempo real: não faça perguntas, não use AskUserQuestion, não espere confirmação — decida, execute e relate no final (SendUserMessage, curto, em português).
PASSO 0 (obrigatório, antes de qualquer outra coisa): leia `ROTINA.md` do repositório engelmannlabs/navistron-social (conector Github, branch main). Depois garanta a próxima rodada: confira com list_triggers se já existe um lembrete pendente chamado "Navistron · rotina diária (Instagram + blog)" para amanhã; se não existir, chame send_later com at = amanhã às 14:00:00Z (11:00 de Brasília), initiation "human_schedule", name "Navistron · rotina diária (Instagram + blog)" e message = o texto da seção "Texto do disparo" de ROTINA.md (idêntico; se não conseguiu ler o arquivo, use este texto aqui, idêntico).
PASSO 1: execute a rodada completa conforme ROTINA.md (Parte 1 Instagram + Parte 2 blog), lendo antes PLAYBOOK.md, log/experiments.md e log/blog.md.
PASSO 2: relatório final curto via SendUserMessage. Se algo falhar, prefira não publicar a publicar errado — e relate.
```

## Ambiente de execução

- O container pode ter sido recriado desde a última rodada. Cópias de trabalho esperadas no diretório scratchpad
  indicado no ambiente: `navistron-social/` (este repo, com `node_modules` do playwright) e `navistron-repo/`
  (arquivos do blog + `scripts/validate-blog.mjs` + cópia de `src/lib/blogArticles.js`). Se não existirem,
  recriar a partir do GitHub (conector) conforme os passos abaixo. Playwright/Chromium já vêm instalados
  (`PLAYWRIGHT_BROWSERS_PATH`; nunca rodar `playwright install`); se o pacote node faltar,
  `npm install --no-save playwright@1.48.2`; para `scripts/qa.py`, `pip install playwright pillow --break-system-packages`.
- Usar só os conectores (`Github`, `Buffer`), WebFetch, npm/pip e ferramentas locais. Não usar curl/gh/git com
  tokens do ambiente, não criar repositórios, não alterar nem apagar tarefas agendadas (exceto o Passo 0).
- Resultados grandes de conectores (ex.: `list_posts`, `list_triggers`) podem ser salvos em um arquivo de
  tool-results: extrair o JSON com python em vez de ler o arquivo inteiro.
- Esperas (render do Actions, deploy da Vercel): `sleep 60` por chamada, no máximo 12 vezes por espera.

## Contexto fixo

- Buffer (conector `Buffer`): organização "My Organization" id `6a1dd0abe6d33b0b16f42639`; canal Instagram
  Business `navistron` id `6a9feeb0cd8b9c702c2bfd2e`; fuso `America/Sao_Paulo` (UTC-3, sem horário de verão).
- Repositório de operação (conector `Github`): `engelmannlabs/navistron-social`, branch `main`, público.
  `PLAYBOOK.md` (estratégia, formatos, regras, blog, aprendizados), `log/experiments.md` (Instagram) e
  `log/blog.md` (blog) são a memória entre rodadas. O conector lê e escreve arquivos (`get_file_contents`,
  `push_files` para arquivos novos, `create_or_update_file` com `sha` para editar), mas NÃO pode mexer em
  `.github/workflows/`.
- Repositório do jogo (conector `Github`): `engelmannlabs/navistron`, privado, Next.js 15 na Vercel — merge em
  `main` = deploy automático (~2–3 min). Permissão de branch, commit, PR e merge. Só mexer nos arquivos do blog
  listados na Parte 2; nunca editar `src/lib/blogArticles.js` (340 KB) nem outros arquivos do jogo.
- Telemetria pública do jogo (WebFetch): `https://navistron.io/stats` (totais e top 10 geral),
  `https://navistron.io/stats?periodo=7d` (semana), `https://navistron.io/stats?periodo=30d`,
  `https://navistron.io/stats?visao=partidas&ordem=data` (partidas recentes),
  `https://navistron.io/stats?visao=partidas&ordem=score` (partidas por score, inclui anônimas),
  `https://navistron.io/ranking`, blog em `https://navistron.io/blog`. As páginas têm cache por URL: acrescentar um
  parâmetro qualquer (`&v=hhmm`, ou `?v=hhmm` quando não houver query) para forçar leitura nova e conferir que os
  totais batem entre as visões. Não usar `/api/stats` (bloqueado por robots) e não tentar baixar imagens do site.
  Se o WebFetch devolver `PROVENANCE_REQUIRED` ou pedir permissão, tentar uma vez mais; persistindo, seguir o
  fallback do PLAYBOOK (pilar "Mecânica explicada", sem números de telemetria) e relatar.
- Regras do jogo úteis: 7 tiers (I ciano, II verde, III amarelo, IV laranja, V rosa, VI roxo, VII branco);
  5 boosts = +1 tier; dificuldade por tier 1.0/1.8/3.0/4.8/7.0/10.0/14.0; dificuldade = base × (1 + score × 0,0007);
  1 ponto por segundo vivo; meteoro pequeno = round(10×dif×0,5), grande = round(30×dif×0,5); HP do meteoro grande =
  round(3×dif); intervalo de spawn = max(0,2; 1,2/√dif) s; velocidade = min(1 + (dif−1)×0,2; 3,8)×; mísseis
  teleguiados a partir de dif > 2,0 (até 5).

## Parte 1 — Instagram

### Formatos (detalhes e mix semanal no PLAYBOOK)

- **Reel** (padrão para alcance): `posts/<slug>/post.html` com `<meta name="post-type" content="reel">`,
  1080×1920, 8–15 s, 30 fps; animação dirigida por `window.__seek(t)` (determinística, sem CSS animation);
  opcional `audio.json` (bpm, transpose, hit, riserStart) para a trilha chiptune própria de `scripts/audio.mjs`.
  Usar o reel anterior (`post.html` mais recente com post-type reel) como esqueleto e mudar cenas, textos e
  números. O Actions gera `reel.mp4` e `reel-cover.png`. Gancho legível já no frame 0; CTA nos 2 s finais; texto
  entre y=300 e y=1500.
- **Carrossel**: `post.html` (slide 1, 1080×1440) + `slide-2.html`, `slide-3.html`… (3–6 slides). O Actions gera
  `post.png`, `slide-2.png`…
- **Imagem única**: `post.html` 1080×1440 com `templates/base.css`.
Escolher o formato pelo mix do PLAYBOOK e pelas métricas por formato do log.

### Passo a passo

1. **Ler a memória**: `PLAYBOOK.md`, `log/experiments.md`, `log/blog.md` e o `caption.md` dos 3 últimos posts.
2. **Medir o que já foi publicado**: `list_posts` (canal navistron, `includeMetrics: true`, últimos 10). Para todo
   post com ≥ 48 h sem métricas no log, preencher alcance, views (reels), likes, comentários, saves e eng% em
   `log/experiments.md` e escrever 1 linha de leitura. Comparar formatos e horários; se um padrão ficou claro,
   atualizar "Aprendizados" no `PLAYBOOK.md`. Verificar posts em `error` no Buffer e relatar. **Se já existir
   publicação de hoje** (sent hoje ou scheduled com dueAt hoje), só criar outra se houver evento relevante —
   senão registrar métricas, relatar e ir para a Parte 2.
3. **Ler a telemetria de hoje** nas URLs acima. Procurar eventos: recorde batido, tier inédito (V+), novo top 3 da
   semana, marcos redondos (500 partidas, 50 pilotos, 20 h), piloto novo com score alto. Antes de afirmar "só X
   pilotos…", conferir as partidas anônimas em `?visao=partidas&ordem=score`. Para o tier de uma partida, usar o
   ranking/recorde geral como fonte (a lista de partidas mostra o tier final, não o melhor).
4. **Escolher a publicação do dia** pelo PLAYBOOK: formato pelo mix semanal; pilar diferente dos 2 dias
   anteriores; segunda-feira é "Ranking da semana" (top 5 de `?periodo=7d`); evento relevante tem prioridade (pode
   justificar um 2º post — nunca mais que 2). Não repetir gancho dos últimos 10 dias. Legenda em primeira pessoa
   (é o Guilherme falando), 3–6 linhas curtas, um pedido explícito, fechando com "Grátis, sem login, link na bio 🚀"
   e 5–8 hashtags (+ #reels em reels). Se o artigo do blog do dia tiver relação com o post, citá-lo na legenda
   ("artigo completo no blog, link na bio"). Todo número com data. Nunca inventar piloto, score, marco ou promessa.
5. **Montar a arte**: se a cópia de trabalho não existir, baixar via `get_file_contents` os arquivos
   `templates/base.css`, `templates/base.js`, `templates/reel.css`, `scripts/setup-fonts.sh`, `scripts/audio.mjs`,
   `scripts/qa.py` e o `post.html` de referência; recriar a estrutura de pastas localmente e rodar
   `bash scripts/setup-fonts.sh` (baixa as fontes do npm). Escrever os HTML. Conferir com
   `python3 scripts/qa.py posts/<slug>` (gera `preview-*.png` ou `preview-reel.png`), ABRIR os PNG com a ferramenta
   Read e avaliar como designer (gancho legível, nada cortado, números certos, zonas seguras). Ajustar até ficar limpo.
6. **Publicar no repositório** com `push_files` (branch `main`, um único commit): os HTML do post, `audio.json`
   (se reel) e `caption.md` (frontmatter: data, formato, pilar, gancho, horario_publicacao, buffer_post_id,
   fonte_dados; depois a legenda). Isso dispara o GitHub Actions (`render.yaml`, filtro `posts/**/post.html`):
   imagens em ~1–2 min, reels em ~4–7 min.
7. **Esperar a renderização**: a cada ~60 s (`sleep 60`), `get_file_contents` em `posts/<slug>/` (fields
   name,size) até aparecer o arquivo final (`post.png` > 50 KB; carrossel todos os `slide-N.png`; reel `reel.mp4`
   > 1 MB e `reel-cover.png`). Limite 12 tentativas. Sem arquivo, NÃO publicar; registrar e relatar.
8. **Agendar no Buffer** com `create_post`: `channelId` acima, `schedulingType: "automatic"`,
   `mode: "customScheduled"`, `dueAt` `AAAA-MM-DDThh:mm:00-03:00` na janela 18:30–21:00 de hoje (rotacionar
   18:30/19:30/20:30; segunda 19:30; se a rodada estiver atrasada e a janela já passou, ainda hoje até ~22:30 e
   anotar "fora da janela"), `text` = legenda. URL base:
   `https://raw.githubusercontent.com/engelmannlabs/navistron-social/main/posts/<slug>/`.
   - Imagem: `assets: [{ image: { url: ".../post.png", metadata: { altText: "<descrição>" } } }]`,
     `metadata: { instagram: { type: "post", shouldShareToFeed: true } }`.
   - Carrossel: `assets` com uma entrada `image` por slide, na ordem.
   - Reel: `assets: [{ video: { url: ".../reel.mp4", metadata: { thumbnailOffset: <ms da capa>, title: "<título curto>" } } }]`,
     `metadata: { instagram: { type: "reel", shouldShareToFeed: true } }`.
   Conferir status `scheduled` e dimensões do asset; anotar o id.
9. **Registrar**: linha nova em `log/experiments.md` e `buffer_post_id` no `caption.md` (`create_or_update_file`
   com `sha` atual).

## Parte 2 — Artigo do dia no blog (navistron.io/blog)

Regras completas na seção 6 do PLAYBOOK (formato do objeto, checklist SEO, clusters por dia da semana). Resumo:

1. **Levantar o que existe**: WebFetch em `https://navistron.io/blog` (títulos e descrições de todos os artigos)
   e `get_file_contents` em `src/lib/blog/daily/index.js` do repo `navistron` (imports e array atuais). Nunca
   repetir tema; se o tema for próximo, escolher outro ângulo e linkar o original.
2. **Escolher a pauta** pelo cluster do dia da semana (Seg Telemetria e Ranking · Ter Guias e Estratégia ·
   Qua Jogos/aquisição · Qui Mecânicas/Tecnologia · Sex Guias ou Telemetria · Sáb Jogos/curiosidades ·
   Dom Tutoriais dev) e por uma palavra-chave de busca real em português. Título ≤ 65 caracteres com a keyword;
   slug curto sem data; description 140–160.
3. **Escrever o artigo** em `src/lib/blog/daily/AAAA-MM-DD-<slug>.js` seguindo exatamente o formato do artigo
   anterior (`get_file_contents` em um arquivo de `daily/` como modelo): `export default { slug, title,
   description, keywords, category, date, heroImage, heroImageAlt, content }`; `content` em template literal,
   HTML com `p, h2, h3, ul, ol, li, table, code, strong, em, a`; 1.300–1.900 palavras; tabela ou lista; 6–12 links
   internos (`/play`, `/ranking`, `/stats`, 2–4 artigos existentes, Instagram); FAQ no fim (`<h2>FAQ</h2>` + 3–6
   pares `<h3>`/`<p>` sem tags dentro); dados da telemetria sempre com a data; **nunca** crase ou `${` dentro do
   conteúdo. `heroImage` entre `/images/screenshots/navistron-gameplay-meteoros.webp`,
   `navistron-dificuldade-progressiva.webp`, `navistron-ranking-preview.webp`, `navistron-controles-nave.webp`,
   `navistron-game-over-registro.webp` ou `/images/pages/navistron-home-hero.webp`.
4. **Atualizar o índice**: novo `src/lib/blog/daily/index.js` = índice atual +
   `import aAAAAMMDD from './AAAA-MM-DD-<slug>.js';` e a entrada no início do array `dailyArticles`.
5. **Validar localmente**: se `navistron-repo/` não existir, recriar `src/lib/blog/index.js`,
   `src/lib/blog/daily/*` e `scripts/validate-blog.mjs` a partir do repo (`get_file_contents`); para
   `src/lib/blogArticles.js` (340 KB) o resultado do `get_file_contents` é salvo em um arquivo em tool-results —
   extrair o texto com python (`json.load`, concatenar `text`, remover o prefixo até o primeiro `]` da linha
   "[Resource from Github …") e gravar em `src/lib/blogArticles.js`. Rodar `node scripts/validate-blog.mjs <slug>`;
   corrigir até imprimir `OK`.
6. **Publicar**: `create_branch` (`blog/AAAA-MM-DD-<slug>`, a partir de `main`) → `push_files` nessa branch com
   o artigo e o `daily/index.js` → `create_pull_request` (base `main`, corpo com título, keyword, palavras, links)
   → `merge_pull_request` (`merge_method: "squash"`). Depois de ~3 min, WebFetch em
   `https://navistron.io/blog/<slug>?v=<data>` (deve mostrar o H1) e em `https://navistron.io/sitemap.xml` (deve
   listar a URL). Se o artigo não aparecer em 8 min, relatar (o deploy da Vercel pode ter falhado — não tentar
   "consertar" outros arquivos).
7. **Registrar** em `log/blog.md` (data, slug, cluster, keyword, palavras, nº do PR, URL, resultado).

## Relatório final (poucas linhas, via SendUserMessage)

Instagram: o que foi agendado (formato, gancho, horário, id) e o que as métricas ensinaram. Blog: título, URL,
keyword, PR. Eventos da telemetria notados. Próxima rodada agendada (data/hora). Problemas — se um conector
estiver sem autorização, dizer claramente; é a única coisa que o Guilherme precisa resolver à mão.

## Limites que não se negociam

- Instagram: máximo 2 publicações por dia, padrão 1; nunca publicar sem o arquivo final confirmado no
  repositório. Blog: exatamente 1 artigo por dia; nunca editar `blogArticles.js`, páginas, componentes ou
  configuração do jogo.
- Nada de dado inventado, nick zoado ou promessa em nome do Guilherme. Sem emoji na arte; emoji na legenda com
  moderação. No blog, tom editorial, sem emoji.
- Não alterar nem apagar posts antigos do Buffer nem artigos antigos do blog. Não criar repositórios. Não mexer
  em tarefas agendadas além do Passo 0.
- Se algo falhar, preferir não publicar a publicar errado; explicar no relatório.
