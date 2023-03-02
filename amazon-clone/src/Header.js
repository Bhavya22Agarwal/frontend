import React from 'react'
import './CSS/Header.css'
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider' 

function Header() {

  const [{cart}, dispatch] = useStateValue();
    
  return (
    <div className='header'>
        <Link to='/'>
            <img  
                className= 'hdlogo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link> 
        <div className='loc'>
            <img
                src="Assets/location.png" />
            <div className='navs'>
                <span className='one'>Deliver to</span>
                <span className='two'>India</span>
            </div>
        </div>
        <div className='search'>
            <abbr title="search in" className='drp'>All</abbr>
            <img className= "downarrow" src="Assets/downarrow.png" />
            <input className='input' type="text" value="Search Amazon"></input>
            <img
                className='sicon'
                src="Assets/Searchicon.png" alt={"logo"} />
        </div>
        <div className='hdoption'>
            <div className='navs'>
                <span className='one'>Hello,sign in</span>
                <span className='two'>Accounts&Lists</span>
            </div>
            <div className='navs'>
                <span className='one'>Return</span>
                <span className='two'>& Orders</span>
            </div>
            <div className='navs'>
                <span className='one'>Your</span>
                <span className='two'>Prime</span>
            </div>
            <div className='cart'>
                <Link to="/cart">
                    <img src='Assets/Basket.png' />
                </Link>
                <span className='basketcount'>{cart?.length}</span>
            </div>
        </div>
    </div>
    
  )
}

export default Header