import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutScreen from "./screens/AboutScreen";
import ContactsScreen from "./screens/ContactsScreen";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import TeamMember from "./screens/TeamMemberScreen";
// import {} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={HomeScreen}></Route>
          {/* About */}
          <Route exact path="/about" component={AboutScreen}></Route>
          {/* Services */}
          <Route exact path="/about/:id" component={TeamMember}></Route>
          {/* Contacts */}
          <Route exact path="/services" component={ServicesScreen}></Route>
          {/* Contacts */}
          <Route exact path="/contacts" component={ContactsScreen}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Switch>
//           {/* Home */}
//           <Route exact path="/">
//             <HomeScreen />
//           </Route>
//           {/* About */}
//           <Route exact path="/about">
//             <AboutScreen />
//           </Route>
//           {/* Services */}
//           <Route exact path="/services">
//             <ServicesScreen />
//           </Route>
//           {/* Contacts */}
//           <Route exact path="/contacts">
//             <ContactsScreen />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }
