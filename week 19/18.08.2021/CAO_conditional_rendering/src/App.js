import React from "react";
import Button from "./components/Button";
import InfoHero from "./components/InfoHero";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Button hasIcon="true" />
      </main>
      <footer>
        <InfoHero title="Title" subtitle="text text text" />
      </footer>
    </>
  );
}

export default App;
