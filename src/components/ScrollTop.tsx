"use client";

import { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 flex   size-9  md:size-12 items-center justify-center rounded-full bg-[#201F31] text-white shadow-lg ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <BiChevronUp size={24} />
    </button>
  );
};

export default ScrollTop;
