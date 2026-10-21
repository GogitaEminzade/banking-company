import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Careers from './pages/Careers.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <Home/>},
    { path: "careers", element: <Careers/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
