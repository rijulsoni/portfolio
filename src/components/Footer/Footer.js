import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

export default function Footer() {
  const value = useContext(ThemeContext);
  return (
    <section className={`${value.isDarkMode ? "bg-[#101017]" : "bg-white"} `}>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 ">
        <nav
          className={`flex flex-wrap justify-center -mx-5 -my-2 ${
            value.isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 ">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 ">
              Skills
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 ">
              Experience
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 ">
              Projects
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6">
              Education
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-twitter text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-github text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-instagram text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-linkedin-in text-2xl" />
          </a>
        </div>
        <p
          className={`mt-8 text-base leading-6 text-center ${
            value.isDarkMode ? "text-white" : "text-black"
          }`}
        >
          © 2024 Rijul Soni, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
