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

/* ---- esqueleto → contorno de serpente ----------------------------
   O traçado anterior punha duas curvas SOLTAS na esperança de que
   saíssem paralelas — não saíam, e o bicho engrossava e afinava sem
   razão. Aqui dá-se o espinho (x, y, meia-espessura) e o contorno é
   gerado: as duas bordas ficam sempre à mesma distância, e manchas e
   escamas nascem do mesmo espinho, portanto nunca caem fora do corpo. */
function pontoCatmull(p0, p1, p2, p3, t) {
  const t2 = t * t
  const t3 = t2 * t
  const eixo = (a, b, c, d) =>
    0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3)
  return {
    x: eixo(p0.x, p1.x, p2.x, p3.x),
    y: eixo(p0.y, p1.y, p2.y, p3.y),
    h: p1.h + (p2.h - p1.h) * t,
  }
}

/** amostra o espinho e devolve tangente + normal em cada ponto */
function amostrarEspinho(ossos, porTrecho = 7) {
  const cru = []
  for (let i = 0; i < ossos.length - 1; i += 1) {
    const p0 = ossos[Math.max(0, i - 1)]
    const p3 = ossos[Math.min(ossos.length - 1, i + 2)]
    for (let s = 0; s < porTrecho; s += 1) {
      cru.push(pontoCatmull(p0, ossos[i], ossos[i + 1], p3, s / porTrecho))
    }
  }
  cru.push({ ...ossos[ossos.length - 1] })
  return cru.map((p, i) => {
    const a = cru[Math.max(0, i - 1)]
    const b = cru[Math.min(cru.length - 1, i + 1)]
    const dx = b.x - a.x
    const dy = b.y - a.y
    const m = Math.hypot(dx, dy) || 1
    return { ...p, tx: dx / m, ty: dy / m, nx: -dy / m, ny: dx / m }
  })
}

const nu = (v) => Math.round(v * 10) / 10
const daBorda = (p, lado) => `${nu(p.x + p.nx * p.h * lado)} ${nu(p.y + p.ny * p.h * lado)}`

/* a jibóia enrodilhada: bicho GROSSO (é constritora, não corda) num
   rolo só, cauda afinando até encostar no pescoço. O rolo é aberto
   de propósito — corpo que se cruza precisaria esconder o que passa
   por baixo, e contorno sem preenchimento não sabe fazer isso. */
const ESPINHO_JIBOIA = [
  // a cabeça é lanceolada: alarga ao LONGO de uns 20px até o ponto
  // mais largo e só então estreita no pescoço. (Saltar de 2.5 para 11
  // em doze pixels dava uma bola espetada num palito.)
  { x: 30, y: 26, h: 3 }, // focinho
  { x: 38, y: 33, h: 8 },
  { x: 46, y: 41, h: 10.5 }, // o largo da cabeça, atrás dos olhos
  { x: 53, y: 50, h: 8.5 },
  { x: 58, y: 64, h: 7 }, // pescoço pinça — é o que faz cara de cobra
  { x: 64, y: 82, h: 11 },
  { x: 74, y: 103, h: 13 },
  { x: 94, y: 124, h: 13.5 }, // o bojo do rolo
  { x: 130, y: 131, h: 13 },
  { x: 160, y: 116, h: 12 },
  { x: 170, y: 92, h: 11 },
  { x: 158, y: 70, h: 10 },
  { x: 132, y: 60, h: 8.5 },
  { x: 106, y: 62, h: 6.5 },
  { x: 92, y: 74, h: 5 },
  { x: 92, y: 88, h: 3.2 },
  { x: 102, y: 97, h: 1.2 }, // a ponta da cauda descansa no vazio do rolo
]

function MotivoJiboia() {
  const pts = amostrarEspinho(ESPINHO_JIBOIA)
  const ultimo = pts.length - 1
  const contorno = `M${pts.map((p) => daBorda(p, 1)).join(' L')} L${pts
    .map((p) => daBorda(p, -1))
    .reverse()
    .join(' L')} Z`

  // as selas do dorso: atravessam o lombo quase de borda a borda,
  // apertadas e alternando de tamanho, como manchas de jibóia
  const manchas = []
  for (let k = 0; k < 15; k += 1) {
    const p = pts[Math.round((0.2 + (k / 14) * 0.72) * ultimo)]
    const c = p.h * (k % 2 ? 0.66 : 0.86)
    const l = p.h * 0.44
    // sela de seis pontas atravessando o lombo — losango puro saía
    // mecânico demais, isto tem cintura como mancha de jibóia
    const q = (dt, dn) => `${nu(p.x + p.tx * dt + p.nx * dn)} ${nu(p.y + p.ty * dt + p.ny * dn)}`
    manchas.push(
      `M${q(l, 0)} L${q(l * 0.35, c)} L${q(-l * 0.35, c)} L${q(-l, 0)} ` +
        `L${q(-l * 0.35, -c)} L${q(l * 0.35, -c)} Z`,
    )
  }

  // sombra hachurada na barriga de baixo, ao longo do rolo
  const sombra = []
  for (let k = 0; k < 34; k += 1) {
    const p = pts[Math.round((0.26 + (k / 33) * 0.4) * ultimo)]
    sombra.push(`M${daBorda(p, 0.52)} L${daBorda(p, 0.93)}`)
  }

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d={contorno} strokeWidth="1.5" strokeLinejoin="round" />
      <path d={manchas.join(' ')} strokeWidth="0.75" fill="currentColor" fillOpacity="0.22" />
      <path d={sombra.join(' ')} strokeWidth="0.5" opacity="0.6" />
      {/* boca, olho & língua bífida */}
      <path d="M30 28 C36 34 43 41 50 49" strokeWidth="0.75" opacity="0.9" />
      <circle cx="49" cy="38" r="2" fill="currentColor" stroke="none" />
      <path d="M29 24 L19 17 M19 17 L12 13 M19 17 L14 21" strokeWidth="0.8" />
      {/* chão de igapó */}
      <path d="M44 147 C78 144 118 149 154 147 C166 146 176 146 184 147" strokeWidth="0.8" opacity="0.7" />
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
