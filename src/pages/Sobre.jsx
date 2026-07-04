import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav2003 from '../components/ui2003/Nav2003.jsx'
import RetratoOval from '../components/folio/RetratoOval.jsx'
import Fleuron from '../components/ornamentos/Fleuron.jsx'
import CamadaFlutuante from '../components/motion/CamadaFlutuante.jsx'
import { FLUTUANTES_SECUNDARIAS } from '../data/flutuantes.js'
import '../styles/paginas.css'

export default function Sobre() {
  useEffect(() => {
    document.title = 'Sobre a dona — A COPISTA'
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [])

  return (
    <>
      <Nav2003 pagina="sobre a autora" />
      <CamadaFlutuante itens={FLUTUANTES_SECUNDARIAS} escondeMobile />
      <main className="pagina">
        <div className="folha-solta-envelope">
          <article className="pergaminho folha-solta sobre-folha">
            <div className="sobre-retrato">
              <RetratoOval />
              <p className="sobre-retrato-legenda">a copista, gravura da oficina, s.d.</p>
            </div>

            <h1 className="rubrica sobre-rubrica">Da copista deste códice</h1>

            <p className="sobre-texto">
              A copista não tem nome de batismo público, e prefere assim: os copistas de antes
              também não assinavam, e ninguém morreu por isso. Sabe-se que mora entre um sebo e
              uma banca de jornal, em cidade grande demais para o seu gosto, e que começou este
              fanzine no dia em que percebeu que a internet estava ficando rápida demais para
              coisas lentas — e resolveu, por teimosia, fazer uma coisa lenta.
            </p>
            <p className="sobre-texto">
              Suas devoções são públicas e constam deste volume: o cinema de domingo à tarde, os
              discos de capa dupla que abrem como retábulos, um batom cor de ameixa que pertenceu
              a outra década, missais sem dono comprados a peso e toda letra gótica que ainda
              resiste nas fachadas das ruas. Desconfia de tudo o que carrega depressa e de todo
              texto que não deixa manchas nos dedos.
            </p>
            <p className="sobre-texto">
              Este códice é feito à mão, em HTML, como se HTML fosse pergaminho: cada moldura,
              gravura e mãozinha destas páginas foi desenhada traço a traço na oficina. Erros de
              cópia são parte do ofício — quem os achar pode registrá-los no{' '}
              <Link to="/visitas">livro de visitas</Link>, com a caligrafia que tiver.
            </p>

            <p className="sobre-assinatura" aria-hidden="true">
              a copista
            </p>
            <div className="sobre-fleuron">
              <Fleuron width={22} />
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
