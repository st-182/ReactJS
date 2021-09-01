import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Header = () => {
  //Hooks
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("User")) {
      //showing account page
      dispatch({ type: "LOGIN", payload: localStorage.getItem("User") });
    } else {
      // redirection to login screen
      // history.push("./login");
    }

    return () => {};
  }, []);

  return (
    <div className="container">
      <div>Car Adverts</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">{state.user ? "LogOut" : "LogIn"}</Link>
          </li>

          {state.user ? (
            <li>
              <Link to="/account">Account</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
