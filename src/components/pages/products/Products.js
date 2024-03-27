import React from "react";
import productsData from "./products.json";
import { Image } from "@chakra-ui/react";



function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Ürünler</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <Image
              src={product.image1}
              alt={product.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">{`$${product.price.toFixed(
                2
              )}`}</p>
              <Image
                src={product.image2}
                alt={product.title}
                className="w-full h-48 object-cover object-center opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
