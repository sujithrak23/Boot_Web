import React from 'react';
import { useCart } from 'react-use-cart';


const ItemCard = (props) => {

const {addItem} = useCart();

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' >
        <div class='card p-0 overflow-hidden h-100 shadow'>
           <img src={props.img} class='crad-img-top img-fluid'/>
           <div class='card-body'>
            <h5 class='card-title'>{props.title}</h5>
            <p class='card-text'>{props.price}</p>
            <p class='card-text'>{props.desc}</p>
            <button class='btn btn-success' 
            onClick={ () => addItem(props.item)}
            >
                Add To Cart
            </button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;