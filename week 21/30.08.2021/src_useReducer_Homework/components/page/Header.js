import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <header>
      {/* <div>LOGO</div> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!state.user.name && (
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          )}
          <li>
            <Link to="/account">
              {!state.user.name ? "Login" : "User: " + state.user.name}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
