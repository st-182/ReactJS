import React, { useContext, useEffect, createContext, useReducer } from "react";
import { UserContext } from "../App";
import "./HomeScreen.css";

import axios from "axios";
import CompA from "../components/CompA";
import CompB from "../components/CompB";
import CompC from "../components/CompC";
import Output from "../components/output/Output";

export const APIinContext = createContext();

const API_Initial_State = { data: [], items: 3 };

const API_Management = (state, action) => {
  switch (action.type) {
    case "comments":
      const comments = axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      return { ...state, data: comments.data };
    case "posts":
      let data = [];

      if (data.length <= 0) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((posts) => {
            data.push(...posts.data);
          });
      }

      return { ...state, data: data };
    case "todos":
      let todos = axios.get("https://jsonplaceholder.typicode.com/todos");
      return { ...state, data: todos.data };
    case "+":
      return { ...state, items: state.items + 1 };
    case "-":
      return { ...state, items: state.items - 1 };
    default:
      return state;
  }
};

const HomeScreen = () => {
  useEffect(() => {
    document.body.classList.remove("body-global", "body-account");
    document.body.classList.add("body-home");
    return () => {
      document.body.classList.remove("body-home", "body-account");
      document.body.classList.add("body-global");
    };
  }, []);

  const [API_State, API_dispatch] = useReducer(
    API_Management,
    API_Initial_State
  );

  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      <APIinContext.Provider value={{ API_State, API_dispatch }}>
        <div className="grid">
          <CompA />
          <CompB />
          <div></div>
          <CompC />
        </div>
        <Output />
      </APIinContext.Provider>

      {/*  */}
    </div>
  );
};

export default HomeScreen;
