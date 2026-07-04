# CÓDICE — ETAPA 4: Motion — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (execução inline nesta sessão). Steps use checkbox (`- [ ]`) syntax for tracking.
> Design aprovado (delegação) em `docs/superpowers/specs/2026-07-03-etapa4-motion-design.md` — TODAS as decisões técnicas vêm de lá.

**Goal:** Implementar o motion do CÓDICE: imagens flutuantes com scrub, molduras que se desenham, clip-path de pergaminho, virar-de-página via View Transitions, parallax de grão, steps de época — com cleanup completo por rota e reduced-motion integral.

**Architecture:** ver design doc (contexto GSAP por página; camada fixed com blend; View Transitions nativas).

**Tech Stack:** GSAP/ScrollTrigger + Lenis já instalados; View Transitions API nativa; zero dependências novas.

---

## Tarefas

### Task 1: Infra de motion
- [ ] `src/lib/motion.js`: `reduzMotion()` (matchMedia)
- [ ] `src/lib/useGsapPagina.js`: gsap.context + refresh + revert; pula sob reduced-motion
- [ ] App: `<div className="grao-global">` substitui body::before (base.css) + `document.fonts.ready → ScrollTrigger.refresh()` + parallax sutil do grão
- [ ] z-index: grão 0, moldura-site 1, camada 3

### Task 2: Artes e camada flutuante
- [ ] GravuraPlaceholder: exportar `MOTIVOS`
- [ ] `src/components/motion/ArteFlutuante.jsx`: brasão e capitular solta novos; wrappers p/ manicule/fleuron/caracol/motivos
- [ ] `src/components/motion/CamadaFlutuante.jsx`: fixed, pointer-events none, itens com timeline+trigger scrub por item (y através da tela, deriva x, rotação, fade nas pontas; transform/opacity only; will-change)
- [ ] `src/data/flutuantes.js`: capa (5), matéria (5, arte temática por slug), arquivo/sobre/visitas (2-3)
- [ ] `src/styles/motion.css`: camada, tintas (multiply sépia / screen creme), mobile policy (matéria+sobre escondem; demais 2 itens)

### Task 3: Entradas do fólio e da capa
- [ ] Materia + useGsapPagina: moldura de gravura desenha (dashoffset 736/696) → motivo revela (clip-path inset top-down), once; capitulares fade+scale once; folhas stagger no mount
- [ ] Capa: cards fade-up sutil once (entrada), frontispício estático (é âncora, não anima)

### Task 4: Virar-de-página + steps
- [ ] `viewTransition` nos Links de matéria (cards, vizinhas, rubricas da sidebar)
- [ ] motion.css: `::view-transition-old/new(root)` (desliza+fade ~480ms, rotate -0.6°); reduced-motion → animation none
- [ ] steps(2) no hover de .botao88 e manicule de citação (CSS puro)

### Task 5: Verificação e revisão
- [ ] `npm run build` limpo
- [ ] Preview: motion visível na capa e matérias; teste de vazamento (5 navegações → ScrollTrigger.getAll().length estável); console limpo; mobile (camada some na matéria); reduced-motion emulado = site estático completo
- [ ] Skill code-review foco: kill de triggers no unmount, leaks, Lenis × Router, will-change/transform-only
- [ ] Corrigir achados, rebuild, commit — **PARAR e aguardar aprovação (fim da etapa)**
