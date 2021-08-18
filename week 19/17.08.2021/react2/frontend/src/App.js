import "./App.css";
import ClassCounter from "./components/Class/ClassCounter";
import ClassTodos from "./components/Class/ClassTodos";
import Greeting from "./components/Function/FunctionCounter";

function App() {
  return (
    <div className="App">
      <Greeting />
      <ClassCounter />
      <ClassTodos />
    </div>
  );
}

export default App;
