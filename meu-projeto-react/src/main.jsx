import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// coraçao-entrada- é o primeiro arquivo a ser lido - ele faz  a ponte entre o React e o Html real (index.html)
//ligar motor do carro.