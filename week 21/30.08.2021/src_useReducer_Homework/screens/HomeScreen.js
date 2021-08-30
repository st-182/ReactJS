import React, { useContext, useEffect, createContext, useReducer } from "react";
import { UserContext } from "../App";
import "./HomeScreen.css";

import axios from "axios";
import CompA from "../components/CompA";
import CompB from "../components/CompB";
import CompC from "../components/CompC";
import Output from "../components/output/Output";

export const APIinContext = createContext();

const API_Initial_State = {
  data: [],
  items: 3,
  posts: [],
  comments: [],
  todos: [],
};

const API_Management = (state, action) => {
  switch (action.type) {
    case "comments":
      if (state.comments.length > 0) {
        return { ...state, data: state.comments };
      }
      return { ...state, comments: action.payload };
    case "posts":
      if (state.posts.length > 0) {
        return { ...state, data: state.posts };
      }
      return { ...state, posts: action.payload };
    case "todos":
      if (state.todos.length > 0) {
        return { ...state, data: state.todos };
      }
      return { ...state, todos: action.payload };
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
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => API_dispatch({ type: "comments", payload: res.data }));
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => API_dispatch({ type: "todos", payload: res.data }));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => API_dispatch({ type: "posts", payload: res.data }));

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
