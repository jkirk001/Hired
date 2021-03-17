import "./App.css";
import Nav from "./components/Nav/Nav";
import Hello from "./components/Hello/Hello";
import Tech from "./components/Tech/Tech";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Nav />
        <Hello />
        <Tech />
        <Form />
      </div>
    </div>
  );
}

export default App;
