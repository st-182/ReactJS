import React, { useState } from "react";
import SubPost from "./SubPost";

const NestedPost = ({ heading, text }) => {
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
      <SubPost
        heading="Is gonna roll me!"
        text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
};
export default NestedPost;
