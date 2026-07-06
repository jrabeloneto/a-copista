/**
 * O anti-card do v2: um PEDAÇO de papel rasgado no lugar de qualquer
 * retângulo de borda 1px. Três rasgos (a/b/c), três tons
 * (papel/sepia/fita), fita adesiva opcional, rotação leve.
 * O clip corta a sombra — pedaço rasgado deita COLADO, por design.
 */
export default function PapelRasgado({
  variante = 'a',
  tom = 'papel',
  fita = false,
  rotacao = 0,
  className = '',
  as: Tag = 'div',
  children,
}) {
  return (
    <Tag
      className={`papel-rasgado pr-rasgo-${variante} pr-tom-${tom} ${className}`}
      style={rotacao ? { transform: `rotate(${rotacao}deg)` } : undefined}
    >
      {fita && <span className="pr-fita" aria-hidden="true" />}
      <div className="papel-rasgado-miolo">{children}</div>
    </Tag>
  )
}
