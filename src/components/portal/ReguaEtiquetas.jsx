import { NavLink } from 'react-router-dom'

/**
 * A régua de editorias do portal: etiquetas de fita adesiva
 * levemente tortas (rotação por nth-child no CSS). A seção ativa
 * fica em rubrica. Links de matéria mantêm o /codice ativo.
 */
const SECOES = [
  { rotulo: 'capa', para: '/', exato: true },
  { rotulo: 'códice', para: '/codice' },
  { rotulo: 'álbum', para: '/album' },
  { rotulo: 'o quarto', para: '/quarto' },
  { rotulo: 'discoteca', para: '/discoteca' },
  { rotulo: 'amigas', para: '/amigas' },
  { rotulo: 'visitas', para: '/visitas' },
]

export default function ReguaEtiquetas() {
  return (
    <nav className="regua-etiquetas" aria-label="Seções da revista">
      {SECOES.map((secao) => (
        <NavLink
          key={secao.para}
          to={secao.para}
          end={secao.exato}
          viewTransition
          className={({ isActive }) => (isActive ? 'etq etq-viva' : 'etq')}
        >
          {secao.rotulo}
        </NavLink>
      ))}
    </nav>
  )
}
