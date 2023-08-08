import React from "react";

const ProductList = ({ index, data: { id, name, src } }) => {
  const mockData = [
    {
      id: 1,
      name: "Aston Martin",
      currency: "1000$",
      version: "vanquish",
      src: "../../Images/mer-amg-or.jpg",
    },
    {
      id: 2,
      name: "Aston Martin",
      currency: "3000$",
      version: "vanquish",
      src: "../../Images/lam-veneno-bl.jpg",
    }
  ];
  return (
    // key = {id}
    <div className="card" > 
      <img className="img" alt="super car" src={mockData.src}/>
      <h6>{mockData.id}</h6>
      <h2>{mockData.name}</h2>
    </div>
  
  )
};

export default ProductList;
