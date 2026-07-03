import { Link } from 'react-router-dom'

/**
 * Breadcrumb de topo das páginas internas — Verdana 11px, como
 * toda navegação deste fanzine. « capa · nome-da-página
 */
export default function Nav2003({ pagina, children }) {
  return (
    <nav className="nav2003 ui-2003" aria-label="Navegação do fanzine">
      « <Link to="/">capa</Link>
      <span className="nav2003-sep">·</span>
      {pagina}
      {children}
    </nav>
  )
}
