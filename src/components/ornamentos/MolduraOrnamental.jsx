/**
 * Moldura iluminada — filete duplo (dourado externo, rubrica interno)
 * com nós entrelaçados nos quatro cantos. Dois desenhos de canto
 * alternados na diagonal para que nenhum par vizinho seja clone.
 */
function CantoNoA({ posicao }) {
  return (
    <svg viewBox="0 0 32 32" className={`moldura-canto moldura-canto-${posicao}`} aria-hidden="true" focusable="false">
      <g fill="none" strokeLinecap="round" filter="url(#tinta-irregular)">
        {/* arco que emenda os filetes */}
        <path d="M4 28 C4 13 13 4 28 4" stroke="var(--gold-muted)" strokeWidth="1.4" />
        <path d="M9.5 28 C9.5 16 16 9.5 28 9.5" stroke="var(--red-rubric)" strokeWidth="0.8" />
        {/* nó entrelaçado */}
        <path d="M6.5 14 C2.5 10 5 3.5 10.5 5.2 C15 6.6 14 12.5 9.5 12.5 C5.5 12.5 4.5 7.5 8.5 6.2" stroke="var(--gold-muted)" strokeWidth="1" />
        <path d="M13.5 7 C17 4 21.5 6.5 20.5 10.5" stroke="var(--red-rubric)" strokeWidth="0.8" />
      </g>
    </svg>
  )
}

function CantoNoB({ posicao }) {
  return (
    <svg viewBox="0 0 32 32" className={`moldura-canto moldura-canto-${posicao}`} aria-hidden="true" focusable="false">
      <g fill="none" strokeLinecap="round" filter="url(#tinta-irregular-forte)">
        <path d="M4 28 C4.5 12.5 12.5 4.5 28 4" stroke="var(--gold-muted)" strokeWidth="1.4" />
        <path d="M9.5 28 C10 16.5 16.5 10 28 9.5" stroke="var(--red-rubric)" strokeWidth="0.8" />
        {/* folha de acanto no lugar do nó */}
        <path d="M7 13.5 C4 8.5 7.5 3 12 4.5 C15.5 5.7 15 10.5 11.5 11.5 C14 12 15.5 14.5 14 17" stroke="var(--gold-muted)" strokeWidth="1" />
        <path d="M12 4.5 C13.5 6.5 13.8 8.8 12.8 11" stroke="var(--red-rubric)" strokeWidth="0.7" />
      </g>
    </svg>
  )
}

export default function MolduraOrnamental({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`moldura-ornamental ${className}`}>
      <CantoNoA posicao="ne" />
      <CantoNoB posicao="se" />
      <CantoNoA posicao="so" />
      <CantoNoB posicao="no" />
      <div className="moldura-ornamental-conteudo">{children}</div>
    </Tag>
  )
}
