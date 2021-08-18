import React, { useState } from "react";
import NavLink from "./NavLink";

const Navigation2 = () => {
  let style = {
    width: "100%",
    textAlign: "left",
    backgroundColor: "rgb(170, 169, 169)",
    // display: "flex",
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
export default Navigation2;
