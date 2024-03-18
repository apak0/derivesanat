import React from "react";

function Container() {
  return (
    <div>
      <div className="  h-16 bg-yellow-400 ">
        Carausel
      </div>
    
    <div className="min-h-screen bg-red-200 flex">
      <div className="flex-grow px-60 py-36 ">
        <div className="border-4 border-indigo-600 h-full flex flex-wrap">
          <div className="w-10 h-10 border-2 border-yellow-600">Box 1</div>
          <div className="w-10 h-10 border-2 border-yellow-600">Box 2</div>
          <div className="w-10 h-10 border-2 border-yellow-600">Box 3</div>
          <div className="w-10 h-10 border-2 border-yellow-600">Box 4  </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Container;
