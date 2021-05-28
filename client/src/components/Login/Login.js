import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login(props) {

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

  // logging user in
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //hit the server with a post request containing the email and password
    const loggedIN = await axios.post("/api/user/login", details);
    props.setUser(loggedIN.data)
    console.log(loggedIN)
    // redirecting user to account page
    if (loggedIN.data) {
      history.push("/account");
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
                <form onSubmit={(event) => handleFormSubmit(event)} >
                  <div className="input-field">
                    <input name="email" id="username" type="text" className="validate"
                      onChange={(e) => handleInputChange(e)} />
                    <label htmlFor="username">Email</label>
                  </div>
                  <div className="input-field">
                    <input name="password" id="password" type="password" className="validate"
                      onChange={(e) => handleInputChange(e)} />
                    <label htmlFor="password">Password</label>
                  </div>
                  <a href="/signup">Don't have an account? Register here!</a>
                  <br />
                  <br />
                  <div>
                    <input className="btn right" type="submit" value="Log In"
                    />
                    <a href="/container" className="btn-flat">Back</a>
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