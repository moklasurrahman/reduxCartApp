import React from 'react'
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Erroe from './Erroer';
import Home from './../pages/home/Home';
import Navbar from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
import OrderDetails from './../pages/orderDetails/OrderDetails';


const index = () => {
  return (
    <div>


    <BrowserRouter>

      <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='cart' element={<OrderDetails/>}/>
            <Route path='*' element={<Erroe/>}/>
        </Routes>
       
       <Footer/>
  </BrowserRouter>
    </div>
  )
}

export default index