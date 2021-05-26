import React from "react";
import "./Login.css";


const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log(response);
      // document.location.replace('/contProfile');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

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
                  <a className="btn" href="/login">
                    Log In
                  </a>
                  {" "} {/* Adds whitespace between two buttons*/}
                  <a className="btn" href="/signup">
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
                  <a href="/signup">Don't have an account? Register here!</a>
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