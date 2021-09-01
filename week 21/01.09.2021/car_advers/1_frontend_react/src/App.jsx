import { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./ProtectedRoute";
//Pages
import HomeScreen from "./screens/HomeScreen";
import LogInScreen from "./screens/LogInScreen";
import "./styles/1_resets.css";
import "./styles/2_utilities.css";
import "./styles/3_header.css";
import "./styles/4_index.css";
import "./styles/4_login.css";
import "./styles/4_my-account.css";

const initialState = { user: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: "" };

    default:
      return state;
  }
};

export const UserContext = createContext();

function App() {
  //global state (is authenticated?)
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/login" component={LogInScreen} />
            <Route path="/account" component={ProtectedRoute} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
