/**
 * Manicule — a mãozinha de manuscrito que aponta citações.
 * Desenhada como traço de pena: punho com dupla linha, indicador
 * estendido, três dedos dobrados. Herda cor via currentColor.
 */
export default function Manicule({ className = '' }) {
  return (
    <svg
      viewBox="0 0 52 26"
      width="38"
      height="19"
      className={`manicule ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#tinta-irregular)"
      >
        {/* punho com bainha dupla */}
        <path d="M2.4 5.6 L10.9 5.2 L11.3 21 L2.8 21.6 Z" />
        <path d="M4.8 5.4 L5.1 21.4" strokeWidth="0.7" />
        {/* dorso da mão e indicador estendido */}
        <path d="M11.1 8.8 C14.9 6.3 19.8 5.7 24.3 6.5 L47.3 8.1 C49.3 8.4 49.4 11.2 47.2 11.4 L26.2 11.8" />
        {/* dedos dobrados, cada nó um pouco diferente */}
        <path d="M26.2 11.8 C29.7 12.1 30.1 15.2 26.5 15.7 L20.6 15.8" />
        <path d="M22.7 15.8 C25.9 16.3 26 19 22.8 19.5 L18 19.4" />
        <path d="M19.2 19.4 C21.7 19.9 21.6 22.4 18.5 22.6 C15.1 22.7 12.3 22.2 11.3 21" />
        {/* polegar por cima */}
        <path d="M13.6 8.3 C16.4 3.6 22.5 2.4 24.7 6.6" />
        {/* unha do indicador */}
        <path d="M44.6 8.5 L44.4 11.3" strokeWidth="0.65" />
        {/* punho da manga */}
        <path d="M2.4 5.6 C1.2 9 1.2 18 2.8 21.6" strokeWidth="0.8" />
      </g>
    </svg>
  )
}
