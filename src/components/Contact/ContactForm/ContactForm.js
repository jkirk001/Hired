import "./ContactForm.css";
import "./ContactFormLight.css";
import { Fragment, useState, useContext } from "react";
import { ModeContext } from "../../../context/mode-context";

const ContactForm = (props) => {
  const modeContext = useContext(ModeContext);

  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (event) => {
    if (event.target.id === "name") setName(event.target.value);
    if (event.target.id === "email") setEmail(event.target.value);
    if (event.target.id === "message") setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://hired-224da-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    }).then((res) => {
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setFormSent(true);
      }, 1200);
    });
  };

  let display = (
    <div className={modeContext.lightMode ? "ContactFormLight" : "ContactForm"}>
      <h4>That was Fast </h4>
      <h5>Thanks!</h5>
    </div>
  );

  if (!formSent) {
    display = (
      <form
        onSubmit={submitHandler}
        className={modeContext.lightMode ? "ContactFormLight" : "ContactForm"}
        id="form"
      >
        <h4>Quickie? </h4>
        <div className={modeContext.lightMode ? "InputDivLight" : "InputDiv"}>
          <label htmlFor="name">Name</label>
          <input
            required
            autoComplete="false"
            type="text"
            id="name"
            placeholder="Put the name here"
            value={name}
            onChange={inputHandler}
          />
        </div>
        <div className={modeContext.lightMode ? "InputDivLight" : "InputDiv"}>
          <label htmlFor="email">Email</label>
          <input
            required
            autoComplete="false"
            type="email"
            id="email"
            placeholder="...And the email here"
            value={email}
            onChange={inputHandler}
          />
        </div>
        <div className={modeContext.lightMode ? "InputDivLight" : "InputDiv"}>
          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            placeholder="...And who would have thought the message goes here!"
            value={message}
            onChange={inputHandler}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }

  return <Fragment>{display}</Fragment>;
};
export default ContactForm;
