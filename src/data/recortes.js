/**
 * Recortes femininos do portal — decks por página e a coreografia.
 *
 * Um deck é uma lista ordenada de figuras. As 4 primeiras formam a
 * onda 0 (uma por slot: esq/dir × topo/baixo — máx. 2 por lado);
 * as seguintes trocam os slots a partir de ~55% do scroll.
 * faixa = [início, fim] em frações da altura rolável.
 */

/**
 * Travessias em paralaxe (pedido do João): cada figura sobe de baixo
 * para cima JUNTO com o scroll (scrub), numa "profundidade" própria —
 * a do fundo é menor, mais lenta e mais tênue; a da frente, maior e
 * mais rápida — como camadas de um fundo 3D infinito.
 *
 * faixa = janela de scroll (frações da altura rolável) em que a
 * figura faz a travessia completa. As janelas de cada lado se
 * sobrepõem no MÁXIMO duas a duas: nunca mais de 2 por lado.
 */
const FAIXAS_POR_LADO = [
  [0.0, 0.5],
  [0.25, 0.75],
  [0.55, 1.05],
]

const PROFUNDIDADES = [
  { escala: 1, opacidade: 0.95 },   // perto: maior, rápida, sólida
  { escala: 0.76, opacidade: 0.68 }, // fundo: menor, lenta, tênue
  { escala: 0.9, opacidade: 0.85 },  // meio
]

export function montarTravessias(deck) {
  const contagem = { esq: 0, dir: 0 }
  return deck.map((figura, i) => {
    const lado = i % 2 === 0 ? 'esq' : 'dir'
    const k = Math.min(contagem[lado], FAIXAS_POR_LADO.length - 1)
    contagem[lado] += 1
    const base = FAIXAS_POR_LADO[k]
    const desloc = lado === 'dir' ? 0.09 : 0
    return {
      figura,
      lado,
      faixa: [Math.min(base[0] + desloc, 0.9), Math.min(base[1] + desloc, 1.05)],
      ...PROFUNDIDADES[k],
      rot: (lado === 'esq' ? -1 : 1) * [3, 2.2, 3.6][k],
    }
  })
}

/* capa: 6 figuras (os slots de cima trocam na segunda metade) */
export const DECK_CAPA = ['rainha', 'cantora', 'hennin', 'discoteca', 'trancas', 'atriz']

/* salas internas: 4 figuras, uma onda só */
export const DECK_SALAS = ['tapecaria', 'atriz', 'rainha', 'estrela80']
