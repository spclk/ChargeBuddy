import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

  const history = useHistory();

  // initial state set to empty strings
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  // gathering data from forms
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  // adding data to the database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const loggedIN = await axios.get("/api/user");

    // redirecting user to home page
    if (loggedIN.data) {
      history.push("/home");
    }
  };

  return (
    <main>
      <div className="container"> {/* without this container, card would take up the whole page */}
        <div className="row">
          <div className="col s12">
            <div className="card card-login">
              {/* left side content begins here*/}
              <div className="center-align card-login-splash">
                <div className="wrapper">
                  <h3 className="">Account</h3>
                  <a className="btn" href="/login">
                    Log In
                  </a>
                  {" "} {/* Adds whitespace between two buttons*/}
                  <a className="btn" href="/signup">
                    Register
                  </a>
                </div>
                <img className="responsive-img"
                  src="./images/charger.jpeg"
                  alt=""
                />
              </div>
              {/* right side content begins here*/}
              <div className="card-content">
                <span className="card-title">Log In</span>
                <form>
                  <div className="input-field">
                    <input id="username" type="text" className="validate" />
                    <label for="username">Email</label>
                  </div>
                  <div className="input-field">
                    <input id="password" type="password" className="validate" />
                    <label for="password">Password</label>
                  </div>
                  <a href="/signup">Don't have an account? Register here!</a>
                  <br />
                  <br />
                  <div>
                    <input className="btn right" type="submit" value="Log In" />
                    <a href="/container" className="btn-flat">
                      Back
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;