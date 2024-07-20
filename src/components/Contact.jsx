import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import EmailForm from "./EmailForm";

const handleCallButton = () => {
  window.location.href = "tel:+91981017153";
};
const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black w-full h-auto flex flex-col text-white m-auto p-4 py-10 items-center"
    >
      <div className="w-[70%] flex flex-col sm:flex-row justify-between items-center gap-5">
        {/* <CubeLoader /> */}
        <div>
          <h1 className="text-6xl pb-6 font-semibold">Let's Work together!</h1>

          <span className=" pl-2">Have a project in mind?</span>
          <br/>
          <span className=" pl-2"> Drop me a mail at </span>
          <a
            href="mailto:parthahuja2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-red-600 font-bold italic"
          >
            parthahuja2003@gmail.com.
          </a>
        </div>

        <EmailForm />
      </div>
      <div className="w-[75%] border-white border my-4"></div>

      <div className="flex justify-center items-center w-full max-w-[150px] mt-3 z-0 gap-5">
        <a
          href="https://github.com/ravenclaw03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-[30px] cursor-pointer hover:text-red-700" />
        </a>

        <a
          href="https://www.linkedin.com/in/parth-ahuja-a0229622b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-[30px] cursor-pointer hover:text-red-700" />
        </a>

        <a
          href="mailto:parthahuja2003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail className="size-[30px] cursor-pointer hover:text-red-700" />
        </a>

        <a onClick={handleCallButton} className="cursor-pointer">
          <FaPhone className="size-[24px] cursor-pointer hover:text-red-700" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
