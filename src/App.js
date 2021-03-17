import "./App.css";
import Nav from "./components/Nav/Nav";
import Hello from "./components/Hello/Hello";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Nav />
        <Hello />
        <Tech />
      </div>
    </div>
  );
}

export default App;
