import React from 'react'
import './CSS/Nav.css'

function Nav() {
  return (
    <div className='navbar'>
        <img className='navimg' src="Assets/menu.png" />
        <span className='navmenu'>All</span>
        <span className='navoption'>Today's Deals</span>
        <span className='navoption'>Customer Service</span>
        <span className='navoption'>Registry</span>
        <span className='navoption'>Gift Card</span>
        <span className='navoption'>Sell</span>
        <span className='rightnav'>Shop great deals now</span>
    </div>
  )
}

export default Nav