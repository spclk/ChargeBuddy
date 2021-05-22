import React from "react";
import "./style.css";

function Register() {
  return (
    <main role="main" id="MainContent">
      <div className="section container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card login-wrapper">
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  accept-charset="UTF-8"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h4 className="center">Create Account</h4>

                  <div className="input-field">
                    <label for="FirstName">First Name</label>
                    <input
                      type="text"
                      name="customer[first_name]"
                      id="FirstName"
                      autofocus
                    />
                  </div>

                  <div className="input-field">
                    <label for="LastName">Last Name</label>
                    <input
                      type="text"
                      name="customer[last_name]"
                      id="LastName"
                    />
                  </div>

                  <div className="input-field">
                    <label for="Email">Email</label>
                    <input
                      type="email"
                      name="customer[email]"
                      id="Email"
                      className=""
                      value=""
                      spellcheck="false"
                      autocomplete="off"
                      autocapitalize="off"
                    />
                  </div>

                  <div className="input-field">
                    <label for="CreatePassword">Password</label>
                    <input
                      type="password"
                      name="customer[password]"
                      id="CreatePassword"
                      className=""
                    />
                  </div>

                  <p>
                    <input
                      type="submit"
                      value="Create"
                      className="btn-large z-depth-0"
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
