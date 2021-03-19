import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./Card.css";
import ReactTech from "../../Tech/React/React";

function Card(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 400, friction: 30 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <ReactTech />
      </a.div>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  );
}

export default Card;
/*
<li className="TechListItem">
          <ReactTech />
        </li>
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
*/
