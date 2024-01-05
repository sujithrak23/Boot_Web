import React from 'react';
import ItemCard from './ItemCard';
import DataCart from './DataCart';

export default function HomeCart() {
  return (
    <>
    <div
        style={{
          backgroundColor: "#1a1a1a", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        > 
      <h1 className='text-center mt-3'>All Items</h1>
      <section className='py-4 container'>
        <div className='row-justify-content-center'>
          {DataCart.productData.map((item,index)=>{
            return(
              <ItemCard 
              img={item.img} 
              title={item.title} 
              desc={item.desc} 
              price={item.price} 
              item={item}
              key={index}
              />
            )
          })}
        </div>
      </section>
      </div>
    </>
  )
}
