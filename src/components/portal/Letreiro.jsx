/**
 * O letreiro da casa: o <marquee> de 2003 refeito em CSS moderno —
 * duas cópias da linha em loop de translateX, pausa no hover,
 * estático sob reduced-motion. Separador: ❦ (a hedera tipográfica,
 * um glifo de fundição, não emoji).
 */
export default function Letreiro({ itens }) {
  const linha = `${itens.join('  ❦  ')}  ❦  `
  return (
    <div className="letreiro">
      <span className="visualmente-oculto">{itens.join('; ')}</span>
      <div className="letreiro-faixa" aria-hidden="true">
        <span className="letreiro-trecho">{linha}</span>
        <span className="letreiro-trecho">{linha}</span>
      </div>
    </div>
  )
}
