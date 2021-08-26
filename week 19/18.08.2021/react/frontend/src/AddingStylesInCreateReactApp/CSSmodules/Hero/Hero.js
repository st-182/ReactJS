import React from "react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="grid">
      <h1>Hello!</h1>
      <Button primary />
      <Button secondary />
      <Button />
      <Button secondary />
    </div>
  );
};

export default Hero;
