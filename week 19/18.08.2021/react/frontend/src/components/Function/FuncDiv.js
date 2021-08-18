import React from "react";
import FuncButton from "./FuncButton";
import classes from "./FuncDiv.module.css";

const FuncDiv = (props) => {
  console.log(props);
  return (
    <div className={classes.div}>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <FuncButton children={props.btnText} />
    </div>
  );
};

export default FuncDiv;
