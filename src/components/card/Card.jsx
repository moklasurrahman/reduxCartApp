import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../../store/cartSlice'
// import { Link } from 'react-router-dom'
import { useEffect } from 'react';


const Card = ({product}) => {
  const dispatch = useDispatch(); //for remove 
  
  const [isInCart, setIsInCart] =useState(false)
  const cartList = useSelector(state=> state.cartState.cartList)//comming everythin from store

  useEffect(()=>{
    const productInCard = cartList.find(item => item.id === product.id);

    if(productInCard){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  })

  return (
    <section className='card'> 
    {/* grid gap-2 lg:grid-cols-3  'for img' object-cover w-full h-48*/}
   <div class="p-3 h-70 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="object-cover w-full h-60" src={product.image} alt="product" />
    <div class="px-0 pb-0">
        
            <h5 class="mt-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
         
        <div class="flex items-center justify-between mt-3">
            <span class="text-1xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
           { isInCart ? (<button onClick={()=> dispatch(remove(product))} class="text-white bg-rose-700 hover:bg-rose-800 focus:ring-2 font-medium rounded-md text-sm px-3 py-1.5 text-center">Remove</button>
) : ( <button onClick={()=> dispatch(add(product))} class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-2 font-medium rounded-md text-sm px-3 py-1.5 text-center">Add To Cart</button>)}
        </div>
    </div>
</div>

    </section>
  )
}

export default Card