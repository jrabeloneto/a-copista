/**
 * As "fotografias" do álbum — cenas duotone desenhadas em código,
 * placeholders até as fotos reais da dona chegarem. Tons de papel
 * antigo; silhuetas em --ink/--brown; acentos mínimos.
 */

function Praia() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--sepia-foto)" />
      <circle cx="118" cy="30" r="16" fill="var(--gold-muted)" />
      <path d="M118 8 L118 2 M138 30 L145 30 M132 15 L137 10 M132 45 L137 50" stroke="var(--gold-muted)" strokeWidth="2" />
      <path d="M0 70 C20 64 40 64 60 70 C80 76 100 76 120 70 C140 64 152 65 160 68 L160 84 L0 84 Z" fill="var(--brown)" />
      <path d="M0 84 L160 84 L160 120 L0 120 Z" fill="var(--paper-edge)" />
      <path d="M8 76 C24 71 40 71 56 76 M84 78 C100 73 116 73 132 78" stroke="var(--bg-paper)" strokeWidth="1.4" fill="none" opacity="0.7" />
      <path d="M30 100 C34 96 40 96 44 100 M96 106 C100 102 106 102 110 106" stroke="var(--brown-light)" strokeWidth="1" fill="none" />
    </svg>
  )
}

function Sebo() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--paper-edge)" />
      <rect x="20" y="104" width="120" height="8" fill="var(--brown)" />
      <rect x="38" y="88" width="84" height="16" fill="var(--ink)" />
      <rect x="46" y="72" width="76" height="16" fill="var(--brown)" />
      <rect x="42" y="56" width="70" height="16" fill="var(--ink)" />
      <rect x="54" y="40" width="58" height="16" fill="var(--red-rubric)" />
      <rect x="50" y="26" width="52" height="14" fill="var(--brown)" />
      <path d="M44 96 L116 96 M52 80 L114 80 M48 64 L104 64 M60 48 L104 48 M56 33 L94 33" stroke="var(--sepia-foto)" strokeWidth="1.2" />
      <path d="M124 88 L134 84 L138 100 L128 104 Z" fill="var(--brown-light)" />
    </svg>
  )
}

function Vitrola() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--sepia-foto)" />
      <rect x="30" y="52" width="100" height="34" fill="var(--brown)" />
      <rect x="34" y="56" width="92" height="26" fill="var(--ink)" />
      <circle cx="70" cy="69" r="17" fill="var(--brown)" />
      <circle cx="70" cy="69" r="15" fill="var(--ink)" stroke="var(--brown-light)" strokeWidth="1" />
      <circle cx="70" cy="69" r="5" fill="var(--red-rubric)" />
      <path d="M108 58 L108 72 L98 76" stroke="var(--sepia-foto)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="108" cy="57" r="2.5" fill="var(--gold-muted)" />
      <rect x="36" y="86" width="8" height="18" fill="var(--brown)" />
      <rect x="116" y="86" width="8" height="18" fill="var(--brown)" />
      <rect x="44" y="30" width="24" height="20" fill="var(--paper-edge)" />
      <circle cx="56" cy="40" r="7" fill="var(--ink)" />
    </svg>
  )
}

function Gata() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--brown)" />
      <rect x="24" y="10" width="112" height="86" fill="var(--sepia-foto)" />
      <path d="M80 10 L80 96 M24 50 L136 50" stroke="var(--brown)" strokeWidth="5" />
      <path d="M34 44 L58 22 M100 40 L126 18" stroke="var(--paper-edge)" strokeWidth="2" opacity="0.6" />
      <rect x="20" y="96" width="120" height="10" fill="var(--ink)" />
      {/* gata de costas na janela */}
      <path d="M96 96 C95 78 100 66 110 62 L106 52 L113 58 L120 52 L118 62 C126 68 129 80 128 96 Z" fill="var(--ink)" />
      <path d="M96 92 C86 90 80 84 82 78 C84 74 90 74 92 79" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function Vestido() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--paper-edge)" />
      <rect x="20" y="14" width="120" height="4" fill="var(--brown)" />
      <path d="M80 22 C77 22 76 25 78 27 M80 22 L80 18" stroke="var(--ink)" strokeWidth="2" fill="none" />
      <path d="M66 30 L94 30 L88 26 L72 26 Z" fill="var(--ink)" />
      <path d="M66 30 C60 44 58 56 60 64 L100 64 C102 56 100 44 94 30 Z" fill="var(--brown)" />
      <path d="M60 64 C52 84 50 98 52 108 L108 108 C110 98 108 84 100 64 Z" fill="var(--brown)" />
      <path d="M70 70 C68 84 67 96 67 106 M90 70 C92 84 93 96 93 106" stroke="var(--ink)" strokeWidth="1" opacity="0.5" fill="none" />
      <path d="M70 38 L90 38" stroke="var(--red-rubric)" strokeWidth="2" />
    </svg>
  )
}

