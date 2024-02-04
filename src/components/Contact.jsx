import { FaInstagram, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import EmailForm from "./EmailForm";

const handleCallButton = () => {
  window.location.href = "tel:+91981017153";
};
const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black w-full h-auto flex flex-col text-white m-auto p-4 py-16 items-center "
    >
      <div className="flex w-[80%] sm:justify-around items-center sm:flex-row flex-col gap-5 sm:items-start">
        
          <h1 className=" lg:text-5xl font-extrabold text-left text-3xl sm:text-4xl ">
            Let&apos;s Work together!
          </h1>
          
        <EmailForm />
      </div>
      <div className=" w-[75%] border-white border my-4"></div>
      <div className="flex justify-center items-center w-full max-w-[150px] mt-3 z-0 gap-5 ">
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
        <a>
          <FaPhone
            className=" size-[24px] cursor-pointer hover:text-red-700"
            onClick={handleCallButton}
          />
        </a>
      </div>
    </div>
  );
};
export default Contact;
