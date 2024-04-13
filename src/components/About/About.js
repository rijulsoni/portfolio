import React from "react";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";
import HeroImg from "../anas-alshanti-feXpdV001o4-unsplash.jpg";
export default function About() {
  const value = useContext(ThemeContext);
  return (
    <div
      className={`h-full flex flex-col min-[1083px]:flex-row ${
        value.isDarkMode ? "text-white" : "text-black"
      } ${value.isDarkMode ? "bg-[#1C1C27]" : "bg-slate-100"} `}
      style={{ fontFamily: "poppins"}}
    >
      <div className="p-28 w-8/12 max-[1083px]:order-2">
        <div className="text-6xl m-2">
          Hi, I'm
          <div className="mt-3">{Bio.name}</div>
        </div>
        <div className="text-3xl flex m-2 mt-3">
          <span>I'm a&nbsp;</span>
          <span className="inline text-[#854ce6]">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <div
          className={`text-lg m-2 mt-3 w-11/12 ${
            value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
          }  `}
        >
          {Bio.description}
        </div>
        <a
          className="text-white m-4 mt-3 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={Bio.resume}
          target="display"
        >
          Check Resume
        </a>
      </div>
      <div className="py-28 px-11 max-[1083px]:order-1">
        <img
          className="border-2 rounded-full border-purple-600 w-80 h-80"
          src={HeroImg}
          alt="hero-image"
        />
      </div>
    </div>
  );
}
//1083
