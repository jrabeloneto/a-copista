# CÓDICE — ETAPA 4: Design técnico do motion

> Design doc do mini-plano técnico exigido pelo spec ("antes de implementar,
> fazer um mini-plano técnico da arquitetura — onde vivem os triggers, como
> morrem na troca de rota"). Decisões delegadas pelo João ("faça do jeito que
> achar melhor"); alternativas e trade-offs documentados abaixo.

## Restrições herdadas (não negociáveis)

1. **Lição da ETAPA 2**: `filter` CSS (drop-shadow) sobre contêineres cheios de
   SVGs com feDisplacementMap TRAVOU o compositor do Chromium. Portanto:
   **nenhum filter CSS animado, nunca** — animações são transform + opacity
   apenas. O "leve blur" que o spec pede no fade-out das imagens flutuantes é
   substituído por opacity + translateY (divergência consciente, motivada por
   estabilidade; revisitável se João pedir).
2. `prefers-reduced-motion: reduce` → nada monta; conteúdo estático e completo
   (o site das ETAPAs 1-3 é exatamente esse fallback).
3. Tudo precisa morrer limpo na troca de rota — SPA multi-página.

## Decisão 1 — Ciclo de vida dos ScrollTriggers

**Escolhido: `gsap.context()` por página, via hook `useGsapPagina(montar, deps)`.**
O hook cria o contexto no mount (pulando tudo sob reduced-motion), chama
`ScrollTrigger.refresh()` depois de montar e faz `ctx.revert()` no cleanup —
revert mata triggers E desfaz estilos inline, devolvendo o DOM estático.
Triggers vivem SEMPRE dentro do contexto da página que os criou; nenhum trigger
global além do update do Lenis (já existente em useLenis).

- Alternativa A: `useGSAP` oficial (@gsap/react) — mesma mecânica, mas é
  dependência nova para embrulhar 6 linhas; recusada (YAGNI).
- Alternativa B: triggers soltos + `ScrollTrigger.getAll().forEach(kill)` no
  unmount — frágil (mata triggers de outros componentes, não desfaz estilos).

Complemento: `document.fonts.ready.then(ScrollTrigger.refresh)` uma vez no App
(fontes remotas mudam o layout depois do primeiro refresh).

## Decisão 2 — Camada de imagens flutuantes

**Escolhido: camada `position: fixed` por página (`<CamadaFlutuante itens>`),
z-index ACIMA do conteúdo, `pointer-events: none`, legibilidade via
mix-blend-mode por item.**

O spec pede "z-index entre fundo e conteúdo", mas a moldura de 900px tem fundo
opaco — "entre" é geometricamente impossível. O blend-mode entrega o efeito
pretendido: itens `tinta: 'sepia'` (multiply, cor de tinta) só aparecem ao
cruzar pergaminho, como se impressos no papel SOB o texto; itens
`tinta: 'creme'` (screen, cor de papel/ouro, opacity baixa) só aparecem sobre o
escuro. Cada item se auto-oculta onde atrapalharia — texto permanece legível.

Mecânica por item (1 timeline + 1 ScrollTrigger com `scrub: 0.9`):
- `y`: entra de baixo da viewport → sai pelo topo (fade-in nos primeiros ~15%,
  fade-out nos últimos ~25% do trajeto);
- `x`: deriva lateral pequena; `rotation`: rotação base ±2-4° com deriva de +3°;
- start/end como funções de `progresso` (fração da altura rolável) com
  `invalidateOnRefresh: true` — sobrevive a resize;
- `will-change: transform, opacity` (só nos 4-6 itens da página).

Artes: SVGs woodcut já existentes reutilizados (Manicule, Fleuron, caracol,
motivos sol/pavão/alaúde exportados de GravuraPlaceholder) + 2 novos (brasão,
capitular solta com letra Grenze em `<text>`), mapeados em `ArteFlutuante.jsx`.
Config por página em `src/data/flutuantes.js` (capa, matéria — com a arte
temática da matéria —, secundárias com 2-3 itens).

Mobile (≤920px): capa/arquivo/visitas mantêm 2 itens pequenos em screen (não há
leitura densa sobre claro); matéria e sobre ESCONDEM a camada — é a única
leitura fiel de "NUNCA sobrepor o texto de leitura" numa viewport onde a folha
ocupa 100% da largura.

- Alternativa A: camada absolute por seção — mais triggers, sem ganho.
- Alternativa B: z-index sob a moldura — invisível (fundo opaco); recusada.

## Decisão 3 — Virar-de-página

**Escolhido: View Transitions API via `<Link viewTransition>` (React Router 7
já embrulha `document.startViewTransition`).** O browser faz o double-buffer
da página velha/nova sozinho; CSS estiliza `::view-transition-old(root)`
(desliza -2% com rotate -0.6° e fade, ~480ms) e `::view-transition-new(root)`
(entra de +3% com fade). Sem 3D, sem overlay, sem estado, sem leak. Browsers
sem suporte: navegação instantânea (degradação correta). Reduced-motion:
`animation: none` via media query. Aplicado nos links entre matérias (cards da
capa, vizinhas, rubricas).

- Alternativa A: double-buffer manual de rotas (clonar árvore que desmonta) —
  complexo, leak-prone, exatamente o risco que a etapa manda evitar.
- Alternativa B: overlay-varredura próprio com navigate no meio — funciona,
  mas é estado imperativo a manter; a API nativa faz melhor.

## Decisão 4 — Animações de entrada no fólio (uma vez, sem scrub)

Dentro do `useGsapPagina` da Materia:
- **Moldura de gravura**: stroke-dashoffset dos 2 rects da moldura
  (perímetros conhecidos: 736/696) desenham em ~1s ao entrar no viewport;
  em seguida o motivo revela com `clip-path: inset(0 0 100% 0 → 0)` — o
  pergaminho desenrolando de cima para baixo. Uma vez (`once: true`).
  stroke-dashoffset não é composited, mas é curto, pequeno e único — ok.
- **Capitulares**: fade + scale 0.94→1, once.
- **Folhas**: entrada sutil translateY+fade em stagger no mount (substitui a
  "entrada" da transição para quem chega por URL direta).

## Decisão 5 — Parallax do grão + steps

- O grão do fundo migra de `body::before` para `<div class="grao-global">`
  real (GSAP não anima pseudo-elementos): fixed, inset -6%, z-index 0,
  `yPercent: -4` com scrub ao longo da página inteira — MUITO sutil.
- "Steps de GIF antigo": CSS puro, `transition-timing-function: steps(2)` no
  hover dos botões 88×31 e da manicule de citação — micro-toques, sem JS.

## z-index (ordem de pintura)

0 `.grao-global` → 1 `.moldura-site` (conteúdo) → 3 `.camada-flutuante`
(blend, pointer-events none). Overlay de view-transition fica acima de tudo
por natureza da API.

## Teste de vazamento (critério de aceite)

Navegar capa → matéria → matéria → capa → matéria 5×:
`ScrollTrigger.getAll().length` deve voltar SEMPRE ao número da página atual
(sem crescimento monotônico); sem erros de console; scroll do Lenis funcional
após cada troca.

## Fora de escopo desta etapa

Favicon, lazy-loading, auditoria de contraste, refinamento mobile — ETAPA 5.