function Missal() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--brown)" />
      <path d="M28 26 C44 20 62 20 78 26 L78 96 C62 90 44 90 28 96 Z" fill="var(--bg-paper)" />
      <path d="M132 26 C116 20 98 20 82 26 L82 96 C98 90 116 90 132 96 Z" fill="var(--bg-paper)" />
      <path d="M78 26 L78 96 M82 26 L82 96" stroke="var(--brown-light)" strokeWidth="1" />
      <rect x="36" y="34" width="12" height="14" fill="var(--red-rubric)" />
      <path d="M52 38 L70 38 M36 54 L70 54 M36 60 L70 60 M36 66 L66 66 M36 72 L70 72 M36 78 L62 78" stroke="var(--ink)" strokeWidth="1.4" opacity="0.75" />
      <path d="M90 34 L124 34 M90 40 L120 40 M90 46 L124 46 M90 58 L116 58 M90 64 L124 64 M90 70 L120 70 M90 82 L108 82" stroke="var(--ink)" strokeWidth="1.4" opacity="0.75" />
      <path d="M90 82 L108 82" stroke="var(--red-rubric)" strokeWidth="1.6" />
    </svg>
  )
}

function Cinema() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--ink)" />
      <rect x="18" y="18" width="124" height="30" fill="var(--bg-paper)" />
      <path d="M18 48 L26 60 L34 48 L42 60 L50 48 L58 60 L66 48 L74 60 L82 48 L90 60 L98 48 L106 60 L114 48 L122 60 L130 48 L138 60 L142 48" fill="var(--red-rubric)" />
      <text x="80" y="40" textAnchor="middle" fontFamily="Verdana, sans-serif" fontWeight="bold" fontSize="17" fill="var(--ink)">CINE</text>
      <rect x="40" y="72" width="22" height="40" fill="var(--brown)" />
      <rect x="98" y="72" width="22" height="40" fill="var(--brown)" />
      <rect x="68" y="66" width="24" height="30" fill="var(--sepia-foto)" />
      <path d="M70 70 L90 70 M70 76 L90 76 M70 82 L86 82" stroke="var(--ink)" strokeWidth="1.4" opacity="0.7" />
      <circle cx="30" cy="8" r="2" fill="var(--gold-muted)" />
      <circle cx="80" cy="6" r="2" fill="var(--gold-muted)" />
      <circle cx="130" cy="8" r="2" fill="var(--gold-muted)" />
    </svg>
  )
}

function Flores() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--sepia-foto)" />
      <rect x="0" y="96" width="160" height="24" fill="var(--brown)" />
      <path d="M68 60 L92 60 L88 96 L72 96 Z" fill="var(--ink)" />
      <path d="M72 68 L88 68" stroke="var(--gold-muted)" strokeWidth="1.4" />
      {/* margaridas tortas */}
      <g stroke="var(--brown)" strokeWidth="1.6" fill="none">
        <path d="M78 60 C74 48 70 40 62 32 M82 60 C84 46 86 38 92 28 M80 60 C79 48 79 40 79 32" />
      </g>
      <g fill="var(--bg-paper)">
        <circle cx="60" cy="30" r="7" />
        <circle cx="94" cy="26" r="7" />
        <circle cx="79" cy="28" r="6" />
      </g>
      <g fill="var(--gold-muted)">
        <circle cx="60" cy="30" r="2.4" />
        <circle cx="94" cy="26" r="2.4" />
        <circle cx="79" cy="28" r="2" />
      </g>
      <path d="M104 92 C110 88 118 88 124 92" stroke="var(--ink)" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

function Batom() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <rect width="160" height="120" fill="var(--paper-edge)" />
      {/* a lata de biscoito */}
      <rect x="34" y="66" width="92" height="38" fill="var(--brown)" />
      <rect x="30" y="58" width="100" height="12" fill="var(--brown-light)" />
      <path d="M44 78 L116 78 M44 88 L108 88" stroke="var(--gold-muted)" strokeWidth="1.2" opacity="0.7" />
      {/* o batom aberto em cima */}
      <rect x="70" y="34" width="10" height="24" fill="var(--ink)" />
      <path d="M71 34 L79 34 L79 20 C79 16 75 14 73 18 L71 24 Z" fill="var(--red-rubric)" />
      <rect x="86" y="26" width="9" height="32" fill="var(--ink)" />
      <path d="M86 26 L95 26 L95 30 L86 30 Z" fill="var(--gold-muted)" />
    </svg>
  )
}

const CENAS = {
  praia: Praia,
  sebo: Sebo,
  vitrola: Vitrola,
  gata: Gata,
  vestido: Vestido,
  missal: Missal,
  cinema: Cinema,
  flores: Flores,
  batom: Batom,
}

export default function FotoArte({ nome }) {
  const Cena = CENAS[nome]
  return Cena ? <Cena /> : null
}
