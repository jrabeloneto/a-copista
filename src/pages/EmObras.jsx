import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Manicule from '../components/ornamentos/Manicule.jsx'
import Separador from '../components/ornamentos/Separador.jsx'

/**
 * Sala em obras — o "under construction" de época, sem gif de
 * britadeira. Cada seção futura do portal aponta para cá até a
 * sua etapa chegar.
 */
export default function EmObras({ nome }) {
  useEffect(() => {
    document.title = `${nome} (em obras) — A COPISTA`
    return () => {
      document.title = 'A COPISTA — revista de mão única'
    }
  }, [nome])

  return (
    <main className="em-obras">
      <Manicule />
      <h1 className="rubrica em-obras-titulo">{nome}</h1>
      <p className="em-obras-texto">
        Esta sala da revista ainda está sendo mobiliada pela dona — as caixas chegaram do
        correio, mas a fita crepe acabou.
      </p>
      <p className="ui-2003 em-obras-nota">
        (em obras desde MMXXVI — a copista agradece a paciência)
      </p>
      <Separador />
      <p className="ui-2003">
        « <Link to="/">voltar à capa</Link>
      </p>
    </main>
  )
}
