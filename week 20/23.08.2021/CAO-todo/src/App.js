import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [inputElement, setInputElement] = useState("");
  const [todos, setTodos] = useState([]);
  const writeToDoToLocalStorage = () => {
    setTodos(todos.length !== 0 ? [...todos, inputElement] : [inputElement]);
  };

  useEffect(() => {
    if (todos.length === 0) {
      const json = localStorage.getItem("notes");
      const savedNotes = JSON.parse(json);
      if (savedNotes) {
        setTodos([...savedNotes]);
      }
    }
    const json = JSON.stringify(todos);
    localStorage.setItem("notes", json);
    return () => {};
  }, [todos]);

  return (
    <>
      <header></header>
      <main>
        <button onClick={() => localStorage.removeItem("notes")}>
          Remove from local
        </button>
        <h1>Create TO-DO</h1>
        <input type="text" onChange={(e) => setInputElement(e.target.value)} />
        <button onClick={writeToDoToLocalStorage}>Add</button>
        {todos.map((todo) => (
          <Todo info={todo} />
        ))}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
