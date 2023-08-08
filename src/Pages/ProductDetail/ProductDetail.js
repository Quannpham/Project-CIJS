import React, { useState } from 'react'
import Navigation from '../../Components/Header/Nav/Nav'
import "./ProductDetail.css"
import ProductItem from "../../Components/ProductItem/ProductItem";

const ProductDetail = () => {
  const [item, setItems] = useState([]);
  return (
    <div>
      <Navigation />
      <div className="circle">
        <i class="fa-sharp fa-solid fa-arrow-left"></i>
      </div>
      <div className="product">
        <div className='item-img'>
          
        </div>
        <div className='item-detail'>

        </div>
      </div>
      
    </div> 
  )
}

export default ProductDetail