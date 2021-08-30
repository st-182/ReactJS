import React, { useContext } from "react";
import { APIinContext } from "../screens/HomeScreen";

const CompC = () => {
  const APIDataContext = useContext(APIinContext);
  const { API_State, API_dispatch } = APIDataContext;
  return (
    <>
      <button onClick={() => API_dispatch({ type: "posts" })}>Posts</button>
    </>
  );
};

export default CompC;
