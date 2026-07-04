/**
 * As figuras dos recortes — placeholders duotone desenhados em
 * código, no espírito de foto recortada de revista, até as imagens
 * de domínio público chegarem (public/images/README.md).
 * Silhuetas em --ink/--brown sobre papel envelhecido; acentos
 * pequenos em --gold-muted e --red-rubric (regra da paleta).
 */

function Rainha() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--sepia-foto)" />
      {/* véu caindo dos lados */}
      <path d="M34 32 C26 46 24 72 26 104 L36 102 C33 74 35 52 40 38 Z" fill="var(--brown)" />
      <path d="M66 32 C74 46 76 72 74 104 L64 102 C67 74 65 52 60 38 Z" fill="var(--brown)" />
      {/* cabeça e coroa */}
      <circle cx="50" cy="27" r="9" fill="var(--ink)" />
      <path d="M40 19 L42 11 L46 16 L50 8 L54 16 L58 11 L60 19 Z" fill="var(--gold-muted)" />
      {/* vestido em A com mangas longas */}
      <path d="M50 35 C42 37 38 45 37 55 L31 120 L69 120 L63 55 C62 45 58 37 50 35 Z" fill="var(--ink)" />
      <path d="M39 46 C31 54 27 66 29 74 L35 72 C34 63 37 53 41 48 Z" fill="var(--ink)" />
      <path d="M61 46 C69 54 73 66 71 74 L65 72 C66 63 63 53 59 48 Z" fill="var(--ink)" />
      {/* cinto */}
      <path d="M39 63 L61 63 L60 67 L40 67 Z" fill="var(--gold-muted)" />
      <circle cx="50" cy="65" r="1.6" fill="var(--red-rubric)" />
    </svg>
  )
}

function Hennin() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--paper-edge)" />
      {/* hennin cônico inclinado com véu esvoaçando */}
      <path d="M43 28 L57 26 L68 2 L61 0 Z" fill="var(--ink)" />
      <path d="M66 5 C76 12 82 26 84 44 C77 38 71 30 63 24 Z" fill="var(--brown)" opacity="0.85" />
      <circle cx="48" cy="32" r="8" fill="var(--ink)" />
      {/* vestido de cintura alta */}
      <path d="M49 41 C43 42 40 47 39 53 L34 120 L66 120 L59 53 C58 47 55 42 49 41 Z" fill="var(--brown)" />
      <path d="M40 52 L59 52 L58 56 L41 56 Z" fill="var(--gold-muted)" />
      {/* mangas colantes com punho */}
      <path d="M40 47 C34 55 31 66 32 74 L37 73 C36 65 38 56 42 50 Z" fill="var(--brown)" />
      <path d="M58 47 C64 55 67 66 66 74 L61 73 C62 65 60 56 56 50 Z" fill="var(--brown)" />
      <circle cx="34" cy="74" r="1.4" fill="var(--red-rubric)" />
    </svg>
  )
}

function Trancas() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--sepia-foto)" />
      <circle cx="50" cy="24" r="9" fill="var(--ink)" />
      {/* tranças segmentadas */}
      <path d="M41 28 C38 40 37 56 38 72 C39 76 43 76 44 72 C43 56 44 42 46 32 Z" fill="var(--brown)" />
      <path d="M59 28 C62 40 63 56 62 72 C61 76 57 76 56 72 C57 56 56 42 54 32 Z" fill="var(--brown)" />
      <path d="M38 44 L44 46 M37 56 L44 58 M38 68 L43 69 M62 44 L56 46 M63 56 L56 58 M62 68 L57 69" stroke="var(--ink)" strokeWidth="1.2" />
      {/* corpete com cadarço + saia rodada */}
      <path d="M50 33 C44 34 41 40 40 47 L38 62 L62 62 L60 47 C59 40 56 34 50 33 Z" fill="var(--ink)" />
      <path d="M45 40 L55 44 M45 48 L55 52 M45 56 L55 59" stroke="var(--gold-muted)" strokeWidth="1.1" />
      <path d="M38 62 C32 82 30 100 30 120 L70 120 C70 100 68 82 62 62 Z" fill="var(--brown)" />
      <path d="M42 70 C40 86 39 102 39 118 M58 70 C60 86 61 102 61 118" stroke="var(--ink)" strokeWidth="0.9" opacity="0.6" fill="none" />
    </svg>
  )
}

