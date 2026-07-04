import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduzMotion } from './motion.js'

gsap.registerPlugin(ScrollTrigger)

// gancho de QA (só no dev): permite auditar vazamento de triggers
// entre trocas de rota — ScrollTrigger.getAll().length deve voltar
// sempre ao baseline da página, nunca crescer monotonicamente
if (import.meta.env.DEV) {
  window.__ScrollTrigger = ScrollTrigger
}

/**
 * Ciclo de vida de motion POR PÁGINA: cria um gsap.context no mount
 * (opcionalmente escopado a um ref), dá refresh nos triggers depois
 * que o DOM da página existe, e REVERTE tudo no unmount — mata
 * ScrollTriggers e desfaz estilos inline, devolvendo o DOM estático.
 * Sem isso, a troca de rota acumula triggers fantasma.
 *
 * Sob prefers-reduced-motion nada é criado: o conteúdo estático já é
 * completo por construção.
 */
export function useGsapPagina(montar, deps = [], escopoRef = null) {
  useEffect(() => {
    if (reduzMotion()) return undefined
    const ctx = gsap.context(montar, escopoRef?.current ?? undefined)
    ScrollTrigger.refresh()
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
