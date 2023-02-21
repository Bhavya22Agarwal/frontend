import React from 'react'
import './CSS/Product.css'

function Product({title, image, caption}) {
  return (
    <div className='product'>
        <h2>{title}</h2>
        <img src={image} />
        <div>
            <a className="dekho" href='#'>{caption}</a>
        </div>
    </div>
  )
}

export default Product