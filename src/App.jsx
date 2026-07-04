import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GrainDefs from './components/GrainDefs.jsx'
import Masthead from './components/portal/Masthead.jsx'
import ReguaEtiquetas from './components/portal/ReguaEtiquetas.jsx'
import CamadaRecortes from './components/recortes/CamadaRecortes.jsx'
import { DECK_CAPA, DECK_SALAS } from './data/recortes.js'
import { useLenis } from './lib/useLenis.js'
import { reduzMotion } from './lib/motion.js'
import Home from './pages/Home.jsx'
import CodiceIndex from './pages/CodiceIndex.jsx'
import Materia from './pages/Materia.jsx'
import EmObras from './pages/EmObras.jsx'

// conteúdo primário (capa, códice, matérias) carrega junto;
// as páginas secundárias entram sob demanda
const Arquivo = lazy(() => import('./pages/Arquivo.jsx'))
const Sobre = lazy(() => import('./pages/Sobre.jsx'))
const Visitas = lazy(() => import('./pages/Visitas.jsx'))
const Especime = lazy(() => import('./pages/Especime.jsx'))

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

/** Links antigos do fanzine não quebram: /materia/x → /codice/materia/x */
function RedirecionaMateria() {
  const { slug } = useParams()
  return <Navigate to={`/codice/materia/${slug}`} replace />
}

export default function App() {
  useLenis()
  const { pathname } = useLocation()

  // a altura da página mente no mount (fontes remotas, Suspense de
  // rota preguiçosa, futuras imagens): qualquer mudança de altura do
  // body recalcula os limites de TODOS os triggers (debounced)
  useEffect(() => {
    if (reduzMotion()) return undefined
    let alturaAnterior = document.body.scrollHeight
    let temporizador = null
    const observador = new ResizeObserver(() => {
      const altura = document.body.scrollHeight
      if (altura === alturaAnterior) return
      alturaAnterior = altura
      clearTimeout(temporizador)
      temporizador = setTimeout(() => ScrollTrigger.refresh(), 160)
    })
    observador.observe(document.body)
    return () => {
      clearTimeout(temporizador)
      observador.disconnect()
    }
  }, [])

  // recortes de revista: efeito do PORTAL; dentro do fanzine o
  // efeito é o das iluminuras flutuantes (identidades separadas)
  const semRecortes = pathname.startsWith('/codice') || pathname === '/especime'

  return (
    <>
      <GrainDefs />
      <ScrollParaTopo />
      <GraoGlobal />
      {!semRecortes && (
        <CamadaRecortes key={pathname} deck={pathname === '/' ? DECK_CAPA : DECK_SALAS} />
      )}
      <div className="moldura-site">
        <Masthead compacto={pathname !== '/'} />
        <ReguaEtiquetas />
        <Suspense
          fallback={<p className="ui-2003 carregando-pagina">a copista está molhando a pena…</p>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codice" element={<CodiceIndex />} />
            <Route path="/codice/materia/:slug" element={<Materia />} />
            <Route path="/materia/:slug" element={<RedirecionaMateria />} />
            <Route path="/album" element={<EmObras nome="Álbum de fotos" />} />
            <Route path="/quarto" element={<EmObras nome="O quarto da dona" />} />
            <Route path="/discoteca" element={<EmObras nome="Discoteca" />} />
            <Route path="/amigas" element={<EmObras nome="Amigas & webring" />} />
            <Route path="/arquivo" element={<Arquivo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/visitas" element={<Visitas />} />
            {/* a prova do impressor da ETAPA 1, guardada nos bastidores */}
            <Route path="/especime" element={<Especime />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
