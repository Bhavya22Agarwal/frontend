import React from 'react'
import './CSS/Checkout.css'

function Checkout() {
  return (
    <div>
        <div className='checkout_left'>
            <h1>Shopping Cart</h1>
            <p>No items selected. <p className='items'>Select all items</p></p>
            <p className='price'>Price</p>
            <hr />
        </div>
    </div>
  )
}

export default Checkout