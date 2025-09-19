// this is a main main file of project where router, app, css, context all are link in this file
//and that file are conntet link to index.html 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  // Browser Router are use for render for react-router-dom
  <BrowserRouter>
  {/* this tag use for import context file */}
  <AppContextProvider>
    <App />
    </AppContextProvider>
  </BrowserRouter>,
)
