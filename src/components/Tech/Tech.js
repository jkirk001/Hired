import "./Tech.css";
import ReactTech from "./React/React";
import NodeTech from "./Node/Node";
import JavascriptTech from "./Javascript/Javascript";
import MongoTech from "./MongoDB/MongoDB";
import ExpressTech from "./Express/Express";
import NextTech from "./Next/Next";

const Tech = (props) => {
  return (
    <section className="Tech">
      <h3>Technologies</h3>
      <ul className="TechList">
        <ReactTech />

        <li className="TechListItem">
          <NodeTech />
        </li>
        <li className="TechListItem">
          <JavascriptTech />
        </li>
        <li className="TechListItem">
          <MongoTech />
        </li>
        <li className="TechListItem">
          <ExpressTech />
        </li>
        <li className="TechListItem">
          <NextTech />
        </li>
      </ul>
    </section>
  );
};
export default Tech;
