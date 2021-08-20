import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Counter extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("Counter1: render");
    return (
      <>
        <h2>Counter 1</h2>
        <p>Button Clicked: {this.state.count} times</p>
        <CounterButton someFunc={() => this.increment()} />
      </>
    );
  }
  componentDidMount() {
    console.log("Counter1: componentDidMount");
  }
  componentDidUpdate() {
    console.log("Counter1: componentDidUpdate");
  }
}

export default Counter;
