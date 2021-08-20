import React from "react";
import Button from "./components/header/Button";
import HeaderImage from "./components/header/HeaderImage";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <header></header>
      <main>
        <HeaderImage />
        <Portfolio />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
