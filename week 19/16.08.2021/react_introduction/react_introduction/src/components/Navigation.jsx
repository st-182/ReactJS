import React, { useState } from "react";
import NavLink from "./NavLink";

const Navigation = () => {
  let style = {
    width: "100%",
    textAlign: "left",
    backgroundColor: "#aaaaaa",
    display: "flex",
    padding: "10px",
  };

  return (
    <nav>
      <ul style={style}>
        <NavLink path="#" name="Home" />
        <NavLink path="#" name="Products" />
        <NavLink path="#" name="Company" />
        <NavLink path="#" name="Contacts" />
      </ul>
    </nav>
  );
};
export default Navigation;