function Tapecaria() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--paper-edge)" />
      <circle cx="46" cy="28" r="8.5" fill="var(--ink)" />
      {/* braço erguido segurando a flor */}
      <path d="M52 42 C60 36 66 28 70 18 L74 21 C71 31 65 40 56 47 Z" fill="var(--ink)" />
      <circle cx="73" cy="15" r="4.5" fill="var(--red-rubric)" />
      <path d="M73 15 C76 12 79 12 81 14 M73 15 C71 11 72 8 75 7" stroke="var(--red-rubric)" strokeWidth="1.2" fill="none" />
      {/* vestido com manga pendente larga */}
      <path d="M46 36 C39 38 36 46 35 56 L30 120 L66 120 L59 56 C58 46 53 38 46 36 Z" fill="var(--ink)" />
      <path d="M38 46 C31 52 25 62 22 76 L30 78 C32 66 36 56 41 50 Z" fill="var(--brown)" />
      <path d="M36 64 L58 64 L57 68 L37 68 Z" fill="var(--gold-muted)" />
    </svg>
  )
}

function Cantora() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--sepia-foto)" />
      {/* cabelão redondo anos 70 */}
      <path d="M50 8 C36 8 30 20 33 32 C36 42 44 46 50 46 C56 46 64 42 67 32 C70 20 64 8 50 8 Z" fill="var(--brown)" />
      <circle cx="50" cy="28" r="8" fill="var(--ink)" />
      {/* braço com microfone */}
      <path d="M56 50 C64 44 70 36 73 26 L78 29 C74 41 67 50 59 56 Z" fill="var(--ink)" />
      <rect x="74" y="18" width="3.5" height="10" rx="0" transform="rotate(24 76 23)" fill="var(--ink)" />
      <circle cx="79" cy="16" r="4" fill="var(--gold-muted)" />
      {/* macacão com boca de sino */}
      <path d="M50 46 C44 47 41 52 40 58 L38 82 L46 82 L43 118 L36 118 C34 122 34 124 36 126 L50 126 L50 92 L50 126 L64 126 C66 124 66 122 64 118 L57 118 L54 82 L62 82 L60 58 C59 52 56 47 50 46 Z" fill="var(--ink)" />
      <path d="M40 64 L60 64 L59 68 L41 68 Z" fill="var(--red-rubric)" />
    </svg>
  )
}

function Atriz() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--paper-edge)" />
      {/* lenço amarrado */}
      <path d="M50 8 C40 8 34 16 35 26 L65 26 C66 16 60 8 50 8 Z" fill="var(--red-rubric)" />
      <path d="M63 24 C68 26 71 30 72 35 C68 33 64 31 61 30 Z" fill="var(--red-rubric)" />
      <circle cx="50" cy="28" r="9" fill="var(--ink)" />
      {/* óculos enormes */}
      <circle cx="44" cy="27" r="6" fill="var(--ink)" stroke="var(--gold-muted)" strokeWidth="1.6" />
      <circle cx="57" cy="27" r="6" fill="var(--ink)" stroke="var(--gold-muted)" strokeWidth="1.6" />
      <path d="M50 27 L51 27" stroke="var(--gold-muted)" strokeWidth="1.6" />
      {/* gola alta de trench + busto */}
      <path d="M50 38 C40 39 34 44 32 52 L28 90 L36 90 L38 120 L62 120 L64 90 L72 90 L68 52 C66 44 60 39 50 38 Z" fill="var(--brown)" />
      <path d="M42 40 L50 52 L58 40" stroke="var(--sepia-foto)" strokeWidth="1.4" fill="none" />
      <path d="M46 60 L54 60 M45 70 L55 70" stroke="var(--ink)" strokeWidth="1" opacity="0.55" />
    </svg>
  )
}

