import React from "react";
import Products from "./components/Products";
import Counter from "./Hooks/Counter";
import Form from "./Hooks/Form";
import MoodChecker from "./Hooks/MoodChecker";
import Users from "./Hooks/Users";

function App() {
  return (
    <>
      <header></header>
      <main>
        {/* <Counter /> */}
        {/* <Users /> */}
        {/* <Form /> */}
        {/* <MoodChecker /> */}
        <Products />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
