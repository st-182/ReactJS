import React from "react";
import Button from "./Button";
import classes from "./HeaderImage.module.css";
const HeaderImage = () => {
  return (
    <div className={classes.div}>
      <h1>Title</h1>
      <p>Some text in two lines, see more examples down here.</p>
      <Button />
    </div>
  );
};

export default HeaderImage;
