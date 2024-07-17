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
import linux from "../assets/linux.svg"
import redis from "../assets/redis-logo.svg";
import docker from "../assets/docker.svg"
import "../styles/skills.css"
const logos = [
  { src: mongo, alt: "MongoDB" },
  { src: express, alt: "Express" },
  { src: react, alt: "React" },
  { src: nodejs, alt: "Node.js" },
  { src: cpp, alt: "C++" },
  { src: css, alt: "CSS" },
  { src: git, alt: "Git" },
  { src: js, alt: "JavaScript" },
  { src: mysql, alt: "MySQL" },
  { src: python, alt: "Python" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: html, alt: "HTML" },
  { src: redis, alt: "Redis" },
  { src: linux, alt: "Linux" },
  { src: docker, alt: "Docker" },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-full mx-auto md:pl-20 p-4 py-12 bg-black">
      <h1 className="text-center text-4xl font-bold mb-10 text-white">
        My Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center md:gap-8 select-none w-[80%] mx-auto justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="card-tech relative group flex flex-col items-center justify-center bg-white rounded"
          >
            <img src={logo.src} alt={logo.alt} className="max-h-[100px] p-4" />
            <span className="absolute bottom-0 left-0 right-0 text-center text-black bg-white bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
              {logo.alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
