import React from "react";
import ExperienceCard from "../sub/ExperienceCard";
import { experience } from "@/constants/experience";
const Experiences = () => {
  return (
    <div className="relative z-[30] flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Job Experiences
      </h1>
      <div
        id="experiences"
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-[30] justify-center"
      >
        {experience.map((item, index) => (
          <ExperienceCard
            src={item.src}
            title={item.title}
            description={item.description}
            link={item.link}
            key={index}
            height={item.height}
            width={item.width}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
