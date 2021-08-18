import React, { useState } from "react";

const SubPost = ({ heading, text }) => {
  let styleDiv = {
    backgroundColor: "white",
    padding: "5px",
  };
  let style = {
    padding: "20px 0",
  };

  return (
    <div style={styleDiv}>
      <h3 style={style}>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};
export default SubPost;
