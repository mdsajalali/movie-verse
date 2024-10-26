import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#201F31] text-white py-10">
      <div className="max-w-[1328px] w-full mx-auto px-2 sm:px-10 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:place-items-center gap-5">
          <div className="md:-mt-10">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a movie review site dedicated to providing you with the
              latest news and reviews, helping you discover the best films to
              watch.
            </p>
          </div>
          <div>
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
          <div className="md:-mt-10">
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
