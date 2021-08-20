import React, { Component } from "react";

class User extends Component {
  render() {
    const { name, email } = this.props.user;
    return (
      <ul>
        <li>{email}</li>
        <li>{name}</li>
      </ul>
    );
  }
}

export default User;
