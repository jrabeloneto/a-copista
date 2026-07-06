import { Link } from 'react-router-dom'
import { materias } from '../data/materias.js'
import { visitas } from '../data/visitas.js'
import { fotos } from '../data/album.js'
import { entradas } from '../data/quarto.js'
import { fichas } from '../data/discoteca.js'
import GravuraPlaceholder from '../components/folio/GravuraPlaceholder.jsx'
import FotoArte from '../components/album/FotoArte.jsx'
import NotaHederas from '../components/ornamentos/NotaHederas.jsx'
import ContadorVisitas from '../components/ui2003/ContadorVisitas.jsx'
import CaixaSidebar from '../components/ui2003/CaixaSidebar.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import '../styles/home.css'

/**
 * A capa da revista: manchete vinda do CÓDICE + objetos colados
 * (cada seção é um objeto físico na mesa da dona) + coluna de notas.
 * Estrutura de revista, pele de colagem — dial 50/50.
 */
export default function Home() {
  const destaque = materias[0]
  const fotoRecente = fotos[fotos.length - 1]
  const bilheteRecente = entradas.find((e) => e.tipo === 'bilhete') ?? entradas[0]
  const fichaDestaque = fichas[0]

  return (
    <main className="home">
      <section className="home-manchete" aria-labelledby="manchete-titulo">
        <Link
          to={`/codice/materia/${destaque.slug}`}
          className="manchete-gravura objeto-colado torto-3"
          tabIndex={-1}
          aria-hidden="true"
          viewTransition
        >
          <span className="manchete-gravura-papel pergaminho">
            <GravuraPlaceholder arte={destaque.arte} />
          </span>
        </Link>
        <div className="manchete-texto">
          <p className="ui-2003 manchete-tag">matéria de capa — do fanzine códice</p>
          <h2 id="manchete-titulo" className="manchete-titulo">
            <Link to={`/codice/materia/${destaque.slug}`} viewTransition>
              {destaque.titulo}
            </Link>
          </h2>
          <p className="manchete-chamada">{destaque.chamada}</p>
          <p className="ui-2003 manchete-leia">
            <Link to="/codice" viewTransition>entrar no códice »</Link>
          </p>
        </div>
      </section>

      <div className="home-corpo">
        <section className="home-objetos" aria-label="Seções da revista">
          <article className="objeto-colado torto-1 obj-polaroid">
            <div className="obj-polaroid-foto" aria-hidden="true">
              <FotoArte nome={fotoRecente.arte} />
            </div>
            <h3 className="obj-polaroid-legenda">
              <Link to="/album">álbum: {fotos.length} fotos »</Link>
            </h3>
          </article>

          <article className="objeto-colado torto-2 obj-bilhete">
            <h3 className="ui-2003 obj-bilhete-cab">O QUARTO — diário da dona</h3>
            <p className="obj-bilhete-texto">
              “{bilheteRecente.texto.slice(0, 92)}…” <Link to="/quarto">ler o diário »</Link>
            </p>
          </article>

          <article className="objeto-colado torto-4 obj-disco">
            <h3 className="ui-2003 obj-disco-cab">DISCOTECA</h3>
            <div className="obj-disco-capa" aria-hidden="true">
              {/* o vinil é desenho (SVG), não border-radius de UI */}
              <svg viewBox="0 0 48 48" width="44" height="44">
                <circle cx="24" cy="24" r="22" fill="var(--bg-base)" stroke="var(--gold-muted)" strokeWidth="1" />
                <circle cx="24" cy="24" r="7" fill="var(--brown)" />
                <circle cx="24" cy="24" r="1.5" fill="var(--bg-base)" />
              </svg>
            </div>
            <p className="ui-2003 obj-disco-texto">
              {fichaDestaque.titulo} — <NotaHederas nota={fichaDestaque.nota} />
              <br />
              <Link to="/discoteca">folhear a coleção »</Link>
            </p>
          </article>

          <article className="objeto-colado torto-3 obj-caderno">
            <h3 className="obj-caderno-titulo">
              <Link to="/codice" viewTransition>CÓDICE</Link>
            </h3>
            <p className="obj-caderno-texto">
              o fanzine — vol. I completo: 3 matérias, 9 fólios, marginalia da própria mão.
              vol. II em cópia.
            </p>
          </article>

          <article className="objeto-colado torto-2 obj-visitas">
            <h3 className="ui-2003 obj-visitas-cab">VISITAS</h3>
            <ContadorVisitas valor="004217" rotulo={`${visitas.length} assinaturas no livro`} />
            <p className="ui-2003">
              <Link to="/visitas">assinar »</Link>
            </p>
          </article>
        </section>

        <aside className="home-coluna">
          <CaixaSidebar titulo="notas recentes">
            <ul className="caixa-lista ui-2003">
              {materias.map((materia) => (
                <li key={materia.slug}>
                  »{' '}
                  <Link to={`/codice/materia/${materia.slug}`} viewTransition>
                    {materia.mesAno} — {materia.categoria}
                  </Link>
                </li>
              ))}
            </ul>
          </CaixaSidebar>
          <CaixaSidebar titulo="amigas (webring)">
            <p className="caixa-texto">4 selos na parede, aceitam-se novos.</p>
            <p className="ui-2003">
              <Link to="/amigas">ver todas »</Link>
            </p>
          </CaixaSidebar>
          <CaixaSidebar titulo="a dona da revista">
            <p className="caixa-texto">devota de estrelas mortas e lojas demolidas.</p>
            <p className="ui-2003">
              <Link to="/sobre">quem escreve »</Link>
            </p>
          </CaixaSidebar>
        </aside>
      </div>

      <Separador />
      <p className="ui-2003 home-rodape">
        arquivo completo em <Link to="/arquivo">/arquivo</Link> — bastidores na{' '}
        <Link to="/especime">prova do impressor</Link>
      </p>
    </main>
  )
}
