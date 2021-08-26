import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    count: 0,
  };

  //   this,increment = this.increment.bind.this
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <div className="one">
          <button onClick={() => this.decrement()}>-</button>
          <h2>Counter: {this.state.count}</h2>
          <button onClick={() => this.increment()}>+</button>
        </div>
      </>
    );
  }
}
