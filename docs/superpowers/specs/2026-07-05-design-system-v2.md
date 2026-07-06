# A COPISTA — Design System v2 ("C+B+A por contexto")

> Refazer a UI inteira sem perder a estética (João, 2026-07-05).
> Diagnóstico dele: tudo é retângulo de borda 1px; falta escala
> tipográfica; denso demais; pouca textura no miolo.
> INTOCÁVEIS: paleta + tipografia; recortes & colagem.
> LIBERADOS: a moldura fixa de 900px e a forma dos elementos 2003.

## A receita (escolha do João entre 3 modelos + mistura)

O site ganha TRÊS TONS da mesma língua, por contexto:

- **C — "Cartaz xerocado"** → a chegada (home) e a discoteca:
  escuro, coluna larga (~1160px), TIPOGRAFIA COMO LAYOUT (display
  gigante cheio/vazado cruzando a composição), pedaços de papel
  rasgado no lugar de cards, carimbos de rubrica, grão de xerox.
- **B — "Códice aberto"** → a leitura (códice, matérias, sobre,
  arquivo, visitas): claro domina; spreads de livro com lombada
  central, margens de livro raro, manchas tipográficas SEM caixas,
  ex-libris e carimbos de biblioteca; matérias em dupla-página
  (verso|recto lado a lado) no desktop.
- **A — "Mesa da copista"** → o pessoal (quarto, álbum, amigas):
  fundo-mesa em tela cheia; componentes são objetos soltos (folhas
  rasgadas, tickets, polaroids, etiquetas) espalhados com respiro.

Regra transversal: NENHUM retângulo de borda 1px como contêiner —
as formas são rasgo, mancha tipográfica ou objeto. Escala de
espaçamento ~1.6× maior. Texture em toda superfície (xerox, mesa,
pergaminho). Motion/efeitos existentes permanecem (recortes,
iluminuras, hero, prateleira) re-vestidos.

## Fundação (tokens v2)

- Escalas: --escala-display-1 (clamp 72–148px, tipografia-layout),
  --escala-display-2, --escala-titulo; espaçamento --espaco-1..6
  (8/14/22/36/56/90).
- Largura por contexto: --largura-contexto (default 900px; cartaz
  1160px; livro 1080px; mesa 100%) — moldura e bandas de recortes
  passam a ler a var (fim do 900 cravado).
- Formas: --recorte-papel-a/b/c (rasgos novos, mais irregulares).
- Texturas: --textura-xerox (grão forte) e --textura-mesa (madeira
  sutil + grão) além das existentes.

## Componentes-base novos (src/components/v2/)

- **PapelRasgado** (o anti-card: pedaço de papel com rasgo variante,
  tom paper/sepia/fita, fita adesiva opcional)
- **Carimbo** (borda 3px rubrica, rotacionado, letter-spacing largo)
- **ExLibris** (selo fino de biblioteca)
- **TituloGigante** (display cheio+vazado via text-stroke, p/ C)
- Spread/Lombada (V2-3) e MesaFundo (V2-4) nascem nas suas etapas.

## Fatiamento (gate por etapa)

1. **V2-1 Fundação**: tokens v2 + componentes-base + seção v2 no
   /especime (prova do impressor atualizada) + largura tokenizada.
2. **V2-2 A chegada (C)**: home re-composta como cartaz.
3. **V2-3 A leitura (B)**: códice/matérias/sobre/arquivo/visitas como livro aberto.
4. **V2-4 O pessoal (A)**: quarto/álbum/amigas como mesa.
5. **V2-5**: discoteca re-vestida (C) + revisão completa + a11y/anti-slop.
