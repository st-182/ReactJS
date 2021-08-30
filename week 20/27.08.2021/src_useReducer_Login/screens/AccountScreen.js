import React, { useContext } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
const AccountScreen = () => {
  const context = useContext(UserContext);
  const { state, dispatch } = context;

  const history = useHistory();

  return (
    <div>
      <h1>Account</h1>
      {!state.user.name ? (
        <p>please login first</p>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "logout" });
            history.push("/");
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default AccountScreen;
