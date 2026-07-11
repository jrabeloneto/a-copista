import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { fichas } from '../data/discoteca.js'
import { useGsapPagina } from '../lib/useGsapPagina.js'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import NotaHederas from '../components/ornamentos/NotaHederas.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import FotoArte from '../components/album/FotoArte.jsx'
import Carimbo from '../components/v2/Carimbo.jsx'
import TituloGigante from '../components/v2/TituloGigante.jsx'
import '../styles/secoes.css'

/**
 * Capa placeholder da ficha, por tipo: capa de disco com vinil
 * espiando, cartaz de filme, ou o próprio objeto fotografado.
 */
function CapaFicha({ tipo }) {
  if (tipo === 'objeto') {
    return (
      <span className="ficha-capa">
        <FotoArte nome="batom" />
      </span>
    )
  }
  if (tipo === 'cartaz') {
    return (
      <span className="ficha-capa">
        <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          <rect width="120" height="120" fill="var(--sepia-foto)" />
          <rect x="8" y="8" width="104" height="104" fill="none" stroke="var(--ink)" strokeWidth="2" />
          <circle cx="60" cy="46" r="18" fill="var(--gold-muted)" />
          <path d="M60 20 L60 14 M84 46 L90 46 M30 46 L36 46 M76 30 L81 25 M44 30 L39 25" stroke="var(--gold-muted)" strokeWidth="2" />
          <path d="M24 78 L96 78 M28 88 L92 88 M36 98 L84 98" stroke="var(--ink)" strokeWidth="2.4" opacity="0.8" />
        </svg>
      </span>
    )
  }
  return (
    <span className="ficha-capa">
      <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <rect width="120" height="120" fill="var(--brown)" />
        <rect x="6" y="6" width="108" height="108" fill="var(--bg-card)" stroke="var(--gold-muted)" strokeWidth="1" />
        <circle cx="78" cy="60" r="42" fill="var(--bg-base)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="78" cy="60" r="34" fill="none" stroke="var(--brown-light)" strokeWidth="0.8" opacity="0.6" />
        <circle cx="78" cy="60" r="26" fill="none" stroke="var(--brown-light)" strokeWidth="0.8" opacity="0.6" />
        <circle cx="78" cy="60" r="13" fill="var(--red-rubric)" />
        <circle cx="78" cy="60" r="2" fill="var(--bg-base)" />
        <path d="M18 24 L54 24 M18 34 L46 34" stroke="var(--gold-muted)" strokeWidth="2" />
      </svg>
    </span>
  )
}

export default function Discoteca() {
  const raizRef = useRef(null)

  useEffect(() => {
    document.title = 'Discoteca — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  // modo prateleira (desktop + motion): a seção pina e o trilho de
  // fichas viaja na horizontal preso ao scroll — crate digging.
  // A MESMA media query liga os estilos (secoes.css) e este pin;
  // fora dela (mobile/reduced), fica a grade estática de sempre.
  useGsapPagina(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 921px) and (prefers-reduced-motion: no-preference)', () => {
        const secao = raizRef.current?.querySelector('.prateleira')
        const trilho = raizRef.current?.querySelector('.discoteca-grade')
        if (!secao || !trilho) return
        const distancia = () => Math.max(0, trilho.scrollWidth - secao.clientWidth)
        gsap.to(trilho, {
          x: () => -distancia(),
          ease: 'none',
          scrollTrigger: {
            trigger: secao,
            start: 'top top',
            end: () => '+=' + distancia(),
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })
      })
    },
    [],
    raizRef,
  )

  return (
    <div ref={raizRef}>
      <Nav2003 pagina="discoteca" />
      <main className="pagina-secao pagina-discoteca">
        <div className="secao-cabeca">
          <h1 className="rubrica pagina-titulo">Discoteca &amp; coleções</h1>
          <Carimbo rotacao={5}>caixa de vinil</Carimbo>
        </div>
        <p className="ui-2003 pagina-nota">
          as fichas da coleção — discos, filmes &amp; relíquias, com a nota da casa em hederas
        </p>

        <section className="prateleira" aria-label="Fichas da coleção">
          <TituloGigante vazado className="tipo-fundo discos-fundo" aria-hidden="true">
            DISCOS
          </TituloGigante>
          <p className="ui-2003 prateleira-dica" aria-hidden="true">
            role para folhear a caixa »
          </p>
          <ul className="discoteca-grade">
            {fichas.map((ficha) => (
              <li key={ficha.id}>
                <article className="ficha">
                  <CapaFicha tipo={ficha.capa} />
                  <div className="ficha-info">
                    <p className="ui-2003 ficha-tipo">{ficha.tipo} — {ficha.ano}</p>
                    <h2 className="ficha-titulo">{ficha.titulo}</h2>
                    <p className="ui-2003 ficha-autor">{ficha.autor}</p>
                    <NotaHederas nota={ficha.nota} />
                    <p className="ficha-resenha">{ficha.resenha}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <Separador />
        <p className="ui-2003 pagina-rodape">
          a coleção cresce no ritmo dos sebos — sugestões no livro de visitas
        </p>
      </main>
    </div>
  )
}
