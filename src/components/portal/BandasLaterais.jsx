import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduzMotion } from '../../lib/motion.js'
import { LAMBE_ESQ, LAMBE_DIR } from '../../data/avisos.js'
import Botao88x31 from '../ui2003/Botao88x31.jsx'

/**
 * As paredes das bandas laterais (pedido do João: preencher as
 * "bordas pretas" — e que NUNCA fiquem vazias ao rolar):
 * - a GAVINHA de manuscrito (flores de rubrica, bagas douradas) é a
 *   espinha CONTÍNUA em TODA página — a corda que sempre preenche a
 *   lateral; deriva devagar;
 * - no cartaz, o LAMBE-LAMBE (avisos, selos, carimbos) viaja POR
 *   CIMA da gavinha, entrando por baixo e sumindo pelo topo.
 * Camada fixed decorativa (aria-hidden, sem pointer); só aparece
 * quando há banda de verdade (media ≥1600). Os recortes femininos
 * viajam por cima de tudo.
 */
function Gavinha({ espelho = false }) {
  return (
    <svg
      viewBox="0 0 110 860"
      preserveAspectRatio="xMidYMin meet"
      className="gavinha"
      style={espelho ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="var(--brown)" strokeWidth="2" strokeLinecap="round" filter="url(#tinta-irregular)">
        {/* o caule serpenteando */}
        <path d="M58 860 C40 800 76 750 54 690 C36 640 74 590 56 530 C40 480 76 430 58 370 C42 320 76 270 56 210 C40 160 72 110 56 50 C50 28 58 10 54 0" />
        {/* gavinhas em voluta */}
        <path d="M55 760 C38 754 30 736 36 720 C41 708 56 706 60 718" strokeWidth="1.6" />
        <path d="M60 560 C78 554 86 536 80 520 C75 508 60 506 56 518" strokeWidth="1.6" />
        <path d="M57 330 C39 324 31 306 37 290 C42 278 57 276 61 288" strokeWidth="1.6" />
        <path d="M58 130 C76 124 84 106 78 90 C73 78 58 76 54 88" strokeWidth="1.6" />
        {/* folhas de hera */}
        <path d="M56 660 C44 652 42 636 52 630 C62 624 72 634 68 646 Z" fill="var(--brown)" stroke="none" />
        <path d="M58 440 C70 432 72 416 62 410 C52 404 42 414 46 426 Z" fill="var(--brown)" stroke="none" />
        <path d="M54 190 C42 182 40 166 50 160 C60 154 70 164 66 176 Z" fill="var(--brown)" stroke="none" />
      </g>
      {/* flores de rubrica e bagas douradas */}
      <g filter="url(#tinta-irregular)">
        <circle cx="36" cy="718" r="7" fill="var(--red-rubric)" />
        <circle cx="80" cy="518" r="7" fill="var(--red-rubric)" />
        <circle cx="37" cy="288" r="6" fill="var(--red-rubric)" />
        <circle cx="78" cy="88" r="6" fill="var(--gold-muted)" />
        <circle cx="66" cy="640" r="3" fill="var(--gold-muted)" />
        <circle cx="48" cy="420" r="3" fill="var(--gold-muted)" />
        <circle cx="62" cy="170" r="3" fill="var(--gold-muted)" />
      </g>
    </svg>
  )
}

function PecaLambe({ peca }) {
  if (peca.tipo === 'selo') {
    return (
      <span className="lambe-peca lambe-selo">
        <Botao88x31 titulo={peca.titulo} subtitulo={peca.subtitulo} variante={peca.variante} />
      </span>
    )
  }
  if (peca.tipo === 'carimbo') {
    return <span className="lambe-peca lambe-carimbo">{peca.texto}</span>
  }
  return <span className="lambe-peca lambe-aviso">{peca.texto}</span>
}

export default function BandasLaterais({ contexto }) {
  const ref = useRef(null)

  // Motion das bandas (2ª rodada de feedback do João: as peças
  // "se comprimiam" — agora DISPERSAM): os avisos do lambe fazem
  // TRAVESSIA completa (entram por baixo, cruzam a banda e somem
  // pelo topo, em janelas de scroll escalonadas — sempre chega coisa
  // nova). As gavinhas são flora de fundo e só derivam devagar.
  useEffect(() => {
    if (reduzMotion() || !ref.current) return undefined
    const ctx = gsap.context(() => {
      const total = () =>
        Math.max(1, document.documentElement.scrollHeight - window.innerHeight)

      gsap.utils.toArray('.gavinha').forEach((el, i) => {
        gsap.set(el, { y: 60 })
        gsap.to(el, {
          y: -60,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 0, end: total, scrub: 1 + i * 0.4 },
        })
      })
      ;['.banda-esq', '.banda-dir'].forEach((ladoSel, ladoIdx) => {
        const pecas = gsap.utils.toArray(`${ladoSel} .lambe-peca`)
        const n = Math.max(1, pecas.length)
        pecas.forEach((el, i) => {
          const rot = (i % 2 ? 2.6 : -3.2) + ladoIdx * 0.6
          const inicio = (((i + ladoIdx * 0.5) % n) / n) * 0.88
          const fim = Math.min(inicio + 0.42, 1.04)
          gsap
            .timeline({
              scrollTrigger: {
                trigger: document.body,
                start: () => total() * inicio,
                end: () => total() * fim,
                scrub: 0.7 + (i % 3) * 0.3,
              },
            })
            .fromTo(
              el,
              { y: () => window.innerHeight + 60, rotation: rot, x: 0 },
              {
                y: () => -(el.offsetHeight + window.innerHeight * 0.08),
                rotation: rot + (ladoIdx ? -2 : 2),
                x: ladoIdx ? -10 : 10,
                ease: 'none',
                duration: 1,
              },
              0,
            )
            .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.12, ease: 'none' }, 0)
            .to(el, { opacity: 0, duration: 0.14, ease: 'none' }, 0.86)
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [contexto])

  if (contexto !== 'contexto-cartaz' && contexto !== 'contexto-livro') return null
  const ehCartaz = contexto === 'contexto-cartaz'

  return (
    <div
      ref={ref}
      className={`bandas ${ehCartaz ? 'bandas-cartaz' : 'bandas-livro'}`}
      aria-hidden="true"
    >
      <div className="banda-parede banda-esq">
        <Gavinha />
        {ehCartaz && LAMBE_ESQ.map((peca, i) => <PecaLambe key={i} peca={peca} />)}
      </div>
      <div className="banda-parede banda-dir">
        <Gavinha espelho />
        {ehCartaz && LAMBE_DIR.map((peca, i) => <PecaLambe key={i} peca={peca} />)}
      </div>
    </div>
  )
}
