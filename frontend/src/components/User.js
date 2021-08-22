import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.login}</p>
    </div>
  );
};

export default User;
