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

      const escala = () => (window.innerWidth < 700 ? 1.32 : 1.85)
      const descida = () => window.innerHeight * 0.28

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          capa,
          { scale: escala, y: descida },
          { scale: 1, y: 0, ease: 'none', duration: 1 },
          0,
        )
        .to('.hero-some, .masthead-edicao', { opacity: 0, ease: 'none', duration: 0.35 }, 0.3)
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
