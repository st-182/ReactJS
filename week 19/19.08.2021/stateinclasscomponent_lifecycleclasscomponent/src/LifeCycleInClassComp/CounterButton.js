import React, { Component } from "react";

class CounterButton extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("CounterButton: render");
    return <button onClick={() => this.props.someFunc()}>+1</button>;
  }
  componentDidMount() {
    console.log("CounterButton: componentDidMount");
  }
  componentDidUpdate() {
    console.log("CounterButton: componentDidUpdate");
  }
}

export default CounterButton;
