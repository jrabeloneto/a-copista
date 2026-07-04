import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { materias } from '../data/materias.js'
import { visitas } from '../data/visitas.js'
import { FLUTUANTES_CAPA } from '../data/flutuantes.js'
import { useGsapPagina } from '../lib/useGsapPagina.js'
import CamadaFlutuante from '../components/motion/CamadaFlutuante.jsx'
import MolduraOrnamental from '../components/ornamentos/MolduraOrnamental.jsx'
import { LosangoHedera } from '../components/folio/MolduraIluminada.jsx'
import GravuraPlaceholder from '../components/folio/GravuraPlaceholder.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import Botao88x31 from '../components/ui2003/Botao88x31.jsx'
import ContadorVisitas from '../components/ui2003/ContadorVisitas.jsx'
import CaixaSidebar from '../components/ui2003/CaixaSidebar.jsx'
import '../styles/capa.css'

/**
 * A capa do fanzine — agora índice da editoria CÓDICE em /codice.
 * Frontispício, grid de matérias e sidebar 2003 intactos; só os
 * caminhos mudaram (o fanzine mora dentro do portal A COPISTA).
 */
function CardMateria({ materia, destaque = false }) {
  return (
    <article className={destaque ? 'card-materia card-destaque' : 'card-materia'}>
      <Link
        to={`/codice/materia/${materia.slug}`}
        className="card-gravura"
        tabIndex={-1}
        aria-hidden="true"
        viewTransition
      >
        <span className="card-gravura-papel pergaminho">
          <GravuraPlaceholder arte={materia.arte} />
        </span>
      </Link>
      <div className="card-texto">
        <p className="ui-2003 card-overline">
          rubrica <em>{materia.categoria}</em> — {materia.mesAno}
        </p>
        <h2 className="card-titulo">
          <Link to={`/codice/materia/${materia.slug}`} viewTransition>
            {materia.titulo}
          </Link>
        </h2>
        <p className="card-chamada">{materia.chamada}</p>
        <p className="assinatura-post">
          postado por <Link to="/sobre">a copista</Link> às {materia.hora} —{' '}
          <a href="#comentarios">{materia.comentarios} comentários</a>
        </p>
      </div>
    </article>
  )
}

export default function CodiceIndex() {
  const [destaque, ...outras] = materias
  const ultimaVisita = visitas[visitas.length - 1]
  const raizRef = useRef(null)

  useEffect(() => {
    document.title = 'CÓDICE, o fanzine — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  useGsapPagina(
    () => {
      gsap.from('.card-materia', {
        y: 18,
        opacity: 0,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.1,
      })
    },
    [],
    raizRef,
  )

  return (
    <div className="capa" ref={raizRef}>
      <CamadaFlutuante itens={FLUTUANTES_CAPA} />
      <header className="frontispicio">
        <MolduraOrnamental as="div">
          <LosangoHedera />
          <p className="frontispicio-sobretitulo ui-2003">
            o fanzine da revista — publica-se quando a copista pode
          </p>
          <h1 className="frontispicio-titulo">CÓDICE</h1>
          <p className="frontispicio-subtitulo">
            em que se tratam as vidas &amp; obras de estrelas, boutiques &amp; menestréis,
            <br />
            com gravuras da oficina &amp; marginalia da própria mão
          </p>
          <p className="frontispicio-vol">Vol. I — MMXXVI</p>
        </MolduraOrnamental>
      </header>

      <div className="capa-corpo">
        <main className="capa-principal">
          <CardMateria materia={destaque} destaque />
          <div className="capa-grid">
            {outras.map((materia) => (
              <CardMateria key={materia.slug} materia={materia} />
            ))}
          </div>
          <Separador />
          <p className="capa-rodape-nota ui-2003">
            fim das matérias deste volume — as próximas estão sendo copiadas à mão, tenha paciência
          </p>
        </main>

        <aside className="capa-sidebar">
          <CaixaSidebar titulo="a copista">
            <p className="caixa-texto">
              escriba deste fanzine, devota de estrelas mortas e lojas demolidas.
            </p>
            <p className="ui-2003">
              <Link to="/sobre">quem escreve »</Link>
            </p>
          </CaixaSidebar>

          <CaixaSidebar titulo="arquivo">
            <ul className="caixa-lista ui-2003">
              {materias.map((materia) => (
                <li key={materia.slug}>
                  » <Link to="/arquivo">{materia.mesAno} (1)</Link>
                </li>
              ))}
            </ul>
            <p className="ui-2003">
              <Link to="/arquivo">arquivo completo »</Link>
            </p>
          </CaixaSidebar>

          <CaixaSidebar titulo="rubricas">
            <ul className="caixa-lista ui-2003">
              {materias.map((materia) => (
                <li key={materia.slug}>
                  »{' '}
                  <Link to={`/codice/materia/${materia.slug}`} viewTransition>
                    {materia.categoria}
                  </Link>
                </li>
              ))}
            </ul>
          </CaixaSidebar>

          <CaixaSidebar titulo="livro de visitas">
            <p className="caixa-texto caixa-citacao">“{ultimaVisita.mensagem.slice(0, 64)}…”</p>
            <p className="ui-2003">
              — {ultimaVisita.nome} · <Link to="/visitas">ler as {visitas.length} assinaturas »</Link>
            </p>
          </CaixaSidebar>

          <CaixaSidebar titulo="sites amigos">
            <div className="caixa-botoes">
              <Botao88x31 titulo="CÓDICE" subtitulo="vol. I" variante="escuro" />
              <Botao88x31 titulo="pergaminho" subtitulo="& tinta" variante="pergaminho" />
              <Botao88x31 titulo="MENESTREL" subtitulo="webring" variante="rubrica" />
              <Botao88x31 titulo="BIBA" subtitulo="saudade" variante="escuro" />
            </div>
          </CaixaSidebar>

          <div className="sidebar-contador">
            <ContadorVisitas valor="004217" />
          </div>

          <p className="sidebar-selinho ui-2003">
            feito à mão em MMXXVI — <Link to="/especime">prova do impressor</Link>
          </p>
        </aside>
      </div>
    </div>
  )
}
