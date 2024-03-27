import React from "react";
import productsData from "./products.json";
import "./index.css";

function Products() {
  // Ürün kartlarını 4'lü gruplara ayırmak için bir yardımcı fonksiyon
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Ürünleri 4'lü gruplara ayır
  const chunkedProducts = chunkArray(productsData, 4);

  return (
    <div className="container h-screen mx-auto px-4mt-10 mb-96 ">
      {chunkedProducts.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap -mx-4">
          {row.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    className="w-full"
                    src={product.image1}
                    alt={product.title}
                  />
                  <img
                    className="w-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    src={product.image2}
                    alt={product.title}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{product.price}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Products;
