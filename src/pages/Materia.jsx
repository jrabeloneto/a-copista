import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { materias, materiaPorSlug, rotuloFolio } from '../data/materias.js'
import Folha from '../components/folio/Folha.jsx'
import GravuraPlaceholder from '../components/folio/GravuraPlaceholder.jsx'
import Capitular from '../components/ornamentos/Capitular.jsx'
import Manicule from '../components/ornamentos/Manicule.jsx'
import Fleuron from '../components/ornamentos/Fleuron.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import MarginaliaArte from '../components/ornamentos/MarginaliaArte.jsx'
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

  useEffect(() => {
    if (materia) {
      document.title = `${materia.titulo} — CÓDICE`
    }
    return () => {
      document.title = 'CÓDICE — Vol. I'
    }
  }, [materia])

  if (!materia) {
    return <Navigate to="/" replace />
  }

  const indice = materias.findIndex((m) => m.slug === materia.slug)
  const anterior = materias[indice - 1]
  const seguinte = materias[indice + 1]
  const ultimaFolha = materia.folhas.length - 1

  return (
    <>
      <nav className="materia-nav ui-2003" aria-label="Navegação do fanzine">
        « <Link to="/">capa</Link>
        <span className="materia-nav-sep">·</span>
        matéria da rubrica <em>{materia.categoria}</em>
      </nav>

      <article className="materia">
        {materia.folhas.map((folha, i) => (
          <Folha
            key={i}
            rotulo={rotuloFolio(materia.folioBase, i)}
            lado={i % 2 === 0 ? 'recto' : 'verso'}
            variante={folha.variante}
          >
            {i === 0 && (
              <header className="materia-cabecalho">
                <p className="rubrica materia-incipit">{materia.incipit}</p>
                <h1 className="materia-titulo">{materia.titulo}</h1>
                <p className="materia-subtitulo">{materia.subtitulo}</p>
              </header>
            )}

            {folha.secoes.map((secao, j) => (
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
        ))}

        <footer className="materia-rodape">
          <p className="assinatura-post">
            postado por <Link to="/">a copista</Link> —{' '}
            <time>{materia.postadoEm}, às {materia.hora}</time> —{' '}
            {/* âncora inerte até o livro de comentários existir (ETAPA 3) */}
            <a href="#comentarios">{materia.comentarios} comentários</a>
          </p>
          <Separador />
          <nav className="materia-vizinhas ui-2003" aria-label="Outras matérias">
            {anterior ? (
              <Link to={`/materia/${anterior.slug}`}>« {anterior.titulo}</Link>
            ) : (
              <span />
            )}
            {seguinte ? (
              <Link to={`/materia/${seguinte.slug}`}>{seguinte.titulo} »</Link>
            ) : (
              <span />
            )}
          </nav>
        </footer>
      </article>
    </>
  )
}
