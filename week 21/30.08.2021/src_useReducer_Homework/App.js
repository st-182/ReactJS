// import Counter from './components/Counter';
import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/page/Footer";
import Header from "./components/page/Header";

import AccountScreen from "./screens/AccountScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";

//Context
export const UserContext = createContext();

//Global state
const initialState = { user: { name: "", posts: 3 } };
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: { name: action.name } };
    case "logout":
      return { user: { name: "" } };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/account" component={AccountScreen} />
              <Route exact path="/registration" component={RegisterScreen} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
