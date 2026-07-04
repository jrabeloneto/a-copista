# A COPISTA — Design da expansão: de fanzine a portal

> Design aprovado pelo João em 2026-07-04 após 3 rodadas de maquetes
> (modelos A/B/C → híbrido A+B → cabeçalho V2). Este doc é a fonte de
> verdade da expansão.

## Conceito

O site inteiro passa a ser **A COPISTA** — a revista/portal pessoal da
personagem. O CÓDICE vira a editoria principal (o fanzine), intacto.

**A regra do híbrido (A+B): estrutura de revista, pele de colagem.**
- Estrutura (Modelo B): masthead, editorias, manchete de capa, fichas.
- Pele (Modelo A): tudo colado — fita adesiva, rotações de 1-5°, sombra
  seca, bordas rasgadas, letras de recorte.
- **O dial varia por seção**: quanto mais pessoal, mais colagem (Quarto,
  Álbum); quanto mais editorial, mais revista (capa); o CÓDICE fica
  INTOCADO (códice puro, como está).

## Cabeçalho (V2 — escolha do João)

"A COPISTA" em letras de recorte de revista (bilhete de resgate),
SOLTAS, sem filetes: cada letra com fundo/tipo/rotação próprios
(mistura Grenze Gotisch, IM Fell, Verdana, Georgia sobre pergaminho,
rubrica, card, ouro), 1-3 com borda rasgada (clip-path), 2-3 com fita
adesiva, sombra seca. Abaixo: linha de edição em Verdana ("fanzine &
revista de mão única — anno MMXXVI") e a régua de editorias como
etiquetas de fita levemente tortas. Home = tamanho cheio; páginas
internas = versão compacta (link para /).

## Arquitetura de informação

| Rota | Seção | Dial |
|---|---|---|
| `/` | Capa-revista (manchete do CÓDICE + objetos colados + notas recentes) | 50/50 |
| `/codice` | O fanzine (índice atual = capa da editoria) | códice puro |
| `/codice/materia/:slug` | Matérias (fólios, como estão) | códice puro |
| `/album` | Fotos: grade fotolog, polaroids, cantoneiras, legendas manuscritas | colagem |
| `/quarto` | Seção da dona: diário-scrapbook (bilhetes datados, fotos pessoais, avaliações "4 hederas") | colagem máxima |
| `/discoteca` | Fichas de coleção (discos/filmes/objetos) com resenha | revista |
| `/amigas` | Links & webring, parede de botões 88×31 | 2003 puro |
| `/sobre` `/visitas` `/arquivo` `/especime` | Já existem; arquivo passa a listar tudo | como estão |

Redirects: `/materia/:slug` → `/codice/materia/:slug` (links antigos não quebram).

## Recortes femininos (o pedido central do João)

Figuras femininas — damas medievais com vestidos de época E ícones dos
anos 70/80 — recortadas como de revista: borda branca irregular
(clip-path), fita adesiva no topo, rotação 2-5°, legenda italic curta.

- Moram nas **bandas escuras FORA da coluna de 900px** (fixed), nunca
  sobre conteúdo. **Máx. 2 por lado** (slots ~20% e ~58% da viewport).
- Entram "coladas" conforme o scroll (opacity + rotação assentando) e
  trocam de figura em frações da página (peel-out rápido, paste-in).
- Telas sem banda suficiente (< ~140px por lado, ≤ ~1190px): somem.
- Reduced-motion: primeiro par fixo, estático, sem trocas.
- Mesma disciplina da ETAPA 4: transform/opacity apenas, triggers em
  gsap.context por página.
- **Imagens**: placeholders desenhados (silhuetas duotone estilo
  recorte) agora; domínio público depois (pré-rafaelitas, iluminuras —
  README de imagens). Ícones 70s/80s reais têm direitos: usar acervos
  CC/PD ou tratamento gráfico forte; decisão adiada com aviso dado.

## Tokens novos (shades documentados, mesma família)

- `--fita: #c9bda5` (fita adesiva envelhecida)
- `--sepia-foto: #c9b898` (fundo de recorte/foto antiga)

## Fatiamento (método de sempre: build + review + aprovação por etapa)

1. **Migração + chrome + home**: CÓDICE → /codice (com redirects),
   Masthead V2 + régua de etiquetas globais, home capa-revista,
   stubs "EM OBRAS" de época para seções futuras.
2. **Camada de recortes** com scroll (o efeito novo).
3. **Álbum + Quarto** (as seções de colagem).
4. **Discoteca + Amigas + arquivo unificado**.
5. **Polimento final** (a11y, mobile, anti-slop, revisão completa).
