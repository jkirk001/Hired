import "./ContactForm.css";

const ContactForm = (props) => {
  return (
    <form className="ContactForm">
      <h4>Quickie? </h4>
      <div className="InputDiv">
        <label htmlFor="name">Name</label>
        <input id="name" placeholder="Put the name here" />
      </div>
      <div className="InputDiv">
        <label htmlFor="email">Email</label>
        <input id="email" placeholder="...And the email here" />
      </div>
      <div className="InputDiv">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="...And who would have thought the message goes here!"
        ></textarea>
      </div>
      <button onClick={(e) => e.preventDefault()}>Submit</button>
    </form>
  );
};
export default ContactForm;
