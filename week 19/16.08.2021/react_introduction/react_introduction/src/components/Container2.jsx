import React, { useState } from "react";
import Navigation from "./Navigation";
import Navigation2 from "./Navigation2";
import NavLink from "./NavLink";
import NestedPost from "./NestedPost";
import Post from "./Post";
import SubPost from "./SubPost";

const Container2 = () => {
  let style = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // gap: "20px",
    margin: "20px 0",
  };

  return (
    <div style={style}>
      <NestedPost
        heading="The world"
        text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <Navigation2 />
    </div>
  );
};
export default Container2;
