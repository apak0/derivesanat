import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-${scrolled ? "blue" : "yellow"}-200 h-12 flex items-center justify-between fixed w-full border-b-2 border-gray-900 ${
        scrolled ? "border-opacity-100" : "border-opacity-50"
      }`}
    >
      <div className="logo bg-purple-200 flex justify-center items-center w-24">
        Logo
      </div>
      <div className="siteName bg-green-500 flex justify-center items-center w-40">
        Deri Ve Sanat
      </div>
      <div className="menü flex items-center justify-center items-center">
        <div className="product bg-gray-200">Ürünler</div>
        <div className="product bg-gray-200">Ürünler</div>
        <div className="product bg-gray-200">Ürünler</div>
      </div>
    </div>
  );
}

export default Navbar;
