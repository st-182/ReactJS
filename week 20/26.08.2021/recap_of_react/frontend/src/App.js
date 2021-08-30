import ClassCounter from "./components/Class/ClassCounter";
import FuncCounter from "./components/Function/FuncCounter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Function/Header";
import Main from "./components/Function/Main";
import Footer from "./components/Function/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <FuncCounter /> */}

      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
