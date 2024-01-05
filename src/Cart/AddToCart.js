import React from 'react';
import {useCart} from 'react-use-cart';

const AddToCart = () => {
    const {
        items,
        isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if(isEmpty)  
       return <h1 className='text-center'>Your Cart Is Empty</h1>

    return (
        <div
        style={{
          backgroundColor: "#1a1a1a", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        > 
        <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {items.map((item,index)=>{
                        console.log("Item Price:",item.price)
                        return (
                        <tr key={index}>
                            <td>
                               <img src={item.img} style={{height:'8rem'}}/>
                            </td>
                            <td>{item.title}</td>
                            <td>Rs. {item.price}</td>
                            <td>Quantity ({item.quantity})</td>
                            <td>
                                <button
                                  className='btn btn-info ms=2'
                                  onClick={() => updateItemQuantity(item.id,item.quantity-1)}
                                >-</button>
                                <button
                                  className='btn btn-info ms=2'
                                  onClick={() => updateItemQuantity(item.id,item.quantity+1)}
                                >+</button>
                                <button
                                  className='btn btn-danger ms-2'
                                  onClick={()=>removeItem(item.id)}
                                >Remove Item</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price : Rs. {cartTotal}</h2>
            </div>
            <div className='col-auto'>
                <button
                 className='btn btn-danger m-2'
                 onClick={()=> emptyCart()}
                >Clear Cart</button>

                <button className='btn btn-primary m-4'>BUY NOW</button>

            </div>
        </div>
        </section>
        </div>
  )
}

export default AddToCart
