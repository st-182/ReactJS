import React from "react";
import Link from "next/link";
import style from "../../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>LOGO</div>
        <nav>
          <ul className={style.navigation}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/posts/post">Single Post</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* //style */}
      {/* <style jsx>
        {`
          header {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: gray;
          }
        `}
      </style> */}
    </>
  );
};

export default Header;
