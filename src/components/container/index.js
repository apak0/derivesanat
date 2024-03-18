import React from "react";
import Carousel from "./Carousel";

function Container() {
  return (
    <div>
      <div className=" bg-orange-200 py-10 ">
        <Carousel />
      </div>

      <div className="min-h-screen bg-red-200 flex">
        <div>Box 1</div>
        <div>Box 2</div>
      </div>
    </div>
  );
}

export default Container;
