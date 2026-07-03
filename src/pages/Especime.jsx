import { Link } from 'react-router-dom'
import { materias } from '../data/materias.js'
import MolduraOrnamental from '../components/ornamentos/MolduraOrnamental.jsx'
import Capitular from '../components/ornamentos/Capitular.jsx'
import Manicule from '../components/ornamentos/Manicule.jsx'
import Fleuron from '../components/ornamentos/Fleuron.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import Botao88x31 from '../components/ui2003/Botao88x31.jsx'
import ContadorVisitas from '../components/ui2003/ContadorVisitas.jsx'
import '../styles/especime.css'

const CORES = [
  ['--bg-base', '#1a1714', 'preto-marrom'],
  ['--bg-paper', '#e8dfd0', 'pergaminho'],
  ['--bg-card', '#2a241e', 'cartão'],
  ['--brown', '#6b5544', 'marrom'],
  ['--brown-light', '#8a7360', 'marrom claro'],
  ['--gray-warm', '#9a938a', 'cinza quente'],
  ['--red-rubric', '#8f3d33', 'rubrica'],
  ['--gold-muted', '#a8895c', 'ouro apagado'],
]

export default function Especime() {
  return (
    <main className="especime">
      <header className="especime-cabecalho">
        <MolduraOrnamental as="div">
          <p className="especime-sobretitulo ui-2003">prova do impressor — folha de amostras — não distribuir</p>
          <h1 className="especime-titulo">CÓDICE</h1>
          <p className="especime-subtitulo">
            em que se tratam as vidas &amp; obras de estrelas, boutiques &amp; menestréis
          </p>
          <p className="especime-vol">Vol. I — MMXXVI</p>
        </MolduraOrnamental>
      </header>

      <section className="especime-secao" aria-labelledby="sec-paleta">
        <h2 id="sec-paleta" className="rubrica especime-rubrica">I. Da paleta</h2>
        <ul className="amostras-cor">
          {CORES.map(([token, hex, nome]) => (
            <li key={token} className="amostra-cor">
              <span className="amostra-cor-bloco" style={{ background: `var(${token})` }} />
              <span className="ui-2003 amostra-cor-nome">{nome}</span>
              <span className="ui-2003 amostra-cor-hex">{hex}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="especime-secao" aria-labelledby="sec-tipos">
        <h2 id="sec-tipos" className="rubrica especime-rubrica">II. Dos tipos</h2>
        <dl className="amostras-tipo">
          <div className="amostra-tipo">
            <dt className="ui-2003">Grenze Gotisch — display, nunca em corpo de texto</dt>
            <dd className="tipo-display">Menestréis &amp; Boutiques</dd>
          </div>
          <div className="amostra-tipo">
            <dt className="ui-2003">IM Fell English — editorial, tinta do séc. XVII</dt>
            <dd className="tipo-fell">
              A tinta entra irregular no papel, <em>como convém a uma prensa cansada.</em>
            </dd>
          </div>
          <div className="amostra-tipo">
            <dt className="ui-2003">IM Fell English SC — rubricas &amp; versais</dt>
            <dd className="tipo-fell-sc">Da vida &amp; obra de uma estrela</dd>
          </div>
          <div className="amostra-tipo">
            <dt className="ui-2003">EB Garamond — corpo de leitura, 17px</dt>
            <dd className="tipo-corpo">
              O medieval revival dos anos setenta não foi nostalgia: foi contrabando. Capas de
              disco viraram frontispícios, boutiques viraram capelas escuras, e todo menestrel
              de bigode carregava um alaúde elétrico.
            </dd>
          </div>
          <div className="amostra-tipo">
            <dt className="ui-2003">Verdana 10–11px — a voz de 2003</dt>
            <dd className="ui-2003 tipo-ui">
              postado por <a href="/">a copista</a> às 23h47 — <a href="#comentarios">3 comentários</a>
            </dd>
          </div>
          <div className="amostra-tipo">
            <dt className="ui-2003">Tangerine — marginalia manuscrita, uso raríssimo</dt>
            <dd className="tipo-manuscrita">conferir esta data no arquivo da cinemateca…</dd>
          </div>
        </dl>
      </section>

      <section className="especime-secao" aria-labelledby="sec-folio">
        <h2 id="sec-folio" className="rubrica especime-rubrica">III. Do fólio</h2>
        <article className="pergaminho folio-amostra" lang="pt-BR">
          <span className="folio-numero" aria-hidden="true">fol. 12r</span>
          <h3 className="rubrica folio-rubrica">Da vida &amp; obra de uma estrela do cinema</h3>
          <p className="folio-texto">
            <Capitular letra="N" />
            <span className="versais">os anos sessenta, quando o cinema deste país</span> ainda
            cheirava a sal e a película queimada, uma atriz atravessou a tela como quem atravessa
            uma praça em dia de procissão: sem pressa, sabendo-se olhada. As crônicas da época —
            e as que vieram depois, sempre mais devotas — registram a estreia como quem registra
            um milagre menor, desses que não derrubam impérios mas mudam para sempre a paróquia.
          </p>
          <p className="folio-texto">
            O que este códice pretende, nas páginas que seguem, é menos biografia que inventário:
            das obras, dos vestidos, das entrevistas concedidas a contragosto e dos silêncios
            longamente ensaiados. Que o leitor tenha paciência de copista e desconfiança de
            inquisidor, pois nem tudo o que aqui se copia foi conferido com os olhos.
          </p>
          <aside className="marginalia folio-marginalia">
            nota da copista: conferir a data da estreia — o almanaque diz outra coisa
          </aside>
          <p className="citacao">
            <Manicule />
            «Eu não fazia cinema; eu comparecia a ele, como se comparece a uma missa.»
          </p>
          <div className="colofao">
            <p>
              Aqui se encerra a amostra do presente fólio, composta no ano de MMXXVI<br />
              por mãos que preferem a pena ao teclado,<br />
              em louvor das estrelas.<br />
            </p>
            <Fleuron width={22} />
          </div>
        </article>
      </section>

      <section className="especime-secao" aria-labelledby="sec-ornamentos">
        <h2 id="sec-ornamentos" className="rubrica especime-rubrica">IV. Dos ornamentos</h2>
        <div className="amostras-ornamento">
          <div className="amostra-ornamento">
            <span className="ui-2003">manicules</span>
            <div className="amostra-ornamento-palco">
              <Manicule />
              <Manicule className="manicule-marrom" />
            </div>
          </div>
          <div className="amostra-ornamento">
            <span className="ui-2003">fleurons (hedera)</span>
            <div className="amostra-ornamento-palco">
              <Fleuron width={34} />
              <Fleuron width={24} />
              <Fleuron width={16} />
            </div>
          </div>
          <div className="amostra-ornamento amostra-ornamento-larga">
            <span className="ui-2003">separador ornamentado</span>
            <Separador />
          </div>
        </div>
      </section>

      <section className="especime-secao" aria-labelledby="sec-2003">
        <h2 id="sec-2003" className="rubrica especime-rubrica">V. Das relíquias de 2003</h2>
        <div className="amostras-2003">
          <div className="amostra-2003">
            <span className="ui-2003">botões 88×31 — sites amigos</span>
            <div className="amostra-2003-palco">
              <Botao88x31 titulo="CÓDICE" subtitulo="vol. I" variante="escuro" />
              <Botao88x31 titulo="pergaminho" subtitulo="& tinta" variante="pergaminho" />
              <Botao88x31 titulo="MENESTREL" subtitulo="webring" variante="rubrica" />
            </div>
          </div>
          <div className="amostra-2003">
            <span className="ui-2003">contador de visitas</span>
            <div className="amostra-2003-palco">
              <ContadorVisitas valor="004217" />
            </div>
          </div>
          <div className="amostra-2003 amostra-2003-larga">
            <span className="ui-2003">assinatura de post &amp; links</span>
            <p className="assinatura-post">
              postado por <a href="/">a copista</a> às 23h47 —{' '}
              <a href="#comentarios">3 comentários</a> — <a href="/">link já visitado</a>
            </p>
          </div>
        </div>
      </section>

      <section className="especime-secao" aria-labelledby="sec-materias">
        <h2 id="sec-materias" className="rubrica especime-rubrica">VI. Das matérias (prova de navegação)</h2>
        <ul className="especime-materias">
          {materias.map((materia) => (
            <li key={materia.slug} className="especime-materia">
              <Link to={`/materia/${materia.slug}`}>{materia.titulo}</Link>
              <span className="ui-2003"> — rubrica {materia.categoria}, {materia.folhas.length} fólios</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="especime-rodape">
        <Separador />
        <p className="especime-rodape-texto">
          Aqui se encerra a prova do impressor, composta no ano de MMXXVI. Se os tipos agradarem,
          prossiga-se ao fólio; se não, fundam-se de novo.
        </p>
      </footer>
    </main>
  )
}
