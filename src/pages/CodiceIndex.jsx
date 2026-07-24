import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { reduzMotion } from '../lib/motion.js'
import { materias } from '../data/materias.js'
import { FLUTUANTES_CAPA } from '../data/flutuantes.js'
import { useGsapPagina } from '../lib/useGsapPagina.js'
import CamadaFlutuante from '../components/motion/CamadaFlutuante.jsx'
import GravuraPlaceholder from '../components/folio/GravuraPlaceholder.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import Carimbo from '../components/v2/Carimbo.jsx'
import ExLibris from '../components/v2/ExLibris.jsx'
import TituloGigante from '../components/v2/TituloGigante.jsx'
import { LetrasRecorte } from '../components/portal/Masthead.jsx'
import '../styles/capa.css'

/* CÓDICE em letras de recorte, tons de tinta sobre pergaminho */
const LETRAS_CODICE = [
  { letra: 'C', classes: 'lt-rubrica lt-cor-paper lt-gotica', rot: -3, dy: 0, tam: 1.1, fita: -6 },
  { letra: 'Ó', classes: 'lt-card lt-cor-gold lt-fell', rot: 2, dy: 3, tam: 1 },
  { letra: 'D', classes: 'lt-gold lt-cor-base lt-gotica lt-rasgo', rot: -1.5, dy: -2, tam: 1.05 },
  { letra: 'I', classes: 'lt-brown lt-cor-paper lt-verdana', rot: 2.5, dy: 1, tam: 0.92 },
  { letra: 'C', classes: 'lt-paper lt-cor-rubrica lt-fell lt-borda-rubrica lt-rasgo', rot: -2, dy: 2, tam: 1.06 },
  { letra: 'E', classes: 'lt-rubrica lt-cor-paper lt-gotica', rot: 3, dy: -1, tam: 1, fita: 4 },
]

const ROMANOS = ['', 'I', 'II', 'III', 'IV', 'V']

/* cada volume tem seu assunto; a casa é que não muda */
const TEMA_DO_VOLUME = {
  1: 'estrelas, boutiques & menestréis',
  2: 'o Norte — casas de sombra & a arte suave',
}

/** os volumes na ordem, derivados das próprias matérias */
function agruparVolumes() {
  const numeros = [...new Set(materias.map((m) => m.volume ?? 1))].sort((a, b) => a - b)
  return numeros.map((numero) => ({
    numero,
    itens: materias.filter((m) => (m.volume ?? 1) === numero),
  }))
}

/**
 * Índice dos volumes — sumário tipográfico de livro com hover-reveal:
 * a gravura da matéria segue o cursor num chip de pergaminho
 * (transform/opacity, com lag). Touch e reduced-motion: só a lista.
 */
