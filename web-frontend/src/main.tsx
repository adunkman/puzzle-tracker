import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles/buttons.css'
import App from './App.tsx'

createRoot(document.body!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
