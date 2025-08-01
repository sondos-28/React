import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Details from './components/Details/Details'
import Notfound from './components/Notfound/Notfound'


function App() {
  const routes = createBrowserRouter ([
    {path: '/', element: <Layout></Layout>, children: [
      {index: true, element: <Home></Home>},
      {path: '/products', element: <Products></Products>},
      {path: '/details/:id', element: <Details></Details>},
      {path: '*', element: <Notfound></Notfound>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;