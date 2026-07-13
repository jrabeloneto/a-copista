import { useEffect } from 'react'
import { visitas } from '../data/visitas.js'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import Carimbo from '../components/v2/Carimbo.jsx'
import TituloGigante from '../components/v2/TituloGigante.jsx'
import '../styles/paginas.css'

/**
 * Livro de visitas de adereço: entradas hardcoded (src/data/visitas.js),
 * renderizadas exclusivamente por interpolação JSX (auto-escapada).
 * O formulário é cenografia — fieldset desabilitado, nada é enviado
 * nem persistido. Se um dia virar real, ver a nota de segurança no
 * arquivo de dados antes de escrever qualquer linha.
 */
export default function Visitas() {
  useEffect(() => {
    document.title = 'Livro de visitas — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  return (
    <>
      <Nav2003 pagina="livro de visitas" />
      <div className="visitas-palco">
        <TituloGigante vazado className="tipo-fundo visitas-fundo" aria-hidden="true">
          VISITAS
        </TituloGigante>
        <main className="pergaminho pagina-livro pagina-visitas" id="comentarios">
          <div className="secao-cabeca">
            <h1 className="rubrica pagina-titulo">Livro de visitas</h1>
            <Carimbo rotacao={-5}>assine</Carimbo>
          </div>
          <p className="ui-2003 pagina-nota">
            {visitas.length} assinaturas desde MMXXVI — obrigada pela visita, volte sempre
          </p>

        <form className="visitas-form" aria-label="Assinar o livro (indisponível)">
          <fieldset disabled>
            <legend className="ui-2003">assinar o livro</legend>
            <div className="visitas-form-linha">
              <label className="ui-2003" htmlFor="visita-nome">seu nome</label>
              <input id="visita-nome" type="text" placeholder="—" />
            </div>
            <div className="visitas-form-linha">
              <label className="ui-2003" htmlFor="visita-site">seu site (se tiver)</label>
              <input id="visita-site" type="text" placeholder="—" />
            </div>
            <div className="visitas-form-linha">
              <label className="ui-2003" htmlFor="visita-msg">recado</label>
              <textarea id="visita-msg" rows={3} placeholder="—" />
            </div>
            <button type="button" className="ui-2003 visitas-botao">molhar a pena</button>
          </fieldset>
          <p className="ui-2003 visitas-form-nota">
            o tinteiro secou no inverno e a copista ainda não comprou tinta — por ora, o livro
            aceita apenas leitura.
          </p>
        </form>

        <Separador />

        <ul className="visitas-lista">
          {visitas.map((visita, i) => (
            <li key={i}>
              <article className="visita">
                <p className="ui-2003 visita-cabecalho">
                  <strong>{visita.nome}</strong>
                  {visita.site && <span className="visita-site"> · {visita.site}</span>}
                  <span className="visita-data">
                    {' '}— <time>{visita.data}</time>
                  </span>
                </p>
                <p className="ui-2003 visita-mensagem">{visita.mensagem}</p>
              </article>
            </li>
          ))}
        </ul>

          <p className="ui-2003 pagina-rodape">
            fim das assinaturas — as mais antigas foram para o arquivo morto (uma caixa de sapato)
          </p>
        </main>
      </div>
    </>
  )
}
