import React from "react";
import Nav from "./ConditionalRendering/Nav";
import Users from "./Lists/Users";

function App() {
  return (
    <>
      <header>
        <div id="logo">LOGO</div>
        <Nav /> {/* Conditional Rendering*/}
      </header>
      <main>
        <Users />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
