import React from "react";
import { useContext } from "react";
import { APIinContext } from "../screens/HomeScreen";

const CompA1b = () => {
  const context = useContext(APIinContext);
  const { API_State, API_dispatch } = context;
  return (
    <>
      <h4>CompA1b</h4>

      <button
        onClick={() => {
          API_dispatch({ type: "-" });
          console.log(API_State);
        }}
      >
        Less
      </button>
    </>
  );
};

export default CompA1b;
