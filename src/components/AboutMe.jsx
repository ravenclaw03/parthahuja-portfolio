import about from "../assets/about2.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full mx-auto md:pl-20 p-4 py-16 bg-black text-white"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center text-4xl font-bold mb-10">About Me</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            className="md:h-[27rem] h-[16rem] shadow-lg rounded-full border-4 border-white border-double"
            src={about}
            alt="About Me"
          />
          <p className="font-semibold text-orange-500 text-lg text-justify mt-4 md:mt-0 max-w-xl px-6">
            A MERN stack developer with proficient knowledge of DSA using C/C++.
            Pursuing my Btech in Computer Science from Jaypee Institute of
            Information Technology, Noida. Enjoy being a part of a team working
            towards a common goal. I am also the social media lead at GDSC JIIT
            128. Keen to explore new fields and opportunities, as one should
            never stop learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
