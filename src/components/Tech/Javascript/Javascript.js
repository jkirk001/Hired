import { Fragment } from "react";

const JavascriptTech = (props) => {
  return (
    <Fragment>
      <span>
        <img src="/js.svg" alt="JavaScript" />
      </span>
      <h4>JavaScript</h4>
      <div className="Skills">
        <article>
          <span
            style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "1.2rem",
            }}
          >
            The root of it all, and a cup of coffee. Thanks.
          </span>
          <span style={{ display: "block", marginLeft: "3rem" }}>
            At the end of the day, knowing the ins and outs of Javascript is
            likely the most important aspect of any webdevelopers career skills.
            It is the foundation (especially if you work with Node.js).
          </span>
        </article>
      </div>
    </Fragment>
  );
};

export default JavascriptTech;
