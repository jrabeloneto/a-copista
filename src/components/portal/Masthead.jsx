import { Link } from 'react-router-dom'

/**
 * O masthead do portal: "A COPISTA" em letras de recorte de revista
 * (bilhete de resgate) — cada letra com fundo, tipo e rotação
 * próprios, algumas rasgadas, algumas com fita. Configuração
 * DETERMINÍSTICA: a colagem é sempre a mesma, como um logotipo.
 * Na home é o h1 em tamanho cheio; nas internas, compacto e link.
 */
const LETRAS = [
  { letra: 'A', classes: 'lt-paper lt-cor-base lt-gotica', rot: -5, dy: 0, tam: 1.14, fita: -8 },
  { letra: ' ' },
  { letra: 'C', classes: 'lt-rubrica lt-cor-paper lt-fell lt-rasgo', rot: 3, dy: 0, tam: 1.04 },
  { letra: 'O', classes: 'lt-card lt-cor-gold lt-gotica lt-borda-gold', rot: -2, dy: 4, tam: 1.1 },
  { letra: 'P', classes: 'lt-paper lt-cor-rubrica lt-verdana lt-rasgo', rot: 4, dy: -3, tam: 0.9, fita: 5 },
  { letra: 'I', classes: 'lt-brown lt-cor-paper lt-fell', rot: -3, dy: 0, tam: 1.1 },
  { letra: 'S', classes: 'lt-gold lt-cor-base lt-gotica lt-rasgo', rot: 2, dy: 3, tam: 1.0 },
  { letra: 'T', classes: 'lt-paper lt-cor-ink lt-georgia', rot: -4, dy: 0, tam: 1.0 },
  { letra: 'A', classes: 'lt-card lt-cor-clara lt-fell lt-borda-rubrica', rot: 3, dy: -4, tam: 1.1, fita: -4 },
]

export function LetrasRecorte({ letras = LETRAS }) {
  return (
    <span className="masthead-letras" aria-hidden="true">
      {letras.map((cfg, i) =>
        cfg.letra === ' ' ? (
          <span key={i} className="letra-espaco" />
        ) : (
          <span
            key={i}
            className={`letra ${cfg.classes}`}
            style={{
              transform: `rotate(${cfg.rot}deg) translateY(${cfg.dy}px)`,
              fontSize: `${cfg.tam}em`,
            }}
          >
            {cfg.fita !== undefined && (
              <i className="letra-fita" style={{ transform: `rotate(${cfg.fita}deg)` }} />
            )}
            {cfg.letra}
          </span>
        ),
      )}
    </span>
  )
}

export default function Masthead({ compacto = false }) {
  if (compacto) {
    return (
      <div className="masthead masthead-compacto">
        <Link to="/" className="masthead-link">
          <LetrasRecorte />
          <span className="visualmente-oculto">A COPISTA — voltar à capa</span>
        </Link>
      </div>
    )
  }

  return (
    <header className="masthead">
      <h1 className="masthead-nome">
        <LetrasRecorte />
        <span className="visualmente-oculto">A COPISTA</span>
      </h1>
      <p className="masthead-edicao ui-2003">
        fanzine &amp; revista de mão única — anno MMXXVI — sai quando a dona pode
      </p>
    </header>
  )
}
