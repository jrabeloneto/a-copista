import { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapPagina } from '../../lib/useGsapPagina.js'
import { reduzMotion } from '../../lib/motion.js'
import { montarAparicoes } from '../../data/recortes.js'
import FiguraRecorte from './FiguraRecorte.jsx'

/**
 * Os recortes de revista nas bandas laterais — o efeito do PORTAL
 * (dentro do fanzine /codice o efeito é o das iluminuras).
 *
 * Cada figura tem uma faixa de scroll: cola ao entrar (opacity +
 * rotação assentando), descola ao sair — máx. 2 por lado, sempre
 * fora da coluna de 900px. Aparições discretas, não scrub.
 * Transform/opacity apenas; triggers morrem com o contexto da página.
 *
 * Reduced-motion: só a onda 0, estática (o CSS deixa visível; é o
 * GSAP quem esconde no mount quando há motion).
 * Página curta (rolagem < 300px): só a onda 0, colada na chegada.
 */
export default function CamadaRecortes({ deck }) {
  const ref = useRef(null)

  const aparicoes = useMemo(() => {
    const todas = montarAparicoes(deck)
    return reduzMotion() ? todas.filter((a) => a.onda === 0) : todas
  }, [deck])

  useGsapPagina(
    () => {
      const total = () =>
        Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const els = ref.current ? Array.from(ref.current.children) : []

      els.forEach((el, i) => {
        const a = aparicoes[i]

        gsap.set(el, { opacity: 0, y: 36, x: 0, rotation: a.rot + 7 })

        const colar = () =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: a.rot,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        const descolar = (direcao) =>
          gsap.to(el, {
            opacity: 0,
            y: -40 * direcao,
            x: a.lado === 'esq' ? -24 : 24,
            rotation: a.rot - 8,
            duration: 0.35,
            ease: 'power1.in',
            overwrite: 'auto',
          })

        // "página curta" NÃO pode ser decidido no mount (as fontes
        // ainda não carregaram e a altura mente) — os limites são
        // funções que resolvem o caso curto dinamicamente e se
        // recalculam a cada refresh (fonts.ready, resize):
        // curta → onda 0 sempre ativa (-1), demais ondas nunca.
        const inicio = () => {
          const t = total()
          if (t < 300) return a.onda === 0 ? -1 : 99999999
          return t * a.faixa[0]
        }
        const fim = () => {
          const t = total()
          if (t < 300) return a.onda === 0 ? 99999998 : 99999999
          return t * a.faixa[1]
        }

        const st = ScrollTrigger.create({
          trigger: document.body,
          start: inicio,
          end: fim,
          invalidateOnRefresh: true,
          onEnter: colar,
          onEnterBack: colar,
          onLeave: () => descolar(1),
          onLeaveBack: () => descolar(-1),
        })

        // já dentro da faixa na chegada (página curta ou reload no meio)
        if (st.isActive) colar()
      })
    },
    [aparicoes],
    ref,
  )

  return (
    <div ref={ref} className="camada-recortes" aria-hidden="true">
      {aparicoes.map((a, i) => (
        <div
          key={i}
          className={`recorte-figura recorte-${a.lado} recorte-slot-${a.slot} ${
            i % 2 ? 'recorte-rasgo-b' : 'recorte-rasgo-a'
          }`}
        >
          <span className={`recorte-fita ${i % 2 ? 'recorte-fita-dir' : 'recorte-fita-esq'}`} />
          <FiguraRecorte nome={a.figura} />
        </div>
      ))}
    </div>
  )
}
