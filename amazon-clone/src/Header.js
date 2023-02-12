import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
        <img  
            className= 'hdlogo'
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /> 
        <div className='search'>
            <input className='input' type="text"></input>
            <SearchIcon className = "sicon"></SearchIcon>
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
            <div className='navs'>

            </div>
        </div>
    </div>
    
  )
}

export default Header