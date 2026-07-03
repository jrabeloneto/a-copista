import Fleuron from './Fleuron.jsx'

/**
 * O <hr> ornamentado da casa: filete — hedera — filete.
 */
export default function Separador({ className = '' }) {
  return (
    <div className={`separador ${className}`} role="separator" aria-orientation="horizontal">
      <span className="separador-linha" aria-hidden="true" />
      <Fleuron width={26} className="separador-fleuron" />
      <span className="separador-linha" aria-hidden="true" />
    </div>
  )
}
