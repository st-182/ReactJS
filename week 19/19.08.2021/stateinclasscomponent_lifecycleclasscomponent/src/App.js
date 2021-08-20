import React from "react";
import Nav from "./ConditionalRendering/Nav";
import Counter1 from "./LifeCycleInClassComp/Counter1";
// import Users from "./Lists/Users";
// import Greeting from "./StateInClassComponent/Greeting";

function App() {
  return (
    <>
      <header>
        <div id="logo">LOGO</div>
        {/* Conditional Rendering */}
        <Nav />
      </header>
      <main>
        {/* <Users /> */}
        {/* <Greeting /> */}
        <Counter1 />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
