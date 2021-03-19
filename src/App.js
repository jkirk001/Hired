import "./App.css";
import { useContext } from "react";
import { ModeContext } from "./context/mode-context";
import Nav from "./components/Nav/Nav";
import Hello from "./components/Hello/Hello";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const modeContext = useContext(ModeContext);
  return (
    <div className={modeContext.lightMode ? "AppLight" : "App"}>
      <div className="Container">
        <Nav />
        <Hello />
        <Tech />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
