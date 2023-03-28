import React from 'react'
// import { products } from '../../Fackdata'
import './orderDetails.scss'
import OrderDetailcard from './../../components/orderDetailsCard/OrderDetailcard';
import { useTitle } from './../../Hook';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
  useTitle('cart');

  const cartList = useSelector(state => state.cartState.cartList) //comming from cartslice and store
  const total = useSelector(state => state.cartState.total) //comming from cartslice and store


  return (
    <section className='OrderDetails'>
        <div className="cartcont">

          <div className="cartTitle mt-10 uppercase font-medium font-s">Total Item: {cartList.length} / ${total}</div>
          <div className="cartsitem my-10">
            {
              cartList.map((product)=>(     
               <article key={product.id}>
                <OrderDetailcard product={product}/>
               </article>
              ))
            }
          </div>
        </div>


    </section>
  )
}

export default OrderDetails