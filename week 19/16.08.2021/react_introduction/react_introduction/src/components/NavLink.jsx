import React, { useState } from "react";

const NavLink = ({ name, path }) => {
  let styleLi = {
    width: "auto",
    padding: "20px",
    listStyle: "none",
  };
  let styleA = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <li style={styleLi}>
      <a style={styleA} href={path}>
        {name}
      </a>
    </li>
  );
};
export default NavLink;
