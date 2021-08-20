import React, { Component } from "react";
import "./Greeting.css";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      age: "",
      message: "",
    };
  }
  submitHandler(e) {
    e.preventDefault();
    const { name, surname, age } = this.state;
    console.log(name, surname, age);
    +age >= 18 && name !== "" && surname !== ""
      ? this.setState({
          message: `Welcome, ${name} ${surname}, registration is successful!`,
          name: "",
          surname: "",
          age: "",
        })
      : this.setState({
          message:
            +age < 18
              ? `Dear, ${name} ${surname}, you have to be at least 18 years old!`
              : name === ""
              ? `Dear user, you have to enter name!`
              : surname === ""
              ? `Dear user, you have to enter surname!`
              : "",
          name: "",
          surname: "",
          age: "",
        });
  }
  render() {
    return (
      <div>
        <h2>Welcome to our dating site!</h2>
        <p>Please enter your information.</p>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <div className="form-control">
            <label htmlFor="">Your name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Your surname</label>
            <input
              type="text"
              value={this.state.surname}
              onChange={(e) => this.setState({ surname: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Your age</label>
            <input
              type="text"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
