import React from "react";

function Login() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="card card-login">
              <div className="card-login-splash">
                <div className="wrapper">
                  <h3>Account</h3>

                  <a className="btn" href="#!">
                    Sign In
                  </a>
                  <a className="btn" href="#!">
                    Register
                  </a>
                </div>

                <img
                  src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-cave.jpg?v=13127282243134125143"
                  alt=""
                />
              </div>
              <div className="card-content">
                <span className="card-title">Log In</span>
                <form>
                  <div className="input-field">
                    <input id="username" type="text" className="validate" />
                    <label for="username">Username</label>
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
