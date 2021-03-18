import "./ContactForm.css";
import { useState } from "react";

const ContactForm = (props) => {
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
    });
  };

  return (
    <form onSubmit={submitHandler} className="ContactForm" id="form">
      <h4>Quickie? </h4>
      <div className="InputDiv">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Put the name here"
          value={name}
          onChange={inputHandler}
        />
      </div>
      <div className="InputDiv">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="...And the email here"
          value={email}
          onChange={inputHandler}
        />
      </div>
      <div className="InputDiv">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="...And who would have thought the message goes here!"
          value={message}
          onChange={inputHandler}
        ></textarea>
      </div>
      <button>Submit</button>
    </form>
  );
};
export default ContactForm;
