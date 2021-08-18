import React, { Component } from "react";
import classes from "./ClassButton.module.css";

export default class ClassButton extends Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }

  render() {
    return <button className={classes.btn}>{this.children}</button>;
  }
}

// import React from "react";

// const FuncButton = ({ children, ...props }) => {
//   return <button className={classes.btn}>{children}</button>;
// };

// export default FuncButton;
