import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";

const LogInScreen = () => {
  const { state } = useContext(UserContext);
  const user = useRef("");

  const submitedForm = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    localStorage.setItem("User", e.target[0].value);
  };

  const logOut = () => {
    localStorage.removeItem("User");
  };

  //Hooks
  //state
  //-local
  //login form
  const [logInEmail, setLogInEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log(logInEmail, password);

    axios
      .post("http://localhost:5000/api/users/login", {
        email: logInEmail,
        password: password,
      })
      .then((res) => console.log(res));
  };
  return (
    <>
      {/* <main>
        <form onSubmit={submitedForm}>
          <input type="text" ref={user} />
          <input type="submit" value="Connect" />
        </form>
        {state.user ? <button onClick={logOut}>LogOut</button> : ""}
      </main> */}
      <main>
        <div className="container">
          <section>
            <h1 className="headline-1">Sign up/ Log In</h1>
          </section>

          <div className="login-signup-container">
            <section id="login" className="card-shadow">
              <h2>
                <span>Have account?</span> Log In!
              </h2>

              <form id="logInForm" className="form" onSubmit={login}>
                <div className="form-control">
                  <label className="form-label" htmlFor="loginEmail">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="loginEmail"
                    required
                    value={logInEmail}
                    onChange={(e) => setLogInEmail(e.target.value)}
                    autoComplete
                  />
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    id="loginPassword"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <input
                    type="submit"
                    value="Log In"
                    className="btn-primary btn-primary-submit"
                  />
                </div>
              </form>
              <p
                id="loginMessage"
                className="hidden form-message form-message-danger"
              ></p>
            </section>
            <section id="signup" className="card-shadow">
              <h2>
                <span>New user?</span> Sign Up!
              </h2>

              <form id="signUpForm" className="form">
                <div className="form-control">
                  <label className="form-label" htmlFor="signUpName">
                    Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="signUpName"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="signUpSurname">
                    Surname
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="signUpSurname"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="signUpEmail">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="signUpEmail"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="signUpPassword">
                    Password
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    id="signUpPassword"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="signUpConfirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    id="signUpConfirmPassword"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn-primary btn-primary-submit"
                  />
                </div>
              </form>
              <p
                id="signUpMessage"
                className="hidden form-message form-message-danger"
              ></p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogInScreen;
