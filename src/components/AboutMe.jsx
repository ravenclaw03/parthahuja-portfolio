import about from "../assets/about.jpg";
const AboutMe = () => {
  return (
    <div id="about" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-center text-4xl font-bold mb-10">About Me</h1>
      <div className="flex sm:justify-around gap-4 items-center">
        <img
          className="sm:w-[25%] h-auto w-[35%] shadow-lg shadow-black"
          src={about}
          alt=""
        />
        <p className=" font-semibold text-red-700 sm:text-lg text-md text-justify sm:max-w-[50%]">
          A MERN stack developer with proficient knowledge of DSA using C/C++. Pursuing my Btech in Computer Science from Jaypee Institute of Information Technology, Noida. Enjoy being a part of a team working towards a common goal. I am also
          the social media lead at GDSC JIIT 128. Keen to explore new fields and
          opportunities, as one should never stop learning.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
