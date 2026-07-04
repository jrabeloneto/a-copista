# A COPISTA — ETAPA 1 do portal: migração, chrome global e home

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (execução inline). Steps use checkbox (`- [ ]`) syntax.
> Design: `docs/superpowers/specs/2026-07-04-portal-a-copista-design.md`.

**Goal:** O CÓDICE vira editoria em /codice (links antigos redirecionam), todo o site ganha o masthead de letras de recorte (V2) + régua de etiquetas, e a raiz vira a capa-revista do portal. Seções futuras ganham stubs "EM OBRAS" de época.

## Tarefas

### Task 1: Chrome global
- [ ] tokens.css: --fita, --sepia-foto
- [ ] `src/components/portal/Masthead.jsx`: letras de recorte config-driven (aria-hidden + nome oculto acessível), linha de edição; prop `compacto`; nas internas é link p/ `/`
- [ ] `src/components/portal/ReguaEtiquetas.jsx`: NavLink etiquetas de fita (capa, códice, álbum, o quarto, discoteca, amigas, visitas), ativa = rubrica
- [ ] `src/styles/portal.css`: masthead cheio/compacto, etiquetas, objeto-colado (fita+rotação+sombra), em-obras

### Task 2: Migração do CÓDICE
- [ ] Capa.jsx → papel de índice da editoria em `/codice` (frontispício mantido; cards → /codice/materia/…)
- [ ] Materia: rota nova, breadcrumb "« códice", vizinhas atualizadas
- [ ] App.jsx: rotas novas + redirect `/materia/:slug` → `/codice/materia/:slug`; masthead+régua globais (cheio na home, compacto nas demais)

### Task 3: Home nova + stubs
- [ ] `src/pages/Home.jsx` + `src/styles/home.css`: manchete (matéria destaque do CÓDICE), grid de objetos colados (polaroid Álbum, bilhete Quarto, ficha Discoteca, caderno CÓDICE, selo Visitas c/ contador), coluna Notas Recentes + Amigas
- [ ] `src/pages/EmObras.jsx`: stub de época (manicule, "esta sala está sendo mobiliada") p/ /album /quarto /discoteca /amigas

### Task 4: Verificação
- [ ] Build limpo; preview: home, /codice, matéria via redirect antigo, stubs, navegação SPA, console, teste de vazamento; mobile rápido
- [ ] code-review; corrigir; commit — **PARAR p/ aprovação**
