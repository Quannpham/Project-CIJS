import React, { useEffect, useState } from "react";
import { Masonry } from "masonic";
import ProductList from "../ProductList/ProductList";

const ProductItem = (props) => {
  console.log("props.items: ", props.items)

  return (
    <div className="container-ProductItem">
      <Masonry
        items={props.items}
        columnGutter={30}
        columnWidth={200}
        columnHeight={300}
        overscanBy={10}
        render={ProductList}
      />
    </div>
  );
};

export default ProductItem;
