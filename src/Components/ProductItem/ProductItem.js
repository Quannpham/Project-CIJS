import React, { useState } from "react";
import ProductRender from "./ProductRender";
import Data from "../../Data/MockData";
import "./ProductItem.css";

const ProductItem = () => {
  const [search, setSearch] = useState("");
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
              brand={data.brand}
              color={data.color}
              price={data.price}
              speed={data.speed}
            />
          ))}
      </div>
      
    </div>
  );
};

export default ProductItem;
