import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import home from "../assets/home.jpeg"
import bg from "../assets/bg.mp4"
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
const Home = () => {
   const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <div id="home">
        {/* <img
          className="w-full h-screen object-cover absolute z-[-999]"
          src={home}
          alt="background image"
        /> */}
        <video
          className="w-full h-screen object-cover absolute z-[-999]"
          src={bg}
          autoPlay
          loop
          muted
          onLoadedData={() => setVideoLoaded(true)}
        />
        {videoLoaded ? (
          <div className=" h-screen w-full top-0 left-0 ">
            <div className=" text-slate-50 max-w-[700px] m-auto h-screen w-full flex flex-col items-center justify-center">
              <h1 className=" sm:text-5xl text-4xl font-bold">
                Hey! I&apos;m{" "}
                <span className="text-orange-700">Parth Ahuja</span>
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
                <a href="https://github.com/ravenclaw03">
                  <FaGithub className="size-[30px] cursor-pointer hover:text-orange-700" />
                </a>

                <a href="https://www.instagram.com/_parthahuja12_/">
                  <FaInstagram className="size-[30px] cursor-pointer hover:text-orange-700" />
                </a>

                <a href="https://www.linkedin.com/in/parth-ahuja-a0229622b/">
                  <FaLinkedin className="size-[30px] cursor-pointer hover:text-orange-700" />
                </a>
              </span>
            </div>
          </div>
        ) : (
          <div className="h-screen w-full flex items-center justify-center">
            {/* <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#b91c1c"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> */}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
