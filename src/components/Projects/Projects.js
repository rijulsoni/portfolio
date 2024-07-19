import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { projects } from "../../data/constants";
import { ButtonGroup, Button } from "@material-tailwind/react";
import ThemeContext from "../../context/theme/ThemeContext";
export default function Projects() {
  const value = useContext(ThemeContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  useEffect(() => {
    const allCategories = projects.map((project) => project.category);
    const uniqueCategories = ["all", ...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, []);
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory]);

  return (
    <div
      className={`${
        value.isDarkMode ? "bg-[#0d0d1a]" : "bg-slate-100"
      } flex flex-col items-center`}
      style={{ fontFamily: "poppins" }}
    >
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center">
          <div
            className={`mt-7 sm:text-4xl text-[42px]  max-md:mt-0 text-center font-semibold ${
              value.isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Projects
          </div>
          <div
            className={`text-xl max-md:text-lg text-center mt-4  max-md:mt-1  ${
              value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
            }`}
          >
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </div>
        </div>
      </div>
      <div>
        <ButtonGroup>
          <div>
            {categories.map((category) => {
              return (
                <Button
                  key={category}
                  className={`border-2 border-[#306EE8] m-1 ${
                    selectedCategory === category
                      ? "bg-[#306EE8] text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </ButtonGroup>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {filteredProjects.map((project) => {
          return (
            <div
              className={`flex flex-col mt-9 text-gray-700  ${
                value.isDarkMode ? "bg-[#171721]" : "bg-slate-200"
              }  shadow-md bg-clip-border rounded-xl w-96`}
            >
              <div className="h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img src={project.image} alt="card-image" />
              </div>
              <div className="flex flex-wrap justify-center mx-2 my-0">
                {project.tags.map((tag) => {
                  return (
                    <div
                      className={`text-sm font-normal bg-[#be1adb15] ${
                        value.isDarkMode ? "text-[#be1adb]" : "text-[#854CE6]"
                      }   m-1 px-2 py-1 rounded-lg`}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="p-6">
                <h1
                  className={`block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900
                   ${value.isDarkMode ? "text-[#F2F3F495]" : "text-black"}`}
                >
                  {project.title}
                </h1>
                <div
                  className={`block mb-2 font-sans text-sm antialiased  font-semibold leading-snug tracking-normal text-blue-gray-900   ${
                    value.isDarkMode ? "text-[#F2F3F495]" : "text-black"
                  }`}
                >
                  {project.date}
                </div>
                <div
                  className={`line-clamp-5 font-sans text-base antialiased font-light leading-relaxed ${
                    value.isDarkMode ? "text-[#F2F3F495]" : "text-black"
                  }`}
                >
                  {project.description}
                </div>
              </div>
              <div className="p-6 pt-0 text-center">
                <button
                  className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg ${value.isDarkMode ? 'bg-[#306EE8]': 'bg-gray-900' }  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
                  type="button"
                  onClick={() => window.open(project.webapp, "_blank")}
                >
                  Live Demo
                </button>
                <button
                  className={`ml-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg ${value.isDarkMode ? 'bg-[#306EE8]': 'bg-gray-900' } text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
                  type="button"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Github Link
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
