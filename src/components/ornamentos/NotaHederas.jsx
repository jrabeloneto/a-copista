import Fleuron from './Fleuron.jsx'

/**
 * A nota da casa: 1 a 5 hederas (nunca estrelas). As cheias na cor
 * do contexto; as vazias, apagadas. Leitores de tela ouvem o número.
 */
export default function NotaHederas({ nota, de = 5 }) {
  return (
    <span className="nota-hederas">
      <span className="visualmente-oculto">{`nota: ${nota} de ${de} hederas`}</span>
      {Array.from({ length: de }, (_, i) => (
        <span
          key={i}
          className={i < nota ? 'hedera-cheia' : 'hedera-vazia'}
          aria-hidden="true"
        >
          <Fleuron width={15} />
        </span>
      ))}
    </span>
  )
}
