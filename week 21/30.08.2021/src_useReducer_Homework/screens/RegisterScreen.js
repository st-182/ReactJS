import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
const RegisterScreen = () => {
  const context = useContext(UserContext);
  const { dispatch } = context;

  const [name, setName] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "login", name: name });
    //redirect to account page
    history.push("/account");
  };

  return (
    <div>
      <h2>Register page</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="Name"></label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterScreen;
