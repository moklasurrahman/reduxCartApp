import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const products = useSelector(state=> state.cartState.cartList)
  return (
<nav class=" border w-auto px-2 sm:px-3 py-0">
  <div class="container flex justify-between">
  <a href="/" class="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" class="h-9 mr-3 sm:h-9" alt="Logo" />
      <span class="text-base hidden md:inline uppercase font-medium">Shopping Cart</span>
  </a>

  <div class="flex md:order-2">
      <span class="text-black font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 uppercase">Cart: {products.length}</span>
  </div>
  <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href='/' class="uppercase block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
     
      <li>
        <Link to='cart' class=" uppercase block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cart</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar