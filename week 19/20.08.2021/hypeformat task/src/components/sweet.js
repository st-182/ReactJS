import React from "react";
import ReactDOM from "react-dom";
import sweetalert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./styles.css";

const MySwal = withReactContent(sweetalert);

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            this.props.onChangeValue(this.state.count + 1);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button
          onClick={() => {
            MySwal.fire({
              title: "react swal",
              html: (
                <Count
                  onChangeValue={(value) => {
                    this.setState({ value });
                  }}
                />
              ),
            }).then(() => {
              console.log("result value: ", this.state.value);
            });
          }}
        >
          show
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
