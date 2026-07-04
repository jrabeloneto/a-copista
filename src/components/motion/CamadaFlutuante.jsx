import { useRef } from 'react'
import gsap from 'gsap'
import ArteFlutuante from './ArteFlutuante.jsx'
import { useGsapPagina } from '../../lib/useGsapPagina.js'

/**
 * O efeito central do CÓDICE: iluminuras que entram por baixo,
 * atravessam a tela com parallax e se dissolvem pelo topo, guiadas
 * pelo scroll (scrub). Camada fixed, pointer-events none; a
 * legibilidade vem do blend por item (sépia/multiply só aparece
 * sobre pergaminho; creme/screen só sobre o escuro).
 *
 * Regras de performance: transform + opacity APENAS (nenhum filter
 * animado — ver design doc da ETAPA 4); um trigger por item;
 * will-change nos itens. Tudo morre com o contexto da página.
 *
 * Item: { arte, tamanho(px), x('%'), progresso(0-1), rotacao(°),
 *         tinta('sepia'|'creme'), opacidade, deriva(px), fator, letra }
 */
export default function CamadaFlutuante({ itens, escondeMobile = false }) {
  const ref = useRef(null)

  useGsapPagina(
    () => {
      const els = ref.current ? Array.from(ref.current.children) : []
      els.forEach((el, i) => {
        const item = itens[i]
        const total = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
        const inicio = () => total() * item.progresso
        // clampa ao scroll restante: em páginas curtas o item cruza
        // mais depressa, mas SEMPRE completa a travessia (span mínimo
        // de 1px degenera para "invisível" quando não há scroll)
        const percurso = () =>
          Math.max(1, Math.min(window.innerHeight * (item.fator ?? 1.6), total() - inicio()))

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: inicio,
            end: () => inicio() + percurso(),
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(
          el,
          { y: () => window.innerHeight + 120, rotation: item.rotacao ?? 0, x: 0 },
          {
            y: () => -window.innerHeight * 0.55 - 220,
            rotation: (item.rotacao ?? 0) + 3,
            x: item.deriva ?? 40,
            ease: 'none',
            duration: 1,
          },
          0,
        )
          .fromTo(el, { opacity: 0 }, { opacity: item.opacidade ?? 0.7, duration: 0.16, ease: 'none' }, 0)
          .to(el, { opacity: 0, duration: 0.26, ease: 'none' }, 0.74)
      })
    },
    [itens],
    ref,
  )

  return (
    <div
      ref={ref}
      className={escondeMobile ? 'camada-flutuante camada-esconde-mobile' : 'camada-flutuante'}
      aria-hidden="true"
    >
      {itens.map((item, i) => (
        <div
          key={i}
          className={`flutuante flutuante-${item.tinta}`}
          style={{ width: item.tamanho, left: item.x }}
        >
          <ArteFlutuante nome={item.arte} letra={item.letra} />
        </div>
      ))}
    </div>
  )
}
