import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './main.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

import Component from './Component.tsx'
import Exemple from './Exemple.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/component' element={<Component />} />
      <Route path='/exemple' element={<Exemple/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
