/**
 * Fleuron — folha de hera (hedera) com talo em voluta,
 * o ornamento tipográfico clássico de fim de parágrafo.
 * Assimétrico de propósito; herda cor via currentColor.
 */
export default function Fleuron({ className = '', width = 34 }) {
  return (
    <svg
      viewBox="0 0 44 36"
      width={width}
      className={`fleuron ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <g filter="url(#tinta-irregular)">
        {/* folha de hera inclinada como a hedera tipográfica clássica —
            a rotação desfaz a leitura de coração */}
        <g transform="rotate(-17 20 17)">
        <path
          d="M19.5 7.4
             C17.8 3.4 12.4 1.6 8.9 4.4
             C5.6 7 5.4 11.8 8.2 14.4
             C10.8 16.8 14.6 17.6 16.9 20
             C18.4 21.6 19.2 23.8 19.3 27.2
             C20.3 23.6 21.5 21.3 23.3 19.6
             C25.7 17.4 29.6 16.4 31.9 13.7
             C34.4 10.7 33.6 6.1 30.1 4
             C26.6 1.9 21.6 3.7 19.9 7.4
             C19.8 7.6 19.6 7.6 19.5 7.4 Z"
          fill="currentColor"
        />
        {/* nervuras riscadas em negativo */}
        <path
          d="M19.6 9 C19.4 14 19.3 20.5 19.3 25.4 M19.5 12.6 C16.6 11.2 13.4 10.4 10.4 10.8 M19.6 12.8 C22.6 11.4 25.8 10.6 28.8 11.2"
          fill="none"
          stroke="var(--bg-paper)"
          strokeWidth="0.7"
          opacity="0.55"
        />
        </g>
        {/* cauda fina que vira voluta à direita, emendada na ponta rotacionada */}
        <path
          d="M22.3 27 C22.8 30 25.4 32.6 27.9 32.2 C31.5 31.6 33 28.4 31 26.8 C29.3 25.5 26.9 26.9 27.7 28.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
