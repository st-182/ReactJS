import React, { useEffect, useState } from "react";
import User from "./User";

const Main = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length === 0) {
      document.title = `Github Users!`;
      fetch(`https://api.github.com/users/st-182/following`)
        .then((response) => response.json())
        .then((following) => {
          setUsers(following);
          console.log(users);
        });
    }
  }, []);
  // useEffect [] - only mount, [users] - when users changes
  return (
    <>
      {users.length === 0 ? (
        <>
          <h1>Loading!</h1>
          <div className="grid">
            {users.map((user) => (
              <User user={user} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>I am following these users on github!</h1>
          <div className="grid">
            {users.map((user) => (
              <User user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
