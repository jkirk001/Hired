import "./ContactInfo.css";

const ContactInfo = (props) => {
  return (
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
  );
};
export default ContactInfo;
