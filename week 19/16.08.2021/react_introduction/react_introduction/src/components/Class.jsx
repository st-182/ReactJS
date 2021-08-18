import React, { useState } from "react";

class CounterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={() => this.clickHandler()}></button>;
  }
}
export default CounterInput;
