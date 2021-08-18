import React, { useState } from "react";

const Post = ({ heading, text }) => {
  let styleDiv = {
    backgroundColor: "white",
    padding: "5px",
  };
  let style = {
    padding: "20px 0",
  };

  return (
    <div style={styleDiv}>
      <h2 style={style}>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};
export default Post;
