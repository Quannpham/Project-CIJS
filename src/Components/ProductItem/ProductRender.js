import React from 'react'
import Data from "../../Data/MockData";
import "./ProductItem.css"

const ProductRender = ({ pinSize, imgSrc, name, note }) => {
    return (
      <div className={`pin ${pinSize}`}>
        <img
          className="mainPic"
          src={imgSrc}
          alt={note}
        />
        <div className="content">
          <h4>{name}</h4> 
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    );
  };

export default ProductRender