import React from 'react'
import "./CSS/Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <img
                className='image' src= "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="" />
        </div>
        <div className='homerow'>
          <Product title='Easy Return' image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" caption='Learn more'/>
          <Product title='Computers & Accessories' image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg" caption='Shop now'/>
          <Product title='Dresses' image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg" caption='Shop now'/>
          <Product title='Get fit at home' image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" caption='Explore now'/>
        </div>
        <div className='homerow'>
          <Product title='Electronics' image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg" caption='See more'/>
          <Product title='Get fit at home' image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" caption='Explore now'/>
          <Product title='Easy Return' image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" caption='Learn more'/>
          <Product title='Beauty Picks' image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg" caption='Shop now'/>
        </div>
        <div className='homerow'>
          <Product title='Get fit at home' image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" caption='Explore now'/>
        </div>
    </div>
  )
}

export default Home