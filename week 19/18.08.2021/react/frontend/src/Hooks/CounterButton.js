import React from "react";

const CounterButton = ({ text, action }) => {
  return (
    <>
      <button className="button" onClick={action}>
        {text}
      </button>
      {action}
    </>
  );
};

export default CounterButton;
