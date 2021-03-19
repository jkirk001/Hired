import { Fragment } from "react";

const NodeTech = (props) => {
  return (
    <Fragment>
      <span>
        <img src="/node.svg" alt="NodeJS" />
      </span>
      <h4>NodeJS</h4>
      <div className="Skills">
        <article>
          <span
            style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "1.2rem",
            }}
          >
            Javascript on the back-end? Node Possible
          </span>
          <span style={{ display: "block", marginLeft: "3rem" }}>
            Node.js is an intelligent asynchronous event-driven JavaScript
            runtime, which allows users to develop using the javascript syntax
            we all know and love. In conjunction with Express, the API-world is
            our oyster.
          </span>
        </article>
      </div>
    </Fragment>
  );
};

export default NodeTech;
