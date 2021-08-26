import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./AddingStylesInCreateReactApp/BEM/Cards";
import CardBootstrap from "./AddingStylesInCreateReactApp/Bootstrap/Cards";
import Hero from "./AddingStylesInCreateReactApp/CSSmodules/Hero/Hero";
import StyledHero from "./AddingStylesInCreateReactApp/StyledComponents/Hero";
import "./global.css";

function App() {
  let cardItemArray = [
    {
      title: "One",
      content: "Best service ever!",
      buttonText: "Learn More!",
    },
    {
      title: "Two",
      content: "Best price ever!",
      buttonText: "Learn More!",
    },
    {
      title: "Tree",
      content: "Best support ever!",
      buttonText: "Learn More!",
    },
  ];
  return (
    <main className="App">
      {/* BEM */}
      {/* <Cards cardItemArray={cardItemArray} sectionTitle="Services!" /> */}
      {/* CSS Modules */}
      {/* <Hero /> */}
      {/* <StyledHero /> */}
      <CardBootstrap />
    </main>
  );
}

export default App;
