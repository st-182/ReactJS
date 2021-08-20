import React, { useEffect, useState, useRef } from "react";
import User from "./User";

const Users = () => {
  //Hooks
  // --state
  const [users, setUsers] = useState([]);
  //   const [count, setCount] = useState(0);
  // --effect
  //   let isInitiakMount = useRef(true);
  useEffect(() => {
    console.log("users.length ", users.length, !users.length);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const deleteFunc = (id) => {
    //fetch (`api/users/${id}`, {method: `Delete`})
    const usersAfterDelete = users.filter((user) => user.id !== id);
    setUsers(usersAfterDelete);
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <>
          <User user={user} action={deleteFunc} />
        </>
      ))}
    </div>
  );
};

export default Users;
