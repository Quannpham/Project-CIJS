import React from 'react'
import ProductRender from './ProductRender'
import Data from "../../Data/MockData";
import "./ProductItem.css"

const ProductItem = () => {
  return (
    <div>
      <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <ProductRender 
              key={data.id} 
              pinSize={data.size} 
              imgSrc={data.imgSrc} 
              name={data.name}
              />
            ))}
        </div>
    </div>
  )
}

export default ProductItem