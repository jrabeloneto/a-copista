/**
 * Defs SVG globais, montadas uma única vez no App.
 * #tinta-irregular: dá aos ornamentos o tremido de traço gravado
 * (woodcut) — linhas nunca perfeitamente retas.
 */
export default function GrainDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="tinta-irregular" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" result="ruido" />
          <feDisplacementMap in="SourceGraphic" in2="ruido" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="tinta-irregular-forte" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="17" result="ruido" />
          <feDisplacementMap in="SourceGraphic" in2="ruido" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  )
}
