// import Counter from './components/Counter';
import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";

//Context
export const UserContext = createContext();

function App() {
  return (
    <>
      <h1>Components</h1>
      <CompA />
      <CompB />
      <CompC />
    </>
  );
}

export default App;
