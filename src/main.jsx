import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Header/Header.jsx'
import ContentPage from './Content/Content.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <App/>
  </StrictMode>,
)
