import React, { useState } from "react";

const Logo = () => {
  let style = {
    width: "100%",
    textAlign: "left",
    backgroundColor: "white",
  };

  let path = "logo.png";

  return (
    <div style={style}>
      <img src={path} alt="" />
    </div>
  );
};
export default Logo;
