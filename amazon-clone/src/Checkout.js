import React from 'react'
import './CSS/Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <h1>Shopping Cart</h1>
            <p>No items selected. <p className='items'>Select all items</p></p>
            <p className='price'>Price</p>
            <hr />
            <input type="checkbox" className='check' />
        </div>
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout