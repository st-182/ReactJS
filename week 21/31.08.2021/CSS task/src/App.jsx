// import Counter from './components/Counter';
import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./components/Content";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Header from "./components/Header";
import SignIn from "./components/SignIn";

//importing styles
import { StyledContent } from "./components/Content";
import { StyledFeature as Feature1Styled } from "./components/Feature1";
import { StyledFeature as Feature2Styled } from "./components/Feature2";
import { StyledFeature as Feature3Styled } from "./components/Feature3";
import { StyledHeader } from "./components/Header";
import { StyledSignIn } from "./components/SignIn";

import styled from "styled-components";
const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(6, 95px);
  grid-auto-rows: auto;
  @media (min-width: 768px) {
    ${StyledContent} {
    }
    ${Feature1Styled} {
      grid-column: span 3;
    }
    ${Feature2Styled} {
      grid-column: span 3;
    }
    ${Feature3Styled} {
      grid-column: span 3;
    }
    ${StyledHeader} {
    }
    ${StyledSignIn} {
      grid-column: span 3;
    }
  }

  @media (min-width: 1024px) {
    ${StyledContent} {
      grid-row: 3/5;
    }
    ${Feature1Styled} {
      grid-column: span 2;
    }
    ${Feature2Styled} {
      grid-column: span 2;
    }
    ${Feature3Styled} {
      grid-column: span 2;
    }
    ${StyledHeader} {
    }
    ${StyledSignIn} {
      grid-column: span 6;
      grid-row: 2;
    }
  }
`;

//Context
export const UserContext = createContext();

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Content />
        <SignIn />
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </StyledMain>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
