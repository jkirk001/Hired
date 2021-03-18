import "./App.css";
import Nav from "./components/Nav/Nav";
import Hello from "./components/Hello/Hello";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
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
