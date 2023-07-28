import React from "react";

const ProductList = ({ index, data: { id, name, src } }) => {
  return (
    <div className="card" key={id}>
      <img className="img" alt="hello world" src={src}/>
      <h6>{id}</h6>
      <h2>{name}</h2>
    </div>
  
  )
};

export default ProductList;
