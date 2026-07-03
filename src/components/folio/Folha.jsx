import MolduraIluminada from './MolduraIluminada.jsx'

/**
 * Uma folha de pergaminho do códice.
 * - lado: 'recto' (fólio à direita, margem externa direita) ou
 *   'verso' (espelhado) — como num livro aberto.
 * - variante 1-3: recorte de borda, mancha e vinheta próprios,
 *   para que nenhuma folha seja clone de outra.
 * O envelope carrega a sombra seca como pseudo-elemento recortado
 * (box-shadow seria clipado; drop-shadow travava o compositor).
 */
export default function Folha({ rotulo, lado, variante, children }) {
  return (
    <div className={`folha-envelope folha-envelope-v${variante}`}>
      <section className={`folha pergaminho folha-${lado} folha-v${variante}`}>
        <span className="folha-folio" aria-hidden="true">
          {rotulo}
        </span>
        <MolduraIluminada />
        <div className="folha-conteudo">{children}</div>
      </section>
    </div>
  )
}
