import React from "react";

function Login() {
  return (
    <main>
      <div class="container">
        <div class="row">
          <div class="col s8 offset-s2">
            <div class="card card-login">
              <div class="card-login-splash">
                <div class="wrapper">
                  <h3>Account</h3>

                  <a class="btn" href="#!">
                    Sign In
                  </a>
                  <a class="btn" href="#!">
                    Register
                  </a>
                </div>

                <img
                  src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-cave.jpg?v=13127282243134125143"
                  alt=""
                />
              </div>
              <div class="card-content">
                <span class="card-title">Log In</span>
                <form>
                  <div class="input-field">
                    <input id="username" type="text" class="validate" />
                    <label for="username">Username</label>
                  </div>
                  <div class="input-field">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Password</label>
                  </div>

                  <a href="#!">Forgot Password?</a>

                  <br />
                  <br />
                  <div>
                    <input class="btn right" type="submit" value="Log In" />
                    <a href="#!" class="btn-flat">
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
