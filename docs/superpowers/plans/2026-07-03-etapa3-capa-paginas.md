# CÓDICE — ETAPA 3: Capa e páginas secundárias — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (execução inline nesta sessão). Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Capa-frontispício com grid de matérias e sidebar 2003 na raiz, mais /arquivo, /sobre e /visitas — tudo estático. O specimen migra para /especime.

**Architecture:** A capa é o ponto de equilíbrio do conceito: frontispício de livro antigo em cima (moldura SVG completa com ornatos laterais), blog 2003 embaixo (grid de cards + sidebar de caixas em Verdana). As páginas secundárias são deliberadamente 2003 (arquivo, visitas) ou meio-fólio (sobre). Guestbook 100% hardcoded, renderizado só por JSX auto-escapado.

**Tech Stack:** o já travado. Nenhuma dependência nova.

---

## Decisões de design desta etapa

- **Frontispício**: MolduraOrnamental + losangos-hedera nos meios das 4 bordas (LosangoHedera vira export nomeado de MolduraIluminada.jsx); CÓDICE ~96px; subtítulo séc. XVII; "Vol. I — MMXXVI".
- **Grid de capa como revista antiga**: card 1 (destaque) horizontal — gravura à esquerda, texto à direita; cards 2-3 verticais lado a lado. Cada card: moldura de gravura, "imagem" = GravuraPlaceholder sobre bloco .pergaminho pequeno (a imagem sépia é papel + tinta, conectando capa→fólio), overline ui-2003 (rubrica · data), título Grenze, chamada em Garamond, assinatura de post completa.
- **Sidebar 2003 real** (~230px): caixas com header Verdana 10px bold uppercase — A COPISTA (link /sobre), ARQUIVO (3 meses + link /arquivo), RUBRICAS, SITES AMIGOS (botões 88×31 empilhados), LIVRO DE VISITAS (última entrada + link), contador 004217, link discreto "prova do impressor" → /especime, selinho "feito à mão".
- **materias.js ganha campos de capa**: `arte` (sol/pavao/alaude), `chamada` (1 frase), `mesAno` (p/ arquivo). GravuraPlaceholder: legenda opcional (sem legenda → só svg, sem figure).
- **/arquivo**: nav semântica ano→mês→matéria estilo Blogspot ("março de MMXXVI (1)"), manicule apontando o ano; MMXXV consta como "perdido na mudança de servidor".
- **/sobre**: meia-folha de pergaminho com retrato oval de gravura (RetratoOval.jsx: perfil da copista com pena, moldura oval dupla com hachura), 3 parágrafos em persona, assinatura em Tangerine.
- **/visitas**: 6 entradas hardcoded (fotolog, webring, um gringo da Polônia; emoticons ASCII de época com parcimônia — não são emoji gráfico); form FAKE desabilitado ("o tinteiro secou"); comentário de segurança no código: se virar real, nunca dangerouslySetInnerHTML, sanitizar no servidor.
- **Nav2003**: breadcrumb topo reutilizável para as páginas secundárias («capa · página).

## Estrutura de arquivos

- Create: `src/pages/Capa.jsx` + `src/styles/capa.css`
- Create: `src/pages/Arquivo.jsx`, `src/pages/Sobre.jsx`, `src/pages/Visitas.jsx` + `src/styles/paginas.css`
- Create: `src/components/ui2003/CaixaSidebar.jsx`, `src/components/ui2003/Nav2003.jsx`
- Create: `src/components/folio/RetratoOval.jsx`
- Create: `src/data/visitas.js`
- Modify: `src/data/materias.js` (arte, chamada, mesAno), `src/components/folio/GravuraPlaceholder.jsx` (legenda opcional), `src/components/folio/MolduraIluminada.jsx` (export LosangoHedera), `src/App.jsx` (rotas: / → Capa, /especime → Especime, + 3 novas)

## Tarefas

### Task 1: Dados e ajustes de componentes
- [ ] materias.js: arte/chamada/mesAno nas 3 matérias
- [ ] visitas.js: 6 entradas hardcoded
- [ ] GravuraPlaceholder: legenda opcional; MolduraIluminada: export LosangoHedera
- [ ] Nav2003 + CaixaSidebar

### Task 2: Capa
- [ ] Capa.jsx: frontispício + grid (1 destaque + 2 menores) + sidebar completa
- [ ] capa.css: layout main+sidebar, cards, caixas, responsivo mínimo

### Task 3: Páginas secundárias
- [ ] Arquivo.jsx (nav ano/mês), Sobre.jsx (retrato oval + persona), Visitas.jsx (entradas + form seco)
- [ ] RetratoOval.jsx; paginas.css

### Task 4: Rotas e verificação
- [ ] App.jsx: / → Capa, /especime, /arquivo, /sobre, /visitas
- [ ] `npm run build` limpo; preview: screenshots de capa e 3 páginas; navegação sidebar
- [ ] Skills code-review e security-review (foco guestbook) sobre o diff; corrigir achados
- [ ] Commit; resumo p/ aprovação — **PARAR antes da ETAPA 4**
