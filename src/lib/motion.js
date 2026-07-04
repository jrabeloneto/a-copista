/** Guarda global de motion: quem prefere movimento reduzido recebe
 *  o site inteiro estático (o estado das ETAPAs 1-3). */
export function reduzMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
