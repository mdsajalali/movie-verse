"use client";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {isDarkMode ? (
        <CiLight size={25} className="text-[#3D4C56] dark:text-white" />
      ) : (
        <CiDark size={25} className="text-[#3D4C56]" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
