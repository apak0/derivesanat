import React from "react";
import Carousel from "./Carousel";
import ExpandableCard from "../../components/Card/ExpandableCard "; // Yeni bileşenin import edilmesi
import "./index.css";

function Container() {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <Carousel />
      </div>
      {/* Cards */}
      <div className="card-list-wrapper">
        <ExpandableCard
          title="Kart Başlığı 1"
          description="Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1"
          imageUrl={require("./images/deri1.jpg")} // imageUrl prop'unu iletimi
        />
        <ExpandableCard
          title="Kart Başlığı 1"
          description="Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1"
          imageUrl={require("./images/deri1.jpg")} // imageUrl prop'unu iletimi
        />
        <ExpandableCard
          title="Kart Başlığı 1"
          description="Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1, Açıklama 1"
          imageUrl={require("./images/deri1.jpg")} // imageUrl prop'unu iletimi
        />
      </div>
    </div>
  );
}

export default Container;
