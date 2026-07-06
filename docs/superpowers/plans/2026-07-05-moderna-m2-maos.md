# A COPISTA — Versão moderna M2: as mãos

> Execução inline (superpowers:executing-plans). Design: spec da versão moderna, itens 2, 3 e 8.

## Decisões

- **Cursor da casa**: pena de escrever como cursor padrão (data-URI SVG,
  creme com contorno de tinta — visível sobre escuro E pergaminho,
  hotspot no bico) e manicule apontando para cima nos interativos
  (links, botões, etiquetas; hotspot na ponta do dedo). Inputs mantêm
  o I-beam nativo. Fallback `auto`/`pointer` após a vírgula (Safari
  ignora SVG em cursor). Touch: irrelevante, inofensivo.
- **Índice do volume com hover-reveal** (no /codice, ADIÇÃO — os cards
  aprovados ficam): sumário tipográfico de livro — título grande em
  Fell, fio pontilhado (leader), "fol. N" em dourado; no hover/focus a
  gravura da matéria aparece num chip de pergaminho que SEGUE o cursor
  com lag (gsap.to em mousemove, transform/opacity). Reduced-motion e
  touch: o índice é só uma lista de links, sem reveal.
- **Masthead que viaja**: `view-transition-name: masthead` no masthead
  e `regua` na régua — nas navegações com viewTransition o browser
  morfa posição/escala deles entre páginas enquanto o resto cruza no
  virar-de-página. Home→interna: as letras grandes encolhem até o selo
  compacto. Nome único por página ✓ (um masthead por documento).

## Tarefas
- [ ] base.css: cursores data-URI (pena padrão; manicule em a/button/.etq/summary)
- [ ] portal.css: view-transition-name masthead/regua
- [ ] CodiceIndex: seção "Índice do volume" + reveal seguidor; estilos em capa.css
- [ ] Build; verificação (cursor computado, reveal segue e some, VT names); leak; commit — **PARAR p/ aprovação**
