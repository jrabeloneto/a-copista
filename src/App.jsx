import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import GrainDefs from './components/GrainDefs.jsx'
import { useLenis } from './lib/useLenis.js'
import Especime from './pages/Especime.jsx'
import Materia from './pages/Materia.jsx'

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
          {/* ETAPA 2: a prova do impressor segue na raiz.
              A capa (frontispício) assume a raiz na ETAPA 3. */}
          <Route path="/" element={<Especime />} />
          <Route path="/materia/:slug" element={<Materia />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}
