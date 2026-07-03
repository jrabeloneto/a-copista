/**
 * Gravuras placeholder da "oficina do CÓDICE" — woodcuts desenhados
 * em código até que as imagens de domínio público sejam baixadas
 * (ver public/images/README.md). Moldura de gravura dupla dentro do
 * próprio SVG; hachuras à mão; tinta ferrogálica sobre o pergaminho.
 */

function Hachura({ x, y, largura, altura, passo = 3.2, inclinacao = 0.6 }) {
  const linhas = []
  for (let i = 0; i < Math.floor(largura / passo); i += 1) {
    const px = x + i * passo
    linhas.push(`M${px} ${y + altura} L${px + inclinacao * altura} ${y}`)
  }
  return <path d={linhas.join(' ')} strokeWidth="0.45" opacity="0.55" />
}

function MotivoSol() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      {/* rosto do sol */}
      <circle cx="110" cy="78" r="30" strokeWidth="1.4" />
      <path d="M99 71 C100.5 69 103.5 69 105 71 M115 71 C116.5 69 119.5 69 121 71" />
      <path d="M104 88 C107.5 91.5 112.5 91.5 116 88" />
      <path d="M109 76 C108 80 108.5 82 110.5 83" strokeWidth="0.8" />
      {/* raios retos e ondulados alternados */}
      <path d="M110 40 L110 28 M110 116 L110 128 M72 78 L60 78 M148 78 L160 78" strokeWidth="1.3" />
      <path d="M83 51 C79 47 76 44 73 42 M137 51 C141 47 144 44 147 42 M83 105 C79 109 76 112 73 114 M137 105 C141 109 144 112 147 114" />
      <path d="M95 44 C93 40 92.5 36 93.5 32 M125 44 C127 40 127.5 36 126.5 32 M95 112 C93 116 92.5 120 93.5 124 M125 112 C127 116 127.5 120 126.5 124" strokeWidth="0.9" />
      <path d="M76 63 C72 61.5 68.5 61 64.5 61.5 M144 63 C148 61.5 151.5 61 155.5 61.5 M76 93 C72 94.5 68.5 95 64.5 94.5 M144 93 C148 94.5 151.5 95 155.5 94.5" strokeWidth="0.9" />
      {/* hachura de sombra no quadrante inferior esquerdo do rosto */}
      <g stroke="currentColor">
        <Hachura x={86} y={84} largura={26} altura={18} passo={2.8} />
      </g>
      {/* ondas de Ipanema aos pés */}
      <path d="M52 140 C62 134 72 134 82 140 C92 146 102 146 112 140 C122 134 132 134 142 140 C152 146 162 146 168 141" strokeWidth="0.9" />
      <path d="M60 148 C70 142.5 80 142.5 90 148 C100 153.5 110 153.5 120 148 C130 142.5 140 142.5 150 148" strokeWidth="0.7" opacity="0.75" />
    </g>
  )
}

