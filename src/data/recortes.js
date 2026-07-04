/**
 * Recortes femininos do portal — decks por página e a coreografia.
 *
 * Um deck é uma lista ordenada de figuras. As 4 primeiras formam a
 * onda 0 (uma por slot: esq/dir × topo/baixo — máx. 2 por lado);
 * as seguintes trocam os slots a partir de ~55% do scroll.
 * faixa = [início, fim] em frações da altura rolável.
 */

const SLOTS = [
  { lado: 'esq', slot: 0 },
  { lado: 'dir', slot: 0 },
  { lado: 'esq', slot: 1 },
  { lado: 'dir', slot: 1 },
]

const ROTACOES = [-3.5, 2.8, 3.2, -2.4]

export function montarAparicoes(deck) {
  return deck.map((figura, i) => {
    const onda = Math.floor(i / 4)
    const posicao = i % 4
    const inicio = onda === 0 ? 0.02 + posicao * 0.04 : 0.5 + onda * 0.05 + posicao * 0.05
    // a figura sai quando existe substituta para o mesmo slot;
    // senão fica colada até o fim (1.05 nunca dispara onLeave)
    const substituta = deck[i + 4] !== undefined
    const fim = substituta ? 0.5 + (onda + 1) * 0.05 + posicao * 0.05 : 1.05
    return {
      figura,
      ...SLOTS[posicao],
      onda,
      faixa: [inicio, fim],
      rot: ROTACOES[posicao] + onda * 1.5,
    }
  })
}

/* capa: 6 figuras (os slots de cima trocam na segunda metade) */
export const DECK_CAPA = ['rainha', 'cantora', 'hennin', 'discoteca', 'trancas', 'atriz']

/* salas internas: 4 figuras, uma onda só */
export const DECK_SALAS = ['tapecaria', 'atriz', 'rainha', 'estrela80']
