import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GrainDefs from './components/GrainDefs.jsx'
import { useLenis } from './lib/useLenis.js'
import { reduzMotion } from './lib/motion.js'
import Capa from './pages/Capa.jsx'
import Materia from './pages/Materia.jsx'
import Arquivo from './pages/Arquivo.jsx'
import Sobre from './pages/Sobre.jsx'
import Visitas from './pages/Visitas.jsx'
import Especime from './pages/Especime.jsx'

/** Toda troca de rota abre a nova página no topo, como virar a folha.
 *  useLayoutEffect: o scroll precisa acontecer ANTES do snapshot da
 *  View Transition capturar a página nova, senão a virada termina
 *  com um pulo seco para o topo. */
function ScrollParaTopo() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/**
 * O grão do fundo como elemento real (pseudo-elemento não é animável
 * pelo GSAP), com parallax MUITO sutil ao longo da página inteira.
 */
function GraoGlobal() {
  const ref = useRef(null)

  useEffect(() => {
    if (reduzMotion()) return undefined
    const tween = gsap.to(ref.current, {
      yPercent: -3,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'max',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return <div ref={ref} className="grao-global" aria-hidden="true" />
}

export default function App() {
  useLenis()

  // fontes remotas mudam o layout depois do primeiro cálculo dos triggers
  useEffect(() => {
    let vivo = true
    document.fonts?.ready.then(() => {
      if (vivo && !reduzMotion()) ScrollTrigger.refresh()
    })
    return () => {
      vivo = false
    }
  }, [])

  return (
    <>
      <GrainDefs />
      <ScrollParaTopo />
      <GraoGlobal />
      <div className="moldura-site">
        <Routes>
          <Route path="/" element={<Capa />} />
          <Route path="/materia/:slug" element={<Materia />} />
          <Route path="/arquivo" element={<Arquivo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/visitas" element={<Visitas />} />
          {/* a prova do impressor da ETAPA 1, guardada nos bastidores */}
          <Route path="/especime" element={<Especime />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}
