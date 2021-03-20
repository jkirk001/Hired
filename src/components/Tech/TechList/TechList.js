import React, { useEffect, useState } from "react";
import TechItem from "./TechItem/TechItem";

const TechList = (props) => {
  const [tech, setTech] = useState([]);
  useEffect(() => {
    fetch("https://hired-224da-default-rtdb.firebaseio.com/tech.json")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setTech(Object.entries(resData));
      });
  }, []);

  let display = <p>...Loading...</p>;

  if (tech) {
    display = tech.map((item, index) => {
      return <TechItem key={index} tech={item[1]} />;
    });
  }

  return <ul className="TechList">{display}</ul>;
};

export default TechList;
