import React, { Component } from "react";
import "./ClassCounter.css";

export class ClassTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todo, todolist } = this.props;
    return (
      <ul key={todo.id}>
        <li>
          <strong>{todolist}</strong>
        </li>
        <li>{todo.title}</li>
        <li>{todo.completed ? "Yes" : "No"}</li>
      </ul>
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
export default ClassTodo;
