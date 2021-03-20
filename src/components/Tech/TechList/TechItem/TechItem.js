import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
//import TechBack from "./TechBack";

const TechItem = (props) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateX(${flipped ? 0 : 180}deg)`,
    config: { mass: 5, tension: 400, friction: 30 },
  });

  return (
    <li className="TechListItem" onClick={() => set((state) => !state)}>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          backgroundImage: `url(${props.tech.back})`,
        }}
      />
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <span>
          <img alt="React" src={props.tech.img} />
        </span>
        <h4>{props.tech.name}</h4>
        <div className="Skills">
          <article>
            <span
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "1.2rem",
              }}
            >
              {props.tech.quip}
            </span>
            <span style={{ display: "block", marginLeft: "3rem" }}>
              {props.tech.body}
            </span>
          </article>
        </div>
      </a.div>
    </li>
  );
};

export default TechItem;
