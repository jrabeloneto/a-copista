import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { materias } from '../data/materias.js'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import Manicule from '../components/ornamentos/Manicule.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import '../styles/paginas.css'

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
      <main className="pagina pagina-arquivo">
        <h1 className="rubrica pagina-titulo">Arquivo do fanzine</h1>
        <p className="ui-2003 pagina-nota">
          tudo o que já foi copiado, mês a mês, como manda o costume dos blogs
        </p>

        <nav aria-label="Arquivo por mês" className="arquivo-nav">
          <h2 className="arquivo-ano">
            <Manicule /> Anno MMXXVI
          </h2>
          <ul className="arquivo-meses">
            {materias.map((materia) => (
              <li key={materia.slug} className="arquivo-mes">
                <span className="ui-2003 arquivo-mes-rotulo">» {materia.mesAno} (1)</span>
                <ul className="arquivo-posts">
                  <li>
                    <Link to={`/codice/materia/${materia.slug}`}>{materia.titulo}</Link>{' '}
                    <span className="ui-2003 arquivo-post-meta">
                      — rubrica {materia.categoria}, {materia.comentarios} comentários
                    </span>
                  </li>
                </ul>
              </li>
            ))}
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
