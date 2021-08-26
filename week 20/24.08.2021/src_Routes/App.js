import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutScreen from "./screens/AboutScreen";
import ContactsScreen from "./screens/ContactsScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import ServicesScreen from "./screens/ServicesScreen";
import WorksScreen from "./screens/WorksScreen";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      {/* <header></header>
      <main></main>
      <footer></footer> */}
      <Router>
        <Header />
        {/* <Main> */}
        <main>
          <Switch>
            {/* Home */}
            <Route exact path="/" component={HomeScreen}></Route>
            {/* News */}
            <Route exact path="/news" component={NewsScreen}></Route>
            {/* Services */}
            <Route exact path="/services" component={ServicesScreen}></Route>
            {/* Works */}
            <Route exact path="/works" component={WorksScreen}></Route>
            {/* About */}
            <Route exact path="/about" component={AboutScreen}></Route>
            {/* Contacts */}
            <Route exact path="/contacts" component={ContactsScreen}></Route>
          </Switch>
        </main>

        {/* </Main> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
