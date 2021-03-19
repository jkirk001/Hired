import Nav from "../Nav/Nav";
import Hello from "../Hello/Hello";
import Tech from "../Tech/Tech";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Main = (props) => {
  return (
    <div className="Container">
      <Nav />
      <Hello />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
};
export default Main;
