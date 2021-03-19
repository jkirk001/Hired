import { Fragment } from "react";

const ExpressTech = (props) => {
  return (
    <Fragment>
      <span>
        <img src="/express.svg" alt="Express" />
      </span>
      <h4>Express</h4>
      <div className="Skills">
        <article>
          <span
            style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "1.2rem",
            }}
          >
            So tell me, what exactly do you do? No rush.
          </span>
          <span style={{ display: "block", marginLeft: "3rem" }}>
            Express is an unopinionated Node.js web framework. While it can
            theoretically do anything you would like (within the scope of
            Node.js), I primarily use it for APIs and hidden business magic...
            er logic.
          </span>
        </article>
      </div>
    </Fragment>
  );
};

export default ExpressTech;