function Discoteca() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--sepia-foto)" />
      {/* cabelo alto encaracolado */}
      <path d="M50 6 C38 6 32 16 35 27 C30 28 28 34 32 38 C36 42 44 42 50 41 C56 42 64 42 68 38 C72 34 70 28 65 27 C68 16 62 6 50 6 Z" fill="var(--ink)" />
      <circle cx="50" cy="27" r="7.5" fill="var(--brown)" />
      {/* braço apontando pra cima (pose de pista) */}
      <path d="M55 46 C61 38 65 28 66 16 L72 17 C71 31 66 43 59 52 Z" fill="var(--brown)" />
      <circle cx="70" cy="12" r="3" fill="var(--gold-muted)" />
      {/* camisa de gola + calça boca larga */}
      <path d="M50 42 C44 43 41 48 40 54 L39 78 L61 78 L60 54 C59 48 56 43 50 42 Z" fill="var(--brown)" />
      <path d="M44 44 L50 52 L56 44" stroke="var(--sepia-foto)" strokeWidth="1.4" fill="none" />
      <path d="M39 78 L44 78 L40 116 C38 122 34 124 30 124 L28 120 C34 118 36 108 37 96 Z" fill="var(--ink)" />
      <path d="M61 78 L56 78 L60 116 C62 122 66 124 70 124 L72 120 C66 118 64 108 63 96 Z" fill="var(--ink)" />
    </svg>
  )
}

function Estrela80() {
  return (
    <svg viewBox="0 0 100 132" aria-hidden="true" focusable="false">
      <rect width="100" height="132" fill="var(--paper-edge)" />
      {/* cabelo armado anos 80, largo */}
      <path d="M50 6 C34 6 26 18 28 32 C29 40 33 45 38 47 L40 36 C38 28 42 18 50 18 C58 18 62 28 60 36 L62 47 C67 45 71 40 72 32 C74 18 66 6 50 6 Z" fill="var(--brown)" />
      <circle cx="50" cy="30" r="8.5" fill="var(--ink)" />
      {/* brincos triangulares */}
      <path d="M39 36 L43 36 L41 42 Z M61 36 L57 36 L59 42 Z" fill="var(--gold-muted)" />
      {/* blazer de ombreiras angulosas */}
      <path d="M50 42 C40 43 30 46 26 52 L30 66 L36 60 L38 120 L62 120 L64 60 L70 66 L74 52 C70 46 60 43 50 42 Z" fill="var(--ink)" />
      <path d="M44 44 L50 58 L56 44" stroke="var(--paper-edge)" strokeWidth="1.6" fill="none" />
      <circle cx="50" cy="64" r="1.6" fill="var(--red-rubric)" />
      <circle cx="50" cy="74" r="1.6" fill="var(--red-rubric)" />
    </svg>
  )
}

export const FIGURAS = {
  rainha: { Arte: Rainha, legenda: 'rainha, séc. XIV' },
  hennin: { Arte: Hennin, legenda: 'dama do hennin, séc. XV' },
  trancas: { Arte: Trancas, legenda: 'donzela, séc. XIII' },
  tapecaria: { Arte: Tapecaria, legenda: 'a dama da tapeçaria' },
  cantora: { Arte: Cantora, legenda: 'a cantora, 1974' },
  atriz: { Arte: Atriz, legenda: 'a atriz, 1969' },
  discoteca: { Arte: Discoteca, legenda: 'rainha da pista, 1978' },
  estrela80: { Arte: Estrela80, legenda: 'a estrela, 1985' },
}

export default function FiguraRecorte({ nome }) {
  const figura = FIGURAS[nome]
  if (!figura) return null
  const { Arte, legenda } = figura
  return (
    <>
      <Arte />
      <p className="recorte-legenda">{legenda}</p>
    </>
  )
}
