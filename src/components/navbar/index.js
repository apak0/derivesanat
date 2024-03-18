import React, { useState, useEffect } from "react";
import styles from "./index.css";

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
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="w-full mx-auto px-4 ">
        <div className="flex justify-around items-center ">
          <div className="flex-shrink-0">
            <div className="text-white font-bold text-2xl">
              <img
                className="w-full h-20 object-cover object-center rounded-full"
                src={require("./leather_logo.jpg")}
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-auto space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Ürünler
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Hakkımızda
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
