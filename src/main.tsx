import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize Beam Analytics
const beamToken = import.meta.env.VITE_BEAM_TOKEN
if (beamToken) {
  const script = document.createElement('script')
  script.src = 'https://beamanalytics.b-cdn.net/beam.min.js'
  script.setAttribute('data-token', beamToken)
  script.async = true
  document.head.appendChild(script)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
