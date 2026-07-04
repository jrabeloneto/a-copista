import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { entradas } from '../data/quarto.js'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import FotoArte from '../components/album/FotoArte.jsx'
import NotaHederas from '../components/ornamentos/NotaHederas.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import '../styles/secoes.css'

function Entrada({ entrada }) {
  switch (entrada.tipo) {
    case 'achado':
      return (
        <div className="entrada-corpo entrada-papel">
          <p className="ui-2003 entrada-rotulo">ACHADO DE SEBO — {entrada.preco}</p>
          <p className="entrada-item">{entrada.item}</p>
          <p className="entrada-texto">{entrada.texto}</p>
        </div>
      )
    case 'avaliacao':
      return (
        <div className="entrada-corpo entrada-papel">
          <p className="ui-2003 entrada-rotulo">AVALIAÇÃO DA DONA</p>
          <p className="entrada-item">{entrada.titulo}</p>
          <NotaHederas nota={entrada.nota} />
          <p className="entrada-texto">{entrada.texto}</p>
        </div>
      )
    case 'foto':
      return (
        <div className="entrada-corpo entrada-foto">
          <FotoArte nome={entrada.arte} />
          <p className="foto-legenda">{entrada.legenda}</p>
        </div>
      )
    case 'bilhete':
    default:
      return (
        <div className="entrada-corpo entrada-papel">
          <p className="entrada-texto entrada-bilhete">{entrada.texto}</p>
        </div>
      )
  }
}

/**
 * O quarto da dona — dial de colagem máximo: o diário-scrapbook,
 * cada entrada um papel colado com etiqueta de data.
 */
export default function Quarto() {
  useEffect(() => {
    document.title = 'O quarto da dona — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  return (
    <>
      <Nav2003 pagina="o quarto da dona" />
      <main className="pagina-secao quarto">
        <h1 className="rubrica pagina-titulo">O quarto da dona</h1>
        <p className="ui-2003 pagina-nota">
          bilhetes, achados, avaliações em hederas &amp; o que mais couber na escrivaninha —
          quem escreve está <Link to="/sobre">ali</Link>
        </p>

        <ol className="quarto-feed">
          {entradas.map((entrada, i) => (
            <li key={i} className={`entrada torto-${(i % 4) + 1}`}>
              <p className="ui-2003 entrada-data">
                <time>{entrada.data}</time>
              </p>
              <Entrada entrada={entrada} />
            </li>
          ))}
        </ol>

        <Separador />
        <p className="ui-2003 pagina-rodape">
          o resto mora em caixas de sapato — o arquivo morto agradece a visita
        </p>
      </main>
    </>
  )
}
