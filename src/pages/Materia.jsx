import { useEffect, useMemo, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { materias, materiaPorSlug, rotuloFolio } from '../data/materias.js'
import { flutuantesDaMateria } from '../data/flutuantes.js'
import { useGsapPagina } from '../lib/useGsapPagina.js'
import CamadaFlutuante from '../components/motion/CamadaFlutuante.jsx'
import Folha from '../components/folio/Folha.jsx'
import GravuraPlaceholder from '../components/folio/GravuraPlaceholder.jsx'
import Capitular from '../components/ornamentos/Capitular.jsx'
import Manicule from '../components/ornamentos/Manicule.jsx'
import Fleuron from '../components/ornamentos/Fleuron.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import MarginaliaArte from '../components/ornamentos/MarginaliaArte.jsx'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import '../styles/materia.css'

function BlocoSecao({ secao }) {
  switch (secao.tipo) {
    case 'rubrica':
      return <h2 className="rubrica folha-rubrica">{secao.texto}</h2>

    case 'citacao':
      return (
        <p className="citacao">
          <Manicule />
          {secao.texto}
        </p>
      )

    case 'gravura':
      return <GravuraPlaceholder arte={secao.arte} legenda={secao.legenda} />

    case 'paragrafo':
    default:
      return (
        <div className="bloco">
          <p className={secao.capitular ? 'folha-paragrafo com-capitular' : 'folha-paragrafo'}>
            {secao.capitular && <Capitular letra={secao.capitular} />}
            {secao.versais && <span className="versais">{secao.versais}</span>}
            {secao.texto}
          </p>
          {secao.marginalia && (
            <aside className="marginalia bloco-marginalia">
              <MarginaliaArte arte={secao.marginalia.arte} />
              {secao.marginalia.texto}
            </aside>
          )}
        </div>
      )
  }
}

export default function Materia() {
  const { slug } = useParams()
  const materia = materiaPorSlug(slug)
  const raizRef = useRef(null)
  const flutuantes = useMemo(() => flutuantesDaMateria(slug), [slug])

  useEffect(() => {
    if (materia) {
      document.title = `${materia.titulo} — CÓDICE — A COPISTA`
    }
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [materia])

  useGsapPagina(
    () => {
      // slug inválido: Navigate está a caminho, nada a animar
      if (!materia) return

      // folhas entram em leque sutil ao abrir a matéria
      gsap.from('.folha-envelope', {
        y: 26,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
      })

      // capitulares acendem ao entrar no viewport (uma vez)
      gsap.utils.toArray('.capitular').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.94,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        })
      })

      // moldura da gravura se desenha; depois o motivo desenrola
      // (estado inicial vem daqui — reduced-motion nunca esconde nada)
      gsap.utils.toArray('.gravura-svg').forEach((svg) => {
        const molduras = svg.querySelectorAll('.gravura-moldura')
        const motivo = svg.querySelector('.gravura-motivo')
        const tl = gsap.timeline({
          scrollTrigger: { trigger: svg, start: 'top 82%', once: true },
        })
        molduras.forEach((rect, i) => {
          const perimetro = rect.getTotalLength ? rect.getTotalLength() : 760
          gsap.set(rect, { strokeDasharray: perimetro, strokeDashoffset: perimetro })
          tl.to(rect, { strokeDashoffset: 0, duration: 0.9, ease: 'power1.inOut' }, i * 0.18)
        })
        if (motivo) {
          tl.fromTo(
            motivo,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power1.inOut' },
            0.75,
          )
        }
      })
    },
    [slug],
    raizRef,
  )

  if (!materia) {
    return <Navigate to="/" replace />
  }

  const indice = materias.findIndex((m) => m.slug === materia.slug)
  const anterior = materias[indice - 1]
  const seguinte = materias[indice + 1]
  const ultimaFolha = materia.folhas.length - 1

  return (
    <div ref={raizRef}>
      <Nav2003
        destino="/codice"
        rotuloDestino="códice"
        pagina={
          <>
            matéria da rubrica <em>{materia.categoria}</em>
          </>
        }
      />

      <CamadaFlutuante itens={flutuantes} escondeMobile />

      <article className="materia">
        {/* v2: as folhas se apresentam como LIVRO ABERTO no desktop —
            primeiro recto solto, depois duplas verso|recto (spreads);
            no mobile os spreads empilham e tudo volta ao de antes */}
        {(() => {
          const spreads = []
          materia.folhas.forEach((_, i) => {
            if (i === 0 || i % 2 === 1) spreads.push([i])
            else spreads[spreads.length - 1].push(i)
          })

          const renderFolha = (i) => (
            <Folha
              key={i}
              rotulo={rotuloFolio(materia.folioBase, i)}
              lado={i % 2 === 0 ? 'recto' : 'verso'}
              variante={materia.folhas[i].variante}
            >
              {i === 0 && (
                <header className="materia-cabecalho">
                  <p className="rubrica materia-incipit">{materia.incipit}</p>
                  <h1 className="materia-titulo">{materia.titulo}</h1>
                  <p className="materia-subtitulo">{materia.subtitulo}</p>
                </header>
              )}

              {materia.folhas[i].secoes.map((secao, j) => (
                <BlocoSecao key={j} secao={secao} />
              ))}

              {i === ultimaFolha && (
                <div className="colofao">
                  <p>
                    {materia.colofao.map((linha, k) => (
                      <span key={k} className="colofao-linha">
                        {linha}
                      </span>
                    ))}
                  </p>
                  <Fleuron width={22} />
                </div>
              )}
            </Folha>
          )

          return spreads.map((par, s) => {
            const solo =
              par.length === 1
                ? par[0] % 2 === 0
                  ? ' livro-solo-recto'
                  : ' livro-solo-verso'
                : ''
            return (
              <div key={s} className={`livro livro-materia${solo}`}>
                {par.map(renderFolha)}
              </div>
            )
          })
        })()}

        <footer className="materia-rodape">
          <p className="assinatura-post">
            postado por <Link to="/sobre">a copista</Link> —{' '}
            <time>{materia.postadoEm}, às {materia.hora}</time> —{' '}
            {/* âncora inerte até o livro de comentários existir (ETAPA 3) */}
            <a href="#comentarios">{materia.comentarios} comentários</a>
          </p>
          <Separador />
          <nav className="materia-vizinhas ui-2003" aria-label="Outras matérias">
            {anterior ? (
              <Link to={`/codice/materia/${anterior.slug}`} viewTransition>
                « {anterior.titulo}
              </Link>
            ) : (
              <span />
            )}
            {seguinte ? (
              <Link to={`/codice/materia/${seguinte.slug}`} viewTransition>
                {seguinte.titulo} »
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </footer>
      </article>
    </div>
  )
}
