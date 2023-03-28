import React from 'react'
import { remove } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'

const orderDetailcard = ({product}) => {
  const dispatch = useDispatch()

  return (
    
    <div className='cart shadow grid grid-cols-4 justify-between p-2 my-5'>
        <div><img className="w-36 h-20 object-cover" src={product.image}alt="" /></div>
        <div><p className='font-medium'>{product.name}</p></div>
        <div className='flex m-auto'><span>{product.price}$</span></div>                 
        <div className='flex justify-end'><button onClick={()=>dispatch(remove(product))} className='bg-rose-700 hover:bg-rose-800 text-rose-100 rounded-md py-1 px-3'>Remove</button></div>
    </div>
  )
}

export default orderDetailcard