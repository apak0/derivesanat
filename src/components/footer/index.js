import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
          <p className="text-sm">123 Street, City, Country</p>
          <p className="text-sm">Phone: 123-456-7890</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
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
