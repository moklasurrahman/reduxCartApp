import React from 'react'
import Card from './../../components/card/Card';
import { cartList } from '../../Fackdata';
import './home.scss'
import { useTitle } from './../../Hook';

const Home = () => {
  useTitle('home');

  return (
   
    <section className='home'>
     <div className="container">
     <div className="cardItem content-center grid gap-3 sm:gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">{
        cartList.map((product) => (
          <article key={product.id}>
             <Card product={product}/>
          </article>
        ))
      }
      </div>
     </div>
      
    </section>
  )
}

export default Home