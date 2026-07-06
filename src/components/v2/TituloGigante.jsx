/**
 * Tipografia-como-layout do contexto cartaz: display gigante,
 * cheio ou vazado (text-stroke; fallback preenchido). Semântica é
 * do chamador — isto é um span de vestir.
 */
export default function TituloGigante({ children, vazado = false, className = '' }) {
  return (
    <span className={`titulo-gigante ${vazado ? 'tg-vazado' : ''} ${className}`}>
      {children}
    </span>
  )
}
