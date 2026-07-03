import { Routes, Route } from 'react-router-dom'
import GrainDefs from './components/GrainDefs.jsx'
import { useLenis } from './lib/useLenis.js'
import Especime from './pages/Especime.jsx'

export default function App() {
  useLenis()

  return (
    <>
      <GrainDefs />
      <div className="moldura-site">
        <Routes>
          {/* ETAPA 1: a prova do impressor ocupa a raiz.
              A capa (frontispício) assume a raiz na ETAPA 3. */}
          <Route path="/" element={<Especime />} />
        </Routes>
      </div>
    </>
  )
}
