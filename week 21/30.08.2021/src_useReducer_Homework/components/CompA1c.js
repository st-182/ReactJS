import React from "react";
import { useContext } from "react";
import { APIinContext } from "../screens/HomeScreen";

const CompA1c = () => {
  const context = useContext(APIinContext);
  const { API_State, API_dispatch } = context;
  return (
    <>
      <button onClick={() => API_dispatch({ type: "todos" })}>Todos</button>
    </>
  );
};

export default CompA1c;
