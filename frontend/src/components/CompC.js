import React, { useContext } from "react";
import { APIinContext } from "../screens/HomeScreen";

const CompC = () => {
  const APIDataContext = useContext(APIinContext);
  const { API_State, API_dispatch } = APIDataContext;
  return (
    <>
      <h2>CompC</h2>

      <button onClick={() => API_dispatch({ type: "posts" })}>Posts</button>
    </>
  );
};

export default CompC;
