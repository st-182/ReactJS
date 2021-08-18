import React, { Component } from "react";
import "./ClassCounter.css";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, message: "" };
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  decrement = () => this.setState({ count: this.state.count - 1 });

  ClickHandler = (number) => {
    this.setState({ count: this.state.count + number });
    console.log(this.state.count);
    if (this.state.count > 5) {
      this.setState({ message: "YES!" });
    } else {
      this.setState({ message: "" });
    }
  };

  //   componentDidUpdate() {

  //   }

  render() {
    console.log(`render`);
    return (
      <div>
        <h2>Class Component</h2>
        <h3>Counter</h3>
        <h4>Count: {this.state.count}</h4>
        <button onClick={() => this.ClickHandler(1)}>+</button>
        <button onClick={() => this.ClickHandler(-1)}>-</button>
        <p>{this.state.message}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log(`Creation`);
  }
  componentDidUpdate() {
    console.log(`Update`);
  }
}
export default ClassCounter;
