import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TelaInicial from './TelaInicial/TelaInicial'


const rotas = createBrowserRouter([
  {

    path: '/',
    element: <TelaInicial/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)
