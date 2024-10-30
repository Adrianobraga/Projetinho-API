import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Componentes/App/App'
import "./index.css"
import 'alertifyjs/build/css/alertify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
