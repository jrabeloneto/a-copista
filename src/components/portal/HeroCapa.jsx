import { useRef } from 'react'
import gsap from 'gsap'
import Masthead from './Masthead.jsx'
import { useGsapPagina } from '../../lib/useGsapPagina.js'
import { reduzMotion } from '../../lib/motion.js'

/**
 * A chegada da revista: as letras de recorte ocupam a viewport
 * (grandes, centradas) e se dobram no masthead normal conforme o
 * scroll — a capa vira cabeçalho e a revista abre. Sticky + scrub
 * sobre ~48svh extras; transform/opacity apenas.
 * Reduced-motion: masthead normal, sem palco.
 */
export default function HeroCapa() {
  const ref = useRef(null)

  useGsapPagina(
    () => {
      const capa = ref.current?.querySelector('.masthead')
      if (!capa) return

      // v2.2: capa em tela cheia — as letras miram ~84% da largura
      // da janela (medida real do masthead; o refresh pós-fontes
      // recalcula via invalidateOnRefresh), com teto de escala
      const escala = () => {
        const estreito = window.innerWidth < 700
        const larg = capa.offsetWidth || 500
        const alvo = estreito ? 0.92 : 0.84
        return gsap.utils.clamp(1.02, estreito ? 1.4 : 2.2, (window.innerWidth * alvo) / larg)
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: () => '+=' + window.innerHeight * 0.6,
            scrub: 0.5,
            invalidateOnRefresh: true,
            // parado em progress 0 o scrub NÃO re-renderiza o valor
            // invalidado (a escala ficava presa na medida da fonte
            // fallback) — um tique de progresso força a reaplicação
            onRefresh: (self) => {
              if (self.animation) {
                self.animation.progress(1e-4, true).progress(self.progress, true)
              }
            },
          },
        })
        .fromTo(capa, { scale: escala }, { scale: 1, ease: 'none', duration: 1 }, 0)
        .to('.hero-some, .masthead-edicao', { opacity: 0, ease: 'none', duration: 0.5 }, 0.25)
    },
    [],
    ref,
  )

  if (reduzMotion()) {
    return <Masthead />
  }

  return (
    <div className="hero-capa" ref={ref}>
      <div className="hero-palco">
        <Masthead />
        <p className="hero-some hero-dica ui-2003" aria-hidden="true">
          ¶ role para abrir a revista ¶
        </p>
      </div>
    </div>
  )
}
