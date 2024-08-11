import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";

export default function Contact() {
  const value = useContext(ThemeContext);
  return (
    <div id="contact"
      className={`${value.isDarkMode ? "bg-[#0d0d1a]" : "bg-slate-100"}`}
      style={{ fontFamily: "poppins" }}
    >
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16 max-md:mb-4">
          <div
            className={`mt-7 max-md:mt-1 sm:text-4xl text-[42px] text-center font-semibold ${
              value.isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Contact
          </div>
          <div
            className={`text-xl text-center max-md:text-lg mt-4 max-md:mt-1 ${
              value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
            }`}
          >
            Feel free to reach out to me for any questions or opportunities!
          </div>
        </div>

        <form
          className={`w-full mb-12 ${
            value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
          } border-2 border-[#306EE8] p-4 rounded-xl`}
          action="https://public.herotofu.com/v1/145ea390-2af7-11ef-b435-b1ba21672864"
          method="post"
          accept-charset="UTF-8"
        >
          <div className="flex flex-wrap -mx-3 mb-6  max-md:mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 max-md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full placeholder-blue-300  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                name="firstname"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full placeholder-blue-300  border text-black border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                name="lastname"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6  max-md:mb-0">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                for="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full placeholder-blue-300  text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6  max-md:mb-1">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="3"
                name="message"
                placeholder="Your Message"
                className="appearance-none block w-full placeholder-blue-300  text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
