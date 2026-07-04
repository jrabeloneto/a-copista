/**
 * Coreografia das imagens flutuantes, página a página.
 * progresso = fração da altura rolável onde o item começa a entrar;
 * fator = quantas viewports de scroll o item leva para atravessar
 * (maior = mais lento = camada "mais distante" no parallax).
 *
 * Capa e secundárias são CONSTANTES de módulo: identidade estável
 * entre renders, para o contexto GSAP da camada nunca ser recriado
 * à toa. A matéria é parametrizada por slug e memoizada no call site.
 */

const ARTE_DA_MATERIA = {
  'leila-diniz': { arte: 'sol', letra: 'L' },
  'boutique-biba': { arte: 'pavao', letra: 'B' },
  'menestreis-eletricos': { arte: 'alaude', letra: 'M' },
}

export const FLUTUANTES_CAPA = [
  { arte: 'fleuron', tamanho: 200, x: '5%', progresso: 0.02, rotacao: -3, tinta: 'creme', opacidade: 0.34, deriva: 55, fator: 1.9 },
  { arte: 'brasao', tamanho: 250, x: '76%', progresso: 0.18, rotacao: 2.5, tinta: 'creme', opacidade: 0.3, deriva: -45, fator: 1.6 },
  { arte: 'capitular', letra: 'C', tamanho: 190, x: '10%', progresso: 0.42, rotacao: -2, tinta: 'creme', opacidade: 0.3, deriva: 35, fator: 1.5 },
  { arte: 'manicule', tamanho: 330, x: '64%', progresso: 0.58, rotacao: -4, tinta: 'creme', opacidade: 0.26, deriva: -65, fator: 2.1 },
  { arte: 'caracol', tamanho: 220, x: '28%', progresso: 0.78, rotacao: 3, tinta: 'creme', opacidade: 0.32, deriva: 40, fator: 1.6 },
]

export const FLUTUANTES_SECUNDARIAS = [
  { arte: 'fleuron', tamanho: 180, x: '6%', progresso: 0.05, rotacao: -3, tinta: 'creme', opacidade: 0.3, deriva: 40, fator: 1.7 },
  { arte: 'caracol', tamanho: 200, x: '74%', progresso: 0.4, rotacao: 2.5, tinta: 'creme', opacidade: 0.28, deriva: -40, fator: 1.6 },
  { arte: 'flor', tamanho: 160, x: '12%', progresso: 0.72, rotacao: 3, tinta: 'creme', opacidade: 0.3, deriva: 30, fator: 1.5 },
]

export function flutuantesDaMateria(slug) {
  const tema = ARTE_DA_MATERIA[slug] ?? ARTE_DA_MATERIA['leila-diniz']
  return [
    { arte: tema.arte, tamanho: 430, x: '55%', progresso: 0.06, rotacao: 2, tinta: 'sepia', opacidade: 0.5, deriva: -50, fator: 2 },
    { arte: 'fleuron', tamanho: 230, x: '3%', progresso: 0.26, rotacao: -3.5, tinta: 'sepia', opacidade: 0.42, deriva: 45, fator: 1.6 },
    { arte: 'manicule', tamanho: 300, x: '72%', progresso: 0.46, rotacao: -2, tinta: 'creme', opacidade: 0.24, deriva: -55, fator: 1.8 },
    { arte: 'capitular', letra: tema.letra, tamanho: 180, x: '6%', progresso: 0.64, rotacao: 2.5, tinta: 'sepia', opacidade: 0.45, deriva: 30, fator: 1.5 },
    { arte: 'flor', tamanho: 190, x: '82%', progresso: 0.84, rotacao: 3, tinta: 'creme', opacidade: 0.28, deriva: -35, fator: 1.6 },
  ]
}
