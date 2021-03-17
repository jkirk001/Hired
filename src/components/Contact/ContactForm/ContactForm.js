import "./ContactForm.css";

const ContactForm = (props) => {
  return (
    <form className="ContactForm">
      <label htmlFor="name">Name</label>
      <input id="name" placeholder="Put the name here" />
      <label htmlFor="email">Email</label>
      <input id="email" placeholder="...And the email here" />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        placeholder="...And who would have thought the message goes here!"
      ></textarea>
    </form>
  );
};
export default ContactForm;
