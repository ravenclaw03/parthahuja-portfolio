import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineRead,
} from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { CgCodeSlash } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import resume from "../assets/ParthAhujaResume.pdf";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] size-6 cursor-pointer text-white md:hidden"
      />
      {nav && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-20 transition duration-300">
          <a
            onClick={handleNav}
            href=""
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <AiOutlineHome className="size-5 text-white" />
            <span className="p-2 text-white">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <AiOutlineRead className="size-5 text-white" />
            <span className="p-2 text-white">About Me</span>
          </a>
          <a
            onClick={handleNav}
            href="#Experience"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <GrProjects className="size-4 text-white" />
            <span className="p-2 text-white">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#Projects"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <AiOutlineProject className="size-5 text-white" />
            <span className="p-2 text-white">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href={resume}
            download="ParthAhujaResume.pdf"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <BsPerson className="size-5 text-white" />
            <span className="p-2 text-white">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <CgCodeSlash className="size-5 text-white" />
            <span className="p-2 text-white">My Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#Responsibility"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <GiAchievement className="size-7 text-white" />
            <span className="p-2 text-white">Positions of Responsibility</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[50%] flex justify-center items-center bg-red-800 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600 rounded m-1"
          >
            <AiOutlineMail className="size-5 text-white" />
            <span className="p-2 text-white">Contact</span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[15%] z-10">
        <div className="flex flex-col">
          <a
            href="#"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <AiOutlineHome className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-[0.15rem] pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                Home
              </span>
            </div>
          </a>
          <a
            href="#about"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <AiOutlineRead className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[0.69rem] pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                About Me
              </span>
            </div>
          </a>
          <a
            href="#Experience"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <GrProjects className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[0.85rem] pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                Experience
              </span>
            </div>
          </a>
          <a
            href="#Projects"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <AiOutlineProject className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-1 pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                Projects
              </span>
            </div>
          </a>
          <a
            href={resume}
            download="ParthAhujaResume.pdf"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <BsPerson className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-1 pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                Resume
              </span>
            </div>
          </a>
          <a
            href="#skills"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <CgCodeSlash className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[0.4rem] pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                My Skills
              </span>
            </div>
          </a>
          <a
            href="#Responsibility"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <GiAchievement className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[8.8rem] pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap ">
                Positions of Responsibility and Achievements
              </span>
            </div>
          </a>
          <a
            href="#contact"
            className="group relative bg-red-800 rounded-full m-2 p-4 hover:bg-red-600 ease-in duration-200 cursor-pointer hover:rounded-r-none"
          >
            <div className="flex items-center relative">
              <AiOutlineMail className="text-white z-10" />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-1 pl-2 pr-3 py-3 bg-red-600 text-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-300 whitespace-nowrap">
                Contact
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
