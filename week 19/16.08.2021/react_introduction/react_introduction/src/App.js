import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import Container2 from "./components/Container2";
import Heading from "./components/Heading";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Heading text="Header Image" />
      <Container />
      <Container2 />
    </div>
  );
}

export default App;
