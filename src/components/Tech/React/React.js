import React, { useEffect, useState } from "react";
import { useSpring, animated as a } from "react-spring";

const ReactTech = (props) => {
  const [tech, setTech] = useState({});
  useEffect(() => {
    fetch("https://hired-224da-default-rtdb.firebaseio.com/tech.json")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData.react);
        setTech(resData.react);
      });
  }, []);

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
          <img alt="React" src={tech.img} />
        </span>
        <h4>{tech.name}</h4>
        <div className="Skills">
          <article>
            <span
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "1.2rem",
              }}
            >
              {tech.quip}
            </span>
            <span style={{ display: "block", marginLeft: "3rem" }}>
              {tech.body}
            </span>
          </article>
        </div>
      </a.div>
    </li>
  );
};

export default ReactTech;
