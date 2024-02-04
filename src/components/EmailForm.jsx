import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    const { name, email, subject } = form.current;

    if (name.value && email.value && subject.value) {
      emailjs
        .sendForm(
          "service_ozs6fnn",
          "template_6m6pa5i",
          form.current,
          "QUYpCMJzkcETsrO5z"
        )
        .then(
          () => {
            alert("Email sent successfully!");
          },
          () => {
            alert("Error! Try Again.");
          }
        );
    } else {
      alert("Please fill in all fields.");
    }
    form.current.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:px-[5rem]">
          <input
            type="text"
            name="name"
            className=" bg-transparent m-4 border-2 border-white px-1.5 sm:w-[17rem] "
            id="name"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            className=" bg-transparent m-4 border-2 border-white px-1.5 sm:w-[17rem] "
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            className=" bg-transparent m-4 border-2 border-white px-1.5 sm:w-[17rem] "
            placeholder="Subject"
          />
          <textarea
            name="message"
            className=" bg-transparent m-4 border-2 border-white px-1.5 sm:w-[17rem]"
            placeholder="Message"
          />
          <input
            type="submit"
            value="Send"
            className="hover:text-orange-700 font-semibold text-lg text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
