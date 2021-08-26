import React from "react";
import styles from "./Button.module.css";

const Button = ({ primary, secondary }) => {
  let btnClass = primary
    ? styles.primary
    : secondary
    ? styles.secondary
    : styles.custom;
  const someStyle = {
    borderRadius: "40px",
  };
  return (
    <button className={btnClass + " button"} style={someStyle}>
      Click me!
    </button>
  );
};

export default Button;
