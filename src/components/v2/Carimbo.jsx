/**
 * Carimbo de rubrica: borda grossa, caps espaçadas, sempre torto —
 * como batido à mão com tinta pouca. Cor por contexto (clara no
 * escuro, tinta no pergaminho — ver v2.css).
 */
export default function Carimbo({ children, rotacao = -6, tamanho = 'm', className = '' }) {
  return (
    <span
      className={`carimbo carimbo-${tamanho} ${className}`}
      style={{ transform: `rotate(${rotacao}deg)` }}
    >
      {children}
    </span>
  )
}
