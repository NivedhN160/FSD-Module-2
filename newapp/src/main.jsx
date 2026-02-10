import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Variable from './Variable.jsx'
import Usestateexample from './Usestateexample.jsx'
import Propexample from './Propexample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Propexample />
  </StrictMode>,
)