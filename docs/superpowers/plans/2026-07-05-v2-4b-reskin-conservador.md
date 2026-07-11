# A COPISTA — V2-4b: o pessoal SEM a mesa (re-skin conservador)

> A V2-4 "mesa" foi REVERTIDA pelo João (reset em 1feaba2): layout
> espalhado desorganizou, mexeu no motion da capa e sumiu com fundos.
> Este plano substitui aquela etapa com o oposto: NADA de layout
> novo, NADA de fundo novo, NADA de toque no hero. Só a pele v1
> restante vira v2.

## Diagnóstico do que ainda é v1 nas 4 seções

- **/quarto** — já é colagem (papéis com fita, meses gigantes): OK.
  Só respiro: gap do feed sobe para --espaco-4.
- **/album** — polaroids e cantoneiras já são objetos: OK.
  Só respiro nos gaps.
- **/amigas** — selos 88×31 são relíquia intocável: OK como está.
- **/discoteca** — a ÚNICA ofensora clara: .ficha é retângulo
  bg-card com borda 1px (o anti-padrão nº 1 do João). Re-skin:
  ficha vira PEDAÇO de papel sépia (clip rasgo alternado por
  nth-child, sem borda), tinta sobre papel (títulos ink, hederas
  rubrica), capa com fio brown. Vale na grade E na prateleira
  (as capas de frente ficam melhores ainda em papel).

## Guardrails desta etapa

- Contexto permanece `contexto-padrao` (900px) nas 4 — sem alargar.
- Zero mudanças em: HeroCapa, home, contextos cartaz/livro, fundos.
- Limpeza de órfão: CaixaSidebar (morto desde o CodiceIndex-spread)
  some junto com seu CSS, se o grep confirmar zero usos.

## Tarefas
- [x] secoes.css: ficha → papel sépia rasgado (grade + prateleira); respiros do quarto/álbum
- [x] Grep CaixaSidebar → deletar componente + CSS se órfão
- [x] Build; verificação visual página a página + leak test; commit

## ADENDO (feedback do João): "continuidade completa, assim como na capa"

O re-skin foi tímido. As 4 seções ganham a LINGUAGEM INTEIRA do
cartaz — com a organização em grid que funcionou lá (zigzag/stagger
por nth-child, nunca absoluto espalhado):

- **Contexto**: quarto/álbum/amigas/discoteca → `contexto-cartaz`
  (1160px + grão de xerox = literalmente o fundo da capa). Recortes
  laterais no cartaz somem <1500px (sem espaço real).
- **Tipografia-como-layout**: `.tipo-fundo` vira utilitário no
  v2.css; cada seção ganha seu gigante vazado atrás (DIÁRIO, ÁLBUM,
  ANEL, DISCOS) + Carimbo no cabeçalho.
- **Quarto**: feed vira zigzag de 12 colunas (ímpar esquerda / par
  direita, cada entrada na sua linha); papéis ganham rasgo alternado;
  etiqueta de data e meses gigantes ficam (mês alterna de lado).
- **Álbum**: grade de 3 colunas com stagger vertical (nth-child).
- **Amigas**: selos sobre etiquetas de fita rasgadas, rotações leves.
- **Discoteca**: gigante atrás da caixa; carimbo no cabeçalho.
- Mobile (≤920): tudo volta às pilhas atuais — zigzag/stagger só ≥921.
- INTOCADOS: hero, home, contexto-livro, fundos além do xerox provado.

- [ ] App (contextos) + v2.css (.tipo-fundo, hide recortes) + secoes.css (zigzag/stagger/etiquetas) + 4 páginas (gigante+carimbo)
- [ ] Build; verificação visual das 4; leak; commit — **PARAR p/ aprovação**
