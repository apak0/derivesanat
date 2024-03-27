import React from "react";
import Carousel from "./Carousel";
import ExpandableCard from "../../components/Card/ExpandableCard "; // Yeni bileşenin import edilmesi
import "./index.css";
import Products from "../pages/products/Products";

function Container() {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <Carousel />
      </div>
      {/* Products */}
      <Products/>
    </div>
  );
}

export default Container;
