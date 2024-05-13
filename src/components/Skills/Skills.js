import React from "react";
import { skills } from "../../data/constants";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

export default function Skills() {
  const value = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col items-center ${
        value.isDarkMode ? "bg-[#1C1C27]" : "bg-slate-100"
      } `}
      style={{ fontFamily: "poppins" }}
    >
      <div
        className={`text-[42px] text-center   ${
          value.isDarkMode ? "text-white" : "text-black"
        } font-semibold mt-5`}
      >
        Skills
      </div>
      <div
        className={`text-xl text-center  ${
          value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
        } `}
      >
        Here are some of my skills on which I have been working on for the past
        2 years.
      </div>
      <div className="w-[500px] min-[1083px]:w-[1000px] mt-8 grid grid-cols-1 gap-8 min-[1083px]:grid-cols-2">
        {skills.map((skill) => (
          <div
            className={`rounded-3xl shadow-sm border-2 border-[#854CE6] mb-10 ${
              value.isDarkMode ? "bg-[#1C1C27]" : "bg-slate-100"
            } ${value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"}`}
            key={skill.id}
          >
            <div
              className={`mb-5 text-center text-3xl font-medium px-5 py-7 ${
                value.isDarkMode ? "text-[#F2F3F495]" : "text-black"
              }`}
            >
              {skill.title}
            </div>
            <div className="flex justify-center flex-wrap gap-5 mb-20 ">
              {skill.skills.map((item) => (
                <div
                  className="text-xl font-normal flex items-center justify-center "
                  key={item.id}
                >
                  <div
                    className={`border  ${
                      value.isDarkMode
                        ? "border-[#F2F3F480]"
                        : "border-[#11111180]"
                    } rounded-2xl px-3 py-4 flex gap-3`}
                  >
                    <img width="24px" height="24px" src={item.image} />
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// 1px solid #11111180 F2F3F480
