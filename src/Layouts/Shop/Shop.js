import React from 'react'
import './Shop.css';

const Shop = () => {
  return (
    <section className='HomePageShop'>
        <div className="ShopLeft">
            <img className="img1Shop" src="https://s.pinimg.com/webapp/shop-bd0c8a04.png" alt='avt'/>
            <img className="img2Shop" src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png" alt='avt' />
            <img className="img3Shop" src="https://s.pinimg.com/webapp/creator-avatar-d7a05622.png" alt='avt'/>
        </div>
        <div className="ShopRight">
            <h1 className="content4"> See it, make it, try it, do it </h1>
            <h4 className="content5"> The best part of Pinterest is discovering new things and ideas from people around the world. </h4>
            <h4 className="explore2"> Explore</h4>
            </div>
    </section>
  )
}

export default Shop
