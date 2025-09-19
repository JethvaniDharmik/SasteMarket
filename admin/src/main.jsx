import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import ServicesContextProvider from './context/ServicesContext.jsx'
import AppContextProvider from '../../frontend/src/context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AdminContextProvider>
    <ServicesContextProvider>
      <AppContextProvider>
    <App />
    </AppContextProvider>
    </ServicesContextProvider>
    </AdminContextProvider>
    </BrowserRouter>,
)
