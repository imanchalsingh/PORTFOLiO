// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-indigo-400">Anchal Singh</h3>
            <p className="text-gray-400 mt-2">Tech Enthusiast</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anchal Singh. All rights reserved.</p>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <a href="https://mylearninghub.vercel.app/">Visit My Learning hub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
