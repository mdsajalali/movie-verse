import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a movie review site dedicated to providing you with the
              latest news and reviews, helping you discover the best films to
              watch.
            </p>
          </div>
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-400 mb-2">
              Stay connected and follow us on our social media channels for the
              latest updates:
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Movie Verse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
