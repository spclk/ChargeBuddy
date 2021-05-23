import React from "react";
import "./style.css";

function Login() {
  return (
    <main>
      <div className="container"> {/* without this container, card would take up the whole page */}
        <div className="row">
          <div className="col s12">
            <div className="card card-login">
              {/* left side content */}
              <div className="card-login-splash">
                <div className="wrapper">
                  <h3>Account</h3>
                  <a className="btn" href="#!">
                    Sign In
                  </a>
                  {" "} {/* Adds whitespace between two buttons*/}
                  <a className="btn" href="#!">
                    Register
                  </a>
                </div>
                <img
                  src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-cave.jpg?v=13127282243134125143"
                  alt=""
                />
              </div>
              {/* right side content */}
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
                  <a href="#!">Forgot Password?</a>
                  <br />
                  <br />
                  <div>
                    <input className="btn right" type="submit" value="Log In" />
                    <a href="#!" className="btn-flat">
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
