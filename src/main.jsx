import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Beranda from './pages/beranda'
import Saran from './pages/saran'
import Konversi from './pages/konversi'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Beranda />
  },
  {
    path: "/konversi",
    element: <Konversi />
  },
  {
    path: "/saran",
    element: <Saran />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
