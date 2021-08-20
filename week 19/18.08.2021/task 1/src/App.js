import React, { useState } from "react";
import ReactDOM from "react-dom";
import ClassButton from "./components/Class/ClassButton";
import ClassDiv from "./components/Class/ClassDiv";
import FuncButton from "./components/Function/FuncButton";
import FuncDiv from "./components/Function/FuncDiv";

function App() {
  const info = {
    heading: "One",
    text: "two",
    btnText: "Click!",
  };

  return (
    <div className="App">
      <FuncDiv info={info} heading="Function" text="two" btnText="Click!" />
      <ClassDiv heading="Class" text="two" btnText="Click!" />
    </div>
  );
}

export default App;
