import React, { Fragment, useState } from "react";
import "./NavHome.css";
import MockData from "../../../Data/MockData";
import ProductItem from "../../ProductItem/ProductItem";

const Navigation = (props) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  // const searchList = (event) => {
  //   props.setSearch(event.target.value);
  // };
  
  return (
    <Fragment>
      <div className="container-Nav">
        <div className="head-nav">
          <button className="btn-nav">Trang chủ</button>
          <div
            className="sl-nav-head"
            onClick={() => setIsShowOptions(!isShowOptions)}
          >
            <span className="sl-nav">Chọn</span>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div
            className={`op-nav-head ${
              isShowOptions === true ? "op-nav-head-active" : ""
            }`}
          >
            <div className="op-nav-head-item">Create</div>
            <div className="op-nav-head-item">Update</div>
            <div className="op-nav-head-item">Delete</div>
          </div>
        </div>
        <div className="body-nav">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ cursor: "pointer" }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="input-nav"
          />
          
        </div>
        <div className="foot-nav">
          <i className="fa-regular fa-bell"></i>
          <i class="fa-solid fa-circle-half-stroke"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
