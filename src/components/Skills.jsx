import mongo from "../assets/mongo.svg";
import cpp from "../assets/c++.png";
import css from "../assets/css.svg";
import express from "../assets/express.svg";
import git from "../assets/git-icon.svg";
import html from "../assets/html-1.svg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import nodejs from "../assets/nodejs-icon.svg";
import python from "../assets/python-5.svg";
import tailwind from "../assets/tailwind-css-2.svg";
import react from "../assets/react.svg";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-12">
      <h1 className="text-center text-4xl font-bold mb-10">My Skills</h1>
      <div className="grid grid-cols-6 gap-5 items-center md:gap-8 select-none">
        <img src={mongo} alt="MongoDB" className="max-h-[100px]" />
        <img src={express} alt="Express" className="max-h-[100px]" />
        <img src={react} alt="React" className="max-h-[100px]" />
        <img src={nodejs} alt="Node.js" className="max-h-[100px]" />
        <img src={cpp} alt="C++" className="max-h-[100px]" />
        <img src={css} alt="CSS" className="max-h-[100px]" />
        <img src={git} alt="Git" className="max-h-[100px]" />
        <img src={js} alt="JavaScript" className="max-h-[100px]" />
        <img src={mysql} alt="MySQL" className="max-h-[100px]" />
        <img src={python} alt="Python" className="max-h-[100px]" />
        <img src={tailwind} alt="Tailwind CSS" className="max-h-[100px]" />
        <img src={html} alt="HTML" className="max-h-[100px]" />
      </div>
    </div>
  );
};

export default Skills;
