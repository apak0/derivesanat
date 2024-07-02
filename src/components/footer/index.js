import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4  bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; 2024 Deri ve Sanat. All rights reserved.
          </p>
          <p className="text-sm">
            Cumhuriyet Mahallesi Akasya Sokak No:2 Gemlik/BURSA
          </p>
          <p className="text-sm">Tel: 0244 519 87 65</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
