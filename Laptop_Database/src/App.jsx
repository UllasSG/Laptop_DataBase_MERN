import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ChoicePage from './Components/ChoicePage/ChoicePage';
import Card from './Components/ProductCard/Card';
import ProductPage from './Components/ProductCard/ProductPage';
import Login from './Components/Login/Login';
import ContactPage from './Components/Contact/Contact';

function App() {
  const [renderData, setRenderData] = useState([]);

  const getData = (Laptopdata) => {
    setRenderData(Laptopdata);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="/choice" element={<ChoicePage handleSub={getData} />} />
        <Route path="/products" element={<ProductPage render={renderData} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
