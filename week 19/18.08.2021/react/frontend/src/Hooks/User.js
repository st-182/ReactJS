import React, { useEffect } from "react";

const User = ({ user, action }) => {
  useEffect(() => {
    console.log(`User useEffect`);
  });
  return (
    <ul key={user.id} className="item" id={user.id}>
      <li>
        <strong>{user.name}</strong>
      </li>
      <li>{user.email}</li>
      <li>
        {user.address.street}, {user.address.street}
      </li>
      <li>{user.phone}</li>
      <button className="button" onClick={() => action(user.id)}>
        Delete
      </button>
    </ul>
  );
};

export default User;
