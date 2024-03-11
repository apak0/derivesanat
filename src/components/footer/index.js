import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            Link 1
          </a>
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            Link 2
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Link 3
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
