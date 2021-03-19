import { Fragment } from "react";

const NextTech = (props) => {
  return (
    <Fragment>
      <span>
        <img src="/Next.svg" alt="Next.js" />
      </span>
      <h4>NextJS</h4>
      <div className="Skills">
        <article>
          <span
            style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "1.2rem",
            }}
          >
            Static loading is so 2010 - and 2020 - maybe 2030 too.
          </span>
          <span style={{ display: "block", marginLeft: "3rem" }}>
            Next.js is production framework for React, which substantially adds
            to the developer experience. It allows SR, ISR, SSR, and even CSR
            like React - as well as running back end code directly in your React
            code. When optimized it is extremely performant.
          </span>
        </article>
      </div>
    </Fragment>
  );
};
export default NextTech;
