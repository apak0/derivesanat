import React from "react";

function Container() {
  return (
    <div className="min-h-screen bg-red-500 flex flex-col">
      <div className="flex-grow"> {/* Bu kısım Navbar ve Footer'ı engellemeyecek */}
        Container
      </div>
    </div>
  );
}

export default Container;
