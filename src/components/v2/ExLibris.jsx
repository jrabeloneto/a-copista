/**
 * Ex-libris / etiqueta de biblioteca: selo fino em versaletes,
 * levemente torto — o 2003 evoluído para carimbo de acervo.
 */
export default function ExLibris({ children, rotacao = -3, className = '' }) {
  return (
    <span className={`exlibris ${className}`} style={{ transform: `rotate(${rotacao}deg)` }}>
      {children}
    </span>
  )
}
