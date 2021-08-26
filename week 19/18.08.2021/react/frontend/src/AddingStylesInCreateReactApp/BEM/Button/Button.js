import React from "react";
import "./Button.css";

const Button = ({ text, action, primary, secondary }) => {
  const buttonClass = primary
    ? "button button-primary"
    : secondary
    ? "button button-secondary"
    : "button button-default";
  return (
    <>
      <button className={buttonClass} onClick={action}>
        {text}
      </button>
    </>
  );
};

export default Button;
