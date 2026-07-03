import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// CSS globais ANTES do App: garante a ordem da cascata
// (tokens → base → ornamentos → css de página, que os componentes importam)
import './styles/tokens.css'
import './styles/base.css'
import './styles/ornamentos.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
