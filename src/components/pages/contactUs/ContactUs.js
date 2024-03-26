import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto px-10 py-8 h-screen">
      <h1 className="text-4xl font-semibold mb-8 text-center">İletişim</h1>

      <div className="flex flex-wrap">
        {/* Sol yarısı: Harita ve Adres Bilgileri */}
        <div className="w-full md:w-1/2 mb-8 pr-10">
          <h2 className="text-2xl font-semibold mb-4">Konum</h2>
          <div className="aspect-w-1 aspect-h-1 mb-4 rounded-md overflow-hidden pt-5">
            <iframe
              title="Dükkan Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2075.698198912515!2d29.14423371749931!3d40.4429170249425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca5b8c71e6e2d5%3A0xcd4539b5eedb103c!2sSamanyolu%20Sitesi!5e0!3m2!1str!2str!4v1711413105223!5m2!1str!2str"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-80"
            ></iframe>
          </div>
          <p className="mt-4 text-gray-700 flex">
            <p className="font-bold">Adres:</p>
            <p>
              {" "}
              Cumhuriyet Mahallesi, Örnek Sokak No: 123, Gemlik/Bursa, Türkiye
            </p>
          </p>
        </div>

        {/* Sağ yarısı: İletişim Formu */}
        <div className="w-full md:w-1/2 mb-8 pl-4">
          <h2 className="text-2xl font-semibold mb-4">Mesaj Gönder</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
