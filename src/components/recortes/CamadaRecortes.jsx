import { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useGsapPagina } from '../../lib/useGsapPagina.js'
import { reduzMotion } from '../../lib/motion.js'
import { montarTravessias } from '../../data/recortes.js'
import FiguraRecorte from './FiguraRecorte.jsx'

/**
 * Os recortes de revista nas bandas laterais — paralaxe presa ao
 * scroll (pedido do João): cada figura entra por baixo, sobe a tela
 * junto com a rolagem e some pelo topo, cada uma na sua camada de
 * profundidade (tamanho/velocidade/opacidade), como um fundo 3D
 * infinito. Máx. 2 por lado (janelas de scroll que só se sobrepõem
 * duas a duas), sempre fora da coluna de 900px.
 *
 * Scrub, transform/opacity apenas; limites SEMPRE funcionais
 * (a altura da página mente no mount — o ResizeObserver do App
 * dispara refresh e o invalidateOnRefresh recalcula tudo).
 *
 * Reduced-motion: as 4 primeiras figuras fixas nos slots, estáticas.
 */
export default function CamadaRecortes({ deck }) {
  const ref = useRef(null)
  const reduzido = useMemo(() => reduzMotion(), [])
  const itens = useMemo(() => {
    const travessias = montarTravessias(deck)
    return reduzido ? travessias.slice(0, 4) : travessias
  }, [deck, reduzido])

  useGsapPagina(
    () => {
      const total = () =>
        Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const els = ref.current ? Array.from(ref.current.children) : []

      els.forEach((el, i) => {
        const t = itens[i]
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: () => total() * t.faixa[0],
            end: () => total() * t.faixa[1],
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(
          el,
          { y: () => window.innerHeight + 90, x: 0, rotation: t.rot },
          {
            y: () => -(el.offsetHeight + window.innerHeight * 0.12),
            rotation: t.rot + 2.5,
            ease: 'none',
            duration: 1,
          },
          0,
        )
          .fromTo(el, { opacity: 0 }, { opacity: t.opacidade, duration: 0.12, ease: 'none' }, 0)
          .to(el, { opacity: 0, duration: 0.15, ease: 'none' }, 0.85)
      })
    },
    [itens],
    ref,
  )

  return (
    <div ref={ref} className="camada-recortes" aria-hidden="true">
      {itens.map((t, i) => (
        <div
          key={i}
          className={`recorte-figura recorte-${t.lado} ${
            i % 2 ? 'recorte-rasgo-b' : 'recorte-rasgo-a'
          }${reduzido ? ` recorte-fixo-${Math.floor(i / 2) % 2}` : ''}`}
          style={{ width: `calc(var(--larg-recorte) * ${t.escala})` }}
        >
          <span className={`recorte-fita ${i % 2 ? 'recorte-fita-dir' : 'recorte-fita-esq'}`} />
          <FiguraRecorte nome={t.figura} />
        </div>
      ))}
    </div>
  )
}
