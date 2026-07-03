/**
 * Mini-ilustrações de marginalia, traço de pena em uma cor.
 * O caracol é o morador mais antigo das margens góticas.
 */
function Caracol() {
  return (
    <svg viewBox="0 0 44 26" width="34" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        filter="url(#tinta-irregular)"
      >
        {/* concha em espiral */}
        <path d="M27 20.5 C20 20.5 15.5 15.5 16.5 10.5 C17.4 6 22.5 4 26.5 6.5 C30 8.7 30 13.5 26.8 15.2 C24.2 16.6 21.3 14.8 21.5 12.2 C21.7 10.2 24 9.4 25.3 10.8" />
        {/* corpo rastejante */}
        <path d="M27.5 20.5 C33 20.8 37.5 19.5 41 16.5 M27 20.5 L9 20.8 C6.5 20.8 4.5 19.5 4 17.5" />
        {/* antenas com olhinhos */}
        <path d="M7.5 17.5 C6 13.5 4.5 11 2.5 9 M9.5 17 C9.5 13 10 10.5 11.5 7.5" />
        <circle cx="2.2" cy="8.2" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="11.8" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

function Flor() {
  return (
    <svg viewBox="0 0 30 40" width="22" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        filter="url(#tinta-irregular)"
      >
        {/* cinco pétalas tortas */}
        <path d="M15 12 C12.5 8.5 14 4.5 17 4.8 C19.5 5.1 19.8 9 17.2 11" />
        <path d="M16.8 11.5 C20.5 10 23.8 12 23 14.8 C22.3 17.2 18.5 16.8 17 14.2" />
        <path d="M16.5 14.5 C18.5 18 16.8 21.5 14 20.8 C11.6 20.2 11.5 16.5 14 14.8" />
        <path d="M13.5 14 C10 15.5 6.8 13.8 7.5 11 C8.1 8.7 12 8.8 13.2 11.5" />
        <path d="M13.8 11 C11.8 7.8 13.2 4.2 15.8 4.9" />
        {/* miolo */}
        <circle cx="15.2" cy="12.6" r="1.7" fill="currentColor" stroke="none" />
        {/* haste com uma folha */}
        <path d="M15 20.8 C14.6 26 14.8 31 15.2 36.5 M15 27 C12 26 9.8 23.8 9.5 21" />
      </g>
    </svg>
  )
}

const ARTES = { caracol: Caracol, flor: Flor }

export default function MarginaliaArte({ arte }) {
  const Arte = ARTES[arte]
  if (!Arte) return null
  return (
    <span className="marginalia-arte">
      <Arte />
    </span>
  )
}
