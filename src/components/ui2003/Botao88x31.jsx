/**
 * Botão 88×31 — o banner de "sites amigos" da era Blogspot.
 * SVG com shape-rendering crispEdges, bevel de pixel (claro no
 * topo/esquerda, escuro embaixo/direita) e cantos chanfrados.
 * Cores estritamente da paleta.
 */
const VARIANTES = {
  escuro: {
    fundo: '#1a1714',
    bevelClaro: '#6b5544',
    bevelEscuro: '#12100d',
    texto: '#e8dfd0',
    sub: '#a8895c',
  },
  pergaminho: {
    fundo: '#e8dfd0',
    bevelClaro: '#f2ece0',
    bevelEscuro: '#8a7360',
    texto: '#2b241c',
    sub: '#8f3d33',
  },
  rubrica: {
    fundo: '#8f3d33',
    bevelClaro: '#a8895c',
    bevelEscuro: '#12100d',
    texto: '#e8dfd0',
    sub: '#e8dfd0',
  },
}

export default function Botao88x31({ titulo = 'CÓDICE', subtitulo = 'vol. I', variante = 'escuro' }) {
  const cor = VARIANTES[variante] ?? VARIANTES.escuro
  return (
    <svg
      width="88"
      height="31"
      viewBox="0 0 88 31"
      shapeRendering="crispEdges"
      className="botao88"
      role="img"
      aria-label={`Selo ${titulo} ${subtitulo}`}
    >
      <rect width="88" height="31" fill={cor.fundo} />
      {/* bevel de pixel */}
      <rect x="0" y="0" width="88" height="1" fill={cor.bevelClaro} />
      <rect x="0" y="0" width="1" height="31" fill={cor.bevelClaro} />
      <rect x="0" y="30" width="88" height="1" fill={cor.bevelEscuro} />
      <rect x="87" y="0" width="1" height="31" fill={cor.bevelEscuro} />
      {/* filete interno */}
      <rect x="2" y="2" width="84" height="27" fill="none" stroke={cor.sub} strokeWidth="1" strokeDasharray="2 1" />
      {/* cantos chanfrados (pixel cortado) */}
      <rect x="0" y="0" width="1" height="1" fill={cor.bevelEscuro} />
      <rect x="87" y="30" width="1" height="1" fill={cor.bevelClaro} />
      <text
        x="44"
        y="15"
        textAnchor="middle"
        fontFamily="Verdana, Geneva, sans-serif"
        fontSize="9"
        fontWeight="bold"
        fill={cor.texto}
      >
        {titulo}
      </text>
      <text
        x="44"
        y="25"
        textAnchor="middle"
        fontFamily="Verdana, Geneva, sans-serif"
        fontSize="7"
        fill={cor.sub}
      >
        {subtitulo}
      </text>
    </svg>
  )
}
