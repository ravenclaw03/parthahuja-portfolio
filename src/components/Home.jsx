import { TypeAnimation } from "react-type-animation";
import {  FaGithub, FaLinkedin} from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai";
import bg from "../assets/bg.mp4"
import { useState, useEffect, useRef } from "react";
import "../styles/logo.css"
import CubeLoader from "./CubeLoader.jsx"
const Home = () => {
   const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.play();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      if (videoRef.current) {
        observer.observe(videoRef.current);
      }

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);
  return (
    <div>
      <div className="absolute left-0 top-0 md:fixed">
        <h1 className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:before:[box-shadow:_2px_2px_2px_3px_#000] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:text-white relative bg-neutral-800 text-left text-white font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-red-600 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-800 after:right-8 after:top-3 after:rounded-full after:blur-lg m-2 p-2 text-xl select-none">
          PA
        </h1>
      </div>

      <video
        ref={videoRef}
        className="w-full h-screen object-cover absolute z-[-999]"
        src={bg}
        loop
        muted
        onLoadedData={() => setVideoLoaded(true)}
      />

      {videoLoaded ? (
        <div className="h-screen w-full top-0 left-0">
          <div className="text-slate-50 max-w-[700px] mx-auto h-screen w-full flex flex-col items-center justify-center">
            <h1 className="sm:text-5xl text-4xl font-bold">
              Hey! I&apos;m <span className="text-orange-700">Parth Ahuja</span>
            </h1>
            <h2 className="sm:text-3xl text-xl pt-4 font-semibold font-mono">
              I&apos;m a
              <TypeAnimation
                sequence={[
                  "Programmer",
                  2000,
                  "Web Developer",
                  2000,
                  "Tech-Enthusiast",
                  2000,
                  "Social Media Strategist",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  paddingLeft: "10px",
                }}
                repeat={Infinity}
              />
            </h2>
            <span className="flex justify-between items-center w-full max-w-[150px] mt-3 z-0">
              <a
                href="https://github.com/ravenclaw03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-[30px] cursor-pointer hover:text-orange-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/parth-ahuja-a0229622b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="size-[30px] cursor-pointer hover:text-orange-700" />
              </a>
              <a
                href="mailto:parthahuja2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="size-[30px] cursor-pointer hover:text-red-700" />
              </a>
            </span>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
          {/* Loading Indicator */}
          <CubeLoader />
        </div>
      )}
    </div>
  );
};
export default Home;
