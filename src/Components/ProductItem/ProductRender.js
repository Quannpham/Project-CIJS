import React from "react";
import Data from "../../Data/MockData";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductRender = ({
  pinSize,
  imgSrc,
  name,
  note,
  brand,
  id,
  color,
  price,
  speed,
}) => {
  // const toProductDetailPage = `/products/${id}`;

  return (
    <div className={`pin ${pinSize}`}>
      <Link to={imgSrc}>
        <img className="mainPic" src={imgSrc} alt={note} />
      </Link>
      <div className="content">
        <h4>
          {name}
          <br />
          {brand}
          <br />
          {color}
          <br />
          {price}$<br />
          {speed}: km/h
        </h4>
      </div>
    </div>
  );
};

export default ProductRender;
