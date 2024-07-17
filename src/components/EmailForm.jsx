import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css"
const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    const { name, email} = form.current;

    if (name.value && email.value ) {
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
    <div className="">
      <form form ref={form} onSubmit={sendEmail}>
        <div className="card">
          
          <div className="input-div">
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="input-div">
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="input-div">
            <textarea
              className="input"
              type="text"
              placeholder="Message"
              name="message"
            />
          </div>
          <div className="button-div">
            <button className="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
