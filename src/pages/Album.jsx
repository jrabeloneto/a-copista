import { useEffect } from 'react'
import { fotos } from '../data/album.js'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import FotoArte from '../components/album/FotoArte.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import Carimbo from '../components/v2/Carimbo.jsx'
import TituloGigante from '../components/v2/TituloGigante.jsx'
import '../styles/secoes.css'

/**
 * O álbum — dial de colagem alto: polaroids e fotos com cantoneiras
 * pretas, coladas tortas, legendas manuscritas.
 */
export default function Album() {
  useEffect(() => {
    document.title = 'Álbum de fotos — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  return (
    <>
      <Nav2003 pagina="álbum de fotos" />
      <main className="pagina-secao secao-cartaz">
        <div className="secao-cabeca">
          <h1 className="rubrica pagina-titulo">Álbum de fotos</h1>
          <Carimbo rotacao={4}>revelado em casa</Carimbo>
        </div>
        <p className="ui-2003 pagina-nota">
          as fotografias da dona — reveladas quando o dinheiro deixa, coladas quando a fita alcança
        </p>

        <div className="album-mural">
          <TituloGigante vazado className="tipo-fundo album-fundo" aria-hidden="true">
            ÁLBUM
          </TituloGigante>
          <ul className="album-grade">
          {fotos.map((foto, i) => (
            <li key={foto.id} className={`album-item torto-${(i % 4) + 1}`}>
              {foto.estilo === 'polaroid' ? (
                <figure className="foto-polaroid objeto-colado">
                  <FotoArte nome={foto.arte} />
                  <figcaption className="foto-legenda">
                    {foto.legenda}
                    <span className="ui-2003 foto-data"> — {foto.data}</span>
                  </figcaption>
                </figure>
              ) : (
                <figure className="foto-cantoneiras">
                  <span className="canto canto-no" aria-hidden="true" />
                  <span className="canto canto-ne" aria-hidden="true" />
                  <span className="canto canto-so" aria-hidden="true" />
                  <span className="canto canto-se" aria-hidden="true" />
                  <FotoArte nome={foto.arte} />
                  <figcaption className="foto-legenda foto-legenda-solta">
                    {foto.legenda}
                    <span className="ui-2003 foto-data"> — {foto.data}</span>
                  </figcaption>
                </figure>
              )}
            </li>
          ))}
          </ul>
        </div>

        <Separador />
        <p className="ui-2003 pagina-rodape">
          fim do rolo — o próximo filme já está na câmera, reza-se pela revelação
        </p>
      </main>
    </>
  )
}
