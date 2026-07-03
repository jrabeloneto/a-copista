import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import GrainDefs from './components/GrainDefs.jsx'
import { useLenis } from './lib/useLenis.js'
import Capa from './pages/Capa.jsx'
import Materia from './pages/Materia.jsx'
import Arquivo from './pages/Arquivo.jsx'
import Sobre from './pages/Sobre.jsx'
import Visitas from './pages/Visitas.jsx'
import Especime from './pages/Especime.jsx'

/** Toda troca de rota abre a nova página no topo, como virar a folha. */
function ScrollParaTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useLenis()

  return (
    <>
      <GrainDefs />
      <ScrollParaTopo />
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
