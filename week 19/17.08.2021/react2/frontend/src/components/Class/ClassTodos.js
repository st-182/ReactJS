import React, { Component } from "react";
import "./ClassCounter.css";
import ClassTodo from "./ClassTodo";

export class ClassTodos extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], isLoading: true };
  }

  render() {
    console.log(`render`);
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h2>Class Component</h2>
        {this.state.todos.slice(0, 5).map((todo) => (
          <ClassTodo todo={todo} todolist={`First list`} />
        ))}
        {this.state.todos.slice(6, 10).map((todo) => (
          <ClassTodo todo={todo} todolist={`Second list`} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({ todos: json, isLoading: false }));
    console.log(`Creation`);
  }
  componentDidUpdate() {
    console.log(`Update`);
  }
}
export default ClassTodos;
