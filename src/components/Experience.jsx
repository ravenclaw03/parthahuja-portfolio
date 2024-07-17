// Experience.js
import React from "react";
import ExpItem from "./ExpItem";
import {data} from "../constants/experience.js"


const Experience = () => {
  return (
    <div id="Experience" className="bg-black text-white min-h-screen">
      <div className="w-full max-w-screen-lg mx-auto md:pl-20 px-4 pt-16">
        <h1 className="text-center text-4xl font-bold mb-10">Experience</h1>
        {data.map((item, idx) => (
          <ExpItem
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
