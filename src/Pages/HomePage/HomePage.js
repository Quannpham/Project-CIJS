import React, { Fragment, useEffect, useState } from "react";
import Filter from "../../Components/Header/Filter/Filter";
import Navigation from "../../Components/Header/Nav/NavHome";
import ProductItem from "../../Components/ProductItem/ProductItem";
import MockData from "../../Data/MockData";


const HomePage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    
  };

  console.log("search: ", search);

  // useEffect(()=>{
  //   let i = 0;
  //   const images = Array.from(Array(50), () => {
  //     const randomPhoto = Math.floor(Math.random() * 20) + 1;
  //     const randomHeight = Math.floor(Math.random() * 5) + 2;
  //     const randomWidth = Math.floor(Math.random() * 5) + 2;
  //     const imgUrl = ``;
  //     // https://picsum.photos/${randomWidth}00/${randomHeight}00?random=${randomPhoto}
  //     // console.log(imgUrl);
  //     // https://ipfs.filebase.io/ipfs/QmZNuGJK9yDtazoeTbmoRYuDagNjA3y8L1ni7E2oJRDpM2
  //     // https://ipfs.filebase.io/ipfs/QmU6HYGV2iiwgPJ64dBaoDJeMisU5nrJz9jGqVrNUbfTER/a-r6.png
  //     // https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/a-r1.png?alt=media&token=b0bc460d-c461-4a98-b575-c7212f10e443
  //     // return {
  //     //   // id: i++,
  //     //   // name: `Img-title-${i}`,
  //     //   // src: imgUrl,
  //     // };
  //   });
  //   setItems(images);
  // }, [])

  // useEffect(() => {
  //   if (search.length != 0) {
  //     const result = items.map((item) => item.name.includes(search));

  //     console.log(result);
  //     setSearch(result);
  //   }
  // }, [search]);

  return (
    <Fragment>
      <div>
        <Navigation/>
        <Filter />
        <ProductItem />
      </div>
    </Fragment>
  );
};

export default HomePage;
