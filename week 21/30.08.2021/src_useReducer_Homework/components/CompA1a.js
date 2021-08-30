import React from "react";
import { useContext } from "react";
import { APIinContext } from "../screens/HomeScreen";

const CompA1a = () => {
  const context = useContext(APIinContext);
  const { API_State, API_dispatch } = context;
  return (
    <>
      <button
        onClick={() => {
          API_dispatch({ type: "+" });
        }}
      >
        More
      </button>
    </>
  );
};

export default CompA1a;
