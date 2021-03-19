import { Fragment } from "react";

const MongoTech = (props) => {
  return (
    <Fragment>
      <span>
        <img src="/mongo.svg" alt="MongoDB" />
      </span>
      <h4>MongoDB</h4>
      <div className="Skills">
        <article>
          <span
            style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "1.2rem",
            }}
          >
            Sharding? Are we just making up words now?
            {/* What's SQL? */}
          </span>
          <span style={{ display: "block", marginLeft: "3rem" }}>
            MongoDB is a non-relational database. Highly flexible thanks to
            BSON, horizontal scaling and its ability to support unschema'd data
            - Mongo gives you the leeway to use it as you need.
          </span>
        </article>
      </div>
    </Fragment>
  );
};
export default MongoTech;
