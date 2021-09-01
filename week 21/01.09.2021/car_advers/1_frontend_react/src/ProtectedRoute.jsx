import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import LogInScreen from "./screens/LogInScreen";
import MyAccountScreen from "./screens/MyAccountScreen";

const ProtectedRoute = () => {
  const { state } = useContext(UserContext);

  const history = useHistory();

  //new useEffect
  useEffect(() => {
    if (!state.user) {
      history.push("/login");
    }
  }, [state.user, history]);

  //  here was useEffect which was moved to Header

  return <>{state.user ? <MyAccountScreen /> : ""}</>;
};

export default ProtectedRoute;
