import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineRead,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import IconWithTooltip from "./IconWithTooltip";
import resume from "../assets/ParthAhujaResume.pdf"
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] size-6 cursor-pointer text-white md:hidden "
      />
      {nav ? (
        <div className="flex flex-col justify-center items-center w-full h-screen z-20 bg-transparent/70 fixed">
          <a
            onClick={handleNav}
            href="#home"
            className=" w-[75%] flex justify-center items-center bg-red-800 shadow-purple-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <AiOutlineHome className="size-5 text-white" />
            <span className=" p-2 text-white">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className=" w-[75%] flex justify-center items-center bg-red-800 shadow-purple-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <AiOutlineRead className="size-5 text-white" />
            <span className=" p-2 text-white">About Me</span>
          </a>
          <a
            onClick={handleNav}
            href="#Experience"
            className=" w-[75%] flex justify-center items-center bg-red-800 shadow-purple-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <GrProjects className="size-4 text-white" />
            <span className=" p-2 text-white">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#Projects"
            className=" w-[75%] flex justify-center items-center bg-red-800 shadow-purple-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <AiOutlineProject className="size-5 text-white" />
            <span className=" p-2 text-white">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href={resume}
            download="ParthAhujaResume.pdf"
            className=" w-[75%] flex justify-center items-center bg-red-800 shadow-purple-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <BsPerson className="size-5 text-white " />
            <span className=" p-2 text-white">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className=" w-[75%] flex justify-center items-center bg-red-800 shadow-purple-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <AiOutlineMail className="size-5 text-white" />
            <span className=" p-2 text-white">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#home"
            className="bg-red-800 shadow-orange-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <IconWithTooltip
              icon={<AiOutlineHome className="size-4 text-white" />}
              tooltipText="Home"
            />
          </a>
          <a
            href="#about"
            className="bg-red-800 shadow-orange-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <IconWithTooltip
              icon={<AiOutlineRead className="size-4 text-white" />}
              tooltipText="About Me"
            />
          </a>
          <a
            href="#Experience"
            className=" bg-red-800 shadow-orange-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <IconWithTooltip
              icon={<GrProjects className="size-4 text-white" />}
              tooltipText="Experience"
            />
          </a>
          <a
            href="#Projects"
            className=" bg-red-800 shadow-orange-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <IconWithTooltip
              icon={<AiOutlineProject className="size-4 text-white" />}
              tooltipText="Projects"
            />
          </a>
          <a
            href={resume}
            download="ParthAhujaResume.pdf"
            className=" bg-red-800 shadow-orange-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <IconWithTooltip
              icon={<BsPerson className="size-4 text-white" />}
              tooltipText="Resume"
            />
          </a>
          <a
            href="#contact"
            className=" bg-red-800 shadow-orange-700 shadow-lg rounded-full m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer hover:bg-red-600"
          >
            <IconWithTooltip
              icon={<AiOutlineMail className="size-4 text-white" />}
              tooltipText="Contact"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Sidenav;
