import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ChoicePage from './Components/ChoicePage/ChoicePage'
import Card from './Components/ProductCard/Card'
import ProductPage from './Components/ProductCard/ProductPage'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path="/choice" element={<ChoicePage/>} />
      <Route path="/products" element={<ProductPage />} />
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
