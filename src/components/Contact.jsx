import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const handleCallButton=()=>{
    window.location.href="tel:+91981017153";
}
const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black w-full h-auto flex flex-col text-white items-center justify-center m-auto p-4 py-16 "
    >
      <h1 className=" text-5xl font-extrabold text-center">
        Lets Work together!
      </h1>
      <button
        onClick={handleCallButton}
        className=" text-center rounded-xl m-6 p-2 px-4 bg-red-700 text-lg font-semibold uppercase hover:bg-red-800 hover:scale-105 ease-in duration-200 cursor-pointer"
      >
        Contact Me
      </button>
      <div className=" w-[75%] border-white border my-4"></div>
      <div className="flex justify-between items-center w-full max-w-[150px] mt-3 z-0 gap-5 ">
        <a href="https://github.com/ravenclaw03">
          <FaGithub className=" size-[30px] cursor-pointer hover:text-red-700" />
        </a>

        <a href="https://www.instagram.com/_parthahuja12_/">
          <FaInstagram className=" size-[30px] cursor-pointer hover:text-red-700" />
        </a>
        <a href="https://www.linkedin.com/in/parth-ahuja-a0229622b/">
          <FaLinkedin className=" size-[30px] cursor-pointer hover:text-red-700" />
        </a>
         <a href="mailto:parthahuja2003@gmail.com">
          <AiOutlineMail className=" size-[30px] cursor-pointer hover:text-red-700" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
