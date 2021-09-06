import React from "react";
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>&copy; {new Date().getFullYear()}</footer>
  );
};

export default Footer;
