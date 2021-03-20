import "./Tech.css";
import TechList from "./TechList/TechList";

const Tech = (props) => {
  return (
    <section className="Tech">
      <h3>Technologies</h3>
      <p>(click them)</p>
      <TechList />
    </section>
  );
};
export default Tech;
