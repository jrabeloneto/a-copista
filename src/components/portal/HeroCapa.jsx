import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Masthead from './Masthead.jsx'
import { useGsapPagina } from '../../lib/useGsapPagina.js'
import { reduzMotion } from '../../lib/motion.js'

/**
 * A chegada da revista (v2.3): a capa é um CARTAZ PRESO — as letras
 * ocupam a viewport e, no scroll, a folha da revista sobe POR CIMA
 * (.capa-sobreposta no Home). A capa não vira cabeçalho: ela recua
 * um pouco e deriva p/ cima enquanto é coberta. Transform/opacity.
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
            // a capa é sticky — medir o próprio hero mentiria; o
            // gatilho é o scroll absoluto da primeira tela
            trigger: document.body,
            start: 0,
            end: () => window.innerHeight,
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
        .fromTo(
          capa,
          { scale: escala, y: 0 },
          {
            scale: () => escala() * 0.82,
            y: () => -window.innerHeight * 0.3,
            ease: 'none',
            duration: 1,
          },
          0,
        )
        .to('.hero-some, .masthead-edicao', { opacity: 0, ease: 'none', duration: 0.13 }, 0.03)

      // coberta pela folha, a capa larga o view-transition-name —
      // senão um fantasma do A COPISTA voa em navegações fundas
      ScrollTrigger.create({
        trigger: document.body,
        start: () => window.innerHeight * 0.85,
        end: 'max',
        onToggle: (self) => {
          capa.style.viewTransitionName = self.isActive ? 'none' : ''
        },
      })
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
