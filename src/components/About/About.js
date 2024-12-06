import React from "react";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";
import HeroImg from "../../assets/anas-alshanti-feXpdV001o4-unsplash.jpg";
export default function About() {
  const value = useContext(ThemeContext);
  return (
    <div id="about"
      className={`h-full flex flex-col min-[1083px]:flex-row max-[1083px]:items-center ${
        value.isDarkMode ? "text-white" : "text-black"
      } ${value.isDarkMode ? "bg-[#1C1C27]" : "bg-slate-100"} `}
      style={{ fontFamily: "poppins" }}
    >
      <div className="md:w-11/12 md:px-3 lg:w-4/6 lg:pb-20 lg:pl-20 lg:pr-20 lg:pt-8 max-[1083px]:order-2 mb-20 mt-5 ">
        <div className="text-6xl m-2 max-[1083px]:mt-1 max-[1083px]:text-center max-[1083px]:text-4xl max-[924px]:text-3xl max-[616px]:text-2xl">
          Hi, I'm
          <div className="mt-3 max-[1083px]:text-center max-[1083px]:mt-2 max-[1083px]:text-4xl max-[924px]:text-3xl max-[616px]:text-2xl">
            {Bio.name}
          </div>
        </div>
        <span className="text-sm  sm:text-3xl flex m-2 mt-3 justify-center lg:justify-start lg:text-left lg:mt-2">
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
        </span>  <div
          className={`p-3 text-lg text-justify m-2 mt-4 max-[1083px]:text-center max-[1083px]:mt-2
             max-[1083px]:text-sm ${
               value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
             }  `}
        >
          {Bio.description}
        </div>
        <div className="m-6 max-[1083px]:mt-4 max-[1083px]:text-center">
          <a
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600"
            href={Bio.resume}
            target="display"
          >
            Check Resume
          </a>
        </div>
      </div>
{/* 
      <div className="py-28 px-11 max-[1083px]:order-1 max-[1083px]:py-4">
        <img
          className="border-2 rounded-full border-purple-600 w-80 h-80 max-[1083px]:w-60 max-[1083px]:h-60 max-[924px]:w-32 max-[924px]:h-32"
          src={HeroImg}
          alt="hero-img"
        />
      </div> */}
    </div>
  );
}
