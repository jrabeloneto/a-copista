# A COPISTA — Versão moderna (referência: portfólios Readymag)

> Pedido do João: trazer a linguagem dos portfólios Readymag
> (tipografia gigante, cursor custom, hover-reveal, marquee, scroll
> horizontal, escala dramática, preloader, transições) SEM sair da
> estética. Todos os 8 recursos aprovados por ele em 2026-07-05.

## Guardrails (inegociáveis)

Paleta intocada; transform/opacity apenas (nada de filter animado —
lição do compositor); zero glass/gradiente/blur/radius; tudo com
fallback de prefers-reduced-motion; mobile sem scroll sequestrado;
triggers em gsap.context por página (useGsapPagina) com limites
funcionais + refresh por ResizeObserver (lições consolidadas).

## As 8 traduções

1. **Capa em tela cheia que se dobra** — na home, as letras de recorte
   chegam GIGANTES (scale ~1.85) centradas na viewport, com a linha de
   edição e a dica "role para abrir a revista"; um scrub sobre ~48svh
   de scroll encolhe as letras até o masthead normal no topo (sticky
   solta e a revista abre: régua → manchete). Reduced-motion/JS-off:
   masthead normal.
2. **Cursor-manicule** — pena como cursor padrão do site, manicule nos
   interativos (cursor: url(svg)). Duplamente certo: moderno e 2003.
3. **Hover-reveal no códice** — lista tipográfica grande das matérias
   (Fell ~48px); no hover a gravura da matéria aparece "colada"
   acompanhando o cursor. Touch: lista funciona como links normais.
4. **Marquee de época** — letreiro correndo em CSS (duas cópias,
   translateX -50% loop), separador ❦ (hedera tipográfica, U+2766 —
   glifo, não emoji), pausa no hover, reduced = estático. Conteúdo:
   novidades da casa.
5. **Discoteca-prateleira** — seção pinada com travessia horizontal
   (scrub) folheando as fichas como caixa de vinil. Mobile e
   reduced-motion: volta à grade atual. Exige mini-plano técnico
   próprio (pin × Lenis × resize) antes de codar.
6. **Números gigantes nas margens** — marcadores de mês em Grenze
   ~104px, cor --bg-card, ATRÁS dos papéis do feed do quarto
   (extensível a outras seções depois).
7. **Preloader do brasão** — primeira visita da sessão: overlay
   bg-base, o brasão do favicon em 96px se montando em 3 tempos
   (steps), "a copista está molhando a pena…", ~1.2s, sessionStorage.
8. **Masthead que viaja** — view-transition-name no masthead: nas
   trocas de página ele desliza/encolhe entre estados em vez do
   cross-fade inteiro.

## Fatiamento (gate de aprovação por etapa, como sempre)

- **M1 — A chegada**: itens 1, 4, 6, 7 (hero, marquee, números, preloader).
- **M2 — As mãos**: itens 2, 3, 8 (cursor, hover-reveal, masthead viajante).
- **M3 — A prateleira**: item 5 (horizontal pinado, mini-plano próprio) + revisão final da versão.
