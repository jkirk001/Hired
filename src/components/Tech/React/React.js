import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

const ReactTech = (props) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 400, friction: 30 },
  });
  return (
    <li className="TechListItem" onClick={() => set((state) => !state)}>
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        Test
      </a.div>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <span>
          <img alt="React" src="/react.svg" />
        </span>
        <h4>React</h4>
        <div className="Skills">
          <article>
            <span
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "1.2rem",
              }}
            >
              How did I just send 4,231 GET requests on render?
            </span>
            <span style={{ display: "block", marginLeft: "3rem" }}>
              React allows us to build highly responsive UIs which can maintain
              a state across pages. Alongside tools like Redux and react-spring
              nearly anything can be accomplished.
            </span>
          </article>
        </div>
      </a.div>
    </li>
  );
};

export default ReactTech;
