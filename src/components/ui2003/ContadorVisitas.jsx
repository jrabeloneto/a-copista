/**
 * Contador de visitas estilo odômetro — células pretas com dígito
 * claro, borda outset (o bevel involuntário de 2003), número fake.
 */
export default function ContadorVisitas({ valor = '004217', rotulo = 'visitas desde MMXXVI' }) {
  const digitos = valor.split('')
  const legivel = `${Number(valor).toLocaleString('pt-BR')} visitas`
  return (
    <div className="contador">
      <span className="contador-visor" role="img" aria-label={`Contador: ${legivel}`}>
        {digitos.map((digito, i) => (
          <span key={i} className="contador-digito" aria-hidden="true">
            {digito}
          </span>
        ))}
      </span>
      <span className="contador-rotulo ui-2003">{rotulo}</span>
    </div>
  )
}
