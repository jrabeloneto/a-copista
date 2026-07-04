# A COPISTA — ETAPA 2 do portal: recortes femininos nas bandas

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (inline). Checkboxes p/ tracking.
> Design: spec do portal, seção "Recortes femininos".

**Goal:** figuras femininas (damas medievais + ícones 70s/80s) recortadas como de revista, presas nas bandas fora dos 900px, máx. 2 por lado, aparecendo e trocando conforme o scroll. Placeholders desenhados; PD depois.

## Decisões técnicas

- **Aparições discretas, não scrub**: cada figura tem uma FAIXA de scroll
  [início, fim] (frações da altura rolável). ScrollTrigger com
  onEnter/onLeaveBack = colar (opacity+rotação assentando+y, ~0.5s),
  onLeave/onEnterBack = descolar (~0.35s, sai levemente para o lado de fora).
  Transform/opacity apenas; triggers no contexto da página (useGsapPagina).
- **Ondas**: deck de figuras → onda 0 preenche os 4 slots (entradas
  escalonadas no começo); figuras seguintes trocam os slots a ~55-70%.
  Página curta (rolagem < 300px): só a onda 0, colada na entrada.
- **Slots**: esquerda/direita × topo (15vh) / baixo (54vh) → máx 2 por lado.
- **Onde**: todas as páginas do portal EXCETO /codice/* e /especime —
  dentro do fanzine o efeito é o das iluminuras (ETAPA 4 antiga); os
  recortes são o efeito do portal. Montada no App com key={pathname}.
- **Reduced-motion**: só onda 0, estática, visível (CSS default visível;
  o GSAP é quem esconde no mount quando há motion).
- **≤1189px**: display none (banda < ~140px). Nunca sobre conteúdo.
- **Figuras placeholder** (`FiguraRecorte.jsx`): 8 silhuetas duotone
  estilo recorte — rainha séc. XIV, dama do hennin, donzela de tranças,
  dama da tapeçaria; cantora 1974, atriz 1969, rainha da pista 1978,
  estrela 1985. Papel com borda rasgada (2 clip-paths), fita, legenda
  itálica. Cores: --sepia-foto/--paper-edge de fundo, --ink/--brown/
  --red-rubric nas silhuetas.

## Tarefas
- [x] `src/data/recortes.js` (decks: capa 6, salas 4) + `montarAparicoes`
- [x] `src/components/recortes/FiguraRecorte.jsx` (8 artes SVG)
- [x] `src/components/recortes/CamadaRecortes.jsx` (bandas fixed + triggers)
- [x] `src/styles/recortes.css` (papel rasgado, fita, slots, media hide)
- [x] App: montar com key={pathname} fora de /codice e /especime
- [x] Build; preview: aparição/troca no scroll, 2 por lado, hide estreito, leak test; review; commit — **PARAR p/ aprovação**
