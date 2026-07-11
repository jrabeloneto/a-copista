import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import Botao88x31 from '../components/ui2003/Botao88x31.jsx'
import Separador from '../components/ornamentos/Separador.jsx'
import Carimbo from '../components/v2/Carimbo.jsx'
import TituloGigante from '../components/v2/TituloGigante.jsx'
import '../styles/secoes.css'

/**
 * A parede de selos — links & webring, 2003 puro. Sites fake de
 * época (alguns assinaram o livro de visitas; o portal conversa
 * consigo mesmo).
 */
const SELOS = [
  { titulo: 'CÓDICE', subtitulo: 'vol. I', variante: 'escuro', desc: 'o fanzine da casa — mora aqui mesmo, mas selo é selo.' },
  { titulo: 'pergaminho', subtitulo: '& tinta', variante: 'pergaminho', desc: 'papelaria de ofício: penas, tintas ferrogálicas e paciência.' },
  { titulo: 'MENESTREL', subtitulo: 'webring', variante: 'rubrica', desc: 'o anel dos alaúdes elétricos. o menestrel77 é o guardião.' },
  { titulo: 'BIBA', subtitulo: 'saudade', variante: 'escuro', desc: 'memorial não-oficial da penumbra dourada de Kensington.' },
  { titulo: 'juh', subtitulo: 'fotolog', variante: 'pergaminho', desc: 'as borboletas da juh — visita o dela tbm, como ela pede.' },
  { titulo: 'geocities', subtitulo: '/menestrel77', variante: 'escuro', desc: 'crumhorns, estampies e um contador que nunca vira.' },
  { titulo: '500 visitas', subtitulo: 'clube', variante: 'rubrica', desc: 'selo de quem passou das quinhentas. nós passamos. ;)' },
  { titulo: 'feito à mão', subtitulo: 'sem gerador', variante: 'pergaminho', desc: 'liga dos sites desenhados traço a traço, sem template.' },
]

export default function Amigas() {
  useEffect(() => {
    document.title = 'Amigas & webring — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  return (
    <>
      <Nav2003 pagina="amigas & webring" />
      <main className="pagina-secao secao-cartaz">
        <div className="secao-cabeca">
          <h1 className="rubrica pagina-titulo">Amigas &amp; webring</h1>
          <Carimbo rotacao={-4}>aceitam-se casas</Carimbo>
        </div>
        <p className="ui-2003 pagina-nota">
          a parede de selos — cada 88×31 é uma casa amiga. troca-se selo como se trocava figurinha
        </p>

        <div className="amigas-mural">
          <TituloGigante vazado className="tipo-fundo amigas-fundo" aria-hidden="true">
            ANEL
          </TituloGigante>
          <ul className="amigas-parede">
          {SELOS.map((selo, i) => (
            <li key={i} className="amigas-selo">
              <Botao88x31 titulo={selo.titulo} subtitulo={selo.subtitulo} variante={selo.variante} />
              <p className="ui-2003 amigas-desc">{selo.desc}</p>
            </li>
          ))}
          </ul>
        </div>

        <Separador />
        <p className="ui-2003 pagina-rodape">
          quer entrar no anel? deixe o endereço no <Link to="/visitas">livro de visitas</Link> —
          a copista recorta o seu selo à mão
        </p>
      </main>
    </>
  )
}
