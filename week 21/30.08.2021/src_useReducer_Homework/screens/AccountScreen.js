import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
import "./AccountScreen.css";

const AccountScreen = () => {
  useEffect(() => {
    document.body.classList.remove("body-global", "body-home");
    document.body.classList.add("body-account");
    return () => {
      document.body.classList.remove("body-account");
      document.body.classList.add("body-global");
    };
  }, []);

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
