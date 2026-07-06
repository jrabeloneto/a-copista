import { useEffect, useState } from 'react'
import { reduzMotion } from '../../lib/motion.js'

/**
 * O preloader da casa: na primeira visita da sessão, o brasão do
 * favicon se monta em três tempos (campo, banda, contorno — steps,
 * como GIF antigo) sob "a copista está molhando a pena…".
 * ~1.2s, uma vez por sessão (sessionStorage), nunca sob
 * reduced-motion. Puro CSS; o desmonte é um setTimeout.
 */
function jaAbriu() {
  try {
    return Boolean(sessionStorage.getItem('copista-abriu'))
  } catch {
    return true
  }
}

export default function Preloader() {
  const [visivel, setVisivel] = useState(() => !jaAbriu() && !reduzMotion())

  useEffect(() => {
    if (!visivel) return undefined
    try {
      sessionStorage.setItem('copista-abriu', '1')
    } catch {
      /* sem storage, sem repetição garantida — inofensivo */
    }
    const temporizador = setTimeout(() => setVisivel(false), 1450)
    return () => clearTimeout(temporizador)
  }, [visivel])

  if (!visivel) return null

  return (
    <div className="preloader" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="96" height="96" shapeRendering="crispEdges" className="preloader-brasao">
        <g className="pre-tempo pre-tempo-1">
          <path fill="#e8dfd0" d="M4 3h8v6H4z M5 9h6v2H5z M6 11h4v1H6z M7 12h2v1H7z" />
        </g>
        <g className="pre-tempo pre-tempo-2">
          <path fill="#8f3d33" d="M10 3h2v1h-2z M9 4h2v1H9z M8 5h2v1H8z M7 6h2v1H7z M6 7h2v1H6z M5 8h2v1H5z M5 9h1v1H5z" />
        </g>
        <g className="pre-tempo pre-tempo-3">
          <path fill="#a8895c" d="M3 2h10v1H3z M3 3h1v6H3z M12 3h1v6h-1z M4 9h1v2H4z M11 9h1v2h-1z M5 11h1v1H5z M10 11h1v1h-1z M6 12h1v1H6z M9 12h1v1H9z M7 13h2v1H7z" />
        </g>
      </svg>
      <p className="ui-2003 preloader-frase">a copista está molhando a pena…</p>
    </div>
  )
}
