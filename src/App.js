import "./App.css";
import { useContext } from "react";
import { ModeContext } from "./context/mode-context";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  const modeContext = useContext(ModeContext);
  return (
    <div className={modeContext.lightMode ? "AppLight" : "App"}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
