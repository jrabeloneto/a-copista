/**
 * Caixa de sidebar 2003: header em Verdana 10px caps, corpo denso.
 */
export default function CaixaSidebar({ titulo, children }) {
  return (
    <section className="caixa-sidebar">
      <h2 className="caixa-sidebar-titulo ui-2003">{titulo}</h2>
      <div className="caixa-sidebar-corpo">{children}</div>
    </section>
  )
}
