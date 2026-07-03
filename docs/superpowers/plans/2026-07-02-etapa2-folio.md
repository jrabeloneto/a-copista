# CÓDICE — ETAPA 2: Página de matéria (o fólio) — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (execução inline nesta sessão). Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Template `/materia/:slug` completo e ESTÁTICO — folhas de pergaminho empilhadas com moldura iluminada, fólio r/v, marginalia, gravuras woodcut, colofão — e as 3 matérias com conteúdo real em PT-BR. A página deve ficar bonita parada; motion só na ETAPA 4.

**Architecture:** Conteúdo em `src/data/materias.js` (estrutura de folhas → seções tipadas). Componente `Folha` burro (recto/verso, variante de textura, moldura, fólio) recebe blocos renderizados por `BlocoSecao`. Cada matéria = 3 folhas; alternância r/v espelha margem externa e lado da marginalia, como um livro real.

**Tech Stack:** o já travado na ETAPA 1. Nenhuma dependência nova.

---

## Decisões de design desta etapa

- **Folha como objeto físico**: `clip-path: polygon(…)` com desvios de ~0,5% (bordas irregulares de pergaminho manuseado) + `filter: drop-shadow(8px 10px 0 …)` no envelope (drop-shadow segue o recorte; box-shadow seria clipado). 3 recortes e 3 seeds de mancha (`--textura-mancha-2/3` com seeds 29/47) + vinheta com epicentro deslocado por variante → nenhuma folha idêntica.
- **Recto/verso**: fólio `fol. Nr` no canto superior DIREITO com margem externa direita larga (marginalia à direita); `fol. Nv` espelhado. Cálculo: folha i → `base + floor(i/2)` + (`r` se i par, `v` se ímpar).
- **Moldura iluminada** (`MolduraIluminada.jsx`): filete duplo (ouro 1.5px externo, rubrica 1px interno) envolvendo SÓ o bloco de texto (marginalia vive FORA da moldura, na margem), cantos de nó entrelaçado de 44px com mais presença (upgrade aprovado pelo João via "faça do jeito que achar melhor"), losango-hedera no centro do filete superior. Estática; o desenho por stroke-dashoffset é ETAPA 4.
- **Marginalia**: cor sobe de `--brown-light` para `--brown` (legibilidade — decisão delegada); notas rotacionadas −1.6°/+1.1° alternadas; mini-ilustrações caracol e flor (`MarginaliaArte.jsx`), traço de pena.
- **Gravuras placeholder** (`GravuraPlaceholder.jsx`): 3 motivos woodcut desenhados em código — sol com rosto (Leila), pavão Art Nouveau (Biba), alaúde com filactério (menestréis) — hachuras, moldura de gravura dupla dentro do próprio SVG, legenda em IM Fell itálico.
- **Coluna de leitura**: ~630-655px, justificada, `hyphens: auto`, densa.
- **Citações**: sem aspas atribuídas inventadas — a citação de Leila usa os asteriscos do Pasquim como recurso (nota histórica real), as outras são aforismos da "copista", sem atribuição falsa.

## Estrutura de arquivos

- Create: `src/data/materias.js` — 3 matérias completas (slug, título, incipit, folhas→seções, colofão, assinatura 2003)
- Create: `src/components/folio/Folha.jsx`, `src/components/folio/MolduraIluminada.jsx`, `src/components/folio/GravuraPlaceholder.jsx`
- Create: `src/components/ornamentos/MarginaliaArte.jsx` (caracol, flor)
- Create: `src/pages/Materia.jsx` + `src/styles/materia.css`
- Modify: `src/App.jsx` (rota `/materia/:slug`, catch-all → `/`, scroll-to-top na troca de rota)
- Modify: `src/styles/tokens.css` (manchas 2/3, recortes), `src/styles/ornamentos.css` (marginalia --brown)
- Modify: `src/pages/Especime.jsx` (seção VI: links de navegação para as 3 matérias)

## Conteúdo (fatos âncora verificados de memória; tom de crônica medieval)

1. **Leila Diniz** (hagiografia profana): Niterói 1945; jardim de infância antes do teatro; "Todas as Mulheres do Mundo" (1966, Domingos de Oliveira); Pasquim 1969 com asteriscos e o decreto de censura prévia que ficou com seu nome; biquíni grávida de Janaína (com Ruy Guerra) em Ipanema 1971; morte a 14/06/1972 em acidente aéreo perto de Nova Délhi, voltando do festival de Adelaide. Rubricas: infância & vocação / martírio pela língua / milagre da praia / trânsito & glória.
2. **Biba** (a catedral escura): Barbara Hulanicki + Stephen Fitz-Simon; vestido de riscado por correio via Daily Mirror 1964 (~17 mil pedidos); "Biba" apelido da irmã; Abingdon Road → Kensington Church Street → Big Biba 1973 no Derry & Toms (7 andares, Rainbow Room, flamingos no terraço); interiores pretos, veludo, Art Nouveau, "auntie colours"; fim em 1975 nas mãos de investidores. Rubricas: vestido de riscado / catedral de sete andares / ruína.
3. **Medieval revival na música dos 70**: Fairport "Liege & Lief" 1969; Steeleye Span "Gaudete" (latim a cappella, hit 1973); Gryphon e os crumhorns (abriram para o Yes); Gentle Giant e madrigais; "The Battle of Evermore" com Sandy Denny e o eremita do Zeppelin IV; Jethro Tull "Minstrel in the Gallery" 1975; Rick Wakeman e o Rei Artur sobre patins no gelo (1975); David Munrow levando a música antiga à BBC. Rubricas: eletrificação das baladas / instrumentos ressuscitados / rei Artur sobre o gelo.

## Tarefas

### Task 1: Dados e tokens
- [x] materias.js com as 3 matérias completas (6-8 parágrafos cada, seções tipadas: paragrafo/rubrica/citacao/gravura, marginalia por bloco)
- [x] tokens.css: --textura-mancha-2/3, --recorte-folha-1/2/3

### Task 2: Componentes do fólio
- [x] MolduraIluminada (filetes CSS + 4 cantos SVG 44px + losango central)
- [x] Folha (envelope drop-shadow, recto/verso, variante, fólio, conteúdo)
- [x] GravuraPlaceholder (sol/pavao/alaude + legenda)
- [x] MarginaliaArte (caracol, flor)

### Task 3: Página e rotas
- [x] Materia.jsx (useParams, not-found → capa, título do documento, nav 2003 no topo, assinatura de post, links anterior/seguinte)
- [x] materia.css (folha, margens espelhadas, blocos, gravura, responsivo mínimo)
- [x] App.jsx: rotas + ScrollParaTopo
- [x] Especime: seção VI com links das matérias

### Task 4: Verificação e revisão
- [x] `npm run build` limpo
- [x] Preview: screenshot das 3 matérias, navegação entre elas, marginalia legível, variação entre folhas visível
- [x] Skill code-review sobre o diff da etapa (semântica, estrutura)
- [x] Corrigir achados, rebuild, commit
- [x] Resumo p/ aprovação — **PARAR antes da ETAPA 3**
