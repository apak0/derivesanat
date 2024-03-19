import React from "react";
import Carousel from "./Carousel";
import "./index.css";

function Container() {
  return (
    <div>
      <div className=" bg-orange-500 flex justify-center items-center">
        <Carousel />
      </div>

      {/* <div className="min-h-screen bg-red-200 flex">
        <div>Box 1</div>
        <div>Box 2</div>
      </div> */}
    </div>
  );
}

export default Container;
