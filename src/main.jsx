import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './comp1.jsx'
import Comp2 from './Comp2.jsx'
import Pag1 from './pag1.jsx'
import Saludo from './Saludo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Pag1 />

  </StrictMode>,
)
