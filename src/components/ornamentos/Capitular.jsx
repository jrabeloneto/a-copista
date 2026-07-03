/**
 * Capitular iluminada — a letra inicial de cada matéria, alta como
 * quatro linhas de texto. Filete duplo dourado, brotos vegetais em
 * rubrica nos cantos, letra em Grenze Gotisch.
 *
 * Acessibilidade: a letra visível é decorativa; uma cópia
 * visualmente oculta mantém a palavra íntegra para leitores de tela.
 * Uso: <p><Capitular letra="N" />os anos sessenta...</p>
 */
export default function Capitular({ letra, className = '' }) {
  return (
    <span className={`capitular ${className}`}>
      <svg viewBox="0 0 112 112" className="capitular-ornamento" aria-hidden="true" focusable="false">
        <g filter="url(#tinta-irregular)">
          {/* filete duplo dourado */}
          <rect x="3" y="3" width="106" height="106" fill="none" stroke="var(--gold-muted)" strokeWidth="1.5" />
          <rect x="8" y="8" width="96" height="96" fill="none" stroke="var(--gold-muted)" strokeWidth="0.6" />
          {/* brotos vegetais em rubrica, um por canto, nenhum igual ao outro */}
          <g fill="none" stroke="var(--red-rubric)" strokeWidth="1" strokeLinecap="round">
            <path d="M10 32 C17 28 19 19 12 11 M12 11 C19 17 27 18 32 10" />
            <path d="M80 10 C85 17 94 19 102 13 M102 13 C95 19 94 27 101 33" />
            <path d="M102 81 C95 84 92 93 99 101 M99 101 C93 95 84 94 79 102" />
            <path d="M31 102 C26 95 18 93 10 98 M10 98 C17 93 18 85 12 79" />
          </g>
          {/* pontos de iluminação nos cantos internos */}
          <g fill="var(--gold-muted)">
            <circle cx="14" cy="14" r="1.4" />
            <circle cx="98" cy="14" r="1.2" />
            <circle cx="98" cy="98" r="1.4" />
            <circle cx="14" cy="98" r="1.1" />
          </g>
        </g>
      </svg>
      <span className="capitular-letra" aria-hidden="true">{letra}</span>
      <span className="visualmente-oculto">{letra}</span>
    </span>
  )
}
