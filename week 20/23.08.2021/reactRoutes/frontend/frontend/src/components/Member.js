import React from "react";
import { Link } from "react-router-dom";

const User = ({ id, user }) => {
  return (
    <ul>
      <li>{user.name}</li>
      <li>
        <Link to={`/about/${id}`}>More about user</Link>
      </li>
    </ul>
  );
};

export default User;
