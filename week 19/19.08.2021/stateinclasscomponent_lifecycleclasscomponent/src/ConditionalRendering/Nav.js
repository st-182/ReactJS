import React, { Component } from "react";

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      productInCart: "2",
    };
  }

  LogIn() {
    this.setState({ auth: !this.state.auth });
  }

  LogOut() {
    this.setState({ auth: !this.state.auth });
  }

  render() {
    let cart;
    switch (this.state.productInCart) {
      case "0":
        cart = <li>Cart 1</li>;
        break;
      case "1":
        cart = <li>Cart 2</li>;
        break;
      case "2":
        cart = <li>Cart 3</li>;
        break;
      default:
        cart = <li>Cart AAA</li>;
        break;
    }
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contacts</li>
          {this.state.auth ? (
            <li>My account</li>
          ) : (
            <li onClick={() => this.LogIn()}>Log in / SignUp</li>
          )}
          {this.state.auth && <li onClick={() => this.LogOut()}>Logout</li>}
          {cart}
        </ul>
      </nav>
    );
  }
}

export default Nav;
