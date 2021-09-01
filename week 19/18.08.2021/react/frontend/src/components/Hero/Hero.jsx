import React from "react";
import Button from "../Button/Button";
import { ul, li, a, hover } from "./Hero.style";

const Hero = () => {
  return (
    <div>
      <div>Logo</div>
      <nav>
        <ul style={ul}>
          <li style={li}>
            <a href="/" style={a}>
              Home
            </a>
          </li>
          <li style={li}>
            <a href="/" style={a}>
              WOW
            </a>
          </li>
          <li style={li}>
            <a href="/" style={a}>
              ONE
            </a>
          </li>
          <li style={li}>
            <a href="/" style={a}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
