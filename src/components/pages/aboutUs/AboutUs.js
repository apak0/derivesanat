import React from "react";

const AboutUs = () => {
  return (
    <div className="h-full ">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col justify-center items-center font-bold">
        <div>
          <h1 className="text-5xl font-semibold mb-8 text-center font-serif text-orange-300">
            Hakkımızda
          </h1>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            Deri Ve Sanat'a hoş geldiniz! El yapımı deri cüzdanlar için tek
            adresiniz. 2020 yılında kurulan işletmemiz, ustalık ve kaliteye olan
            tutkumuzla, sanatı işlevsellikle birleştiren benzersiz ve zamansız
            parçaları yaratmamıza öncülük etti.
          </p>
          <hr className="my-6 border-t-2 border-gray-200" />
          <p className="text-gray-700 mb-4">
            Deri Ve Sanat'ta, her cüzdan premium kalite deri kullanılarak özenle
            el yapımı olarak üretilmektedir. Dayanıklılığı ve şıklığı garanti
            ederek, yaşam tarzınıza uyum sağlamakla kalmaz, aynı zamanda sizin
            özgünlüğünüzü yansıtır. Koleksiyonumuzu keşfedin ve size hitap eden
            mükemmel cüzdanı bulun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
