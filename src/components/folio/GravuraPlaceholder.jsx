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

/* VOL. II — o Norte. A sereia de duas caudas e a jibóia são bichos de
   bestiário: entram no códice pela mesma porta que o pavão, mas vêm
   da fachada do Polytheama e do igapó. */
function MotivoSereia() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      {/* cabeça, cabelo escorrido & rosto */}
      <circle cx="124" cy="34" r="10" strokeWidth="1.3" />
      <path d="M114 32 C111 22 117 15 124 15 C131 15 137 22 134 32" strokeWidth="1.2" />
      <path d="M114 37 C107 45 104 56 106 67 M134 37 C141 45 144 56 142 67" strokeWidth="0.85" />
      <path d="M119 32 C120 30.5 122 30.5 123 32 M125 32 C126 30.5 128 30.5 129 32" strokeWidth="0.75" />
      <path d="M120 39 C122 41 126 41 128 39" strokeWidth="0.75" />
      {/* tronco */}
      <path d="M124 44 C117.5 47.5 114 55 114 64 C114 73 118 79 124 82 C130 79 134 73 134 64 C134 55 130.5 47.5 124 44 Z" strokeWidth="1.2" />
      {/* braço que segura a lira & braço que repousa */}
      <path d="M115 52 C104 54 95 60 90 67" />
      <path d="M133 52 C140 56 144 63 143 70" />
      {/* as duas caudas de bestiário, abrindo em leque */}
      <path d="M118 82 C107 91 98 103 98 115 C98 122 102 127 107 126" strokeWidth="1.25" />
      <path d="M130 82 C141 91 150 103 150 115 C150 122 146 127 141 126" strokeWidth="1.25" />
      {/* barbatanas */}
      <path d="M107 126 C101 131 95 134 88 134 C94 137 102 135 108 131" />
      <path d="M141 126 C147 131 153 134 160 134 C154 137 146 135 140 131" />
      {/* escamas */}
      <path d="M106 98 C109 100 112 100 115 98 M102 109 C105 111 108 111 111 109 M142 98 C139 100 136 100 133 98 M146 109 C143 111 140 111 137 109" strokeWidth="0.55" opacity="0.8" />
      {/* a lira ornada — o outro bicho da fachada */}
      <path d="M90 67 C83 73 79 84 83 95 M90 67 C97 73 101 84 97 95" strokeWidth="1.2" />
      <path d="M81 95 L99 95" strokeWidth="1.3" />
      <path d="M85 75 L85.5 95 M89 71 L89 95 M93 71 L93 95 M96.5 75 L95.5 95" strokeWidth="0.5" opacity="0.85" />
      <path d="M83 95 C81 99 83 102 87 102 L93 102 C97 102 99 99 97 95" strokeWidth="1" />
      {/* água ao pé, como manda a espécie */}
      <path d="M58 140 C70 135 82 135 94 140 C106 145 118 145 130 140 C142 135 152 135 162 140" strokeWidth="0.85" />
      <g stroke="currentColor">
        <Hachura x={108} y={66} largura={16} altura={13} passo={3} />
      </g>
    </g>
  )
}

function MotivoJiboia() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      {/* o corpo enrodilhado: duas linhas paralelas = a grossura do bicho */}
      <path d="M176 132 C140 142 86 134 68 110 C52 88 66 62 94 58 C118 54 136 70 132 88 C129 103 112 110 100 101" strokeWidth="1.5" />
      <path d="M176 120 C142 129 94 122 80 104 C68 88 78 70 98 68 C116 66 126 78 122 90 C119 99 108 102 102 96" strokeWidth="1.15" opacity="0.92" />
      {/* pescoço levantado & cabeça */}
      <path d="M100 101 C92 96 86 88 88 78 C90 69 100 65 108 70" strokeWidth="1.3" />
      <path d="M88 78 C82 72 76 68 68 66 C74 62 84 64 90 70" strokeWidth="1.2" />
      <circle cx="83" cy="70" r="1.7" fill="currentColor" stroke="none" />
      {/* língua bífida */}
      <path d="M68 66 L56 62 M56 62 L48 58 M56 62 L49 65" strokeWidth="0.8" />
      {/* as manchas de jibóia, em losango pelo dorso */}
      <path d="M112 62 L118 66 L112 70 L106 66 Z" strokeWidth="0.7" />
      <path d="M136 76 L142 81 L136 86 L130 81 Z" strokeWidth="0.7" />
      <path d="M150 126 L156 130 L150 134 L144 130 Z" strokeWidth="0.7" />
      <path d="M118 128 L124 132 L118 136 L112 132 Z" strokeWidth="0.7" />
      <path d="M84 118 L90 122 L84 126 L78 122 Z" strokeWidth="0.7" />
      <path d="M62 96 L68 100 L62 104 L56 100 Z" strokeWidth="0.7" />
      {/* cauda afinando */}
      <path d="M176 132 C186 133 192 130 196 125" strokeWidth="1.1" />
      <path d="M176 120 C184 121 189 119 193 116" strokeWidth="0.9" />
      {/* galho & chão de igapó */}
      <path d="M34 138 C62 132 100 136 128 142 C148 146 170 147 190 144" strokeWidth="0.85" opacity="0.8" />
      <g stroke="currentColor">
        <Hachura x={96} y={104} largura={70} altura={14} passo={3.4} inclinacao={0.4} />
      </g>
    </g>
  )
}

/** Exportado para reuso nas imagens flutuantes (ETAPA 4). */
export const MOTIVOS = {
  sol: MotivoSol,
  pavao: MotivoPavao,
  alaude: MotivoAlaude,
  sereia: MotivoSereia,
  jiboia: MotivoJiboia,
}

/**
 * Com legenda: <figure> completa. Sem legenda (cards da capa): só o
 * svg decorativo — quem descreve é o contexto (título do card).
 */
export default function GravuraPlaceholder({ arte, legenda }) {
  const Motivo = MOTIVOS[arte] ?? MotivoSol
  const svg = (
    // a legenda/contexto visível é a descrição; o svg é decorativo
    <svg viewBox="0 0 220 160" className="gravura-svg" aria-hidden="true" focusable="false">
      <g filter="url(#tinta-irregular)" color="var(--ink)">
        {/* moldura de gravura dupla — classes p/ o desenho por
            stroke-dashoffset da ETAPA 4 (estado inicial vem do GSAP,
            então reduced-motion vê tudo pronto) */}
        <rect className="gravura-moldura" x="3" y="3" width="214" height="154" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect className="gravura-moldura" x="8" y="8" width="204" height="144" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <g className="gravura-motivo">
          <Motivo />
        </g>
      </g>
    </svg>
  )

  if (!legenda) {
    return svg
  }

  return (
    <figure className="gravura">
      {svg}
      <figcaption className="gravura-legenda">{legenda}</figcaption>
    </figure>
  )
}
