# CÓDICE — ETAPA 1: Fundação e Design System — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (execução inline nesta sessão — sessão autônoma, sem subagentes). Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fundação do projeto CÓDICE (Vite + React 19 + Router + GSAP + Lenis) com tokens CSS completos e uma página specimen ("Prova do Impressor") exibindo todos os elementos do design system.

**Architecture:** SPA multi-página com React Router; CSS puro em camadas (tokens → base → página); ornamentos como componentes SVG desenhados em código com filtro de irregularidade compartilhado (feTurbulence + feDisplacementMap em `<defs>` global); Lenis + GSAP instalados com cleanup correto mas SEM animações (motion é ETAPA 4).

**Tech Stack:** Vite 6, React 19, react-router-dom 7, GSAP 3, Lenis 1, Google Fonts (Grenze Gotisch, IM Fell English + SC, EB Garamond, Tangerine).

---

## Decisões de design travadas nesta etapa

### Paleta (do spec, imutável) + tokens derivados
| Token | Valor | Uso |
|---|---|---|
| `--bg-base` | `#1a1714` | fundo da moldura do site |
| `--bg-backdrop` | `#12100d` | fundo do body ATRÁS da moldura (shade do bg-base, não é cor nova) |
| `--bg-paper` | `#e8dfd0` | pergaminho |
| `--bg-card` | `#2a241e` | cartões/células |
| `--brown` / `--brown-light` | `#6b5544` / `#8a7360` | molduras, marginalia |
| `--gray-warm` | `#9a938a` | texto secundário sobre escuro |
| `--red-rubric` | `#8f3d33` | capitulares, rubricas, links, detalhes — NUNCA áreas grandes |
| `--gold-muted` | `#a8895c` | SÓ filetes finos |
| `--ink` | `#2b241c` | texto sobre pergaminho (tinta ferrogálica, nunca #000) |
| `--ink-faded` | `#4a3f33` | tinta desbotada sobre pergaminho |
| `--borda-site` | `#3a322b` | borda da moldura 900px (shade entre card e brown) |

### Sombra
`--sombra-seca: 8px 10px 0 rgba(10, 8, 5, 0.55)` — dura, deslocada, SEM blur. Proibido box-shadow com blur em toda a base.

### Tipografia
- `--fonte-display`: "Grenze Gotisch" — títulos APENAS
- `--fonte-fell` / `--fonte-fell-sc`: "IM Fell English" / "IM Fell English SC" — editorial, rubricas
- `--fonte-corpo`: "EB Garamond", Georgia — corpo 17px/1.55
- `--fonte-ui`: Verdana 10–11px — metadados, sidebar, contador (o toque 2003)
- `--fonte-manuscrita`: "Tangerine" — marginalia discreta

### Técnica de irregularidade (anti-slop)
Filtro SVG global `#tinta-irregular` (feTurbulence baseFrequency 0.04 + feDisplacementMap scale 1.6) aplicado aos grupos de ornamento — traço "gravado", nunca geometria perfeita. Complementado por jitter manual nas coordenadas dos paths (sem simetria espelhada exata).

### Texturas (CSS/SVG apenas, sem imagens)
- Grão do fundo escuro: data-URI feTurbulence fractalNoise bf=0.85, aplicado em `body::before` fixo, opacity ~0.05
- Pergaminho `.pergaminho`: cor base + mancha de idade (data-URI fractalNoise bf=0.015, blend multiply) + grão fino + vinheta amarronzada nos cantos (mancha de idade, não sombra de UI) + `--sombra-seca`

### Layout
Moldura central `max-width: 900px`, borda 1px `--borda-site`, body com backdrop mais escuro + grão. Denso, não arejado.

### Infra de motion (sem motion ainda)
Hook `useLenis()`: Lenis no ticker do GSAP, `ScrollTrigger.update` no scroll, **cleanup completo no unmount** (ticker.remove + lenis.destroy). Respeita `prefers-reduced-motion` (não instancia). ScrollTriggers só na ETAPA 4.

---

## Estrutura de arquivos

```
codice/
  package.json                      # deps travadas
  vite.config.js                    # porta 5186, strictPort
  index.html                        # lang pt-BR, Google Fonts, título
  public/images/README.md           # fontes de domínio público p/ baixar depois
  src/
    main.jsx
    App.jsx                         # Router + GrainDefs + useLenis + moldura 900px
    lib/useLenis.js
    styles/tokens.css               # paleta, fontes, sombras, texturas
    styles/base.css                 # reset, body, links :visited, hr, foco, seleção
    styles/especime.css             # layout da prova do impressor
    components/GrainDefs.jsx        # <defs> global: #tinta-irregular
    components/ornamentos/Capitular.jsx
    components/ornamentos/Manicule.jsx
    components/ornamentos/Fleuron.jsx
    components/ornamentos/MolduraOrnamental.jsx
    components/ui2003/Botao88x31.jsx
    components/ui2003/ContadorVisitas.jsx
    pages/Especime.jsx              # a "Prova do Impressor"
```

Nota de método: os componentes de ornamento são ARTE (paths SVG autorais); as coordenadas são desenhadas na execução, com as especificações visuais abaixo travadas aqui. Código de infraestrutura está integral nos arquivos-fonte desta mesma sessão.

## Especificações dos ornamentos

- **Capitular**: caixa ~112px (4 linhas), letra Grenze Gotisch em `--red-rubric`, filete duplo `--gold-muted` (externo 1.2px, interno 0.7px), entrelaçado vegetal vermelho nos cantos atrás da letra; float left; letra como texto HTML (nitidez), ornamento como SVG posicionado.
- **Manicule**: mão com indicador estendido apontando à direita, punho com dupla linha, dedos dobrados, ~38px, stroke `currentColor` 1.3px, filtro tinta-irregular. viewBox 0 0 52 26.
- **Fleuron**: folha de hera (hedera) com caule em voluta, usado solto e no `<hr>` ornamentado, stroke + fill parcial `currentColor`.
- **MolduraOrnamental**: filete duplo (dourado externo, rubrica interno) + 4 cantos SVG com nó entrelaçado ~28px (rotacionados por canto, com jitter para não serem clones perfeitos).
- **Botao88x31**: SVG 88×31 `shape-rendering: crispEdges`, borda serrilhada pixel, texto Verdana 8–9px, 3 variantes (escuro / pergaminho / rubrica). Cores SÓ da paleta.
- **ContadorVisitas**: dígitos "004217" em células 16×22, bg quase-preto, dígito claro, Courier New bold, borda `outset` (o bevel 2003), rótulo Verdana 10px.

## Página Especime — seções (densa, como prova de fundição)
1. Cabeçalho em MolduraOrnamental: "PROVA DO IMPRESSOR — CÓDICE — Vol. I MMXXVI"
2. Paleta: swatches com nome/hex em Verdana 10px
3. Tipografia: amostra de cada família em uso real
4. Mini-fólio `.pergaminho`: rubrica + capitular + versais + parágrafo justificado + citação com manicule + marginalia rotacionada
5. Ornamentos: manicules, fleurons, hr ornamentado
6. UI 2003: botões 88×31, contador, assinatura de post, demo de link :visited
7. Colofão centrado afunilando

---

## Tarefas

### Task 1: Scaffold e dependências
- [x] package.json com deps (react 19, router 7, gsap, lenis, vite 6)
- [x] `npm install` (rodando em background)
- [x] vite.config.js porta 5186 strictPort + plugin react
- [x] index.html lang="pt-BR" + Google Fonts:
  `https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Grenze+Gotisch:wght@300..900&family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&family=Tangerine:wght@400;700&display=swap`
- [x] public/images/README.md (British Library, Gallica/BnF, Met Open Access)

### Task 2: Tokens e base CSS
- [x] tokens.css (tabela acima, integral)
- [x] base.css: reset-lite; body backdrop + grão; `a` em `--red-rubric`, `a:visited` em `--brown`; foco `outline: 1px dotted var(--gold-muted)`; seleção quente; `.moldura-site` 900px; `.pergaminho`; `hr` simples denso
- [x] Verificar: nenhum blur em box-shadow, nenhuma cor fora da paleta/shades documentados

### Task 3: Infra de motion adormecida
- [x] lib/useLenis.js com cleanup completo e guarda de reduced-motion
- [x] App.jsx: BrowserRouter, GrainDefs montado uma vez, rota `/` → Especime

### Task 4: Ornamentos SVG (especificações acima)
- [x] GrainDefs.jsx (#tinta-irregular)
- [x] Manicule, Fleuron, Capitular, MolduraOrnamental
- [x] Botao88x31 (3 variantes), ContadorVisitas

### Task 5: Página Especime + verificação
- [x] pages/Especime.jsx + especime.css (7 seções)
- [x] Run: `npm run build` → Expected: build sem erros
- [x] Dev server porta 5186 via launch.json; screenshot; checar console limpo
- [x] Auditoria anti-slop visual: sombras, radius, cores, densidade
- [ ] Resumo p/ aprovação do João — **PARAR e aguardar antes da ETAPA 2** (em andamento)

## Verificação final da etapa
- `npm run build` compila limpo
- Página specimen renderiza todos os 7 grupos de elementos
- Console do browser sem erros
- Fontes carregam (checar computed font-family na rubrica e no corpo)
