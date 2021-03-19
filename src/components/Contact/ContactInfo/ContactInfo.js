import "./ContactInfo.css";
import { useContext, useState } from "react";
import { ModeContext } from "../../../context/mode-context";

const ContactInfo = (props) => {
  const modeContext = useContext(ModeContext);
  const [email, setEmail] = useState("Jone.kirkpatrick@gmail.com");
  return (
    <div className="ContactInfo">
      <h4>Reach Out</h4>
      <div className="ContactTargetList">
        <div
          className={
            modeContext.lightMode ? "ContactEmailLight" : "ContactEmail"
          }
        >
          <address>{email}</address>
          <img
            onClick={() => {
              navigator.clipboard.writeText(email);
            }}
            src="/clipboard.png"
          />
        </div>
        <div className="ContactInfoTarget">
          <a href={`mailto:${email}`}>
            <img src="/email.png" alt="Email Link" />
            <span>Hit me up</span>
          </a>
        </div>
        <div className="ContactInfoTarget">
          <a href="https://github.com/jkirk001">
            <img
              src={
                modeContext.lightMode
                  ? "/GitHub-Mark-32px.png"
                  : "/GitHub-Mark-Light-32px.png"
              }
              alt="GitHub Link"
            />
            <span>Check me out</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
