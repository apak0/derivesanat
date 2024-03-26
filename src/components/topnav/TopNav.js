import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function TopNav() {
  return (
    <div className="flex justify-between items-center p-1">
      <div className="ml-5">
        <div className="flex justify-between items-center">
          <BsTelephoneInbound />{" "}
          <a className="ml-2 text-xs font-bold" href="tel:0535 123 45 67">
            0535 123 45 67
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-4 text-red-400">
          <GrInstagram />
          <a href="www.instagram.com/derivesanat" target="_blank">
           
          </a>
        </div>
        <div className="flex justify-center items-center mr-4 text-blue-600">
          <FaFacebookSquare />{" "}
          <a href="www.facebook.com/derivesanat" target="_blank">
            
          </a>
        </div>
        <div className="flex justify-center items-center mr-4 text-red-400">
          <SiGmail />

          <a href="mailto:derivesanat@gmail.com"></a>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
