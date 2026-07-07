import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { materias } from '../data/materias.js'
import { entradas } from '../data/quarto.js'
import { fotos } from '../data/album.js'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import Manicule from '../components/ornamentos/Manicule.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import '../styles/paginas.css'

/**
 * O arquivo unificado da revista: mês a mês, tudo o que foi
 * publicado — matérias do códice, entradas do quarto e fotos do
 * álbum — como manda o costume dos blogs.
 */
const MESES = ['março de MMXXVI', 'abril de MMXXVI', 'maio de MMXXVI', 'junho de MMXXVI']

function rotuloEntrada(entrada) {
  if (entrada.tipo === 'avaliacao') return `avaliação: ${entrada.titulo}`
  if (entrada.tipo === 'achado') return `achado: ${entrada.item}`
  if (entrada.tipo === 'foto') return `foto: ${entrada.legenda.slice(0, 38)}…`
  return `bilhete: “${entrada.texto.slice(0, 40)}…”`
}

export default function Arquivo() {
  useEffect(() => {
    document.title = 'Arquivo — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  return (
    <>
      <Nav2003 pagina="arquivo" />
      <main className="pergaminho pagina-livro pagina-arquivo">
        <h1 className="rubrica pagina-titulo">Arquivo da revista</h1>
        <p className="ui-2003 pagina-nota">
          tudo o que já foi publicado, mês a mês — matérias, bilhetes &amp; fotografias
        </p>

        <nav aria-label="Arquivo por mês" className="arquivo-nav">
          <h2 className="arquivo-ano">
            <Manicule /> Anno MMXXVI
          </h2>
          <ul className="arquivo-meses">
            {MESES.map((mes) => {
              const doCodice = materias.filter((m) => m.mesAno === mes)
              const doQuarto = entradas.filter((e) => e.mesAno === mes)
              const doAlbum = fotos.filter((f) => f.mesAno === mes)
              const total = doCodice.length + doQuarto.length + doAlbum.length
              if (total === 0) return null
              return (
                <li key={mes} className="arquivo-mes">
                  <span className="ui-2003 arquivo-mes-rotulo">» {mes} ({total})</span>
                  <ul className="arquivo-posts">
                    {doCodice.map((materia) => (
                      <li key={materia.slug}>
                        <Link to={`/codice/materia/${materia.slug}`}>{materia.titulo}</Link>{' '}
                        <span className="ui-2003 arquivo-post-meta">
                          — códice, rubrica {materia.categoria}
                        </span>
                      </li>
                    ))}
                    {doQuarto.map((entrada, i) => (
                      <li key={`q${i}`} className="arquivo-post-menor">
                        <Link to="/quarto">{rotuloEntrada(entrada)}</Link>{' '}
                        <span className="ui-2003 arquivo-post-meta">— o quarto, {entrada.data}</span>
                      </li>
                    ))}
                    {doAlbum.length > 0 && (
                      <li className="arquivo-post-menor">
                        <Link to="/album">
                          {doAlbum.length} {doAlbum.length === 1 ? 'foto nova' : 'fotos novas'}
                        </Link>{' '}
                        <span className="ui-2003 arquivo-post-meta">— álbum</span>
                      </li>
                    )}
                  </ul>
                </li>
              )
            })}
          </ul>

          <h2 className="arquivo-ano arquivo-ano-perdido">
            <Manicule /> Anno MMXXV
          </h2>
          <p className="arquivo-perdido">
            os fólios de MMXXV perderam-se na mudança de servidor. reza-se por eles.
          </p>
        </nav>

        <Separador />
        <p className="ui-2003 pagina-rodape">
          o arquivo cresce devagar — a copista escreve à pena, e a pena cansa
        </p>
      </main>
    </>
  )
}
