import { Fragment } from "react";

const ReactTech = (props) => {
  return (
    <Fragment>
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
            React allows us to build highly responsive UIs which can maintain a
            state across pages. Alongside tools like Redux and react-spring
            nearly anything can be accomplished.
          </span>
        </article>
      </div>
    </Fragment>
  );
};

export default ReactTech;