function IndiceVolume() {
  const [arte, setArte] = useState(null)
  const revealRef = useRef(null)
  const semReveal = reduzMotion()

  // o tween do seguidor vive fora do contexto da página — mata no unmount
  useEffect(() => {
    const el = revealRef.current
    return () => {
      if (el) gsap.killTweensOf(el)
    }
  }, [])

  const posicao = (evento) => ({ x: evento.clientX + 26, y: evento.clientY - 110 })

  // ao entrar: posiciona INSTANTÂNEO no cursor antes de mostrar
  // (senão o chip pisca vindo do canto ou do hover anterior)
  const aoEntrar = (nomeArte) => (evento) => {
    if (!semReveal && revealRef.current) {
      gsap.set(revealRef.current, posicao(evento))
    }
    setArte(nomeArte)
  }

  const aoMover = (evento) => {
    if (semReveal || !revealRef.current) return
    gsap.to(revealRef.current, {
      ...posicao(evento),
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }

  return (
    <section className="indice-volume" aria-labelledby="indice-titulo">
      <h2 id="indice-titulo" className="rubrica indice-cabecalho">
        Índice dos volumes
      </h2>
      <div onMouseMove={aoMover} onMouseLeave={() => setArte(null)}>
        {agruparVolumes().map(({ numero, itens }) => (
          <section key={numero} className="indice-grupo">
            <h3 className="indice-vol-rotulo">
              <span className="indice-vol-numero">Vol. {ROMANOS[numero]}</span>
              <span className="indice-vol-tema ui-2003">{TEMA_DO_VOLUME[numero]}</span>
            </h3>
            <ol className="indice-lista">
              {itens.map((materia) => (
                <li key={materia.slug}>
                  <Link
                    to={`/codice/materia/${materia.slug}`}
                    viewTransition
                    className="indice-linha"
                    onMouseEnter={aoEntrar(materia.arte)}
                  >
                    <span className="indice-nome">{materia.titulo}</span>
                    <span className="indice-fio" aria-hidden="true" />
                    <span className="indice-folio ui-2003">fol. {materia.folioBase}</span>
                  </Link>
                  <p className="indice-chamada">{materia.chamada}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      {!semReveal && (
        <div
          ref={revealRef}
          className={arte ? 'indice-reveal indice-reveal-visivel' : 'indice-reveal'}
          aria-hidden="true"
        >
          {arte && (
            <span className="pergaminho indice-reveal-papel">
              <GravuraPlaceholder arte={arte} />
            </span>
          )}
        </div>
      )}
    </section>
  )
}

/**
 * A capa do fanzine no v2: um LIVRO ABERTO — verso = frontispício
 * sobre pergaminho, recto = índice do volume. Sem cards, sem caixas:
 * manchas tipográficas, fios, carimbos e ex-libris.
 */
export default function CodiceIndex() {
  const raizRef = useRef(null)

  useEffect(() => {
    document.title = 'CÓDICE, o fanzine — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  useGsapPagina(
    () => {
      gsap.from('.livro-codice .livro-pg', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
      })
    },
    [],
    raizRef,
  )

  return (
    <div className="capa" ref={raizRef}>
      <CamadaFlutuante itens={FLUTUANTES_CAPA} />

      <TituloGigante vazado className="tipo-fundo codice-fundo" aria-hidden="true">
        VOL·II
      </TituloGigante>

      <div className="livro livro-codice">
        {/* abas de fichário saindo do corte do livro (o índice físico) */}
        <nav className="livro-abas" aria-label="Abas do volume">
          {materias.map((materia, i) => (
            <Link
              key={materia.slug}
              to={`/codice/materia/${materia.slug}`}
              viewTransition
              className={`livro-aba livro-aba-${i + 1}`}
            >
              {/* a rubrica repete entre volumes (há dois cinemas):
                  o algarismo do volume é o que desempata a aba */}
              <span className="livro-aba-rubrica">{materia.categoria}</span>
              <span className="livro-aba-vol" aria-hidden="true">
                {ROMANOS[materia.volume ?? 1]}
              </span>
              <span className="visualmente-oculto">
                {' '}— vol. {ROMANOS[materia.volume ?? 1]}
              </span>
            </Link>
          ))}
        </nav>

        <div className="livro-pg livro-pg-verso pergaminho codice-frontis">
          <p className="ui-2003 frontis-sobre">
            o fanzine da revista — publica-se quando a copista pode
          </p>
          <div className="frontis-fios">
            <h1 className="frontis-titulo frontis-recorte">
              <LetrasRecorte letras={LETRAS_CODICE} />
              <span className="visualmente-oculto">CÓDICE</span>
            </h1>
            <p className="frontis-sub">
              em que se tratam as vidas &amp; obras de estrelas, boutiques &amp; menestréis,
              &amp; mais as casas de sombra &amp; os lutadores do Norte,
              com gravuras da oficina &amp; marginalia da própria mão
            </p>
          </div>
          <p className="frontis-vol">Vols. I &amp; II — MMXXVI</p>
          <div className="frontis-exlibris">
            <ExLibris rotacao={-4}>ex·libris — a copista</ExLibris>
          </div>
        </div>

        <div className="livro-pg livro-pg-recto pergaminho codice-indice">
          <IndiceVolume />
          <p className="ui-2003 codice-rubricas">
            rubricas:{' '}
            {[...new Set(materias.map((m) => m.categoria))].map((rubrica, i) => {
              const primeira = materias.find((m) => m.categoria === rubrica)
              return (
                <span key={rubrica}>
                  {i > 0 && ' · '}
                  <Link to={`/codice/materia/${primeira.slug}`} viewTransition>
                    {rubrica}
                  </Link>
                </span>
              )
            })}
          </p>
          <div className="codice-carimbo">
            <Carimbo rotacao={4}>vol. III em cópia</Carimbo>
          </div>
          <p className="assinatura-post codice-assinatura">
            copiado à mão por <Link to="/sobre">a copista</Link> — erros são do ofício
          </p>
        </div>
      </div>

      <Separador />
      <p className="capa-rodape-nota ui-2003">
        fim das matérias copiadas até aqui — o vol. III já está na pena, tenha paciência
      </p>
    </div>
  )
}
