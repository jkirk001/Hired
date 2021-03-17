import "./Form.css";

const Form = (props) => {
  return (
    <section className="Contact">
      <div className="ContactInfo">
        <h4>Reach Out</h4>
        <address>Jone.kirkpatrick@gmail.com</address>
        <div className="GitHub">
          <a href="mailto:Jone.kirkpatrick@gmail.com">
            <img src="/email.png" alt="Email Link" />
            Hit me up
          </a>
        </div>
        <div className="GitHub">
          <a href="https://github.com/jkirk001">
            <img src="/GitHub-Mark-Light-32px.png" alt="GitHub Link" />
            Check me out
          </a>
        </div>
      </div>
      <form className="ContactForm">
        <label>Name</label>
        <label>Email</label>
        <label>Message</label>
      </form>
    </section>
  );
};

export default Form;
