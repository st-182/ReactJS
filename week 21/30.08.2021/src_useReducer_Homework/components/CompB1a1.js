import React from "react";
import { useContext } from "react";
import { APIinContext } from "../screens/HomeScreen";

const CompB1a1 = () => {
  const context = useContext(APIinContext);
  const { API_State, API_dispatch } = context;
  return (
    <>
      <button onClick={() => API_dispatch({ type: "comments" })}>
        Comments
      </button>
    </>
  );
};

export default CompB1a1;
