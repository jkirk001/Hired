import "./Nav.css";
import "./NavLight.css";
import { useContext } from "react";
import { ModeContext } from "../../context/mode-context";

const Nav = (props) => {
  const modeContext = useContext(ModeContext);

  return (
    <header className="Nav">
      <span style={{ cursor: "pointer" }} onClick={modeContext.switch}>
        <h2 className="Logo">JEK</h2>(click for
        {modeContext.lightMode ? " dark" : " light"} mode)
      </span>

      <a className={modeContext.lightMode ? "HireLight" : "Hire"} href="#form">
        Hire Me
      </a>
    </header>
  );
};

export default Nav;
