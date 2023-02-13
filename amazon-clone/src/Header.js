import React from 'react'
import './CSS/Header.css'

function Header() {
  return (
    <div className='header'>
        <img  
            className= 'hdlogo'
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /> 
        <div className='search'>
            <input className='input' type="text"></input>
            <img
                className='sicon'
                src="Assets/Searchicon.png" alt={"logo"} />
        </div>
        <div className='navbar'>
            <div className='navs'>
                <span className='one'>Hello</span>
                <span className='two'>Sign In</span>
            </div>
            <div className='navs'>
                <span className='one'>Return</span>
                <span className='two'>Orders</span>
            </div>
            <div className='navs'>
                <span className='one'>Your</span>
                <span className='two'>Prime</span>
            </div>
            <div className='cart'>
                <img src='Assets/Basket.png' />
                <span className='basketcount'>0</span>
            </div>
        </div>
    </div>
    
  )
}

export default Header