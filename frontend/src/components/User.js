import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.avatar_url} alt={user.login} />
    </div>
  );
};

export default User;
