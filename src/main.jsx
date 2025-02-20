import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './components/context/StoreContext.jsx'
const basename = "/agro-foods";
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>
)
