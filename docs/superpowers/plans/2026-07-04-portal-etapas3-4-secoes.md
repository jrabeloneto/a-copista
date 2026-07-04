# A COPISTA — ETAPAS 3+4 do portal: Álbum, Quarto, Discoteca, Amigas, arquivo unificado

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (inline). Checkboxes p/ tracking.
> João autorizou as duas etapas juntas ("vamos para as próximas etapas agora"); gate de aprovação fica antes do polimento final.

**Goal:** todas as seções reais no lugar dos stubs, com conteúdo na voz da copista; arquivo passa a listar tudo; a home puxa teasers dos dados reais.

## Decisões

- **/album** (colagem alta): grade de fotos placeholder desenhadas
  (cenas duotone em `FotoArte.jsx`: praia, pilha do sebo, vitrola,
  gata Hildegarda na janela, vestido de brechó, missal aberto,
  marquise de cinema, jarro de margaridas) — metade polaroid, metade
  com cantoneiras pretas; legendas manuscritas (Fell itálico) e datas.
- **/quarto** (colagem máxima): diário-scrapbook, coluna única de
  entradas datadas tipadas — bilhete (papel + Georgia itálico),
  achado de sebo (com preço), avaliação (nota em HEDERAS: fleurons
  1-5 via `NotaHederas.jsx`, sem estrela/emoji), foto (mini-polaroid).
  8 entradas mar→jun MMXXVI; uma responde ao leitor da Biba do
  guestbook (o site conversa consigo mesmo).
- **/discoteca** (revista): 6 fichas de coleção — Liege & Lief,
  Below the Salt, Red Queen to Gryphon Three, Led Zeppelin IV,
  Todas as Mulheres do Mundo (filme), o batom cor ameixa (objeto) —
  capa placeholder por tipo (`CapaFicha`: sleeve/cartaz/objeto),
  ano, nota em hederas, resenha de uma linha.
- **/amigas** (2003 puro): parede de selos 88×31 (8 botões, incl.
  fotolog da juh e geocities do menestrel77, amarrando o guestbook)
  com descrições Verdana; instrução de webring via livro de visitas.
- **Arquivo unificado**: agrupa por mês (mar–jun) tudo — matérias,
  bilhetes do quarto e fotos do álbum, com tags de seção.
- **Home**: objetos puxam dados reais (1ª foto do álbum, última
  entrada do quarto, 1ª ficha da discoteca).
- EmObras deixa de ser usado → deletado. Rotas novas lazy.
- Recortes em paralaxe já cobrem as páginas novas (App-level) —
  páginas longas = travessias visíveis.

## Tarefas

- [ ] Dados: `album.js`, `quarto.js`, `discoteca.js` (mesAno em tudo)
- [ ] Componentes: `NotaHederas.jsx`, `FotoArte.jsx` (8 cenas), `CapaFicha` (em Discoteca)
- [ ] Páginas lazy: Album, Quarto, Discoteca, Amigas + css por seção
- [ ] App: rotas reais; deletar EmObras.jsx
- [ ] Arquivo unificado; Home com teasers reais
- [ ] Build; preview de cada seção; console; leak rápido; code-review; commit — **PARAR p/ aprovação antes do polimento final**
