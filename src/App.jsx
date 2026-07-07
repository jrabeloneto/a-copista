import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GrainDefs from './components/GrainDefs.jsx'
import Masthead from './components/portal/Masthead.jsx'
import ReguaEtiquetas from './components/portal/ReguaEtiquetas.jsx'
import Preloader from './components/portal/Preloader.jsx'
import CamadaRecortes from './components/recortes/CamadaRecortes.jsx'
import { DECK_SALAS } from './data/recortes.js'
import { useLenis } from './lib/useLenis.js'
import { reduzMotion } from './lib/motion.js'
import Home from './pages/Home.jsx'
import CodiceIndex from './pages/CodiceIndex.jsx'
import Materia from './pages/Materia.jsx'

// conteúdo primário (capa, códice, matérias) carrega junto;
// as seções e páginas secundárias entram sob demanda
const Album = lazy(() => import('./pages/Album.jsx'))
const Quarto = lazy(() => import('./pages/Quarto.jsx'))
const Discoteca = lazy(() => import('./pages/Discoteca.jsx'))
const Amigas = lazy(() => import('./pages/Amigas.jsx'))
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
  // efeito é o das iluminuras; na home v2 o cartaz JÁ é a colagem
  // inteira — as bandas ficam para os contextos calmos
  const semRecortes =
    pathname.startsWith('/codice') || pathname === '/especime' || pathname === '/'

  // v2: cada rota vive num CONTEXTO (cartaz/livro/mesa/padrão) que
  // define largura e textura — o wrapper carrega a var para a
  // moldura E para as bandas de recortes
  const contexto = pathname === '/' ? 'contexto-cartaz' : 'contexto-padrao'

  return (
    <>
      <GrainDefs />
      <ScrollParaTopo />
      <GraoGlobal />
      <Preloader />
      <div className={contexto}>
      {!semRecortes && <CamadaRecortes key={pathname} deck={DECK_SALAS} />}
      <div className="moldura-site">
        {/* na home o cabeçalho é o HeroCapa (tela cheia que se dobra) */}
        {pathname !== '/' && (
          <>
            <Masthead compacto />
            <ReguaEtiquetas />
          </>
        )}
        <Suspense
          fallback={<p className="ui-2003 carregando-pagina">a copista está molhando a pena…</p>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codice" element={<CodiceIndex />} />
            <Route path="/codice/materia/:slug" element={<Materia />} />
            <Route path="/materia/:slug" element={<RedirecionaMateria />} />
            <Route path="/album" element={<Album />} />
            <Route path="/quarto" element={<Quarto />} />
            <Route path="/discoteca" element={<Discoteca />} />
            <Route path="/amigas" element={<Amigas />} />
            <Route path="/arquivo" element={<Arquivo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/visitas" element={<Visitas />} />
            {/* a prova do impressor da ETAPA 1, guardada nos bastidores */}
            <Route path="/especime" element={<Especime />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
      </div>
    </>
  )
}
