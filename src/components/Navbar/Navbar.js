import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "../../assets/RS.png";
import logoWhite from "../../assets/RS_White.png";
import { Bio } from "../../data/constants";
import { useContext } from "react";

import ThemeContext from "../../context/theme/ThemeContext";

export default function Navbar() {
  const value = useContext(ThemeContext);
  const [isNavDialogOpen, setNavDialogOpen] = React.useState(false);

  const toggleDarkMode = (checked) => {
    value.setDarkMode(checked);
  };
  const handleMenu = () => {
    setNavDialogOpen(!isNavDialogOpen);
  };
  return (
    <nav
      className={`sticky w-full z-20 top-0 start-0 border-b border-gray-200 ${
        value.isDarkMode ? "bg-[#101017]" : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            height={21}
            src={value.isDarkMode ? logoWhite : logo}
            className="h-8"
            alt="Rijul Soni Logo"
          />
          <span
            className={`self-center text-xl font-semibold whitespace-nowrap ${
              value.isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Rijul Soni
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <DarkModeSwitch
            style={{ margin: "8px" }}
            checked={value.isDarkMode}
            onChange={toggleDarkMode}
            size={20}
          />
          <a
            href={Bio.github}
            type="button"
            target="display"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-black font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Github Profile
          </a>

          <button className="p-5 md:hidden" onClick={handleMenu}>
            <i className="fa-solid fa-bars text-gray-600"></i>
          </button>
          <div
            id="nav-dialog"
            className={`${
              isNavDialogOpen ? "" : "hidden"
            } fixed z-10 md:hidden w-full bg-white inset-0 p-3`}
          >
            <div id="nav-bar" className="flex justify-between">
              <a href="/" id="brand" className="flex gap-2 items-center">
                <img
                  className="object-cover max-w-12 max-h-12"
                  src={logo}
                  alt="Logo"
                />
                <span className="text-lg font-bold font-display">Rijul Soni</span>
              </a>
              <button className="p-2 md:hidden" onClick={handleMenu}>
                <i className="fa-solid fa-xmark text-gray-600" />
              </button>
            </div>
            <div className="mt-6">
              <a
                href="#about"
                onClick={handleMenu}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={handleMenu}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={handleMenu}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={handleMenu}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Projects
              </a>
              <a
                href="#education"
                onClick={handleMenu}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Education
              </a>
            </div>
            <div className="h-[1px] bg-gray-300"></div>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 gap-3"
          id="navbar-sticky"
        >
          <ul
            className={`flex text-bl flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700`}
          >
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                  value.isDarkMode ? "text-white" : "text-black"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                  value.isDarkMode ? "text-white" : "text-black"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                  value.isDarkMode ? "text-white" : "text-black"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                  value.isDarkMode ? "text-white" : "text-black"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                  value.isDarkMode ? "text-white" : "text-black"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