function MotivoPavao() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      {/* leque de penas em chicote Art Nouveau */}
      <path d="M110 118 C70 108 48 76 58 40 C60.5 48 65 54 72 58" />
      <path d="M110 118 C82 100 70 70 82 34 C83 44 86.5 51 93 56" />
      <path d="M110 118 C96 96 94 62 108 30 C107.5 41 110 49 115 55" />
      <path d="M110 118 C122 94 128 64 134 32 C132 43 133.5 51 138 57" />
      <path d="M110 118 C142 102 156 74 150 38 C148.5 47 145 53 139 58" />
      {/* olhos das penas */}
      <ellipse cx="60" cy="34" rx="5" ry="7" transform="rotate(-18 60 34)" strokeWidth="1.1" />
      <ellipse cx="84" cy="27" rx="5" ry="7" transform="rotate(-8 84 27)" strokeWidth="1.1" />
      <ellipse cx="109" cy="23" rx="5" ry="7" strokeWidth="1.1" />
      <ellipse cx="135" cy="26" rx="5" ry="7" transform="rotate(8 135 26)" strokeWidth="1.1" />
      <ellipse cx="152" cy="32" rx="5" ry="7" transform="rotate(18 152 32)" strokeWidth="1.1" />
      <circle cx="60" cy="34" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="84" cy="27" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="109" cy="23" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="135" cy="26" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="152" cy="32" r="1.5" fill="currentColor" stroke="none" />
      {/* corpo em S, pescoço e coroa */}
      <path d="M110 118 C104 112 102 104 105 96 C108 88 106 80 100 74 C95 69 94 61 98 55 C101 50.5 106 48.5 110.5 50" strokeWidth="1.4" />
      <path d="M110.5 50 C114 51.5 116 55 115 59" strokeWidth="1.4" />
      <path d="M108 46 L106 40.5 M111 45.5 L111 39.5 M114 46 L116 40.5" strokeWidth="0.8" />
      <circle cx="105.5" cy="40" r="1" fill="currentColor" stroke="none" />
      <circle cx="111" cy="39" r="1" fill="currentColor" stroke="none" />
      <circle cx="116.5" cy="40" r="1" fill="currentColor" stroke="none" />
      <path d="M107 52.5 C105.5 53.5 105.5 55 106.5 56" strokeWidth="0.8" />
      <circle cx="108.8" cy="52.8" r="0.9" fill="currentColor" stroke="none" />
      {/* pés e chão da penumbra */}
      <path d="M107 118 L104 127 M112 118 L114 127 M98 129 C108 126 116 126 124 129" strokeWidth="0.9" />
      <g stroke="currentColor">
        <Hachura x={62} y={132} largura={96} altura={12} passo={3.4} inclinacao={0.4} />
      </g>
    </g>
  )
}

function MotivoAlaude() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      {/* corpo piriforme */}
      <path d="M110 118 C88 118 74 102 74 84 C74 66 88 56 101 53 L119 53 C132 56 146 66 146 84 C146 102 132 118 110 118 Z" strokeWidth="1.4" />
      {/* rosácea */}
      <circle cx="110" cy="84" r="10" />
      <path d="M104 79 L116 89 M116 79 L104 89 M110 72.5 L110 95.5 M99 84 L121 84" strokeWidth="0.6" opacity="0.8" />
      {/* braço e cravelhal dobrado para trás */}
      <path d="M103.5 53 L106 26 L114 26 L116.5 53" />
      <path d="M106 26 L98 15 L104 11 L112.5 23.5" />
      <path d="M100 14.5 L103 18 M102.5 12.8 L105.5 16.2" strokeWidth="0.8" />
      {/* cordas */}
      <path d="M106.8 27 L107.8 106 M110 27 L110 107 M113.2 27 L112.2 106" strokeWidth="0.5" opacity="0.85" />
      {/* cavalete e trastes */}
      <path d="M102 106 L118 106 M105.5 40 L114.5 40 M105 46 L115 46" strokeWidth="0.8" />
      {/* hachura na sombra do bojo */}
      <g stroke="currentColor">
        <Hachura x={78} y={88} largura={22} altura={22} passo={3} />
      </g>
      {/* filactério (fita) com pregas */}
      <path d="M58 132 C76 124 96 128 110 132 C124 136 144 138 162 130 M58 132 C56 137 57 141 60 144 C78 137 98 140 112 144 C126 148 146 148 164 141 C166 137 165 133 162 130 M60 144 L58 132 M164 141 L162 130" strokeWidth="0.9" />
    </g>
  )
}

const MOTIVOS = { sol: MotivoSol, pavao: MotivoPavao, alaude: MotivoAlaude }

export default function GravuraPlaceholder({ arte, legenda }) {
  const Motivo = MOTIVOS[arte] ?? MotivoSol
  return (
    <figure className="gravura">
      {/* a legenda visível da figcaption é a descrição; o svg é decorativo */}
      <svg viewBox="0 0 220 160" className="gravura-svg" aria-hidden="true" focusable="false">
        <g filter="url(#tinta-irregular)" color="var(--ink)">
          {/* moldura de gravura dupla */}
          <rect x="3" y="3" width="214" height="154" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <rect x="8" y="8" width="204" height="144" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <Motivo />
        </g>
      </svg>
      <figcaption className="gravura-legenda">{legenda}</figcaption>
    </figure>
  )
}
