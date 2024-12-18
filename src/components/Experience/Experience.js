import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../../data/constants";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

export default function Experience() {
  const value = useContext(ThemeContext);

  return (
    <div id="experience"
      className={`flex flex-col items-center ${
        value.isDarkMode ? "bg-[#0d0d1a]" : "bg-slate-100"
      }`}
      style={{ fontFamily: "poppins" }}
    >
      <div
        className={`text-[42px] mt-10 text-center font-semibold ${
          value.isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Experience
      </div>
      <div
        className={`text-xl text-center max-md:text-lg mt-4 ${
          value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
        }`}
      >
        My work experience as a software engineer and working on different
        companies and projects.
      </div>
      <div className="flex flex-col items-center mt-6 justify-center w-full max-w-5xl">
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== experiences.length && (
                  <TimelineConnector style={{ background: "#854CE6" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div
                  className={`w-[314px] sm:w-[500px] md:w-[700px] lg:w-[900px] border-2 border-[#306EE8] rounded-xl hover:cursor-pointer px-3 py-4 group ${
                    value.isDarkMode ? "text-[#F2F3F495]" : "text-[#11111195]"
                  }`}
                >
                  <div className="flex justify-between">
                    <img
                      className="border rounded-xl border-black w-20 h-20"
                      src={experience.img}
                      alt="img"
                    />
                    <div className="w-full flex flex-col ml-8">
                      <div className="text-[16px] font-semibold">
                        {experience.role}
                      </div>
                      <div className="text-xs font-medium">
                        {experience.company}
                      </div>
                      <div className="text-xs font-normal">
                        {experience.date}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-3" />
                  <div className="mt-3">
                    {experience?.desc && (
                      <span className="line-clamp-3 group-hover:block">
                        {experience.desc}
                      </span>
                    )}
                    {experience?.skills && (
                      <div className="w-full flex gap-3 -mt-3">
                        <div className="font-semibold mt-4">Skills:</div>
                        <div className="mt-4">
                          {experience?.skills?.map((skill, skillIndex) => (
                            <span key={skillIndex}> •{skill}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {experience.doc && (
                    <div className="mt-3 hidden group-hover:block">
                      <a href={experience.doc} target="new">
                        <img
                          className="w-20 border h-28"
                          src={experience.doc}
                          alt="doc"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
