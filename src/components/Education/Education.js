import React from "react";
import { useContext } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import ThemeContext from "../../context/theme/ThemeContext";
export default function Education() {
  const value = useContext(ThemeContext);
  return (
    <div
      className={`${
        value.isDarkMode ? "bg-[#0d0d1a]" : "bg-slate-100"
      } flex flex-col items-center`}
      style={{ fontFamily: "poppins" }}
    >
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <div
            className={`mt-7 sm:text-4xl text-[42px] text-center font-semibold ${
              value.isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Education
          </div>
          <div
            className={`text-xl text-center max-md:text-lg mt-4 max-md:mt-1 ${
              value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
            }`}
          >
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center -mt-11 max-md:-mt-14 w-full max-w-5xl">
        <Timeline>
          {education.map((education, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== education.length && (
                  <TimelineConnector style={{ background: "#854CE6" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12pxpx", px: 2 }}>
                <div
                  className={`w-[400px] md:w-[700px] lg:w-[900px] border-2 border-[#306EE8] rounded-xl hover:cursor-pointer px-3 py-4 group ${
                    value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
                  }`}
                >
                  <div className="flex justify-between">
                    <img
                      className="border rounded-xl border-black w-20 h-20"
                      src={education.img}
                      alt="img"
                    />
                    <div className="w-full flex flex-col ml-8">
                      <div className="text-[16px] font-semibold">
                        {education.school}
                      </div>
                      <div className="text-xs font-medium">
                        {education.degree}
                      </div>
                      <div className="text-xs font-normal">
                        {education.grade}
                      </div>
                      <div className="text-xs font-normal">
                        {education.date}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-3" />
                  <div className="mt-3">
                    {education?.desc && (
                      <span className="line-clamp-3 group-hover:block">
                        {education.desc}
                      </span>
                    )}
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
