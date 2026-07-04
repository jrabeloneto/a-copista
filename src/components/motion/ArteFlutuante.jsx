import Manicule from '../ornamentos/Manicule.jsx'
import Fleuron from '../ornamentos/Fleuron.jsx'
import MarginaliaArte from '../ornamentos/MarginaliaArte.jsx'
import { MOTIVOS } from '../folio/GravuraPlaceholder.jsx'

/**
 * As "iluminuras" que flutuam pelas páginas — placeholders woodcut
 * desenhados em código, até as imagens de domínio público chegarem
 * (public/images/README.md). Tudo herda cor via currentColor: a
 * classe de tinta (.flutuante-sepia / .flutuante-creme) decide.
 */

function Brasao() {
  return (
    <svg viewBox="0 0 120 140" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" filter="url(#tinta-irregular)">
        {/* escudo de contorno duplo */}
        <path
          d="M14 14 L106 14 L105 62 C104 96 86 118 60 130 C34 118 16 96 15 62 Z"
          strokeWidth="1.8"
        />
        <path
          d="M21 21 L99 21 L98 61 C97 91 81 110 60 121 C39 110 23 91 22 61 Z"
          strokeWidth="0.8"
        />
        {/* banda diagonal */}
        <path d="M21 34 L86 112 M30 26 L98 106" strokeWidth="1.2" />
        {/* três estrelas de seis pontas */}
        <g strokeWidth="1">
          <path d="M78 38 L82 46 L90 46 L84 52 L86 60 L78 55 L70 60 L72 52 L66 46 L74 46 Z" />
          <path d="M42 78 L45 84 L52 84 L47 89 L49 96 L42 92 L35 96 L37 89 L32 84 L39 84 Z" />
          <path d="M60 104 L62 108 L67 108 L63 112 L65 117 L60 114 L55 117 L57 112 L53 108 L58 108 Z" />
        </g>
        {/* hachura no campo inferior */}
        <path
          d="M28 70 L44 60 M30 80 L52 66 M34 90 L60 74 M40 99 L68 82 M48 108 L76 90"
          strokeWidth="0.5"
          opacity="0.55"
        />
      </g>
    </svg>
  )
}

function CapitularSolta({ letra = 'C' }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <g filter="url(#tinta-irregular)">
        <rect x="4" y="4" width="112" height="112" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="10" y="10" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <path d="M12 34 C20 30 22 20 14 12 M14 12 C20 18 29 19 34 11" />
          <path d="M106 86 C98 90 96 100 104 108 M104 108 C98 102 89 101 84 109" />
        </g>
        <text
          x="60"
          y="64"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Grenze Gotisch', serif"
          fontWeight="600"
          fontSize="68"
          fill="currentColor"
        >
          {letra}
        </text>
      </g>
    </svg>
  )
}

function MotivoSolto({ motivo }) {
  const Motivo = MOTIVOS[motivo]
  return (
    <svg viewBox="30 0 160 160" aria-hidden="true" focusable="false">
      <g filter="url(#tinta-irregular)">
        <Motivo />
      </g>
    </svg>
  )
}

const ARTES = {
  manicule: () => <Manicule />,
  fleuron: () => <Fleuron />,
  caracol: () => <MarginaliaArte arte="caracol" />,
  flor: () => <MarginaliaArte arte="flor" />,
  brasao: Brasao,
  sol: () => <MotivoSolto motivo="sol" />,
  pavao: () => <MotivoSolto motivo="pavao" />,
  alaude: () => <MotivoSolto motivo="alaude" />,
}

export default function ArteFlutuante({ nome, letra }) {
  if (nome === 'capitular') {
    return <CapitularSolta letra={letra} />
  }
  const Arte = ARTES[nome]
  return Arte ? <Arte /> : null
}
