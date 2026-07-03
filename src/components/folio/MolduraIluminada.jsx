/**
 * Moldura iluminada do fólio: filete duplo (ouro externo, rubrica
 * interno) envolvendo o bloco de texto, cantos de nó entrelaçado com
 * presença (44px) e losango-hedera no centro do filete superior.
 * A marginalia vive FORA dela, na margem externa — como num códice.
 * Estática nesta etapa; o desenho por stroke-dashoffset é ETAPA 4.
 */
function CantoIluminado({ posicao }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={`mi-canto mi-canto-${posicao}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="round" filter="url(#tinta-irregular)">
        {/* arcos que emendam os filetes */}
        <path d="M4 40 C4 18.5 18.5 4 40 4" stroke="var(--gold-muted)" strokeWidth="1.5" />
        <path d="M10.5 40 C10.5 22.5 22.5 10.5 40 10.5" stroke="var(--red-rubric)" strokeWidth="0.9" />
        {/* nó entrelaçado: dois laços cruzados */}
        <path
          d="M8 21 C2.5 16 5.5 6.5 13 8.2 C19.5 9.7 19 18.5 12.5 19.3 C7 20 4.5 13 9.5 10.5"
          stroke="var(--gold-muted)"
          strokeWidth="1.15"
        />
        <path
          d="M17.5 12.5 C21 6.5 29.5 8 30.5 14.5 C31.3 20 25 23 20.5 19.5"
          stroke="var(--red-rubric)"
          strokeWidth="0.95"
        />
        {/* broto de acanto escapando do nó */}
        <path
          d="M27 21.5 C31 24.5 32 29.5 29 33.5 M29 33.5 C27.5 30 24.5 28.5 21 29"
          stroke="var(--gold-muted)"
          strokeWidth="0.9"
        />
        {/* pontos de iluminação */}
        <circle cx="14" cy="14" r="1.3" fill="var(--red-rubric)" stroke="none" />
        <circle cx="33" cy="33" r="1.1" fill="var(--gold-muted)" stroke="none" />
      </g>
    </svg>
  )
}

function CantoAcanto({ posicao }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={`mi-canto mi-canto-${posicao}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="round" filter="url(#tinta-irregular-forte)">
        <path d="M4 40 C4.6 18 18 4.6 40 4" stroke="var(--gold-muted)" strokeWidth="1.5" />
        <path d="M10.5 40 C11 22 22 11 40 10.5" stroke="var(--red-rubric)" strokeWidth="0.9" />
        {/* folha de acanto enrolando sobre o canto */}
        <path
          d="M8 20 C4 12 9 4.5 16.5 6 C22.5 7.2 23 15 17.5 17.5 C22 18 25 22.5 23 27.5 C21.5 31 17 32 14.5 29.5"
          stroke="var(--gold-muted)"
          strokeWidth="1.1"
        />
        <path
          d="M16.5 6 C18.5 9 19 12.5 17.5 16 M17.8 17.8 C20.5 20.5 21.3 23.8 20.2 26.8"
          stroke="var(--red-rubric)"
          strokeWidth="0.75"
        />
        {/* gavinha */}
        <path
          d="M26 15 C30.5 12 35.5 14.5 35 19 C34.6 22.3 30.5 23 29.5 20.2"
          stroke="var(--red-rubric)"
          strokeWidth="0.85"
        />
        <circle cx="13" cy="13" r="1.2" fill="var(--red-rubric)" stroke="none" />
      </g>
    </svg>
  )
}

function LosangoHedera() {
  return (
    <svg viewBox="0 0 56 22" className="mi-losango" aria-hidden="true" focusable="false">
      <g filter="url(#tinta-irregular)">
        <path
          d="M28 2.5 L39 11 L28 19.5 L17 11 Z"
          fill="var(--bg-paper)"
          stroke="var(--gold-muted)"
          strokeWidth="1.1"
        />
        <path
          d="M28 6 L34.5 11 L28 16 L21.5 11 Z"
          fill="none"
          stroke="var(--red-rubric)"
          strokeWidth="0.8"
        />
        <circle cx="28" cy="11" r="1.6" fill="var(--red-rubric)" />
        <path d="M17 11 L4 11 M39 11 L52 11" stroke="var(--gold-muted)" strokeWidth="1" />
      </g>
    </svg>
  )
}

export default function MolduraIluminada() {
  return (
    <div className="moldura-iluminada" aria-hidden="true">
      <CantoIluminado posicao="no" />
      <CantoAcanto posicao="ne" />
      <CantoIluminado posicao="se" />
      <CantoAcanto posicao="so" />
      <LosangoHedera />
    </div>
  )
}
