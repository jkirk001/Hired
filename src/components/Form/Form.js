import "./Form.css";

const Form = (props) => {
  return (
    <section className="Contact">
      <div className="ContactInfo">
        <h4>Reach Out</h4>
        <div className="ContactTargetList">
          <address>Jone.kirkpatrick@gmail.com</address>
          <div className="ContactInfoTarget">
            <a href="mailto:Jone.kirkpatrick@gmail.com">
              <img src="/email.png" alt="Email Link" />
              <span>Hit me up</span>
            </a>
          </div>
          <div className="ContactInfoTarget">
            <a href="https://github.com/jkirk001">
              <img src="/GitHub-Mark-Light-32px.png" alt="GitHub Link" />
              <span>Check me out</span>
            </a>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default Form;
