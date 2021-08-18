import React, { useState } from "react";

const Heading = ({ text }) => {
  let style = {
    width: "100%",
    padding: "200px",
    textAlign: "center",
    backgroundColor: "#afc53c",
    margin: "20px 0",
  };

  return (
    <div style={style}>
      <h1>{text}</h1>
    </div>
  );
};
export default Heading;
