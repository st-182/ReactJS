import React from "react";
import classes from "./FuncButton.module.css";

const FuncButton = ({ children, ...props }) => {
  return <button className={classes.btn}>{children}</button>;
};

export default FuncButton;
