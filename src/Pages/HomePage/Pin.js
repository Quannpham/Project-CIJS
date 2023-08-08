import React from "react";

const pin = ({ pinSize, imgSrc, name }) => {
  return (
    <div className={`pin ${pinSize}`}>
      <img
        className="mainPic"
        src={imgSrc}
        alt="test"
      />
      <div className="content">
        <h4>{name}</h4>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  );
};

export default pin;
