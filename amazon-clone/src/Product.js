import React from 'react'
import './CSS/Product.css'
import {useStateValue} from './StateProvider' 

function Product({title, image, caption}) {
  const [{cart},dispatch] = useStateValue();

  console.log("this is the basket", cart)

  const addToCart = () =>{
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        image: image,
      },
    });
  }

  return (
    <div className='product'>
        <h2>{title}</h2>
        <img src={image} />
        <div>
            <button onClick={addToCart}>{caption}</button>
        </div>
    </div>
  )
}

export default Product