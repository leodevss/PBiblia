import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TelaInicial from './TelaInicial/TelaInicial'
import TelaLivros from './Biblia/TelaLivros/TelaLivros'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <TelaInicial/>
  },
  {
    path: "/biblia/livros",
    element: <TelaLivros/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)