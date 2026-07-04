# CÓDICE — ETAPA 5: Polimento e revisão final — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (execução inline nesta sessão). Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fechar o projeto: favicon-brasão, lazy loading de rotas, auditoria de contraste/foco (acessibilidade), polimento mobile, auditoria anti-slop final, revisão completa e build limpo.

---

## Achados da auditoria prévia (a corrigir)

1. **CONTRASTE (o achado sério)**: links e rubricas em `--red-rubric` (#8f3d33)
   sobre fundos escuros ficam em ~2.3:1 — reprovado. Sobre pergaminho está em
   5.6:1 (aprovado). Correção por SHADES do mesmo matiz (paleta rígida permite
   shades documentados):
   - `--rubric-clara: #c1756a` (~4.8:1 sobre --bg-base) — links e rubricas em
     contexto escuro; o vermelho-sangue original permanece em TODO o pergaminho
   - `--brown-visitado: #a08b76` (~5.2:1) — :visited em contexto escuro;
     `--brown` permanece nos contextos claros
   - Regra de cascata: default escuro; `.pergaminho a` etc. restauram os tons de tinta
2. **Foco sobre pergaminho**: outline dourado tem 2.5:1 sobre creme —
   `.pergaminho :focus-visible` passa a rubrica (5.6:1).
3. **Favicon**: brasão pixel-art SVG (shape-rendering crispEdges, grade 16×16,
   escudo dourado com banda rubrica sobre fundo escuro) + `<link rel="icon">`.
4. **Lazy loading**: rotas secundárias (Arquivo, Sobre, Visitas, Especime) via
   React.lazy + Suspense (fallback discreto ui-2003); Capa e Matéria eager
   (conteúdo primário). Imagens raster: não existem ainda — instrução de
   `loading="lazy"` já consta em public/images/README.md.
5. **Mobile**: justificação vira rios em coluna estreita — `text-align: left`
   ≤700px nos parágrafos de leitura (hyphens ficam); conferir todas as rotas a
   375px; camada flutuante já auditada na ETAPA 4.
6. **Anti-slop final**: grep de border-radius (deve ser zero), box-shadow com
   blur (deve ser zero), cores hex fora da paleta+shades documentados.
7. `<meta name="theme-color">` #1a1714.

## Tarefas

### Task 1: Acessibilidade
- [x] tokens: --rubric-clara, --brown-visitado (+ comentário de contraste)
- [x] base.css: links default (escuro) vs .pergaminho (tinta); foco por contexto
- [x] Varredura de usos de rubrica sobre escuro (rubricas de página, especime)

### Task 2: Favicon + lazy + meta
- [x] public/favicon.svg pixel-art + link no index.html + theme-color
- [x] App.jsx: React.lazy nas 4 rotas secundárias + Suspense

### Task 3: Mobile
- [x] text-align left ≤700px (folha-paragrafo, sobre-texto, folio-texto do especime)
- [x] passada visual 375px em todas as rotas; ajustes pontuais

### Task 4: Auditorias e fechamento
- [x] Grep anti-slop: border-radius / blur / cores fora da paleta
- [x] `npm run build` limpo
- [x] Skill code-review (projeto completo); corrigir achados
- [x] Commit final; registrar estado no claude-mem/memória; resumo — **FIM**
