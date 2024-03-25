import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">İletişim</h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-8">
          <h2 className="text-2xl font-semibold mb-4">İletişim Bilgileri</h2>
          <p className="mb-4">
            Adres: Örnek Mahallesi, Örnek Sokak No: 123, Örnek İl, Türkiye
          </p>
          <p className="mb-4">Telefon: 0123 456 789</p>
          <div className="mb-4">
            <p>Sosyal Medya:</p>
            <div className="flex items-center">
              <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <p>Email: info@example.com</p>
        </div>

        <div className="w-full md:w-1/2 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mesaj Gönder</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">İsim</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mesajınız</label>
              <textarea id="message" name="message" rows="5" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">Gönder</button>
          </form>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">Konum</h2>
        <div className="embed-responsive aspect-ratio-16/9">
          <iframe
            title="Dükkan Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.636036118365!2d28.9482323157862!3d41.04313217929555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab722eb77717b%3A0x3b7f17c9e0dd8c13!2sGrand%20Bazaar!5e0!3m2!1sen!2str!4v1639636857838!5m2!1sen!2str"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
