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
import Separador from '../components/ornamentos/Separador.jsx'
import HeroCapa from '../components/portal/HeroCapa.jsx'
import ReguaEtiquetas from '../components/portal/ReguaEtiquetas.jsx'
import Letreiro from '../components/portal/Letreiro.jsx'
import PapelRasgado from '../components/v2/PapelRasgado.jsx'
import Carimbo from '../components/v2/Carimbo.jsx'
import TituloGigante from '../components/v2/TituloGigante.jsx'
import { NOVIDADES } from '../data/avisos.js'
import '../styles/home.css'

/**
 * A capa da revista no v2: um CARTAZ XEROCADO — contexto largo
 * (1160px), grão de xerox, tipografia gigante vazada atravessando a
 * composição, e cada chamada é um PEDAÇO de papel rasgado colado.
 * Nenhum retângulo de borda 1px sobrevive.
 */
export default function Home() {
  const destaque = materias[0]
  const fotoRecente = fotos[fotos.length - 1]
  const bilheteRecente = entradas.find((e) => e.tipo === 'bilhete') ?? entradas[0]
  const fichaDestaque = fichas[0]

  return (
    <>
      <HeroCapa />
      <div className="capa-sobreposta">
      <ReguaEtiquetas />
      <main className="home">
        <Letreiro itens={NOVIDADES} />

        <div className="cartaz">
          <TituloGigante vazado className="cartaz-fundo" aria-hidden="true">
            MMXXVI
          </TituloGigante>

          <PapelRasgado
            as="section"
            variante="a"
            tom="papel"
            fita
            rotacao={-1.2}
            className="cartaz-manchete"
          >
            <p className="ui-2003 manchete-tag">matéria de capa — do fanzine códice</p>
            <div className="manchete-miolo">
              <div>
                <h2 className="manchete-titulo">
                  <Link to={`/codice/materia/${destaque.slug}`} viewTransition>
                    {destaque.titulo}
                  </Link>
                </h2>
                <p className="manchete-chamada">{destaque.chamada}</p>
                <p className="ui-2003">
                  <Link to="/codice" viewTransition>entrar no códice »</Link>
                </p>
              </div>
              <div className="manchete-gravura" aria-hidden="true">
                <GravuraPlaceholder arte={destaque.arte} />
              </div>
            </div>
          </PapelRasgado>

          <PapelRasgado
            as="section"
            variante="b"
            tom="sepia"
            fita
            rotacao={1.4}
            className="cartaz-bilhete"
          >
            <h3 className="ui-2003 pedaco-cab">O QUARTO — diário da dona</h3>
            <p className="pedaco-texto">
              “{bilheteRecente.texto.slice(0, 110)}…” <Link to="/quarto">ler o diário »</Link>
            </p>
          </PapelRasgado>

          <PapelRasgado
            as="section"
            variante="c"
            tom="sepia"
            rotacao={-0.8}
            className="cartaz-disco"
          >
            <h3 className="ui-2003 pedaco-cab">DISCOTECA</h3>
            <div className="disco-linha">
              <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="var(--bg-base)" stroke="var(--gold-muted)" strokeWidth="1" />
                <circle cx="24" cy="24" r="7" fill="var(--brown)" />
                <circle cx="24" cy="24" r="1.5" fill="var(--bg-base)" />
              </svg>
              <div>
                <p className="pedaco-destaque">{fichaDestaque.titulo}</p>
                <NotaHederas nota={fichaDestaque.nota} />
              </div>
            </div>
            <p className="ui-2003">
              <Link to="/discoteca">folhear a caixa »</Link>
            </p>
          </PapelRasgado>

          <PapelRasgado
            as="section"
            variante="a"
            tom="papel"
            rotacao={0.7}
            className="cartaz-codice"
          >
            <h3 className="cartaz-codice-titulo">
              <Link to="/codice" viewTransition>CÓDICE</Link>
            </h3>
            <p className="pedaco-texto">
              o fanzine — 3 matérias, 9 fólios, marginalia da própria mão.
            </p>
            <Carimbo rotacao={-5} className="cartaz-codice-carimbo">
              vol. I completo
            </Carimbo>
          </PapelRasgado>

          <figure className="cartaz-polaroid">
            <div className="cartaz-polaroid-foto" aria-hidden="true">
              <FotoArte nome={fotoRecente.arte} />
            </div>
            <figcaption className="cartaz-polaroid-legenda">
              <Link to="/album">álbum: {fotos.length} fotos »</Link>
            </figcaption>
          </figure>

          <div className="cartaz-etiquetas">
            <PapelRasgado variante="b" tom="fita" rotacao={-1.5} className="etiqueta">
              <h3 className="ui-2003 pedaco-cab">NOTAS RECENTES</h3>
              <ul className="etiqueta-lista ui-2003">
                {materias.map((materia) => (
                  <li key={materia.slug}>
                    »{' '}
                    <Link to={`/codice/materia/${materia.slug}`} viewTransition>
                      {materia.mesAno} — {materia.categoria}
                    </Link>
                  </li>
                ))}
              </ul>
            </PapelRasgado>
            <PapelRasgado variante="c" tom="fita" rotacao={1.2} className="etiqueta">
              <h3 className="ui-2003 pedaco-cab">AMIGAS &amp; A DONA</h3>
              <p className="ui-2003 etiqueta-linha">
                <Link to="/amigas">webring: 8 selos »</Link>
              </p>
              <p className="ui-2003 etiqueta-linha">
                <Link to="/sobre">quem escreve »</Link>
              </p>
            </PapelRasgado>
          </div>

          <div className="cartaz-visitas">
            <ContadorVisitas valor="004217" rotulo={`${visitas.length} assinaturas no livro`} />
            <p className="ui-2003">
              <Link to="/visitas">assinar o livro de visitas »</Link>
            </p>
          </div>
        </div>

        <Separador />
        <p className="ui-2003 home-rodape">
          arquivo completo em <Link to="/arquivo">/arquivo</Link> — bastidores na{' '}
          <Link to="/especime">prova do impressor</Link>
        </p>
      </main>
      </div>
    </>
  )
}
